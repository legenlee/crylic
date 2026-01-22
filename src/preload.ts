import { contextBridge, ipcRenderer } from "electron";
import { IpcCommonChannels, ipcRendererInvoke } from "./common/ipc";
import { MinecraftVersionDetail } from "./common/minecraft/types";

const api = {
  minecraft: {
    install: (version: string) =>
      ipcRendererInvoke(IpcCommonChannels.MINECRAFT_INSTALL, version),
    launch: (version: MinecraftVersionDetail) =>
      ipcRendererInvoke(IpcCommonChannels.MINECRAFT_LAUNCH, version),
  },
};

ipcRenderer.on("debug", (_, args) => console.log(args));

contextBridge.exposeInMainWorld("api", api);
