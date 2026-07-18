import React from "react";
import { Container, Row, Col, Badge, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../Styles/Blog.css';

import blogpost1 from "../assets/blogpost1.png";
import water from "../assets/water.png";
import ict from "../assets/girls.png";
import period from "../assets/period.png";
import sara from "../assets/climate.png";
import femi from "../assets/femi.png";
import mother from "../assets/mother.png";
import waters from "../assets/waters.png";

import Footer from "../Components/Footer";

const stories = [
 
  {
    id: 1,
    title: "When the Waters Rise",
    type: "Blog",
    date: " July 12, 2026",
    image: waters,
    link: "/blog/livelihood",
  },{
    id: 1,
    title: "End Period Poverty in Kibera",
    type: "CAMPAIGN UPDATE",
    date: " May 01, 2026",
    image: period,
    link: "/blog/fempad-project",
  },
  {
    id: 5,
    title: "Motherhood should not Mean Suffering",
    type: "Feature Story",
    date: "May 10, 2026",
    image: mother,
    link: "/blog/mothers-day",
  },
   {
    id: 2,
    title: "ICT HUB Launch: Empowering Girls and Women with Digital Skills",
    type: "ANNOUNCEMENT",
    date: "February 10, 2026",
    image: ict,
    link: "/blog/ict-hub-launch",
  },
   {
    id: 3,
    title: "Every Drop Counts",
    type: "FEATURE STORY",
    date: "February 02, 2026",
    image: water,
    link: "/blog/every-drop-counts",
  },
  {
    id: 4,
    title: "Women Leading Climate Justice in Kibera",
    type: "PRESS RELEASE",
    date: "March 01, 2026",
    image: sara,
    external: true,
    externalUrl: "https://www.youtube.com/watch?v=X7_KdyJGhW0"
  },
 
  {
    id: 6,
    title: "Hands that Heal and Build",
    type: "FEATURE STORY",
    date: "Jan 20, 2026",
    image: femi,
    link: "/blog/femi-ngarisha",
  },
];

const Blog = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${blogpost1})` }}
      >
        <div className="hero-overlay"></div>

        <Container className="hero-content">
          <Row className="justify-content-center text-center">
            <Col md={10} lg={8}>
              <h1>News and Stories That Matter</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* STORIES GRID */}
      <section className="blog-section">
        <Container>
          <Row>
            {stories.map((story) => (
              <Col lg={3} md={6} sm={12} className="mb-5" key={story.id}>
                <Link to={story.link} className="story-card-link">
                  <div className="story-card">
                    <div className="story-image-wrapper">
                      <img src={story.image} alt={story.title} />
                    </div>

                    <div className="story-content">
                      <Badge className="story-badge">
                        {story.type}
                      </Badge>

                      <h5 className="story-title">{story.title}</h5>

                      <p className="story-date">{story.date}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>

          {/* PAGINATION */}
          <div className="pagination-wrapper">
            <Pagination>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Blog;