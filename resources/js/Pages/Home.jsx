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
                <meta property="og:title" content="Ervotech - Web Consulting and Development" />
                <title>Ervotech - Web Consulting and Development</title>
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Ervotech" />
                <ParallaxBanner
                    layers={[
                        { image: '../images/hero3.webp', speed: -30 },
                        { image: '../images/hero3.webp', speed: -10 },
                    ]}
                    className="aspect-[2/1] hero">
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <Fade><h1>Transform Your Business with Expert Web Consulting</h1></Fade>
                        <Fade>
                            <p>Ervotech specializes in modern web solutions, including SEO optimization, website migration, and custom web development to meet your business needs.</p>
                        </Fade>
                        <div class="hero-buttons">
                            <a href="#services" class="primary-btn">Explore Our Services</a>
                            <a href="#contact" class="secondary-btn">Get in Touch</a>
                        </div>
                    </div>
                </ParallaxBanner>

                {/* <!-- Split Section --> */}
                <section className="split-section">
                    <Fade>
                        <div className="split-text">
                            <Parallax speed={-10}>
                                <h2>Our Commitment to Web Consulting Excellence</h2>
                                <p>
                                    At Ervotech, we are committed to delivering digital solutions that drive growth, innovation, and success.
                                    Our <strong className="font-blue">web consulting</strong>, <strong className="font-blue">SEO optimization</strong>, and <strong className="font-blue">web development services</strong> empower businesses to thrive online.
                                </p>
                                <p>
                                    <em>Your success is our priority. Every project reflects our dedication to delivering impactful, scalable solutions.</em>
                                </p>
                            </Parallax>
                        </div>
                    </Fade>
                    <div
                        class="split-image"
                        role="img"
                        aria-label="Modern workspace setup for web consulting with a laptop, notepad, and coffee cup"></div>
                </section>


                {/* <!-- Services Section --> */}
                <section className="home-services" id="home-services">
                    <div className="container">
                        <Parallax speed={-10}>
                            <h2>Our Services</h2>
                            <div className="service-grid">
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#website-migration" itemprop="name">Website Migration</a>
                                        </h3>
                                        <p itemprop="description">Seamless migration of your website to modern, scalable platforms.</p>
                                    </Zoom>
                                </div>
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#web-design" itemprop="name">Web Design & Development</a>
                                        </h3>
                                        <p itemprop="description">Create stunning, user-friendly websites for your business.</p>
                                    </Zoom>
                                </div>
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#software-development" itemprop="name">Software Development</a>
                                        </h3>
                                        <p itemprop="description">Custom web applications tailored to meet your business goals.</p>
                                    </Zoom>
                                </div>
                                <div className="service-card" itemscope itemtype="https://schema.org/Service">
                                    <Zoom>
                                        <h3>
                                            <a href="/services#content-strategy" itemprop="name">Content Strategy</a>
                                        </h3>
                                        <p itemprop="description">Crafting compelling content to drive engagement and results.</p>
                                    </Zoom>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </section>

                {/* <!-- Vision Section --> */}
                <section className="vision" id="vision">
                    <div className="container">
                        <Parallax speed={-10}>
                            <h2>Our Vision for Empowering Businesses</h2>
                            <div className="vision-content">
                                <p>
                                    At Ervotech, our vision is to empower businesses with innovative <strong className="font-blue">web consulting </strong>
                                    and <strong className="font-blue">digital solutions</strong> that drive growth and efficiency.
                                </p>
                                <p>
                                    With a focus on <strong className="font-blue">SEO optimization</strong> and <strong className="font-blue">custom web development</strong>,
                                    we aim to exceed expectations and help our clients achieve measurable success.
                                </p>
                            </div>
                            <div className="vision-cta">
                                <a href="#contact" className="primary-btn">Let's Build Together</a>
                            </div>
                        </Parallax>
                    </div>
                </section>

                {/* <!-- Why Choose Us Section --> */}
                <section className="features" id="features">
                    <div className="container">
                        <Parallax speed={-10}>
                            <h2>Why Choose Ervotech for Web Consulting?</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h3>Innovative Solutions</h3>
                                    <p>We blend creativity and technology to deliver impactful web solutions.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>Client-Focused Approach</h3>
                                    <p>Your business goals are at the center of everything we create.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>Scalable Web Design</h3>
                                    <p>We future-proof your digital presence with scalable web development.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>Clear Communication</h3>
                                    <p>We ensure a transparent and collaborative process from start to finish.</p>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </section>

                {/* <!-- Testimonials Section --> */}
                {/* <section class="testimonials" id="testimonials">
                <div class="container">
                    <h2>What Our Clients Say</h2>
                    <div class="testimonial-grid">
                        <div class="testimonial" itemscope itemtype="https://schema.org/Review">
                            <p itemprop="reviewBody">"The Web Consult team delivered exactly what we needed, and our site has never performed better."</p>
                            <h4>- Jane Doe</h4>
                        </div>
                        <div class="testimonial" itemscope itemtype="https://schema.org/Review">
                            <p itemprop="reviewBody">"Professional, reliable, and innovative. Highly recommend for web development projects!"</p>
                            <h4>- John Smith</h4>
                        </div>
                        <div class="testimonial" itemscope itemtype="https://schema.org/Review">
                            <p itemprop="reviewBody">"Thanks to Web Consult, our online presence has skyrocketed. Fantastic work!"</p>
                            <h4>- Emily Clark</h4>
                        </div>
                    </div>
                </div>
            </section> */}
                {/* <!-- Contact Section --> */}
                <ContactForm />
            </PublicLayout>
        </HelmetProvider>
    );
}
