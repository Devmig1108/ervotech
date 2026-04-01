import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Consulting({ auth }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Technical Web Consulting & SEO Strategy",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Ervotech",
            "areaServed": ["El Paso", "Las Cruces", "Horizon City"],
            "description": "Ervotech provides enterprise-grade technical web consulting. We specialize in high-performance Laravel/React architecture and local search dominance."
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/web-consulting-el-paso" />
                <title>Technical Web Consulting El Paso | Enterprise Strategy | Ervotech</title>
                <meta name="description" content="Ervotech provides high-performance web consulting for El Paso businesses. Our team specializes in Laravel audits, React performance, and scalable SEO roadmaps." />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>
            <PublicLayout user={auth.user}>
                <Head title="Web Consulting El Paso | Ervotech" />

                {/* HERO SECTION */}
                <section className="services-hero local-landing" style={{ padding: '9rem 0', textAlign: 'center' }}>
                    <div className="container">
                        <Fade bottom>
                            <span className="font-blue" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: '800' }}>
                                El Paso's Technical Authority
                            </span>
                            <h1 style={{ fontSize: '3.8rem', marginTop: '1.5rem', fontWeight: '900' }}>
                                Strategic Web Consulting <br /><span className="font-blue">for Scalable Growth</span>
                            </h1>
                            <p style={{ fontSize: '1.4rem', maxWidth: '900px', margin: '2rem auto', color: 'var(--text-2)', lineHeight: '1.6' }}>
                                We bridge the gap between "pretty design" and high-performance engineering. Our consulting team helps El Paso firms outpace national competitors through superior architecture.
                            </p>
                            <div style={{ marginTop: '3rem' }}>
                                <a href="/contact" className="nav-btn quote-btn" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Request an Enterprise Audit</a>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* THE "WHY" SECTION - Expanded for SEO Depth */}
                <section style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container" style={{ maxWidth: '1100px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                            <Fade left>
                                <div>
                                    <h2 className="font-blue">Infrastructure as a Competitive Advantage</h2>
                                    <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                                        Most local agencies rely on generic, bloated templates that fail under modern search scrutiny. At Ervotech, <strong>we engineer for speed</strong>.
                                    </p>
                                    <p style={{ fontSize: '1.15rem' }}>
                                        From the <strong>Upper Valley to East Side El Paso</strong>, businesses are losing revenue because their digital foundations are unstable. Our consulting services identify critical bottlenecks in your React components and Laravel backends that inhibit growth.
                                    </p>
                                </div>
                            </Fade>
                            <Fade right>
                                <div style={{ background: 'var(--primary-dark)', padding: '3rem', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
                                    <h4 style={{ color: 'var(--accent-teal)', marginBottom: '1rem' }}>Our Core Focus Areas:</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5', fontSize: '1.1rem' }}>
                                        <li>✔ Performance & LCP Optimization</li>
                                        <li>✔ Scalable SEO Content Siloing</li>
                                        <li>✔ Database & API Architecture Audits</li>
                                        <li>✔ Custom Laravel/React Integration</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>

                {/* STRATEGIC PROCESS SECTION (This adds the "Business" feel) */}
                <section style={{ padding: '6rem 0' }}>
                    <div className="container">
                        <h2 className="font-blue" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Strategic Consulting Process</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {[
                                { step: "01", title: "Technical Audit", desc: "We deep-dive into your current code, hosting, and SEO health to find friction points." },
                                { step: "02", title: "Performance Roadmap", desc: "We draft a sub-second response strategy using modern headless architecture." },
                                { step: "03", title: "Local Market Siloing", desc: "We architect your content to dominate El Paso and surrounding regional search terms." },
                                { step: "04", title: "Scalable Execution", desc: "Our team implements the high-performance stack that your business owns for life." }
                            ].map((item, index) => (
                                <div key={index} style={{ padding: '2.5rem', background: 'var(--surface-1)', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
                                    <span className="font-blue" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{item.step}</span>
                                    <h3 style={{ marginTop: '1rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-2)', marginTop: '1rem' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION (Long-tail SEO capture) */}
                <section style={{ padding: '6rem 0', background: 'var(--surface-2)' }}>
                    <div className="container">
                        <h2 className="font-blue" style={{ marginBottom: '3rem' }}>Web Consulting FAQ for El Paso Firms</h2>
                        <div style={{ display: 'grid', gap: '2.5rem', maxWidth: '1000px' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)' }}>Why does Ervotech prioritize Laravel and React?</h3>
                                <p>We have found that custom-engineered stacks provide the security and speed that off-the-shelf builders cannot match. This technical edge is what allows our clients to outrank competitors in the El Paso market.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)' }}>Can you consult on existing WordPress sites?</h3>
                                <p>Yes. While we prefer modern stacks, we often consult for local businesses to optimize their current WordPress performance, improve core web vitals, and plan migrations to more scalable platforms.</p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-teal)' }}>What is the ROI of technical consulting?</h3>
                                <p>Our clients typically see a massive reduction in bounce rates and a direct increase in organic leads. By fixing the "hidden" technical issues, we make your digital marketing efforts significantly more effective.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="dominate-section" style={{ padding: '7rem 0', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ color: 'var(--accent-teal)', fontSize: '2.5rem' }}>Partner with El Paso’s Digital Engineers</h2>
                        <p style={{ maxWidth: '700px', margin: '2rem auto', fontSize: '1.2rem', color: 'var(--text-2)' }}>
                            Stop settling for "good enough" web design. Hire a technical partner dedicated to your long-term scalability.
                        </p>
                        <a href="/contact" className="nav-btn quote-btn" style={{ width: '350px', margin: '0 auto' }}>Book Your Consultation</a>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}