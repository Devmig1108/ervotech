import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Consulting({ auth }) {
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
                <meta name="description" content="Stop losing leads to slow websites. Ervotech provides technical web consulting in El Paso, specializing in website audits, performance, and scaling local businesses." />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <PublicLayout user={auth.user}>
                <Head title="Web Consulting El Paso | Ervotech" />

                <main className="home-main">
                    
                    {/* 1. HERO SECTION */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    Specialist Web Consulting in El Paso, TX
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    Technical Strategy to <br />
                                    <span className="text-gradient">Scale Your Business.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    Most agencies focus on "pretty" design. We focus on <strong>infrastructure, speed, and search dominance</strong> to ensure your website actually generates revenue.
                                </p>
                            </Fade>
                            
                            <Fade bottom delay={600} duration={1000}>
                                <div className="hero-actions">
                                    <a href="#audit" className="btn-primary magnetic-btn">
                                        Request a Technical Audit
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </section>

                    {/* 2. THE PROBLEM SECTION */}
                    <section style={{ padding: '6rem 1rem', background: 'var(--secondary-dark)', borderTop: '1px solid var(--border-subtle)' }}>
                        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <h2 className="text-gradient" style={{ marginBottom: '2.5rem', textAlign: 'left', fontSize: '2.8rem' }}>Why Generic Web Design Fails in El Paso</h2>
                                {/* Removed inline background, added generic comparison-card class so theme toggle handles it */}
                                <div className="comparison-card" style={{ padding: '3rem', borderRadius: '20px' }}>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-1)', marginBottom: '1.5rem' }}>
                                        In a competitive local landscape—from the <strong>Upper Valley to East Side El Paso</strong>—your website is often the first point of failure. If your site is built on a bloated platform like WordPress, you are likely losing 40-50% of your mobile traffic before the page even loads.
                                    </p>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-1)' }}>
                                        As your technical consulting partner, we look under the hood of your digital presence. We identify load speed issues, poor user experiences, and SEO gaps that allow national competitors to outrank local El Paso firms.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </section>

                    {/* 3. PERFORMANCE METRICS */}
                    <section className="bento-section" style={{ padding: '6rem 1rem' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header" style={{ marginBottom: '4rem' }}>
                                    <h2>The Ervotech Performance Standard</h2>
                                </div>
                            </Fade>
                            
                            <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                <Fade bottom delay={100} duration={800}>
                                    <div className="bento-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', color: 'var(--accent-teal)', marginBottom: '1rem', fontWeight: '800' }}>99%</div>
                                        <h3 style={{ color: 'var(--text-1)', marginBottom: '1rem' }}>Infrastructure</h3>
                                        <p style={{ color: 'var(--text-2)' }}>Sub-second load times optimized for local mobile networks.</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={300} duration={800}>
                                    <div className="bento-card aurora-bg-subtle" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', color: 'var(--accent-purple)', marginBottom: '1rem', fontWeight: '800' }}>Top 3</div>
                                        <h3 style={{ color: 'var(--text-1)', marginBottom: '1rem' }}>Search Rank</h3>
                                        <p style={{ color: 'var(--text-2)' }}>Targeted Local SEO strategies to dominate service terms.</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={500} duration={800}>
                                    <div className="bento-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', color: 'var(--accent-blue)', marginBottom: '1rem', fontWeight: '800' }}>100%</div>
                                        <h3 style={{ color: 'var(--text-1)', marginBottom: '1rem' }}>Full Control</h3>
                                        <p style={{ color: 'var(--text-2)' }}>Zero templates. Custom code your business owns entirely.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </section>

                    {/* 4. THE FRAMEWORK */}
                    <section className="performance-section" style={{ background: 'var(--secondary-dark)', padding: '6rem 1rem' }}>
                        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                            <Fade bottom duration={800}>
                                <h2>Our Strategic Consulting Process</h2>
                                <p className="subtext" style={{ color: 'var(--text-2)', fontSize: '1.2rem', marginBottom: '4rem' }}>
                                    A precise methodology for diagnosing issues and scaling your digital presence.
                                </p>
                            </Fade>
                            
                            <div className="comparison-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                                {[
                                    { step: "01", title: "Technical Audit", desc: "We deep-dive into your current code, hosting, and SEO health to find friction points.", color: "var(--accent-teal)" },
                                    { step: "02", title: "Performance Roadmap", desc: "We draft a sub-second response strategy using modern architecture.", color: "var(--accent-blue)" },
                                    { step: "03", title: "Local Market Siloing", desc: "We architect your content to dominate El Paso and regional search terms.", color: "var(--accent-purple)" },
                                    { step: "04", title: "Scalable Execution", desc: "Our team implements the high-performance stack that your business owns for life.", color: "var(--accent-pink)" }
                                ].map((item, index) => (
                                    <Fade bottom delay={index * 150} duration={800} key={index}>
                                        {/* Removed the hardcoded background here! */}
                                        <div className="comparison-card" style={{ padding: '2rem', textAlign: 'left', height: '100%' }}>
                                            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: item.color, display: 'block', marginBottom: '1rem' }}>{item.step}</span>
                                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-1)' }}>{item.title}</h4>
                                            <p style={{ color: 'var(--text-2)', fontSize: '1rem' }}>{item.desc}</p>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5. FAQ SECTION */}
                    <section style={{ padding: '6rem 1rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <h2 style={{ marginBottom: '3rem' }}>Web Consulting FAQ</h2>
                            </Fade>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <Fade bottom delay={100} duration={800}>
                                    <div className="bento-card" style={{ padding: '2rem' }}>
                                        <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.4rem', marginBottom: '1rem' }}>What does a technical web consultant actually do?</h3>
                                        <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                            Unlike a traditional design firm, we audit your <strong>entire tech stack</strong>. We identify security vulnerabilities, database bottlenecks, and code issues that prevent your platform from converting leads or ranking on Google.
                                        </p>
                                    </div>
                                </Fade>

                                <Fade bottom delay={300} duration={800}>
                                    <div className="bento-card" style={{ padding: '2rem' }}>
                                        <h3 style={{ color: 'var(--accent-purple)', fontSize: '1.4rem', marginBottom: '1rem' }}>How do you help with Local SEO in El Paso?</h3>
                                        <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                            We implement technical signals—like <strong>JSON-LD Schema</strong> and localized content structures—that help search engines understand your exact relevance to the El Paso, Socorro, and Las Cruces markets.
                                        </p>
                                    </div>
                                </Fade>

                                <Fade bottom delay={500} duration={800}>
                                    <div className="bento-card" style={{ padding: '2rem' }}>
                                        <h3 style={{ color: 'var(--accent-orange)', fontSize: '1.4rem', marginBottom: '1rem' }}>Why move away from templates?</h3>
                                        <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                            Security and Speed. Custom-coded solutions are inherently more secure and load significantly faster than plugin-heavy template sites, providing a massive advantage in search rankings and user experience.
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </section>

                    {/* 6. FINAL CTA */}
                    <section id="audit" className="audit-cta-section" style={{ padding: '8rem 1rem', background: 'var(--secondary-dark)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg">
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                                        Ready to Outpace the Competition?
                                    </h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                                        Get a professional technical audit from El Paso's leading technical web consulting firm.
                                    </p>
                                    
                                    <div className="logo-track" style={{ fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: '3rem', justifyContent: 'center' }}>
                                        <span>EL PASO</span>
                                        <span>LAS CRUCES</span>
                                        <span>HORIZON CITY</span>
                                        <span>SOCORRO</span>
                                    </div>

                                    <a href="/contact" className="btn-primary magnetic-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                        Schedule Your Session Today
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