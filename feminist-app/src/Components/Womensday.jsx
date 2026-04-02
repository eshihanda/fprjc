import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Styles/Womensday.css";
import { Link } from "react-router-dom"; 

const Womensday = () => {
  return (
    <section className="iwd-video-section py-5">
      <Container>

        {/* Label
        <div className="text-center mb-3">
          <span className="iwd-label">
            International Women’s Month 2026
          </span>
        </div> */}

        {/* Title
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <div className="text-center mb-2">
                <span className="campaign-strip">
                #IWD2026 • #GiveToGain
                </span>
            </div>
            <h2 className="iwd-title">
              International Women's Day 2026
            </h2>

            <p className="iwd-description">
              This Women’s Month, we celebrate the strength and leadership of
              grassroots women transforming their communities. From climate
              action to community resilience, their work is shaping safer and
              healthier neighborhoods in Kibera.
            </p>
          </Col>
        </Row> */}

        {/* Video */}
        <Row className="justify-content-center mt-4">
            <Col lg={10}>
                <div className="video-card">
                <div className="video-wrapper">
                    <iframe
                    src="https://www.youtube.com/embed/X7_KdyJGhW0"
                    title="International Women's Day 2026"
                    frameBorder="0"
                    allowFullScreen
                    ></iframe>
                </div>
                </div>
            </Col>
        </Row>

        {/* Button */}
        {/* <div className="text-center mt-4">
          <Link to="/sarah-story">
            <Button className="sarah-btn">
              Read Sarah Ochieng's Story →
            </Button>
          </Link>
        </div> */}

      </Container>
    </section>
  );
};

export default Womensday;