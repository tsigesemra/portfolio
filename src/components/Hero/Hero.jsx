import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className="hero">
    <img src={profile_img} alt="Alex Bennett" className="hero-image" />
    <h1 className="hero-title"><span>I'm Tsige Sitotaw,</span> a fullstack website developer.</h1>
    <p className="hero-description">
    I use the power modern frameworks like React to bring any idea to life — fast, scalable, and pixel-perfect.
    </p>
    <div className="hero-action">
      <button className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
      <button className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#work'>Projects</AnchorLink></button>
    </div>
  </div>
  )
}

export default Hero

