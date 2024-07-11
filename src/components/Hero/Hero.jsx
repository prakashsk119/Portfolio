import React from 'react'
import './Hero.css'
import profile_icon from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Prakash_Resume.pdf.pdf' 

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_icon} alt="Profile" />
        <h1><span>I'm Prakash,</span> Fullstack Developer based in India.</h1>
        <p>I am a fullstack developer from Coimbatore, and I am a fresher in this field.</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect with me
              </AnchorLink>
            </div>
            <div className="hero-resume">
              <a href={resume} download="Prakash_Resume.pdf">My resume</a>
            </div>
        </div>
    </div>
  )
}            

export default Hero
