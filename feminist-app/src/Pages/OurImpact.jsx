import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import dita2 from '../assets/dita2.png'
import ImpactNumbers from '../Components/ImpactNumbers';

const OurImpact = () => {
  return (
    <>
    <section 
      style={{position: 'relative',
              backgroundImage: `url(${dita2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '75vh',
              display: 'flex',
              alignItems: 'center',
      }}
      >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to left, rgba(0,0,0,0.65), rgba(0,0,0,0.1))",
        }}
      ></div>
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-end">
          <Col md={6} className="text-end">
            <h1 className="fw-bold mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#ffffff",
              fontSize: "3rem",
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            }}> Our Impact</h1>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                color: "#e8d9ff",
                marginBottom: "1rem",
              }}
            > Changing Lives, Shaping Futures</h4>
          </Col>
        </Row>
      </Container>

    </section>
    <section
    style={{
    padding: "80px 20px",
    background: "#f9f5ff",
  }}>
    <div className='container'
    style={{ width: "100%", margin: "0 auto" }}>
      <h2
       style={{
        fontFamily: "var(--font-heading)",
        fontWeight: "600",
        fontSize: "2rem",
        lineHeight: "1.6",
        textAlign: "center",
        color: "#3a1f5d",
      }}
      >
        When we imagine a feminist future, we see a world where women, girls, and people of all genders 
        live with equal rights, real freedom, and the power to shape their own lives.
        A world where every person can thrive with joy, dignity, and choice — free from violence, discrimination, and limitation.
      </h2>
    </div>
  </section>
  <ImpactNumbers />
  <section style={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
      <div className='container' style={{ width:"100%", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "600",
            fontSize: "2rem",
            lineHeight: "1.6",
            color: "#6f42c1", 
            textAlign: "center",
          }}
        >
          In 2024/25, FPRJC achieved remarkable outcomes across its pillars, 
          advancing gender equality, empowerment, and social justice for women, 
          girls, and marginalized communities.
        </h2>
      </div>
  </section>

  </>
  )
}

export default OurImpact