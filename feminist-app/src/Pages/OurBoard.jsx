import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../Components/Footer';

import may from "../assets/may.png";
import nancy from "../assets/nancy.png";
import elvis from "../assets/elvis.png";
import dita1 from "../assets/dita1.png";

const boardMembers = [
  {
    name: "Hon. Cecilia Ayot",
    role: "Board Chairperson",
    photo: may,
    bio: `
      Hon. Cecilia Ayot serves as the Board Chairperson and leads the strategy and investment 
      portfolio of FPRJC. She is a deliberate feminist motivated by the desire to experience 
      and bequeath a world where gender roles and rights are not shaped by misogynist ideas 
      but by equitable and unbiased practices.

      As a Member of the Nairobi County Assembly (MCA), she established strategic partnerships 
      addressing gender-based issues and advancing gender equality among state and non-state actors.
      She is a YALI alumna, co-author of several publications, and a respected voice 
      on gender issues in national spaces.
    `,
  },
  {
    name: "Editar Ochieng",
    role: "Executive Director",
    photo: dita1,
    bio: `
      Editar Ochieng is a feminist, human rights advocate, and grassroots organizer dedicated 
      to advancing the rights and dignity of women and girls. As the Founder and Executive Director 
      of FPRJC, she has led transformative programs addressing gender-based violence, access to justice, 
      and women’s leadership.

      Her work is rooted in lived experience and a deep commitment to creating safe, equitable, 
      and liberating spaces for marginalized groups.
    `,
  },
  {
    name: "Nancy Mutola",
    role: "Partnership Development",
    photo: nancy,
    bio: `
      Nancy Mutola is a dedicated feminist and human rights advocate committed to promoting 
      women’s scalability and social justice. She has extensive experience in feminist organizing, 
      community activism, and civil society leadership across the Global South.

      Nancy specializes in fostering collaboration among policymakers, civil society organizations, 
      and community leaders, championing gender-based rights and social inclusion.
    `,
  },
  {
    name: "Elvis Kosgei",
    role: "Program Quality and Compliance",
    photo: elvis,
    bio: `
      Elvis Koskei is a Communications Specialist with over six years of experience in journalism, 
      media production, and strategic communication. He is deeply committed to advocating for 
      underrepresented communities, particularly women and girls, using storytelling as 
      a powerful tool for social justice.
    `,
  },
];

const OurBoard = () => {
  return (
    <>
    <section style={{ backgroundColor: "#f5f5f5", padding: "4rem 0" }}>
      <Container>
        <h2 className="fw-bold text-center mb-5 board-title" style={{ color: "#6f42c1" }}>
          Board of Directors
        </h2>

        {boardMembers.map((member, index) => (
          <Row
            key={index}
            className="align-items-center mb-5 p-4 rounded shadow-sm board-card"
            style={{
              background: "#fff",
              borderLeft: "6px solid #6f42c1"
            }}
          >
            <Col md={4} className="text-center mb-3 mb-md-0">
              <img
                src={member.photo}
                alt={member.name}
                className="img-fluid board-photo"
                style={{
                  height: "320px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
            </Col>

            <Col md={8}>
              <h4 className="fw-bold mb-1 board-title" style={{ color: "#6f42c1" }}>
                {member.name}
              </h4>
              <h6 className="mb-3 board-role">{member.role}</h6>

              <p className="board-bio" style={{ whiteSpace: "pre-line" }}>
                {member.bio}
              </p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
    <Footer />
  </>
  );
};

export default OurBoard;
