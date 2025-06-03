import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>greatstackdev@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+772-825-524</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>CA, United States</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        id="name"
                    />
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                    />
                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Enter your message"
                    ></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
