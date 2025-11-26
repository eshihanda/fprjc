import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import story1 from "../assets/story1.png";
import "../Styles/ImpactStories.css";

const ImpactStories = () => {
  const story = {
    img: story1,
    title: "Women Must Lead",
    descr: "Through education and mentorship programs, Sarah gained skills and confidence to lead initiatives in her community. She now inspires other women to achieve their dreams and take action for change.",
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-purple fw-bold text-center mb-5">
          Our Impact Stories
        </h2>

        <Row className="align-items-center my-5 diagonal-row">
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
              href="/impact-stories"
              className="btn btn-golden px-4 py-2 fw-semibold"
            >
              Chief Achieng's story
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImpactStories;
