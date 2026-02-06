import React from 'react'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import water from '../assets/water.png'

const Blog = () => {
  return (
    <>
    <section style={{ backgroundColor: "#f5f5f5", padding: "5rem 0" }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <h1 className='fw-bold' style={{color:"#6f42c1", fontSize: "3rem",}}>
            Impact Stories
            </h1>
            <p className='lead'
              style={{
                color: "#555",
                fontSize: "1.25rem",
                lineHeight: 1.8,
                borderLeft: "5px solid #6f42c1",
                paddingLeft: "1rem",
              }}
            >
              Reflections from our work on the ground—amplifying women’s voices,
              influencing policy, and mobilizing resources for justice, dignity,
              and feminist leadership.
            </p>
            <p
              className="mt-4"
              style={{
                color: "#777",
                fontSize: "0.95rem",
              }}
            >
              Written by FPRJC staff • Published biweekly
            </p>
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
   </>
  )
}
export default Blog;
