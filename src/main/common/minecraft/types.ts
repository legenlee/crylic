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

export type Version = {
  arguments?: {
    game: (
      | string
      | {
          rules: {
            action: string;
            features: Record<string, boolean>;
          };
          value: string | string[];
        }
    )[];
    jvm: (
      | string
      | {
          rules: {
            action: string;
            os: string;
          };
          value: string | string[];
        }
    )[];
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
    rules?: {
      action: string;
      os: {
        name: "windows" | "liunx" | "osx";
      };
    };
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
  minecraftArguments: string;
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
