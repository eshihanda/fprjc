import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.jpeg';
import '../Styles/Navbar.css';

const TopNav = () => {
  return (
    <Navbar expand="lg" className="topnav shadow-sm" style={{ backgroundColor: '#f4f3f6ff' }}>
      <Container>
        {/* Logo side */}
        <Navbar.Brand href="/" className="d-flex align-items-center brand-container">
          <img
            src={logo}
            alt="FPRJC logo"
            className="nav-logo"
          /> <span className="brand-name"> <strong>FPRJC</strong></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto align-items-center">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>

            <NavDropdown title="Our Story" id="story-dropdown" className="nav-link-custom custom-dropdown">
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/our-impact">Our Impact</NavDropdown.Item>
              <NavDropdown.Item href="/our-team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/our-board">Board of Directors</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Our Programmes" id="programmes-dropdown" className="nav-link-custom custom-dropdown">
              <NavDropdown.Item href="/pillar1">Women's Health Rights & Wellbeing</NavDropdown.Item>
              <NavDropdown.Item href="/pillar2">Women's Leadership & Governance</NavDropdown.Item>
              <NavDropdown.Item href="/pillar3">Women's Climate Action & Livelihoods Development</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Updates" id="updates-dropdown" className="nav-link-custom custom-dropdown">
              <NavDropdown.Item href="/blog">Blog Posts</NavDropdown.Item>
              <NavDropdown.Item href="/careers">Career Opportunities</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            <Button
              href="/donate"
              className="btn btn-golden fw-semibold"
            >
              Donate
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
