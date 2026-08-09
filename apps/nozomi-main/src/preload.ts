// Code for bridging context between renderer and main process.
import { contextBridge } from "electron";
import type { ExposedBridge } from "./api";

contextBridge.exposeInMainWorld("nozomi", {
  ping: () => console.log("pong"),
} satisfies ExposedBridge);
