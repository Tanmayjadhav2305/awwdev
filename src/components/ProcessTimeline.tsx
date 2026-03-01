import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Code2, ShieldCheck, Zap } from 'lucide-react';

const steps = [
    {
        title: "Discovery & Architecture",
        description: "We don't guess. We analyze your requirements, audit existing systems, and construct a scalable blueprint before writing a single line of code.",
        icon: Lightbulb
    },
    {
        title: "Agile Engineering",
        description: "Continuous delivery of high-quality code. Our sprints ensure rapid iteration, immediate feedback, and transparent progress tracking.",
        icon: Code2
    },
    {
        title: "Security & QA",
        description: "Military-grade testing. We subject our builds to rigorous penetration testing, automated QA, and stress-loading to ensure unbreakable stability.",
        icon: ShieldCheck
    },
    {
        title: "Deployment & Scaling",
        description: "Zero-downtime launches. We deploy your infrastructure on optimized cloud environments designed to auto-scale infinitely with your growth.",
        icon: Zap
    }
];

export default function ProcessTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 relative bg-[#030303] overflow-hidden" id="process">
            {/* Artistic Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwaDB2NjBoNjBWem0tMSAxbS0xIDFIIDFWMkgyenoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">How We Build</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Our Engineering Methodology.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        A battle-tested framework designed to minimize risk, maximize performance, and deliver enterprise-grade digital products on time.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <motion.div
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        {/* Animated Glow on Line */}
                        <motion.div
                            className="absolute top-0 w-[3px] h-32 bg-primary-500 -translate-x-[1px] blur-[2px]"
                            animate={{ top: ["0%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex items-center md:items-start flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>

                                    {/* Content Card */}
                                    <motion.div
                                        className={`w-full md:w-1/2 ml-20 md:ml-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                                        transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 50 }}
                                    >
                                        <div className={`inline-block p-8 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:border-primary-500/30 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                                            <span className="text-primary-500 font-bold text-sm tracking-wider uppercase mb-2 block">Phase 0{index + 1}</span>
                                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                            <p className="text-gray-400 leading-relaxed font-light">{step.description}</p>
                                        </div>
                                    </motion.div>

                                    {/* Timeline Marker */}
                                    <motion.div
                                        className="absolute left-8 md:left-1/2 top-8 md:top-12 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#030303] border border-white/10 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-primary-400" />
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
