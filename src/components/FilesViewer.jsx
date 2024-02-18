// import { IconFolder, IconFile, IconFolderOpen } from './Icons'
import { HiOutlineSquare2Stack, HiOutlineFolder } from "react-icons/hi2";
import React, { useState } from "react"
import usePromise from "react-use-promise";

const FilesViewer = ({setState}) => {
  let [directory, setDirectory] = useState(window.api.currentDirectory())
  let isRoot = (directory === "/")

  let [files, filesError, filesState] = usePromise(() => {
    window.api.directoryContents(directory);
    console.log("curr dir" + directory);
  }, [directory])

  let navigate = (path) => {
    console.log("going to: " + path);
    if (directory === "/") {
      setDirectory("/" + path)
    } else {
      setDirectory(directory + "/" + path)
    }
  }

  let loadFile = (path) => {
    console.log(path);
    let res = window.api.openFile(path)
    setState(res);
  }
  
  let navigateUp = () => {
    setDirectory(directory.split("/").slice(0, -1).join("/") || "/")
  }

  return (
          <>
          <div className="bg-slate-700 text-white">
            {!isRoot && <div><button onClick={() => navigateUp()}>..</button></div> }
            {files && files.map((entry, i) => (
              (entry.type === "directory") ? (
                <div key={i} className="">
                  <button onClick={() => navigate(entry.name)}>{entry.name}</button>
                </div>
              ) : (
                <div key={i}>
                <button onClick={() => loadFile(entry.name)}>{entry.name}</button>
              </div>
              )
            ))}
          </div>
          </> 
  )
};

export default FilesViewer;