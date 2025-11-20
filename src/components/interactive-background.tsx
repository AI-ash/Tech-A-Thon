'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Helper function to get a value from CSS variables
const getCssVar = (name: string) => {
    if (typeof window === 'undefined') return '183 90% 50%'; // Fallback for server-side
    const rootStyle = getComputedStyle(document.documentElement);
    const value = rootStyle.getPropertyValue(name).trim();
    return value || '183 90% 50%'; // Default primary color
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
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = Math.random() > 0.5 ? primaryColor : accentColor;
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY = -this.speedY;
                }
                this.x += this.speedX;
                this.y += this.speedY;
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
            const numberOfParticles = (canvas.width * canvas.height) / 12000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        opacityValue = 1 - (distance / 120);
                        const aColor = particles[a].color;
                        const bColor = particles[b].color;
                        
                        // Create a gradient for the line
                        const gradient = ctx.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y);
                        gradient.addColorStop(0, aColor);
                        gradient.addColorStop(1, bColor);

                        ctx.strokeStyle = gradient;
                        ctx.globalAlpha = opacityValue;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;
        }
        
        const animate = () => {
            if(ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (const particle of particles) {
                    particle.update();
                    particle.draw();
                }
                connectParticles();
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        init();
        animate();
        
        // Handle theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    // Re-initialize with new colors
                    const newPrimary = `hsl(${getCssVar('--primary')})`;
                    const newAccent = `hsl(${getCssVar('--accent')})`;
                    particles.forEach(p => {
                        p.color = Math.random() > 0.5 ? newPrimary : newAccent;
                    });
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });


        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };

    }, []);

    return <canvas ref={canvasRef} className={cn('absolute inset-0 -z-10 h-full w-full opacity-50', className)} />;
};

export default InteractiveBackground;
