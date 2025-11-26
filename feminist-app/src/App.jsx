import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TopNav from './Components/TopNav';
import HeroSection from './Components/HeroSection';
import Programs from './Components/Programs';
import Why from './Components/Why';
// import Activities from './Components/Activities';
import ImpactStories from './Components/ImpactStories';
import Footer from './Components/Footer';
import OurPartners from './Components/OurPartners';
import ImpactNumbers from './Components/ImpactNumbers';

// Main Pages
import AboutUs from './Pages/AboutUs';
import OurImpact from './Pages/OurImpact';
import OurTeam from './Pages/OurTeam';
import OurBoard from './Pages/OurBoard';
import Pillar1 from './Pages/Pillar1';
import Pillar2 from './Pages/Pillar2';
import Pillar3 from './Pages/Pillar3';
import Blog from './Pages/Blog';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';

const App = () => {
  return (
    <>
      <TopNav />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Programs />
              <Why />
               {/* <Activities />  */}
               <ImpactNumbers />
              <ImpactStories />
              <OurPartners />
              <Footer />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-board" element={<OurBoard />} />

        {/* Programmes */}
        <Route path="/pillar1" element={<Pillar1 />} />
        <Route path="/pillar2" element={<Pillar2 />} />
        <Route path="/pillar3" element={<Pillar3 />} />

        {/* Updates */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />

        {/* Other Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  );
};

export default App;
