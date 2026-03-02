import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

export default function About() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });
    const isMobile = useIsMobile();

    // Parallax logic
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Slower parallax for text, faster for image
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);


    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: isMobile ? 0.05 : 0.1, delayChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: isMobile ? 15 : 25, scale: 0.98 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="pt-24 pb-20 relative overflow-hidden" id="about" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={contentRef}>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <motion.div variants={item} className="max-w-2xl text-left">
                        <motion.div style={{ y: isMobile ? 0 : textY }}>
                            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                                <span className="flex flex-wrap gap-x-2">
                                    {(() => {
                                        let charCounter = 0;
                                        return "Architecting Digital Experiences Beyond the Ordinary.".split(" ").map((word, wordIndex) => (
                                            <span key={`word-${wordIndex}`} className="whitespace-nowrap flex">
                                                {word.split("").map((char) => {
                                                    const currentIndex = charCounter++;
                                                    return (
                                                        <motion.span
                                                            key={`char-${currentIndex}`}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                                            transition={{
                                                                duration: 0.3,
                                                                delay: currentIndex * 0.02, // Faster, evenly distributed stagger
                                                                ease: "easeOut"
                                                            }}
                                                            className="inline-block transform-gpu"
                                                        >
                                                            {char}
                                                        </motion.span>
                                                    );
                                                })}
                                            </span>
                                        ));
                                    })()}
                                </span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                We are a team of passionate engineers, designers, and strategists dedicated to transforming ambitious visions into scalable realities. We don't just build websites; we engineer customized digital infrastructures designed for relentless growth and uncompromised performance.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[
                                    { icon: Users, text: "Global network of top-tier talent" },
                                    { icon: Target, text: "Data-driven, conversion-focused design" },
                                    { icon: ShieldCheck, text: "Enterprise-grade security and reliability" }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-md bg-primary-500/10 flex items-center justify-center text-primary-400">
                                            <benefit.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-300 font-medium">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div variants={item} className="relative flex justify-center items-center w-full mt-12 lg:mt-0 min-h-[300px]">
                        <motion.div style={{ y: isMobile ? 0 : imageY }} className="relative w-full max-w-lg lg:max-w-xl mx-auto group pl-0 md:pl-8">
                            {/* Hardware accelerated background glow instead of CSS SVG filter for performance */}
                            <div className="absolute inset-0 bg-primary-500/10 blur-[60px] rounded-full pointer-events-none transform-gpu" />

                            {/* Raw Scaled SVG Image without background */}
                            <img
                                src="https://flowndeveloper.com/wp-content/uploads/2023/12/5569517_2889111.svg"
                                alt="Premium 3D Web Infrastructure"
                                fetchPriority="high"
                                decoding="async"
                                className="w-[85%] h-auto mx-auto object-contain transform-gpu group-hover:scale-[1.05] transition-transform duration-1000 ease-out relative z-10"
                            />

                            {/* Floating Stats Card properly placed */}
                            <div className="absolute -bottom-2 md:-bottom-2 left-2 md:left-4 bg-[#050505]/90 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl z-20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-bounce" style={{ animationDuration: '4s' }}>
                                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">150+</p>
                                <p className="text-xs md:text-sm text-gray-400 font-medium mt-1 text-nowrap">Enterprise Clients</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
