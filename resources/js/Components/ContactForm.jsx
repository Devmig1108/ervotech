import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    // Note: 'zip_code' is our honeypot field. 
    // We name it something a bot would want to fill out.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        zip_code: ''
    });

    const [modal, setModal] = useState({ isOpen: false, type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Frontend Honeypot Check
        // If zip_code has ANY value, it's a bot because a human can't see it.
        if (formData.zip_code.length > 0) {
            console.warn("Bot detected. Preventing submission.");
            // We show a fake success message so the bot thinks it worked 
            // and stops trying to spam this specific session.
            setModal({
                isOpen: true,
                type: 'success',
                message: 'Message sent successfully!',
            });
            setFormData({ name: '', email: '', message: '', zip_code: '' });
            return;
        }

        axios.post('/contact', formData)
            .then(response => {
                setModal({
                    isOpen: true,
                    type: 'success',
                    message: 'Message sent successfully!',
                });
                // Reset form
                setFormData({ name: '', email: '', message: '', zip_code: '' });
                // Auto-close modal after 10 seconds
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

                    {/* REAL FIELD: Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* REAL FIELD: Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    {/* HONEYPOT - Hidden from humans using CSS */}
                    {/* We add tabIndex="-1" so keyboard users don't accidentally tab into it */}
                    <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}>
                        <label htmlFor="zip_code">Leave this field blank</label>
                        <input
                            id="zip_code"
                            type="text"
                            name="zip_code"
                            value={formData.zip_code}
                            onChange={handleChange}
                            autoComplete="off"
                            tabIndex="-1"
                        />
                    </div>

                    {/* REAL FIELD: Message */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        minLength="10"
                        required
                    />

                    <button type="submit">Send Message</button>
                </form>

                {modal.isOpen && (
                    <div className="modal top-right">
                        <div className={`modal-content ${modal.type}`}>
                            <p>{modal.message}</p>
                            <button
                                className="close-btn"
                                onClick={() => setModal({ isOpen: false })}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}