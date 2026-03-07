import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Services({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/services" />
                <title>Web Design & SEO Services in El Paso | Ervotech</title>
                <meta name="description" content="High-performance web development, local SEO, and technical consulting for El Paso businesses. Built with Laravel and React." />
            </Helmet>
            <PublicLayout user={auth.user}>
                <Head title="Our Services | Ervotech" />

                {/* HERO: Matches the Consulting Page Intensity */}
                <section className="services-hero local-landing" style={{ padding: '8rem 0' }}>
                    <div className="container hero-content text-center">
                        <Fade bottom>
                            <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                Premium Digital Solutions
                            </span>
                            <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Engineered for Growth</h1>
                            <p className="section-intro" style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '1.5rem auto' }}>
                                We build the high-performance infrastructure El Paso businesses need to dominate their industry.
                            </p>
                        </Fade>
                    </div>
                </section>

                {/* SERVICE GRID: Using your .service-card and .local-landing glass styles */}
                <section className="services-list local-landing" style={{ padding: '6rem 0' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue text-center" style={{ marginBottom: '4rem' }}>Our Technical Expertise</h2>
                            <div className="service-grid">
                                
                                {/* Service 1: Custom Web Design */}
                                <div className="service-card results-card">
                                    <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)' }}>
                                        <span style={{ color: 'var(--accent-teal)' }}>WP</span>
                                    </div>
                                    <h3>Custom Web Design</h3>
                                    <p>Visually stunning, high-performing websites built specifically for the El Paso market.</p>
                                    <a href="/web-design-el-paso" className="font-blue" style={{ marginTop: '1rem', display: 'inline-block' }}>View Details &rarr;</a>
                                </div>

                                {/* Service 2: Technical Consulting */}
                                <div className="service-card results-card">
                                    <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)' }}>
                                        <span style={{ color: 'var(--accent-purple)' }}>TC</span>
                                    </div>
                                    <h3>Technical Consulting</h3>
                                    <p>Architecture audits and scalability roadmaps to help you outscale local competitors.</p>
                                    <a href="/web-consulting-el-paso" className="font-blue" style={{ marginTop: '1rem', display: 'inline-block' }}>View Details &rarr;</a>
                                </div>

                                {/* Service 3: Local SEO */}
                                <div className="service-card results-card">
                                    <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)' }}>
                                        <span style={{ color: 'var(--accent-blue)' }}>SEO</span>
                                    </div>
                                    <h3>Local SEO Strategy</h3>
                                    <p>Dominating the El Paso "Map Pack" and organic search results through semantic authority.</p>
                                </div>

                                {/* Service 4: Software Dev */}
                                <div className="service-card results-card">
                                    <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-pink)' }}>
                                        <span style={{ color: 'var(--accent-pink)' }}>DEV</span>
                                    </div>
                                    <h3>Software Development</h3>
                                    <p>Custom Laravel applications and React frontends tailored for business efficiency.</p>
                                </div>

                            </div>
                        </Fade>
                    </div>
                </section>

                {/* CTA: Consistent with the new "Guru" look */}
                <section className="services-cta dominate-section">
                    <Fade>
                        <div className="container text-center">
                            <h2 style={{ color: 'var(--accent-teal)' }}>Ready to Outpace the Competition?</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem' }}>
                                Let's build a website that doesn't just look good, but performs at the highest level.
                            </p>
                            <a href="/contact" className="nav-btn quote-btn" style={{ width: '250px', margin: '0 auto' }}>Get a Custom Quote</a>
                        </div>
                    </Fade>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}