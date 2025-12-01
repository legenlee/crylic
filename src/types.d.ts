type VersionManifest = {
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
