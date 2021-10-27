import react, { useState } from "react";

function Calculator() {
    const [fahrenheitDegree, setFahrenheitDegree] = useState("");
    const [celsiusDegree, setCelsiusDegree] = useState("");

    const celsius = (e) => {
        // console.log(e.target.value)
        setFahrenheitDegree((e.target.value * 9/5) + 32);
        setCelsiusDegree(e.target.value)
    }
    
    const fahrenheit = (e) => {
        // console.log(e.target.value)
        setCelsiusDegree((e.target.value - 32) * 5/9);
        setFahrenheitDegree(e.target.value)
    }


  return (
    <div>
        <p>Enter temperature in Celsius</p>
        <input type="text" onChange = {celsius} value={celsiusDegree}/>
   
        <p>Enter temperature in Fahrenheit</p>
        <input type="text" onChange = {fahrenheit} value={fahrenheitDegree}/>
    </div>
  );
}

export default Calculator;