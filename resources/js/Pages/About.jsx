import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/about" />
                <title>About Ervotech | El Paso Web Design & SEO Experts</title>
                <meta name="description" content="Discover Ervotech: El Paso's trusted local partners in custom web design and SEO. We build fast, professional websites that help local businesses grow." />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About Ervotech - El Paso Web Design Experts</h2>}
            >
                <Head title="About Ervotech - El Paso Web Design Experts" />

                <main className="home-main">
                    
                    {/* 1. HERO SECTION: Premium UI, Approachable Copy */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    Your Local Digital Partners
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    We Build Websites That <br />
                                    <span className="text-gradient">Build Your Business.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    Ervotech bridges the gap between high-end digital design and the everyday needs of local El Paso businesses. No jargon, just results.
                                </p>
                            </Fade>
                        </div>
                    </section>

                    {/* 2. STORY SECTION: Using the New "Bento" Aesthetic */}
                    <section className="about-story" style={{ background: 'var(--primary-dark)', padding: '6rem 1rem' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                                    <h2>Rooted in Performance</h2>
                                </div>
                            </Fade>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <Fade bottom delay={100} duration={800}>
                                    <div className="bento-card" style={{ height: '100%', padding: '2.5rem' }}>
                                        <div className="bento-content">
                                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📍</div>
                                            <h3 className="color-pop-teal" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Roots</h3>
                                            <p style={{ color: 'var(--text-2)', fontSize: '1.1rem' }}>
                                                Founded in El Paso, we created Ervotech to give local businesses access to the same high-quality, professional websites usually reserved for massive corporations.
                                            </p>
                                        </div>
                                    </div>
                                </Fade>

                                <Fade bottom delay={300} duration={800}>
                                    <div className="bento-card" style={{ height: '100%', padding: '2.5rem' }}>
                                        <div className="bento-content">
                                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💡</div>
                                            <h3 className="color-pop-purple" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Custom Solutions</h3>
                                            <p style={{ color: 'var(--text-2)', fontSize: '1.1rem' }}>
                                                We don't rely on slow, pre-made templates. We custom-build every website so it loads instantly on mobile phones and perfectly matches your unique brand.
                                            </p>
                                        </div>
                                    </div>
                                </Fade>

                                <Fade bottom delay={500} duration={800}>
                                    <div className="bento-card" style={{ height: '100%', padding: '2.5rem' }}>
                                        <div className="bento-content">
                                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
                                            <h3 className="color-pop-orange" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Driven by Results</h3>
                                            <p style={{ color: 'var(--text-2)', fontSize: '1.1rem' }}>
                                                Our commitment is simple: We build digital tools that help you rank higher on Google, get more phone calls, and grow your revenue.
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </section>

                    {/* 3. MISSION SECTION: Deep Dark Background with Clean Typography */}
                    <section className="performance-section" style={{ background: 'var(--secondary-dark)', padding: '8rem 1rem' }}>
                        <div className="container text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <h2 className="text-gradient" style={{ margin: '0 0 2rem 0' }}>Our Mission</h2>
                                <p style={{ color: 'var(--text-1)', fontSize: '1.4rem', lineHeight: '1.8', margin: '0 auto 3rem' }}>
                                    At Ervotech, our mission is to eliminate the digital friction that holds El Paso businesses back. By delivering lightning-fast websites and proven SEO strategies, we ensure local services in areas from <strong>Horizon City</strong> to the <strong>Upper Valley</strong> are found first.
                                </p>
                                
                                {/* Repurposed Logo Track for Local Areas */}
                                <div className="logo-track" style={{ fontSize: '0.9rem', color: 'var(--accent-teal)' }}>
                                    <span>WEST SIDE</span>
                                    <span>EAST SIDE</span>
                                    <span>CENTRAL</span>
                                    <span>NORTHEAST</span>
                                    <span>HORIZON CITY</span>
                                </div>
                            </Fade>
                        </div>
                    </section>

                    {/* 4. CTA SECTION: Premium "Audit Box" Style */}
                    <section className="audit-cta-section" style={{ padding: '8rem 1rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg-subtle">
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                                        Partner with El Paso's Web Experts
                                    </h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                                        Stop guessing what works. Start using professional, custom web solutions that produce measurable leads.
                                    </p>
                                    <a href="/contact" className="btn-primary magnetic-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                        Let's Talk About Your Project
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </section>

                </main>
            </PublicLayout>
        </HelmetProvider>
    );
}