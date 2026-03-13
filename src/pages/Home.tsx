import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import Projects from '../components/Projects';
import TechPartners from '../components/TechPartners';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <TechPartners />
                <About />
                <ServicesSection />
                <Projects />
                <FAQ />
                <ContactSection />
            </main>
        </>
    );
}
