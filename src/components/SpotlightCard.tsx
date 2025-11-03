'use client';

import { useRef, MouseEvent } from 'react';

export default function SpotlightCard({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
    <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`spotlight-card relative rounded-xl border border-white/10 bg-zinc-900 p-8 shadow-2xl transition-all duration-300 hover:border-white/20 ${className}`}
    >
    {children}
    </div>
    );
}