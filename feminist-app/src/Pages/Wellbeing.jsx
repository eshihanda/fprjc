import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Wellbeing.css";
import Footer from "../Components/Footer";

import wellbeingImg from "../assets/mentorship.jpg";

const Wellbeing = () => {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "5rem 0", background: "#f4f8fb" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1
                className="fw-bold"
                style={{ color: "#5e1385", fontSize: "2.8rem" }}
              >
                Psychosocial and Mental Wellbeing
              </h1>

              <p className="mt-4" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                We prioritize mental health and psychosocial wellbeing for both
                survivors and frontline staff, recognizing that healing,
                resilience, and care are central to sustainable change.
              </p>
            </Col>

            <Col md={4}>
              <img
                src={wellbeingImg}
                alt="Wellbeing"
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
                In communities such as Kibra, exposure to violence, poverty, and
                systemic inequality significantly impacts mental health. Survivors
                of gender-based violence often face trauma, stigma, and isolation,
                while frontline staff working in these environments experience
                burnout, compassion fatigue, and secondary trauma.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                At FPRJC, we recognize that both survivors and staff require
                continuous psychosocial support. Our approach ensures that care,
                healing, and resilience are embedded within all our programs.
              </p>
            </Col>
          </Row>

          {/* TWO CORE AREAS */}
          <Row className="mb-5">
            {/* SURVIVORS */}
            <Col md={6} className="mb-4">
              <div className="wellbeing-card">
                <h3>Survivor Wellbeing</h3>
                <p>
                  We provide trauma-informed care to survivors of violence,
                  ensuring they receive immediate and long-term psychosocial
                  support to aid recovery and reintegration.
                </p>
              </div>
            </Col>

            {/* STAFF */}
            <Col md={6} className="mb-4">
              <div className="wellbeing-card">
                <h3>Staff Wellbeing</h3>
                <p>
                  We prioritize the mental health of our frontline staff through
                  structured support systems, recognizing the emotional demands
                  of working in high-risk and vulnerable communities.
                </p>
              </div>
            </Col>
          </Row>

          {/* SERVICES */}
          <Row>
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: "#5e1385" }}>
                Our Services and Support Systems
              </h3>

              <ul style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
                <li>Psychological First Aid (PFA) for survivors.</li>
                <li>Individual counseling and ongoing therapy sessions.</li>
                <li>Group therapy and peer support spaces.</li>
                <li>Safe spaces for healing and community dialogue.</li>
                <li>Staff wellness programs and debrief sessions.</li>
                <li>Implementation of a staff wellness policy.</li>
                <li>Burnout prevention and mental health awareness initiatives.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Wellbeing;