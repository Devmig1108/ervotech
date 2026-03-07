import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
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
                <div className="local-landing local-landing--elpaso">
                    <Head title="Web Design El Paso | Ervotech" />

                    {/* HERO: Fully Syncronized & Theme Stable */}
                    <ParallaxBanner
                        layers={[{ image: "../images/hero3.webp", speed: -30 }]}
                        className="aspect-[2/1] hero"
                        style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {/* Dark overlay persists in Light Mode to protect white text */}
                        <div className="hero-overlay" style={{ background: 'rgba(3, 7, 27, 0.85)', position: 'absolute', inset: 0, zIndex: 1 }}></div>

                        <div className="hero-content" style={{ position: 'relative', zIndex: 10, color: '#ffffff', textAlign: 'center', width: '100%', padding: '0 2rem' }}>
                            <Fade bottom cascade duration={1000}>
                                <div>
                                    <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--accent-blue)', display: 'block', marginBottom: '1rem' }}>
                                        99% Performance Infrastructure
                                    </span>
                                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' }}>
                                        Web Design in El Paso Built for Speed & Leads
                                    </h1>
                                </div>
                            </Fade>

                            <Fade delay={600}>
                                <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '2rem auto', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                                    Stop losing customers to slow, outdated sites. We build high-performance 
                                    Laravel/React architecture that loads fast and ranks locally.
                                </p>
                            </Fade>

                            <Fade bottom delay={800}>
                                <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                                    <a href="#free-audit" className="nav-btn quote-btn" style={{ width: '320px', padding: '1rem' }}>
                                        Get a Free Website + SEO Audit
                                    </a>
                                </div>
                            </Fade>

                            <div className="hero-trust" style={{ marginTop: '4rem' }}>
                                <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
                                    <Fade bottom delay={1000}>
                                        <li><span style={{ color: 'var(--accent-teal)', marginRight: '8px' }}>✓</span> 943ms LCP Speed</li>
                                    </Fade>
                                    <Fade bottom delay={1100}>
                                        <li><span style={{ color: 'var(--accent-teal)', marginRight: '8px' }}>✓</span> Lead & Conversion Tracking</li>
                                    </Fade>
                                    <Fade bottom delay={1200}>
                                        <li><span style={{ color: 'var(--accent-teal)', marginRight: '8px' }}>✓</span> On-Page SEO Foundation</li>
                                    </Fade>
                                    <Fade bottom delay={1300}>
                                        <li><span style={{ color: 'var(--accent-teal)', marginRight: '8px' }}>✓</span> Secure Laravel Architecture</li>
                                    </Fade>
                                </ul>
                            </div>
                        </div>
                    </ParallaxBanner>

                    {/* QUICK ANSWER */}
                    <section className="quick-answer" id="overview" style={{ padding: '6rem 0' }}>
                        <div className="container">
                            <Fade bottom>
                                <div className="quick-answer-inner" style={{ borderLeft: '4px solid var(--accent-purple)', background: 'var(--surface-1)' }}>
                                    <h2>The Ervotech Performance Edge</h2>
                                    <p style={{ fontSize: '1.2rem' }}>
                                        Most El Paso agencies use heavy templates that frustrate mobile users. 
                                        Ervotech engineers custom websites with sub-second speeds, ensuring you 
                                        capture every lead in the local market.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </section>

                    {/* VALUE GRID */}
                    <section className="value-section" style={{ background: 'var(--section-alt)', padding: '6rem 0' }}>
                        <div className="container">
                            <Fade bottom>
                                <h2 className="font-blue text-center">Engineered for the El Paso Market</h2>
                            </Fade>
                            <div className="value-grid" style={{ marginTop: '3rem' }}>
                                <Zoom delay={100}>
                                    <div className="value-card results-card" style={{ textAlign: 'center' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-teal)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🚀</div>
                                        <h3>Performance Basics</h3>
                                        <p>Sub-second response times that keep El Paso mobile users from bouncing.</p>
                                    </div>
                                </Zoom>
                                <Zoom delay={300}>
                                    <div className="value-card results-card" style={{ textAlign: 'center' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-purple)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                                        <h3>Local SEO Focus</h3>
                                        <p>Strategic visibility for West Side, Horizon City, and Downtown searches.</p>
                                    </div>
                                </Zoom>
                                <Zoom delay={500}>
                                    <div className="value-card results-card" style={{ textAlign: 'center' }}>
                                        <div className="process-step" style={{ background: 'var(--primary-dark)', border: '1px solid var(--accent-blue)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📊</div>
                                        <h3>Lead Tracking</h3>
                                        <p>Integrated call and form tracking so you know exactly which ads are working.</p>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="faq-section" id="faq" style={{ padding: '6rem 0' }}>
                        <div className="container">
                            <Fade bottom>
                                <h2 className="text-center" style={{ marginBottom: '3rem' }}>El Paso Web Design FAQ</h2>
                            </Fade>
                            <div className="faq-grid">
                                {faqs.map((f, index) => (
                                    <Fade bottom delay={index * 100} key={f.q}>
                                        <div className="faq-item" style={{ background: 'var(--surface-1)' }}>
                                            <h3 style={{ color: 'var(--accent-teal)' }}>{f.q}</h3>
                                            <p>{f.a}</p>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CONTACT */}
                    <section id="contact" style={{ background: 'var(--surface-2)', padding: '6rem 0' }}>
                        <div className="container">
                            <Fade bottom>
                                <h2 className="text-center font-blue">Start Your Technical Audit</h2>
                                <ContactForm />
                            </Fade>
                        </div>
                    </section>
                </div>
            </PublicLayout>
        </HelmetProvider>
    );
}