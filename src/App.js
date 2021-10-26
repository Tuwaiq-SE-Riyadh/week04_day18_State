import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
  );
}
function Calculator() {
  let [temp, settemp] = useState(1);
  let [fehrTemp, setfehrTemp] = useState(33);

  function changeTemp(e) {
    
    fehrTemp = e.target.value * 2 + 32;
    setfehrTemp(fehrTemp);
    settemp(e.target.value);
  }
  function changeFehrTemp(e){
    temp = (e.target.value- 32)/2;
    setfehrTemp(e.target.value);
    settemp(temp);
  }
  return (
    <div>
      <div>
        <label for="Celsius"> Celsius</label>
        <br />
        <input type="number" onChange={changeTemp} value={temp}></input>
      </div>
      <div>
        <label for="Fahrenheit"> Fahrenheit </label>
        <br />
        <input type="number" onChange={changeFehrTemp} value={fehrTemp}></input>
      </div>
    </div>
  );
}

export default App;
