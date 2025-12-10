export interface MinecraftLatest {
  release: string;
  snapshot: string;
}

export interface MinecraftVersion {
  id: string;
  type: "release" | "snapshot" | "old_alpha" | "old_beta";
  url: string;
  time: string;
  releaseTime: string;
  sha1: string;
  complianceLevel: number;
}

export interface MinecraftRules {
  action: string;
  features?: Record<string, boolean>;
  os?: string;
  arch?: string;
}

export interface MinecraftArgument {
  rules: MinecraftRules[];
  value: string | string[];
}

export interface MinecraftFile {
  url: string;
  sha1: string;
  size: number;
}

export type MinecraftDownloadType =
  | "client"
  | "client_mappings"
  | "server"
  | "server_mappings";

export interface MinecraftAssetIndex extends MinecraftFile {
  id: string;
  totalSize: number;
}

export interface MinecraftJavaVersion {
  component: string;
  majorVersion: number;
}

export interface MinecraftLibrary {
  downloads: {
    artifact: MinecraftFile & {
      path: string;
    };
  };
  name: string;
  rules?: MinecraftRules[];
}

export type MinecraftReleaseType =
  | "release"
  | "snapshot"
  | "old_beta"
  | "old_alpha";

export interface MinecraftLogging {
  logging?: {
    client: {
      argument: string;
      file: {
        id: string;
        sha1: string;
        size: number;
        url: string;
      };
      type: string;
    };
  };
}

export type MinecraftVersions = {
  latest: MinecraftLatest;
  versions: MinecraftVersion[];
};

export interface MinecraftVersionDetail {
  arguments?: {
    game: (string | MinecraftArgument)[];
    jvm: (string | MinecraftArgument)[];
  };
  assetIndex: MinecraftAssetIndex;
  assets: string;
  complianceLevel: number;
  download: Record<MinecraftDownloadType, MinecraftFile>;
  id: string;
  javaVersion: MinecraftJavaVersion;
  libraries: MinecraftLibrary[];
  logging?: MinecraftLogging;
  mainClass: string;
  minecraftArguments?: string;
  minimumLauncherVersion: number;
  releaseTime: string;
  time: string;
  type: MinecraftReleaseType;
}

export interface MinecraftAssetFile {
  hash: string;
  size: number;
}

export interface MinecraftAssets {
  objects: Record<string, MinecraftAssetFile>;
}
