import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, CosmicIdentity, Skills, Projects, GamingMindset, Vision, Contact } from './components/Sections';
import './index.css';

export default function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel='icon']");
    if (link) link.href = '/favicon.svg';
  }, []);

  return (
    <div className="bg-[#0E0B16] text-white min-h-screen">
      <Navbar />
      <Hero />

      <main className="relative">
        <div className="absolute inset-0 -z-0 pointer-events-none opacity-40" aria-hidden>
          <div className="stars"></div>
        </div>

        <About />
        <CosmicIdentity />
        <Skills />
        <Projects />
        <GamingMindset />
        <Vision />
        <Contact />
      </main>

      <footer className="py-10 text-center text-xs text-cyan-200/70">
        © {new Date().getFullYear()} Nilesh Chavan. Built with love for nature, gaming, and technology.
      </footer>
    </div>
  );
}
