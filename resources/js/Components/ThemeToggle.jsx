import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
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
