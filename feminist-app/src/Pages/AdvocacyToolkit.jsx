import React from "react";
import { Container, Button } from "react-bootstrap";
import Footer from "../Components/Footer";

const AdvocacyToolkit = () => {
  return (
    <>
      <section
        style={{
          background: "#f9f7fc",
          padding: "5rem 0",
        }}
      >
        <Container>
          <h1
            className="fw-bold mb-4"
            style={{ color: "#5e1385" }}
          >
            Child Protection and Safeguarding Advocacy Toolkit
          </h1>

          <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
            A Practical Resource for community based child safeguarding
            advocacy and policy engagement to prevent SGBV and related
            violence in learning institutions and in the community
          </p>

          <p style={{ lineHeight: "1.8" }}>
            The resource includes advocacy approaches, safeguarding
            principles, referral pathways, community engagement
            strategies, and tools for promoting safe environments for
            children and adolescents.
          </p>

          <div className="mt-4 d-flex gap-3 flex-wrap">
            <a
              href="/AdvocacyToolkit.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{
                  backgroundColor: "#5e1385",
                  border: "none",
                }}
              >
                View Toolkit
              </Button>
            </a>

            <a
              href="/AdvocacyToolkit.pdf"
              download
            >
              <Button
                variant="outline-secondary"
              >
                Download Toolkit
              </Button>
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default AdvocacyToolkit;