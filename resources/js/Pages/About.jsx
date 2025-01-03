import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';

export default function Gallery({ auth }) {
    return (
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

            {/* <!-- Story Section --> */}
            <section className="about-story">
                <div className="container">
                    <h2>Our Story</h2>
                    <p>
                        Founded in <strong>El Paso, Texas</strong>, Ervotech began with a clear vision:
            to empower <strong>small and medium-sized businesses</strong> by enhancing their online presence.
            We believe that every business, no matter its size, deserves a robust digital platform
            to connect with customers and thrive in today's competitive landscape.
        </p>
                    <p>
                        At Ervotech, we’re passionate about showcasing the <strong>power of a strong web presence</strong>.
            From crafting user-friendly websites to optimizing digital strategies, our goal is to ensure
            every client stands out and grows in the digital world.
        </p>
                    <p>
                        Our journey is driven by a commitment to <strong>innovation, collaboration, and measurable results</strong>.
            Together, let’s build something extraordinary.
        </p>
                </div>
            </section>


            {/* <!-- Mission Section --> */}
            <section className="about-mission">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>
                        At <strong>Ervotech</strong>, our mission is to empower businesses through
            innovative and user-centric digital solutions. We aim to bridge the gap
            between vision and execution, helping businesses build strong, impactful,
            and sustainable online presences.
        </p>
                    <p>
                        Every project we undertake is a step towards making the digital world
                        more accessible, intuitive, and results-driven for businesses of all sizes.
        </p>
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
                    <h2>Ready to Work With Us?</h2>
                    <p>
                        Whether you're looking to enhance your web presence, optimize your SEO, or develop custom software solutions,
                        Ervotech is here to partner with you every step of the way. Our team is dedicated to turning your vision into reality.
        </p>
                    <p>
                        Let's collaborate to build something extraordinary together. Reach out to us today and let's start your journey toward digital success.
        </p>
                    <a href="/contact" className="primary-btn">Get in Touch</a>
                </div>
            </section>

        </PublicLayout >
    );
}
