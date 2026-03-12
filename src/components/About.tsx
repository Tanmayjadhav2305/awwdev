import { Users, Target, ShieldCheck } from 'lucide-react';

export default function About() {
    return (
        <section className="pt-24 pb-20 relative overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="max-w-2xl text-left">
                        <div>
                            <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                                Architecting Digital Experiences Beyond the Ordinary.
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                We are a team of passionate engineers, designers, and strategists dedicated to transforming ambitious visions into scalable realities. We don't just build websites; we engineer customized digital infrastructures designed for relentless growth and uncompromised performance.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[
                                    { icon: Users, text: "Global network of top-tier talent" },
                                    { icon: Target, text: "Data-driven, conversion-focused design" },
                                    { icon: ShieldCheck, text: "Enterprise-grade security and reliability" }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-md bg-primary-500/10 flex items-center justify-center text-primary-400">
                                            <benefit.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-300 font-medium">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative flex justify-center items-center w-full mt-12 lg:mt-0 min-h-[300px]">
                        <div className="relative w-full max-w-lg lg:max-w-xl mx-auto pl-0 md:pl-8">
                            {/* Hardware accelerated background glow instead of CSS SVG filter for performance */}
                            <div className="absolute inset-0 bg-primary-500/10 blur-[60px] rounded-full pointer-events-none transform-gpu" />

                            {/* Raw Scaled SVG Image without background */}
                            <img
                                src="https://flowndeveloper.com/wp-content/uploads/2023/12/5569517_2889111.svg"
                                alt="Premium 3D Web Infrastructure"
                                fetchPriority="high"
                                decoding="async"
                                className="w-[85%] h-auto mx-auto object-contain relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
