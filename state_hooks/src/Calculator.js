import React, { useState } from 'react';

function Calculator() {
  // Declare a new state variable, which we'll call "count"
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function fahrenheChanged (e)
  {
    setFahrenheit(e.target.value)
    setCelsius((parseFloat(e.target.value) - 32) * (5/9))
  }

  function celsiusChanged (e)
  {
    setCelsius(e.target.value)
    setFahrenheit((parseFloat(e.target.value) * (9/5) ) +32)
  }

  return (
    <div>
        <label htmlFor="celsiusInput">Enter temperature in Celsius</label>
        <input id="celsiusInput" value={celsius} onChange={celsiusChanged} />
        <br/>
        <label htmlFor="fahrenheItinput">Enter temperature in Fahrenheit</label>
        <input id="fahrenheItinput" value={fahrenheit} onChange={fahrenheChanged} />
    </div>
  );
}


export default Calculator;
