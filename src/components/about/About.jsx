import React from 'react'
import './About.css'
import { SiHtml5, SiCss3, SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiExpress, SiWordpress } from 'react-icons/si';
import profile_img from '../../assets/about_profile.jpg';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/theme_pattern.svg" alt='' />
            </div>

            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt='' />
                </div>

                <div className='about-right'>
                    <div className='about-para'>
                        <p>I create responsive, user-friendly, and fast-loading interfaces with a strong eye for detail. I'm committed to fast delivery without compromising quality.</p>
                        <p>I'm open to feedback and thrive in collaborative environments. With foundational backend knowledge, I communicate effectively with development teams to ensure smooth, end-to-end project execution.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                          <SiHtml5 className="about-skill-logo" color="#E34F26" title="HTML5" />
                          <SiCss3 className="about-skill-logo" color="#1572B6" title="CSS3" />
                          <hr style={{width:"50%"}}/>
                        </div>

                        <div className="about-skill">
                          <SiReact className="about-skill-logo" color="#61DAFB" title="React" />
                          <hr style={{width:"80%"}}/>
                        </div>

                        <div className="about-skill">
                          <SiJavascript className="about-skill-logo" color="#F7DF1E" title="JavaScript" />
                          <hr style={{width:"60%"}}/>
                        </div>

                        <div className="about-skill">
                          <SiNodedotjs className="about-skill-logo" color="#339933" title="Node.js" />
                          <hr style={{width:"50%"}}/>
                        </div>

                        <div className="about-skill">
                          <SiMongodb className="about-skill-logo about-skill-logo-bg" color="#47A248" title="MongoDB" />
                          <hr style={{width:"70%"}}/>
                        </div>

                        <div className="about-skill">
                          <SiExpress className="about-skill-logo about-skill-logo-bg" color="#000000" title="Express" />
                          <hr style={{width:"60%"}}/>
                        </div>

                        <div className="about-skill">
                          <SiWordpress className="about-skill-logo" color="#21759B" title="WordPress" />
                          <hr style={{width:"50%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
