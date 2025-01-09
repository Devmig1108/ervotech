import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import ContactForm from '@/Components/ContactForm';


export default function Home({ auth }) {
    return (
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
                    <Fade><h1>Transform Your Web Presence</h1></Fade>
                    <Fade><p>We specialize in modern web solutions, including SEO, website design, and software development tailored to your needs.</p></Fade>
                    <div class="hero-buttons">
                        <a href="#services" class="primary-btn">Explore Services</a>
                        <a href="#contact" class="secondary-btn">Contact Us</a>
                    </div>
                </div>
            </ParallaxBanner>

            {/* <!-- Split Section --> */}
            <section className="split-section">
                <Fade>
                    <div className="split-text">
                        <Parallax speed={-10}>
                            <h2>Our Commitment</h2>
                            <p>
                                At Ervotech, we are committed to delivering digital solutions that drive growth, innovation, and success for your business.
                                Our team combines expertise, creativity, and technology to craft websites and applications tailored to your unique needs.
                                We don't just build projects; we build partnerships that last.
                        </p>
                            <p>
                                <em>Your success is our priority, and every project reflects our dedication to excellence.</em>
                            </p>
                        </Parallax>
                    </div>
                </Fade>
                <div class="split-image" role="img" aria-label="Modern desk setup with a laptop, notepad, and coffee mug in a clean workspace"></div>
            </section>

            {/* <!-- Services Section --> */}
            <section class="home-services" id="home-services">
                <div class="container">
                    <Parallax speed={-10}>
                        <h2>Our Services</h2>
                        <div class="service-grid">
                            <div class="service-card" itemscope itemtype="https://schema.org/Service">
                                <Zoom><h3>Website Migration</h3>
                                    <p itemprop="description">Seamless migration of your website to modern, scalable platforms.</p></Zoom>
                            </div>
                            {/* <div class="service-card" itemscope itemtype="https://schema.org/Service">
                                <Zoom><h3 itemprop="name">SEO Optimization</h3>
                                    <p itemprop="description">Boost your search rankings with our proven SEO strategies.</p></Zoom>
                            </div> */}

                            <div class="service-card" itemscope itemtype="https://schema.org/Service">
                                <Zoom><h3 itemprop="name">Web Design & Development</h3>
                                    <p itemprop="description">Create stunning, user-friendly websites for your business.</p></Zoom>
                            </div>
                            <div class="service-card" itemscope itemtype="https://schema.org/Service">
                                <Zoom><h3 itemprop="name">Software Development</h3>
                                    <p itemprop="description">Custom web applications tailored to meet your business goals.</p></Zoom>
                            </div>
                            <div class="service-card" itemscope itemtype="https://schema.org/Service">
                                <Zoom><h3 itemprop="name">Content Strategy</h3>
                                    <p itemprop="description">Crafting compelling content to drive engagement and results.</p></Zoom>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>

            {/* <!-- Vision Section --> */}
            <section className="vision" id="vision">
                <div className="container">
                    <Parallax speed={-10}>
                        <h2>Our Vision</h2>
                        <div className="vision-content">
                            <p>
                                At Ervotech, our vision is to empower businesses with cutting-edge digital solutions
                                that foster growth, efficiency, and success. We aim to create websites and applications that not
                                only meet expectations but exceed them.
                        </p>
                            <p>
                                Our approach combines innovative technologies, strategic thinking, and a deep commitment
                                to customer satisfaction. Every project is an opportunity to make a meaningful impact.
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
                        <h2>Why Choose Us?</h2>
                        <div className="feature-grid">
                            <div className="feature-item">
                                <h3>Innovative Solutions</h3>
                                <p>We blend creativity with technology to deliver impactful results.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Client-Centered Approach</h3>
                                <p>Every project is built around your unique business goals.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Scalable Design</h3>
                                <p>We future-proof your website with scalable solutions.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Transparent Communication</h3>
                                <p>Clear and consistent communication throughout every step.</p>
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
    );
}
