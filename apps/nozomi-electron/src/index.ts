import path from "node:path";
import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(import.meta.dirname, "preload.cjs"),
      // Set to constant value to prevent behaviour changing when electron has updated.
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  if (app.isPackaged) {
    /**
     * @todo Write bundled entry html resolve path
     */
    // win.loadFile("index.html");
  } else {
    const url = process.env.VITE_DEV_SERVER_URL;

    if (!url) {
      throw new Error(
        "Expected dev server url provided but no url provided. Please run this process through the dev script.",
      );
    }

    win.loadURL(url);
  }
}

app.on("ready", createWindow);
