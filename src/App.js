import { useState, useEffect } from "react";


function App() {
  const [C, setC] = useState();
  const [F, setF] = useState();
  
  function ChangeC(e){
    setC(e.target.value);
    let c = e.target.value;
    let f = 9/5*(c)+32;
    setF(f);

  }
  
  function ChangeF(e){
    setF(e.target.value);
    let f = e.target.value;
    let c = 5/9*(f-32);
    setC(c);

  }
  return(  
   <div>
    <h4>Enter temperature in Celsius:{C}</h4>
    <input id="C" type="number" onChange={ChangeC}></input>
    <h4>Enter temperature in Fahrenheit:{F}</h4>
    <input id="C" type="number" onChange={ChangeF}></input>
   </div>
    
  
  );
 
}

export default App;

