import path from "path";
import { spawn } from "child_process";

import type { Argument, Rules, Version } from "./types";
import { CURRENT_OS } from "../../constants";

export type LaunchOptions = {
  assetsPath: string;
  librariesPath: string;
  nativesPath: string;
  gamePath: string;
  jrePath?: string;
  resolution?: {
    width: string;
    height: string;
  };
  username: string;
  authUUID: string;
  accessToken?: string;
  offline?: boolean;
};

enum ArgumentVariableKeys {
  NATIVES_DIRECTORY = "${natives_directory}",
  LAUNCHER_NAME = "${launcher_name}",
  LAUNCHER_VERSION = "${launcher_version}",
  CLASSPATH = "${classpath}",
  AUTH_PLAYER_NAME = "${auth_player_name}",
  VERSION_NAME = "${version_name}",
  GAME_DIRECTORY = "${game_directory}",
  ASSETS_ROOT = "${assets_root}",
  ASSETS_INDEX_NAME = "${assets_index_name}",
  AUTH_UUID = "${auth_uuid}",
  AUTH_ACCESS_TOKEN = "${auth_access_token}",
  CLIENT_ID = "${clientId}",
  AUTH_XUID = "${auth_xuid}",
  VERSION_TYPE = "${version_type}",
  RESOLUTION_WIDTH = "${resolution_width}",
  RESOLUTION_HEIGHT = "${resolution_height}",
  USER_TYPE = "${user_type}",
  QUICK_PLAY_PATH = "${quickPlayPath}",
  QUICK_PLAY_SINGLEPLAYER = "${quickPlaySingleplayer}",
  QUICK_PLAY_MULTIPLAYER = "${quickPlayMultiplayer}",
  QUICK_PLAY_REALMS = "${quickPlayRealms}",
}

const checkRules = (rules: Rules) => {
  if (rules.action === "allow" && rules.os && rules.os !== CURRENT_OS) {
    return false;
  }

  if (rules.action === "allow" && rules.arch && rules.arch !== process.arch) {
    return false;
  }

  return true;
};

const argumentStringBuilder = (
  args: (string | Argument)[],
  values: Partial<Record<ArgumentVariableKeys, string | number | boolean>>,
) => {
  const argumentStrings: string[] = [];
  const valueEntries = Object.entries(values);

  for (let arg of args) {
    if (typeof arg === "object") {
      if (!checkRules(arg.rules)) {
        continue;
      }

      arg = Array.isArray(arg.value) ? arg.value.join(" ") : arg.value;
    }

    valueEntries.forEach(([k, v]) => {
      arg.replace(k, `${v}`);
    });

    argumentStrings.push(arg);
  }

  return argumentStrings.join(" ");
};

export const launch = (version: Version, options: LaunchOptions) => {
  for (const library of version.libraries) {
    //
  }

  const argumentKeyValueMap = {
    [ArgumentVariableKeys.NATIVES_DIRECTORY]: options.nativesPath,
    [ArgumentVariableKeys.LAUNCHER_NAME]: "Crylic",
    [ArgumentVariableKeys.LAUNCHER_VERSION]: "0.0.1",
    [ArgumentVariableKeys.CLASSPATH]: "",

    [ArgumentVariableKeys.AUTH_PLAYER_NAME]: options.username,
    [ArgumentVariableKeys.VERSION_NAME]: version.id,
    [ArgumentVariableKeys.GAME_DIRECTORY]: options.gamePath,
    [ArgumentVariableKeys.ASSETS_ROOT]: options.assetsPath,
    [ArgumentVariableKeys.ASSETS_INDEX_NAME]: version.assetIndex.id,
    [ArgumentVariableKeys.AUTH_UUID]: options.authUUID,
    [ArgumentVariableKeys.AUTH_ACCESS_TOKEN]: options.accessToken,
    [ArgumentVariableKeys.USER_TYPE]: "msa",
    [ArgumentVariableKeys.VERSION_TYPE]: version.type,
  };

  const jvmArgument = "";
  let gameArgument = "";

  if (version.minecraftArguments) {
    gameArgument = argumentStringBuilder(
      version.minecraftArguments.split(" "),
      argumentKeyValueMap,
    );
  } else {
    //
  }
};
