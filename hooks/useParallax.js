import { useEffect } from 'react';

export default function useParallax(defaultSpeed) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-container');
            parallaxElements.forEach(el => {
                // Use data-parallax-speed if present, otherwise use defaultSpeed
                const speed = parseFloat(el.getAttribute('data-parallax-speed')) || defaultSpeed;
                const yPos = `calc(100% + ${scrollTop * speed}px)`;
                el.style.backgroundPosition = `center ${yPos}`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call to set positions
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [defaultSpeed]);
}
