/* eslint-disable prettier/prettier */
export const MANIFEST_URL = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";

export enum IPC_TWO_WAY_CHANNELS {
  METADATA_GET_VERSIONS = "metadata:getVersions",
  METADATA_GET_CACHED_VERSIONS = "metadata:getCachedVersions",
}
