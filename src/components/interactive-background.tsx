'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TechBackgroundProps = {
  particleCount?: number;
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: string;
};

// These colors are now hardcoded here to avoid any issues with CSS variable loading.
const colorPalette = ['#00FFFF', '#8A2BE2', '#7FFF00', '#FF1493'];
const lineThreshold = 130;
const cursorRadius = 160;

export default function InteractiveBackground({
  particleCount = 90,
  className,
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cursor = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let devicePixelRatio = window.devicePixelRatio || 1;

    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const createParticles = () => {
      particlesRef.current = [];
      const { width, height } = canvas.getBoundingClientRect();
      const count = window.innerWidth < 768 ? Math.floor(particleCount * 0.5) : particleCount;
      
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-0.18, 0.18),
          vy: rand(-0.18, 0.18),
          size: rand(1, 2.8),
          hue: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        });
      }
    };

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(6,10,20,1)');
      gradient.addColorStop(0.5, 'rgba(8,12,30,0.92)');
      gradient.addColorStop(1, 'rgba(2,6,16,1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;

      for (const p of particles) {
        // Update particle size, ensuring it's never negative
        const sizeChange = Math.sin(Date.now() * 0.001 + p.x) * 0.008;
        p.size = Math.max(0.5, p.size + sizeChange);

        // Interaction with cursor
        if (cursor.current.x !== null && cursor.current.y !== null) {
          const dx = p.x - cursor.current.x;
          const dy = p.y - cursor.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cursorRadius) {
            const force = (cursorRadius - dist) / cursorRadius;
            p.x += (dx / dist) * force * 0.8;
            p.y += (dy / dist) * force * 0.8;
          }
        }
        
        // Move particle
        p.vx += rand(-0.003, 0.003);
        p.vy += rand(-0.003, 0.003);
        p.x += p.vx;
        p.y += p.vy;

        // Boundary checks
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // Draw lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pa = particles[i];
          const pb = particles[j];
          const distSq = (pa.x - pb.x) ** 2 + (pa.y - pb.y) ** 2;

          if (distSq < lineThreshold * lineThreshold) {
            let alpha = 1 - Math.sqrt(distSq) / lineThreshold;
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        // Convert hex to rgba
        const hex = p.hue.slice(1);
        const r = parseInt(hex.substring(0,2), 16);
        const g = parseInt(hex.substring(2,4), 16);
        const b = parseInt(hex.substring(4,6), 16);
        
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        glow.addColorStop(0, `rgba(${r},${g},${b},0.8)`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      setupCanvas();
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      cursor.current.x = e.clientX - rect.left;
      cursor.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      cursor.current.x = null;
      cursor.current.y = null;
    };

    setupCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particleCount]);

  return (
    <div className={cn('absolute inset-0 -z-10 h-full w-full opacity-60', className)}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
