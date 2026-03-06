import React, { useMemo } from 'react';

interface FallingStarsProps {
  count?: number;
}

export const FallingStars: React.FC<FallingStarsProps> = ({ count = 50 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      size: 8 + Math.random() * 16,
      opacity: 0.5 + Math.random() * 0.5
    }));
  }, [count]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] overflow-hidden"
      aria-hidden
    >
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          5% { opacity: var(--star-opacity); }
          95% { opacity: var(--star-opacity); }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .falling-star {
          position: absolute;
          color: #fbbf24;
          text-shadow: 0 0 8px rgba(251, 191, 36, 0.8);
          animation: fall linear forwards;
        }
      `}</style>
      {stars.map(({ id, left, delay, duration, size, opacity }) => (
        <div
          key={id}
          className="falling-star"
          style={{
            left: `${left}%`,
            top: 0,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            fontSize: `${size}px`,
            ['--star-opacity' as string]: opacity
          }}
        >
          <i className="fas fa-star" />
        </div>
      ))}
    </div>
  );
};
