import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "Devang",
    age : 21
  }
  return (
    <>
      <h1 className='bg-purple-700 text_black p-4 rounded-xl mb-3'>Tailwind Test</h1>
      <Card New_Object = {myobj} />  // myobj can only be passed in form of variable
      <Card username = "Devang"/>
    </>
  )
}

export default App
