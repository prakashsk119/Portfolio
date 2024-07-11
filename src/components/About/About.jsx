import React from 'react'
import './About.css'
 import theme_pattern from '../../assets/theme_pattern.svg'
 import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about' >
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
        
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am fresher in Fullstack Developer. Throughout my career, I have had the privilege of collaborating with prestigious organization, contributing to their success and growth.</p>
                    <p>My passion for fullstack development is not only but also in the enthusiasm and dedication I bring to each project.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Mongo DB</p><hr style={{width:"50%"}}/></div>



                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>6+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>4+</h1>
                <p>HAPPY CLIENTS</p>
            </div>


            
        </div>
        
        
      
    </div>
  )
}

export default About
