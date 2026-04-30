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
                <title>Contact Ervotech | Technical Web Consulting El Paso</title>
                <meta name="description" content="Ready to scale? Contact Ervotech for expert web consulting, SEO audits, and custom software development in El Paso and Horizon City." />
            </Helmet>
            <PublicLayout user={auth?.user}>
                <Head title="Contact Us - Technical Web Consulting" />

                <main className="home-main">
                    
                    {/* 1. HERO SECTION: Premium Authority Branding */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    99% Performance Infrastructure Ready
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    Let’s Build <br />
                                    <span className="text-gradient">For Scale.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    Whether you're in Downtown El Paso or Horizon City, we provide the technical roadmap your business needs to outpace the competition.
                                </p>
                            </Fade>
                        </div>
                    </section>

                    {/* 2. CONTACT OPTIONS: The Bento Box Grid */}
                    <section className="bento-section" style={{ background: 'var(--primary-dark)', padding: '4rem 1rem 8rem' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header" style={{ marginBottom: '4rem' }}>
                                    <h2>Direct Channels</h2>
                                    <p style={{ color: 'var(--text-2)', fontSize: '1.2rem', textAlign: 'center' }}>Reach out to us directly or book a session below.</p>
                                </div>
                            </Fade>

                            <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                
                                {/* Email Card */}
                                <Fade bottom delay={100} duration={800}>
                                    <div className="bento-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                                        <h3 className="color-pop-teal" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Email Us</h3>
                                        <p style={{ color: 'var(--text-2)', marginBottom: '1.5rem' }}>For detailed audits and project inquiries.</p>
                                        <a href="mailto:contact@ervotechep.com" style={{ color: 'var(--text-1)', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid var(--accent-teal)', paddingBottom: '2px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-teal)'} onMouseOut={(e) => e.target.style.color = 'var(--text-1)'}>
                                            contact@ervotechep.com
                                        </a>
                                    </div>
                                </Fade>

                                {/* Phone Card */}
                                <Fade bottom delay={300} duration={800}>
                                    <div className="bento-card aurora-bg-subtle" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
                                        <h3 className="color-pop-purple" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Call Us</h3>
                                        <p style={{ color: 'var(--text-2)', marginBottom: '1.5rem' }}>Direct technical support and quick questions.</p>
                                        <a href="tel:+9153410376" style={{ color: 'var(--text-1)', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid var(--accent-purple)', paddingBottom: '2px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-purple)'} onMouseOut={(e) => e.target.style.color = 'var(--text-1)'}>
                                            +1 (915) 341-0376
                                        </a>
                                    </div>
                                </Fade>

                                {/* Booking Card */}
                                <Fade bottom delay={500} duration={800}>
                                    <div className="bento-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗓️</div>
                                        <h3 className="color-pop-blue" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Strategy Session</h3>
                                        <p style={{ color: 'var(--text-2)', marginBottom: '1.5rem' }}>Book a deep-dive technical discovery call.</p>
                                        <a href="#audit-form" style={{ color: 'var(--text-1)', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid var(--accent-blue)', paddingBottom: '2px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseOut={(e) => e.target.style.color = 'var(--text-1)'}>
                                            Schedule Now &rarr;
                                        </a>
                                    </div>
                                </Fade>

                            </div>
                        </div>
                    </section>

                    {/* 3. CONTACT FORM: Premium Audit Box Style */}
                    <section id="audit-form" className="audit-cta-section" style={{ padding: '6rem 1rem 8rem', background: 'var(--secondary-dark)', borderTop: '1px solid var(--border-subtle)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg">
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                                        Send Us a Message
                                    </h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                                        Fill out the form below to receive your <strong>Free Website & SEO Audit</strong> punch list.
                                    </p>
                                    
                                    <div className="form-wrapper">
                                        <ContactForm />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </section>

                </main>
            </PublicLayout>
        </HelmetProvider>
    );
}