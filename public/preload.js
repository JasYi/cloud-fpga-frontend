const { contextBridge } = require("electron");
let { readdir, readFile } = require("fs/promises");

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

let openFile = async (path) => {
  let results = await readFile(path, "utf8");
  return results;
};

contextBridge.exposeInMainWorld("api", {
  directoryContents,
  currentDirectory,
  openFile,
});
