import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import sara2 from "../assets/sara2.png";
import "../Styles/ImpactPage.css";
import Footer from "../Components/Footer";

const ImpactStoriesPage = () => {
  const sarahQuote = `"Every young girl I help is a step towards a safer, empowered Kibra. Change begins when we refuse to stay silent."`;

  return (
    <>
    <div>
      {/* Purple title section */}
      <section className="impact-header text-white text-center py-4">
        <h2 className="fw-bold">Women Stories of Change</h2>
      </section>

      {/* Sarah's story container */}
      <Container className="my-5 sarah-story-container p-4 bg-white">
        {/* Quote Section */}
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <p className="fs-5 fst-italic text-purple">{sarahQuote}</p>
          </Col>
        </Row>

        {/* Sarah image */}
        <Row className="mb-3">
          <Col>
            <img
              src={sara2}
              alt="Sarah"
              className="img-fluid sarah-img"
            />
          </Col>
        </Row>

        {/* Name, title, organization with horizontal line */}
        <Row className="align-items-center mt-2">
          <Col>
            <p className="text-purple fw-bold mb-1">Sarah Dafala, Case Manager; Feminist for Peace Rights and Justice Center</p>
             <hr /> {/* horizontal line */}
        
          </Col>
        </Row>
        <section className="my-5">
            <h3 className="text-purple fw-bold mb-4">Sarah’s Journey</h3>
            <p className="mb-3">
                Sarah Dafala grew up witnessing the struggles of young girls and women in Kibra's informal settlements. From a young age, she was determined to stand up for the vulnerable, and she channeled her passion into becoming a case manager dedicated to protecting survivors of sexual violence and abuse.
            </p>
            <p className="mb-3">
                Over the past 8 years, Sarah has worked tirelessly in the slums of Kibra, rescuing over <strong>150 young girls and women</strong> from abusive situations. She provides counseling, educational support, and guidance to help them regain control over their lives. She also collaborates closely with local authorities and NGOs to ensure justice is pursued in cases of defilement and abuse.
            </p>
            <p className="mb-3">
                Beyond direct intervention, Sarah leads mentorship programs, community awareness campaigns, and workshops aimed at preventing gender-based violence. Her initiatives have reached over <strong>500 community members</strong> through awareness sessions and advocacy programs, creating a ripple effect of empowerment and resilience throughout Kibra.
            </p>
            <p className="mb-3">
                Sarah’s work demonstrates the power of dedication and advocacy in transforming vulnerable communities. Her efforts have not only rescued lives but also inspired a generation of women to stand up for their rights and support each other.
            </p>
            <p className="fst-italic text-purple mb-4">
                "Every young girl I help is a step towards a safer, empowered Kibra. Change begins when we refuse to stay silent."
            </p>
            <Row className="text-center">
                <Col md={4} className="mb-3">
                <h4 className="text-purple fw-bold">150+</h4>
                <p>Girls and women rescued</p>
                </Col>
                <Col md={4} className="mb-3">
                <h4 className="text-purple fw-bold">500+</h4>
                <p>Community members reached</p>
                </Col>
                <Col md={4} className="mb-3">
                <h4 className="text-purple fw-bold">8</h4>
                <p>Years of dedicated service</p>
                </Col>
            </Row>
            <div className="text-center mt-4">
                <Button className="btn btn-golden px-4 py-2 fw-semibold" href="/donate">
                    Support Women Leaders
                </Button>
            </div>
        </section>
    </Container>
    </div>
    <Footer />
   </>
  );
};

export default ImpactStoriesPage;
