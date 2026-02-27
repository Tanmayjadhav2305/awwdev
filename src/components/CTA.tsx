import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneCall } from 'lucide-react';

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with noise/gradient */}
            <div className="absolute inset-0 bg-primary-900/20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-12 md:p-16 rounded-3xl glass-panel relative overflow-hidden shadow-2xl overflow-hidden group"
                >
                    {/* Animated glow following hover could go here, for now a static complex glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/30 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary-500/40 transition-colors duration-1000" />

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                        You’re One Call Away From Scalable Growth Infrastructure.
                    </h2>
                    <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                        Built to Convert and Drive Real Profit. Stop settling for templates.
                    </p>

                    <button className="px-10 py-5 bg-white text-aww-dark rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] flex items-center gap-3 mx-auto">
                        <PhoneCall className="w-5 h-5" />
                        Book a Strategy Call
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
