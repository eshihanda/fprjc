import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
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
              {/* <NavDropdown.Item href="/our-impact">Our Impact</NavDropdown.Item> */}
              <NavDropdown.Item href="/our-team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/our-board">Board of Directors</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="What we Do" id="programmes-dropdown" className="nav-link-custom custom-dropdown">
              <NavDropdown.Item href="/programs/pillar-1/gbv">Ending all forms of gender-based violence</NavDropdown.Item>
              <NavDropdown.Item href="/programs/pillar-1/srhr">Sexual and Reproductive Health Rights</NavDropdown.Item>
              <NavDropdown.Item href="/programs/womenpeace">Women Peace and Security</NavDropdown.Item>
              <NavDropdown.Item href="/programs/civic-education">Women Civic Education</NavDropdown.Item>
              <NavDropdown.Item href="/programs/mentorship">Feminist Mentorship</NavDropdown.Item>
              <NavDropdown.Item href="/programs/womentech">Women and Technology</NavDropdown.Item>
              <NavDropdown.Item href="/pillar3">Women Climate Action and Livelihood Development</NavDropdown.Item>
              <NavDropdown.Item href="/pillar3">Women Economic Empowerment</NavDropdown.Item>
            </NavDropdown> 

             <Nav.Link href='our-impact' className='nav-link-custom'> Our Impact </Nav.Link>

            <NavDropdown title="Updates" id="updates-dropdown" className="nav-link-custom custom-dropdown">
              <NavDropdown.Item href="/blog">News and Stories</NavDropdown.Item>
              <NavDropdown.Item href="/careers">Career Opportunities</NavDropdown.Item>
              <NavDropdown.Item href="/resources">Resources and Tools</NavDropdown.Item>
            </NavDropdown>
            

            <Nav.Link href="/contact" className="nav-link-custom">Contact Us</Nav.Link>
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
