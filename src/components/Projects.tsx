import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    { id: 1, title: 'Nova Fintech', category: 'Web App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Aurora Health', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Nexus Supply Chain', category: 'Enterprise Dashboard', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Apex Analytics', category: 'Data Vis', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, bounce: 0.3 } }
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
                        <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Projects</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                            Featured Case Studies.
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
