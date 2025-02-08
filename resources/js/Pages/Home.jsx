import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import ContactForm from '@/Components/ContactForm';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/" />
                <meta property="og:title" content="Ervotech | El Paso Web Design & Development" />
                <meta name="description" content="Ervotech provides expert web design, SEO optimization, and custom software development for small to medium-sized businesses in El Paso." />
                <title>Ervotech | El Paso Web Design & Development</title>
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">El Paso Web Design & Development</h2>}
            >
                <Head title="El Paso Web Design & Development | Ervotech" />
                <ParallaxBanner
                    layers={[
                        { image: '../images/hero3.webp', speed: -30 },
                        { image: '../images/hero3.webp', speed: -10 },
                    ]}
                    className="aspect-[2/1] hero">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                    <Fade><h1>Transform Your Business with Expert Web Consulting</h1></Fade>
                        <Fade>
                            <p>Ervotech specializes in modern web solutions, including SEO optimization, website migration, and custom web development to meet your business needs.</p>
                        </Fade>
                        <div className="hero-buttons">
                            <a href="#services" className="primary-btn">Explore Our Services</a>
                            <a href="#contact" className="secondary-btn">Get in Touch</a>
                        </div>
                    </div>
                </ParallaxBanner>

                {/* Local SEO-Optimized Split Section */}
                <section className="split-section">
                    <Fade>
                        <div className="split-text">
                            <Parallax speed={-10}>
                                <h2>El Paso Web Design & SEO Services</h2>
                                <p>
                                    At Ervotech, we are committed to providing top-notch <strong className="font-blue">web design</strong>, <strong className="font-blue">SEO solutions</strong>, and <strong className="font-blue">custom software development</strong> tailored for businesses in El Paso.
                                </p>
                                <p>
                                    <em>We help local businesses enhance their online presence, attract customers, and scale through modern digital solutions.</em>
                                </p>
                            </Parallax>
                        </div>
                    </Fade>
                    <div className="split-image" role="img" aria-label="El Paso business owners working on their website redesign"></div>
                </section>

                {/* Updated Services Section with Local SEO */}
                <section className="home-services" id="home-services">
                    <div className="container">
                        <Parallax speed={-10}>
                            <h2>Our Web Design & Development Services in El Paso</h2>
                            <div className="service-grid">
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#website-migration" itemprop="name">Website Migration</a>
                                        </h3>
                                        <p itemprop="description">Seamless migration of your website to modern, scalable platforms, ensuring improved performance.</p>
                                    </Zoom>
                                </div>
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#web-design" itemprop="name">Custom Web Design in El Paso</a>
                                        </h3>
                                        <p itemprop="description">Build a stunning, high-performing website tailored for your local business.</p>
                                    </Zoom>
                                </div>
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#software-development" itemprop="name">Software Development for Local Businesses</a>
                                        </h3>
                                        <p itemprop="description">Custom web applications designed for El Paso businesses to improve efficiency and growth.</p>
                                    </Zoom>
                                </div>
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#seo-strategy" itemprop="name">Local SEO & Content Strategy</a>
                                        </h3>
                                        <p itemprop="description">Improve search rankings and attract more El Paso customers with optimized content and SEO strategies.</p>
                                    </Zoom>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="vision" id="vision">
                    <div className="container">
                        <Parallax speed={-10}>
                            <h2>Partner with the Leading Web Design Agency in El Paso</h2>
                            <p>We help small and medium-sized businesses establish a strong online presence through expert web development and SEO solutions.</p>
                            <div className="vision-cta">
                                <a href="#contact" className="primary-btn">Let's Build Together</a>
                            </div>
                        </Parallax>
                    </div>
                </section>

                {/* Contact Form */}
                <ContactForm />
            </PublicLayout>
        </HelmetProvider>
    );
}
