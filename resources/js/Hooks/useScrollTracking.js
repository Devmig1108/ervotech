import { useEffect, useRef } from 'react';

export const useScrollTracking = (sectionName) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                
                // When 50% of the component is visible on screen
                if (entry.isIntersecting) {
                    // Check if gtag is loaded on the window object
                    if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'section_viewed', {
                            'section_name': sectionName,
                            'event_category': 'Engagement'
                        });
                    }
                    // Stop observing once it fires so we don't spam analytics
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup on component unmount
        return () => observer.disconnect();
    }, [sectionName]);

    return sectionRef;
};