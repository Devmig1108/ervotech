import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Services({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/services" />
                <title>Our Services | Ervotech - Tailored Web Solutions</title>
                <meta property="og:title" content="Our Services | Ervotech - Tailored Web Solutions" />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Services</h2>}
            >
                <Head title="Our Services" />

                {/* Hero Section */}
                <section className="services-hero">
                    <div className="container">
                        <Fade>
                            <h1>Our Services</h1>
                            <p>We provide a range of digital solutions tailored to your business goals.</p>
                        </Fade>
                    </div>
                </section>

                {/* Service Blocks */}
                <section className="services-list">
                    <div className="container">
                        <Fade>
                            <h2>What We Offer</h2>
                            <div className="service-grid">
                                <div id="website-migration" className="service-card">
                                    <h3>Website Migration</h3>
                                    <p>Seamlessly transfer your website to modern, scalable platforms without downtime.</p>
                                </div>
                                {/* <div id="seo-optimization" className="service-card">
                                <h3>SEO Optimization</h3>
                                <p>Improve your search engine rankings with our strategic SEO techniques.</p>
                            </div> */}
                                <div id="web-design" className="service-card">
                                    <h3>Web Design & Development</h3>
                                    <p>Custom-designed websites that combine aesthetics and functionality.</p>
                                </div>
                                <div id="software-development" className="service-card">
                                    <h3>Software Development</h3>
                                    <p>Bespoke software solutions to address your business challenges.</p>
                                </div>
                                <div id="content-strategy" className="service-card">
                                    <h3>Content Strategy</h3>
                                    <p>Engaging content strategies that resonate with your target audience.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* Portfolio Section */}
                {/* <section className="portfolio">
                <div className="container">
                    <h2>Our Work</h2>
                    <p>Explore some of our successful projects and see how we've helped businesses grow online.</p>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">Project 1</div>
                        <div className="portfolio-item">Project 2</div>
                        <div className="portfolio-item">Project 3</div>
                    </div>
                </div>
            </section> */}

                {/* CTA Section */}
                <section className="services-cta">
                    <Fade>
                        <div className="container">
                            <h2>Let’s Build Something Great Together</h2>
                            <p>Get in touch with us to discuss your project and see how we can help.</p>
                            <a href="/contact" className="primary-btn">Contact Us</a>
                        </div>
                    </Fade>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}
