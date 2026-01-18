import React from 'react'
import '../Styles/Careers.css'
import career from '../assets/career.png'
import Footer from '../Components/Footer'

const Careers = () => {
  return (
    <>
    <section className='d-flex align-items-center justify-content-center about-hero-section'
        style={{backgroundImage:`url(${career})`, height:'60vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <h1 className='display-3 fw-bold text-white'> Career Opportunities</h1>
            <p className="lead text-light mt-2">Join the Movement for Justice and Dignity</p>
        </div>
    </section>
    <section className='careers-intro'>
      <div className='container'>
        {/* <p>We are always looking for passionate, committed individuals to join our
          mission of advancing justice, dignity, and safety for girls and women in
          Kibra.
      </p> */}
      <p>Feminist for Peace Rights and Justice Center is seeking passionate, values-driven
      leaders to serve on our Board of Directors and support our mission to protect girls
      and women from violence and strengthen grassroots feminist leadership.
      </p>
      </div>
  </section>
  <section className="vacancies-section">
  <div className="container">
    <h3 className="vacancies-title">Open Board Leadership Opportunities</h3>

    <div className="vacancies-grid">

      <div className="vacancy-card">
        <h4>Board Member - Partnership and Development</h4>
        <p className="vacancy-meta">Volunteer | Nairobi / Remote</p>

        <a
          href="public/jobs/Bdpartnership.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-golden"
        >
          View Role Description(PDF)
        </a>
      </div>

      <div className="vacancy-card">
        <h4>Board Member - Resource Mobilization</h4>
        <p className="vacancy-meta">Volunteer | Nairobi / Remote</p>

        <a
          href="public/jobs/Bdresource.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-golden"
        >
          View Role Description(PDF)
        </a>
      </div>
      <div className="vacancy-card">
        <h4>Board Member - Feminist Leadership and Governance</h4>
        <p className="vacancy-meta">Volunteer | Nairobi / Remote</p>

        <a
          href="public/jobs/Bdleadership.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-golden"
        >
          View Role Description(PDF)
        </a>
      </div>
    </div>
  </div>
</section>
<section className="consultancy-section">
  <div className="container">
    <h3 className="vacancies-title">Consultancy and Call for Proposals</h3>

    <div className="consultancy-card">
      <h4>
        Consultancy for Organizational Capacity Strengthening on Advocacy, Policy Engagement, and Safeguarding
      </h4>

      <p className="vacancy-meta">
        Consultancy Opportunity | Nairobi / Remote
      </p>

      <p>
        Feminist for Peace Rights and Justice Center invites qualified consultants
        and firms to submit proposals for an organizational capacity strengthening
        assignment focused on advocacy, policy engagement, and safeguarding.
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <a
          href="public/jobs/Tor.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-golden"
        >
          Download TOR (PDF)
        </a>
      </div>
    </div>
  </div>
</section>
<Footer />
</>
  )
}
export default Careers;

