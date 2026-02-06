import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import water from "../assets/water.png";
import Footer from "../Components/Footer";

const EveryDropCounts = () => {
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

              <h1 className="fw-bold display-4">Every Drop Counts</h1>

              <p className="lead mt-3" style={{ color: "#f3f3f3" }}>
                How water scarcity in Kibera is shaping dignity, health, and the daily survival
                of women and girls.
              </p>

              <p className="mt-4" style={{ fontSize: "0.95rem", color: "#f1f1f1" }}>
                By <strong>Bravine Kayi</strong> · February 02, 2026
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
                src={water}
                alt="Water scarcity in Kibera"
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
                  In Kibera, water is not just a resource; it is a daily negotiation. Every morning,
                  women and girls wake up with one question: will there be water today, and if so,
                  how much will it cost?
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Water scarcity has become one of the most painful realities in the informal settlement.
                  For many households, the challenge is not only the lack of supply, but also the long
                  queues, inflated prices, and unsafe water sources that increase the risk of waterborne
                  diseases.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  The burden of this crisis is carried mostly by women and girls. They are the ones
                  expected to fetch water, manage hygiene in the household, and ensure children remain
                  clean and healthy. But in a community where water points are scarce, these daily
                  responsibilities become exhausting, time-consuming, and unsafe.
                </p>

                <h4 className="fw-bold mt-4" style={{ color: "#6f42c1" }}>
                  When Water Becomes a Safety Risk
                </h4>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  In many parts of Kibera, women are forced to collect water early in the morning or late
                  in the evening. This exposes them to harassment and gender-based violence. Young girls
                  often miss school because water collection takes hours, which is also the time that they should be learning.
                </p>

                <h4 className="fw-bold mt-4" style={{ color: "#6f42c1" }}>
                  Dignity Should Not Be a Luxury
                </h4>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Access to clean water is directly connected to menstrual health, personal hygiene,
                  and safe motherhood. When water is limited, women are forced to make difficult choices:
                  should the little water available be used for cooking, bathing, washing clothes, or
                  managing menstruation?
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  These choices are not fair; and they reflect the deeper inequalities in urban planning and
                  public investment. In a city like Nairobi, no community should be treated as invisible.
                </p>

                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontStyle: "italic",
                  }}
                >
                  “Water is life. But in Kibera, water is also stress, danger, and suffering.
                  We want our daughters to grow up knowing dignity, and not struggle.”
                </div>

                <h4 className="fw-bold mt-4" style={{ color: "#6f42c1" }}>
                  What Needs to Change
                </h4>

                <ul style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  <li>Increased access to safe, affordable community water points</li>
                  <li>Accountability from service providers and local authorities</li>
                  <li>Protection of women and girls in public spaces</li>
                  <li>Investment in sanitation and hygiene infrastructure</li>
                </ul>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  At FPRJC, we continue to advocate for policies that prioritize women’s safety, health,
                  and dignity. We believe that clean water is not a privilege, but a human right.
                </p>

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

export default EveryDropCounts;
