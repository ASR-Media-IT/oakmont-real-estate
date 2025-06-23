import { useEffect } from 'react';
export default function useParallax(speed) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const parallaxElement = document.querySelector('.parallax-container');
            const yPos = `calc(50% + ${scrollTop * speed}px)`;
            if (parallaxElement) {
                parallaxElement.style.backgroundPosition = `center ${yPos}`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}

// Example usage:

// import { useParallax } from "@/hooks";

// useParallax(.5)

{/* <div style={{ backgroundImage: `url(${slice.primary.background_image.url})` }} className={`parallax-container bg-center bg-cover h-[450px] relative`}></div> */ }