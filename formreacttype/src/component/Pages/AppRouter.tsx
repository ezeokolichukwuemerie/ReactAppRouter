// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About'
import ContactUs from './ContactUs'
import Home from './Home'
import NavBar from './NavBar'
const AppRouter = () => {
   
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<ContactUs/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter