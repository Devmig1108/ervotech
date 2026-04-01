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
        "areaServed": ["El Paso, TX", "Las Cruces, NM"],
        "description": "Enterprise-grade technical web consulting in El Paso. Our team specializes in Laravel performance, React architecture, and Local SEO strategy."
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

                {/* HERO SECTION: Forced Dark (Authority) */}
                <section className="services-hero local-landing" style={{ padding: '9rem 0', textAlign: 'center', background: 'var(--primary-dark)' }}>
                    <div className="container hero-content">
                        <Fade bottom>
                            <span className="font-blue" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--accent-teal)' }}>
                                Specialist Web Consulting in El Paso, TX
                            </span>
                            <h1 style={{ fontSize: '3.8rem', marginTop: '1.5rem', lineHeight: '1.1', color: '#ffffff' }}>
                                Technical Strategy to <br /><span className="font-blue">Scale Your Local Business</span>
                            </h1>
                            <p className="section-intro" style={{ fontSize: '1.4rem', maxWidth: '900px', margin: '2rem auto', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                                Most El Paso agencies focus on "pretty" design. We focus on <strong>infrastructure, speed, and search dominance</strong> using Laravel and React architecture.
                            </p>
                            <div className="hero-buttons" style={{ marginTop: '3rem' }}>
                                <a href="/contact" className="nav-btn quote-btn" style={{ width: '320px', padding: '1.2rem 0' }}>Request a Technical Audit</a>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* THE PROBLEM SECTION: Theme-Aware Background */}
                <section style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <h2 className="font-blue" style={{ marginBottom: '2.5rem', textAlign: 'left' }}>Why Generic Web Design Fails in the El Paso Market</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-1)' }}>
                                In a competitive local landscape—from the <strong>Upper Valley to East Side El Paso</strong>—your website is often the first point of failure. If your site is built on a bloated CMS like WordPress, you are likely losing 40-50% of your mobile traffic before the page even loads.
                            </p>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '1.5rem', color: 'var(--text-1)' }}>
                                As your technical consulting partner, we look under the hood of your digital presence to identify <strong>Largest Contentful Paint (LCP)</strong> issues, layout shifts, and SEO gaps that allow national competitors to outrank local El Paso firms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PERFORMANCE METRICS: Theme-Aware Cards */}
                <section className="results-section local-landing" style={{ padding: '7rem 0', borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue" style={{ textAlign: 'center', marginBottom: '4rem' }}>The Ervotech Performance Standard</h2>
                            <div className="results-grid">
                                <div className="results-card" style={{ textAlign: 'center', background: 'var(--surface-1)', border: '1px solid var(--border-subtle)', padding: '2.5rem', borderRadius: '16px' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '70px', height: '70px', borderRadius: '15px', background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold', fontSize: '1.2rem' }}>99%</span>
                                    </div>
                                    <h3 style={{ color: 'var(--text-1)' }}>Infrastructure</h3>
                                    <p style={{ color: 'var(--text-2)' }}>Sub-second load times optimized for El Paso's mobile networks.</p>
                                </div>
                                <div className="results-card" style={{ textAlign: 'center', background: 'var(--surface-1)', border: '1px solid var(--border-subtle)', padding: '2.5rem', borderRadius: '16px' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '70px', height: '70px', borderRadius: '15px', background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold', fontSize: '1.2rem' }}>Top 3</span>
                                    </div>
                                    <h3 style={{ color: 'var(--text-1)' }}>Search Rank</h3>
                                    <p style={{ color: 'var(--text-2)' }}>Targeted Local SEO strategies to dominate El Paso service terms.</p>
                                </div>
                                <div className="results-card" style={{ textAlign: 'center', background: 'var(--surface-1)', border: '1px solid var(--border-subtle)', padding: '2.5rem', borderRadius: '16px' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '70px', height: '70px', borderRadius: '15px', background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>100%</span>
                                    </div>
                                    <h3 style={{ color: 'var(--text-1)' }}>Full Control</h3>
                                    <p style={{ color: 'var(--text-2)' }}>Zero templates. Custom Laravel/React code your business owns entirely.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* THE FRAMEWORK: Forced Dark (Authority) */}
                <section style={{ padding: '7rem 0', background: 'var(--primary-dark)' }}>
                    <div className="container">
                        <h2 className="font-blue" style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--accent-teal)' }}>
                            Our Strategic Consulting Process
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {[
                                { step: "01", title: "Technical Audit", desc: "We deep-dive into your current code, hosting, and SEO health to find friction points." },
                                { step: "02", title: "Performance Roadmap", desc: "We draft a sub-second response strategy using modern headless architecture." },
                                { step: "03", title: "Local Market Siloing", desc: "We architect your content to dominate El Paso and regional search terms." },
                                { step: "04", title: "Scalable Execution", desc: "Our team implements the high-performance stack that your business owns for life." }
                            ].map((item, index) => (
                                <div key={index} style={{ padding: '2.5rem', background: 'var(--navbar-dark)', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
                                    <span className="font-blue" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-teal)' }}>{item.step}</span>
                                    <h3 style={{ marginTop: '1rem', color: '#ffffff' }}>{item.title}</h3>
                                    <p style={{ marginTop: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION: Theme-Aware */}
                <section style={{ padding: '7rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <h2 className="font-blue" style={{ marginBottom: '4rem' }}>Web Consulting FAQ for El Paso Businesses</h2>
                        <div style={{ display: 'grid', gap: '3rem', maxWidth: '1000px' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.5rem' }}>What does a technical web consultant actually do?</h3>
                                <p style={{ marginTop: '0.8rem', fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--text-1)' }}>
                                    Unlike a traditional design firm, we audit your <strong>entire tech stack</strong>. We identify security vulnerabilities, database bottlenecks in Laravel, and rendering issues in React that prevent your platform from converting leads.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.5rem' }}>How do you help with Local SEO in El Paso?</h3>
                                <p style={{ marginTop: '0.8rem', fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--text-1)' }}>
                                    We implement technical signals—like <strong>JSON-LD Schema</strong> and localized content siloing—that help Google understand your relevance to the El Paso, Socorro, and Las Cruces markets.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.5rem' }}>Why move away from WordPress?</h3>
                                <p style={{ marginTop: '0.8rem', fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--text-1)' }}>
                                    Security and Speed. Custom-coded solutions are inherently more secure and load significantly faster than plugin-heavy WordPress sites, providing a massive advantage in search rankings.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA: Forced Dark (Authority) */}
                <section className="dominate-section" style={{ background: 'var(--primary-dark)', padding: '8rem 0', textAlign: 'center' }}>
                    <Fade>
                        <div className="container">
                            <h2 style={{ color: 'var(--accent-teal)', marginBottom: '1.5rem', fontSize: '3rem' }}>Ready to Outpace the Competition?</h2>
                            <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '850px', margin: '0 auto 3rem', fontSize: '1.5rem' }}>
                                Get a professional technical audit from El Paso's leading technical web consulting firm.
                            </p>
                            <div className="local-areas" style={{ marginBottom: '3.5rem', opacity: '0.8', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#ffffff' }}>
                                Serving: El Paso • Las Cruces • Horizon City • Socorro
                            </div>
                            <a href="/contact" className="nav-btn quote-btn" style={{ width: '350px', margin: '0 auto', padding: '1.3rem 0' }}>Schedule Your Session Today</a>
                        </div>
                    </Fade>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}