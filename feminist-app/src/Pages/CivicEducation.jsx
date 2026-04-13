import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

import "../Styles/CivicEducation.css"; 

import civicImg from "../assets/education1.png";

const CivicEducation = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            
            <Col md={7}>
              <h1 className="hero-title">
                Civic and Education Empowerment
              </h1>

              <p className="hero-subtitle">
                Empowering women and girls to understand their rights, access
                education, and actively participate in civic and democratic processes.
              </p>

              <div className="hero-line"></div>
            </Col>

            <Col md={5}>
              <div className="hero-image-wrapper">
                <img src={civicImg} alt="Civic Education" />
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
                Access to education and civic knowledge is a fundamental human right.
                However, many women and girls in marginalized communities such as Kibra
                continue to face barriers that limit their participation in education,
                leadership, and decision-making processes.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                At FPRJC, we work to break these barriers by equipping women and girls
                with knowledge, skills, and confidence to claim their rights and shape
                their futures.
              </p>
            </Col>
          </Row>

          {/* FOCUS AREAS */}
          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold mb-4 text-center" style={{ color: "#5e1385" }}>
                Our Focus Areas
              </h3>

              <Row>
                {/* CIVIC EDUCATION */}
                <Col md={6} className="mb-4">
                  <div className="civic-card">
                    <h4>Civic and Human Rights Education</h4>
                    <p>
                      Empowering women and girls to understand their democratic rights,
                      including voting, governance participation, and human rights advocacy.
                    </p>
                  </div>
                </Col>

                {/* EDUCATION ACCESS */}
                <Col md={6} className="mb-4">
                  <div className="civic-card">
                    <h4>Girls and Women’s Education</h4>
                    <p>
                      Advocating for equal access to quality education to advance
                      gender equality and improve life opportunities for girls and women.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* APPROACH */}
          <Row className="mb-5">
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: "#5e1385" }}>
                Our Approach
              </h3>

              <p style={{ lineHeight: "1.8" }}>
                We use community-based education, dialogue sessions, and mentorship
                programs to strengthen awareness and understanding of rights and
                opportunities available to women and girls.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                We also collaborate with schools, community leaders, and local
                organizations to promote inclusive education systems and civic
                participation.
              </p>
            </Col>
          </Row>

          {/* INTERVENTIONS */}
          <Row>
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: "#5e1385" }}>
                Our Interventions
              </h3>

              <ul style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
                <li>Civic education and voter awareness training.</li>
                <li>Human rights awareness campaigns.</li>
                <li>Girls’ education advocacy programs.</li>
                <li>School retention and re-entry support for girls.</li>
                <li>Community dialogues on gender equality and education.</li>
                <li>Mentorship and leadership development.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default CivicEducation;