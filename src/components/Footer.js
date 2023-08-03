import React from 'react';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <img src={Logo} alt="logo" width="60px" height="60px" />        
      </div>
    </div>
  )
}

export default Footer;