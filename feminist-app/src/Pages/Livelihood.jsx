import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import waters from "../assets/waters.png";
import Footer from "../Components/Footer";

const Livelihood = () => {
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
                Climate Justice & Livelihoods
              </Badge>

              <h1 className="fw-bold display-4">When the Waters Rise: Climate Change, Flooding, and Livelihood Decline in Kibera</h1>

              <p className="lead mt-3" style={{ color: "#f3f3f3" }}>
                Every flood tells a story of resilience, but lasting solutions require climate justice, investment, and support for the women and families most affected.
              </p>

              <p className="mt-4" style={{ fontSize: "0.95rem", color: "#f1f1f1" }}>
                By <strong>Sharon Okeyo</strong> · July 07, 2026
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
                src={waters}
                alt="how floods affect Kibera"
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
                  Every rainy season, thousands of families living in Kibera prepare for much more than heavy rainfall. They brace themselves for flooded homes, contaminated water, damaged businesses, and uncertainty about how they will survive the days ahead. What was once viewed as a seasonal inconvenience has become an increasingly severe consequence of climate change, exposing communities that have contributed the least to the global climate crisis yet experience some of its harshest impacts.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  According to the <a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">Intergovernmental Panel on Climate Change (IPCC)</a>, climate change is increasing the frequency and intensity of extreme weather events worldwide, with urban informal settlements among the most vulnerable. In Kibera, homes are often built along riverbanks and poorly drained areas, where blocked drainage systems and inadequate infrastructure allow even a few hours of intense rainfall to trigger devastating floods.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                 Floodwaters quickly engulf homes and footpaths, washing away furniture, clothing, food supplies, and essential household items. Schools, health centres, markets, and transport routes become inaccessible, interrupting education, healthcare, and economic activity for entire communities. Recovery is often slow because many households lack insurance, savings, or alternative sources of income.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  The economic consequences are immediate. Most residents rely on informal livelihoods such as food vending, tailoring, domestic work, casual labour, waste collection, and small retail businesses. Flooding destroys merchandise, damages equipment, interrupts customer access, and forces businesses to close for days or even weeks. For families surviving on daily earnings, losing even a single day's income can mean going without food, medicine, or school fees.
                </p>

                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  Women and girls often shoulder the greatest burden. Beyond losing income from their businesses, many become primary caregivers during emergencies, caring for children, older family members, and those who fall ill from waterborne diseases such as cholera and typhoid. Flooding also increases protection risks, including gender-based violence, displacement, and limited access to reproductive health services. Climate change therefore deepens existing gender inequalities while placing additional physical, emotional, and economic pressures on women.
                  Despite these challenges, Kibera continues to demonstrate remarkable resilience. Women-led organizations, youth groups, and community volunteers are leading innovative solutions including waste management initiatives, urban kitchen gardens, tree planting campaigns, climate awareness programmes, recycling enterprises, and climate-smart livelihood projects. These locally driven initiatives not only reduce environmental risks but also strengthen household incomes and community resilience.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555" }}>
                  At FPRJC, we believe climate justice begins with investing in the leadership and resilience of women and girls. Through our Women's Climate Action and Livelihood Development Programme, we advocate for climate adaptation, sustainable livelihoods, community resilience, and women's participation in environmental decision-making. Building climate-resilient communities means ensuring that those most affected are also at the centre of designing and leading solutions. 
                </p>

                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontStyle: "italic",
                  }}
                >
                 Long-term solutions require more than emergency relief. Investments in improved drainage systems, affordable housing, waste management, early warning systems, climate financing, and inclusive urban planning are essential to protecting vulnerable communities. As climate impacts continue to intensify, protecting livelihoods means protecting dignity, health, education, and opportunity for future generations.
                </div>
                <div
                  className="mt-4 p-4 rounded"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderLeft: "5px solid #e5880e",
                    fontWeight: "600",
                  }}
                >
                  💜 Join FPRJC in advancing women's climate leadership and resilient livelihoods for vulnerable communities in Kibera
                </div>

                <div className="text-center mt-4">
                  <a
                    href="https://www.mchanga.africa/fundraiser/120648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-golden px-4 py-2 fw-bold"
                  >
                    Donate to Support Livelihood Development in Kibera
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

export default Livelihood;
