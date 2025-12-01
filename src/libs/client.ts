import fs from "fs";
import https, { RequestOptions } from "https";

export class ResponseError extends Error {
  public constructor(
    private readonly _responseCode: string | number,
    private readonly _responseBody?: unknown,
  ) {
    super(
      `Server responded with code ${_responseCode}. Please refer responseBody to see details.`,
    );
  }

  public get responseCode() {
    return this._responseCode;
  }

  public get responseBody() {
    return this._responseBody;
  }
}

export interface ClientOptions extends RequestOptions {
  downloadPath?: string;
  onDownloadProgress?: (current: number, total: number) => void;
}

export class Client {
  public static request<T = unknown>(options: ClientOptions): Promise<T> {
    return new Promise<T>(function (resolve, reject) {
      const downloadFlag = options.downloadPath?.length > 0;
      let file: fs.WriteStream | null;

      if (downloadFlag) {
        file = fs.createWriteStream(options.downloadPath);
      }

      https.request(options, function (res) {
        const contentLength = parseInt(res.headers["content-length"] ?? "0");
        let body = "";

        if (downloadFlag) {
          res.pipe(file);
        }

        res.on("data", function (chunk) {
          body += chunk;

          if (options.onDownloadProgress) {
            options.onDownloadProgress(body.length, contentLength);
          }
        });

        res.on("error", function (err) {
          reject(new ResponseError(res.statusCode, err.message));
        });

        res.on("close", function () {
          reject(new Error("Connection closed before response was ended."));
        });

        res.on("end", function () {
          const jsonParsedData = JSON.parse(body);

          if (res.statusCode >= 300) {
            return reject(new ResponseError(res.statusCode, jsonParsedData));
          }

          resolve(jsonParsedData);
        });
      });
    });
  }
}
