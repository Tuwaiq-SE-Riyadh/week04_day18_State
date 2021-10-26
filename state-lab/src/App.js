import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"

function App() {
  const [cel, setCel] = useState();
  const [feh, setFeh] = useState();

  // !(e.target.value).isInteger

  const changeFeh = (e)=>{
    // if (!parseInt( e.target.value)){
    //   setFeh("")
    // }
    // else{
      setFeh(parseInt(e.target.value)*(9/5)+32)
    // }
    
  }
  const changeCel = (e)=>{
    // if (!parseInt( e.target.value)){
    //   setCel("")
    // }
    // else{
    setCel((parseInt(e.target.value)-32)*(5/9))
  // }
  }

  const ClearText = ()=>{
    setFeh("")
    setCel("")
  }


  return (
    <>
    <fieldset className="cel"><legend className="textB"> Enter temperature in Celsius:</legend>
      <br/>
      <input type="text" className="classA" value={cel} onChange={changeFeh}/>
    </fieldset>

    <fieldset className="cel"><legend className="textB"> Enter temperature in Fehrenheit:</legend>
      <br/>
      <input type="text" className="classA" value={feh} onChange={changeCel}/><br/>

      
    </fieldset>

    <input type="button" value="Clear texts" onClick={ClearText}/>
    </>
  );
}

export default App;
