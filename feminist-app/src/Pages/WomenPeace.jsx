import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

import "../Styles/WomenPeace.css"; 
import peaceImg from "../assets/leadership.png";

const WomenPeace = () => {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "5rem 0", background: "#f9f7fc" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1
                className="fw-bold"
                style={{ color: "#5e1385", fontSize: "2.8rem" }}
              >
                Women, Peace and Security
              </h1>

              <p className="mt-4" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                Empowering women and girls to understand, claim, and exercise their
                democratic rights while actively participating in peacebuilding and
                governance processes.
              </p>
            </Col>

            <Col md={4}>
              <img
                src={peaceImg}
                alt="Women Peace and Security"
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
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
                Women and girls, particularly in marginalized communities such as
                informal settlements, are often excluded from decision-making
                processes that directly affect their lives. Limited access to
                information, systemic inequalities, and social barriers hinder
                their full participation in governance and peacebuilding.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                At FPRJC, we work to bridge this gap by equipping women and girls
                with the knowledge, skills, and confidence needed to actively
                engage in civic and democratic spaces.
              </p>
            </Col>
          </Row>

          {/* CORE FOCUS */}
          <Row className="mb-5">
            <Col md={12}>
              <h3 className="fw-bold mb-4 text-center" style={{ color: "#5e1385" }}>
                Our Focus
              </h3>

              <Row>
                <Col md={6} className="mb-4">
                  <div className="wps-card">
                    <h4>Democratic Participation</h4>
                    <p>
                      Empowering women and girls with knowledge about their rights,
                      including voting, civic engagement, and participation in
                      governance processes.
                    </p>
                  </div>
                </Col>

                <Col md={6} className="mb-4">
                  <div className="wps-card">
                    <h4>Human Rights Advocacy</h4>
                    <p>
                      Strengthening the capacity of women and girls to advocate
                      for their rights and influence policies that affect their
                      lives and communities.
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
                We adopt a rights-based and participatory approach that centers
                women and girls as active agents of change. Through training,
                mentorship, and community engagement, we create opportunities for
                meaningful participation in governance and peacebuilding processes.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                We also work closely with community leaders, institutions, and
                stakeholders to promote inclusive and gender-responsive systems.
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
                <li>Civic education and voter awareness programs.</li>
                <li>Training on human rights and advocacy skills.</li>
                <li>Leadership development for women and girls.</li>
                <li>Community dialogues on governance and inclusion.</li>
                <li>Support for women’s participation in decision-making spaces.</li>
                <li>Engagement with policymakers and stakeholders.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default WomenPeace;