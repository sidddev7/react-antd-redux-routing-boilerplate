import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./containers/module1/components/home";

function App() {
  return (
    <div className="App">
      <h1>
        This boiler plate is created by{" "}
        <a
          href="https://github.com/sidddev7"
          target={"_blank"}
          rel="noreferrer"
        >
          Siddhrajsinh Gohil
        </a>
      </h1>
      {/* you can create routes like */}
      <Routes>
        <Route path="/" element={<Home />}></Route>{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
