import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import okoko from "../assets/okoko.png";
import Footer from "../Components/Footer";

const MothersDay = () => {
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

              <h1 className="fw-bold display-4">Motherhood should not Mean Sufffering</h1>

              <p className="lead mt-3" style={{ color: "#f3f3f3" }}>
                For most people, mothers are the ideal humans. Ask anyone, especially men, who a good woman is, and the answer almost always sounds like their mother: resilient, supportive, nurturing, always there.
                The one who knows exactly what to say or do. The one who saves the day every time.
              </p>

              <p className="mt-4" style={{ fontSize: "0.95rem", color: "#f1f1f1" }}>
                By <strong>Okoko Felicitus</strong> · May 10, 2026
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
                src={okoko}
                alt="FemPad Project in Kibera"
                className="img-fluid rounded shadow mb-4"
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "cover",
                  objectPosition: "center top",
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
                  Truly, being a woman, being a mother, comes with what feels like superpowers. But the struggle, the work that goes into making all of this look seamless, is rarely seen.
                    Struggle is mostly acknowledged when it is their mother’s. Every other woman’s struggles are dismissed as self-inflicted. And success? It often looks like bottom power, the ability to endure, to carry, and to hold everything together, no matter the cost. We praise women for surviving things they should never have had to go through in the first place. 
                    As a young woman and a mother, I am unlearning some of the lessons I was taught by my mother. That to be a woman is to suffer.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  That to be a mom, you have to cease to exist. That centering my husband and child is the highest form of fulfillment. I am learning that what my mother went through does not have to be my reality. 
                  And still, I honor her. That woman has superpowers. There has never been a day I have lacked a basic need because she exists. Her sacrifice, her strength, and her resilience—I honor them by choosing something different. By staying soft. 
                  In my work, I understand how systems shape how mothers are imagined. And honestly, calling women strong and resilient might be part of the problem. It keeps us celebrating survival instead of asking why so much suffering exists.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Maybe the best way to appreciate our mothers is to make sure the next generation of women doesn’t have to survive the same things. So today, I honor all mothers who came before me, those in my time and those who will come after I am gone.
                Happy Mother’s Day to all mothers in their diversities!.
                </p>
                <hr />
                <p> <strong>The author is a Programs associate at Feminist For Peace, Rights & Justice Center</strong></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default MothersDay;
