import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";
import "../Styles/Pillar3.css"; 

import climateImg from "../assets/climate1.png";

const Pillar3 = () => {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "5rem 0", background: "#eef7f1" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1
                className="fw-bold"
                style={{ color: "#2e7d32", fontSize: "2.8rem" }}
              >
                Women’s Climate Action and Livelihood Development
              </h1>

              <p className="mt-4" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                Sustaining economic wellbeing and strengthening the adaptive
                capacity of vulnerable women and girls in the face of climate change.
              </p>
            </Col>

            <Col md={4}>
              <img
                src={climateImg}
                alt="Climate Action"
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

      {/* CONTEXT */}
      <section style={{ padding: "4rem 0" }}>
        <Container>
          <Row className="mb-5">
            <Col md={10}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Climate change disproportionately affects women and girls,
                especially in informal settlements such as Kibra, where access
                to resources, safe livelihoods, and environmental protection
                systems is limited. Women often bear the burden of environmental
                degradation, food insecurity, and economic instability.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                At FPRJC, we recognize that climate justice is a gender issue.
                We work to empower women and girls to become active agents in
                climate action while strengthening their resilience and economic
                independence.
              </p>
            </Col>
          </Row>

          {/* OBJECTIVE */}
          <Row className="mb-5">
            <Col md={10}>
              <div className="climate-box">
                <h3>Our Objective</h3>
                <p>
                  To promote intersectional climate action by advocating for
                  climate justice, building community resilience, and supporting
                  inclusive livelihood development.
                </p>
              </div>
            </Col>
          </Row>

          {/* FOCUS AREAS */}
          <Row className="mb-5">
            <Col>
              <h3 className="fw-bold mb-4 text-center" style={{ color: "#2e7d32" }}>
                Our Focus Areas
              </h3>

              <Row>
                {[
                  "Climate Justice Advocacy",
                  "Community Resilience Building",
                  "Sustainable Livelihood Development",
                  "Environmental Awareness & Education",
                  "Women’s Economic Empowerment",
                ].map((item, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <div className="climate-card">
                      <h5>{item}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* INTERVENTIONS */}
          <Row>
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: "#2e7d32" }}>
                Our Interventions
              </h3>

              <ul style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
                <li>
                  Training women on climate-smart livelihoods and sustainable income generation.
                </li>
                <li>
                  Supporting small-scale green businesses and entrepreneurship.
                </li>
                <li>
                  Community awareness campaigns on environmental conservation.
                </li>
                <li>
                  Advocacy for inclusive climate policies and gender-responsive planning.
                </li>
                <li>
                  Promoting waste management and recycling initiatives.
                </li>
                <li>
                  Strengthening local networks for climate resilience and response.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Pillar3;