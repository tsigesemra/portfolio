import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className="hero">
    <img src={profile_img} alt="Alex Bennett" className="hero-image" />
    <h1 className="hero-title"><span>I'm Tsige Sitotaw,</span> frontend developer based in Ethiopia.</h1>
    <p className="hero-description">
      I am a frontend developer from California, USA with 10 years of experience.
    </p>
    <div className="hero-action">
      <button className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
      <button className="hero-resume">My resume</button>
    </div>
  </div>
  )
}

export default Hero
