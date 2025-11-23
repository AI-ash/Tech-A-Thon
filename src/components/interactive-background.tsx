'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TechBackgroundProps = {
  particleCount?: number;
  colorPalette?: string[];
  lineThreshold?: number;
  cursorRadius?: number;
  className?: string;
};

export default function InteractiveBackground({
  particleCount = 90,
  colorPalette = ['#7DF9FF', '#39FF14', '#F000FF'],
  lineThreshold = 130,
  cursorRadius = 160,
  className,
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const cursor = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let DPR = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      if (ctx) {
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      }
    }

    const isMobile = window.innerWidth < 640;
    const count = isMobile ? Math.max(40, Math.floor(particleCount * 0.5)) : particleCount;
    const particles: any[] = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    function makeParticles() {
      if (!canvas) return;
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: rand(0, canvas.clientWidth),
          y: rand(0, canvas.clientHeight),
          vx: rand(-0.18, 0.18),
          vy: rand(-0.18, 0.18),
          size: rand(1, 2.8),
          hue: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        });
      }
    }

    function drawBackground() {
      if (!canvas || !ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, 'rgba(6,10,20,1)');
      g.addColorStop(0.5, 'rgba(8,12,30,0.92)');
      g.addColorStop(1, 'rgba(2,6,16,1)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    function step() {
        if (!canvas || !ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      drawBackground();

      for (let p of particles) {
        p.size += Math.sin(Date.now() * 0.002 + p.x) * 0.004;

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

        p.vx += rand(-0.003, 0.003);
        p.vy += rand(-0.003, 0.003);
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < lineThreshold * lineThreshold) {
            let alpha = 1 - Math.sqrt(d2) / lineThreshold;

            if (cursor.current.x !== null) {
              const cdx = (a.x + b.x) / 2 - cursor.current.x;
              const cdy = (a.y + b.y) / 2 - cursor.current.y!;
              const cd = Math.sqrt(cdx * cdx + cdy * cdy);
              if (cd < cursorRadius) alpha *= 1.8;
            }

            ctx.strokeStyle = `rgba(125, 249, 255, ${alpha * 0.3})`; // Using primary color
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let p of particles) {
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        // A simple way to convert hex to rgba for the glow effect
        const r = parseInt(p.hue.slice(1, 3), 16);
        const g = parseInt(p.hue.slice(3, 5), 16);
        const b = parseInt(p.hue.slice(5, 7), 16);
        glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.9)`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    resize();
    makeParticles();
    step();

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
    
    const handleResize = () => {
        DPR = Math.max(1, window.devicePixelRatio || 1);
        resize();
        makeParticles();
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleCount, colorPalette.join(','), lineThreshold, cursorRadius]);

  return (
    <div className={cn('absolute inset-0 -z-10 h-full w-full opacity-50', className)}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
