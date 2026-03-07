import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Portfolio({ auth }) {
    // High-Performance / Custom Engineering Projects
    const customProjects = [
        {
            title: "Ervotech Dev Lab (Staging)",
            industry: "Custom Software Research",
            location: "El Paso, TX",
            stack: "Laravel / React / Tailwind",
            status: "Active Staging",
            desc: "Our primary environment for benchmarking sub-second load times and testing deep-level Laravel integrations. We use this 'clean room' to prove performance before client deployment.",
            link: "http://www.ervotech.xyz/"
        },
        {
            title: "Roofing Repair El Paso",
            industry: "Home Services / Roofing",
            location: "El Paso, TX",
            type: "Custom HTML/CSS Overhaul",
            impact: "High Lead Turnover & Ad Performance",
            desc: "A massive technical overhaul replacing a restrictive corporate template with custom-engineered architecture. Built specifically to handle high-volume local ad traffic with zero friction.",
            link: "https://roofingrepairelpaso.com/"
        },
        {
            title: "The Hard Truth",
            industry: "Author / Personal Branding",
            location: "El Paso, TX",
            type: "Custom Web Development",
            impact: "High-Visibility Launch Platform",
            desc: "A high-trust digital platform created for a major book launch. Prioritized clean UI and emotional resonance to serve as a central hub for author branding and sales.",
            link: "https://thehardtruthaf.com/"
        }
    ];

    // WordPress & CMS Implementations
    const wordpressProjects = [
        {
            title: "Unique Roofing NM",
            status: "Completed",
            desc: "Professional WordPress build providing a robust digital footprint for a regional roofing service provider.",
            link: "https://uniqueroofingnm.com/"
        },
        {
            title: "Texas Healthcare Plans",
            status: "In Progress",
            desc: "Developing a comprehensive healthcare portal focused on accessibility and local service navigation in the El Paso region.",
            link: "https://texashealthcareplans.com/"
        },
        {
            title: "El Paso Fire & Police",
            status: "In Progress",
            desc: "Technical development for a local institutional site, ensuring community resources are mobile-responsive and reachable.",
            link: "https://elpasofireandpolice.org/wordpress/"
        }
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/work" />
                <title>Portfolio | El Paso Custom Dev & WordPress | Ervotech</title>
                <meta name="description" content="View Ervotech's diverse portfolio: from high-performance Laravel/React builds to professional WordPress implementations for El Paso businesses." />
            </Helmet>
            <PublicLayout user={auth.user}>
                <Head title="Portfolio - Technical Proof of Concept" />

                {/* HERO: Engineered for Authority */}
                <section className="portfolio-hero services-hero local-landing" style={{ padding: '8rem 0' }}>
                    <div className="container hero-content text-center">
                        <Fade bottom cascade duration={1000}>
                            <div>
                                <span className="font-blue" style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                    Engineering Across Platforms
                                </span>
                                <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', color: '#ffffff' }}>Our Work</h1>
                                <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '1.5rem auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                                    From sub-second custom applications to scalable WordPress platforms, we build the infrastructure El Paso uses to grow.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* CUSTOM BUILDS: The 99% Performance Tier */}
                <section className="portfolio-grid local-landing" style={{ background: 'var(--surface-1)', padding: '6rem 0' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue" style={{ marginBottom: '3rem' }}>Custom High-Performance Builds</h2>
                        </Fade>
                        <div className="service-grid">
                            {customProjects.map((project, i) => (
                                <Zoom key={i} delay={i * 100}>
                                    <div className="results-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                            <span style={{ color: 'var(--accent-teal)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                                {project.industry}
                                            </span>
                                            {project.status && (
                                                <span style={{ fontSize: '0.7rem', color: 'var(--accent-purple)' }}>{project.status}</span>
                                            )}
                                        </div>
                                        <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
                                            {project.location} {project.stack ? `• ${project.stack}` : `• ${project.type}`}
                                        </p>
                                        <p style={{ flexGrow: 1 }}>{project.desc}</p>
                                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                                            {project.impact && (
                                                <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--accent-purple)', marginBottom: '1rem' }}>
                                                    Impact: {project.impact}
                                                </p>
                                            )}
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-blue">
                                                View Live Project &rarr;
                                            </a>
                                        </div>
                                    </div>
                                </Zoom>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WORDPRESS: The Local Versatility Tier */}
                <section className="wordpress-portfolio" style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <Fade bottom>
                            <h2 className="font-blue" style={{ marginBottom: '3rem' }}>WordPress Implementations</h2>
                        </Fade>
                        <div className="service-grid">
                            {wordpressProjects.map((project, i) => (
                                <Fade bottom key={i} delay={i * 100}>
                                    <div className="results-card" style={{ padding: '2rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <h3>{project.title}</h3>
                                            <span style={{ 
                                                fontSize: '0.7rem', 
                                                padding: '4px 8px', 
                                                borderRadius: '4px', 
                                                background: project.status === 'Completed' ? 'var(--accent-teal)' : 'var(--accent-purple)', 
                                                color: '#fff' 
                                            }}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p>{project.desc}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-blue" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                                            Visit Site &rarr;
                                        </a>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SANDBOX: The Innovation Signal */}
                <section className="dominate-section" style={{ background: 'var(--section-alt)', padding: '6rem 0' }}>
                    <div className="container text-center">
                        <Fade bottom>
                            <h2 style={{ color: 'var(--accent-teal)' }}>The Ervotech Sandbox</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                                We utilize isolated environments like our <strong>ervotech.site</strong> sandbox to test new themes and experimental UI/UX before they hit production.
                            </p>
                            <a href="http://www.ervotech.site/" target="_blank" className="nav-btn quote-btn" style={{ width: '280px', margin: '0 auto' }}>
                                View Sandbox
                            </a>
                        </Fade>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}