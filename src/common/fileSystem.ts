import fs from "node:fs";

export enum FileSystemErrorType {
  FILE_EXISTS,
  DIRECTORY_EXISTS,
}

export class FileSystemError extends Error {
  public constructor(private readonly _errorType: FileSystemErrorType) {
    super();
  }

  public get message() {
    switch (this._errorType) {
      case FileSystemErrorType.FILE_EXISTS:
        return "File exists in specified path.";

      case FileSystemErrorType.DIRECTORY_EXISTS:
        return "Directory exists in specified path.";

      default:
        return "Unhandled error.";
    }
  }
}

export const safeMkdir = (path: string, recursive = true) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive });
  } else if (fs.statSync(path).isFile()) {
    throw new FileSystemError(FileSystemErrorType.DIRECTORY_EXISTS);
  }
};
