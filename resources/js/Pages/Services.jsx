import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import ContactForm from "@/Components/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Services({ auth }) {
    // Structured Data explicitly listing the services you offer in El Paso
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Design and SEO Services",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Ervotech",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "El Paso",
                "addressRegion": "TX"
            }
        },
        "areaServed": ["El Paso, TX", "Las Cruces, NM", "Horizon City, TX"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing and Web Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Local SEO Strategy"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Technical Consulting"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Software Development"
                    }
                }
            ]
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/services" />
                <title>Web Design & Local SEO Services in El Paso | Ervotech</title>
                <meta name="description" content="Ervotech provides premium custom web design, local SEO, and software development services designed to help El Paso businesses capture more leads and revenue." />
                {/* Injecting the structured data for Google */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            
            <PublicLayout user={auth?.user}>
                <Head title="Our Services | Ervotech" />

                <main className="home-main">
                    
                    {/* 1. HERO SECTION: Premium UI, Clear Value Proposition */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    Premium Digital Solutions
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    Engineered For <br />
                                    <span className="text-gradient">Maximum Growth.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    We don't just sell websites. We build high-performance digital infrastructure designed to help your business dominate the El Paso market.
                                </p>
                            </Fade>
                        </div>
                    </section>

                    {/* 2. SERVICES BENTO GRID: Showcasing expertise seamlessly */}
                    <section id="bento-services" className="bento-section" style={{ background: 'var(--primary-dark)', padding: '4rem 1rem 8rem' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div className="bento-grid">
                                
                                {/* Service 1: Custom Web Design (Large Focus) */}
                                <div className="bento-large" style={{ gridColumn: 'span 8', gridRow: 'span 2' }}>
                                    <Fade bottom duration={800}>
                                        <div className="bento-card aurora-bg-subtle" style={{ height: '100%' }}>
                                            <div className="bento-content">
                                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🖥️</div>
                                                <h3 className="color-pop-teal">Custom Web Design</h3>
                                                <p style={{ marginBottom: '1.5rem' }}>
                                                    Stop losing customers to slow, outdated template websites. We custom-code visually stunning, blazing-fast websites that look perfect on mobile devices and are engineered to convert visitors into paying clients.
                                                </p>
                                                <a href="/web-design-el-paso" style={{ color: 'var(--text-1)', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid var(--accent-teal)', paddingBottom: '2px' }}>
                                                    Explore Web Design &rarr;
                                                </a>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                {/* Service 2: Local SEO */}
                                <div className="bento-medium" style={{ gridColumn: 'span 4' }}>
                                    <Fade bottom delay={200} duration={800}>
                                        <div className="bento-card" style={{ height: '100%' }}>
                                            <div className="bento-content">
                                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
                                                <h3 className="color-pop-orange">Local SEO Strategy</h3>
                                                <p>
                                                    We optimize your site to dominate the Google Map Pack and search results so local customers find you before they find your competitors.
                                                </p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                {/* Service 3: Technical Consulting */}
                                <div className="bento-medium" style={{ gridColumn: 'span 4' }}>
                                    <Fade bottom delay={400} duration={800}>
                                        <div className="bento-card" style={{ height: '100%' }}>
                                            <div className="bento-content">
                                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
                                                <h3 className="color-pop-purple">Technical Consulting</h3>
                                                <p>
                                                    Not sure why your current site isn't working? We provide deep technical audits and clear roadmaps to fix your digital presence.
                                                </p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                {/* Service 4: Software Dev (Wide Focus) */}
                                <div className="bento-wide" style={{ gridColumn: 'span 8' }}>
                                    <Fade bottom delay={600} duration={800}>
                                        <div className="bento-card" style={{ height: '100%' }}>
                                            <div className="bento-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</div>
                                                <h3 className="color-pop-pink">Custom Software Development</h3>
                                                <p>
                                                    Need something more complex than a standard website? We build custom web applications, customer portals, and internal tools using industry-leading frameworks like React and Laravel to streamline your business operations.
                                                </p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* 3. OUR PROCESS: Building Trust */}
                    <section className="performance-section" style={{ background: 'var(--secondary-dark)', padding: '6rem 1rem' }}>
                        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                            <Fade bottom duration={800}>
                                <h2>How We Work With You</h2>
                                <p className="subtext" style={{ color: 'var(--text-2)', fontSize: '1.2rem', marginBottom: '4rem' }}>
                                    A transparent, professional process designed to respect your time and deliver results.
                                </p>
                            </Fade>
                            
                            <div className="comparison-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                                <Fade bottom delay={100} duration={800}>
                                    <div className="comparison-card" style={{ padding: '2rem', textAlign: 'left' }}>
                                        <h4 className="color-pop-teal" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>1. The Audit</h4>
                                        <p style={{ color: 'var(--text-2)', fontSize: '1rem' }}>We review your current digital footprint, local competitors, and business goals to find the gaps in your strategy.</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={300} duration={800}>
                                    <div className="comparison-card" style={{ padding: '2rem', textAlign: 'left' }}>
                                        <h4 className="color-pop-blue" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>2. The Blueprint</h4>
                                        <p style={{ color: 'var(--text-2)', fontSize: '1rem' }}>You receive a custom proposal outlining the exact design, tech stack, and timeline required to hit your targets.</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={500} duration={800}>
                                    <div className="comparison-card" style={{ padding: '2rem', textAlign: 'left' }}>
                                        <h4 className="color-pop-purple" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>3. The Build</h4>
                                        <p style={{ color: 'var(--text-2)', fontSize: '1rem' }}>Our team codes your custom solution, keeping you updated at major milestones without overwhelming you with jargon.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </section>

                    {/* 4. LEAD MAGNET / AUDIT CTA */}
                    <section id="audit" className="audit-cta-section" style={{ padding: '8rem 1rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg">
                                    <h2>Stop leaving money on the table.</h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>
                                        Drop your website address below. We'll run a deep technical review and show you exactly what's stopping your site from generating leads.
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