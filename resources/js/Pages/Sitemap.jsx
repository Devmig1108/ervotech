import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Sitemap({ auth }) {
    return (
        <PublicLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Site Map</h2>}
        >
            <Head title="Site Map" />

            {/* Hero Section */}
            <section className="sitemap-hero">
                <div className="container">
                    <h1>Site Map</h1>
                    <p>Explore all the key sections of our website from one convenient place.</p>
                </div>
            </section>

            {/* Site Map Links */}
            <section className="sitemap-links">
                <div className="container">
                    <h2>Main Sections</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>

                    <h2>Services</h2>
                    <ul>
                        <li><a href="/services#website-migration">Website Migration</a></li>
                        <li><a href="/services#seo-optimization">SEO Optimization</a></li>
                        <li><a href="/services#web-design">Web Design & Development</a></li>
                        <li><a href="/services#software-development">Software Development</a></li>
                        <li><a href="/services#content-strategy">Content Strategy</a></li>
                    </ul>

                    {/* <h2>Additional Resources</h2>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                    </ul> */}
                </div>
            </section>

            {/* CTA Section */}
            <section className="sitemap-cta">
                <div className="container">
                    <h2>Need Help Navigating?</h2>
                    <p>If you're having trouble finding what you're looking for, feel free to reach out to us.</p>
                    <a href="/contact" className="primary-btn">Contact Us</a>
                </div>
            </section>
        </PublicLayout>
    );
}
