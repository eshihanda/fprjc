import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import womenvoices from "../assets/womenvoices.png";
import Footer from "../Components/Footer";

const Amplify = () => {
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

              <h1 className="fw-bold display-4">Amplifying Women Voices for Peace through Storytelling</h1>

              <p className="lead mt-3" style={{ color: "#f3f3f3" }}>
                Through digital storytelling, FPRJC is creating space for grassroots women peacebuilders, feminist activists, human rights defenders, survivors, and community leaders to share their experiences and inspire change
              </p>

              <p className="mt-4" style={{ fontSize: "0.95rem", color: "#f1f1f1" }}>
                By <strong>Bravine Kayi</strong> · Aug 10, 2026
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
                src={womenvoices}
                alt="women speaking about digital storytelling"
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
                  The Feminists for Peace, Rights and Justice Centre (FPRJC), with the support of FEMPEACE, is using digital storytelling to advance the Women, Peace and Security (WPS) agenda by
                    amplifying the voices of grassroots women leading peace and justice efforts in Kibera.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Through a powerful podcast and a series of digital testimonials, grassroots peacebuilders, feminist activists, human rights defenders, survivors of conflict and violence, and community
                    leaders share their lived experiences of building peace, resolving conflict, and driving positive change. These stories highlight the strength of feminist leadership and the vital role women play
                    in creating inclusive, resilient, and peaceful communities..
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  By harnessing the power of storytelling, FPRJC is creating spaces where women&#39;s voices are heard, valued, and celebrated. The initiative has sparked meaningful conversations, strengthened
                community advocacy, and inspired collective action for gender equality and social justice. Together with FEMPEACE, we continue to transform local voices into a growing movement for
                peace, justice, and equality—because every story shared has the power to inspire change and build a more peaceful future.
                </p>
                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontStyle: "italic",
                  }}
                >
                Every story has the power to inspire change. Together, we can amplify women's voices, strengthen the movement for peace and justice, and build a more equal and peaceful future..
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

export default Amplify;
