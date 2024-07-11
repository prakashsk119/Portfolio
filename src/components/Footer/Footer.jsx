import React, { useState } from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubscribe = () => {
    alert(`Subscribing email: ${email}`)
    setEmail('')
  }

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>I am fresher in this fullstack developer role, but I have 3 years of experience in design engineer in Mechanical field.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type='email' placeholder='Enter your email' value={email} onChange={handleEmailChange} />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2024 Prakash. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
