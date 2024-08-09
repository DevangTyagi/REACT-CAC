import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setcounter] = useState(15)    //Hook to change the state of the complete document && The inside attributes are just references

  //let counter = 15

const addvalue = () => {
   // counter = counter + 1
    setcounter(counter+1)
    console.log("Clicked",counter);
}

const RemoveValue = () => {

  setcounter(counter-1)
  console.log("Clicked",counter);
}

  return (
    <>
      <h1>Counter Project Code</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addvalue}>Add Value</button> 
      <br/>
      <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
