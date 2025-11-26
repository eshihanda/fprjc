import React from 'react'
import '../Styles/AboutHero.css'
import aboutus from '../assets/aboutus.png'

const AboutHero = () => {
  return (
    <section className='d-flex align-items-center justify-content-center about-hero-section'
        style={{backgroundImage:`url(${aboutus})`, height:'60vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}'>
            <h1 className='display-3 fw-bold text-purple'> About Us</h1>
            <p className="lead text-light mt-2">Feminist for Peace Rights &amp; Justice Centre</p>
        </div>
    </section>
  )
}
export default AboutHero;
