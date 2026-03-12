import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from '../Components/Footer';
import '../Styles/Team.css';

import dita from '../assets/dita.png';
import july from '../assets/july.png';
import feli from '../assets/feli.png';
import brandy from '../assets/brandy.png';
import meg from '../assets/meg.png';
import marline from '../assets/marline.png';
import Lizzy from '../assets/Lizzy.png';
import euny from '../assets/euny.png';
import bravin from '../assets/bravin.png';
import diana from '../assets/diana.png';
import andolo from '../assets/andolo.png';
import irene from '../assets/irene.png';
import momi from '../assets/momi.png';
import sara from '../assets/sara.png';
import diana1 from '../assets/diana1.png';
import hyrene from '../assets/hyrene.png';

import { Link } from 'react-router-dom';

/* ===== TEAM DATA ===== */

const TopManagement = [
  {
    name: "Felicitus Okoko",
    title: "Programs Associate",
    photo: feli,
  },
  {
    name: "Diana Kirigo",
    title: "Operations Associate",
    photo: diana1,
  },
];

const Managers = [
  {
    name: "Ruth Juliet",
    title: "Programs Coordinator - Women's Health Rights and Wellbeing",
    photo: july,
  },
  {
    name: "Marline Kerera",
    title: "Programs Coordinator - Women's Leadership and Governance",
    photo: marline,
  },
  {
    name: "Margaret Muchoki",
    title: "Communications Manager",
    photo: meg,
  },
];

const Officers = [
  {
    name: "Sara Dafala",
    title: "Project Officer - Women's Health Rights and Wellbeing",
    photo: sara,
  },
  {
    name: "Alice Atieno",
    title: "Project Officer - Women's Leadership and Governance",
    photo: Lizzy,
  },
  {
    name: "Eunice Muyungi",
    title: "Project Officer - Women's Climate Action and Livelihoods Development",
    photo: euny,
  },
  {
    name: "Monica Eshihanda",
    title: "Human Resource and IT Officer",
    photo: momi,
  },
   {
    name: "Irene Ogada",
    title: "Procurement Officer",
    photo: hyrene,
  },
  {
    name: "Bravine Kayi",
    title: "Communications Officer",
    photo: bravin,
  },
];

const Assistants = [
  {
    name: "Caren Brandy",
    title: "Finance Officer",
    photo: brandy,
  },
  {
    name: "Diana Oranga",
    title: "Assistant Project Officer",
    photo: diana,
  },
  {
    name: "Queenter Andolo",
    title: "Assistant Admin Officer",
    photo: andolo,
  },
];

const Staff = [
  {
    name: "Irene Ondweso",
    title: "Office Assistant",
    photo: irene,
  },
];

/* ===== COMPONENT ===== */

const OurTeam = () => {
  return (
    <>
      {/* INTRO SECTION */}
      <section className='py-5' style={{ backgroundColor: "#f5f5f5" }}>
        <div className='container'>
          <h2 className='fw-bold text-center mb-3' style={{ color: "#6f42c1" }}>
            Our Team
          </h2>

          <p
            className="text-center w-100 ps-3"
            style={{
              color: "#555",
              fontSize: "1.2rem",
              borderLeft: "4px solid #6f42c1"
            }}
          >
            Our team brings together diverse skills, lived experiences,
            and leadership to create meaningful, long-lasting change in the
            communities we serve. Every member is committed to advancing the
            rights, voices, and dignity of women and girls.
          </p>

          <div className="text-center mt-3">
            <Button
              as={Link}
              to="/our-board"
              variant="outline-secondary"
              className="fw-bold btn-golden"
            >
              Our Board of Directors
            </Button>
          </div>
        </div>
      </section>

      {/* EXECUTIVE DIRECTOR SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, #6f42c1, #eee9f1)",
          padding: "4rem 0"
        }}
      >
        <Container>
          <Row className='align-items-center'>
            <Col md={7}>
              <h3 className="fw-bold mb-3">Editar Ochieng</h3>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
                Meet the visionary behind FPRJC, whose passion and dedication
                laid the foundation for our work in gender equality and
                women’s empowerment.
              </p>

              <Button
                as={Link}
                to='/founder-bio'
                variant='light'
                className='fw-bold btn-golden'
              >
                Meet our Executive Director
              </Button>
            </Col>

            <Col md={5} className='text-center p-0'>
              <img
                src={dita}
                alt="Founder"
                className='img-fluid rounded shadow'
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* TEAM GRID */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "4rem 0" }}>
        <Container>
          <h2 className="fw-bold text-center mb-5" style={{ color: "#6f42c1" }}>
            Meet Our Team
          </h2>

          <Row className="justify-content-center">
            {TopManagement.map((member, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                className="mb-4 d-flex justify-content-center"
              >
                <div
                  className="team-card text-center p-3 rounded shadow-sm"
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="img-fluid rounded"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <h5 className="fw-bold mt-3">{member.name}</h5>
                  <p className="mb-1" style={{ color: "#6f42c1" }}>
                    {member.title}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            {Managers.map((member, index) => (
              <Col
                key={index}
                lg={3}
                md={4}
                sm={6}
                className="mb-4 d-flex justify-content-center"
              >
                <div
                  className="team-card text-center p-3 rounded shadow-sm"
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="img-fluid rounded"
                    style={{
                      height: "240px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <h5 className="fw-bold mt-3">{member.name}</h5>

                  <p className="mb-1" style={{ color: "#6f42c1", fontSize: "0.95rem" }}>
                    {member.title}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            {Officers.map((member, index) => (
              <Col
                key={index}
                lg={3}
                md={4}
                sm={6}
                className="mb-4 d-flex justify-content-center"
              >
                <div
                  className="team-card text-center p-3 rounded shadow-sm"
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="img-fluid rounded"
                    style={{
                      height: "230px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <h5 className="fw-bold mt-3">{member.name}</h5>

                  <p
                    className="mb-1"
                    style={{
                      color: "#6f42c1",
                      fontSize: "0.95rem",
                    }}
                  >
                    {member.title}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            {Assistants.map((member, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                className="mb-4 d-flex justify-content-center"
              >
                <div
                  className="team-card text-center p-3 rounded shadow-sm"
                  style={{
                    width: "100%",
                    maxWidth: "260px",
                    background: "#f9f9f9",
                  }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="img-fluid rounded"
                    style={{
                      height: "210px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <h6 className="fw-bold mt-3">{member.name}</h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#6f42c1",
                      fontSize: "0.9rem",
                    }}
                  >
                    {member.title}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
           <Row className="justify-content-center">
              {Staff.map((member, index) => (
                <Col
                  key={index}
                  md={3}
                  sm={6}
                  className="d-flex justify-content-center"
                >
                  <div
                    className="team-card text-center p-3 rounded shadow-sm"
                    style={{
                      width: "100%",
                      maxWidth: "220px",
                      background: "#ffffff",
                    }}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="img-fluid rounded"
                      style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <h6 className="fw-bold mt-3">{member.name}</h6>

                    <p
                      className="mb-0"
                      style={{
                        color: "#6f42c1",
                        fontSize: "0.85rem",
                      }}
                    >
                      {member.title}
                    </p>
                  </div>
                </Col>
              ))}
           </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default OurTeam;
