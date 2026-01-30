
import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
    children: React.ReactNode;
    delay?: number; // Delay in ms
    className?: string; // Additional classes
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Animation direction
    fullWidth?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
    children,
    delay = 0,
    className = '',
    direction = 'up',
    fullWidth = false
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing if we only want it to trigger once
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before enters viewport bottom
        });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const getTransformClass = () => {
        if (isVisible) return 'translate-x-0 translate-y-0';

        switch (direction) {
            case 'up': return 'translate-y-10';
            case 'down': return '-translate-y-10';
            case 'left': return 'translate-x-10';
            case 'right': return '-translate-x-10';
            case 'none': return '';
            default: return 'translate-y-10';
        }
    };

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out ${className} ${isVisible ? 'opacity-100' : 'opacity-0'
                } ${getTransformClass()} ${fullWidth ? 'w-full' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
