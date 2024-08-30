import { useState } from 'react'
import {InputBox} from './components/InputBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-orange-500'>My Currency Application</h1>
    </>
  )
}

export default App
