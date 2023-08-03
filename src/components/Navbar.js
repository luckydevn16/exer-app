import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <div
      className="navbar"
    >
      <div className="container flex center">
        <Link to="/">
          <img src={Logo} alt="logo" className="navbar-logo" />
        </Link>
        <div 
          className="navbar-content"
        >
          <Link to="/" className="navbar-link active">Home</Link>
          <a href="#exercises" className="navbar-link">Exercises</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar