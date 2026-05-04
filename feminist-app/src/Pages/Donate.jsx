import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Donate.css";
import girls from "../assets/fem.png";

const Donate = () => {
  return (
    <section className="donate-hero">
      <Container className="d-flex justify-content-center">
        <div className="donate-form-card text-center">

          <h3 className="text-purple fw-bold mb-3">Support Our Work</h3>

          <p className="mb-4">
            Your donation supports grassroots feminist leadership in Kibra.
            It helps protect women and girls from gender-based violence,
            provides psychosocial support, and strengthens community-led
            justice and advocacy efforts.
          </p>

          {/* IMAGE */}
          <img
            src={girls}
            alt="Girls supported by FPRJC"
            className="img-fluid mb-4 impact-img"
          />

          {/* 🔥 NEW: FEMPAD CAMPAIGN SECTION */}
          <div className="campaign-highlight mb-4">
            <h5 className="text-purple fw-bold">
              Support the FemPad Initiative
            </h5>

            <p className="mb-2">
              We are currently raising funds to distribute{" "}
              <strong>100 dignity packs</strong> for
              girls, women, and all who menstruate in Kibera.
            </p>

            <p className="mb-0">
              Your support helps restore dignity, improve school attendance,
              and provide a sustainable solution to period poverty.
            </p>
          </div>

          {/* DONATE BUTTON */}
          <a
            href="https://www.mchanga.africa/fundraiser/120648"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-golden w-100"
          >
            Donate to FemPad Campaign
          </a>

          {/* TRUST TEXT */}
          <p className="text-muted text-center mt-3 fs-6">
            You will be redirected to M-Changa, a trusted and secure
            fundraising platform in Kenya.
          </p>

          {/* OPTIONAL SECOND CTA */}
          <a
            href="/blog/fempad-project"
            className="btn btn-outline-secondary mt-2 w-100"
          >
            Learn More About the Campaign
          </a>

        </div>
      </Container>
    </section>
  );
};

export default Donate;