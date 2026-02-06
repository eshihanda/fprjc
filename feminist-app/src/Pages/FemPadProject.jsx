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

              <h1 className="fw-bold display-4">Ending Period Poverty in Kibera</h1>

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
                  At FPRJC, we are proud to champion menstrual dignity through our Periods of Power initiative an empowering program
                  that trains women to produce high-quality, washable sanitary towels. Made by women for girls, women, intersex persons, and all who menstruate,
                  these reusable pads offer a sustainable, dignified alternative for our community. With a target of producing 100 durable, KEBS-standard reusable pads,
                  our goal is to support vulnerable menstruators in Kibera with a reliable, eco-friendly option. 
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Beyond affordability, these products help reduce dependence on disposable pads, protect the environment, 
                  and minimize risks of gender-based violence associated with lack of menstrual products. FEMPad is our bold step toward ending period poverty 
                  and restoring dignity for girls, women, and all who menstruate in underserved communities. 
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                    Designed under the Feminist for Peace, Rights and Justice Centre (FPRJC), FEMPad provides a safe, reliable, and empowering menstrual solution 
                    for those who often face stigma, limited access, and financial barriers during their cycles. Each pack is a symbol of care and justice a reminder 
                    that menstrual health is not a luxury but a fundamental right. Through FEMPad, we are not only meeting a need; we are breaking silence, strengthening confidence, 
                    and ensuring that every menstruator can move through life with comfort, pride, and dignity.
                </p>


                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  But this work is about more than pads. It is about restoring dignity, building skills, and breaking the silence
                  that fuels period shame. By equipping local women with hands-on training and income-generating skills, 
                  we are nurturing confidence, sustainability, and community-driven change.
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
