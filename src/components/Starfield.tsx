import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isVisible, setIsVisible] = useState(true);
    const isMobile = useIsMobile();

    // Intersection Observer to pause rendering when off-screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 } // Trigger as soon as 1 pixel is visible/invisible
        );

        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }

        return () => {
            if (canvasRef.current) {
                observer.unobserve(canvasRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isVisible) return; // Don't run the loop if hidden!

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: { x: number; y: number; z: number; originalZ: number; alpha: number; color: string }[] = [];
        // Dramatically reduce particle count on mobile for performance
        const numParticles = isMobile ? 200 : 800;
        const colors = ['#3b82f6', '#8b5cf6', '#0ea5e9', '#ffffff'];

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: (Math.random() - 0.5) * 3000,
                y: (Math.random() - 0.5) * 3000,
                z: Math.random() * 2000,
                originalZ: 0,
                alpha: Math.random() * 0.8 + 0.2,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
            particles[i].originalZ = particles[i].z;
        }

        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetX = mouseX;
        let targetY = mouseY;

        const handleMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        let animationFrameId: number;
        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Smooth mouse interpolation (parallax effect) - skip on mobile
            if (!isMobile) {
                mouseX += (targetX - mouseX) * 0.05;
                mouseY += (targetY - mouseY) * 0.05;
            }

            const cx = width / 2;
            const cy = height / 2;

            // Calculate pan based on mouse deviation from center
            const panX = isMobile ? 0 : (mouseX - cx) * 0.5;
            const panY = isMobile ? 0 : (mouseY - cy) * 0.5;

            time += 0.002;

            particles.forEach((p) => {
                p.z -= 1;
                if (p.z <= 0) {
                    p.z = 2000;
                    p.x = (Math.random() - 0.5) * 3000;
                    p.y = (Math.random() - 0.5) * 3000;
                }

                const cosT = Math.cos(time);
                const sinT = Math.sin(time);
                const rx = p.x * cosT - p.y * sinT;
                const ry = p.x * sinT + p.y * cosT;

                const fov = 800;
                const scale = fov / (fov + p.z);

                const x2d = (rx - panX) * scale + cx;
                const y2d = (ry - panY) * scale + cy;

                if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
                    const depthAlpha = Math.max(0, 1 - (p.z / 2000));
                    ctx.globalAlpha = p.alpha * depthAlpha;
                    ctx.fillStyle = p.color;

                    const dashLength = scale * 8;
                    const dashThickness = Math.max(0.5, scale * 2);

                    ctx.save();
                    ctx.translate(x2d, y2d);

                    // Optimization: avoid Math.atan2 if possible, or accept minor inaccuracy
                    const angle = Math.atan2(ry - panY, rx - panX);
                    ctx.rotate(angle);

                    ctx.beginPath();
                    ctx.roundRect(0, -dashThickness / 2, dashLength, dashThickness, dashThickness);
                    ctx.fill();
                    ctx.restore();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile, isVisible]); // Re-run when visibility or mobile state changes

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}
