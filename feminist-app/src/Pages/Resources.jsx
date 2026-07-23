import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import "../Styles/Resources.css";

const resources = [
  {
    id: 1,
    title: "FPRJC Quarterly Newsletter – Q2 2026",
    category: "Newsletter",
    description:
      "Read highlights from our programmes, impact stories, advocacy initiatives, partnerships, and organizational updates.",
    file: "/Newsletter-q2-2026.pdf",
  },
  {
    id: 2,
    title: "Child Protection and Safeguarding Advocacy Toolkit",
    category: "Toolkit",
    description:
      "A practical resource for community-based child safeguarding advocacy and policy engagement to prevent sexual and gender-based violence in schools and communities.",
    file: "/AdvocacyToolkit.pdf",
  },

];

const Resources = () => {
  return (
    <>
      {/* HERO */}
      <section className="resources-hero">
        <Container>
          <h1>Resources and Tools</h1>

          <p>
            Explore publications, toolkits, newsletters, and learning
            resources developed by FPRJC to strengthen advocacy, promote
            knowledge sharing, and support women’s rights and community
            empowerment.
          </p>
        </Container>
      </section>

      {/* RESOURCES */}
      <section className="resources-section">
        <Container>
          <Row className="g-4">
            {resources.map((resource) => (
              <Col lg={6} key={resource.id}>
                <Card className="resource-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <span className="resource-category">
                      {resource.category}
                    </span>

                    <Card.Title className="mt-3">
                      {resource.title}
                    </Card.Title>

                    <Card.Text className="flex-grow-1">
                      {resource.description}
                    </Card.Text>

                    <div className="d-flex gap-3 flex-wrap mt-3">
                      <a
                        href={resource.file}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="resource-btn">
                          View Resource
                        </Button>
                      </a>

                      <a
                        href={resource.file}
                        download
                      >
                        <Button variant="outline-secondary">
                          Download
                        </Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Resources;