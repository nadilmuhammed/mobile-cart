import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart.jsx';

function App() {

  const [cartID, setCartID] = useState();

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home setCartID={setCartID}/> 
    },
    {
      path:"/cart",
      element:<Cart IDcart={cartID}/> 
    }

  ])

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
