import fs from "node:fs";
import path from "node:path";

import { request } from "../https";
import {
  MinecraftVersions,
  MinecraftVersion,
  MinecraftVersionDetail,
  MinecraftAssets,
} from "./types";
import { safeMkdir } from "../fileSystem";

export interface InstallOptions {
  assetsPath?: string;
  librariesPath?: string;
  versionsPath?: string;
}

/* eslint-disable prettier/prettier */
const RESOURCES_URL = "https://resources.download.minecraft.net";
const MANIFEST_URL = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";
/* eslint-enable */

const DEFAULT_INSTALL_OPTIONS = Object.freeze<Required<InstallOptions>>({
  assetsPath: path.join(__dirname, "minecraft", "assets"),
  librariesPath: path.join(__dirname, "minecraft", "libraries"),
  versionsPath: path.join(__dirname, "minecraft", "versions"),
});

export const getVersions = async (): Promise<MinecraftVersions> => {
  return await request<MinecraftVersions>(MANIFEST_URL);
};

export const installAssets = async (
  version: MinecraftVersionDetail,
  assetsPath: string,
) => {
  safeMkdir(assetsPath);

  const assetIndexesPath = path.join(assetsPath, "indexes");
  const assetObjectsPath = path.join(assetsPath, "objects");

  safeMkdir(assetIndexesPath);
  safeMkdir(assetObjectsPath);

  const assetIndexPath = path.join(assetIndexesPath, `${version.id}.json`);

  if (!fs.existsSync(assetIndexPath)) {
    await request(version.assetIndex.url, {
      downloadPath: assetIndexPath,
    });
  }

  const assetIndex = JSON.parse(
    fs.readFileSync(assetIndexPath).toString("utf-8"),
  ) as MinecraftAssets;

  for (const value of Object.values(assetIndex.objects)) {
    const hashBase = value.hash.slice(0, 2);

    const downloadPath = path.join(assetObjectsPath, hashBase, value.hash);

    if (fs.existsSync(downloadPath)) {
      continue;
    }

    safeMkdir(path.join(assetObjectsPath, hashBase));

    try {
      await request(new URL(path.join(hashBase, value.hash), RESOURCES_URL), {
        downloadPath,
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export const installLibraries = async (
  version: MinecraftVersionDetail,
  installPath: string,
) => {
  for (const value of version.libraries) {
    const downloadPath = path.join(installPath, value.downloads.artifact.path);

    if (fs.existsSync(downloadPath)) {
      continue;
    }

    safeMkdir(
      path.join(
        installPath,
        value.downloads.artifact.path.split("/").slice(0, -1).join("/"),
      ),
    );

    try {
      await request(value.downloads.artifact.url, {
        downloadPath,
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export const install = async (
  version: MinecraftVersion,
  options: InstallOptions = DEFAULT_INSTALL_OPTIONS,
) => {
  safeMkdir(options.assetsPath);
  safeMkdir(options.librariesPath);
  safeMkdir(path.join(options.versionsPath, version.id));

  const detail = await request<MinecraftVersionDetail>(version.url, {
    downloadPath: path.join(
      options.versionsPath,
      version.id,
      `${version.id}.json`,
    ),
  });

  await installAssets(detail, options.assetsPath);
  await installLibraries(detail, options.librariesPath);

  // Start of installing client
  for (const [, value] of Object.entries(detail.download).filter(([key]) =>
    key.startsWith("client"),
  )) {
    const fileName = value.url.split("/").pop();
    const downloadPath = path.join(options.versionsPath, version.id, fileName);

    if (fs.existsSync(downloadPath)) {
      continue;
    }

    try {
      await request(value.url, {
        downloadPath: downloadPath,
      });
    } catch (err) {
      console.error(err);
    }
  }
  // End of installing client
};
