import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function CTA() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 relative overflow-hidden bg-[#030303]" id="contact">
            {/* Subtle Grid Pattern - Kept static */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwaDB2NjBoNjBWem0tMSAxbS0xIDFIIDFWMkgyenoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)]" />

            {/* Static Centered Glow for High Contrast */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[400px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative p-10 md:p-16 lg:p-20 rounded-3xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden group text-center isolate"
                >
                    {/* Inner glowing edge for a sharp, premium border effect */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-50" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-50" />

                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary-400 font-medium text-sm tracking-wide mb-6 uppercase">
                            Ready To Scale?
                        </span>

                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 leading-[1.1]">
                            You’re One Call Away From <br className="hidden md:block" /> Scalable Infrastructure.
                        </h2>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Built to Convert and Drive Real Profit. Stop settling for templates and outdated architecture holding your business back.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link
                                to="/book"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-[#050505] rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 transition-all duration-300"
                            >
                                <PhoneCall className="w-5 h-5 text-[#050505]" />
                                Book a Strategy Call
                            </Link>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 group transition-colors duration-300"
                            >
                                View Pricing
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
