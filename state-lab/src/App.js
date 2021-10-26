import './App.css';
import React, { useState } from 'react';

function App() {

  const [Celsius, setCelsius] = useState("");
  const changeCelsius = (e) => {
    let result = (((e.target.value * 9)/5) + 32);
    setCelsius(e.target.value) 
    setFahrenheit(result)
    
  };
  
  
  const [Fahrenheit, setFahrenheit] = useState("");
  const changeFahrenheit = (e) => {
    let result = (((e.target.value - 32) * 5) /9 );
    setFahrenheit(e.target.value)
    setCelsius(result) 
  
  };

  return (
    <div className="App">

      <p> Celsius: {Celsius}</p>
      <p> Fahrenheit: {Fahrenheit}</p>

      <lable>Enter temperature in Celsius: </lable><br/>
      <input type="text" onChange ={changeCelsius} value={Celsius} />
      <br/><br/>
      <lable>Enter temperature in Fahrenheit: </lable><br/>
      <input type="text" onChange={changeFahrenheit} value={Fahrenheit} />



    </div>
  );
}



export default App;
