import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";

import gbv1 from "../assets/gbv1.jpg";
import "../Styles/Gbv.css";

const GBV = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "5rem 0", background: "#f9f7fc" }}>
        <Container>
          <Row className="align-items-center">
            {/* TEXT SIDE */}
            <Col md={8}>
              <h1
                className="fw-bold"
                style={{ color: " #5e1385", fontSize: "2.8rem" }}
              >
                Ending Gender-Based Violence and Femicide
              </h1>

              <p className="mt-4" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                At FPRJC, we are committed to building a world where women and girls
                live free from violence, fear, and systemic oppression. Our work focuses
                on prevention, protection, and justice, ensuring that survivors are
                supported and communities are transformed.
              </p>
            </Col>

            {/* IMAGE SIDE */}
            <Col md={4}>
              <img
                src={gbv1}
                alt="Ending GBV"
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

      {/* CONTENT SECTION */}
      <section style={{ padding: "4rem 0" }}>
        <Container>
          {/* INTRO */}
          <Row className="mb-4">
            <Col md={10}>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Gender-based violence (GBV) remains one of the most pervasive human
                rights violations affecting women and girls globally. It manifests in
                various forms including physical, emotional, sexual, and economic abuse,
                often reinforced by harmful cultural norms, systemic inequality, and
                silence within communities.
              </p>
            </Col>
          </Row>

          {/* HOW WE WORK */}
          <Row className="mb-5">
            <Col md={12}>
              <h3 className="fw-bold mb-4 text-center" style={{ color: "#5e1385" }}>
                Our Response Approach
              </h3>

              <Row>
                {/* RESCUE */}
                <Col md={4} className="mb-4">
                  <div className="gbv-card">
                    <h4 className="fw-bold">Rescue</h4>
                    <p>
                      We provide immediate support to survivors at risk through community
                      networks, safe spaces, and rapid response mechanisms to ensure their
                      safety and protection from further harm.
                    </p>
                  </div>
                </Col>

                {/* REFERRAL */}
                <Col md={4} className="mb-4">
                  <div className="gbv-card">
                    <h4 className="fw-bold">Referral</h4>
                    <p>
                      Survivors are connected to essential services including medical care,
                      legal aid, counseling, and protection services through trusted
                      partnerships with service providers.
                    </p>
                  </div>
                </Col>

                {/* FOLLOW-UP */}
                <Col md={4} className="mb-4">
                  <div className="gbv-card">
                    <h4 className="fw-bold">Follow-Up</h4>
                    <p>
                      We conduct continuous follow-ups to ensure survivors receive ongoing
                      support, monitor their wellbeing, and help them reintegrate safely
                      into their communities.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* SOLUTIONS */}
          <Row>
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: " #5e1385" }}>
                Our Solutions and Interventions
              </h3>

              <ul style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
                <li>
                  Community awareness campaigns to challenge harmful gender norms and
                  reduce stigma around reporting violence.
                </li>
                <li>
                  Survivor-centered support services including referrals for legal aid,
                  counseling, and medical care.
                </li>
                <li>
                  Capacity building for community leaders and stakeholders to respond
                  effectively to GBV cases.
                </li>
                <li>
                  Advocacy for stronger policies and enforcement mechanisms to protect
                  women and girls.
                </li>
                <li>
                  Safe spaces and empowerment programs for women and girls at risk.
                </li>
              </ul>

              <p className="mt-3" style={{ lineHeight: "1.8" }}>
                Through these interventions, we aim to create safer communities where
                women and girls can live with dignity, security, and equal opportunity.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default GBV;

