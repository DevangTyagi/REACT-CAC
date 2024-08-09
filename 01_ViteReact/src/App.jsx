import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from'./Personal'

function App() 
 { 
  const [count, setCount] = useState(0)
   const username = " Devang "
  return (   
    <>
      <Personal/>
      <div>
      <h1>Hello!This is the Landing{username}</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolorum ratione sapiente nemo recusandae magnam, facilis aperiam dignissimos sunt ad ipsa id rem eum molestiae deleniti voluptas voluptatem numquam tempore?</p>
      </div>
      <p className="read-the-docs">
        -:This is the End Of The Page:-
      </p>
    </>
   )
}

export default App
