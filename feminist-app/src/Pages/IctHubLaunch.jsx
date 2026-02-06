// src/Pages/IctHubBlog.jsx
import React from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import ictHubImage from '../assets/icthub.png'; 
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";

const IctHubLaunch = () => {
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

              <h1 className="fw-bold display-4">Launch of the Kibera ICT Hub</h1>

              <p className="lead mt-3" style={{ color: "#f3f3f3" }}>
              Empowering girls and women with digital skills to break barriers and build a more inclusive future.
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
                src={ictHubImage}
                alt="ICT Hub in Kibera"
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
                  Its powerful milestone for women in Kibera as FPRJC officially launched the ICT Hub for Women,
                  a dedicated digital space designed to bridge the long-standing digital divide in informal settlements.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  For years, women in communities like Kibera have been excluded from the fast-growing digital world. 
                  Limited access to devices, costly data bundles, and low digital literacy meant many were left behind, 
                  especially during and after the COVID-19 pandemic. While the world moved online, 
                  their opportunities came to a standstill.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Three days a week, the hub comes alive with women learning how to use digital tools,
                  navigate the internet safely, tell their stories, seek online opportunities and build confidence
                  in a digital world that has not always felt safe or accessible to them.
                  But beyond skills, the ICT Hub is also a space of protection and empowerment..
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Many women in Kibera face online harassment, cyberbullying and digital exclusion.
                  Our hub integrates mental wellbeing support, feminist digital principles and
                  community dialogues that center on safety, dignity and agency. Launching this hub is
                  not just about introducing equipment, it is about opening doors. It is about rewriting
                  long-held beliefs that confine women to a narrow set of economic activities. It is about
                  affirming that women belong in tech, in digital spaces and in all online economies.
                </p>

                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontStyle: "italic",
                  }}
                >
                  “When girls and women gain digital skills, they gain a voice, a choice, 
                   and the power to shape their own future.”
                </div>

                <h4 className="fw-bold mt-4" style={{ color: "#6f42c1" }}>
                  The hub provides;
                </h4>

                <ul style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  <li>Free access to computers</li>
                  <li>Reliable WiFi</li>
                  <li>Digital literacy training</li>
                  <li>Guided online safety sessions</li>
                  <li>A supportive community for women
                    entering digital spaces</li>
                </ul>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  At FPRJC, we continue to advocate for policies that prioritize women’s safety, health,
                  and dignity. We believe that access to digital skills and safe online spaces is not a privilege, but a human right.
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

export default IctHubLaunch;
