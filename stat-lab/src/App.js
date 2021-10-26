import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'

function App() {
    const[celsius,setC]=useState()
    const[fahrenheit,setF]=useState()


    const chC= (e)=>{
        console.log(e.target.value);
        setC((e.target.value-32)/1.8)
         
    }
        
    const chF= (e)=>{
        setF(0)
        console.log(e.target.value);
        setF((e.target.value*1.8)+32)
               
    }
 

    return ( 
        <div>
         <fieldset className='box'><legend>Enter temperature in Celsius</legend>  <input className='input' type="text" onChange={chF} value={celsius}/></fieldset>
          
         <fieldset className='box'><legend>Enter temperature in Fahrenheit</legend><input className='input' type="text" onChange={chC}value={fahrenheit}/> </fieldset>
          
             </div>
    )
}

export default App;