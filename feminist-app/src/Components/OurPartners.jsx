import React from 'react'
import womankind from '../Assets/womankind.png'
import unhrc from '../Assets/unhrc.png'
import ignite from '../Assets/ignite.png'
import rfsu from '../Assets/rfsu.png'
import awdf from '../Assets/awdf.png'
import '../Styles/OurPartners.css'

const OurPartners = () => {
  const logos = [womankind, unhrc, ignite, rfsu, awdf];

  return (
    <section className='py-5 bg-light partners-section'>
      <div className='container'>
        <div className='row align-items-center'>

          {/* Left side text */}
          <div className='col-md-4 mb-4 mb-md-0'>
            <h4 className='text-uppercase fw-bold text-purple mb-2'>
              Our Partners
            </h4>
            <p className='text-muted'>
              These are the organizations that we proudly collaborate with to
              advance the FPRJC mission of ensuring gender equality, justice,
              and empowerment.
            </p>
          </div>

          {/* Right side logos */}
          <div className='col-md-8'>
            <div className='partner-slide d-flex align-items-center'>
              <div className='slide-track d-flex align-items-center'>
                
                {/* Generate twice for infinite loop */}
                {[...logos, ...logos].map((logo, index) => (
                  <div className='slide' key={index}>
                    <img src={logo} alt='Partner Logo' />
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurPartners
