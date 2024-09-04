import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/HOME/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfo } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children :
//     [ 
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements
(
<>    //this is used for handling multiple parent in one unit.
  <Route path="/" element={<Layout />}>    Nesting in Parent route
    <Route path="" element={<Home />} /> 
    <Route path="about" element={<About  />} /> 
    <Route path="contact" element={<Contact />} /> 
    <Route path="user/:userid" element={<User />} /> 
    <Route
    loader={githubinfo}
     path="github"
     element={<Github />} 
      />
  </Route>
</>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
