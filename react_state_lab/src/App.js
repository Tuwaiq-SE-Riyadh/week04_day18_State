import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [celsius,setcelsius] = useState(0)
  const [fahrenheit,setFahrenheit] = useState()
  useEffect(() => {
    // setAge will make an update on a state so if there is no dependency array then it will indefinitely
    setFahrenheit(celsius * 1.8 +32)
    //setcelsius((fahrenheit-32)*5/9)
    // inside the dependency array we add the states we want to watch for, if they change then useEffect will run again
  }, [fahrenheit]);
  return (
    <div className="App">
      <p>Enter temperature in celsius</p>
      <input type="text"  onChange={InputChangeC} value={celsius}/><br/>
      <p>Enter temperature in fahrenheit</p>
      <input type="text"  onChange={InputChange} value={fahrenheit}/><br/>
    </div>
  );

  function InputChangeC(e){
    
    
    setcelsius(e.target.value)
    setFahrenheit(e.target.value * 1.8 + 32)
    
    
   
 }

 function InputChange(e){
  setFahrenheit(e.target.value)
  setcelsius((e.target.value-32)*5/9)
  
}
}

export default App;
