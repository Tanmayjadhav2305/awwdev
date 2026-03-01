import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const projects = [
    { id: 1, title: 'Global Fintech Infrastructure', category: 'High-Frequency Trading System', image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Nexus Enterprise OS', category: 'Distributed Cloud Architecture', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Aether Video Protocol', category: 'Low-Latency Streaming Network', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'OmniAI Neural Core', category: 'Machine Learning Intelligence', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isMobile = useIsMobile();

    const container: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: isMobile ? 0.05 : 0.15 } }
    };

    const item: Variants = {
        hidden: { opacity: 0, scale: isMobile ? 1 : 0.95, y: isMobile ? 15 : 30 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: isMobile ? { duration: 0.4, ease: "easeOut" } : { type: "spring", bounce: 0.3 }
        }
    };

    return (
        <section className="py-24 relative overflow-hidden" id="projects">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl">
                        <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Flagship Deployments</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                            Engineering Excellence.
                        </h2>
                    </div>
                    <button className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group">
                        View All Work
                        <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((proj) => (
                        <motion.div
                            key={proj.id}
                            variants={item}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gray-900">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-aww-dark via-aww-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                                <div>
                                    <p className="text-primary-400 font-medium text-sm mb-2 drop-shadow-md">{proj.category}</p>
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{proj.title}</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border border-white/20 text-white">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
