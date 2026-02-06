import React from 'react'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import blogpost1 from '../assets/blogpost1.png'
import water from '../assets/water.png'
import Footer from '../Components/Footer';

import { Link } from "react-router-dom"


const Blog = () => {
  return (
    <>
    <section
      style={{
        backgroundImage: `url(${blogpost1})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // dark overlay
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              News and Stories that Matter
            </h1>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="fw-bold mb-4" style={{ color: "#6f42c1" }}>
          Featured Story
        </h2>

        <div
          className="p-4 rounded shadow-sm"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Row className="align-items-center">
            {/* Image */}
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src={water}
                alt="Featured story"
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
            </Col>

            {/* Content */}
            <Col md={6}>
              <Badge
                className="mb-3"
                style={{
                  backgroundColor: "#9c75e4",
                }}
              >
                Advocacy & Storytelling
              </Badge>

              <h3 className="fw-bold mt-2">
                Every Drop Counts
              </h3>

              <p className="text-muted mt-3">
                In Kibera, access to clean water has become an everyday struggle.
                Long queues, inflated prices, and unsafe sources force families;
                especially women and girls, to make impossible choices.
                This story captures how water scarcity affects dignity, health,
                and survival in one of Nairobi’s largest informal settlements.
              </p>

              <p className="small text-muted mb-4">
                By <strong>Bravine Kayi</strong> · February 02, 2026
              </p>

              <Button
                as={Link}
                to="/blog/every-drop-counts"
                variant="primary"
                style={{
                  backgroundColor: "#e5880e",
                  border: "none",
                }}
              >
                Read Full Story →
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    <section className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <Container>
        <h2 className="fw-bold mb-4" style={{ color: "#6f42c1" }}>
          Stories Making Headlines
        </h2>

        <Row>
          {/* Story 1 */}
          <Col md={6} className="mb-4">
            <div
              className="p-4 rounded shadow-sm h-100"
              style={{
                backgroundColor: "#ffffff",
                borderLeft: "6px solid #6f42c1",
              }}
            >
              <Badge
                className="mb-3"
                style={{
                  backgroundColor: "#9c75e4",
                }}
              >
                Community Empowerment
              </Badge>

              <h4 className="fw-bold">
                ICT HUB Launch: Empowering Girls and Women with Digital Skills
              </h4>

              <p className="text-muted mt-3" style={{ lineHeight: 1.7 }}>
                In Kibera, access to technology is more than opportunity; it is power.
                Through the launch of our ICT Hub, girls and young women are gaining
                digital skills to expand their horizons, improve employability, and
                build confidence in leadership.
              </p>

              <p className="small text-muted mb-4">
                By <strong>FPRJC Staff</strong> · February 2026
              </p>

              <Button
                as={Link}
                to="/blog/ict-hub-launch"
                style={{
                  backgroundColor: "#e5880e",
                  border: "none",
                }}
              >
                Read Full Story →
              </Button>
            </div>
          </Col>

          {/* Story 2 */}
          <Col md={6} className="mb-4">
            <div
              className="p-4 rounded shadow-sm h-100"
              style={{
                backgroundColor: "#ffffff",
                borderLeft: "6px solid #6f42c1",
              }}
            >
              <Badge
                className="mb-3"
                style={{
                  backgroundColor: "#9c75e4",
                }}
              >
                Health & Dignity
              </Badge>

              <h4 className="fw-bold">
                FEMPAD Project: Washable Sanitary Towels Restoring Dignity
              </h4>

              <p className="text-muted mt-3" style={{ lineHeight: 1.7 }}>
                Menstrual health is a human right. Through the FEMPAD initiative, we
                are producing high-quality, washable sanitary towels to support girls
                and women in Kibera; reducing stigma, promoting dignity, and keeping
                girls in school.
              </p>

              <p className="small text-muted mb-4">
                By <strong>FPRJC Staff</strong> · February 2026
              </p>

              <Button
                as={Link}
                to="/blog/fempad-project"
                style={{
                  backgroundColor: "#e5880e",
                  border: "none",
                }}
              >
                Read Full Story →
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />

   </>
  )
}
export default Blog;
