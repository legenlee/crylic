import fs from "fs";
import path from "path";

import type { AssetIndex, Version, VersionManifest } from "./types";
import { request } from "../https";
import { CURRENT_OS } from "../../constants";

const RESOURCES_URL = "https://resources.download.minecraft.net";
// const LIBRARIES_URL = "https://libraries.minecraft.net";
const MANIFEST_URL =
  "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";

export const getVersionManifest = async (): Promise<VersionManifest> => {
  return await request(MANIFEST_URL);
};

export const install = async (version: Version, basePath: string) => {
  const getResourcePath = (...targetPaths: string[]) =>
    path.join(basePath, ...targetPaths);

  const safeMkdir = (targetPath: string) => {
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, {
        recursive: true,
      });
    }
  };

  const assetsPath = getResourcePath("assets");
  const librariesPath = getResourcePath("libraries");
  const clientPath = getResourcePath("versions", "minecraft", version.id);

  safeMkdir(assetsPath);
  safeMkdir(librariesPath);
  safeMkdir(clientPath);

  // Start of installing assets
  const assetIndexesPath = path.join(assetsPath, "indexes");
  const assetObjectsPath = path.join(assetsPath, "objects");

  safeMkdir(assetIndexesPath);
  safeMkdir(assetObjectsPath);

  const assetIndexPath = path.join(assetIndexesPath, version.id);

  if (!fs.existsSync(assetIndexPath)) {
    await request(version.assetIndex.url, {
      downloadPath: assetIndexPath,
    });
  }

  const assetIndex = JSON.parse(
    fs.readFileSync(assetIndexPath).toString("utf-8"),
  ) as AssetIndex;

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
  // End of installing assets

  // Start of installing libraries
  for (const value of version.libraries) {
    const downloadPath = path.join(
      librariesPath,
      value.downloads.artifact.path,
    );

    if (fs.existsSync(downloadPath)) {
      continue;
    }

    if (
      value.rules &&
      value.rules.action === "allow" &&
      value.rules.os.name !== CURRENT_OS
    ) {
      continue;
    }

    safeMkdir(
      path.join(
        librariesPath,
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
  // End of installing libraries

  // Start of installing client
  for (const [, value] of Object.entries(version.download).filter(([key]) =>
    key.startsWith("client"),
  )) {
    const fileName = value.url.split("/").pop();
    const downloadPath = path.join(clientPath, fileName);

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
