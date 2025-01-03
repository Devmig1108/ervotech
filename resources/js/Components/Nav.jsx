import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ThemeToggle from '@/Components/ThemeToggle';

export default function Nav() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuActive(prevState => !prevState);
    };
    return (
        <header class="navbar">
            <div class="container">
                <div class="logo">
                    <Link href="/">
                        <img src="images/Logo2.png" alt="Logo" width="100" height="120" />
                    </Link> ervotech
                <span>.</span>

                </div>
                <nav>
                    <ul class="nav-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                        {/* <li><Link href="case-studies">Case Studies</Link></li>
                        <li><Link href="faq">FAQ</Link></li> */}
                        {/* <li><a href="index.html">Home</a></li> */}
                        {/* <!-- <li><a href="services.html">Services</a></li> --> */}
                        {/* <li><a href="about/index.html">About Us</a></li>
                        <li><a href="case-studies/index.html">Case Studies</a></li>
                        <li><a href="faq/index.html">FAQ</a></li> */}
                    </ul>
                </nav>
                {/* Theme Toggle */}
                <div className="flex justify-end mb-4">
                    <ThemeToggle />
                </div>
                <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Navigation">
                    ☰
                </button>
            </div>
        </header>
    );
}