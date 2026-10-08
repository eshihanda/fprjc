
import React from "react";
import { Container, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import "../Styles/Newsletter.css";

const Newsletter = () => {
  return (
    <>
      {/* HERO */}
      <section className="newsletter-hero">
        <Container>
          <div className="newsletter-hero-content">
            <span className="newsletter-label">
              FPRJC QUARTERLY NEWSLETTER
            </span>

            <h1>Q3 2026 Newsletter</h1>

            <p>
              July – September 2026
            </p>

            <p className="newsletter-intro">
              Explore highlights from FPRJC's programmes, community
              work, advocacy initiatives, partnerships, impact stories,
              and organizational updates during the third quarter of 2026.
            </p>
          </div>
        </Container>
      </section>


      {/* FEATURED NEWSLETTER */}
      <section className="newsletter-section">
        <Container>
          <div className="newsletter-card">

            <div className="newsletter-content">
              <span className="newsletter-category">
                LATEST EDITION
              </span>

              <h2>
                FPRJC Quarterly Newsletter – Q3 2026
              </h2>

              <p>
                Our quarterly newsletter brings together stories,
                reflections, programme highlights, community voices,
                advocacy work, partnerships, and organizational updates
                from across FPRJC.
              </p>

              <div className="newsletter-actions">

                <a
                  href="/Newsletter-q3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="newsletter-btn">
                    View Newsletter
                  </Button>
                </a>

                <a
                  href="/Newsletter-q3-2026.pdf"
                  download
                >
                  <Button variant="outline-secondary">
                    Download PDF
                  </Button>
                </a>

              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* PREVIOUS NEWSLETTERS */}
      <section className="previous-newsletters">
        <Container>

          <div className="previous-heading">
            <span>OUR PUBLICATIONS</span>

            <h2>
              Previous Newsletters
            </h2>

            <p>
              Explore previous editions of the FPRJC quarterly
              newsletter and stay connected with our work.
            </p>
          </div>

          <div className="previous-newsletter-card">

            <div>
              <span>Q2 2026</span>

              <h3>
                FPRJC Quarterly Newsletter – Q2 2026
              </h3>
            </div>

            <a
              href="/Newsletter-q2-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn newsletter-outline-btn"
            >
              View Newsletter
            </a>

          </div>

        </Container>
      </section>

      {/* RESOURCES LINK */}
      <section className="newsletter-resources">
        <Container className="text-center">

          <h3>
            Looking for more FPRJC resources?
          </h3>

          <p>
            Explore our collection of publications, toolkits,
            newsletters, and learning resources.
          </p>

          <a
            href="/resources"
            className="btn newsletter-resource-btn"
          >
            Explore Resources
          </a>

        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Newsletter;
