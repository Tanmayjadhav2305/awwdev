import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { Rocket } from 'lucide-react';

interface RocketState {
    id: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    duration: number;
    scale: number;
    rotation: number;
    color: string;
}

const COLORS = ['#60A5FA', '#818CF8', '#A78BFA', '#F472B6', '#38BDF8'];

export default function AnimatedRockets() {
    const isMobile = useIsMobile();
    const [rockets, setRockets] = useState<RocketState[]>([]);

    useEffect(() => {
        const fireRocket = () => {
            // Determine starting edge (left, right, bottom)
            const edge = Math.floor(Math.random() * 3);
            let startX = 0;
            let startY = 0;
            let endX = 0;
            let endY = 0;

            if (edge === 0) {
                // Start Left, go Right & Up
                startX = -10;
                startY = Math.random() * 80 + 20; // 20vh to 100vh
                endX = 110;
                endY = startY - (Math.random() * 60 + 20); // Move up
            } else if (edge === 1) {
                // Start Right, go Left & Up
                startX = 110;
                startY = Math.random() * 80 + 20;
                endX = -10;
                endY = startY - (Math.random() * 60 + 20);
            } else {
                // Start Bottom, go Up (diagonally)
                startX = Math.random() * 100;
                startY = 110;
                endX = startX + (Math.random() * 100 - 50); // Drift left or right
                endY = -10;
            }

            // Calculate angle for the rocket to point in the direction of travel
            const deltaX = endX - startX;
            // Screen coordinates have Y pointing down, so deltaY is reversed for visual angle
            const deltaY = endY - startY;
            // Math.atan2 takes (y, x). Multiply by 180 / PI for degrees.
            // Add 45 degrees because the lucide Rocket icon points top-right (45deg) by default.
            const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 45;

            const newRocket: RocketState = {
                id: Date.now(),
                startX,
                startY,
                endX,
                endY,
                duration: Math.random() * 2 + 2, // 2 to 4 seconds
                scale: Math.random() * 0.5 + 0.8, // 0.8x to 1.3x size
                rotation: angle,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            };

            setRockets(prev => [...prev, newRocket]);

            // Clean up the rocket after it finishes animating
            setTimeout(() => {
                setRockets(prev => prev.filter(r => r.id !== newRocket.id));
            }, newRocket.duration * 1000 + 500);
        };

        // Fire a rocket randomly every 1 to 3 seconds
        const interval = setInterval(() => {
            if (Math.random() > 0.4) { // 60% chance to fire
                fireRocket();
            }
        }, 2000);

        // Initial delay before first potential rocket
        setTimeout(fireRocket, 1000);

        return () => clearInterval(interval);
    }, [isMobile]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
            <AnimatePresence>
                {rockets.map((rocket) => (
                    <motion.div
                        key={rocket.id}
                        initial={{
                            left: `${rocket.startX}vw`,
                            top: `${rocket.startY}vh`,
                            scale: 0,
                            opacity: 0,
                            rotate: rocket.rotation,
                        }}
                        animate={{
                            left: `${rocket.endX}vw`,
                            top: `${rocket.endY}vh`,
                            scale: [0, rocket.scale, rocket.scale, rocket.scale, 0],
                            opacity: [0, 1, 1, 1, 0],
                            rotate: rocket.rotation,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            duration: rocket.duration,
                            ease: "easeInOut",
                        }}
                        className="absolute text-white"
                        style={{ color: rocket.color, filter: `drop-shadow(0 0 10px ${rocket.color})` }}
                    >
                        {/* The rocket icon */}
                        <Rocket className="w-8 h-8 md:w-12 md:h-12" />

                        {/* The exhaust flame trail */}
                        <motion.div
                            className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 md:h-20 rounded-full"
                            style={{
                                background: `linear-gradient(to bottom, ${rocket.color}, transparent)`,
                                filter: 'blur(4px)',
                                transformOrigin: 'top center',
                                rotate: '-45deg', // Adjust flame to match the icon's built-in 45deg rotation
                                marginTop: '-10px',
                                marginLeft: '-10px'
                            }}
                            animate={{
                                opacity: [0.4, 0.8, 0.4],
                                scaleY: [0.8, 1.2, 0.8],
                            }}
                            transition={{ duration: 0.2, repeat: Infinity }}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
