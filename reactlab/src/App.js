import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const changeCelsius = (e) => {
      //(9.0/5.0)*celsius + 32;
      let calcF = (9.0/5.0)*e.target.value + 32;
      calcF = calcF.toFixed(1)
    setCelsius(e.target.value);
    setFahrenheit(calcF);
  };
  const changeFahrenheit = (e) => {
    //(5.0/9.0)*(fahrenheit - 32);
    let calcC = (5.0/9.0)*(e.target.value - 32);
    calcC = calcC.toFixed(1)
    setCelsius(calcC);
    setFahrenheit(e.target.value);
  };

  return (
    <div className="App">
      <p> Enter temperature in Celsius: </p>
      <input type="text" onChange={changeCelsius} value={celsius}/>
      <p> Enter temperature in Fahrenheit:</p>
      <input type="text" onChange={changeFahrenheit} value={fahrenheit}/>
    </div>
  );
}

export default App;
