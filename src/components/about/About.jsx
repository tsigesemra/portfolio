import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt='' />
            </div>

            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt='' />
                </div>

                <div className='about-right'>
                    <div className='about-para'>
                        <p>I am an experienced Frontend Developer with over 2 years of experience in creating responsive and user-friendly web applications.</p>
                        <p>My passion for frontend development is not only reflected in my technical skills but also in my commitment to creating intuitive and engaging user experiences.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p>
                        <hr style={{width:"50%"}}/></div>

                        <div className="about-skill"><p>React Js</p>
                        <hr style={{width:"80%"}}/></div>

                        <div className="about-skill"><p>JavaScript</p>
                        <hr style={{width:"60%"}}/></div>

                        <div className="about-skill"><p>Wordpress</p>
                        <hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
