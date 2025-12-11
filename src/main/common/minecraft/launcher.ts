import path from "node:path";
import cp from "node:child_process";

import { CURRENT_OS } from "../../constants";
import {
  MinecraftLibrary,
  MinecraftRule,
  MinecraftVersionDetail,
} from "./types";

export interface LaunchOptions {
  assetsPath?: string;
  librariesPath?: string;
  versionsPath?: string;
  nativesPath?: string;
  gamePath?: string;
  jrePath?: string;
  resolution?: {
    width: string;
    height: string;
  };
  username?: string;
  authUUID?: string;
  accessToken?: string;
  offline?: boolean;
}

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
  CLIENT_ID = "${clientid}",
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

const DEFAULT_LAUNCH_OPTIONS: Required<Omit<LaunchOptions, "resolution">> = {
  assetsPath: path.join(__dirname, "minecraft", "assets"),
  librariesPath: path.join(__dirname, "minecraft", "libraries"),
  versionsPath: path.join(__dirname, "minecraft", "versions"),
  nativesPath: path.join(__dirname, "minecraft", "natives"),
  gamePath: path.join(__dirname, "minecraft", ".minecraft"),
  authUUID: crypto.randomUUID(),
  accessToken: "",
  jrePath: "java",
  username: "offline-user",
  offline: true,
};

const checkRules = (rule: MinecraftRule) => {
  const basicCondition = rule.action === "allow";

  // TODO: Implement features condition check
  if (rule.features) {
    return false;
  }

  if (rule.os) {
    const osNameCondition = rule.os.name === CURRENT_OS;

    if (rule.os.arch) {
      return rule.os.arch === process.arch && osNameCondition && basicCondition;
    }

    return osNameCondition && basicCondition;
  }

  return true;
};

const javaArgumentFormatter = (
  javaArguments: string[],
  values: Partial<Record<VariableKeys, string | number | boolean>>,
) => {
  const valueKeys = Object.values(VariableKeys);

  valueKeys.forEach((key) => {
    javaArguments = javaArguments.map((javaArgument) =>
      javaArgument.replaceAll(key, `${values[key]}`),
    );
  });

  return javaArguments;
};

export const launch = (
  version: MinecraftVersionDetail,
  options: LaunchOptions = DEFAULT_LAUNCH_OPTIONS,
) => {
  const classpath: string[] = [];
  let jvmArguments: string[] = [];
  let gameArguments: string[] = [];

  for (const library of version.libraries) {
    if (library.rules && !library.rules.every(checkRules)) {
      continue;
    }

    classpath.push(
      path.join(options.librariesPath, library.downloads.artifact.path),
    );
  }

  classpath.push(path.join(options.versionsPath, version.id, "client.jar"));

  const variableKeyValueMap = {
    [VariableKeys.NATIVES_DIRECTORY]: options.nativesPath,
    [VariableKeys.LAUNCHER_NAME]: "nozomi",
    [VariableKeys.LAUNCHER_VERSION]: "4.0.0",
    [VariableKeys.CLASSPATH]: classpath.join(path.delimiter),
    [VariableKeys.AUTH_PLAYER_NAME]: options.username,
    [VariableKeys.VERSION_NAME]: version.id,
    [VariableKeys.GAME_DIRECTORY]: options.gamePath,
    [VariableKeys.ASSETS_ROOT]: options.assetsPath,
    [VariableKeys.ASSETS_INDEX_NAME]: version.assetIndex.id,
    [VariableKeys.AUTH_UUID]: options.authUUID,
    [VariableKeys.AUTH_ACCESS_TOKEN]: options.accessToken,
    [VariableKeys.USER_TYPE]: "msa",
    [VariableKeys.VERSION_TYPE]: version.type,
    [VariableKeys.CLIENT_ID]: "",
    [VariableKeys.AUTH_XUID]: "",
  };

  if (version.minecraftArguments) {
    jvmArguments = javaArgumentFormatter(
      [
        '"-Djava.library.path=${natives_directory}"',
        '"-Dminecraft.launcher.brand=${launcher_name}"',
        '"-Dminecraft.launcher.version=${launcher_version}"',
        '"-cp ${classpath}"',
        '"-Xss1M"',
      ],
      variableKeyValueMap,
    );

    gameArguments = javaArgumentFormatter(
      version.minecraftArguments.split(" "),
      variableKeyValueMap,
    );
  } else {
    const unformattedJvmArguments: string[] = [];
    const unformattedGameArguments: string[] = [];

    for (let argument of version.arguments?.jvm ?? []) {
      if (typeof argument === "object") {
        if (!argument.rules.every(checkRules)) {
          continue;
        }

        argument = Array.isArray(argument.value)
          ? argument.value.join(" ")
          : argument.value;
      }

      unformattedJvmArguments.push(argument);
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

      unformattedGameArguments.push(argument);
    }

    jvmArguments = javaArgumentFormatter(
      unformattedJvmArguments,
      variableKeyValueMap,
    );

    gameArguments = javaArgumentFormatter(
      unformattedGameArguments,
      variableKeyValueMap,
    );
  }

  console.log(jvmArguments.join(" "));
  console.log(gameArguments.join(" "));

  const childProcess = cp.spawn(
    options.jrePath,
    [...jvmArguments, version.mainClass, ...gameArguments],
    {
      detached: true,
    },
  );

  // childProcess.on("message", (message) => console.log(message.toString()));
  // childProcess.stdout.on("data", (data) => console.log(data.toString()));
  // childProcess.stdout.on("error", (error) => console.log(error.toString()));
  // childProcess.stdout.on("close", () => console.log("Closed"));
};
