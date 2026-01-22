import { ipcMain, IpcMainInvokeEvent, ipcRenderer } from "electron";

export enum IpcCommonChannels {
  MINECRAFT_GET_VERSIONS = "minecraft:getVersions",
  MINECRAFT_INSTALL = "minecraft:install",
  MINECRAFT_LAUNCH = "minecraft:launch",
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const ipcMainHandle = (
  channel: IpcCommonChannels,
  listener: (event: IpcMainInvokeEvent, ...args: any[]) => Promise<any> | any,
) => ipcMain.handle(channel, listener);

export const ipcRendererInvoke = (channel: IpcCommonChannels, ...args: any[]) =>
  ipcRenderer.invoke(channel, args);
