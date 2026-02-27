import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock } from 'lucide-react';

const blogs = [
    { id: 1, title: 'The Future of Next-Gen Infrastructure', category: 'Engineering', date: 'Oct 12, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Why Web3 Converts Faster', category: 'Strategy', date: 'Oct 08, 2026', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Optimizing Vercel Deployments', category: 'DevOps', date: 'Sep 29, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
];

export default function Blogs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0A0A]" id="blogs">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Journal</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Latest Insights.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, i) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-primary-500/30 transition-colors group cursor-pointer flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white">
                                    {blog.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                                    <span>{blog.date}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
