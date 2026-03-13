import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceById } from '../data/servicesData';
import { ArrowLeft } from 'lucide-react';
import TechStack from '../components/TechStack';

export default function ServicePage() {
    const { id } = useParams<{ id: string }>();
    const service = id ? getServiceById(id) : null;

    // If the URL ID doesn't exist in our data, send them back home
    if (!service) {
        return <Navigate to="/" replace />;
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-primary-500/30 transition-all duration-300">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="text-sm font-medium tracking-wide">Back to Home</span>
                    </Link>
                </motion.div>

                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary-500/10 rounded-xl border border-primary-500/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                            <Icon className="w-8 h-8 text-primary-400" />
                        </div>
                        <h1 className="text-primary-500 font-semibold tracking-wider text-sm uppercase">
                            {service.title}
                        </h1>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight max-w-5xl">
                        {service.heroHeadline}
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mb-12">
                        {service.heroSubheadline}
                    </p>

                    <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 text-lg text-gray-300 leading-relaxed shadow-xl">
                        {service.overview}
                    </div>
                </motion.div>

                {/* Sub-Services List */}
                <div className="space-y-32 mb-24">
                    {service.subServices.map((sub, index) => {
                        const SubIcon = sub.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={sub.id} id={sub.id} className="scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}
                                >
                                    {/* Sub-Service Details */}
                                    <div className="flex-1 w-full relative">
                                        <div className="absolute -left-8 -top-8 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
                                        
                                        <div className="flex items-center gap-4 mb-6 relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                                <SubIcon className="w-6 h-6 text-primary-400" />
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{sub.title}</h3>
                                        </div>

                                        <p className="text-xl text-primary-200/80 font-medium mb-6 relative z-10">
                                            {sub.shortDesc}
                                        </p>

                                        <p className="text-gray-400 leading-relaxed mb-8 relative z-10 text-lg">
                                            {sub.description}
                                        </p>

                                        <div className="mb-8 relative z-10">
                                            <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">Core Principles</h4>
                                            <ul className="space-y-3">
                                                {sub.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500/80" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Sub-Service Stack / Visual Component */}
                                    <div className="flex-1 w-full lg:sticky lg:top-32">
                                        <div className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 relative overflow-hidden group">
                                             {/* Abstract decorative element */}
                                             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/10 transition-colors duration-700 pointer-events-none"></div>

                                            <h4 className="text-xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                                                <svg className="w-5 h-5 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                                Technology Stack
                                            </h4>
                                            
                                            <div className="flex flex-wrap gap-3 relative z-10">
                                                {sub.technologies.map((tech, i) => (
                                                    <span key={i} className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/30 text-sm text-gray-200 font-medium whitespace-nowrap transition-all duration-300 cursor-default">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <TechStack />
        </main>
    );
}
