
import { useState } from 'react';

function Calculator(){

    const [Celsius, setCelsius] = useState("0")
    const [Fahrenheit, setFahrenheit] = useState("-17.77")

    const changeCelsius = (e) => { 
        setFahrenheit(((e.target.value * 9)/5)+32)
    }

    const changeFahrenheit = (e) => {
        setCelsius((e.target.value - 32)*5/9)
        }
    

  return(

    <div>
     <p> Enters temperature in Celsius : {Celsius}</p>
     <input type="text" onChange={changeCelsius}></input>
     <p> Enters temperature in Fahrenheit : {Fahrenheit}</p>
     <input type="text" onChange={changeFahrenheit}></input>
    </div>
  )
}

export default Calculator