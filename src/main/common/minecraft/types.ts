export type VersionManifest = {
  latest: {
    release: string;
    snapshot: string;
  };
  versions: {
    id: string;
    type: "release" | "snapshot" | "old_alpha" | "old_beta";
    url: string;
    time: string;
    releaseTime: string;
    sha1: string;
    complianceLevel: number;
  }[];
};

export type Rules = {
  action: string;
  features?: Record<string, boolean>;
  os?: string;
  arch?: string;
};

export type Argument = {
  rules: Rules;
  value: string | string[];
};

export type Version = {
  arguments?: {
    game: (string | Argument)[];
    jvm: (string | Argument)[];
  };
  assetIndex: {
    id: string;
    sha1: string;
    size: number;
    totalSize: number;
    url: string;
  };
  assets: string;
  complianceLevel: number;
  download: Record<
    "client" | "client_mappings" | "server" | "server_mappings",
    {
      sha1: string;
      size: number;
      url: string;
    }
  >;
  id: string;
  javaVersion: {
    component: string;
    majorVersion: number;
  };
  libraries: {
    downloads: {
      artifact: {
        path: string;
        sha1: string;
        size: number;
        url: string;
      };
    };
    name: string;
    rules?: Rules;
  }[];
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
  mainClass: string;
  minecraftArguments?: string;
  minimumLauncherVersion: number;
  releaseTime: string;
  time: string;
  type: "release" | "snapshot" | "old_beta" | "old_alpha";
};

export type AssetIndex = {
  objects: Record<
    string,
    {
      hash: string;
      size: number;
    }
  >;
};
