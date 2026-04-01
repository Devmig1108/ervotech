import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Consulting({ auth }) {
    // Structured Data for Google (Enhanced LocalBusiness + Service)
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
            },
            "areaServed": ["El Paso, TX", "Las Cruces, NM", "Horizon City, TX"]
        },
        "description": "Enterprise-grade technical web consulting in El Paso. Our team specializes in Laravel performance, React architecture audits, and Local SEO search dominance."
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
                <section className="services-hero local-landing" style={{ padding: '9rem 0', textAlign: 'center' }}>
                    <div className="container hero-content">
                        <Fade bottom>
                            <span className="font-blue" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                El Paso's Technical Authority
                            </span>
                            <h1 style={{ fontSize: '3.8rem', marginTop: '1.5rem', lineHeight: '1.1', fontWeight: '900' }}>
                                Strategic Web Consulting <br /><span className="font-blue">to Scale Your Business</span>
                            </h1>
                            <p className="section-intro" style={{ fontSize: '1.4rem', maxWidth: '900px', margin: '2rem auto', color: 'var(--text-2)', lineHeight: '1.6' }}>
                                Most El Paso agencies focus on "pretty" design. At Ervotech, we focus on <strong>infrastructure, speed, and search dominance</strong>. We bridge the gap between aesthetics and high-performance engineering.
                            </p>
                            <div className="hero-buttons" style={{ marginTop: '3rem' }}>
                                <a href="/contact" className="nav-btn quote-btn" style={{ width: '320px', padding: '1.2rem 0' }}>Request a Technical Strategy Audit</a>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* THE PROBLEM & VALUE SECTION */}
                <section style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <h2 className="font-blue" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Why Generic Web Presence Fails in the El Paso Market</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                                <div>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        In a competitive local landscape—from the <strong>Upper Valley to East Side El Paso</strong>—a business website is often its first point of failure. If your platform is built on bloated, legacy CMS systems like WordPress, you are likely losing 40-50% of your mobile traffic before the page even loads.
                                    </p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        As your technical consulting partner, we look under the hood of your digital presence to identify <strong>Largest Contentful Paint (LCP)</strong> issues, layout shifts, and SEO gaps that allow national competitors to outrank local El Paso firms. We provide the roadmap to reclaim your search authority.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PERFORMANCE METRICS SECTION */}
                <section className="results-section local-landing" style={{ padding: '7rem 0', borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Enterprise Performance Standards</h2>
                            <div className="results-grid">
                                <div className="results-card" style={{ textAlign: 'center' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '75px', height: '75px', borderRadius: '18px', background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold', fontSize: '1.3rem' }}>99%</span>
                                    </div>
                                    <h3>Infrastructure Velocity</h3>
                                    <p>We deploy sub-second load times optimized specifically for regional mobile networks in West Texas and Southern New Mexico.</p>
                                </div>
                                <div className="results-card" style={{ textAlign: 'center' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '75px', height: '75px', borderRadius: '18px', background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold', fontSize: '1.3rem' }}>Top 3</span>
                                    </div>
                                    <h3>Market Dominance</h3>
                                    <p>Our team utilizes advanced Local SEO content siloing to ensure our clients capture high-intent local search volume.</p>
                                </div>
                                <div className="results-card" style={{ textAlign: 'center' }}>
                                    <div className="process-step" style={{ margin: '0 auto 1.5rem', width: '75px', height: '75px', borderRadius: '18px', background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.3rem' }}>100%</span>
                                    </div>
                                    <h3>Technical Ownership</h3>
                                    <p>We believe in full control. Our custom Laravel and React architectures mean you own your code—no plugins, no bloat, no limits.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* STRATEGIC PROCESS SECTION (New for depth) */}
                <section style={{ padding: '6rem 0', background: 'var(--surface-1)' }}>
                    <div className="container">
                        <h2 className="font-blue" style={{ textAlign: 'center', marginBottom: '4rem' }}>The Ervotech Consulting Framework</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            {[
                                { step: "01", title: "Technical Audit", desc: "We perform a deep-dive analysis into your current codebase and hosting environment." },
                                { step: "02", title: "SEO Siloing", desc: "We architect your content structure to dominate specific geographic and service-based keywords." },
                                { step: "03", title: "Modernization", desc: "We migrate legacy systems to high-performance React/Laravel stacks for maximum scalability." },
                                { step: "04", title: "Performance Monitoring", desc: "We provide ongoing analytics to ensure your infrastructure maintains peak SEO health." }
                            ].map((item, index) => (
                                <div key={index} style={{ padding: '2rem', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
                                    <span className="font-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.step}</span>
                                    <h4 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{item.title}</h4>
                                    <p style={{ marginTop: '0.8rem', fontSize: '0.95rem', color: 'var(--text-2)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LOCAL FAQ SECTION */}
                <section style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <h2 className="font-blue" style={{ marginBottom: '3.5rem' }}>Web Consulting FAQ for El Paso Businesses</h2>
                        <div style={{ display: 'grid', gap: '2.5rem', maxWidth: '1000px' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.4rem' }}>What does a technical web consultant actually do?</h3>
                                <p style={{ marginTop: '0.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>Unlike a traditional design firm, we audit your <strong>entire tech stack</strong>. We identify security vulnerabilities, database bottlenecks in Laravel, and rendering issues in React that prevent your platform from converting El Paso leads into revenue.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.4rem' }}>How do you improve Local SEO for competitive niches?</h3>
                                <p style={{ marginTop: '0.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>We implement advanced technical signals—specifically <strong>JSON-LD Schema</strong> and localized content siloing—that help search engines verify your authority across the El Paso, Socorro, and Las Cruces markets.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.4rem' }}>Why move away from WordPress for business consulting?</h3>
                                <p style={{ marginTop: '0.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>Security, Speed, and Scalability. Our custom-engineered solutions are inherently more secure and load significantly faster than off-the-shelf builders, providing our clients a distinct technical advantage in organic rankings.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="dominate-section" style={{ background: 'var(--section-alt)', padding: '8rem 0', textAlign: 'center' }}>
                    <Fade>
                        <div className="container">
                            <h2 style={{ color: 'var(--accent-teal)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Partner with El Paso's Digital Engineers</h2>
                            <p style={{ color: 'var(--text-2)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.3rem', lineHeight: '1.6' }}>
                                Stop settling for generic web design. Join forces with a technical team dedicated to your long-term business scalability.
                            </p>
                            <div className="local-areas" style={{ marginBottom: '3.5rem', opacity: '0.8', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                                Serving: El Paso • Las Cruces
                            </div>
                            <a href="/contact" className="nav-btn quote-btn" style={{ width: '350px', margin: '0 auto', padding: '1.3rem 0' }}>Request Your Consulting Session</a>
                        </div>
                    </Fade>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}