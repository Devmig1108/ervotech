import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/about" />
                <title>About Us | Ervotech - El Paso Web Consulting & Development</title>
                <meta property="og:title" content="About Us | Ervotech - El Paso Web Consulting & Development" />
                <meta name="description" content="Learn about Ervotech, a leading web consulting and development company in El Paso, dedicated to helping businesses grow online with expert web solutions." />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About Ervotech - Web Design & SEO in El Paso</h2>}
            >
                <Head title="About Ervotech - El Paso Web Development & Consulting" />

                {/* <!-- Hero Section --> */}
                <section className="about-hero">
                    <div className="container">
                        <h1>About Ervotech</h1>
                        <p>Discover how Ervotech helps small and medium-sized businesses in El Paso thrive with expert web design, SEO, and development solutions.</p>
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
                                    <p>Founded in El Paso, Texas, Ervotech began with a mission to empower local businesses through effective web solutions.</p>
                                </div>
                                <div className="story-card">
                                    <h3>💡 Our Focus on Web Design & SEO</h3>
                                    <p>We specialize in crafting user-friendly, SEO-optimized websites and digital strategies that drive business growth.</p>
                                </div>
                                <div className="story-card">
                                    <h3>🚀 Our Commitment to Innovation</h3>
                                    <p>We combine creativity and technology to build extraordinary digital solutions tailored to the needs of El Paso businesses.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* <!-- Mission Section --> */}
                <section className="about-mission">
                    <div className="container">
                        <Fade>
                            <h2>Our Mission: Helping El Paso Businesses Succeed Online</h2>
                            <p>
                                At Ervotech, our mission is to help local businesses establish strong, impactful, and sustainable online presences through expert web design, SEO, and custom software development.
                            </p>
                            <p>
                                We are dedicated to making the digital world more accessible and results-driven for businesses in El Paso and beyond.
                             </p>
                        </Fade>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="about-cta">
                    <div className="container">
                        <Fade>
                            <h2>Work With the Best Web Design Team</h2>
                            <p>
                                Whether you're looking for a professional website, SEO improvements, or custom software solutions, Ervotech is your trusted local partner for digital success.
                            </p>
                            <p>
                                Let's collaborate to build something extraordinary. Contact us today and start your journey toward a stronger online presence.
                            </p>
                            <a href="/contact" className="primary-btn">Get in Touch</a>
                        </Fade>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}
