import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

interface Particle {
    id: number;
    angle: number;
    speed: number;
    color: string;
    scale: number;
}

interface Burst {
    id: string;
    x: number;
    y: number;
    particles: Particle[];
}

const COLORS = ['#60A5FA', '#818CF8', '#A78BFA', '#F472B6', '#38BDF8', '#FFFFFF'];

export default function Firecrackers() {
    const isMobile = useIsMobile();
    const [bursts, setBursts] = useState<Burst[]>([]);

    useEffect(() => {
        // Function to create a single explosion burst
        const createBurst = () => {
            const particleCount = isMobile ? 12 : 25;
            const newParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => ({
                id: i,
                angle: Math.random() * Math.PI * 2, // 0 to 360 degrees in radians
                speed: Math.random() * 80 + 40, // Random travel distance outward
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                scale: Math.random() * 0.6 + 0.4,
            }));

            const newBurst: Burst = {
                id: Math.random().toString(36).substring(7),
                x: Math.random() * 80 + 10, // 10vw to 90vw
                y: Math.random() * 60 + 10, // 10vh to 70vh (keep them mostly upper half)
                particles: newParticles,
            };

            setBursts((current) => [...current, newBurst]);

            // Remove the burst after animation completes (1.5s)
            setTimeout(() => {
                setBursts((current) => current.filter(b => b.id !== newBurst.id));
            }, 1500);
        };

        // Fire a burst randomly every 1-3 seconds
        const interval = setInterval(() => {
            // Random chance to fire multiple bursts at once
            const numBursts = Math.random() > 0.8 ? 2 : 1;
            for (let i = 0; i < numBursts; i++) {
                createBurst();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [isMobile]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
            {bursts.map((burst) => (
                <div
                    key={burst.id}
                    className="absolute"
                    style={{ left: `${burst.x}vw`, top: `${burst.y}vh` }}
                >
                    {burst.particles.map((p) => {
                        // Calculate destination X and Y using trig
                        const destX = Math.cos(p.angle) * p.speed;
                        const destY = Math.sin(p.angle) * p.speed + 40; // Add gravity effect pulling down

                        return (
                            <motion.div
                                key={p.id}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor: p.color,
                                    boxShadow: `0 0 12px ${p.color}`,
                                }}
                                initial={{
                                    opacity: 1,
                                    scale: 0,
                                    x: 0,
                                    y: 0,
                                }}
                                animate={{
                                    opacity: [1, 1, 0],
                                    scale: [0, p.scale, p.scale * 0.5],
                                    x: destX,
                                    y: destY,
                                }}
                                transition={{
                                    duration: 1 + Math.random() * 0.5,
                                    ease: [0.25, 1, 0.5, 1], // easeOut cubic
                                }}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
