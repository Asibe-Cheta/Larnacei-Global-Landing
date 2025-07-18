'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHardHat, faChartLine, faPlane } from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    id: 'real-estate',
    title: 'Premium Real Estate',
    description: 'Luxury residential and commercial properties across Nigeria. From vacation rentals to investment opportunities.',
    features: ['Short Stays', 'Long-term Rentals', 'Property Sales', 'Landed Properties'],
    icon: faBuilding,
    status: 'available',
    cta: 'Browse Properties',
    link: 'https://properties.larnaceiglobal.com',
    featured: true
  },
  {
    id: 'construction',
    title: 'Expert Construction',
    description: 'Top-tier construction and engineering solutions for bespoke residential and large-scale commercial projects.',
    features: ['Residential Projects', 'Commercial Construction', 'Engineering Solutions', 'Quality Delivery'],
    icon: faHardHat,
    status: 'coming-soon',
    cta: 'View Projects',
    link: '#construction',
    featured: false
  },
  {
    id: 'crypto',
    title: 'Crypto Trading Solutions',
    description: 'Secure, guided, and intelligent cryptocurrency trading for beginners, professionals, and businesses.',
    features: ['Beginner Trading', 'Professional Services', 'Business Solutions', 'Secure Platform'],
    icon: faChartLine,
    status: 'coming-soon',
    cta: 'Start Trading',
    link: '#crypto',
    featured: false
  },
  {
    id: 'travel',
    title: 'Global Travel Support',
    description: 'Simplifying international travel with expert visa application support for tourism, education, work, and relocation.',
    features: ['Tourist Visas', 'Student Visas', 'Work Permits', 'Travel Consultation'],
    icon: faPlane,
    status: 'coming-soon',
    cta: 'Plan Your Journey',
    link: '#travel',
    featured: false
  }
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">Comprehensive luxury lifestyle solutions under one trusted brand</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.featured ? 'featured' : ''}`}>
              <div className={`service-badge ${service.status}`}>
                {service.status === 'available' ? 'NOW AVAILABLE' : 'COMING SOON'}
              </div>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} style={{ fontSize: '1.5rem' }} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, index) => (
                  <span key={index} className="feature">{feature}</span>
                ))}
              </div>
              <a 
                href={service.link} 
                className={`service-cta ${service.status === 'coming-soon' ? 'disabled' : ''}`}
              >
                {service.cta}
                <FontAwesomeIcon icon={service.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 