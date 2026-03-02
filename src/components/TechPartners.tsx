import { motion } from 'framer-motion';
const services = [
    "Enterprise Web Dev",
    "Cloud Architecture",
    "System Integration",
    "Performance Audits",
    "UI/UX Engineering",
    "Security & QA",
    "Data Engineering",
];

export default function TechPartners() {
    return (
        <section className="py-8 border-y border-white/10 bg-[#030303] overflow-hidden relative select-none">
            {/* Ambient Center Glow to brighten the dark section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-primary-500/10 blur-[60px] pointer-events-none rounded-full" />

            {/* Edge fade gradients for seamless loop */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex shrink-0 w-max items-center gap-8 pr-8 md:gap-12 md:pr-12"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {services.map((service, i) => (
                        <div key={i} className="flex items-center justify-center gap-8 md:gap-12 cursor-default relative z-20">
                            <span className="text-3xl md:text-5xl font-black whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase tracking-tight">{service}</span>
                            <span className="text-2xl md:text-3xl text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">●</span>
                        </div>
                    ))}
                    {/* Duplicate the list seamlessly for pure loop */}
                    {services.map((service, i) => (
                        <div key={`dup-${i}`} className="flex items-center justify-center gap-8 md:gap-12 cursor-default relative z-20">
                            <span className="text-3xl md:text-5xl font-black whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase tracking-tight">{service}</span>
                            <span className="text-2xl md:text-3xl text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">●</span>
                        </div>
                    ))}
                </motion.div>
                {/* Secondary exact copy to ensure smooth infinite loop tracking */}
                <motion.div
                    className="flex shrink-0 w-max items-center gap-8 pr-8 md:gap-12 md:pr-12"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {services.map((service, i) => (
                        <div key={i} className="flex items-center justify-center gap-8 md:gap-12 cursor-default relative z-20">
                            <span className="text-3xl md:text-5xl font-black whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase tracking-tight">{service}</span>
                            <span className="text-2xl md:text-3xl text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">●</span>
                        </div>
                    ))}
                    {/* Duplicate the list seamlessly for pure loop */}
                    {services.map((service, i) => (
                        <div key={`dup2-${i}`} className="flex items-center justify-center gap-8 md:gap-12 cursor-default relative z-20">
                            <span className="text-3xl md:text-5xl font-black whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase tracking-tight">{service}</span>
                            <span className="text-2xl md:text-3xl text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">●</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
