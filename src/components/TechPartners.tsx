import { motion } from 'framer-motion';
import { Code2, Cloud, Blocks, Zap, LayoutTemplate, ShieldCheck, Database } from 'lucide-react';

const services = [
    { name: "Enterprise Web Dev", icon: Code2 },
    { name: "Cloud Architecture", icon: Cloud },
    { name: "System Integration", icon: Blocks },
    { name: "Performance Audits", icon: Zap },
    { name: "UI/UX Engineering", icon: LayoutTemplate },
    { name: "Security & QA", icon: ShieldCheck },
    { name: "Data Engineering", icon: Database },
];

export default function TechPartners() {
    return (
        <section className="py-12 border-y border-white/5 bg-[#030303] overflow-hidden relative select-none">
            {/* Edge fade gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 text-center">
                <p className="text-sm font-medium tracking-widest text-primary-500 uppercase">Our Core Capabilities</p>
            </div>

            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex shrink-0 w-max items-center gap-12 pr-12 md:gap-24 md:pr-24"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div key={i} className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default">
                                <Icon className="w-6 h-6 text-primary-500/50 group-hover:text-primary-400 transition-colors" />
                                <span className="text-lg font-semibold whitespace-nowrap text-gray-400 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                        );
                    })}
                    {/* Duplicate the list seamlessly for pure loop */}
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div key={`dup-${i}`} className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default">
                                <Icon className="w-6 h-6 text-primary-500/50 group-hover:text-primary-400 transition-colors" />
                                <span className="text-lg font-semibold whitespace-nowrap text-gray-400 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                        );
                    })}
                </motion.div>
                {/* Secondary exact copy to ensure smooth infinite loop tracking */}
                <motion.div
                    className="flex shrink-0 w-max items-center gap-12 pr-12 md:gap-24 md:pr-24"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div key={i} className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default">
                                <Icon className="w-6 h-6 text-primary-500/50 group-hover:text-primary-400 transition-colors" />
                                <span className="text-lg font-semibold whitespace-nowrap text-gray-400 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                        );
                    })}
                    {/* Duplicate the list seamlessly for pure loop */}
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div key={`dup2-${i}`} className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 group cursor-default">
                                <Icon className="w-6 h-6 text-primary-500/50 group-hover:text-primary-400 transition-colors" />
                                <span className="text-lg font-semibold whitespace-nowrap text-gray-400 group-hover:text-white transition-colors">{service.name}</span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
