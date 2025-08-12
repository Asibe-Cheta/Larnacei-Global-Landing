'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBullseye, 
  faEye, 
  faLightbulb, 
  faShieldAlt, 
  faStar, 
  faUsers, 
  faGlobe,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBuilding,
  faMapMarkedAlt,
  faCrown,
  faRocket,
  faTrophy,
  faHandshake
} from '@fortawesome/free-solid-svg-icons'
import { 
  faWhatsapp as faWhatsappBrand, 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after page loads
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string

    // Create WhatsApp message
    const whatsappMessage = `Hello Larnacei Global Limited,

I'm interested in your ${service} services.

Name: ${name}
Email: ${email}
Message: ${message}

Please contact me for more information.`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/2348052662707?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    e.currentTarget.reset()
  }

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <h2 style={{ color: 'white', marginTop: '1rem' }}>Larnacei Global Limited</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.5rem' }}>Loading...</p>
          </div>
        </div>
      )}

      <Navigation />
      <Hero />
      <Services />

      {/* Mission & Values Section */}
      <section id="about" className="mission-values">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="section-title">Our Mission & Vision</h2>
              <div className="mission-item">
                <h3><FontAwesomeIcon icon={faBullseye} /> Mission</h3>
                <p>To deliver high-quality, innovative, and affordable solutions in real estate, property development, and construction — enhancing lifestyles across Nigeria.</p>
              </div>
              <div className="mission-item">
                <h3><FontAwesomeIcon icon={faEye} /> Vision</h3>
                <p>To become a globally recognized brand in real estate, property development, and construction services — setting standards in integrity, creativity, and excellence.</p>
              </div>
            </div>
            
            <div className="values-content">
              <h3 className="values-title">Core Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <span>Innovation</span>
                </div>
                <div className="value-item">
                  <FontAwesomeIcon icon={faShieldAlt} />
                  <span>Integrity</span>
                </div>
                <div className="value-item">
                  <FontAwesomeIcon icon={faStar} />
                  <span>Excellence</span>
                </div>
                <div className="value-item">
                  <FontAwesomeIcon icon={faUsers} />
                  <span>Customer Focus</span>
                </div>
                <div className="value-item">
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>Global Outlook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">Meet the visionaries driving Larnacei Global Limited forward</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="member-name">Raymond I. O.</h3>
              <p className="member-role">Chief Executive Officer (CEO)</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="member-name">Clinton O.</h3>
              <p className="member-role">Director</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="member-name">Godswill Elijah. O.</h3>
              <p className="member-role">Director</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="member-name">Nkiruka O.</h3>
              <p className="member-role">Chief Operating Officer (COO)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Larnacei Section */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Larnacei Global</h2>
            <p className="section-subtitle">Your trusted partner for luxury lifestyle solutions</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBuilding} style={{ fontSize: '2rem' }} />
              </div>
              <h3>Multi-Industry Expertise</h3>
              <p>Comprehensive solutions under one trusted brand, providing convenience and reliability.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faMapMarkedAlt} style={{ fontSize: '2rem' }} />
              </div>
              <h3>Nigerian Market Knowledge</h3>
              <p>Deep understanding of local markets, regulations, and cultural nuances across Nigeria.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faCrown} style={{ fontSize: '2rem' }} />
              </div>
              <h3>Luxury Focus</h3>
              <p>Premium quality services and exceptional customer experience at every touchpoint.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faRocket} style={{ fontSize: '2rem' }} />
              </div>
              <h3>Innovation-Driven</h3>
              <p>Embracing modern technology and digital solutions to enhance service delivery.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faTrophy} style={{ fontSize: '2rem' }} />
              </div>
              <h3>Proven Track Record</h3>
              <p>Successfully completed projects and satisfied clients across all service areas.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faHandshake} style={{ fontSize: '2rem' }} />
              </div>
              <h3>Trusted Partnership</h3>
              <p>Building long-term relationships based on transparency, integrity, and mutual success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Locations Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact & Locations</h2>
            <p className="section-subtitle">Connect with us across Nigeria</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <div>
                  <h3>Phone</h3>
                  <p>+2348052662707</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <div>
                  <h3>Email</h3>
                  <p>Info@larnaceiglobal.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FontAwesomeIcon icon={faGlobe} />
                <div>
                  <h3>Website</h3>
                  <p>www.larnaceiglobal.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div>
                  <h3>Operating Locations</h3>
                  <p>Rivers State, Delta State, Abuja, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Get in Touch</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select name="service" required>
                    <option value="">Select Service</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="brokerage">Brokerage and Agency Services</option>
                    <option value="ancillary">Ancillary Services</option>
                    <option value="investment">Real Estate Investment</option>
                    <option value="leasing">Property Leasing and Management</option>
                    <option value="development">Property Development and Construction</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <FontAwesomeIcon icon={faWhatsappBrand} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/assets/Larnacei_white.png" alt="Larnacei Global Limited" className="logo" />
                <span className="logo-text">Larnacei Global</span>
              </div>
              <p>Redefining luxury, elevating lifestyle across Nigeria</p>
              <div className="social-links">
                <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="https://properties.larnaceiglobal.com">Real Estate</a></li>
                <li><a href="#brokerage">Brokerage and Agency Services</a></li>
                <li><a href="#ancillary">Ancillary Services</a></li>
                <li><a href="#investment">Real Estate Investment</a></li>
                <li><a href="#leasing">Property Leasing and Management</a></li>
                <li><a href="#development">Property Development and Construction</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Info</h3>
              <p><FontAwesomeIcon icon={faPhone} /> +2348052662707</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> Info@larnaceiglobal.com</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nigeria</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Larnacei Global Limited. All rights reserved. | Established 2025</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/2348052662707" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsappBrand} />
      </a>
    </>
  )
} 