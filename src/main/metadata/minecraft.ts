import { app } from "electron";
import path from "path";
import fs from "fs";

import { Constants } from "../constants";
import { Client } from "../libs/client";

export class Minecraft {
  private static readonly _basePath = path.join(
    app.getPath("userData"),
    Constants.METADATA_DIRECTORY,
  );

  private static get _manifestPath() {
    return path.join(this._basePath, "version_manifest.json");
  }

  public static async getVersions(): Promise<VersionManifest> {
    const url = new URL(Constants.MANIFEST_URL);

    return await Client.request({
      host: url.host,
      path: url.pathname,
      method: "GET",
      downloadPath: this._manifestPath,
    });
  }

  public static getCachedVersions(): VersionManifest {
    return JSON.parse(
      fs.readFileSync(this._manifestPath, {
        encoding: "utf-8",
      }),
    );
  }
}
