import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b9738fe5-c192-466a-99b9-8d32343a5534");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert("Thank you for your message! I will get back to you soon.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
            alert("Something went wrong. Please try again later.");
        }
    };

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
                            <img src={mail_icon} alt="" /> <p>rebuni1995@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+251-935-244-747</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>AA, Ethiopia</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        id="name"
                        required
                    />
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        required
                    />
                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                    <span className={result === "Form Submitted Successfully" ? "success-message" : "error-message"}>
                        {result}
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Contact
