import path from "path";
import cp from "child_process";

import type { Rules, Version } from "./types";
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

enum VariableKeys {
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
  // TODO: Implement features condition check
  if (rules.features) {
    return false;
  }

  if (rules.os && rules.os !== CURRENT_OS) {
    return false;
  }

  if (rules.arch && rules.arch !== process.arch) {
    return false;
  }

  return true;
};

const argumentStringFormatter = (
  original: string,
  values: Partial<Record<VariableKeys, string | number | boolean>>,
) => {
  let argumentString = original;
  const valueEntries = Object.entries(values);

  valueEntries.forEach(([key, value]) => {
    argumentString = argumentString.replace(key, `${value}`);
  });

  return argumentString;
};

export const launch = (version: Version, options: LaunchOptions) => {
  let classpath = "";
  let jvmArguments = "";
  let gameArguments = "";

  for (const library of version.libraries) {
    if (library.rules && !library.rules.every(checkRules)) {
      continue;
    }

    classpath += path.join(
      options.librariesPath,
      library.downloads.artifact.path,
    );
  }

  const variableKeyValueMap = {
    [VariableKeys.NATIVES_DIRECTORY]: options.nativesPath,
    [VariableKeys.LAUNCHER_NAME]: "Crylic",
    [VariableKeys.LAUNCHER_VERSION]: "0.0.1",
    [VariableKeys.CLASSPATH]: classpath,

    [VariableKeys.AUTH_PLAYER_NAME]: options.username,
    [VariableKeys.VERSION_NAME]: version.id,
    [VariableKeys.GAME_DIRECTORY]: options.gamePath,
    [VariableKeys.ASSETS_ROOT]: options.assetsPath,
    [VariableKeys.ASSETS_INDEX_NAME]: version.assetIndex.id,
    [VariableKeys.AUTH_UUID]: options.authUUID,
    [VariableKeys.AUTH_ACCESS_TOKEN]: options.accessToken,
    [VariableKeys.USER_TYPE]: "msa",
    [VariableKeys.VERSION_TYPE]: version.type,
  };

  if (version.minecraftArguments) {
    jvmArguments = argumentStringFormatter(
      "-Djava.library.path=${natives_directory} " +
        "-Dminecraft.launcher.brand=${launcher_name} " +
        "-Dminecraft.launcher.version=${launcher_version} " +
        "-cp ${classpath} " +
        "-Xss1M",
      variableKeyValueMap,
    );

    gameArguments = argumentStringFormatter(
      version.minecraftArguments,
      variableKeyValueMap,
    );
  } else {
    let unformattedJvmArguments = "";
    let unformattedGameArguments = "";

    for (let argument of version.arguments?.jvm ?? []) {
      if (typeof argument === "object") {
        if (!argument.rules.every(checkRules)) {
          continue;
        }

        argument = Array.isArray(argument.value)
          ? argument.value.join(" ")
          : argument.value;
      }

      unformattedJvmArguments += argument;
    }

    for (let argument of version.arguments?.game ?? []) {
      if (typeof argument === "object") {
        if (!argument.rules.every(checkRules)) {
          continue;
        }

        argument = Array.isArray(argument.value)
          ? argument.value.join(" ")
          : argument.value;
      }

      unformattedGameArguments += argument;
    }

    jvmArguments = argumentStringFormatter(
      unformattedJvmArguments,
      variableKeyValueMap,
    );

    gameArguments = argumentStringFormatter(
      unformattedGameArguments,
      variableKeyValueMap,
    );
  }

  const process = cp.spawn(
    `java ${jvmArguments} ${version.mainClass} ${gameArguments}`,
  );
};
