import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Visualizer from "./components/Visualizer";
import CodeEditor from "./components/CodeEditor";
import { useEffect, useMemo, useState } from "react";
import FilesViewer from "./components/FilesViewer";


const formatSize = size => {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}

function App() {
  const [path, setPath] = useState('downloads')
  const files = useMemo(
    () =>
      window.file
        .readdirSync(path)
        .map(file => {
          const stats = window.file.statSync(window.file.join(path, file))
          return {
            name: file,
            size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
            directory: stats.isDirectory()
          }
        })
        .sort((a, b) => {
          if (a.directory === b.directory) {
            return a.name.localeCompare(b.name)
          }
          return a.directory ? -1 : 1
        }),
    [path]
  )

  // const onBack = () => setPath(pathModule.dirname(path))
  // const onOpen = folder => setPath(pathModule.join(path, folder))

  // const [searchString, setSearchString] = useState('')
  // const filteredFiles = files.filter(s => s.name.startsWith(searchString))

 
  return (
   <>
   <h1>file</h1>
   {/* <FilesViewer files={filteredFiles} onBack={onBack} onOpen={onOpen} />
   <CodeEditor /> */}
   </>
  );
}

export default App;
