import React from 'react'
import '../Styles/Programs.css'
import pillar1 from '../assets/pillar1.png'
import pillar2 from '../assets/pillar2.png'
import pillar3 from '../assets/pillar3.png'

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
                <p> Advocating for access to quality healthcare, reproductive rights, and
                    holistic wellbeing for women and girls in our communities
                </p>
                <a href="/pillar-1" className='learn-more'>Learn More</a>
            </div>
            <div className='program-card'>
                <img src={pillar2} alt='leadership program' />
                <h3> Women's Leadership and Governnance</h3>'
                <p> Strengthening women’s leadership capacity, political participation,
                    and representation in decision-making processes.
                </p>
                <a href="/pillar-2" className='learn-more'>Learn More</a>
            </div>
            <div className='program-card'>
                <img src={pillar3} alt='leadership program' />
                <h3> Women's Climate Action and Livelihoods</h3>'
                <p> Promoting sustainable livelihoods and women-led climate adaptation
                    initiatives that foster environmental justice.
                </p>
                <a href="/pillar-3" className='learn-more'>Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Programs