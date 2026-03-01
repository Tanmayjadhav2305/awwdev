import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LifeBuoy, BookOpen, MessageSquare, Wrench } from 'lucide-react';

const supportItems = [
    { icon: LifeBuoy, title: '24/7 Priority Support', desc: 'Direct access to our senior engineering team for emergency resolutions.' },
    { icon: BookOpen, title: 'Documentation', desc: 'Comprehensive guides, API references, and architecture diagrams.' },
    { icon: MessageSquare, title: 'Community Forum', desc: 'Connect with other technical leaders and share growth strategies.' },
    { icon: Wrench, title: 'System Status', desc: 'Real-time monitoring and uptime reports for all your infrastructure.' }
];

export default function Support() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 15 } }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5" id="support">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Technical Support</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                        We've Got Your Back.
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        Enterprise-grade support focused on keeping your infrastructure reliable, fast, and secure.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {supportItems.map((svc, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer text-center"
                        >
                            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                <svc.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{svc.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {svc.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 border border-white/10 hover:border-white/20 text-sm">
                        Access Support Portal
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
