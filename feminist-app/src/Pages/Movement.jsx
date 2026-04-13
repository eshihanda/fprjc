import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

import "../Styles/Movement.css"; 


import movementImg from "../assets/movement.jpg";

const Movement = () => {
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
                Movement Building
              </h1>

              <p className="mt-4" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                Strengthening feminist movements by building the capacity of
                grassroots organizations, supporting women human rights defenders,
                and fostering solidarity through networks.
              </p>
            </Col>

            <Col md={4}>
              <img
                src={movementImg}
                alt="Movement Building"
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
                Sustainable change cannot happen in isolation. In communities like
                Kibra, grassroots organizations and activists are at the forefront
                of advancing gender equality and social justice.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                At FPRJC, we invest in strengthening feminist movements by
                equipping organizations, activists, and networks with the tools,
                knowledge, and support they need to thrive and create lasting
                impact.
              </p>
            </Col>
          </Row>

          {/* KEY AREAS */}
          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold mb-4 text-center" style={{ color: "#5e1385" }}>
                Our Focus Areas
              </h3>

              <Row>
                {/* CAPACITY BUILDING */}
                <Col md={4} className="mb-4">
                  <div className="movement-card">
                    <h4>Capacity Strengthening</h4>
                    <p>
                      Supporting grassroots-led organizations through training,
                      mentorship, and resource mobilization to enhance their
                      sustainability and impact.
                    </p>
                  </div>
                </Col>

                {/* WHRD */}
                <Col md={4} className="mb-4">
                  <div className="movement-card">
                    <h4>Women Human Rights Defenders</h4>
                    <p>
                      Working with and supporting women health rights defenders
                      by strengthening their advocacy capacity, safety, and
                      visibility in advancing gender justice.
                    </p>
                  </div>
                </Col>

                {/* NETWORK */}
                <Col md={4} className="mb-4">
                  <div className="movement-card">
                    <h4>Wild Feminist Network</h4>
                    <p>
                      Building and nurturing feminist networks that foster
                      solidarity, collaboration, and collective action across
                      communities and movements.
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
                Our approach to movement building is grounded in collaboration,
                inclusivity, and shared leadership. We prioritize grassroots
                voices and ensure that local organizations and activists are at
                the center of decision-making processes.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                Through partnerships, mentorship, and continuous engagement, we
                create spaces for learning, exchange, and collective growth.
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
                <li>Capacity building workshops for grassroots organizations.</li>
                <li>Mentorship and coaching for emerging feminist leaders.</li>
                <li>Support for women human rights defenders.</li>
                <li>Facilitating networking and partnership opportunities.</li>
                <li>Convening dialogues and feminist forums.</li>
                <li>Strengthening collective advocacy efforts.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Movement;