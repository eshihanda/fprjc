import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import thumb from "../assets/thumb.png";
import "../Styles/Activities.css";

const Activities = () => {
  return (
    <section className="activities-section py-5" style={{ backgroundColor: "#f9f9fb" }}>
      <Container>
        <Row className="align-items-center">
          {/* Text Column */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <h5 className="section-subtitle mb-2">Our Activities</h5>
            <h2 className="section-title mb-4">
              What We Do
            </h2>
            <p className="section-text mb-4">
              We work with communities to promote gender equality, women’s rights,
              and leadership development through advocacy, training, and
              empowerment programs. Our activities focus on building inclusive
              systems that support women’s health, education, and socio-economic
              advancement.
            </p>
            <Button
              href="/activities"
              className="btn-golden px-4 py-2 fw-semibold"
            >
              Learn More
            </Button>
          </Col>

          {/* Video Thumbnail Column */}
          <Col lg={6} className="d-flex justify-content-center position-relative">
            <img
              src={thumb}
              alt="Our work in action"
              className="img-fluid rounded shadow thumbnail-img"
            />
            <div className="play-overlay d-flex justify-content-center align-items-center">
              <span>▶</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Activities;
