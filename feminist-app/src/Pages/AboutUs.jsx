import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import about from '../assets/about2.png';
import '../Styles/About.css';

import AboutHero from '../Components/AboutHero';
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      {/* About section */}
      <section className='py-5 about-section'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6} className='mb-4 mb-md-0'>
            <img src={about} alt="kibera community" className='img-fluid rounded shadow w-100'
            style={{ height: "420px", width: "100%", objectFit: "cover" }}/>
            </Col>
            <Col md={6}>
               <h2 className="fw-bold text-purple mb-3">About FPRJC</h2>
               <p className=" text-muted">
                FPRJC exists for the realization of a society free from all forms of gender-based
                discrimination, where every individual, regardless of their gender, age, and identity can
                thrive and reach their full potential.
                Through advocacy and capacity building, we support communities to establish deep commitment to the promotion 
                of human rights and the fight against inequalities and discrimination. 
              </p>
              <p className="text-muted">
                We are the voice of the vulnerable and marginalized women, girls and other groups of different gender identities
                We drive our change agenda by focusing on women’s health rights and well-being, women’s
                leadership & governance, and women’s climate action and livelihoods development.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <div className="container text-center vision-section text-white" style={{ backgroundColor: '#9d4edd' }}>
          <h2 className="fw-bold mb-3">Our Vision</h2>
          <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
           Dignified, Safe, Just and Empowered communities.
          </p>
        </div>
      </section>
      {/* Mission & Philosophy Section */}
      <section className='py-5 mission-philosophy-section'>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="p-4 h-100 rounded shadow" style={{ backgroundColor: "#9d4edd", color: "white" }}>
                  <h3 className="fw-bold mb-3">Our Mission</h3>
                  <p>
                    {/* Replace this text with your actual mission statement */}
                    We inspire and develop a generation of grassroot women to have a voice and ignite feminism leadership
                    action for gender transformative change.
                  </p>
                </div>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="p-4 h-100 rounded shadow" style={{ backgroundColor: "white", color: "#1a1a1a", border: "2px solid #9d4edd" }}>
                  <h3 className="fw-bold mb-3 text-purple">Our Philosophy</h3>
                  <p>
                    {/* Replace this text with your actual philosophy statement */}
                    Human beings, irrespective of their gender, are unique and valuable, and should be treated with respect
                    and dignity; women have the power to ignite possibilities within them and activate their own abilities to
                    liberate, transform, and empower communities /</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Our values section */}
      <section className='py-5 text-dark' style={{ backgroundColor: "#f5f5f5" }}>
        <div className='container'>
          <h2 className='text-center text-purple mb-4 fw-bold'>
            Our Core Values
          </h2>
          <p className='text-center mb-5'>
            Principles that guide our work and relationships
          </p>
          <div className='row g-4'>
            <div className='col-md-4'>
              <div className="p-3 h-100 border border-secondary rounded shadow-sm value-card">
                <h5 className="fw-bold">Solidarity</h5>
                <p>We collaborate and work for the common good; protecting, defending,
                   and championing the rights of women, girls, and people of all gender identities.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 h-100 border border-secondary rounded shadow-sm value-card">
                <h5 className="fw-bold">Wellbeing</h5>
                <p>
                  We prioritize the wellbeing of women; we are guided by their voices,
                  visions, and dreams.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 h-100 border border-secondary rounded shadow-sm value-card">
                <h5 className="fw-bold">Intersectionality</h5>
                <p>
                  We recognize that each person is unique. We respect all identities
                  regardless of race, gender, age, or other lived experiences.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 h-100 border border-secondary rounded shadow-sm value-card">
                <h5 className="fw-bold">Transparency</h5>
                <p>
                  Our relationships are built on trust, responsibility, and a commitment
                  to accountability in all that we do.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 h-100 border border-secondary rounded shadow-sm value-card">
                <h5 className="fw-bold">Confidentiality</h5>
                <p>
                  We protect all stories, information, and data entrusted to us by our
                  beneficiaries and partners.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 h-100 border border-secondary rounded shadow-sm value-card">
                <h5 className="fw-bold">Honesty</h5>
                <p>
                  We communicate openly and genuinely while upholding privacy and
                  dignity for those we work with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default AboutUs;
