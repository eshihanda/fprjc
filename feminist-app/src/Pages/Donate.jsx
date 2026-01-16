import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Donate.css";
import girls from "../assets/girls.png";

const Donate = () => {
  return (
    <section className="donate-hero">
      <Container className="d-flex justify-content-center">
        <div className="donate-form-card text-center">

          <h3 className="text-purple fw-bold mb-3">Support Our Work</h3>

          <p className="mb-4">
            Your donation supports grassroots feminist leadership in Kibra.
            It helps rescue and protect young girls and women from sexual
            violence, provides case management and psychosocial support, and
            strengthens community-led justice and advocacy efforts.
          </p>

          <img
            src={girls}
            alt="Girls supported by FPRJC"
            className="img-fluid mb-4 impact-img"
          />

          <a
            href="https://www.mchanga.africa/fundraiser/120648"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-golden w-100"
          >
            Donate Securely via M-Changa
          </a>

          <p className="text-muted text-center mt-3 fs-6">
            You will be redirected to M-Changa, a trusted and secure fundraising platform in Kenya.
          </p>

        </div>
      </Container>
    </section>
  );
};

export default Donate;
