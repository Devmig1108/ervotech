import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade";
import { ParallaxBanner } from "react-scroll-parallax";
import ContactForm from "@/Components/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home({ auth }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Ervotech",
        "image": "https://www.ervotechep.com/images/ervotech-logo-dark.png",
        "@id": "https://www.ervotechep.com/",
        "url": "https://www.ervotechep.com/",
        "telephone": "", // Add your phone number here
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "El Paso",
            "addressRegion": "TX",
            "addressCountry": "US"
        },
        "description": "Custom web design and local SEO services for El Paso businesses. We build fast, professional websites designed to get more leads and customers.",
        "priceRange": "$$$"
    };

    // Live Client Portfolio Data with Images
    const portfolioClients = [
        {
            name: "Roofing Repair El Paso",
            url: "https://roofingrepairelpaso.com/",
            image: "/images/lone-star.png",
            description: "Hyper-local lead generation website for roofing contractors. Engineered to capture high-intent emergency repair traffic.",
            accent: "var(--accent-orange)"
        },
        {
            name: "The Hard Truth AF",
            url: "https://thehardtruthaf.com/",
            image: "/images/hard-truth.png",
            description: "Dynamic lifestyle brand and podcast platform. Built for high performance, content streaming, and brand authority.",
            accent: "var(--accent-purple)"
        },
        {
            name: "C&A Dumpsters",
            url: "https://ca-dumpsters.com/",
            image: "/images/ca-dumpsters.png", // Just add this image to your public/images folder
            description: "Local dumpster rental and junk removal services. Highly optimized for local search and lead capture in the El Paso area.",
            accent: "var(--accent-teal)"
        },
        {
            name: "Lawn Heros",
            url: "https://lawnheros.com/",
            image: "/images/lawn-heros.png", 
            description: "Weed control and premium lawn care services. Features a clean, green-industry design built to convert local homeowners.",
            accent: "var(--accent-blue)"
        },
        {
            name: "Unique Roofing NM",
            url: "https://uniqueroofingnm.com/",
            image: "/images/unique-roofing.png",
            description: "Regional roofing contractor covering New Mexico. Professional, trust-building design tailored for commercial and residential clients.",
            accent: "var(--accent-pink)"
        },
        {
            name: "Ervotech Innovation Sandbox",
            url: "https://ervotech.site/",
            image: "/images/sandbox.png",
            description: "Our dedicated development environment. This is where we stress-test experimental React components, push the limits of Laravel architectures, and pioneer new UI/UX designs before they go live.",
            accent: "var(--accent-teal)"
        }
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/" />
                <title>Top Web Design & Local SEO in El Paso | Ervotech</title>
                <meta name="description" content="Ervotech builds professional, custom websites and provides local SEO to help El Paso businesses get found on Google, attract more customers, and grow." />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PublicLayout user={auth.user}>
                <Head title="El Paso Web Design & SEO | Ervotech" />

                <main className="home-main">
                    
                    {/* 1. HERO: SEO Optimized & High-Converting */}
                    <ParallaxBanner
                        layers={[{ image: "/images/Office.webp", speed: -15 }]}
                        className="hero-modern aurora-bg"
                        style={{ minHeight: '85vh', position: 'relative', display: 'flex', alignItems: 'center' }}
                    >
                        <div className="hero-overlay"></div>
                        
                        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    Top-Rated Technical Agency
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    El Paso Web Design <br />
                                    <span className="text-gradient">& Local SEO.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    <strong>Turn your website into a lead-generating machine.</strong> We engineer fast, professional React & Laravel digital assets that outrank your competitors and convert traffic into revenue.
                                </p>
                            </Fade>
                            
                            <Fade bottom delay={600} duration={1000}>
                                <div className="hero-actions">
                                    <a href="#audit" className="btn-primary magnetic-btn">
                                        Get Your Free Website Review
                                    </a>
                                    <a href="#bento-services" className="btn-secondary">
                                        See How We Help
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </ParallaxBanner>

                    {/* 2. SOCIAL PROOF */}
                    <Fade bottom duration={800}>
                        <section className="client-strip">
                            <p>WE HELP SOUTHWEST BUSINESSES DOMINATE THEIR LOCAL MARKETS</p>
                            <div className="logo-track">
                                <span>CUSTOM WEB DESIGN</span>
                                <span>LOCAL SEO</span>
                                <span>E-COMMERCE</span>
                                <span>LEAD GENERATION</span>
                                <span>BRANDING</span>
                            </div>
                        </section>
                    </Fade>

                    {/* 3. BENTO BOX UI */}
                    <section id="bento-services" className="bento-section">
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header">
                                    <h2>Custom Websites, Not Generic Templates.</h2>
                                    <p>Your business is unique. Your website shouldn't look like everyone else's, and it shouldn't be slow and hard to use.</p>
                                </div>
                            </Fade>

                            <div className="bento-grid">
                                <div className="bento-large" style={{ gridColumn: 'span 8', gridRow: 'span 2' }}>
                                    <Fade bottom duration={800}>
                                        <div className="bento-card aurora-bg-subtle" style={{ height: '100%' }}>
                                            <div className="bento-content">
                                                <h3 className="color-pop-purple">Websites Built to Grow Your Business</h3>
                                                <p>We build beautiful, easy-to-use websites from the ground up. Whether you need a simple local business page or a complex online store, we ensure it looks perfectly tailored to your brand.</p>
                                            </div>
                                            <div className="bento-visual code-visual">
                                                <code>
                                                    "business_status": "Online",<br/>
                                                    "monthly_leads": "Growing",<br/>
                                                    "website_speed": "Lightning Fast"
                                                </code>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                <div className="bento-medium" style={{ gridColumn: 'span 4' }}>
                                    <Fade bottom delay={200} duration={800}>
                                        <div className="bento-card" style={{ height: '100%' }}>
                                            <div className="bento-content">
                                                <h3 className="color-pop-orange">Be Found on Google</h3>
                                                <p>Having a website doesn't matter if no one can find it. We use proven Local SEO strategies to put your business in front of customers exactly when they are searching for your services.</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                <div className="bento-medium" style={{ gridColumn: 'span 4' }}>
                                    <Fade bottom delay={400} duration={800}>
                                        <div className="bento-card" style={{ height: '100%' }}>
                                            <div className="bento-content">
                                                <h3 className="color-pop-teal">Lightning Fast Speeds</h3>
                                                <p>A slow website costs you customers. We use modern coding practices to ensure your site loads instantly on smartphones, tablets, and computers.</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                                <div className="bento-wide" style={{ gridColumn: 'span 8' }}>
                                    <Fade bottom delay={600} duration={800}>
                                        <div className="bento-card" style={{ height: '100%' }}>
                                            <div className="bento-content">
                                                <h3 className="color-pop-pink">Your All-In-One Digital Partner</h3>
                                                <p>You run your business; we handle the web. From designing your logo to managing your website and getting you more reviews, we act as your dedicated, in-house web team.</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. PERFORMANCE ADVANTAGE */}
                    <section className="performance-section">
                        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                            <Fade bottom duration={800}>
                                <h2>The Ervotech Advantage</h2>
                                <p className="subtext" style={{ color: 'var(--text-2)', fontSize: '1.2rem' }}>Why our websites outperform the local competition.</p>
                            </Fade>
                            
                            <div className="comparison-grid">
                                <Fade bottom delay={200} duration={800}>
                                    <div className="comparison-card bad">
                                        <h4>Standard Template Websites</h4>
                                        <div className="score">45<span>/100</span></div>
                                        <ul>
                                            <li>Slow loading times on mobile</li>
                                            <li>Looks like everyone else's site</li>
                                            <li>Hard to update and breaks easily</li>
                                        </ul>
                                    </div>
                                </Fade>
                                
                                <Fade bottom delay={400} duration={800}>
                                    <div className="comparison-card good aurora-bg-subtle">
                                        <h4>Ervotech Custom Websites</h4>
                                        <div className="score text-gradient">99<span>/100</span></div>
                                        <ul>
                                            <li>Loads instantly on any device</li>
                                            <li>Designed specifically for your brand</li>
                                            <li>Built specifically to capture more leads</li>
                                        </ul>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </section>

                    {/* 5. LIVE PORTFOLIO */}
                    <section className="portfolio-section">
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header" style={{ marginBottom: '3rem' }}>
                                    <h2>Proudly Built for El Paso & Beyond</h2>
                                    <p>Real results for real businesses. See how a professional online presence transforms bottom lines.</p>
                                </div>
                            </Fade>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                                {portfolioClients.map((client, index) => (
                                    <Fade bottom delay={index * 150} duration={800} key={index}>
                                        <div className="portfolio-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                            
                                            {/* Screenshot Top Half */}
                                            <div style={{ background: 'var(--surface-1)', height: '220px', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)', position: 'relative', overflow: 'hidden' }}>
                                                {client.image ? (
                                                    <img 
                                                        src={client.image} 
                                                        alt={`${client.name} Website Design`} 
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>{client.name}</span>
                                                )}
                                            </div>
                                            
                                            {/* Info Bottom Half */}
                                            <div style={{ flexGrow: 1, padding: '1.8rem', background: 'var(--secondary-dark)', borderRadius: '0 0 12px 12px', border: '1px solid var(--border-subtle)', borderTop: 'none', display: 'flex', flexDirection: 'column' }}>
                                                <h3 style={{ color: client.accent, marginBottom: '0.75rem', fontSize: '1.4rem' }}>{client.name}</h3>
                                                <p style={{ fontSize: '1rem', color: 'var(--text-2)', marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif", flexGrow: 1 }}>
                                                    {client.description}
                                                </p>
                                                
                                                <a href={client.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-1)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s ease' }} 
                                                   onMouseOver={(e) => e.target.style.color = client.accent} 
                                                   onMouseOut={(e) => e.target.style.color = 'var(--text-1)'}
                                                >
                                                    Visit Live Site 
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                                        <polyline points="7 7 17 7 17 17"></polyline>
                                                    </svg>
                                                </a>
                                            </div>

                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6. LEAD MAGNET / AUDIT CTA */}
                    <section id="audit" className="audit-cta-section">
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg">
                                    <h2>Find out why your website isn't getting leads.</h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>Stop guessing. Drop your website address below, and we'll send you a free, easy-to-understand review showing exactly how to get more local customers.</p>
                                    
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