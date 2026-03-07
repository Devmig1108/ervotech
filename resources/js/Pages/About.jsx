import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/about" />
                <title>About Ervotech | El Paso Web Performance & SEO Authority</title>
                <meta name="description" content="Discover Ervotech: El Paso's technical authority in high-performance web development and local SEO strategy. Built for speed and business growth." />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About Ervotech - Technical Web Authority in El Paso</h2>}
            >
                <Head title="About Ervotech - El Paso Web Performance Authority" />

                {/* HERO SECTION: Refactored for Technical Brand Consistency */}
                <section className="about-hero services-hero local-landing" style={{ padding: '8rem 0' }}>
                    <div className="container hero-content text-center">
                        <Fade bottom cascade duration={1000}>
                            <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                Engineering Excellence in West Texas
                            </span>
                            <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', color: '#ffffff' }}>The Ervotech Story</h1>
                            <p className="section-intro" style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '1.5rem auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                                Bridging the gap between high-end software engineering and local El Paso business growth.
                            </p>
                        </Fade>
                    </div>
                </section>

                {/* STORY SECTION: Using the "Guru" Card Aesthetic */}
                <section className="about-story local-landing" style={{ background: 'var(--surface-1)', padding: '6rem 0' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue text-center" style={{ marginBottom: '3rem' }}>Rooted in Performance</h2>
                            <div className="story-grid">
                                <Zoom delay={100}>
                                    <div className="story-card results-card" style={{ background: 'var(--surface-2)', padding: '2rem' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                                        <h3>Our Roots</h3>
                                        <p>Founded in El Paso, we built Ervotech to provide local businesses with the same high-performance tech stacks used by global enterprises.</p>
                                    </div>
                                </Zoom>
                                <Zoom delay={300}>
                                    <div className="story-card results-card" style={{ background: 'var(--surface-2)', padding: '2rem' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>💡</div>
                                        <h3>Technical Focus</h3>
                                        <p>We specialize in Laravel and React—technologies that offer a 99% performance grade that standard WordPress templates cannot match.</p>
                                    </div>
                                </Zoom>
                                <Zoom delay={500}>
                                    <div className="story-card results-card" style={{ background: 'var(--surface-2)', padding: '2rem' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🚀</div>
                                        <h3>Innovation</h3>
                                        <p>Our commitment is simple: Load fast, rank high, and convert local El Paso visitors into long-term customers.</p>
                                    </div>
                                </Zoom>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* MISSION SECTION: Strengthening Local SEO Signals */}
                <section className="about-mission dominate-section" style={{ background: 'var(--section-alt)', padding: '6rem 0' }}>
                    <div className="container text-center">
                        <Fade bottom>
                            <h2 style={{ color: 'var(--accent-teal)' }}>Our Mission</h2>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.3rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
                                At Ervotech, our mission is to eliminate the "digital friction" that holds El Paso businesses back. 
                                By delivering sub-second load times and strategic SEO foundations, we ensure local services in areas from 
                                **Horizon City** to the **Upper Valley** are seen first.
                            </p>
                            <div className="local-areas" style={{ color: 'var(--text-light)', opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                West Side • East Side • Central • Northeast • Horizon
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* CTA SECTION: Professional Final Pitch */}
                <section className="about-cta" style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container text-center">
                        <Fade bottom>
                            <h2 className="font-blue">Partner with El Paso's Tech Authority</h2>
                            <p style={{ marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                                Stop guessing what works and start using data-driven web solutions that produce measurable leads.
                            </p>
                            <a href="/contact" className="nav-btn quote-btn" style={{ width: '280px', margin: '0 auto' }}>Scale Your Business Today</a>
                        </Fade>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}