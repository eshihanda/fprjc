import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-main'>
                {/* Logo Section */}
                <div className='footer-section logo-section'>
                    <img src={logo} alt="fpjc" className='footer-logo' />
                    <p className='footer-description'>
                        Feminist for Peace Rights and Justice Center
                    </p>
                    {/* Social media links */}
                    <div className=' footer-socials'>
                        <a href="https://web.facebook.com/profile.php?id=100075700396342" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/feministcentre/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/feminist_centre" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/feminist-for-peace-rights-and-justice-centre-195aa1172/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
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
                            <span>+254 757840731</span>
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