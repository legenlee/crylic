// Code for bridging context between renderer and main process.
import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("nozomi", {
  ping: () => console.log("pong"),
});
