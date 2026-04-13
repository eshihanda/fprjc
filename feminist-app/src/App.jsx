import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TopNav from './Components/TopNav';
import HeroSection from './Components/HeroSection';
import Womensday from "./Components/Womensday";
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
import ContactUs from './Pages/ContactUs';
import Donate from './Pages/Donate';
import ImpactStoriesPage from './Pages/ImpactStoriesPage';
import FounderBio from './Pages/FounderBio';
import GBV from './Pages/GBV';
import SRHR from './Pages/SRHR';
import Wellbeing from './Pages/Wellbeing';

import Mentorship from './Pages/Mentorship'; 
import Movement from './Pages/Movement'; 
import WomenPeace from './Pages/WomenPeace'; 
import WomenTech from './Pages/WomenTech'; 
import CivicEducation from './Pages/CivicEducation'; 



import EveryDropCounts from "./Pages/EveryDropCounts";
import ICTHubLaunch from "./Pages/IctHubLaunch";
import FemPadProject from "./Pages/FemPadProject";

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
              <Womensday />
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

        <Route path="/pillar-1" element={<Pillar1 />} />
        <Route path="/pillar-2" element={<Pillar2 />} />
        <Route path="/pillar-3" element={<Pillar3 />} /> 


        {/* Updates */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />

        {/* Other Pages */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/impact-stories" element={<ImpactStoriesPage />} />
        <Route path="/founder-bio" element={<FounderBio />} />

        <Route path="/blog/every-drop-counts" element={<EveryDropCounts />} />
        <Route path="/blog/ict-hub-launch" element={<ICTHubLaunch />} />
        <Route path="/blog/fempad-project" element={<FemPadProject />} />
        <Route path='/programs/pillar-1/gbv' element={<GBV />}></Route>
        <Route path='/programs/pillar-1/srhr' element={<SRHR />}></Route>
        <Route path='/programs/pillar-1/wellbeing' element={<Wellbeing />}></Route>

        <Route path="/programs/mentorship" element={<Mentorship />} />
        <Route path="/programs/movement" element={<Movement />} />
        <Route path="/programs/womenpeace" element={<WomenPeace />} />
        <Route path="/programs/womentech" element={<WomenTech />} />
        <Route path="/programs/civic-education" element={<CivicEducation />} />
        





      </Routes>
    </>
  );
};

export default App;
