import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../Components/Footer';

import may from "../assets/may.png";
import elvis from "../assets/elvis.png";
import dama from '../assets/damaris.png';
import dita1 from "../assets/dita1.jpeg";
import thinji from '../assets/thinji.png';
import jay from '../assets/jay.png';
import cindy from '../assets/cynthia.png';
import ogalo from '../assets/ogalo.png';




const boardMembers = [
  {
    name: "Hon. Cecilia Ayot",
    role: "Board Chairperson",
    photo: may,
    bio: `
      Hon. Cecilia Ayot serves as the Board Chairperson and leads the strategy and investment 
      portfolio of FPRJC. She is a deliberate feminist whose motivation comes from a desire to experience and bequeath self and future generations of a world where gender roles and rights shall not be influenced by misogynist ideas but by a home and work practice that is cognizant and neutral to explicit biases. 

      As a previous elected Member of the Nairobi County Assembly (MCA) in Lainisaba ward, she established strategic partnerships addressing gender-based issues and advancing gender equality among state and non-state actors. She is an influencer, a member of the prestigious Young African Leaders Initiative (YALI), who has co-authored several articles in support of women’s rights, and a regular speaker on gender issues in the national platform.
    `,
  },
  {
    name: "Janet Oriedo",
    role: "Partnership and Development",
    photo: jay,
    bio: `
      Janet Ambiyo Oriedo is a strategic operations and partnerships leader with over 12 years of proven success in driving performance, building strong stakeholder relationships, and delivering sustainable business growth.
      She is known for creating efficient operating structures, leading high-performing teams, and implementing practical solutions that improve service delivery, productivity, and customer satisfaction.
       With a strong blend of leadership, commercial acumen, and people development, Janet brings energy, professionalism, and measurable impact to every role she undertakes.
    `,
  },
  {
    name: "Florence Ogalo",
    role: "Ethics and Compliance",
    photo: ogalo,
    bio: `
      Akinyi Ogalo is a lawyer by profession, a liberal and radical feminist, and an ally of the LGBTQI+ community. Akinyi has been a human rights advocate for the last 10 years. 
      She has extensively worked in the community campaigning and advocating for gender equality, human dignity and feminist ideologies. 
      She believes that all human beings were born free and equal thus nothing should justify the oppression of women and girls or any human being for that matter. 


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
  {
    name: "Damaris Kariuki",
    role: "Audit and Risk Management",
    photo: dama,
    bio: `
      Damaris Kariuki is a gender and governance expert passionate about engaging in work that advances the rights and positioning of women in every sphere within society. She has experience in designing projects contributing to gender equality gains at a local and global level. 
      She is also a dedicated transformational leader with a diverse set of skills such as Stakeholder Engagement, Financial Management, Strategic Communications and Policy Development. 
      With an educational background in development studies, psychology and public policy, she has been able to work with distinguished civil society organizations, non-governmental institutions, and state agencies to create human centered programmes and policies that are inclusive, diverse, relevant, and most importantly successful! Outside of work, she enjoys a good reality show, a good book, exploring the outdoors, spending time with family & friends, and knitting. 
    `,
  },
  {
    name: "Cynthia Nasambu",
    role: "Resource Mobilization",
    photo: cindy,
    bio: `
      Cynthia Nasambu is a Kenyan writer, communications professional, and youth advocate dedicated to storytelling for impact.
      Cynthia is actively involved in community-based initiatives, using media, film, and the arts to amplify young voices and drive social change.
      Through her work with youth-led programs and advocacy projects, she contributes to building informed, resilient communities while shaping narratives that inspire action and transformation.
    `,
  },
  {
    name: "Thinji Wanjiku",
    role: "Feminist Leadership and Governance",
    photo: thinji,
    bio: `
      Thīnji Wanjikū serves as Board Member for Feminist Leadership and Governance at the Feminists for Peace, Rights and Justice Center (FPRJC), where she contributes to the organization’s strategic direction on gender-responsive governance, feminist leadership, and policy advocacy. 
      She holds a Bachelor’s degree in Political Science and Armed Conflict and Peace Studies from the University of Nairobi and previously served as President of the Women Students Welfare Association (WOSWA) at the University of Nairobi.
      Her leadership has been instrumental in advancing initiatives addressing gender-based violence and promoting sexual and reproductive health and rights within academic and community settings.
      Thīnji brings to FPRJC a strong background in civic engagement and leadership development, with a focus on strengthening women’s and youth participation in governance.
      Her work reflects a sustained commitment to inclusive, accountable, and rights-based systems.
    `,
  },
   
  {
    name: "Editar Ochieng",
    role: " Ex-officio and Secretary of the board ",
    photo: dita1,
    bio: `
      Editar Ochieng is a feminist, human rights advocate, and grassroots organizer dedicated 
      to advancing the rights and dignity of women and girls. As the Founder and Executive Director 
      of FPRJC, she has led transformative programs addressing gender-based violence, access to justice, and women’s leadership. Her work is rooted in lived experience and a deep commitment to creating safe, equitable, and liberating spaces for marginalized groups.
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
