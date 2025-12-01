import { ipcRenderer } from "electron";
import { IPC_TWO_WAY_CHANNELS } from "../constants";

/* eslint-disable prettier/prettier */
export const api = {
  metadata: {
    getVersions: () => ipcRenderer.invoke(IPC_TWO_WAY_CHANNELS.METADATA_GET_VERSIONS),
    getCachedVersions: () => ipcRenderer.invoke(IPC_TWO_WAY_CHANNELS.METADATA_GET_CACHED_VERSIONS),
  },
};
