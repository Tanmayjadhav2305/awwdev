import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceById } from '../data/servicesData';
import { ArrowLeft } from 'lucide-react';

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
                        <div className="p-3 bg-primary-500/10 rounded-xl border border-primary-500/20">
                            <Icon className="w-8 h-8 text-primary-400" />
                        </div>
                        <h1 className="text-primary-500 font-semibold tracking-wider text-sm uppercase">
                            {service.title}
                        </h1>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight max-w-4xl">
                        {service.heroHeadline}
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
                        {service.heroSubheadline}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Left Column: Overview & Tech Stack */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="sticky top-32"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Overview</h3>
                            <p className="text-gray-400 leading-relaxed mb-12">
                                {service.overview}
                            </p>

                            <h3 className="text-xl font-bold text-white mb-6">Core Technologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {service.technologies.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium whitespace-nowrap">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Features Bento Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                    className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors ${i === 0 ? 'md:col-span-2' : 'col-span-1'}`}
                                >
                                    <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
