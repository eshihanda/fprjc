import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer";
import "../Styles/SRHR.css";


import srhrImg from "../assets/srhr.png"; 

const SRHR = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "5rem 0", background: "#f9f7fc" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1
                className="fw-bold"
                style={{ color: "#5e1385", fontSize: "2.8rem" }}
              >
                Sexual and Reproductive Health and Rights (SRHR)
              </h1>

              <p className="mt-4" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                We champion access to comprehensive sexual and reproductive health
                services and rights for women and girls in marginalized communities,
                ensuring dignity, autonomy, and informed choice.
              </p>
            </Col>

            <Col md={4}>
              <img
                src={srhrImg}
                alt="SRHR"
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
                In informal settlements such as Kibra, barriers to sexual and
                reproductive health services remain deeply entrenched. Poverty,
                stigma, limited access to accurate information, and restrictive
                social norms continue to deny women and girls their fundamental
                rights.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                At FPRJC, we work to dismantle these barriers by promoting
                inclusive, rights-based approaches that prioritize the needs of
                marginalized populations, including adolescents, persons with
                disabilities, and LGBTQ+ individuals.
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
                {[
                  "Menstrual Health and Hygiene",
                  "Reproductive Rights and Family Planning",
                  "Sexual Rights and Safe Abortion Advocacy",
                  "LGBTQ+ Inclusion and Rights",
                  "Girls’ Education and Adolescent Pregnancy Prevention",
                  "Access to SRHR Services",
                  "Disability-Inclusive SRHR",
                ].map((item, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <div className="srhr-card">
                      <h5>{item}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* OUR APPROACH */}
          <Row className="mb-5">
            <Col md={10}>
              <h3 className="fw-bold mb-3" style={{ color: "#5e1385" }}>
                Our Approach
              </h3>

              <p style={{ lineHeight: "1.8" }}>
                We adopt a community-centered and intersectional approach that
                combines education, service linkage, and advocacy. Through
                partnerships with local health providers, community leaders, and
                youth networks, we ensure that services are accessible, inclusive,
                and responsive to the needs of those most at risk.
              </p>

              <p style={{ lineHeight: "1.8" }}>
                Our work prioritizes safe spaces for dialogue, youth engagement,
                and empowerment, ensuring that women and girls are not only
                recipients of services but active agents of change in their
                communities.
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
                <li>Community outreach and SRHR education programs.</li>
                <li>Distribution of menstrual hygiene products to vulnerable girls.</li>
                <li>Linkage to youth-friendly and disability-inclusive health services.</li>
                <li>Advocacy for safe and legal reproductive health services.</li>
                <li>Safe spaces for adolescents and LGBTQ+ individuals.</li>
                <li>School-based programs to prevent adolescent pregnancies.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default SRHR;