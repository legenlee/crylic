import { contextBridge, ipcRenderer } from "electron";
import { IPC_TWO_WAY_CHANNELS } from "./constants";

const manifest = {
  getVersions: () =>
    ipcRenderer.invoke(IPC_TWO_WAY_CHANNELS.METADATA_GET_VERSIONS),
  getCachedVersions: () =>
    ipcRenderer.invoke(IPC_TWO_WAY_CHANNELS.METADATA_GET_CACHED_VERSIONS),
};

contextBridge.exposeInMainWorld("main", {
  manifest,
});
