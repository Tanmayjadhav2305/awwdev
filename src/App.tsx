import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import Projects from './components/Projects';
import Authority from './components/Authority';
import Blogs from './components/Blogs';
import ContactSection from './components/ContactSection';
import Support from './components/Support';
import CTA from './components/CTA';
import GlobalPresence from './components/GlobalPresence';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <Hero />
        <GlobalPresence />
        <About />
        <ServicesSection />
        <Projects />
        <Authority />
        <Blogs />
        <ContactSection />
        <Support />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
