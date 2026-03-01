import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import ProcessTimeline from '../components/ProcessTimeline';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Authority from '../components/Authority';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import CTA from '../components/CTA';
import TechPartners from '../components/TechPartners';

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <TechPartners />
                <About />
                <ServicesSection />
                <ProcessTimeline />
                <TechStack />
                <Projects />
                <Testimonials />
                <Authority />
                <FAQ />
                <ContactSection />
                <CTA />
            </main>
        </>
    );
}
