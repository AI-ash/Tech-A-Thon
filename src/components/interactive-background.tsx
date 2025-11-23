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

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: string;
};

export default function InteractiveBackground({
  particleCount = 90,
  colorPalette = ['#00FFFF', '#8A2BE2', '#7FFF00', '#FF1493'],
  lineThreshold = 130,
  cursorRadius = 160,
  className,
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const cursor = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let DPR = window.devicePixelRatio || 1;

    const setSize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * DPR || canvas.height !== h * DPR) {
        canvas.width = w * DPR;
        canvas.height = h * DPR;
        ctx.scale(DPR, DPR);
      }
    };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const makeParticles = () => {
      const w = canvas?.clientWidth ?? 0;
      const h = canvas?.clientHeight ?? 0;
      const newParticles: Particle[] = [];
      const count = window.innerWidth < 768 ? Math.floor(particleCount * 0.5) : particleCount;
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.18, 0.18),
          vy: rand(-0.18, 0.18),
          size: rand(1, 2.8),
          hue: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        });
      }
      particlesRef.current = newParticles;
    };

    const drawBackground = () => {
      if (!ctx || !canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, 'rgba(6,10,20,1)');
      g.addColorStop(0.5, 'rgba(8,12,30,0.92)');
      g.addColorStop(1, 'rgba(2,6,16,1)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

    const step = () => {
      if (!ctx || !canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      drawBackground();

      const particles = particlesRef.current;

      for (const p of particles) {
        const sizeChange = Math.sin(Date.now() * 0.002 + p.x) * 0.004;
        p.size = Math.max(0.1, p.size + sizeChange);

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

            if (cursor.current.x !== null && cursor.current.y !== null) {
              const cdx = (a.x + b.x) / 2 - cursor.current.x;
              const cdy = (a.y + b.y) / 2 - cursor.current.y;
              const cd = Math.sqrt(cdx * cdx + cdy * cdy);
              if (cd < cursorRadius) alpha *= 1.8;
            }

            ctx.strokeStyle = `rgba(0,255,255,${alpha * 0.3})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        if (p.size <= 0) continue;
        
        const hex = p.hue;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        if (isNaN(r) || isNaN(g) || isNaN(b)) continue;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        glow.addColorStop(0, `rgba(${r},${g},${b},0.9)`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    setSize();
    makeParticles();
    step();

    const handlePointerMove = (e: PointerEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      cursor.current.x = e.clientX - rect.left;
      cursor.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      cursor.current.x = null;
      cursor.current.y = null;
    };

    const handleWindowResize = () => {
      DPR = window.devicePixelRatio || 1;
      setSize();
      makeParticles();
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [particleCount, colorPalette, lineThreshold, cursorRadius]);

  return (
    <div className={cn('absolute inset-0 -z-10 h-full w-full opacity-60', className)}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
