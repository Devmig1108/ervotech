import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Consulting({ auth }) {
    // Structured Data for Google (LocalBusiness + Service)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Technical Web Consulting",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Ervotech",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "El Paso",
                "addressRegion": "TX"
            }
        },
        "areaServed": "El Paso, TX",
        "description": "Expert technical web consulting in El Paso. Specialized in Laravel performance, React architecture, and Local SEO strategy."
    };

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/web-consulting-el-paso" />
                <title>Web Consulting El Paso | Technical Strategy & SEO | Ervotech</title>
                <meta name="description" content="Stop losing leads to slow websites. Ervotech provides technical web consulting in El Paso, specializing in Laravel audits, React performance, and scaling local businesses." />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <PublicLayout user={auth.user}>
                <Head title="Web Consulting El Paso | Ervotech" />

                {/* HERO SECTION */}
                <section className="services-hero local-landing" style={{ padding: '8rem 0', textAlign: 'center' }}>
                    <div className="container hero-content">
                        <Fade bottom>
                            <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Specialist Web Consulting in El Paso, TX
                            </span>
                            <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', lineHeight: '1.1' }}>
                                Technical Strategy to <br /><span className="font-blue">Scale Your Local Business</span>
                            </h1>
                            <p className="section-intro" style={{ fontSize: '1.4rem', maxWidth: '850px', margin: '1.5rem auto', color: 'var(--text-2)' }}>
                                Most El Paso agencies focus on "pretty" design. We focus on <strong>infrastructure, speed, and search dominance</strong> using Laravel and React.
                            </p>
                            <div className="hero-buttons" style={{ marginTop: '2.5rem' }}>
                                <a href="/contact" className="nav-btn quote-btn" style={{ width: '300px' }}>Schedule Your Free Technical Audit</a>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* THE PROBLEM SECTION (Adding Depth for Google) */}
                <section style={{ padding: '4rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <h2 className="font-blue" style={{ marginBottom: '2rem' }}>Why Generic Web Design Fails in the El Paso Market</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                In a competitive local landscape—from the <strong>Upper Valley to East Side El Paso</strong>—your website is often the first point of failure. If your site is built on a bloated CMS like WordPress, you are likely losing 40-50% of your mobile traffic before the page even loads.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
                                As your technical consultant, I look under the hood of your digital presence to identify <strong>Largest Contentful Paint (LCP)</strong> issues, layout shifts, and SEO gaps that allow national competitors to outrank local El Paso firms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PERFORMANCE METRICS SECTION (Your Original Stats) */}
                <section className="results-section local-landing" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue" style={{ textAlign: 'center' }}>The Ervotech Performance Standard</h2>
                            <div className="results-grid" style={{ marginTop: '3rem' }}>
                                <div className="results-card" style={{ textAlign: 'center' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '70px', height: '70px', borderRadius: '15px', background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold', fontSize: '1.2rem' }}>99%</span>
                                    </div>
                                    <h3>Page Speed</h3>
                                    <p>Sub-second load times optimized for El Paso's mobile networks.</p>
                                </div>
                                <div className="results-card" style={{ textAlign: 'center' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '70px', height: '70px', borderRadius: '15px', background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold', fontSize: '1.2rem' }}>Top 3</span>
                                    </div>
                                    <h3>Search Rank</h3>
                                    <p>Targeted Local SEO strategies to dominate El Paso service terms.</p>
                                </div>
                                <div className="results-card" style={{ textAlign: 'center' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '70px', height: '70px', borderRadius: '15px', background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>100%</span>
                                    </div>
                                    <h3>Full Control</h3>
                                    <p>Zero templates. Custom Laravel/React code you own entirely.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* LOCAL FAQ SECTION (Crucial for "Consulting" Keywords) */}
                <section style={{ padding: '6rem 0' }}>
                    <div className="container">
                        <h2 className="font-blue" style={{ marginBottom: '3rem' }}>Web Consulting FAQ for El Paso Businesses</h2>
                        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)' }}>What does a technical web consultant actually do?</h3>
                                <p>Unlike a traditional designer, I audit your <strong>entire tech stack</strong>. I identify security vulnerabilities, database bottlenecks in Laravel, and rendering issues in React that prevent your site from converting El Paso leads into customers.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)' }}>How do you help with Local SEO in El Paso?</h3>
                                <p>We implement technical signals—like <strong>JSON-LD Schema</strong> and localized content siloing—that help Google understand your relevance to the El Paso, Socorro, and Las Cruces markets.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)' }}>Why choose a Laravel/React specialist over a WordPress agency?</h3>
                                <p>Security and Speed. Custom-coded solutions are inherently more secure and load significantly faster than plugin-heavy WordPress sites, giving you a massive advantage in search rankings.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="dominate-section" style={{ background: 'var(--section-alt)', padding: '6rem 0', textAlign: 'center' }}>
                    <Fade>
                        <div className="container">
                            <h2 style={{ color: 'var(--accent-teal)', marginBottom: '1.5rem' }}>Ready to Outpace the Competition?</h2>
                            <p style={{ color: 'var(--text-2)', maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.3rem' }}>
                                Get a professional technical audit from El Paso's leading Laravel and React consultant.
                            </p>
                            <div className="local-areas" style={{ marginBottom: '3rem', opacity: '0.7', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Serving: El Paso • Las Cruces
                            </div>
                            <a href="/contact" className="nav-btn quote-btn" style={{ width: '320px', margin: '0 auto' }}>Request Your Consulting Session</a>
                        </div>
                    </Fade>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}