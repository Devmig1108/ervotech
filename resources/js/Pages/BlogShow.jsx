import React from "react";
import { usePage } from "@inertiajs/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PublicLayout from "@/Layouts/PublicLayout";
import DOMPurify from "dompurify";
import Fade from "react-reveal/Fade";
import ContactForm from "@/Components/ContactForm";

export default function BlogShow({ auth }) {
    const { blog } = usePage().props;

    return (
        <HelmetProvider>
            <Helmet>
                <link
                    rel="canonical"
                    href={`https://www.ervotechep.com/blog/${blog.slug}`}
                />
                <meta
                    property="og:title"
                    content={`${blog.title} | Ervotech`}
                />
                <meta
                    property="og:description"
                    content={
                        blog.excerpt ||
                        "Read the latest insights on high-performance web development and local SEO from Ervotech."
                    }
                />
                <meta
                    property="og:image"
                    content={
                        blog.image
                            ? `https://www.ervotechep.com/storage/${blog.image}`
                            : "https://www.ervotechep.com/default-thumbnail.jpg"
                    }
                />
                <title>{blog.title} | Ervotech - El Paso Web Experts</title>
            </Helmet>
            
            <PublicLayout user={auth?.user}>
                <main className="home-main">
                    
                    {/* 1. EDITORIAL HERO: Title & Metadata */}
                    <section className="hero-modern aurora-bg" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', paddingBottom: blog.image ? '8rem' : '4rem' }}>
                        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                            
                            <Fade bottom duration={1000}>
                                <div style={{ marginBottom: '1.5rem', color: 'var(--accent-teal)', fontSize: '0.95rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} 
                                    <span style={{ margin: '0 10px', color: 'var(--border-subtle)' }}>|</span> 
                                    By {blog.author || "Ervotech Editorial"}
                                </div>
                            </Fade>
                            
                            <Fade bottom delay={200} duration={1000}>
                                <h1 className="display-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.15', marginBottom: '0' }}>
                                    {blog.title}
                                </h1>
                            </Fade>

                        </div>
                    </section>

                    {/* 2. FEATURED IMAGE: Using var(--page-bg) so it swaps cleanly */}
                    {blog.image && (
                        <section style={{ background: 'var(--page-bg)', padding: '0 1rem', marginTop: '-6rem', position: 'relative', zIndex: 20 }}>
                            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                <Fade bottom delay={400} duration={1000}>
                                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', background: 'var(--surface-1)', border: '1px solid var(--border-subtle)' }}>
                                        <img
                                            src={`/storage/${blog.image}`}
                                            alt={blog.title}
                                            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '600px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </Fade>
                            </div>
                        </section>
                    )}

                    {/* 3. ARTICLE CONTENT: Using var(--page-bg) so it swaps cleanly */}
                    <section style={{ background: 'var(--page-bg)', padding: '5rem 1rem 8rem' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div
                                    className="blog-content"
                                    style={{ color: 'var(--text-1)' }} /* Ensures text switches perfectly */
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(blog.content),
                                    }}
                                />
                            </Fade>
                        </div>
                    </section>

                    {/* 4. POST-ARTICLE LEAD MAGNET: Removed inline background so the CSS class handles the theme swap */}
                    <section id="audit" className="audit-cta-section" style={{ padding: '4rem 1rem 8rem', borderTop: '1px solid var(--border-subtle)' }}>
                        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <Fade bottom duration={800}>
                                <div className="audit-box aurora-bg-subtle">
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                                        Apply These Strategies to Your Site.
                                    </h2>
                                    <p style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>
                                        Enjoyed the article? Find out how these concepts apply to your specific business. Drop your website address below for a free technical review.
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