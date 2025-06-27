import React from 'react'
import './MyWork.css'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const sectionData = [
  {
    heading: 'Food Delivery ',
    text: 'A React website with cart page, checkout page and authentication dialog box. visually engaging, easy to navigate, and fast-loading. backend in progress. ',
    img: mywork_data[0].w_img,
    readMore: true,
  },
  {
    heading: 'Fitness Website',
    text: 'A Wordpress site built with Elementore. Great example of how modern design and smart WordPress tools can come together to create something truly beautiful and functional.',
    img: mywork_data[1].w_img,
    readMore: true,
  },
  {
    heading: 'Portfolio Website',
    text: 'A React portfolio website with cool animations and functional contact section.',
    img: mywork_data[2].w_img,
    readMore: true,
  },
];

const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container-alt">
                {sectionData.map((section, idx) => (
                  <div className={`mywork-section${idx % 2 === 1 ? ' reverse' : ''}`} key={idx}>
                    <div className="mywork-section-image">
                      <a href={mywork_data[idx].w_link} target="_blank" rel="noopener noreferrer">
                        <img src={section.img} alt={section.heading} />
                      </a>
                    </div>
                    <div className="mywork-section-content">
                      <h2>{section.heading}</h2>
                      <p>{section.text}</p>
                      {section.readMore && mywork_data[idx].w_link && (
                        <a className="mywork-readmore" href={mywork_data[idx].w_link} target="_blank" rel="noopener noreferrer">Show</a>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className="mywork-showmore">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <p>Contact Me</p>
                <img src={arrow_icon} alt="" />
              </AnchorLink>
            </div>
        </div>
    )
}

export default MyWork
