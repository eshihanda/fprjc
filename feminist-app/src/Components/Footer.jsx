import React from 'react'
import logo from '../assets/logo.jpeg'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-main'>
                {/* Logo Section */}
                <div className='footer-section logo-section'>
                    <img src={logo} alt="Pipi House Logo" className='footer-logo' />
                    <p className='footer-description'>
                        Feminist for Peace Rights and Justice Center
                    </p>
                </div>
                
                {/* Quick Links Section */}
                <div className='footer-section'>
                    <h5 className='footer-heading'>Quick Links</h5>
                    <ul className='footer-links'>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/programs">Our Programs</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                
                {/* Contact Us Section */}
                <div className='footer-section'>
                    <h5 className='footer-heading'>Contact Us</h5>
                    <div className='contact-details'>
                        <div className='contact-item'>
                            <span className='contact-label'>Email:</span>
                            <a href="mailto:info@pipihouse.com">kiberafeminists@gmail.com</a>
                        </div>
                        <div className='contact-item'>
                            <span className='contact-label'>Phone:</span>
                            <span>+254 728081147</span>
                        </div>
                        <div className='contact-item'>
                            <span className='contact-label'>Location:</span>
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-divider'></div>
            
            {/* Bottom Section */}
            <div className='footer-bottom'>
                <p className='footer-copyright'>
                    © {new Date().getFullYear()} FPRJC. All rights reserved.
                </p>
                <p className='footer-tagline'>
                    Handcrafted by yours truly; Monica.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer