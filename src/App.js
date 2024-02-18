import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<h1>HOME</h1>} />
        <Route exact path="/visualizer" element={<Visualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
