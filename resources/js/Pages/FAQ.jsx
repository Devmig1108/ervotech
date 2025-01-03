import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import Fade from 'react-reveal/Fade';

export default function FAQ({ auth }) {
    return (
        <PublicLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Ervotech" />

            <section class="hero contact-hero">
                <div class="container">
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer.</p>
                </div>
            </section>

            {/* <!-- Contact Form Section --> */}
            <section class="contact-form-section">
                <div class="container">
                    <h2>Send Us a Message</h2>
                    <form class="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" class="primary-btn">Send Message</button>
                    </form>
                </div>
            </section>

            {/* <!-- Contact Details Section --> */}
            <section class="contact-details">
                <div class="container">
                    <h2>Contact Information</h2>
                    <div class="contact-info-grid">
                        <div class="contact-info-item">
                            <i class="fas fa-envelope"></i>
                            <p><strong>Email:</strong> <a href="mailto:contact@ervotechep.com">contact@ervotechep.com</a></p>
                        </div>
                        <div class="contact-info-item">
                            <i class="fas fa-phone"></i>
                            <p><strong>Phone:</strong> <a href="tel:+123456789">+1 (234) 567-89</a></p>
                        </div>
                        <div class="contact-info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p><strong>Address:</strong> 123 Tech Street, Innovation City, CA</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- CTA Section --> */}
            <section class="contact-cta">
                <div class="container">
                    <h2>Looking for a Quick Answer?</h2>
                    <a href="faq.html" class="secondary-btn">Check Our FAQ</a>
                </div>
            </section>
        </PublicLayout>
    );
}
