import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Visualizer from "./components/Visualizer";
import CodeEditor from "./components/CodeEditor";
import { React, useEffect, useMemo, useState } from "react";
import FilesViewer from "./components/FilesViewer";

function App() {
  return (
    <>
      <FilesViewer />
      <h1>file</h1>
      {/* <FilesViewer files={filteredFiles} onBack={onBack} onOpen={onOpen} />
   <CodeEditor /> */}
    </>
  );
}

export default App;
