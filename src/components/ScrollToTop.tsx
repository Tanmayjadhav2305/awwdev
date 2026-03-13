import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (hash) {
            // Need a tiny timeout to ensure the element has rendered if we're changing pages
            const requestId = setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(requestId);
        } else {
            // Force instant scroll to top on route change ONLY if no hash
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' as any
            });
        }
    }, [pathname, hash]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-primary-600 transition-colors group focus:outline-none"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
