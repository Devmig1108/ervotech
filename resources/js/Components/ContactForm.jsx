import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    // Note: 'zip_code' is our honeypot field
    const [formData, setFormData] = useState({ name: '', email: '', message: '', zip_code: '' });
    const [modal, setModal] = useState({ isOpen: false, type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Frontend Honeypot Check
        if (formData.zip_code) {
            console.warn("Bot detected.");
            return;
        }

        axios.post('/contact', formData)
            .then(response => {
                setModal({
                    isOpen: true,
                    type: 'success',
                    message: 'Message sent successfully!',
                });
                setFormData({ name: '', email: '', message: '', zip_code: '' });
                setTimeout(() => setModal({ isOpen: false, type: '', message: '' }), 10000);
            })
            .catch(error => {
                setModal({
                    isOpen: true,
                    type: 'error',
                    message: 'Failed to send message. Please try again.',
                });
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>Get in Touch</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

                    {/* HONEYPOT - Hidden from humans */}
                    <input
                        type="text"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} minLength="10" required />
                    <button type="submit">Send Message</button>
                </form>

                {modal.isOpen && (
                    <div className="modal top-right">
                        <div className={`modal-content ${modal.type}`}>
                            <p>{modal.message}</p>
                            <button className="close-btn" onClick={() => setModal({ isOpen: false })}>&times;</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}