import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import femi from "../assets/femi.png";
import Footer from "../Components/Footer";

const FemiNgarisha = () => {
  return (
    <>
      {/* Blog Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #19083a, #eee9f1ff)",
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

              <h1 className="fw-bold display-4">Hands that Heal and Build</h1>

              <p className="lead mt-3" style={{ color: "#f3f3f3" }}>
                There was a time when buying soap was just another expense we had to worry about. As a community-based organization, we depended largely on donor funding to run our programs and respond to urgent cases in the community. 
                While we were grateful for the support, we knew we needed something more sustainable something that would empower us and the women we serve to stand on our own feet.
              </p>

              <p className="mt-4" style={{ fontSize: "0.95rem", color: "#f1f1f1" }}>
                By <strong>Bravine Kayi</strong> · January 20, 2026
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
                src={femi}
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
                  In 2021, with support from United Nations Population Fund (UNFPA), an idea was born. That idea became Feming’arisha. What started as a simple training on soap-making slowly turned into a powerful story of resilience and transformation. 
                  Women from different backgrounds came together to learn how to make soap with their own hands. Among them were survivors of gender-based violence, persons with disabilities, and women who had often been excluded from economic opportunities. 
                  For many, this was more than just a training, it was a fresh start.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  As they learned to mix ingredients and mold soap, they were also rebuilding their confidence. They were discovering that they were capable, skilled, and valuable beyond the painful experiences they had survived. 
                  They were no longer defined by their trauma. They were becoming entrepreneurs.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  The project did not stop at training. Some staff members and selected women received small grants to help them start their own businesses. Those small grants became stepping stones toward independence. 
                  The income generated through Feming’arisha began to strengthen not just individual households, but the organization itself. From the money raised, we were able to purchase a motorbike that now supports office errands and community outreach. 
                  The project also created an employment opportunity, putting food on another family’s table.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Most importantly, part of the income supports the maintenance of our rescue center a safe space where we host and protect women and girls who have survived GBV, rape, and other forms of violence. 
                  Every product sold contributes to keeping that space running, ensuring that when a woman escapes danger, there is a door open for her.
                </p>

                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontStyle: "italic",
                  }}
                >
                  Today, when we look at a bar of soap, we do not just see a product. We see courage. We see sustainability. We see women rewriting their stories. Feming’arisha is proof that when a community chooses innovation over dependency, and empowerment over limitation, transformation becomes possible.
                </div>
                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontWeight: "600",
                  }}
                >
                  💜 Join us today in supporting the Femingarisha initiatives; Hands that Build. 
                </div>
                <div className="text-center mt-4">
                  <a
                    href="https://www.mchanga.africa/fundraiser/120648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-golden px-4 py-2 fw-bold"
                  >
                    Donate to FemiNgarisha
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

export default FemiNgarisha;
