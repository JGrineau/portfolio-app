import React from 'react'
import Header from './components/header/Header'
import HeaderSocials from './components/header/HeaderSocials'
import Nav from './components/nav/Nav'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/About'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  return (
    
   <Router>
    <Nav />
      <Navbar />
      <Header />
      <HeaderSocials />
      <About />
    </Router>




    
  )
}

export default App