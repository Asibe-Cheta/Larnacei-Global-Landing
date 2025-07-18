'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">Larnacei Global Limited</h1>
          <h2 className="hero-subtitle">Redefining luxury, elevating lifestyle across Nigeria</h2>
          <p className="hero-description">Your premier partner for real estate, construction, cryptocurrency trading, and global travel services</p>
          <div className="hero-buttons">
            <a href="https://properties.larnaceiglobal.com" className="btn btn-primary">
              <FontAwesomeIcon icon={faBuilding} />
              Explore Properties
            </a>
            <a href="#services" className="btn btn-secondary">
              <FontAwesomeIcon icon={faBriefcase} />
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 