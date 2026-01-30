import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../Components/Footer";

import dita1 from "../assets/dita1.jpeg";

const FounderBio = () => {
  return (
    <>
      <section style={{ backgroundColor: "#f5f5f5", padding: "4rem 0" }}>
        <Container>
          {/* Page Title */}
          <h2
            className="fw-bold text-center mb-2 board-title"
            style={{ color: "#6f42c1" }}
          >
            Our Executive Director
          </h2>

          <p className="lead text-center mb-5">
            A story of vision, courage, and feminist leadership
          </p>

          {/* Main Card */}
          <Row className="justify-content-center">
            <Col md={10}>
              <div
                className="p-4 rounded shadow-sm"
                style={{
                  background: "#fff",
                  borderLeft: "6px solid #6f42c1"
                }}
              >
                {/* Image + Intro Text */}
                <Row className="align-items-start mb-4">
                  <Col md={4} className="mb-3 mb-md-0 text-center">
                    <img
                      src={dita1}
                      alt="Editar Ochieng"
                      className="img-fluid"
                      style={{
                        height: "320px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "12px"
                      }}
                    />
                  </Col>

                  <Col md={8}>
                    <h4 className="fw-bold mb-2">Editar Ochieng</h4>
                    <p className="text-muted mb-3">
                      Founding Executive Director
                    </p>

                    <p>
                        Editar Ochieng is an unapologetic and proud feminist, peace activist,
                        and a woman human rights defender committed to the advancement of women's rights
                        and social justice in Kenya. The founder and Executive Director of the Feminist for
                        Peace, Rights and Justice Centre (FPRJC) and a co-convenor of WILD FEMINIST NETWORK. 
                    </p>

                    <p>
                        Editar has dedicated her life to creating a society where every woman and girl
                        can live with dignity, freedom, and full access to her rights. An intersectional feminist,
                        Editar envisions a society that enables the full development, safety, equal rights,
                        fair justice, and self-actualization of young women. 
                    </p>
                  </Col>
                </Row>

                {/* Full-Width Story */}
                <Row>
                  <Col>
                    <p>
                      Through her center, she has built a vibrant, multi generational organizing and networking 
                      space where young women are mentored into leadership and are empowered to share their lived experiences.
                      Editar has been a vocal and fearless advocate in the fight against retrogressive cultures, 
                      patriarchal ideologies,  femicide and GBV  in Kenya. 
                      Using her powerful social media presence and community organizing skills, she brings national and global attention
                      to the rising cases of gender-based killings and violence.
                      Her activism has led to public dialogues, policy conversations, and urgent calls for justice and accountability. 

                    </p>

                    <p>
                      She believes that telling women’s stories and naming the systemic violence they face is essential 
                      to disrupting patriarchal silence and driving transformative change.
                      Her advocacy spans across critical issues—championing the implementation of UN Security Council Resolution 1325
                      to ensure women are included in peace and security strategies and decision making spaces,
                      especially in previously marginalized and crime-ridden area
                    </p>

                    <h5 className="fw-bold mt-4 mb-3" style={{ color: "#6f42c1" }}>
                        Achievements & Recognition
                    </h5>
                    <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.8 }}>
                        <li>
                            <strong>Echo Network Award Winner (2018)</strong> – Recognized as one of the
                            women changing how the world looks.
                        </li>
                        <li>
                            <strong>Human Rights Defender Award Nominee (2019)</strong> – Defenders Coalition.
                        </li>
                        <li>
                            <strong>Top 35 Under 35 – Exemplary Leader (2020)</strong> – The Youth Agenda.
                        </li>
                        <li>
                            <strong>100 Most Influential People in Gender Policy (2021)</strong>.
                        </li>
                        <li>
                            <strong>Activist of the Year Award (2022)</strong> – Africans Rising.
                        </li>
                        <li>
                            <strong>Featured in Everyday Feminism Campaign & Book (2025)</strong> – 
                            International Women’s Day, WomanKind Worldwide.
                        </li>
                     </ul>
                     <p className="mt-4">
                        Her voice for dismantling patriarchy is unwavering. Editar consistently calls
                        on global leaders and institutions to move beyond symbolic representation and
                        ensure women and girls are meaningfully included in decision-making spaces.
                    </p>
                    <p>
                        She believes lasting change is only possible through intentional inclusion,
                        accountability, and a bold feminist lens grounded in justice.
                    </p>

                    <blockquote
                      className="mt-4 ps-4"
                      style={{
                        borderLeft: "4px solid #6f42c1",
                        fontStyle: "italic",
                        color: "#555"
                      }}
                    >
                      “Feminist leadership is not about power over others, but
                      responsibility to community, truth, and justice.”
                    </blockquote>

                    {/* Back Button */}
                    <div className="text-center mt-5">
                      <Button
                        href="/our-team"
                        className="fw-bold btn-golden"
                        variant="light"
                      >
                        ← Back to Our Team
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default FounderBio;
