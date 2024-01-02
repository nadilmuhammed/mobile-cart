import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='container mt-4 navbar'>
        <div>
            <h3 style={{color:"orange",fontWeight:"bolder"}}>Mobile Cart</h3>
        </div>
        <div>
            <p><Link to="/cart"><BsFillCartFill/></Link></p>
        </div>
    </nav>
  )
}

export default Navbar