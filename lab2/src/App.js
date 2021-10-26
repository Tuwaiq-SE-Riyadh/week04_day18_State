import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {

  const [num1, setT] = useState(0);
  const [num2, setC] = useState(0);

  const et = (e1) => {
    setT(e1.target.value * (9/5) + 32);
    setC(e1.target.value)
    
  };

  const ec = (e2) => {
    // if(e.target.value == ''){setC('');}
    setC((e2.target.value- 32) * (5/9));
    setT(e2.target.value)
    
  };


  return (
    <div className ={"d0"}>
    
<div className ={"d1"}>
  <p>Enter temperature in celsius: </p>
  
  <input type="number" onChange={et} value={num2}/>
  
</div>

<div className ={"d1"}>
  <p>Enter temperature in fahrenheit: </p>
  <input  type="number"  onChange={ec} value={num1}/>
</div>

    </div>
  );
}

export default App;
