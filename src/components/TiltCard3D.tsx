import React, { useRef, useEffect } from 'react';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  onClick?: () => void;
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  className = '',
  maxTilt = 10,
  glowColor = 'rgba(239, 68, 68, 0.2)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    const inner = innerRef.current;
    const glow = glowRef.current;
    if (!card || !inner) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let isHovering = false;
    let posX = 50;
    let posY = 50;

    const updateTilt = () => {
      // Smooth exponential interpolation for buttery fluid inertia
      currentRotX += (targetRotX - currentRotX) * 0.15;
      currentRotY += (targetRotY - currentRotY) * 0.15;

      if (inner) {
        inner.style.transform = isHovering
          ? `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateZ(8px)`
          : `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateZ(0px)`;
      }

      if (glow && isHovering) {
        glow.style.background = `radial-gradient(circle at ${posX}% ${posY}%, ${glowColor} 0%, transparent 65%)`;
        glow.style.opacity = '1';
      }

      if (isHovering || Math.abs(currentRotX) > 0.05 || Math.abs(currentRotY) > 0.05) {
        rafId.current = requestAnimationFrame(updateTilt);
      } else {
        if (inner) {
          inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        }
        if (glow) {
          glow.style.opacity = '0';
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      posX = Math.round((x / rect.width) * 100);
      posY = Math.round((y / rect.height) * 100);

      targetRotY = ((x / rect.width) - 0.5) * (maxTilt * 2);
      targetRotX = -(((y / rect.height) - 0.5) * (maxTilt * 2));

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateTilt);
      }
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateTilt);
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetRotX = 0;
      targetRotY = 0;
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [maxTilt, glowColor]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`relative select-none transform-gpu will-change-transform ${className}`}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full rounded-2xl transition-[box-shadow] duration-300"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Holographic Red Reflection Sheen */}
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-2xl pointer-events-none z-30 opacity-0 transition-opacity duration-300"
        />

        {children}
      </div>
    </div>
  );
};
