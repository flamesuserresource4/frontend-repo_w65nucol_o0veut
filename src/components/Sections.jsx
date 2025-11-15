import { Code2, Orbit, Rocket, Gamepad2, Cpu, Server, Boxes, Bug, Sparkles, Atom, Brain, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-orbitron text-2xl sm:text-3xl tracking-widest uppercase text-cyan-200 mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <p className="text-cyan-100/90 leading-relaxed">
          I am Nilesh Chavan, a full‑stack developer who loves where nature and technology meet. Gaming sharpens my reflexes; debugging is my superpower. I’m charting a path toward software architecture, designing resilient, scalable systems that feel elegant and alive.
        </p>
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#301934]/50 to-[#0B6E4F]/30 border border-white/10 shadow-xl">
          <div className="flex items-center gap-3 text-cyan-200 mb-2"><Bug size={18} /><span className="uppercase tracking-widest text-xs">Strength</span></div>
          <p className="text-cyan-100/90">Deep debugging, performance tuning, and clean, composable architecture.</p>
        </div>
      </div>
    </Section>
  );
}

export function CosmicIdentity() {
  return (
    <Section id="identity" title="Cosmic Identity">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-lg">
          <div className="flex items-center gap-3 mb-2 text-cyan-200">
            <Orbit size={20} /> <span className="font-semibold">Black Holes</span>
          </div>
          <p className="text-cyan-100/80">Depth, gravity, relentless focus — I pull complex problems into clarity.</p>
        </div>
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-lg">
          <div className="flex items-center gap-3 mb-2 text-cyan-200">
            <Sparkles size={20} /> <span className="font-semibold">Nebulae</span>
          </div>
          <p className="text-cyan-100/80">Creativity, color, and emergence — ideas expand into systems and products.</p>
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  const card = 'rounded-2xl p-6 bg-gradient-to-br from-[#301934]/40 to-[#0E0B16]/60 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-xl';
  const pill = 'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-cyan-100/90 shadow';
  return (
    <Section id="skills" title="Skills & Technology">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Code2 size={18}/> Front‑end</h3>
          <div className="flex flex-wrap gap-2">
            <span className={pill}>JavaScript</span>
            <span className={pill}>React</span>
            <span className={pill}>Next.js</span>
          </div>
        </div>
        <div className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Server size={18}/> Back‑end</h3>
          <div className="flex flex-wrap gap-2">
            <span className={pill}>Node.js</span>
            <span className={pill}>APIs</span>
            <span className={pill}>Microservices</span>
          </div>
        </div>
        <div className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Boxes size={18}/> Tools & Architecture</h3>
          <div className="flex flex-wrap gap-2">
            <span className={pill}>Micro‑frontends</span>
            <span className={pill}>Debugging</span>
            <span className={pill}>System Design</span>
          </div>
        </div>
        <div className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Brain size={18}/> Learning Path</h3>
          <div className="flex flex-wrap gap-2">
            <span className={pill}>AI/ML</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Projects() {
  const proj = (title, summary, stack, role) => (
    <div className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-xl">
      <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_12px_rgba(0,229,255,0.25)]">{title}</h3>
      <p className="text-cyan-100/85 mt-2">{summary}</p>
      <div className="mt-4 text-cyan-200/90 text-sm">Stack: {stack}</div>
      <div className="mt-1 text-cyan-200/70 text-sm">Role: {role}</div>
    </div>
  );
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {proj(
          'Modular Galaxy – Micro‑Frontend Architecture',
          'A constellation of independently deployable UI modules stitched via federated routing and shared design tokens for continuous delivery at scale.',
          'React, Module Federation, Nx, CI/CD',
          'Lead developer & solution designer'
        )}
        {proj(
          'Flutter Color Nebula – VS Code Extension',
          'A lightweight extension that previews dynamic Flutter color palettes inline. Boosted theme iteration speed for designers and devs.',
          'TypeScript, VS Code API',
          'Author — 12k+ downloads'
        )}
        {proj(
          'Gaia Sensors – Nature Tech Dashboard',
          'Real‑time sensors meet eco‑visualizations with alerts that feel like auroras.',
          'Next.js, WebSockets, Tailwind',
          'Full‑stack developer'
        )}
      </div>
    </Section>
  );
}

export function GamingMindset() {
  return (
    <Section id="gaming" title="Gaming Mindset">
      <div className="rounded-2xl p-6 bg-gradient-to-r from-[#0B6E4F]/30 to-[#301934]/40 border border-white/10 shadow-xl flex flex-col sm:flex-row items-center gap-6">
        <div className="w-full sm:w-auto">
          <div className="aspect-[16/9] w-full sm:w-72 rounded-xl bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center border border-white/10" />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold flex items-center gap-2"><Gamepad2 size={18}/> DOTA Mid Player</h3>
          <p className="text-cyan-100/85 mt-2 max-w-2xl">Mid‑lane decision‑making sharpens pattern recognition, timing, and map awareness — the same instincts I apply to architecture, debugging, and delivery under pressure.</p>
        </div>
      </div>
    </Section>
  );
}

export function Vision() {
  return (
    <Section id="vision" title="Vision & Life Philosophy">
      <div className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl">
        <p className="text-cyan-100/90 leading-relaxed">
          I build for peace, nature & technology. Big land. Solar‑powered tech home. Animals. Nature ecosystem. Night‑sky watching. Software that serves the planet and people.
        </p>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl">
          <div className="flex items-center gap-3 text-cyan-200 mb-2"><Mail size={18} /> <span>Email</span></div>
          <a className="text-cyan-100 hover:text-white" href="mailto:nilesh@example.com">nilesh@example.com</a>
        </div>
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl">
          <div className="flex items-center gap-3 text-cyan-200 mb-2"><Github size={18} /> <span>GitHub</span></div>
          <a className="text-cyan-100 hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">github.com/nileshchavan</a>
        </div>
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl">
          <div className="flex items-center gap-3 text-cyan-200 mb-2"><Linkedin size={18} /> <span>LinkedIn</span></div>
          <a className="text-cyan-100 hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin.com/in/nileshchavan</a>
        </div>
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl flex items-center justify-between">
          <div className="text-cyan-100">Download Resume (PDF)</div>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00E5FF] text-[#0E0B16] font-semibold uppercase tracking-wide shadow-[0_0_25px_#00E5FF] hover:shadow-[0_0_45px_#00E5FF] transition-shadow">
            <Download size={16} /> Download
          </a>
        </div>
      </div>
    </Section>
  );
}
