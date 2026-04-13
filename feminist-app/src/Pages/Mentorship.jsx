import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

import "../Styles/Mentorship.css"; 

import mentorshipImg from "../assets/mentorship.jpg";

const Mentorship = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1
                className="hero-title"
              >
                Feminist Femtorship Program
              </h1>

              <p className="hero-subtitle">
                Nurturing a generation of confident, empowered, and transformative
                feminist leaders through mentorship, community, and shared learning.
              </p>
              <div className="hero-line"></div>
            </Col>

            <Col md={4}>
              <div className="hero-image-wrapper">
                  <img src={mentorshipImg} alt="Femtorship" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* INTRO */}
      <section style={{ padding: "4rem 0" }}>
        <Container>
          <Row className="mb-5">
            <Col md={10}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Our Feminist Femtorship Program is designed to nurture girls and
                young women across different stages of life, equipping them with
                the confidence, knowledge, and leadership skills needed to thrive
                and create change within their communities.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                Through mentorship, peer learning, and safe spaces, we build a
                strong feminist ecosystem where girls and women support, uplift,
                and inspire each other.
              </p>
            </Col>
          </Row>

          {/* BINTI PATHWAY */}
          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold mb-4 text-center" style={{ color: "#5e1385" }}>
                The Binti Leadership Pathway
              </h3>

              <Row>
                {/* BINTI SHUPAVU */}
                <Col md={4} className="mb-4">
                  <div className="femtorship-card">
                    <h4>Binti Shupavu</h4>
                    <p className="age">(Ages 9–17)</p>
                    <p>
                      Nurturing young girls to become confident, capable, and
                      self-aware leaders through mentorship, life skills training,
                      and empowerment programs.
                    </p>
                  </div>
                </Col>

                {/* BINTI SHUJAA */}
                <Col md={4} className="mb-4">
                  <div className="femtorship-card">
                    <h4>Binti Shujaa</h4>
                    <p className="age">(Ages 17–24)</p>
                    <p>
                      Bridging generational gaps and fostering a supportive
                      feminist community where young women grow, lead, and
                      support one another.
                    </p>
                  </div>
                </Col>

                {/* BINTI KIONGOZI */}
                <Col md={4} className="mb-4">
                  <div className="femtorship-card">
                    <h4>Binti Kiongozi</h4>
                    <p className="age">(Ages 25–35)</p>
                    <p>
                      Empowering young women with leadership, advocacy, and policy
                      influence skills to drive social change and impact decision-making spaces.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* APPROACH */}
          <Row>
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: "#5e1385" }}>
                Our Approach
              </h3>

              <ul style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
                <li>Structured mentorship and coaching programs.</li>
                <li>Safe spaces for dialogue, learning, and peer support.</li>
                <li>Leadership and advocacy training.</li>
                <li>Intergenerational learning and movement building.</li>
                <li>Community engagement and real-world leadership opportunities.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Mentorship;