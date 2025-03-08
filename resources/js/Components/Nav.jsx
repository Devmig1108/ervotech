import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ThemeToggle from '@/Components/ThemeToggle';

export default function Nav() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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
                        <img className="light-logo" src="images/ervotech-logo.png" alt="Logo"/>
                        <img className="dark-logo" src="images/ervotech-logo-dark.png" alt="Logo"/>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>

                        {/* Services Dropdown - Hover Triggered */}
                        <li 
                            className="dropdown"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            <span className="dropdown-toggle">Services ▾</span>
                            <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}>
                                <Link href="/services"><li>All ServicesAll Services</li></Link>
                                <Link href="/web-development-el-paso"><li>Web Development in El Paso</li></Link>
                            </ul>
                        </li>

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
