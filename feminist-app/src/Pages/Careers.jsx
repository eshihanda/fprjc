import React from 'react'
import '../Styles/Careers.css'
import career from '../assets/career.png'
import Footer from '../Components/Footer'

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <p>            
        Feminist for Peace Rights and Justice Center welcomes passionate,
        values-driven individuals who believe in gender equality, justice,
        and dignity. We occasionally open opportunities for employment,
        consultancy, and volunteer roles aligned with our mission.

      </p>
      </div>
  </section>
  {/* <section className="vacancies-section">
  <div className="container">
    <h3 className="vacancies-title">Open Board Leadership Opportunities</h3>

    <div className="vacancies-grid">

      <div className="vacancy-card">
        <h4>Board Member - Partnership and Development</h4>
        <p className="vacancy-meta">Volunteer | Nairobi / Remote</p>

          <a
            href="/Bdpartnership.pdf"
            target="_blank"
            className="btn btn-golden"
          >
            View Role Description (PDF)
          </a>
      </div>

      <div className="vacancy-card">
        <h4>Board Member - Resource Mobilization</h4>
        <p className="vacancy-meta">Volunteer | Nairobi / Remote</p>

          <a
          href="/Bdresource.pdf"
          target="_blank"
          className="btn btn-golden"
        >
          View Role Description (PDF)
        </a>
      </div>
      <div className="vacancy-card">
        <h4>Board Member - Feminist Leadership and Governance</h4>
        <p className="vacancy-meta">Volunteer | Nairobi / Remote</p>

          <a
            href="/Bdleadership.pdf"
            target="_blank"
            className="btn btn-golden"
          >
            View Role Description (PDF)
          </a>
      </div>
    </div>
  </div>
</section> */}
<section className="consultancy-section">
  <div className="container">
    <h3 className="vacancies-title">Consultancy Opportunities</h3>

    <div className="consultancy-grid">

      <div className="consultancy-card">
        <h4>Call for Applications: Women’s Civic Education Training</h4>

        <p className="vacancy-meta">Training Opportunity | Kibera / Community-Based</p>

        <p>
          Feminist for Peace Rights and Justice Center invites applications from women,
          girls, and community advocates interested in strengthening civic knowledge,
          human rights awareness, and democratic participation.
        </p>

        <div className="d-flex justify-content-center mt-4">
          <a
            href="https://forms.gle/eQwttHRy4wdG5ADD9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-golden fw-bold"
          >
            Apply Here
          </a>
        </div>
      </div>

      {/* TOR 1 */}
      <div className="consultancy-card">
        <h4>Training Women on Civic Literacy, Public Participation, and County Budgeting</h4>
        <p className="vacancy-meta">Consultancy | Nairobi / Remote</p>

        <p>
          We are seeking a consultant to support capacity strengthening
          for women on civic literacy and governance systems.
        </p>

        <a href="/Tor-civic.pdf" target="_blank" className="btn btn-golden">
          Download TOR
        </a>
      </div>

      {/* TOR 2 */}
      <div className="consultancy-card">
        <h4>Project Objectives, Implementation, Strategies, and Roles</h4>
        <p className="vacancy-meta">Consultancy | Nairobi / Remote</p>

        <p>
          We are looking for a consultant to deliver training on project framework, including implementation strategies,
          MEAL, and feminist leadership.
        </p>

        <a href="/Tor-project.pdf" target="_blank" className="btn btn-golden">
          Download TOR
        </a>
      </div>
      {/* TOR 3 */}
      <div className="consultancy-card">
        <h4>Digital Safety and Online Gender-based Violence Expert</h4>
        <p className="vacancy-meta">Consultancy | Nairobi / Remote</p>

        <p>
          We are looking for a consultant to deliver training on digital safety, privacy, and protection strategies
          as well as understanding of online gender-based violence and its link to offline conflict and political violence.
        </p>

        <a href="/Tor-digital.pdf" target="_blank" className="btn btn-golden">
          Download TOR
        </a>
      </div>
      {/* TOR 4 */}
      <div className="consultancy-card">
        <h4>Sign Language Interpretation and Translation Support</h4>
        <p className="vacancy-meta">Consultancy | Nairobi / Remote</p>

        <p>
          FPRJC is looking for professional sign language interpreters and translation support providers to support a forum
          that will engage 50 grassroot women, women rights defenders, young feminist leaders, and persons with disabilities to strengthen digital safety
          and counter online gender-based violence.
        </p>

        <a href="/Tor-sign.pdf" target="_blank" className="btn btn-golden">
          Download TOR
        </a>
      </div>
      {/* TOR 5 */}
      <div className="consultancy-card">
        <h4>Publications(Development, Graphic Design, and Printing)</h4>
        <p className="vacancy-meta">Consultancy | Nairobi / Remote</p>

        <p>
          FPRJC is looking for a publication consultant to help develop high quality advocacy and communications materials aligned with the project.
        </p>

        <a href="/Tor-pub.pdf" target="_blank" className="btn btn-golden">
          Download TOR
        </a>
      </div>

    </div>
  </div>
</section>
 {/* NO VACANCIES SECTION */}
{/* <section className="vacancies-section">
  <div className="container text-center">
    <h3 className="vacancies-title">Current Openings</h3>

    <div
      className="vacancy-card mx-auto"
      style={{
      maxWidth: "700px",
      padding: "2.5rem",
      borderRadius: "15px",
      background: "#fff",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h4 className="fw-bold" style={{ color: "#6f42c1" }}>
        No Current Vacancies Available
      </h4>

      <p className="text-muted mt-3" style={{ fontSize: "1.05rem" }}>
        Thank you for your interest in joining Feminist for Peace Rights
        and Justice Center. At the moment, we do not have any open job,
        consultancy, or board opportunities.
      </p>

      <p className="text-muted" style={{ fontSize: "1.05rem" }}>
        Please check back soon, or follow our updates for future openings.
      </p>

      <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
        <Button as={Link} to="/contact" className="btn btn-golden fw-bold">
          Contact Us
        </Button>

        <Button
          as={Link}
          to="/blog"
          variant="outline-secondary"
          className="fw-bold"
        >
          Visit Our Blog
        </Button>
      </div>
    </div>
  </div>
</section> */}
<Footer />
</>
  )
}
export default Careers;

