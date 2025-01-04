import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ThemeToggle from '@/Components/ThemeToggle';

export default function Nav() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Toggle the mobile menu
    const handleMenuToggle = () => {
        setIsMenuActive(prevState => !prevState);
    };

    return (
        <header className="navbar">
            <div className="container">
                {/* Logo Section */}
                <div className="logo">
                    <Link href="/">
                        <img src="images/Logo2.png" alt="Logo" width="100" height="120" />
                    </Link>
                    ervotech<span>.</span>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Theme Toggle */}
                <div className="flex justify-end mb-4">
                    <ThemeToggle />
                </div>

                {/* Hamburger Menu Toggle Button */}
                <button 
                    className="menu-toggle" 
                    onClick={handleMenuToggle}
                    aria-label="Toggle Navigation"
                >
                    ☰
                </button>
            </div>
        </header>
    );
}
