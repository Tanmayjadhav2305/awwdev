import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Server, Cloud, Database, Palette, FileCode2, Globe } from 'lucide-react';

const technologies = [
    { name: "React / Next.js", category: "Frontend Architecture", colSpan: "md:col-span-2", rowSpan: "md:row-span-1", glow: "from-cyan-500/20", icon: Layout },
    { name: "Node.js", category: "Backend Engine", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", glow: "from-green-500/20", icon: Server },
    { name: "AWS Cloud", category: "Cloud Infrastructure", colSpan: "md:col-span-1", rowSpan: "md:row-span-2", glow: "from-orange-500/20", icon: Cloud },
    { name: "PostgreSQL", category: "Relational Data", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", glow: "from-blue-500/20", icon: Database },
    { name: "Tailwind CSS", category: "Styling Framework", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", glow: "from-teal-500/20", icon: Palette },
    { name: "TypeScript", category: "Type Safety", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", glow: "from-blue-600/20", icon: FileCode2 },
    { name: "WordPress Headless", category: "Content Management", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", glow: "from-indigo-500/20", icon: Globe },
];

export default function TechStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 50, damping: 15 } }
    };

    return (
        <section className="py-24 relative bg-[#050505] overflow-hidden" id="tech-stack">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Arsenal</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                        Modern Technologies. <br className="md:hidden" />
                        Enterprise Scale.
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6 auto-rows-[100px] md:auto-rows-[160px]"
                >
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden cursor-default transition-colors ${tech.colSpan} ${tech.rowSpan}`}
                            >
                                {/* Hover Gradient Lighting */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Core Content */}
                                <div className="relative z-10 h-full flex flex-col justify-end">
                                    <p className="text-primary-400 font-medium text-xs md:text-sm mb-1 md:mb-2">{tech.category}</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:-translate-y-1 transition-transform duration-300">{tech.name}</h3>
                                </div>

                                {/* Dynamic Icon */}
                                <div className="absolute top-0 right-0 p-4 md:p-8 text-white/10 group-hover:text-white/20 transition-colors duration-500">
                                    <Icon className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
