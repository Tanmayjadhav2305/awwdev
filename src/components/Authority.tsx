import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Rocket, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: Rocket,
        title: 'Performance-Obsessed',
        description: 'Blazing fast load times and buttery smooth interactions that keep users engaged and converting.'
    },
    {
        icon: Layers,
        title: 'Engineered to Scale',
        description: 'Robust server architectures designed to handle traffic spikes and complex data naturally.'
    },
    {
        icon: TrendingUp,
        title: 'Profit-Driven Design',
        description: 'Every interface element is strategically placed to maximize conversions and overall ROI.'
    }
];

export default function Authority() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 } }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0A0A]" id="infrastructure">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                        From strategy to deployment.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                        Every line of code is built with <span className="text-white font-medium">performance</span>, <span className="text-white font-medium">scalability</span>, and <span className="text-white font-medium">long-term profitability</span> in mind.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-primary-500/30 transition-colors group relative overflow-hidden"
                            >
                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
