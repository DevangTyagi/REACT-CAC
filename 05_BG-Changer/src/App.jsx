import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
  <>
     <div className="w-full h-screen duratrion-200" 
     style = {{backgroundColor : color}}></div>
     <div className="fixed flex flex wrap justify-center
      bottom-12 inset-x-0 px-2"></div>
     <div className="flex flex wrap justify-center shadow-lg 
     bg-white px-2 py-3 rounded-xl">test</div>
     <button onClick={()=>setcolor("red")}
     className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
     style={{backgroundColor:"red"}}>Red</button>
     <button onClick={()=>setcolor("Yellow")}
     className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
     style={{backgroundColor:"Yellow"}}>Yellow</button>
     <button onClick={()=>setcolor("orange")}
     className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
     style={{backgroundColor:"orange"}}>Orange</button>
     <button onClick={()=>setcolor("purple")}
     className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
     style={{backgroundColor:"purple"}}>Purple</button>
     <button onClick={()=>setcolor("green")}
     className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
     style={{backgroundColor:"green"}}>Green</button>
   </>
  )
}
    
   

export default App
