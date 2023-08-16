import React from 'react';
import './Contact.css';
import contactImg from '../assets/images/contact.png'
const Contact = () => {
    return (
        <div className="contact-container">
             <h2 className="education-heading">Get in touch !</h2>
            <div className="contact-image">
                <img src={contactImg} alt="contact-us" />
            </div>
            <div className="contact-form">
                <h2>Contact Me</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
