import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Routes>
        <Route exact path="/" element={<h1>HOME</h1>} />
        <Route exact path="/visualizer" element={<Visualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
