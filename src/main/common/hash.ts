import crypto from "crypto";
import fs from "fs";

export const calculateSha1 = (filePath: string) =>
  new Promise<string>((resolve, reject) => {
    const hash = crypto.createHash("sha1");

    try {
      if (fs.statSync(filePath).isDirectory) {
        reject(new Error("File is directory."));
      }

      const stream = fs.createReadStream(filePath);

      stream.on("data", (chunk) => hash.update(chunk));
      stream.on("end", () => resolve(hash.digest("hex")));
      stream.on("error", (err) => reject(err));
    } catch (err) {
      reject("File not exists.");
    }
  });
