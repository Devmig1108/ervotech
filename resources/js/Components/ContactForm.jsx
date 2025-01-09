import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [modal, setModal] = useState({ isOpen: false, type: '', message: '' });
    const [showErrorBelowButton, setShowErrorBelowButton] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/contact', formData)
            .then(response => {
                setModal({
                    isOpen: true,
                    type: 'success',
                    message: 'Message sent successfully!',
                });
                setShowErrorBelowButton(false);
                setFormData({ name: '', email: '', message: '' });

                // Auto-close modal after 10 seconds
                setTimeout(closeModal, 10000);
            })
            .catch(error => {
                setModal({
                    isOpen: true,
                    type: 'error',
                    message: 'Failed to send message. Please try again.',
                });
                setShowErrorBelowButton(true);

                // Auto-close modal after 10 seconds
                setTimeout(closeModal, 10000);
            });
    };

    const closeModal = () => {
        setModal({ isOpen: false, type: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>Get in Touch</h2>
                <p>We’d love to hear from you. Fill out the form below, and we’ll get back to you shortly.</p>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        minlength="10"
                        required
                    />
                    {/* {showErrorBelowButton && (
                        <p className="error-message">
                            Failed to send message. Please try again.
                        </p>
                    )} */}
                    <button type="submit">Send Message</button>
                </form>

                {/* Modal */}
                {modal.isOpen && (
                    <div className="modal top-right">
                        <div className={`modal-content ${modal.type}`}>
                            <p>{modal.message}</p>
                            <button className="close-btn" onClick={closeModal}>
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
