export const APP_ID = "crylic";

export const CURRENT_OS =
  process.platform === "win32"
    ? "windows"
    : process.platform === "darwin"
      ? "osx"
      : "linux";
