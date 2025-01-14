import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Gallery({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/about" />
                <title>About Us | Ervotech - Your Web Consulting Partner</title>
                <meta property="og:title" content="About Us | Ervotech - Your Web Consulting Partner" />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Ervotech" />

                {/* <!-- Hero Section --> */}
                <section class="about-hero">
                    <div class="container">
                        <h1>About Us</h1>
                        <p>Discover the story behind Ervotech and our commitment to excellence in web consulting.</p>
                    </div>
                </section>

                {/* Story Section with Cards */}
                <section className="about-story">
                    <div className="container">
                        <Fade>
                            <h2>Our Story</h2>
                            <div className="story-grid">
                                <div className="story-card">
                                    <h3>📍 Our Roots</h3>
                                    <p>Founded in El Paso, Texas, Ervotech started with a vision to empower small and medium-sized businesses.</p>
                                </div>
                                <div className="story-card">
                                    <h3>💡 Our Focus</h3>
                                    <p>We specialize in crafting user-friendly websites and optimizing digital strategies for business growth.</p>
                                </div>
                                <div className="story-card">
                                    <h3>🚀 Our Commitment</h3>
                                    <p>Driven by innovation and measurable results, we strive to build extraordinary digital solutions.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>


                {/* <!-- Mission Section --> */}
                <section className="about-mission">
                    <div className="container">
                        <Fade>
                            <h2>Our Mission</h2>
                            <p>
                                At Ervotech , our mission is to empower businesses through
                                innovative and user-centric digital solutions. We aim to bridge the gap
                                between vision and execution, helping businesses build strong, impactful,
                                and sustainable online presences.
                            </p>
                            <p>
                                Every project we undertake is a step towards making the digital world
                                more accessible, intuitive, and results-driven for businesses of all sizes.
                             </p>
                        </Fade>
                    </div>
                </section>


                {/* <!-- Team Section --> */}
                {/* <section class="about-team">
                <div class="container">
                    <h2>Meet Our Team</h2>
                    <p>Get to know the talented individuals driving Ervotech’s success.</p>
                </div>
            </section> */}

                {/* --- CTA Section --- */}
                <section className="about-cta">
                    <div className="container">
                        <Fade>
                            <h2>Ready to Work With Us?</h2>
                            <p>
                                Whether you're looking to enhance your web presence, optimize your SEO, or develop custom software solutions,
                                Ervotech is here to partner with you every step of the way. Our team is dedicated to turning your vision into reality.
                            </p>
                            <p>
                                Let's collaborate to build something extraordinary together. Reach out to us today and let's start your journey toward digital success.
                            </p>
                            <a href="/contact" className="primary-btn">Get in Touch</a>
                        </Fade>
                    </div>
                </section>
            </PublicLayout >
        </HelmetProvider>
    );
}
