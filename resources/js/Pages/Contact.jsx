import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ContactForm from '@/Components/ContactForm';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contact({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/contact" />
                <title>Contact Ervotech | Technical Web Consulting El Paso</title>
                <meta name="description" content="Ready to scale? Contact Ervotech for expert web consulting, SEO audits, and custom software development in El Paso and Horizon City." />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Start Your Technical Audit</h2>}
            >
                <Head title="Contact Us - Technical Web Consulting" />

                {/* HERO SECTION: High-Authority Branding */}
                <section className="contact-hero services-hero local-landing" style={{ padding: '8rem 0' }}>
                    <div className="container hero-content text-center">
                        <Fade bottom cascade duration={1000}>
                            <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                99% Performance Infrastructure Ready
                            </span>
                            <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', color: '#ffffff' }}>Let’s Build for Scale</h1>
                            <p className="section-intro" style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '1.5rem auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                                Whether you're in Downtown El Paso or Horizon City, we provide the technical roadmap your business needs to outpace the competition.
                            </p>
                        </Fade>
                    </div>
                </section>

                {/* CONTACT OPTIONS: Using the "Guru" Card Grid */}
                <section className="contact-options local-landing" style={{ background: 'var(--surface-1)', padding: '6rem 0' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue text-center" style={{ marginBottom: '3rem' }}>Direct Channels</h2>
                            <div className="contact-options-grid">
                                <Zoom delay={100}>
                                    <div className="contact-option results-card" style={{ background: 'var(--surface-2)', padding: '2rem', textAlign: 'center' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📧</div>
                                        <h3>Email Us</h3>
                                        <p>For audits and project inquiries</p>
                                        <a href="mailto:contact@ervotechep.com" className="font-blue">contact@ervotechep.com</a>
                                    </div>
                                </Zoom>
                                <Zoom delay={300}>
                                    <div className="contact-option results-card" style={{ background: 'var(--surface-2)', padding: '2rem', textAlign: 'center' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📞</div>
                                        <h3>Call Us</h3>
                                        <p>Direct technical support</p>
                                        <a href="tel:+9153410376" className="font-blue">+1 (915) 341-0376</a>
                                    </div>
                                </Zoom>
                                <Zoom delay={500}>
                                    <div className="contact-option results-card" style={{ background: 'var(--surface-2)', padding: '2rem', textAlign: 'center' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🗓️</div>
                                        <h3>Strategy Session</h3>
                                        <p>Book a deep-dive technical call</p>
                                        <a href="mailto:contact@ervotechep.com" className="font-blue">Schedule Now</a>
                                    </div>
                                </Zoom>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* CONTACT FORM: The "Engine Room" */}
                <section className="contact-form-section" style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="text-center font-blue" style={{ marginBottom: '1rem' }}>Send Us a Message</h2>
                            <p className="text-center" style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                                Fill out the form below to receive your **Free Website + SEO Audit** punch list.
                            </p>
                            <ContactForm />
                        </Fade>
                    </div>
                </section>

                {/* FOOTER CTA: Theme Stable */}
                <section className="contact-cta dominate-section" style={{ background: 'var(--section-alt)', padding: '6rem 0' }}>
                    <div className="container text-center">
                        <Fade bottom>
                            <h2 style={{ color: 'var(--accent-teal)' }}>Dominate the El Paso Market</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem' }}>
                                Join the local businesses scaling with sub-second performance and strategic SEO.
                            </p>
                            <a href="/services" className="nav-btn quote-btn" style={{ width: '280px', margin: '0 auto' }}>Explore All Services</a>
                        </Fade>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}