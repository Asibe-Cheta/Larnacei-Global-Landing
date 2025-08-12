'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHardHat, faHandshake, faHome, faCogs, faHammer } from '@fortawesome/free-solid-svg-icons'

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
    id: 'brokerage',
    title: 'Brokerage and Agency Services',
    description: 'Professional real estate brokerage and agency services for buying, selling, and leasing properties.',
    features: ['Property Sales', 'Property Leasing', 'Agency Services', 'Market Analysis'],
    icon: faHandshake,
    status: 'coming-soon',
    cta: 'Learn More',
    link: '#brokerage',
    featured: false
  },
  {
    id: 'ancillary',
    title: 'Ancillary Services',
    description: 'Comprehensive support services including property management, legal assistance, and investment consulting.',
    features: ['Property Management', 'Legal Support', 'Investment Consulting', 'Documentation'],
    icon: faCogs,
    status: 'coming-soon',
    cta: 'Explore Services',
    link: '#ancillary',
    featured: false
  },
  {
    id: 'investment',
    title: 'Real Estate Investment',
    description: 'Strategic real estate investment opportunities and portfolio management for optimal returns.',
    features: ['Investment Opportunities', 'Portfolio Management', 'Market Analysis', 'ROI Optimization'],
    icon: faHome,
    status: 'coming-soon',
    cta: 'Invest Now',
    link: '#investment',
    featured: false
  },
  {
    id: 'leasing',
    title: 'Property Leasing and Management',
    description: 'Comprehensive property leasing services and professional property management solutions.',
    features: ['Property Leasing', 'Tenant Management', 'Maintenance Services', 'Rent Collection'],
    icon: faBuilding,
    status: 'coming-soon',
    cta: 'Manage Properties',
    link: '#leasing',
    featured: false
  },
  {
    id: 'development',
    title: 'Property Development and Construction',
    description: 'End-to-end property development and construction services for residential and commercial projects.',
    features: ['Property Development', 'Construction Management', 'Project Planning', 'Quality Assurance'],
    icon: faHammer,
    status: 'coming-soon',
    cta: 'Start Project',
    link: '#development',
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