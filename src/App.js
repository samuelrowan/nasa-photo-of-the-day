import React from "react";
import "./App.css";
import PhotoData from "./components/apod.js";

function App() {
  return (
    <div className="App">
      <h1>this is a title for the thing</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      < PhotoData/>
    </div>
  );
}

export default App;
