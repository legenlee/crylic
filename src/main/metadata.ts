import { app, ipcMain } from "electron";
import path from "path";
import fs from "fs";

import {
  IPC_TWO_WAY_CHANNELS,
  MANIFEST_URL,
  METADATA_DIRECTORY,
} from "../constants";
import { request } from "./lib/client";

export type VersionManifest = {
  latest: {
    release: string;
    snapshot: string;
  };
  versions: {
    id: string;
    type: "release" | "snapshot" | "old_alpha" | "old_beta";
    url: string;
    time: string;
    releaseTime: string;
    sha1: string;
    complianceLevel: number;
  }[];
};

const basePath = path.join(app.getPath("userData"), METADATA_DIRECTORY);
const manifestPath = path.join(basePath, "version_manifest.json");

const getVersions = async (): Promise<VersionManifest> => {
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  }

  return await request(MANIFEST_URL, {
    downloadPath: manifestPath,
  });
};

const getCachedVersions = (): VersionManifest => {
  if (!fs.existsSync(manifestPath)) {
    return {} as VersionManifest;
  }

  return JSON.parse(
    fs.readFileSync(manifestPath, {
      encoding: "utf-8",
    }) ?? "",
  );
};

export const registerMetadataChannels = () => {
  ipcMain.handle(IPC_TWO_WAY_CHANNELS.METADATA_GET_VERSIONS, getVersions);
  ipcMain.handle(
    IPC_TWO_WAY_CHANNELS.METADATA_GET_CACHED_VERSIONS,
    getCachedVersions,
  );
};
