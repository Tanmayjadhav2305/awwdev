import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import Starfield from './Starfield';

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: 15,
            filter: "blur(10px)"
        },
        show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                stiffness: 40,
                damping: 10,
                duration: 0.8
            }
        }
    };

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]">

            {/* Interactive 3D Starfield Background */}
            <Starfield />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div variants={item} className="mb-8 flex justify-center">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                            </span>
                            <span className="text-sm md:text-base text-gray-100 font-medium tracking-wide">
                                Next-Gen Web Infrastructure
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] md:leading-[1.1]"
                    >
                        We Don’t Just Develop — We Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Scalable Growth</span> Infrastructure.
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-normal"
                    >
                        We design and build high-performance websites and eCommerce systems engineered to scale, convert, and drive measurable revenue growth for ambitious brands.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                            <Code2 className="w-6 h-6" />
                            Build My Growth System
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-1 backdrop-blur-sm">
                            Book a Strategy Call
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
