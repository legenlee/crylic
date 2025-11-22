import https from "https";
import fs from "fs";

type AvailableVersions = {
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

function cacheAvailableVersions(data: string): void {
  fs.writeFileSync("./cached_versions.json", data);
}

export async function getAvailableVersions(
  cache?: boolean
): Promise<AvailableVersions> {
  return new Promise<AvailableVersions>((resolve, reject) => {
    https.get(
      "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json",
      (res) => {
        if (!res.statusCode.toString().startsWith("2")) {
          reject(new Error(`Failed to fetch versions: ${res.statusCode}`));
          return;
        }

        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            if (cache) {
              cacheAvailableVersions(data);
            }

            const parsedData: AvailableVersions = JSON.parse(data);
            resolve(parsedData);
          } catch (err) {
            reject(err);
          }
        });
      }
    );
  });
}

export function getCachedAvailableVersions(): AvailableVersions {
  const data = fs.readFileSync("./cached_versions.json");
  return JSON.parse(data.toString());
}
