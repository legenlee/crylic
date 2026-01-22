import { ipcMain } from "electron";
import { IpcCommonChannels, ipcMainHandle } from "./common/ipc";
import { install } from "./common/minecraft/installer";
import { launch } from "./common/minecraft/launcher";

export const registerMainChannel = () => {
  ipcMainHandle(IpcCommonChannels.MINECRAFT_INSTALL, (event, [version]) =>
    install(version),
  );
  ipcMainHandle(IpcCommonChannels.MINECRAFT_LAUNCH, (event, [version]) =>
    launch(JSON.parse(version)),
  );
};
