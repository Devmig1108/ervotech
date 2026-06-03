import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export default function ThemeToggle() {
    // ✅ Safe for SSR: Function initializer checks environment first
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark'; // Fallback default value on the server side
    });

    useEffect(() => {
        // Safe here because useEffect NEVER runs on the server side
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <Fade>
            <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle Dark/Light Theme"
            >
                {theme === 'dark' ? '🌞' : '🌜'}
            </button>
        </Fade>
    );
}