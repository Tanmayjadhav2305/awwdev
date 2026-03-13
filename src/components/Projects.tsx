import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const projects = [
    { id: 1, title: 'Duckberry', category: 'Premium Fashion E-commerce', link: 'https://duckberry.in/', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { id: 5, title: 'FreshKart Grocery', category: 'E-Commerce Platform', link: 'https://freshkart-eight.vercel.app', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    // Hidden until View More
    { id: 2, title: 'Fotograf Magik', category: 'Photography Portfolio', link: 'https://magik.no', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { id: 3, title: 'Medprocode', category: 'Healthcare Tech Platform', link: 'https://medprocode.com', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { id: 4, title: 'Dr. Aniruddha Dhokare', category: 'Medical Consultant Portal', link: 'https://draniruddhadhokare.com/', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { id: 6, title: 'Vastrado', category: 'Retail & Fashion Brand', link: 'https://www.vastrado.com/', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { id: 7, title: 'TM Perfume House', category: 'Luxury Fragrance Store', link: 'https://tmperfumehouse.com', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    { id: 8, title: 'Statim Build UK', category: 'Structural Construction', link: 'https://statimbuild.com/', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' }
];

interface ProjectsProps {
    defaultShowAll?: boolean;
}

export default function Projects({ defaultShowAll = false }: ProjectsProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isMobile = useIsMobile();
    const [showAll, setShowAll] = useState(defaultShowAll);

    const visibleProjects = showAll ? projects : projects.slice(0, 2);

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
        <section className="pt-24 pb-8 relative overflow-hidden" id="projects">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl">
                        <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Featured Work</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                            Digital Excellence.
                        </h2>
                    </div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group"
                    >
                        {showAll ? 'View Less' : 'View All Work'}
                        <ArrowUpRight className={showAll ? "w-5 h-5 group-hover:-translate-y-1 transition-transform rotate-180" : "w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"} />
                    </button>
                </motion.div>

                <motion.div
                    key={showAll ? "all" : "some"}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {visibleProjects.map((proj) => (
                        <motion.a
                            key={proj.id}
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={item}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] cursor-pointer block"
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
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
