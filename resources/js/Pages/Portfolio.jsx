import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Portfolio({ auth }) {
    // High-Performance / Custom Engineering Projects
    const customProjects = [
        {
            title: "C&A Dumpsters",
            industry: "Home Services / Waste Management",
            location: "El Paso, TX",
            type: "Custom Web Development",
            impact: "+150% Phone Calls in 3 Months",
            desc: "Local dumpster rental and junk removal services. A complete custom build highly optimized for local search, designed to immediately capture high-intent traffic.",
            link: "https://ca-dumpsters.com/",
            image: "/images/ca-dumpsters.png", 
            accent: "var(--accent-teal)"
        },
        {
            title: "Lawn Heros",
            industry: "Home Services / Landscaping",
            location: "El Paso, TX",
            type: "Custom Web Development",
            impact: "High Conversion Rate on Local Ads",
            desc: "Weed control and premium lawn care services. Features a clean, fast-loading industry design built to convert local homeowners smoothly and securely.",
            link: "https://lawnheros.com/",
            image: "/images/lawn-heros.png", 
            accent: "var(--accent-blue)"
        },
        {
            title: "Roofing Repair El Paso",
            industry: "Home Services / Roofing",
            location: "El Paso, TX",
            type: "Custom HTML/CSS Overhaul",
            impact: "High Lead Turnover & Ad Performance",
            desc: "A massive technical overhaul replacing a restrictive corporate template with custom-engineered architecture. Built specifically to handle high-volume local ad traffic with zero friction.",
            link: "https://roofingrepairelpaso.com/",
            image: "/images/lone-star.png", 
            accent: "var(--accent-orange)"
        },
        {
            title: "The Hard Truth",
            industry: "Author / Personal Branding",
            location: "El Paso, TX",
            type: "Custom Web Development",
            impact: "High-Visibility Launch Platform",
            desc: "A high-trust digital platform created for a major book launch. Prioritized clean UI and emotional resonance to serve as a central hub for author branding and sales.",
            link: "https://thehardtruthaf.com/",
            image: "/images/hard-truth.png", 
            accent: "var(--accent-purple)"
        }
    ];

    // WordPress & CMS Implementations
    const wordpressProjects = [
        {
            title: "Unique Roofing NM",
            status: "Completed",
            desc: "Professional WordPress build providing a robust digital footprint for a regional roofing service provider.",
            link: "https://uniqueroofingnm.com/",
            accent: "var(--accent-pink)"
        },
        {
            title: "Texas Healthcare Plans",
            status: "In Progress",
            desc: "Developing a comprehensive healthcare portal focused on accessibility and local service navigation in the El Paso region.",
            link: "https://texashealthcareplans.com/",
            accent: "var(--accent-teal)"
        },
        {
            title: "El Paso Fire & Police",
            status: "In Progress",
            desc: "Technical development for a local institutional site, ensuring community resources are mobile-responsive and reachable.",
            link: "https://elpasofireandpolice.org/wordpress/",
            accent: "var(--accent-blue)"
        }
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/work" />
                <title>Portfolio | El Paso Custom Dev & WordPress | Ervotech</title>
                <meta name="description" content="View Ervotech's diverse portfolio: from high-performance Laravel/React builds to professional WordPress implementations for El Paso businesses." />
            </Helmet>
            <PublicLayout user={auth?.user}>
                <Head title="Portfolio - Technical Proof of Concept" />

                <main className="home-main">

                    {/* 1. HERO SECTION: Engineered for Authority */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    Engineering Across Platforms
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    Our <span className="text-gradient">Work.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    From sub-second custom applications to scalable WordPress platforms, we build the digital infrastructure that businesses use to grow.
                                </p>
                            </Fade>
                        </div>
                    </section>

                    {/* 2. CUSTOM BUILDS: The Premium Visual Grid */}
                    <section className="portfolio-section" style={{ padding: '6rem 1rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header" style={{ marginBottom: '4rem' }}>
                                    <h2>Custom High-Performance Builds</h2>
                                    <p style={{ color: 'var(--text-2)', fontSize: '1.2rem', textAlign: 'center' }}>Elite speed, zero templates, full ownership.</p>
                                </div>
                            </Fade>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                                {customProjects.map((project, index) => (
                                    <Fade bottom delay={index * 150} duration={800} key={index}>
                                        <div className="portfolio-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                            
                                            {/* Screenshot Top Half */}
                                            <div style={{ background: 'var(--surface-1)', height: '260px', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)', position: 'relative', overflow: 'hidden' }}>
                                                {project.image ? (
                                                    <img 
                                                        src={project.image} 
                                                        alt={`${project.title} Website Design`} 
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>{project.title}</span>
                                                )}
                                            </div>
                                            
                                            {/* Info Bottom Half */}
                                            <div style={{ flexGrow: 1, padding: '2rem', background: 'var(--secondary-dark)', borderRadius: '0 0 12px 12px', border: '1px solid var(--border-subtle)', borderTop: 'none', display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                                    <span style={{ color: project.accent, fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                        {project.industry}
                                                    </span>
                                                </div>
                                                
                                                <h3 style={{ color: 'var(--text-1)', marginBottom: '0.5rem', fontSize: '1.6rem' }}>{project.title}</h3>
                                                <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginBottom: '1.5rem', fontWeight: '600' }}>
                                                    {project.location} • {project.type}
                                                </p>
                                                
                                                <p style={{ fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: '2rem', flexGrow: 1, lineHeight: '1.7' }}>
                                                    {project.desc}
                                                </p>
                                                
                                                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                                    {project.impact && (
                                                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: project.accent, marginBottom: '1rem' }}>
                                                            Impact: {project.impact}
                                                        </p>
                                                    )}
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-1)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s ease' }} 
                                                       onMouseOver={(e) => e.target.style.color = project.accent} 
                                                       onMouseOut={(e) => e.target.style.color = 'var(--text-1)'}
                                                    >
                                                        View Live Project 
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                                            <polyline points="7 7 17 7 17 17"></polyline>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. WORDPRESS: The Bento Grid Style */}
                    <section className="bento-section" style={{ padding: '6rem 1rem', background: 'var(--secondary-dark)' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="section-header" style={{ marginBottom: '4rem' }}>
                                    <h2>WordPress Implementations</h2>
                                    <p style={{ color: 'var(--text-2)', fontSize: '1.2rem', textAlign: 'center' }}>Robust, manageable CMS solutions.</p>
                                </div>
                            </Fade>
                            
                            <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                                {wordpressProjects.map((project, i) => (
                                    <Fade bottom key={i} delay={i * 150} duration={800}>
                                        <div className="bento-card" style={{ height: '100%', padding: '2.5rem' }}>
                                            <div className="bento-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                                
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                                    <h3 style={{ color: project.accent, fontSize: '1.4rem', margin: 0 }}>{project.title}</h3>
                                                    <span style={{ 
                                                        fontSize: '0.75rem', 
                                                        padding: '4px 10px', 
                                                        borderRadius: '50px', 
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px',
                                                        background: project.status === 'Completed' ? 'rgba(0, 245, 212, 0.15)' : 'rgba(157, 78, 221, 0.15)', 
                                                        color: project.status === 'Completed' ? 'var(--accent-teal)' : 'var(--accent-purple)',
                                                        border: `1px solid ${project.status === 'Completed' ? 'var(--accent-teal)' : 'var(--accent-purple)'}`
                                                    }}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                                
                                                <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', marginBottom: '2rem', flexGrow: 1 }}>{project.desc}</p>
                                                
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-1)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s ease' }} 
                                                   onMouseOver={(e) => e.target.style.color = project.accent} 
                                                   onMouseOut={(e) => e.target.style.color = 'var(--text-1)'}
                                                >
                                                    Visit Site 
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. SANDBOX & DEV LABS: The Innovation Signal */}
                    <section className="audit-cta-section" style={{ padding: '8rem 1rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg-subtle" style={{ textAlign: 'left', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '1 1 400px' }}>
                                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', textAlign: 'left', color: 'var(--text-1)' }}>
                                            The Ervotech <span className="text-gradient">Sandbox</span>
                                        </h2>
                                        <p style={{ color: 'var(--text-2)', fontSize: '1.2rem', lineHeight: '1.7' }}>
                                            We utilize isolated environments like our <strong>ervotech.site</strong> and <strong>ervotech.xyz</strong> testing labs to benchmark sub-second load times, push Laravel architectures to the limit, and stress-test new UI components before they ever hit production.
                                        </p>
                                    </div>
                                    
                                    <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
                                        <a href="http://www.ervotech.site/" target="_blank" rel="noopener noreferrer" className="btn-primary magnetic-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', width: '100%' }}>
                                            Enter the Sandbox
                                        </a>
                                        <a href="http://www.ervotech.xyz/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', width: '100%', marginTop: '1rem' }}>
                                            View Staging Lab
                                        </a>
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