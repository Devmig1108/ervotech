import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Services({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/services" />
                <title>Web Design & Development Services in El Paso | Ervotech</title>
                <meta property="og:title" content="Web Design & Development Services in El Paso | Ervotech" />
                <meta name="description" content="Explore Ervotech's professional web design, development, SEO, and software solutions tailored for businesses in El Paso." />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Web Design & Development Services in El Paso</h2>}
            >
                <Head title="Web Design & Development Services | Ervotech" />

                {/* Hero Section */}
                <section className="services-hero">
                    <div className="container">
                        <Fade>
                            <h1>Professional Web Design & SEO Services</h1>
                            <p>We provide a range of digital solutions tailored to your business goals, including website development, SEO optimization, and custom software solutions.</p>
                        </Fade>
                    </div>
                </section>

                {/* Service Blocks */}
                <section className="services-list">
                    <div className="container">
                        <Fade>
                            <h2>Our Web Services</h2>
                            <div className="service-grid">
                                <div id="website-migration" className="service-card">
                                    <h3>Website Migration</h3>
                                    <p>Seamlessly transfer your website to modern, scalable platforms with minimal downtime.</p>
                                </div>
                                <div id="web-design" className="service-card">
                                    <h3>Custom Web Design & Development</h3>
                                    <p>We design visually stunning, high-performing websites for businesses in El Paso.</p>
                                </div>
                                <div id="software-development" className="service-card">
                                    <h3>Custom Software Development</h3>
                                    <p>Tailored software solutions to optimize business operations and efficiency.</p>
                                </div>
                                <div id="seo-strategy" className="service-card">
                                    <h3>SEO Optimization for Local Businesses</h3>
                                    <p>Improve your search rankings and attract more customers with our local SEO strategies.</p>
                                </div>
                                <div id="content-strategy" className="service-card">
                                    <h3>Content Strategy & Digital Marketing</h3>
                                    <p>Engaging, conversion-driven content to boost your online presence.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="services-cta">
                    <Fade>
                        <div className="container">
                            <h2>Partner with a Top Web Design Agency in El Paso</h2>
                            <p>Get in touch with us today to discuss how we can elevate your digital presence.</p>
                            <a href="/contact" className="primary-btn">Contact Us</a>
                        </div>
                    </Fade>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}
