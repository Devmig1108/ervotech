import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Consulting({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/web-consulting-el-paso" />
                <title>Technical Web Consulting & Strategy El Paso | Ervotech</title>
                <meta name="description" content="Expert technical consulting for El Paso businesses. Specializing in Laravel/React performance audits, SEO strategy, and custom software roadmaps." />
            </Helmet>
            <PublicLayout user={auth.user}>
                <Head title="Technical Web Consulting | Ervotech" />

                {/* HERO SECTION: High-Authority Branding */}
                <section className="services-hero local-landing" style={{ padding: '8rem 0' }}>
                    <div className="container hero-content">
                        <Fade bottom>
                            <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                El Paso's Technical Authority
                            </span>
                            <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Technical Web Consulting</h1>
                            <p className="section-intro" style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '1.5rem auto' }}>
                                We provide deep-dive technical audits and scalable roadmaps to help your business outpace local competition through superior architecture.
                            </p>
                            <div className="hero-buttons" style={{ marginTop: '2.5rem' }}>
                                <a href="/contact" className="nav-btn quote-btn" style={{ width: '250px' }}>Request a Technical Audit</a>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* DATA-DRIVEN RESULTS: Perfectly Aligned */}
                <section className="results-section local-landing" style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue">Performance-First Strategy</h2>
                            <div className="results-grid" style={{ marginTop: '3rem' }}>

                                {/* Infrastructure Score */}
                                <div className="results-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div className="process-step" style={{ width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifySelf: 'center', marginBottom: '1rem', background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)' }}>
                                        <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold', width: '100%' }}>99%</span>
                                    </div>
                                    <h3>Infrastructure Score</h3>
                                    <p>Eliminating the "bloat" of standard local agency sites.</p>
                                </div>

                                {/* LCP Velocity */}
                                <div className="results-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div className="process-step" style={{ width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifySelf: 'center', marginBottom: '1rem', background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)' }}>
                                        <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold', width: '100%' }}>&lt; 1s</span>
                                    </div>
                                    <h3>LCP Velocity</h3>
                                    <p>Meeting the strictest 2026 Core Web Vital standards.</p>
                                </div>

                                {/* UI Stability */}
                                <div className="results-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div className="process-step" style={{ width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifySelf: 'center', marginBottom: '1rem', background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold', width: '100%' }}>0.01</span>
                                    </div>
                                    <h3>UI Stability</h3>
                                    <p>Professional UX with zero visual jitter or layout shift.</p>
                                </div>

                            </div>
                        </Fade>
                    </div>
                </section>

                {/* THE "WHY": Deep Technical Value */}
                <section className="audit-section local-landing" style={{ padding: '6rem 0' }}>
                    <div className="container">
                        <div className="audit-grid">
                            <Fade left>
                                <div className="audit-text">
                                    <h2 className="font-blue" style={{ textAlign: 'left' }}>Your Tech Stack is Your Bottom Line</h2>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                                        Most El Paso businesses are losing 40% of their mobile traffic to slow load times. We don't just "design" sites; we engineer growth through:
                                    </p>
                                    <ul className="audit-list" style={{ marginTop: '1.5rem' }}>
                                        <li><strong>Performance:</strong> Converting bounces back into leads with sub-second response times.</li>
                                        <li><strong>Security:</strong> Implementing government-grade reliability for every local client.</li>
                                        <li><strong>SEO Authority:</strong> Technical signals that help you climb from Page 10 to Page 1.</li>
                                    </ul>
                                </div>
                            </Fade>

                            <Fade right>
                                <div className="audit-card" style={{ background: 'var(--surface-2)', padding: '2.5rem' }}>
                                    <h3 style={{ color: 'var(--accent-teal)' }}>Free Strategy Session</h3>
                                    <p>We’ll analyze your current site and find the exact friction points where you’re losing money.</p>
                                    <div className="audit-card-mini" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                                        <div className="mini-row">
                                            <span>Speed</span>
                                            <span>SEO</span>
                                            <span>UX</span>
                                            <span>Scale</span>
                                        </div>
                                    </div>
                                    <div className="audit-cta" style={{ marginTop: '2rem' }}>
                                        <a href="/contact" className="nav-btn call-btn" style={{ width: '100%' }}>Book Consultation</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>

                {/* DOMINATE SECTION: Cleaned for Readability */}
                <section className="dominate-section" style={{ background: 'var(--section-alt)', padding: '6rem 0' }}>
                    <Fade>
                        <div className="container">
                            <h2 style={{ color: 'var(--accent-teal)', marginBottom: '1.5rem' }}>Dominate the El Paso Market</h2>
                            <p style={{ color: 'var(--text-2)', maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.3rem' }}>
                                Stop guessing and start scaling with a technical partner who understands the local landscape.
                            </p>
                            <div className="local-areas" style={{ marginBottom: '3rem', opacity: '0.7', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                                West Side &bull; Downtown &bull; East Side &bull; Horizon City &bull; Cielo Vista
                            </div>
                            <a href="/contact" className="nav-btn quote-btn" style={{ width: '280px', margin: '0 auto' }}>Scale Your Business Today</a>
                        </div>
                    </Fade>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}