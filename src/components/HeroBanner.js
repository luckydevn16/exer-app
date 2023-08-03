import React from 'react';
import HeroBannerImage from '../assets/images/hero.png';
import DotsImage from '../assets/svg/Dots.svg';

const HeroBanner = () => {
  return (
    <div className="hero-content">
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      <img src={DotsImage} alt="banner" className="hero-dots-img" />
      <div className="hero-decor first"></div>
      <div className="hero-decor second"></div>
      <div className="hero-content-text container">
        <h3 className="hero-tag colored">
          __Exercises App
        </h3>
        <h1 className="main-heading">
          Sweat, Smile <br/> and Repeat
        </h1>
        <p className="hero-descr">
          Checkout the most effective exercises
        </p>
        <button className="btn primary">
          Explore Exercises
        </button>
        <h4 className="decor-heading">
          Exercise
        </h4>
      </div>
    </div>
  )
}

export default HeroBanner