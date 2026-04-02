import path from "node:path";
import { fileURLToPath } from "node:url";
import { app, BrowserWindow } from "electron";

const WIDTH = 1280;
const HEIGHT = 720;

const createWindow = () => {
  const win = new BrowserWindow({
    width: WIDTH,
    minWidth: WIDTH,
    height: HEIGHT,
    minHeight: HEIGHT,
    webPreferences: {
      preload: path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        "preload.js",
      ),
    },
  });

  win.loadURL("http://localhost:5173");
};

app.on("ready", () => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
