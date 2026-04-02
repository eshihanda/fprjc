import React from 'react'
import '../Styles/Programs.css'
import pillar1 from '../assets/pillar1.png'
import pillar2 from '../assets/education.jpg'
import climate1 from '../assets/climate1.png'

import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <section className='program-section'>
        <div className='section-header'>
            <h2>Our Programs</h2>
            <p>Empowering women through health, leadership, and climate change </p>
        </div>
        <div className='program-grid'>
            <div className='program-card'>
                <img src={pillar1} alt='health program' />
                <h3> Women's Health Rights and Wellbeing</h3>'
                <p> To promote women’s health rights and wellbeing through equitable access to health 
                    and wellness resources including reproductive health care and mental health information and services.
                </p>
                <Link to="/pillar-1" className='learn-more'>Learn More</Link>
            </div>
            <div className='program-card'>
                <img src={pillar2} alt='leadership program' />
                <h3> Women's Leadership and Governnance</h3>'
                <p> To strengthen the capacity of women leaders to design and lead grass root feminism movements
                    for intergenerational and intersectional dialogue, build solidarity and catalyze bold, transformative 
                    and ambitious action to achieve gender equality..
                </p>
                <Link to="/pillar-2" className='learn-more'>Learn More</Link>

            </div>
            <div className='program-card'>
                <img src={climate1} alt='climate program' />
                <h3> Women's Climate Action and Livelihoods</h3>'
                <p> To promote intersectional climate action by advocating for climate justice, building community resilience, and supporting inclusive livelihood development.
                </p>
                <Link to="/pillar-3" className='learn-more'>Learn More</Link>

            </div>
        </div>
    </section>
  )
}

export default Programs

