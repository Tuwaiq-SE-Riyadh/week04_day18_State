import { useState, useEffect } from "react";
import './App.css';

function App() {
  let c;
  let cc;
  let f;
  let ff;

  const [cel, setCelsius] = useState(3);
  const [fah, setFahrenheit] = useState(3);

  function celsius(e){
    c=e.target.value;
    cc=e.target
    setFahrenheit(((1.8*c)+32))
    document.querySelector("#inputF").value=fah
  
    
  }

  function fahrenheit(e){
    f=e.target.value;
    ff=e.target
    setCelsius(((f-32)/1.8))
   document.querySelector("#inputC").value=cel;

  }
  return (
    <div className="App">

      <div className="cal">
        <p>Enter Celsius <input id="inputC" type="text"  onChange={celsius}></input></p>
      </div>
      <div className="cal">
        <p>Enter Fahrenheit<input id="inputF" type="text"  onChange={fahrenheit}></input></p>
      </div>

    </div>
  );
}

export default App;
