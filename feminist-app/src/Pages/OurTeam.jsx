import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from '../Components/Footer';
import '../Styles/Team.css';
import dita from '../assets/dita.png';
import july from '../assets/july.png';
import cynthia from '../assets/cynthia.png';
import brandy from '../assets/brandy.png';
import meg from '../assets/meg.png';
import purity from '../assets/purity.png';
import marline from '../assets/marline.png';
import lizzy from '../assets/lizzy.png';
import euny from '../assets/euny.png';
import bravin from '../assets/bravin.png';
import diana from '../assets/diana.png';
import andolo from '../assets/andolo.png';
import irene from '../assets/irene.png';
import momi from '../assets/momi.png';
import sara from '../assets/sara.png';
import diana1 from '../assets/diana1.png';









const teamMembers = [
  {
    name: "Diana Akiya",
    title: "Operations Associate",
    department: "Supports all pillars",
    photo: diana1,
  },
  {
    name: "Ruth Juliet",
    title: "Programs Coordinator",
    department: "Women's Health Rights and Wellbeing",
    photo: july,
  },
  {
    name: "Cynthia Nasambu",
    title: "Programs Associate",
    department: "Supports all pillars",
    photo: cynthia,
  },
  {
    name: "Caren Brandy",
    title: "Finance Officer",
    department: "Finance",
    photo: brandy,
  },
  {
    name: "Meg Nasimiyu",
    title: "Communications Manager",
    department: "Supports all pillars",
    photo: meg,
  },
  {
    name: "Purity Nekesa",
    title: "HRM Manager",
    department: "Supports all pillars",
    photo: purity,
  },
  {
    name: "Marline Achieng",
    title: "Project Coordinator",
    department: "Women's Leadership and Governance",
    photo: marline,
  },
  {
    name: "Sara Dafala",
    title: "Project Officer",
    department: "Women's Health Rights and Wellbeing",
    photo: sara,
  },
  {
    name: "Liz Achieng",
    title: "Project Officer",
    department: "Women's Health Rights and Wellbeing",
    photo: lizzy ,
  },
  {
    name: "Eunice Murungi",
    title: "Project Officer",
    department: "Women Climate Action and Livelihood Development",
    photo: euny,
  },
   {
    name: "Bravin",
    title: " Communications Officer",
    department: "Supports all pillars",
    photo: bravin,
  },
  {
    name: "Monica Eshihanda",
    title: "IT Officer",
    department: "Pillar 3",
    photo: momi,
  },
  {
    name: "Diana Oranga",
    title: "Assistant Project Officer",
    department: "Pillar 2",
    photo: diana,
  },
  {
    name: "Queenter Andolo",
    title: "Assistant Admin Officer",
    department: "Supports all pillars",
    photo: andolo,
  },
  {
    name: "Irene Ondweso",
    title: "Office Assistant",
    department: "Supports all pillars",
    photo: irene,
  },
];

const OurTeam = () => {
  return (
    <>
    <section className='py-5' style={{ backgroundColor: "#f5f5f5" }}>
      <div className='container'>
        <h2 className='fw-bold text-center mb-3' style={{ color: "#6f42c1" }}>Our Team</h2>

        <p
          className="text-center w-100 ps-3"
          style={{
          color: "#555",
          fontSize: "1.2rem",
          borderLeft: "4px solid #6f42c1"
          }}
        >
          At FPRJC, our team is united by a shared passion for gender equality and 
          community empowerment. We bring together diverse skills, lived experiences, 
          and leadership to create lasting change in the communities we serve. 
          Every member of our team is committed to advancing the rights, voices, 
          and dignity of women and girls.
        </p>

      </div>
    </section>
    <section style={{
      background: "linear-gradient(135deg, #6f42c1, #eee9f1ff)",
      color: "#0c0b0bff",
      padding: "4rem 0"
    }}>
      <Container>
        <Row className='align-items-center'>
           <Col md={7}>
              <h3 className="fw-bold mb-3">Editar Ochieng</h3>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}> 
                Meet the visionary behind FPRJC, whose passion and dedication laid the foundation
                for our work in gender equality and women’s empowerment.
                </p>
                <Button href='/founder-bio' variant='light' className='fw-bold btn-golden'>
                Meet our Executive Director
                </Button>
            </Col>
            <Col md={5} className='text-center p-0'>
              <img src={dita} alt="founder" className='img-fluid rounded shadow'
              style={{maxHeight: '500px', objectFit: 'cover'
              }} />
            </Col> 
          </Row>
      </Container>
    </section>
    <section style={{ backgroundColor: "#f5f5f5", padding: "4rem 0" }}>
      <Container>
        <h2 className="fw-bold text-center mb-5" style={{ color: "#6f42c1" }}>
          Meet Our Team
        </h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} sm={6} className="mb-4 d-flex justify-content-center">
              <div className="team-card text-center p-3 rounded shadow-sm"
              style={{
                width: "100%",
                maxWidth: "280px",
                background: "#ffffff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}>
                  <img src={member.photo} alt="member.name" 
                  className="img-fluid rounded"
                  style={{
                    height: "250px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                  />
                  <h5 className="fw-bold mt-3">{member.name}</h5>
                  <p className="mb-1" style={{ color: "#6f42c1" }}>
                  {member.title}
                  </p>
                  <span
                    className="badge"
                    style={{
                    background: "#6f42c1",
                    color: "#fff",
                  }}
                  >
                    {member.pillar}
                  </span>
                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    <Footer />
  </>
  )
}


export default OurTeam;
