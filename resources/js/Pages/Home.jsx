import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ContactForm from "@/Components/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/" />
                <title>High-Performance Web Design & SEO El Paso | Ervotech</title>
                <meta name="description" content="Ervotech builds high-performance Laravel & React websites for El Paso businesses. 99% performance grade, local SEO, and custom software. Get a free audit." />
            </Helmet>
            <PublicLayout user={auth.user}>
                <Head title="El Paso Web Design & High-Performance Development | Ervotech" />

                {/* HERO: Enhanced with Performance Signals */}
                <ParallaxBanner
                    layers={[{ image: "../images/hero3.webp", speed: -30 }]}
                    className="aspect-[2/1] hero"
                    style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
                >
                    <div className="hero-overlay" style={{ background: 'rgba(3, 7, 27, 0.85)', position: 'absolute', inset: 0, zIndex: 1 }}></div>
                    <div className="hero-content" style={{ position: 'relative', zIndex: 10, color: '#ffffff' }}>
                        <Fade bottom cascade duration={1000}>
                            <div>
                                <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--accent-blue)', display: 'block', marginBottom: '1rem' }}>
                                    99% Performance Infrastructure
                                </span>
                                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2' }}>
                                    Custom Web Design & SEO Services in El Paso
                                </h1>
                            </div>
                        </Fade>
                        <Fade delay={400}>
                            <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '1.5rem auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                                Ervotech builds high-performance websites and search-optimized strategies 
                                tailored for local businesses and startups. Rank higher, load faster, and convert leads.
                            </p>
                        </Fade>
                        <Fade bottom delay={600}>
                            <div className="hero-buttons">
                                <a href="#home-services" className="nav-btn quote-btn" style={{ width: '250px' }}>Explore Our Services</a>
                                <a href="#contact" className="nav-btn call-btn" style={{ width: '250px' }}>Get in Touch</a>
                            </div>
                        </Fade>
                    </div>
                </ParallaxBanner>

                {/* SPLIT SECTION: Local Authority Signals */}
                <section className="split-section">
                    <Fade left>
                        <div className="split-text">
                            <Parallax speed={-5}>
                                <h2>El Paso Web Design & SEO Authority</h2>
                                <p>
                                    At Ervotech, we provide top-notch <strong className="font-blue">web design</strong>, 
                                    <strong className="font-blue"> SEO solutions</strong>, and <strong className="font-blue"> custom software</strong> 
                                    tailored for businesses in El Paso and the surrounding areas.
                                </p>
                                <p>
                                    <em>
                                        We replace slow, generic templates with high-performance Laravel/React architecture 
                                        that helps you scale and dominate local search results.
                                    </em>
                                </p>
                            </Parallax>
                        </div>
                    </Fade>
                    <div className="split-image" role="img" aria-label="High-performance web development in El Paso"></div>
                </section>

                {/* SERVICES GRID: Theme-Stable Authority Cards */}
                <section className="home-services local-landing" id="home-services" style={{ background: 'var(--surface-1)', padding: '6rem 0' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="text-center font-blue" style={{ marginBottom: '4rem' }}>
                                Performance-Driven Services for El Paso Businesses
                            </h2>
                            <div className="service-grid">
                                {[
                                    { title: "Website Migration", link: "/services#website-migration", desc: "Seamless migration to modern, scalable Laravel/React platforms." },
                                    { title: "Custom Web Design", link: "/web-design-el-paso", desc: "High-performing websites engineered for the local El Paso market." },
                                    { title: "Software Development", link: "/services#software-development", desc: "Custom web applications designed to improve business efficiency." },
                                    { title: "Local SEO & Content", link: "/services#seo-strategy", desc: "Strategic visibility for West Side, East Side, and Horizon City searches." }
                                ].map((service, i) => (
                                    <Zoom key={i} delay={i * 100}>
                                        <div className="service-card results-card" style={{ textAlign: 'center', height: '100%' }}>
                                            <h3>
                                                <a href={service.link} style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>{service.title}</a>
                                            </h3>
                                            <p style={{ marginTop: '1rem' }}>{service.desc}</p>
                                        </div>
                                    </Zoom>
                                ))}
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* VISION SECTION: Force-Dark Authority Block */}
                <section className="vision nominate-section" id="vision" style={{ background: 'var(--section-alt)', padding: '6rem 0' }}>
                    <div className="container text-center">
                        <Fade bottom>
                            <h2 style={{ color: 'var(--accent-teal)' }}>Partner with El Paso's Technical Authority</h2>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                                We help small and medium-sized businesses establish a strong online presence through 
                                99% performance infrastructure and results-driven SEO.
                            </p>
                            <div className="vision-cta">
                                <a href="#contact" className="nav-btn quote-btn" style={{ width: '280px', margin: '0 auto' }}>Let's Build Together</a>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* CONTACT FORM */}
                <section id="contact" style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="text-center font-blue" style={{ marginBottom: '1rem' }}>Start Your Project</h2>
                            <p className="text-center" style={{ marginBottom: '3rem' }}>Ready for a sub-second website? Request your free audit today.</p>
                            <ContactForm />
                        </Fade>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}