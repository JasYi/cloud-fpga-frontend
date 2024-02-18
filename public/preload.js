const { contextBridge } = require("electron");
let { readdir } = require("fs/promises");

let directoryContents = async (path) => {
  let results = await readdir(path, { withFileTypes: true });
  return results.map((entry) => ({
    name: entry.name,
    type: entry.isDirectory() ? "directory" : "file",
  }));
};

let currentDirectory = () => {
  return process.cwd();
};

contextBridge.exposeInMainWorld("api", { directoryContents, currentDirectory });
