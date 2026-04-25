import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import sara2 from "../assets/sara2.png";
import "../Styles/ImpactStories.css";

const ImpactStories = () => {
  const navigate = useNavigate();

  const story = {
    img: sara2,
    title: "Women Must Lead",
    descr:
      "Through education and mentorship programs, Sarah gained skills and confidence to lead initiatives in her community. She now inspires other women to achieve their dreams and take action for change.",
  };

  return (
    <section className="impact-section py-5 bg-light">
      <Container>

        <h2 className="text-purple fw-bold text-center mb-5">
          Our Impact Stories
        </h2>

        {/* STORY 1 - SARAH (IMAGE LEFT) */}
        <Row className="align-items-center my-5 story-row">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src={story.img}
              alt={story.title}
              className="img-fluid rounded shadow story-img"
            />
          </Col>

          <Col lg={6}>
            <h3 className="text-purple fw-bold mb-3">{story.title}</h3>
            <p className="text-muted fs-6 mb-3">{story.descr}</p>
            <Button
              className="btn btn-golden px-4 py-2 fw-semibold"
              onClick={() => navigate("/impact-stories")}
            >
              Read Sara's story
            </Button>
          </Col>
        </Row>

        {/* STORY 2 - VIDEO STORY (TEXT LEFT, VIDEO RIGHT) */}
        <Row className="align-items-center my-5 story-row flex-lg-row-reverse">

          {/* VIDEO */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/X7_KdyJGhW0"
                  title="Impact Story Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Col>

          {/* TEXT */}
          <Col lg={6}>
            <h3 className="text-purple fw-bold mb-3">
              Voices of Resilience
            </h3>

            <p className="text-muted fs-6 mb-3">
              This story highlights the lived experiences of women in Kibra
              who are overcoming violence, poverty, and inequality through
              collective action, support systems, and empowerment programs.
            </p>

            <p className="text-muted fs-6">
          Sarah's Journey reflects resilience, courage, and the power of
              community-led transformation.
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default ImpactStories;