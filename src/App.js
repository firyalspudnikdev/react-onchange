import React, { useState } from "react";
import "./App.css";
// controlled Inputs
// controlled vs uncontrolled
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="formField">
            <span>Name:</span>
            <button onClick={() => {console.log("tes-click");}}>Button</button>
          </div>
      </header>
    </div>
  );
}

export default App;
