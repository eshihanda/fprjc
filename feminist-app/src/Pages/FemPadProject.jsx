import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fempad from "../assets/fempad.png";
import Footer from "../Components/Footer";

const FemPadProject = () => {
  return (
    <>
      {/* Blog Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #6f42c1, #eee9f1ff)",
          padding: "5rem 0",
          color: "#fff",
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10} lg={8}>
              <Badge
                className="mb-3"
                style={{
                  backgroundColor: "#e5880e",
                  fontSize: "0.9rem",
                  padding: "0.6rem 1rem",
                }}
              >
                Advocacy & Storytelling
              </Badge>

              <h1 className="fw-bold display-4">Ending Periods Poverty in Kibera</h1>

              <p className="lead mt-3" style={{ color: "#f3f3f3" }}>
                Having reliable access to safe, affordable, and reusable sanitary products means girls and women 
                in Kibera can stay in school, work with confidence, and live without fear or interruption.
              </p>

              <p className="mt-4" style={{ fontSize: "0.95rem", color: "#f1f1f1" }}>
                By <strong>Bravine Kayi</strong> · February 06, 2026
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Body */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "4rem 0" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <img
                src={fempad}
                alt="FemPad Project in Kibera"
                className="img-fluid rounded shadow mb-4"
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "cover",
                }}
              />

              <div
                className="p-4 rounded shadow-sm"
                style={{
                  backgroundColor: "#fff",
                  borderLeft: "6px solid #6f42c1",
                }}
              >
               <p style={{ fontSize: "1.15rem", lineHeight: 1.9, color: "#444" }}>
                  Menstrual health is a human right, yet for millions of girls and women, it remains out of reach. 
                  According to <a href="https://www.unicef.org/wash/menstrual-hygiene" target="_blank" rel="noopener noreferrer">UNICEF</a>, 
                  lack of access to menstrual products, safe sanitation, and accurate information continues to limit education, health, and dignity for girls worldwide. 
                  In informal settlements like Kibera, these challenges are even more severe, where poverty, stigma, and limited resources force many to miss school, 
                  risk their safety, or use unsafe alternatives during their periods.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Through our <strong>FemPad Initiative</strong>, FPRJC is taking action to end period poverty by producing 
                  <strong> 1000 reusable, KEBS-standard sanitary pads</strong> for girls, women, intersex persons, and all who menstruate. 
                  These pads are not just products; they are a pathway to dignity, confidence, and opportunity. 
                  Reusable and eco-friendly, they provide a sustainable solution that reduces long-term costs while protecting the environment.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Evidence shows that access to menstrual health solutions directly impacts education outcomes. 
                  The <a href="https://www.unesco.org/en/gender-equality/education/menstrual-health" target="_blank" rel="noopener noreferrer">UNESCO</a> 
                  reports that many girls miss school during menstruation due to lack of proper products and facilities, 
                  contributing to long-term educational inequality. In Kibera, this reality plays out daily, where a lack of menstrual supplies 
                  can mean lost opportunities, reduced confidence, and increased vulnerability to gender-based violence.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  But FemPad goes beyond distribution. This initiative also trains women to produce high-quality reusable pads, 
                  creating income-generating opportunities and strengthening local capacity. By investing in women-led solutions, 
                  we are building a model that is not only sustainable but also rooted in community empowerment and feminist leadership.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Your support can help us reach our goal and directly impact lives. A single contribution helps ensure that a girl stays in school, 
                  a woman regains her dignity, and a community moves closer to equality. Ending period poverty is not just about access, it is about justice.
                </p>

                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontStyle: "italic",
                  }}
                >
                  Together, we are rewriting the narrative because periods are power, and everyone
                  deserves to menstruate with dignity, safety, and pride.
                </div>
                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontWeight: "600",
                  }}
                >
                  💜 Join us in ending period poverty in Kibera. Support the FemPad Initiative today and help restore dignity, 
                  opportunity, and hope for girls and women.
                </div>

                <div className="text-center mt-4">
                  <a
                    href="https://www.mchanga.africa/fundraiser/120648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-golden px-4 py-2 fw-bold"
                  >
                    Donate to the FemPad Campaign
                  </a>
                </div>

                <div className="text-center mt-5">
                  <Button
                    as={Link}
                    to="/blog"
                    className="fw-bold btn-golden"
                    style={{ border: "none" }}
                  >
                    ← Back to Impact Stories
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FemPadProject;
