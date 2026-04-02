import { app, BrowserWindow } from "electron";
import { join } from "path";

const WIDTH = 1280;
const HEIGHT = 720;

const createWindow = () => {
  const win = new BrowserWindow({
    width: WIDTH,
    minWidth: WIDTH,
    height: HEIGHT,
    minHeight: HEIGHT,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
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
