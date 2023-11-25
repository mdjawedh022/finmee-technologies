import React from 'react'
import "./hero.css"
import bg from "../../assets/home-image-bg-v6.png"
import icon from "../../assets/home-image-icons-v6.png"
const Hero = () => {
  return (
    <div className='hero-warpper'>
      {/* <img src={bg} alt="" /> */}
      <div className="hero-text-wrapper">
        <div className="hero-text">
          <h2>Data-powered solutions <br /> for Industial Excellence</h2>
          <button>Read More</button>
        </div>
        <div className="hero-image-logo">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
