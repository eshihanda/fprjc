import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import dita2 from '../assets/dita2.png'
import eco from '../assets/eco.png'
import pillar3 from '../assets/pillar3.png'
import climate from '../assets/climate.png'
import leadership from '../assets/leadership.png'
import ImpactNumbers from '../Components/ImpactNumbers';
import Footer from '../Components/Footer'


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
    <section style={{ padding: "80px 20px", background: "#f9f5ff", }}>
    <div className='container'
    style={{ width: "100%", margin: "0 auto" }}>
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "600", fontSize: "2rem", lineHeight: "1.6",
        textAlign: "center",
        color: "#3a1f5d", }} >
        When we imagine a feminist future, we see a world where women, girls, and people of all genders 
        live with equal rights, real freedom, and the power to shape their own lives.
        A world where every person can thrive with joy, dignity, and choice — free from violence, discrimination, and limitation.
      </h2>
    </div>
  </section>
  <ImpactNumbers />
  <section style={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
      <div className='container' style={{ width:"100%", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "600", fontSize: "2rem",
            lineHeight: "1.6",
            color: "#6f42c1", 
            textAlign: "center", }}>
          In 2024/25, FPRJC achieved remarkable outcomes across its pillars, 
          advancing gender equality, empowerment, and social justice for women, 
          girls, and marginalized communities.
        </h2>
      </div>
  </section>
  <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
      <Container>
        <Row className="align-items-center">
          
          {/* Image Section */}
          <Col md={6} className="mb-4 mb-md-0">
            <img src={eco} alt="Women Economic Empowerment"
              className="img-fluid rounded shadow"
              style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px" }} />
          </Col>

          {/* Content Section */}
          <Col md={6}>
            {/* Title */}
            <h2 style={{ fontFamily: "var(--font-heading)", color: "#6f42c1", fontWeight: "700",
                marginBottom: "0.5rem",}} >
              Women Earn and Save Money
            </h2>

            {/* Purple Border Line */}
            <div style={{ width: "80px", height: "4px", backgroundColor: "#6f42c1", borderRadius: "4px",
                marginBottom: "1.5rem", }} ></div>

            {/* Why it matters */}
            <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }} >
              Why It Matters
            </h5>
            <p
              style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem", }} >
              Financial independence gives women control over their lives, increases household
              stability, and strengthens their ability to make personal and economic decisions.
              When women have reliable income and savings, they can better support their
              families, invest in opportunities, and break harmful cycles of dependency.
            </p>

            {/* What our women report */}
            <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }} >
              What Our Women Report
            </h5>
            <p style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", }} >
              <strong style={{ color: "#6f42c1" }}>44%</strong> of women report an increase in their earnings,
              and <strong style={{ color: "#6f42c1" }}>75%</strong> report an increase in their savings.
            </p>
          </Col>
        </Row>
      </Container>
  </section>
  <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
    <Container>
      <Row className="align-items-center">

        {/* Text Section (Left) */}
        <Col md={6} className="order-2 order-md-1">
          {/* Title */}
          <h2 style={{fontFamily: "var(--font-heading)",  color: "#6f42c1", fontWeight: "700", marginBottom: "0.5rem", }}  >
            Women’s Health & Wellbeing
          </h2>
          {/* Purple Line */}
          <div style={{ width: "80px", height: "4px", backgroundColor: "#6f42c1", borderRadius: "4px", marginBottom: "1.5rem", }}
           ></div>
          {/* Why It Matters */}
          <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }} >
            Why It Matters
          </h5>

          <p
            style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem", }} >
            Access to accurate reproductive health education and services ensures that young
            women and gender-diverse persons can make informed decisions about their bodies,
            safety, and wellbeing. It reduces vulnerabilities and strengthens overall community
            health and resilience.
          </p>

          {/* What We Achieved */}
          <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }}  >
            What Our Community Reports
          </h5>

          <p style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", }} >
            Improved access to reproductive health education, information, and services for  
            <strong style={{ color: "#6f42c1" }}> 2,400 AGYW</strong> and persons of gender nonconformity.
          </p>
        </Col>

        {/* Image Section (Right) */}
        <Col md={6} className="order-1 order-md-2 mb-4 mb-md-0">
          <img src={pillar3} alt="Women Health and Wellbeing" className="img-fluid rounded shadow"
            style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", }}
          />
        </Col>
      </Row>
    </Container>
  </section>
  <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
    <Container>
      <Row className="align-items-center">

        {/* Image Section (Left) */}
        <Col md={6} className="mb-4 mb-md-0">
          <img src={leadership}   alt="Women Leadership" className="img-fluid rounded shadow"
            style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", }} />
        </Col>

        {/* Content Section (Right) */}
        <Col md={6}>
          {/* Title */}
          <h2 style={{ fontFamily: "var(--font-heading)", color: "#6f42c1", fontWeight: "700", marginBottom: "0.5rem", }}  >
            Women Leadership
          </h2>

          {/* Purple Divider Line */}
          <div
            style={{ width: "80px", height: "4px", backgroundColor: "#6f42c1", borderRadius: "4px", marginBottom: "1.5rem",
            }} ></div>

          {/* Why It Matters */}
          <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }} >
            Why It Matters
          </h5>

          <p style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem", }} >
            When women lead, communities thrive. Leadership skills give women and girls the
            confidence, voice, and platforms they need to influence decisions, challenge
            inequalities, and drive positive social transformation.
          </p>

          {/* What Our Women Report / Results */}
          <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }} >
            Our Impact
          </h5>

          <p style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", }} >
            Hundreds of women and girls have strengthened their leadership abilities —
            enhancing confidence, public speaking, decision-making, and participation in
            community and civic processes.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
   <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
    <Container>
      <Row className="align-items-center">

        {/* Text Section (Left) */}
        <Col md={6} className="order-2 order-md-1">
          {/* Title */}
          <h2 style={{fontFamily: "var(--font-heading)",  color: "#6f42c1", fontWeight: "700", marginBottom: "0.5rem", }}  >
            Women’s Climate Action
          </h2>
          {/* Purple Line */}
          <div style={{ width: "80px", height: "4px", backgroundColor: "#6f42c1", borderRadius: "4px", marginBottom: "1.5rem", }}
           ></div>
          {/* Why It Matters */}
          <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }} >
            Why It Matters
          </h5>

          <p
            style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem", }} >
            Women in Kibra slums are disproportionately affected by climate change and related risks such as food insecurity
            and displacement. When they have access to climate smart opportunities and resources, communities become more resilient.
          </p>

          {/* What We Achieved */}
          <h5 style={{ color: "#333", fontFamily: "var(--font-heading)", marginBottom: "0.6rem", }}  >
            What Our Community Reports
          </h5>

          <p style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", }} >
             <span class="text-fprjcPurple font-semibold">•</span> 
               Improved access to climate-smart economic strengthening initiatives for 
             <span class="font-bold">200 women</span> running viable, green enterprises.
          </p>
          <p style={{ fontFamily: "var(--font-body)", color: "#555", lineHeight: "1.7", }} >
             <span class="text-fprjcPurple font-semibold">•</span> 
             Enhanced basic literacy, financial skills, and digital literacy among 
             <span class="font-bold">1000 women and gender-diverse persons</span> through our community learning program.
          </p>
        </Col>

        {/* Image Section (Right) */}
        <Col md={6} className="order-1 order-md-2 mb-4 mb-md-0">
          <img src={climate} alt="Women climate " className="img-fluid rounded shadow"
            style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "12px", }}
          />
        </Col>
      </Row>
    </Container>
  </section>
  <Footer />
  </>
  )
}

export default OurImpact