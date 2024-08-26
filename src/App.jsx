import { useEffect, useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Main from './Components/Main/Main'

const routing = createBrowserRouter([{element:<Layout/> , path:"" , children:[
  {index: true , element:<Main/>},
  {path:"about" , element:<About/>},
  {path:"portfolio" , element:<Portfolio/>},
  {path:"contact" , element:<Contact/>},
  {path:"*" , element:<NotFound/>},
]}   
])
function App() {
  return (
    <>
    <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App
