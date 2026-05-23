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
    
    // NEW: Tracking state prevents firing the "start" event multiple times per session
    const [hasStarted, setHasStarted] = useState(false);

    // NEW: Reusable GA4 tracking helper
    const trackInteraction = (eventName, label) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName, {
                'event_category': 'Form Funnel',
                'event_label': label,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // NEW: Fire "form_start" the first time a user types in a real field
        if (!hasStarted && name !== 'zip_code') {
            setHasStarted(true);
            trackInteraction('form_start', 'Agency Lead Form');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Frontend Honeypot Check
        if (formData.zip_code.length > 0) {
            console.warn("Bot detected. Preventing submission.");
            setModal({
                isOpen: true,
                type: 'success',
                message: 'Message sent successfully!',
            });
            setFormData({ name: '', email: '', message: '', zip_code: '' });
            return; // Bot stopped, GA4 is not pinged.
        }

        axios.post('/contact', formData)
            .then(response => {
                setModal({
                    isOpen: true,
                    type: 'success',
                    message: 'Message sent successfully!',
                });
                
                // NEW: Fire the successful conversion event only on successful server response
                trackInteraction('generate_lead', 'Agency Lead Form Submitted');

                // Reset form and tracking state
                setFormData({ name: '', email: '', message: '', zip_code: '' });
                setHasStarted(false);
                
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