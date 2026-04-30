import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PublicLayout from "@/Layouts/PublicLayout";
import DOMPurify from "dompurify";
import Fade from "react-reveal/Fade";
import ContactForm from "@/Components/ContactForm";

export default function BlogIndex({ auth }) {
    const { blogs } = usePage().props;

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/blog/" />
                <meta
                    property="og:title"
                    content="Insights & Strategy | Ervotech"
                />
                <title>Web Design & SEO Blog | Ervotech</title>
                <meta name="description" content="Deep dives into high-performance web development, local SEO strategies, and digital growth for El Paso businesses." />
            </Helmet>
            
            <PublicLayout user={auth?.user}>
                <main className="home-main">
                    
                    {/* 1. HERO SECTION: Premium Editorial Feel */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            <Fade bottom duration={1000}>
                                <span className="badge-premium" style={{ fontSize: 'inherit', fontWeight: '600' }}>
                                    Insights & Strategy
                                </span>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading">
                                    The Ervotech <br />
                                    <span className="text-gradient">Journal.</span>
                                </h1>
                            </Fade>
                            
                            <Fade bottom delay={400} duration={1000}>
                                <p className="hero-subtext">
                                    Deep dives into high-performance web development, local SEO strategies, and digital growth techniques for El Paso businesses.
                                </p>
                            </Fade>
                        </div>
                    </section>

                    {/* 2. BLOG GRID: Using the Premium Card Style */}
                    <section style={{ padding: '4rem 1rem 8rem', background: 'var(--primary-dark)' }}>
                        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                                
                                {blogs?.map((blog, index) => (
                                    <Fade bottom delay={(index % 3) * 150} duration={800} key={blog.id}>
                                        <div className="portfolio-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                            
                                            {/* Featured Image Top Half */}
                                            <div style={{ background: 'var(--surface-1)', height: '240px', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)', position: 'relative', overflow: 'hidden' }}>
                                                {blog.image ? (
                                                    <Link href={`/blog/${blog.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                                                        <img
                                                            src={"/storage/" + blog.image}
                                                            alt={blog.title}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                                                            loading="lazy"
                                                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                                        />
                                                    </Link>
                                                ) : (
                                                    <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>No Image</span>
                                                )}
                                            </div>

                                            {/* Content Bottom Half */}
                                            <div style={{ flexGrow: 1, padding: '2rem', background: 'var(--secondary-dark)', borderRadius: '0 0 12px 12px', border: '1px solid var(--border-subtle)', borderTop: 'none', display: 'flex', flexDirection: 'column' }}>
                                                
                                                {/* Date / Meta */}
                                                <div style={{ marginBottom: '1rem', color: 'var(--accent-teal)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                    {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </div>
                                                
                                                {/* Title */}
                                                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.4', textAlign: 'left' }}>
                                                    <Link 
                                                        href={`/blog/${blog.slug}`} 
                                                        style={{ color: 'var(--text-1)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                                                        onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                                                        onMouseOut={(e) => e.target.style.color = 'var(--text-1)'}
                                                    >
                                                        {blog.title}
                                                    </Link>
                                                </h2>
                                                
                                                {/* Excerpt */}
                                                <div
                                                    style={{ fontSize: '1.05rem', color: 'var(--text-2)', marginBottom: '2rem', fontFamily: "'Poppins', sans-serif", flexGrow: 1, lineHeight: '1.7' }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(
                                                            blog.content.slice(0, 140) + "..."
                                                        ),
                                                    }}
                                                />
                                                
                                                {/* Read More Link */}
                                                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                                    <Link
                                                        href={`/blog/${blog.slug}`}
                                                        style={{ color: 'var(--accent-teal)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s ease' }}
                                                        onMouseOver={(e) => e.target.style.color = 'var(--accent-purple)'}
                                                        onMouseOut={(e) => e.target.style.color = 'var(--accent-teal)'}
                                                    >
                                                        Read Article 
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                                            <polyline points="12 5 19 12 12 19"></polyline>
                                                        </svg>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. LEAD MAGNET / AUDIT CTA */}
                    <section id="audit" className="audit-cta-section" style={{ padding: '6rem 1rem 8rem', background: 'var(--secondary-dark)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg">
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                                        Apply These Strategies to Your Site.
                                    </h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>
                                        Stop guessing what works. Drop your website address below, and we'll send you a free technical review showing exactly how to capture more local traffic.
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