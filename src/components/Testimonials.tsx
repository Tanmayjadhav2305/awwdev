import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CTO, Nova Fintech",
        content: "Awwdev didn't just build our infrastructure; they completely architected our path to scale. Their team's deep understanding of distributed systems helped us reduce load times by 40% globally.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Marcus Chen",
        role: "Founder, OmniAI",
        content: "We needed a team that could translate complex machine learning requirements into a blazing-fast, consumer-facing application. The results absolutely blew our internal milestones out of the water.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Elena Rodriguez",
        role: "VP Engineering, Nexus OS",
        content: "The attention to detail and obsession with performance is unmatched. Working with Awwdev feels like having an elite, in-house Silicon Valley engineering team at your disposal.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isMobile = useIsMobile();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: isMobile ? 0.1 : 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 40, damping: 15 } }
    };

    return (
        <section className="py-32 relative bg-[#050505] overflow-hidden" id="testimonials">
            {/* Artistic Glow */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Proven Results</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Trusted by Engineering Leaders.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        Don't just take our word for it. Hear from the technical founders and CTOs who trust us with their core infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((test, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 relative group"
                        >
                            <Quote className="w-10 h-10 text-primary-500/20 absolute top-8 right-8 group-hover:scale-110 group-hover:text-primary-500/40 transition-all duration-300" />

                            <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10 font-light">
                                "{test.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                                <div>
                                    <h4 className="text-white font-semibold">{test.name}</h4>
                                    <p className="text-primary-400 text-sm">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
