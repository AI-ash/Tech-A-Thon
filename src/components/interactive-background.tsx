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
  colorPalette = ['#7DF9FF', '#39FF14', '#F000FF'],
  lineThreshold = 130,
  cursorRadius = 160,
  className,
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const cursor = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const particlesRef = useRef<Particle[]>([]);
  const DPR = useRef<number>(1);

  useEffect(() => {
    DPR.current = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // helpers
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const count = isMobile ? Math.max(40, Math.floor(particleCount * 0.5)) : particleCount;

    function setSize() {
      DPR.current = Math.max(1, window.devicePixelRatio || 1);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * DPR.current);
      canvas.height = Math.floor(h * DPR.current);
      // map drawing to CSS pixels
      if (ctx) {
        ctx.setTransform(DPR.current, 0, 0, DPR.current, 0, 0);
      }
    }

    function makeParticles() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.18, 0.18),
          vy: rand(-0.18, 0.18),
          size: rand(1, 2.8),
          hue: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        });
      }
      particlesRef.current = particles;
    }

    function drawBackground() {
      if (!ctx) return;
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
      if (!ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      drawBackground();

      const particles = particlesRef.current;

      // update particles
      for (const p of particles) {
        // slight pulsing
        const sizeChange = Math.sin(Date.now() * 0.002 + p.x) * 0.004;
        p.size = Math.max(0.1, p.size + sizeChange); // Ensure size is always positive

        // cursor influence
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

        // slow drift
        p.vx += rand(-0.003, 0.003);
        p.vy += rand(-0.003, 0.003);

        p.x += p.vx;
        p.y += p.vy;

        // wrap-around
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      // connections
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

            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // particle glow
      for (const p of particles) {
        // safe hex to rgb (assumes #RRGGBB)
        const hex = p.hue.startsWith('#') ? p.hue : '#7DF9FF';
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        if (isNaN(r) || isNaN(g) || isNaN(b)) continue; // Skip if color is invalid

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        glow.addColorStop(0, `rgba(${r},${g},${b},0.9)`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

    setSize();
    makeParticles();
    step();

    const handlePointerMove = (e: PointerEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const clientX = e.clientX ?? (e as any).pageX;
      const clientY = e.clientY ?? (e as any).pageY;
      cursor.current.x = (clientX - rect.left);
      cursor.current.y = (clientY - rect.top);
    };

    const handlePointerLeave = () => {
      cursor.current.x = null;
      cursor.current.y = null;
    };

    const handleWindowResize = () => {
      setSize();
      makeParticles();
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (canvas) {
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerleave', handlePointerLeave);
      }
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [particleCount, colorPalette, lineThreshold, cursorRadius]);

  return (
    <div className={cn('absolute inset-0 -z-10 h-full w-full opacity-60', className)}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
