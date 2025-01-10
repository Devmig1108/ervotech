import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYelp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-container">
                {/* <div className="footer-about">
                    <h4>About Us</h4>
                    <p>We deliver cutting-edge web solutions tailored to your business needs. From SEO to software development, we ensure your digital presence thrives.</p>
                </div> */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:contact@ervotechep.com">contact@ervotechep.com</a></p>
                    <p>Phone: <a href="tel:+9153410376">+1 (915) 341-0376</a></p>
                </div>

                {/* Call-to-Action Section */}
                <div className="footer-cta">
                    <Link href="/">
                        <img className="light-logo" src="images/ervotech-logo.png" alt="Logo" />
                        <img className="dark-logo" src="images/ervotech-logo-dark.png" alt="Logo" />
                    </Link>
                    {/* <h4>Let's Build Something Extraordinary</h4> */}
                    <p>Ready to take your digital presence to the next level? Contact us today and let's make it happen!</p>
                    <a href="/contact" className="cta-button">Get in Touch</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Ervotech. All Rights Reserved.</p>
            </div>
        </footer>

    );
}
