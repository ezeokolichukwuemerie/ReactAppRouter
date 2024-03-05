import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
        <nav>
            <Link to="/" style={{padding:"12px"}}>Home</Link>
            <Link to="/about" style={{padding:"12px"}}>About</Link>
            <Link to="/contact" style={{padding:"12px"}}>Contact</Link>
        </nav>
    </>
  )
}

export default NavBar