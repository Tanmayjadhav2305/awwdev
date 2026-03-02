import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { getAllServices } from '../data/servicesData';

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });
    const isMobile = useIsMobile();

    // Parallax logic
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Subtly move the header text and the grid in opposition
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);


    const container: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: isMobile ? 0.05 : 0.1, delayChildren: 0.1 } }
    };

    const item: Variants = {
        hidden: { opacity: 0, scale: 0.98, y: isMobile ? 15 : 25 },
        show: { opacity: 1, scale: 1, y: 0, transition: isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="pt-16 pb-24 relative overflow-hidden bg-[#070707]" id="services" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={contentRef}>
                <motion.div style={{ y: isMobile ? 0 : textY }}>
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial={{ opacity: 0, y: 25, scale: 0.98 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-purple-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                            End-to-End Digital Solutions.
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            We provide comprehensive services to build, scale, and optimize your digital presence.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div style={{ y: isMobile ? 0 : gridY }}>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {getAllServices().map((svc) => {
                            const Icon = svc.icon;
                            return (
                                <Link to={`/services/${svc.id}`} key={svc.id}>
                                    <motion.div
                                        variants={item}
                                        whileHover={isMobile ? {} : { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                        className="h-full p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer flex flex-col relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]"
                                    >
                                        {/* Hover Gradient Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 group-hover:border-primary-500/30 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 relative z-10">
                                            <Icon className="w-7 h-7 text-white group-hover:text-primary-400 transition-colors" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{svc.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm mb-6 relative z-10">
                                            {svc.shortDesc}
                                        </p>
                                        <div className="flex items-center text-primary-400 text-sm font-semibold group-hover:text-primary-300 transition-colors mt-auto relative z-10">
                                            <span>Read More</span>
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
