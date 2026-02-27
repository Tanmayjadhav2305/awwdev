import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Search, PenTool, Database, Cloud } from 'lucide-react';

const services = [
    { icon: Code, title: 'Web Development', desc: 'Custom, high-performance web applications built with modern stacks (React, Node, Next.js).' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences that engage and retain users.' },
    { icon: Search, title: 'SEO & Marketing', desc: 'Data-driven strategies to dominate search results and drive organic, high-intent traffic.' },
    { icon: PenTool, title: 'UI/UX Design', desc: 'Intuitive, conversion-optimized interfaces that leave a lasting impression.' },
    { icon: Database, title: 'Backend Architecture', desc: 'Scalable databases and APIs built to handle millions of requests seamlessly.' },
    { icon: Cloud, title: 'DevOps & Cloud', desc: 'Robust infrastructure deployments ensuring 99.99% uptime and auto-scaling.' }
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 20 } }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#070707]" id="services">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-purple-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Services</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                        End-to-End Digital Solutions.
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        We provide comprehensive services to build, scale, and optimize your digital presence.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svc.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{svc.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {svc.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
