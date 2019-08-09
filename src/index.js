import React from "react";
import ReactDOM from "react-dom";
import NavMenu from "./NavMenu";
import "./NavMenu.css";

function App() {
  return (
    <div className="App">
      <NavMenu />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);