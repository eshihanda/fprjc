import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import about1 from '../assets/about1.png';
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
            <img src={about1} alt="kibera community" className='img-fluid rounded shadow w-100'
            style={{ height: "420px", width: "100%", objectFit: "cover" }}/>
            </Col>
            <Col md={6}>
               <h2 className="fw-bold text-purple mb-3">About FPRJC</h2>
               <p className=" text-muted">
                FPRJC exists for the realization of a society free from all forms of gender-based
                discrimination, where every individual, regardless of their gender, age, and identity can
                thrive and reach their full potential.
              </p>
              <p className="text-muted">
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
      {/* Why women */}
      <section className='py-5 why-women-section'>
        <Container>
          <motion.small
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          >
            WHY WOMEN?
          </motion.small>

          <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            We are Striving to Achieve Gender Equality, which is a Fundamental Human Right
          </motion.h2>

          <motion.p
          className="section-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
          For a long time, women in our communities have faced discrimination and
          marginalization from all forms of life. Women face persistent barriers
          to education, technology, and economic empowerment, which hinder their
          ability to reach their full potential. By investing in the education and
          digital empowerment of women and girls, we aim to break cycles of
          inequality, build confidence, and create pathways to independence and
          leadership. <br /> <br />
          At FPRJC, our <strong>mission</strong> is to inspire and develop a generation of
          grassroot women to have a voice and ignite feminism leadership action for gender 
          transformative change. We are the voice of the vulnerable and marginalized women, 
          girls and other groups of different gender identities.
          </motion.p>
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
                <p>We collaborate and work for the common good—protecting, defending,
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
