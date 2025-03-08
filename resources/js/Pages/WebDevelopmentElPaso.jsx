import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";

export default function WebDevelopment({ auth }) {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <link
                    rel="canonical"
                    href="https://www.ervotechep.com/web-design"
                />
                <title>
                    Web Design and Development in El Paso, TX | Custom Websites & SEO
                </title>
                <meta
                    property="og:title"
                    content="Web Development in El Paso, TX | Custom Websites & SEO"
                />
                <meta
                    name="description"
                    content="Looking for expert web development in El Paso, TX? Ervotech builds high-performance websites tailored for businesses. Get a custom website today!"
                />
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Web Design & Development in El Paso
                    </h2>
                }
            >
                <Head title="Web Development in El Paso | Ervotech" />

                {/* Hero Section */}
                <section className="webdev-hero">
                    <div className="container">
                        <Fade>
                            <h1>Custom Web Design & Development in El Paso, TX</h1>
                            <p>
                                Professional, high-performance web design
                                services tailored for businesses looking to
                                enhance their digital presence.
                            </p>
                        </Fade>
                    </div>
                </section>

                {/* Why Web Design Matters */}
                <section className="webdev-benefits">
                    <div className="container">
                        <Fade>
                            <h2>
                                Why Web Design Matters for Your Business
                            </h2>
                            <ul>
                                <li>
                                    <strong>
                                        Boosts Local Visibility and Credibility
                                    </strong>{" "}
                                    – A professional website establishes trust
                                    and makes your business more discoverable in
                                    local searches.
                                </li>
                                <li>
                                    <strong>
                                        Improves User Experience and Engagement
                                    </strong>{" "}
                                    – A well-structured, intuitive website design keeps
                                    visitors engaged, reducing bounce rates and
                                    increasing customer interaction.
                                </li>
                                <li>
                                    <strong>
                                        Optimized for Search Engines to Increase
                                        Organic Traffic
                                    </strong>{" "}
                                    – SEO-friendly web development ensures your
                                    site ranks higher in Google search results,
                                    attracting more potential customers.
                                </li>
                                <li>
                                    <strong>
                                        Higher Conversion Rates and Business
                                        Growth
                                    </strong>{" "}
                                    – A custom website design is built to guide
                                    visitors toward taking action, whether it's
                                    making a purchase, booking a service, or
                                    contacting you.
                                </li>
                                <li>
                                    <strong>
                                        Faster Load Times and Mobile
                                        Optimization
                                    </strong>{" "}
                                    – A slow website can drive users away. We
                                    ensure your website is fast, responsive, and
                                    mobile-friendly to keep customers engaged.
                                </li>
                                <li>
                                    <strong>
                                        Scalability for Future Growth
                                    </strong>{" "}
                                    – Your website is built with scalability in
                                    mind, allowing easy expansions, new
                                    features, and updates as your business
                                    grows.
                                </li>
                                <li>
                                    <strong>Stronger Brand Identity</strong> –
                                    Custom web design ensures your site aligns
                                    with your brand’s colors, messaging, and
                                    vision, helping you stand out from
                                    competitors.
                                </li>
                            </ul>
                        </Fade>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="services-list">
                    <div className="container">
                        <Fade>
                            <h2>Our Web Development Services</h2>
                            <div className="service-grid">
                                <div className="service-card">
                                    <h3>Custom Website Design</h3>
                                    <p>
                                        Fully customized websites tailored to
                                        match your brand and business goals.
                                    </p>
                                </div>
                                <div className="service-card">
                                    <h3>SEO-Optimized Websites</h3>
                                    <p>
                                        Our web development ensures high search
                                        engine rankings for better visibility.
                                    </p>
                                </div>
                                {/* <div className="service-card">
                                    <h3>E-commerce Development</h3>
                                    <p>
                                        Build a robust, secure, and
                                        user-friendly online store.
                                    </p>
                                </div> */}
                                <div className="service-card">
                                    <h3>Website Speed Optimization</h3>
                                    <p>
                                        We optimize website performance for fast
                                        loading times and seamless browsing.
                                    </p>
                                </div>
                                <div className="service-card">
                                    <h3>
                                        Mobile-Friendly & Responsive Designs
                                    </h3>
                                    <p>
                                        Websites that adapt perfectly to any
                                        device.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>

                {/* FAQ Section - Accordion Style */}
                <section className="faq-section">
                    <div className="container">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-accordion">
                            {[
                                {
                                    question:
                                        "How long does it take to build a website?",
                                    answer:
                                        "Most websites are completed within 4-6 weeks, depending on complexity.",
                                },
                                {
                                    question:
                                        "Why is SEO important for my website?",
                                    answer:
                                        "SEO increases visibility in search results, driving more traffic to your business.",
                                },
                                {
                                    question:
                                        "Do you offer website maintenance?",
                                    answer:
                                        "Yes, we provide ongoing maintenance to keep your website secure and up-to-date.",
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${
                                        openFAQ === index ? "open" : ""
                                    }`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3>{faq.question}</h3>
                                    <p
                                        className="faq-answer"
                                        style={{
                                            display:
                                                openFAQ === index
                                                    ? "block"
                                                    : "none",
                                        }}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="cta-section">
                    <div className="container">
                        <Fade>
                            <h2>
                                Get Started with Custom Web Design and Development Today
                            </h2>
                            <p>
                                Contact us to discuss how we can build a
                                high-performance website for your business.
                            </p>
                            <a href="/contact" className="primary-btn">
                                Get a Free Quote
                            </a>
                        </Fade>
                    </div>
                </section>
            </PublicLayout>
        </HelmetProvider>
    );
}
