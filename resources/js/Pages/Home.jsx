import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ContactForm from "@/Components/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home({ auth }) {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/" />
                <meta
                    property="og:title"
                    content="Custom Web Design & SEO Services | Ervotech El Paso"
                />
                <meta
                    property="og:description"
                    content="Boost your online presence with expert web design & SEO solutions. Ervotech helps businesses in El Paso grow with modern digital strategies."
                />
                <meta
                    property="og:image"
                    content="https://www.ervotechep.com/images/Logo2.png"
                />
                <meta property="og:url" content="https://www.ervotechep.com/" />
                <meta
                    name="description"
                    content="Looking for expert web design and SEO services? Ervotech provides custom websites & SEO solutions to help your business grow. Contact us today!"
                />
                <title>
                    Custom Web Design & SEO Services | Ervotech El Paso
                </title>
            </Helmet>
            <PublicLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        El Paso Web Design & Development
                    </h2>
                }
            >
                <Head title="El Paso Web Design & Development | Ervotech" />
                <ParallaxBanner
                    layers={[
                        { image: "../images/hero3.webp", speed: -30 },
                        { image: "../images/hero3.webp", speed: -10 },
                    ]}
                    className="aspect-[2/1] hero"
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1>
                            Custom Web Design & SEO Services in El Paso That
                            Help Your Business Grow
                        </h1>
                        <Fade>
                            <p>
                                Looking for expert web design and SEO services
                                in El Paso? Ervotech builds high-performance
                                websites and search-optimized strategies
                                tailored for small businesses and startups. Our
                                team ensures your website ranks higher, loads
                                faster, and converts visitors into customers.
                            </p>
                        </Fade>

                        <div className="hero-buttons">
                            <a href="#services" className="primary-btn">
                                Explore Our Services
                            </a>
                            <a href="#contact" className="secondary-btn">
                                Get in Touch
                            </a>
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
                                    At Ervotech, we are committed to providing
                                    top-notch{" "}
                                    <strong className="font-blue">
                                        web design
                                    </strong>
                                    ,{" "}
                                    <strong className="font-blue">
                                        SEO solutions
                                    </strong>
                                    , and{" "}
                                    <strong className="font-blue">
                                        custom software development
                                    </strong>{" "}
                                    tailored for businesses in El Paso and the
                                    surrounding area.
                                </p>
                                <p>
                                    <em>
                                        We help local businesses enhance their
                                        online presence, attract customers, and
                                        scale through modern digital solutions.
                                    </em>
                                </p>
                            </Parallax>
                        </div>
                    </Fade>
                    <div
                        className="split-image"
                        role="img"
                        aria-label="El Paso business owners working on their website redesign"
                    ></div>
                </section>

                {/* Updated Services Section with Local SEO */}
                <section className="home-services" id="home-services">
                    <div className="container">
                        <Parallax speed={-10}>
                            <h2>
                                Our Web Design & Development Services in El Paso
                            </h2>
                            <div className="service-grid">
                                <div
                                    className="service-card"
                                    itemscope
                                    itemtype="https://schema.org/Service"
                                >
                                    <Zoom>
                                        <h3>
                                            <a
                                                href="/services#website-migration"
                                                itemprop="name"
                                            >
                                                Website Migration
                                            </a>
                                        </h3>
                                        <p itemprop="description">
                                            Seamless migration of your website
                                            to modern, scalable platforms,
                                            ensuring improved performance.
                                        </p>
                                    </Zoom>
                                </div>
                                <div
                                    className="service-card"
                                    itemscope
                                    itemtype="https://schema.org/Service"
                                >
                                    <Zoom>
                                        <h3>
                                            <a
                                                href="/services#web-design"
                                                itemprop="name"
                                            >
                                                Custom Web Design in El Paso
                                            </a>
                                        </h3>
                                        <p itemprop="description">
                                            Build a stunning, high-performing
                                            website tailored for your local
                                            business.
                                        </p>
                                    </Zoom>
                                </div>
                                <div
                                    className="service-card"
                                    itemscope
                                    itemtype="https://schema.org/Service"
                                >
                                    <Zoom>
                                        <h3>
                                            <a
                                                href="/services#software-development"
                                                itemprop="name"
                                            >
                                                Software Development for Local
                                                Businesses
                                            </a>
                                        </h3>
                                        <p itemprop="description">
                                            Custom web applications designed for
                                            El Paso businesses to improve
                                            efficiency and growth.
                                        </p>
                                    </Zoom>
                                </div>
                                <div
                                    className="service-card"
                                    itemscope
                                    itemtype="https://schema.org/Service"
                                >
                                    <Zoom>
                                        <h3>
                                            <a
                                                href="/services#seo-strategy"
                                                itemprop="name"
                                            >
                                                Local SEO & Content Strategy
                                            </a>
                                        </h3>
                                        <p itemprop="description">
                                            Improve search rankings and attract
                                            more El Paso customers with
                                            optimized content and SEO
                                            strategies.
                                        </p>
                                    </Zoom>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                {/* <section className="why-choose-us">
                    <div className="container">
                        <h2>Why Choose Ervotech?</h2>
                        <p>
                            At Ervotech, we don’t just build websites – we create digital experiences designed to help businesses grow.
                            Our custom websites are fast, optimized, and tailored to your unique brand.
                        </p>
                        <div className="why-grid">
                            <div className="why-card">
                                <h3>Tailored Web Solutions</h3>
                                <p>
                                    Every business is unique. We create custom websites and applications to suit your brand’s goals.
                                </p>
                            </div>
                            <div className="why-card">
                                <h3>SEO That Drives Traffic</h3>
                                <p>
                                    Our SEO strategies help your business rank higher in search results and attract more customers.
                                </p>
                            </div>
                            <div className="why-card">
                                <h3>Mobile-First & Responsive</h3>
                                <p>
                                    Your website will be fully optimized for all devices, ensuring a seamless experience on mobile, tablet, and desktop.
                                </p>
                            </div>
                            <div className="why-card">
                                <h3>Dedicated Support</h3>
                                <p>
                                    We provide ongoing maintenance and support to keep your website performing at its best.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* SEO-Optimized Blog Highlights Section */}
                {/* <section className="blog-highlights">
                    <div className="container">
                        <h2>Latest Insights & Web Design Tips</h2>
                        <p>
                            Stay ahead in the digital world with our expert insights on web design, SEO, and digital marketing.
                            Explore our latest articles to learn more about optimizing your online presence.
                        </p>
                        <div className="blog-grid">
                            <div className="blog-card">
                                <h3><a href="/blog/top-web-design-trends">Top Web Design Trends for 2024</a></h3>
                                <p>Discover the latest design trends that can make your website stand out.</p>
                            </div>
                            <div className="blog-card">
                                <h3><a href="/blog/seo-best-practices">SEO Best Practices for Small Businesses</a></h3>
                                <p>Learn how to improve your website’s search ranking and attract more local customers.</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* New FAQ Section for SEO & User Engagement */}
                {/* <section className="faq-section">
                    <div className="container">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find answers to common questions about our web design and SEO services.</p>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h3>How can a custom website help my business grow?</h3>
                                <p>A well-designed website improves credibility, attracts customers, and enhances online visibility, helping your business thrive.</p>
                            </div>
                            <div className="faq-item">
                                <h3>Why is SEO important for my website?</h3>
                                <p>SEO increases your website’s ranking on search engines, making it easier for potential customers to find your business online.</p>
                            </div>
                            <div className="faq-item">
                                <h3>How long does it take to build a website?</h3>
                                <p>Our timeline varies based on project complexity, but most websites are completed within 4-6 weeks.</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Contact CTA */}
                <section className="vision" id="vision">
                    <div className="container">
                        <Parallax speed={-10}>
                            <h2>
                                Partner with the Leading Web Design Agency in El
                                Paso
                            </h2>
                            <p>
                                We help small and medium-sized businesses
                                establish a strong online presence through
                                expert web development and SEO solutions.
                            </p>
                            <div className="vision-cta">
                                <a href="#contact" className="primary-btn">
                                    Let's Build Together
                                </a>
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
