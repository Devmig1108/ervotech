import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade";
import ContactForm from "@/Components/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ElPasoWebDesign({ auth }) {
    const canonical = "https://www.ervotechep.com/web-design-el-paso";

    const faqs = [
        { q: "How much does a website cost in El Paso?", a: "It depends on scope. Business sites land in common tiers; the fastest way to price it is a quick audit." },
        { q: "How long does it take to build a website?", a: "Most launch in a few weeks. The biggest variable is having your content and photos ready." },
        { q: "Will my website show up on Google?", a: "A foundation of clean structure and fast load times helps. Ongoing SEO makes the biggest difference." },
        { q: "Do you write the content for the website?", a: "Yes. Ervotech can write service-first copy that makes it obvious what you do and who you serve." },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Ervotech",
        url: canonical,
        areaServed: ["El Paso, TX", "Las Cruces, NM"],
        serviceType: ["Web Design", "Local SEO", "Website Development"],
        brand: "Ervotech",
    };

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href={canonical} />
                <title>Web Design El Paso | Lead-Driven Websites | Ervotech</title>
                <meta name="description" content="High-performance web design for El Paso businesses. 99% performance grade, local SEO, and conversion tracking." />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
            </Helmet>

            <PublicLayout user={auth?.user}>
                <Head title="Web Design El Paso | Ervotech" />

                <main className="home-main">
                    
                    {/* 1. HERO: Premium SEO Authority */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    99% Performance Infrastructure
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    Web Design in El Paso <br />
                                    <span className="text-gradient">Built for Speed & Leads.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    Stop losing customers to slow, outdated sites. We build high-performance Laravel & React architecture that loads instantly and dominates local El Paso search rankings.
                                </p>
                            </Fade>
                            
                            <Fade bottom delay={600} duration={1000}>
                                <div className="hero-actions">
                                    <a href="#audit" className="btn-primary magnetic-btn">
                                        Get a Free Website Audit
                                    </a>
                                </div>
                            </Fade>

                            {/* Hero Trust Signals */}
                            <Fade bottom delay={800} duration={1000}>
                                <div className="logo-track" style={{ marginTop: '4rem', fontSize: '0.9rem', color: 'var(--text-2)', justifyContent: 'center' }}>
                                    <span>✓ 943ms LCP Speed</span>
                                    <span>✓ Conversion Tracking</span>
                                    <span>✓ SEO Foundation</span>
                                    <span>✓ Secure Architecture</span>
                                </div>
                            </Fade>
                        </div>
                    </section>

                    {/* 2. THE QUICK ANSWER (Value Prop) */}
                    <section style={{ padding: '6rem 1rem', background: 'var(--secondary-dark)', borderTop: '1px solid var(--border-subtle)' }}>
                        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="comparison-card" style={{ padding: '3rem', borderRadius: '20px', borderLeft: '4px solid var(--accent-purple)' }}>
                                    <h2 style={{ marginBottom: '1.5rem', textAlign: 'left', fontSize: '2.2rem', color: 'var(--text-1)' }}>The Ervotech Performance Edge</h2>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-2)' }}>
                                        Most El Paso agencies use heavy, pre-made templates that frustrate mobile users and actively hurt your Google rankings. Ervotech engineers custom websites with sub-second speeds, ensuring you capture every single lead in the local market.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </section>

                    {/* 3. VALUE GRID: Bento Box Layout */}
                    <section className="bento-section" style={{ padding: '8rem 1rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header" style={{ marginBottom: '4rem' }}>
                                    <h2>Engineered for the El Paso Market</h2>
                                </div>
                            </Fade>
                            
                            <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                <Fade bottom delay={100} duration={800}>
                                    <div className="bento-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                                        <h3 className="color-pop-teal" style={{ marginBottom: '1rem' }}>Performance Basics</h3>
                                        <p style={{ color: 'var(--text-2)' }}>Sub-second response times that keep El Paso mobile users from bouncing to competitors.</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={300} duration={800}>
                                    <div className="bento-card aurora-bg-subtle" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                                        <h3 className="color-pop-purple" style={{ marginBottom: '1rem' }}>Local SEO Focus</h3>
                                        <p style={{ color: 'var(--text-2)' }}>Strategic visibility structured to dominate West Side, Horizon City, and Downtown searches.</p>
                                    </div>
                                </Fade>
                                <Fade bottom delay={500} duration={800}>
                                    <div className="bento-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                                        <h3 className="color-pop-blue" style={{ marginBottom: '1rem' }}>Lead Tracking</h3>
                                        <p style={{ color: 'var(--text-2)' }}>Integrated call and form tracking so you know exactly which marketing efforts are generating ROI.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </section>

                    {/* 4. FAQ SECTION: Modern Accordion/Card Style */}
                    <section style={{ padding: '6rem 1rem', background: 'var(--secondary-dark)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <h2 style={{ marginBottom: '3rem' }}>El Paso Web Design FAQ</h2>
                            </Fade>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {faqs.map((f, index) => (
                                    <Fade bottom delay={index * 150} duration={800} key={f.q}>
                                        <div className="bento-card" style={{ padding: '2rem' }}>
                                            <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.4rem', marginBottom: '1rem' }}>{f.q}</h3>
                                            <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: '1.6' }}>{f.a}</p>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5. FINAL CTA: Premium Audit Box */}
                    <section id="audit" className="audit-cta-section" style={{ padding: '8rem 1rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg">
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                                        Start Your Technical Audit
                                    </h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                                        Ready for a website that actually generates leads? Drop your details below to get started.
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