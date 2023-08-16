import React, { useRef, useState } from 'react';
import './Contact.css';
import contactImg from '../assets/images/contact.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [userName, setUserName] = useState(''); // State for name
    const [userEmail, setUserEmail] = useState(''); // State for email
    const [message, setMessage] = useState(''); // State for message

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1kqc8pj', 'template_f22tfxk', form.current, 'jbOmNP17EODgz96Im')
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                // Clear the state after email is sent
                setUserName('');
                setUserEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-container">
            <h2 className="education-heading">Get in touch !</h2>
            <div className="contact-image">
                <img src={contactImg} alt="contact-us" />
            </div>
            <div className="contact-form">
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="user_name" 
                        value={userName} 
                        onChange={e => setUserName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="user_email" 
                        value={userEmail} 
                        onChange={e => setUserEmail(e.target.value)} 
                        required 
                    />
                    <textarea 
                        placeholder="Message" 
                        name="message" 
                        value={message} 
                        onChange={e => setMessage(e.target.value)} 
                        required 
                    />
                    <button type="submit">Send</button>
                </form>
                {isSent && <div className="sent-message">Sent ✔️</div>}
            </div>
        </div>
    );
}

export default Contact;
