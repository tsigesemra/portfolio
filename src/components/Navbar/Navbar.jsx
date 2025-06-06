import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu === "home" ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p>{menu === "about" ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p>{menu === "services" ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p>{menu === "work" ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p>{menu === "contact" ? <img src={underline} alt="" /> : <></>}</AnchorLink></li>
        </ul>

        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
