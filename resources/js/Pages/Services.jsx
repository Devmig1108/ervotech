import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSearch, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';

export default function Services({ auth }) {
    return (
        <PublicLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Services</h2>}
        >
            <Head title="Our Services" />

            {/* --- Hero Section --- */}
            <section className="services-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Empowering your business with tailored digital solutions to drive growth and success.</p>
                </div>
            </section>

            {/* --- Services Overview Section --- */}
            <section className="services-overview">
                <div className="container">
                    <h2>What We Offer</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <FontAwesomeIcon icon={faLaptopCode} />
                            <h3>Web Development</h3>
                            <p>Custom-built websites tailored to your business needs, delivering seamless user experiences.</p>
                        </div>
                        <div className="service-card">
                            <FontAwesomeIcon icon={faSearch} />
                            <h3>SEO Optimization</h3>
                            <p>Boost your online visibility and attract more customers with expert SEO strategies.</p>
                        </div>
                        <div className="service-card">
                            <FontAwesomeIcon icon={faChartLine} />
                            <h3>Digital Marketing</h3>
                            <p>Strategic marketing campaigns designed to drive traffic and increase conversion rates.</p>
                        </div>
                        <div className="service-card">
                            <FontAwesomeIcon icon={faCogs} />
                            <h3>Software Development</h3>
                            <p>Scalable software solutions to streamline your operations and maximize efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us Section --- */}
            <section className="why-choose-us">
                <div className="container">
                    <h2>Why Choose Ervotech?</h2>
                    <ul>
                        <li><strong>Experienced Team:</strong> Skilled professionals dedicated to excellence.</li>
                        <li><strong>Data-Driven Decisions:</strong> Analytics and insights that guide our strategies.</li>
                        <li><strong>Client-Centric Approach:</strong> Your goals drive every decision we make.</li>
                        <li><strong>Innovative Solutions:</strong> Cutting-edge technology for modern businesses.</li>
                    </ul>
                </div>
            </section>

            {/* --- CTA Section --- */}
            {/* <section className="services-cta">
                <div className="container">
                    <h2>Ready to Elevate Your Business?</h2>
                    <p>Let us help you achieve your goals with our tailored services.</p>
                    <a href="/contact" className="primary-btn">Get Started</a>
                </div>
            </section> */}
        </PublicLayout>
    );
}
