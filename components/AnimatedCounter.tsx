import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    decimals?: number;
    suffix?: string;
    className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2000,
    decimals = 0,
    suffix = '',
    className = ''
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const startValue = 0;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function (easeOutQuart)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const currentCount = startValue + (end - startValue) * easeOutQuart;
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <span ref={nodeRef} className={className}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
};

export default AnimatedCounter;
