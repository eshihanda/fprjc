import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Styles/Donate.css";
import girls from "../assets/girls.png";

const Donate = () => {
  return (
    <section className="donate-hero">
      <Container>
        <Row className="align-items-center">
          
          {/* LEFT: Donation Form */}
          <Col md={6} className="mb-4">
            <div className="donate-form-card">
              <h3 className="text-purple fw-bold mb-3">Make a Donation</h3>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Donation Amount</Form.Label>
                  <Form.Control type="number" placeholder="Enter amount" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <a
                  href="https://www.mchanga.africa/fundraiser/120648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-golden w-100"
                >
                  Donate Securely via M-Changa
                </a>
                 <p className="text-muted text-center mt-2 fs-6">
                    Secure payments powered by M-Changa & M-Pesa
                  </p>
              </Form>
            </div>
          </Col>

          {/* RIGHT: Why / Impact */}
          <Col md={6} className="text-white">
            <h2 className="fw-bold mb-3">
              Your Gift Creates Safety, Dignity, and Justice
            </h2>

            <p className="fs-5">
              Your donation supports grassroots feminist leadership in Kibra.
              It helps rescue and protect young girls and women from sexual
              violence, provides case management and psychosocial support, and
              strengthens community-led justice and advocacy efforts.
            </p>
            <img src={girls} alt="Girls" className="img-fluid mb-4 impact-img" />
            <p className="fs-6">
              Every contribution,no matter the size, helps a survivor reclaim
              her voice and rebuild her future.
            </p>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Donate;
