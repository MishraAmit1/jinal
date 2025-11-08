import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function ScrollToTopOnRoute() {
    const [location] = useLocation();

    useEffect(() => {
        // Small timeout to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animation
            });
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [location]);

    return null;
}