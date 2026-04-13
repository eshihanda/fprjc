import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

import "../Styles/WomenTech.css"; 

import techImg from "../assets/icthub.png";

const WomenTech = () => {
  return (
    <>
      {/* ✅ NEW HERO SECTION */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            
            {/* TEXT */}
            <Col md={7}>
              <h1 className="hero-title">
                Women and Technology
              </h1>

              <p className="hero-subtitle">
                Bridging the digital divide by equipping women and girls with
                essential digital skills, tools, and opportunities to thrive in
                the digital world.
              </p>

              <div className="hero-line"></div>
            </Col>

            {/* IMAGE */}
            <Col md={5}>
              <div className="hero-image-wrapper">
                <img src={techImg} alt="ICT Hub" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* INTRO */}
      <section style={{ padding: "3rem 0" }}>
        <Container>
          <Row className="mb-5">
            <Col md={10}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                In today’s world, access to technology is no longer a luxury; it is
                a necessity. However, women and girls in marginalized communities,
                particularly in informal settlements like Kibra, often face
                barriers to accessing digital tools, skills, and opportunities.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                At FPRJC, we are committed to closing this gap by creating safe,
                inclusive spaces where women and girls can learn, explore, and
                thrive in the digital space.
              </p>
            </Col>
          </Row>

          {/* ICT DADA HUB */}
          <Row className="mb-5">
            <Col md={10}>
              <div className="tech-box">
                <h3>ICT Dada Hub</h3>
                <p>
                  Our ICT Dada Hub is a dedicated digital learning space designed
                  to equip women and girls with practical technology skills. The
                  hub provides access to computers, internet, and structured
                  training programs that empower participants to build confidence
                  and competence in the digital world.
                </p>
              </div>
            </Col>
          </Row>

          {/* TRAININGS */}
          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold mb-4 text-center" style={{ color: "#1e3a8a" }}>
                What We Offer
              </h3>

              <Row>
                {[
                  "Basic Computer Literacy",
                  "Microsoft Office Skills (Word, Excel, PowerPoint)",
                  "Internet Use and Online Safety",
                  "Digital Communication Skills",
                  "Introduction to Coding and Web Development",
                  "Online Work and Freelancing Skills",
                ].map((item, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <div className="tech-card">
                      <h5>{item}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* IMPACT */}
          <Row>
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: "#1e3a8a" }}>
                Our Impact
              </h3>

              <p style={{ lineHeight: "1.8" }}>
                Through our ICT programs, women and girls gain confidence,
                improve their employability, and access new opportunities for
                income generation. By equipping them with digital skills, we are
                not only transforming individual lives but also contributing to
                stronger, more resilient communities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default WomenTech;