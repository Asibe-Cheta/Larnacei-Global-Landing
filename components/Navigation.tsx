'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="/assets/larnacei-coloured.png" 
            alt="Larnacei Global Limited" 
            className="logo"
            width={60}
            height={60}
            style={{ display: 'block', maxWidth: '60px', maxHeight: '60px' }}
          />
        </div>
        
        <div className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="https://properties.larnaceiglobal.com" className="nav-link featured">Properties ⭐</a>
          <a href="#construction" className="nav-link">Construction</a>
          <a href="#crypto" className="nav-link">Crypto Trading</a>
          <a href="#travel" className="nav-link">Travel Services</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <div className="nav-toggle" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
} 