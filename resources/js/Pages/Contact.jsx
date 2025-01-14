import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import ContactForm from '@/Components/ContactForm';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contact({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/contact" />
                <title>Contact Us | Ervotech - Let’s Work Together</title>
                <meta property="og:title" content="Contact Us | Ervotech - Let’s Work Together" />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact Us</h2>}
            >
                <Head title="Contact Us" />

                {/* Hero Section */}
                <section className="contact-hero">
                    <Fade>
                        <div className="container">
                            <h1>Let’s Connect</h1>
                            <p>Have a question, idea, or just want to say hello? Reach out and let's start the conversation.</p>
                        </div>
                    </Fade>
                </section>

                {/* Contact Options Section */}
                <section className="contact-options">
                    <Fade>
                        <div className="container">
                            <h2>How to Reach Us</h2>
                            <div className="contact-options-grid">
                                <div className="contact-option">
                                    <i className="fas fa-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>For general inquiries and support</p>
                                    <a href="mailto:contact@ervotechep.com">contact@ervotechep.com</a>
                                </div>
                                <div className="contact-option">
                                    <i className="fas fa-phone-alt"></i>
                                    <h3>Call Us</h3>
                                    <p>We're here to talk, anytime</p>
                                    <a href="tel:+9153410376">+1 (915) 341-0376</a>
                                </div>
                                <div className="contact-option">
                                    <i className="fas fa-calendar"></i>
                                    <h3>Schedule a Call</h3>
                                    <p>Book a one-on-one consultation at your convenience</p>
                                    <a href="mailto:contact@ervotech.com">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>

                {/* Contact Form Section */}
                <section className="contact-form-section">
                    <Fade>
                        <div className="container">
                            <h2>Send Us a Message</h2>
                            <p>Fill out the form below, and we’ll get back to you as soon as possible.</p>
                            <ContactForm />
                        </div>
                    </Fade>
                </section>

                {/* Map Section */}
                {/* <section className="contact-map">
                <div className="container">
                    <h2>Our Location</h2>
                    <p>Find us on the map and come say hello!</p>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.939456872603!2d-106.4860079848913!3d31.761877981293936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e759b5a0e1b7d7%3A0xe5b6a7e6e9648f50!2sEl%20Paso%2C%20TX!5e0!3m2!1sen!2sus!4v1645382652398!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section> */}

                {/* CTA Section */}
                <section className="contact-cta">
                    <div className="container">
                        <h2>Let’s Build Something Great Together</h2>
                        <a href="/services" className="primary-btn">Explore Our Services</a>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}
