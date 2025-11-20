'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Helper function to get a value from CSS variables
const getCssVar = (name: string) => {
    if (typeof window === 'undefined') return 'rgba(0, 255, 200, 0.5)';
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

const InteractiveBackground = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[];
        let mouse = { x: -1000, y: -1000 };

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const primaryColor = `hsl(${getCssVar('--primary')})`;
        const accentColor = `hsl(${getCssVar('--accent')})`;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = Math.random() > 0.5 ? primaryColor : accentColor;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.1) this.size -= 0.03;
                if (this.size <= 0.1) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2 + 1;
                    this.speedX = Math.random() * 2 - 1;
                    this.speedY = Math.random() * 2 - 1;
                }
            }

            draw() {
                if(ctx) {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const handleParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = particles[i].color;
                        ctx.lineWidth = 0.2;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                if (particles[i].size <= 0.3) {
                    particles.splice(i, 1);
                    i--;
                }
            }
        };
        
        const animate = () => {
            if(ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                handleParticles();
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        init();
        animate();
        
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };

    }, []);

    return <canvas ref={canvasRef} className={cn('absolute inset-0 -z-10 h-full w-full', className)} />;
};

export default InteractiveBackground;
