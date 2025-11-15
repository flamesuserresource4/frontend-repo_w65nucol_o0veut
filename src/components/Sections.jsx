import { Code2, Orbit, Rocket, Gamepad2, Cpu, Server, Boxes, Bug, Sparkles, Download, Github, Linkedin, Mail, Phone, Instagram, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="py-20 sm:py-28"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2 variants={fadeUp} className="font-orbitron text-2xl sm:text-3xl tracking-widest uppercase text-cyan-200 mb-8">{title}</motion.h2>
      <motion.div variants={stagger}>
        {children}
      </motion.div>
    </div>
  </motion.section>
);

export function About() {
  return (
    <Section id="about" title="About">
      <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-cyan-100/90 leading-relaxed">
            I build complex features, design micro-frontend systems, and move toward software architecture and AI/ML. I balance nature and tech — a gamer and cosmic thinker.
          </p>
          <p className="text-cyan-100/90 leading-relaxed">
            Loves: Black Holes, Nebulae, DOTA (Mid), Trekking, Nature, Solar-powered tech home.
          </p>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl">
            <h3 className="text-cyan-200 font-semibold mb-3">Strength</h3>
            <p className="text-cyan-100/90 flex items-start gap-2"><Bug size={18} className="mt-0.5"/> Deep debugging, performance tuning, and clean, composable architecture.</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-gradient-to-br from-[#301934]/50 to-[#0B6E4F]/30 border border-white/10 shadow-xl">
          <img src="/assets/hero-placeholder.svg" alt="Nilesh portrait placeholder" className="w-full rounded-xl border border-white/10" loading="lazy" />
          <div className="mt-4 text-xs text-cyan-200/80">Alt text and captions help everyone. All media has alt where applicable.</div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

export function CosmicIdentity() {
  return (
    <Section id="identity" title="Cosmic Identity">
      <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-lg">
          <div className="flex items-center gap-3 mb-2 text-cyan-200">
            <Orbit size={20} /> <span className="font-semibold">Black Holes</span>
          </div>
          <p className="text-cyan-100/80">Depth, gravity, relentless focus — I pull complex problems into clarity.</p>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-lg">
          <div className="flex items-center gap-3 mb-2 text-cyan-200">
            <Sparkles size={20} /> <span className="font-semibold">Nebulae</span>
          </div>
          <p className="text-cyan-100/80">Creativity, color, and emergence — ideas expand into systems and products.</p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

export function Skills() {
  const card = 'rounded-2xl p-6 bg-gradient-to-br from-[#301934]/40 to-[#0E0B16]/60 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-xl';
  const pill = 'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-cyan-100/90 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400';
  return (
    <Section id="skills" title="Tech Nebula — My Stack">
      <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={fadeUp} className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Code2 size={18}/> Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {['JavaScript','React','Next.js','Tailwind'].map((s)=> (
              <span key={s} className={pill}>{s}</span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Server size={18}/> Backend</h3>
          <div className="flex flex-wrap gap-2">
            {['Node.js','Express','microservices'].map((s)=> (
              <span key={s} className={pill}>{s}</span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Boxes size={18}/> Architecture</h3>
          <div className="flex flex-wrap gap-2">
            {['micro-frontends','system design'].map((s)=> (
              <span key={s} className={pill}>{s}</span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className={card}>
          <h3 className="text-cyan-200 mb-3 font-semibold flex items-center gap-2"><Cpu size={18}/> Tools</h3>
          <div className="flex flex-wrap gap-2">
            {['Docker','CI/CD','Git', 'AI/ML (roadmap)'].map((s)=> (
              <span key={s} className={pill}>{s}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ title, summary, meta, img }){
  return (
    <motion.details variants={fadeUp} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-300/40 transition-colors shadow-xl">
      <summary className="cursor-pointer list-none p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
        <div className="p-6 flex items-start gap-4">
          <img src={img} alt="Project preview placeholder" className="w-20 h-20 rounded-lg object-cover border border-white/10" loading="lazy" />
          <div>
            <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_12px_rgba(0,229,255,0.25)]">{title}</h3>
            <p className="text-cyan-100/85 mt-2">{summary}</p>
            <div className="mt-3 text-cyan-200/90 text-sm">{meta}</div>
          </div>
          <ChevronDown className="ml-auto text-cyan-300 group-open:rotate-180 transition-transform" />
        </div>
      </summary>
      <div className="px-6 pb-6 text-cyan-100/85">
        <p>More details coming soon. This card expands to show highlights, links, and screenshots.</p>
      </div>
    </motion.details>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects (Galaxy)">
      <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Modular Galaxy — Micro-Frontend Architecture"
          summary="Designed & implemented a micro-frontend system for multiple product teams; reduced deployment friction and improved modularity."
          meta="Stack: React, Module Federation, Node.js"
          img="/assets/project-a.svg"
        />
        <ProjectCard
          title="Flutter Color Nebula — VS Code Extension"
          summary="VS Code extension with 470k installs; improved developer UX for Flutter color editing."
          meta="Metrics: downloads, rating"
          img="/assets/project-b.svg"
        />
        <ProjectCard
          title="IoT Constellation — Real-time Dashboards"
          summary="Real-time dashboards, analytics, and notification system."
          meta="Stack: Next.js, WebSockets, Tailwind"
          img="/assets/project-c.svg"
        />
      </motion.div>
    </Section>
  );
}

export function GamingMindset() {
  return (
    <Section id="gaming" title="Gaming (Star Cluster)">
      <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-gradient-to-r from-[#0B6E4F]/30 to-[#301934]/40 border border-white/10 shadow-xl">
        <h3 className="text-white text-xl font-semibold flex items-center gap-2"><Gamepad2 size={18}/> DOTA Mid — strategic, calm under pressure.</h3>
        <p className="text-cyan-100/85 mt-2 max-w-3xl">Gaming sharpens my product thinking and system decisions.</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-cyan-200/80">
          <div className="rounded-lg bg-white/5 border border-white/10 p-3">Timing</div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3">Map Awareness</div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3">Strategy</div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3">Calm Decisions</div>
        </div>
      </motion.div>
    </Section>
  );
}

export function Vision() {
  return (
    <Section id="vision" title="Vision / Life Philosophy (Aurora / Planet)">
      <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl">
        <h3 className="text-cyan-200 font-semibold mb-3">Build for Peace — Nature & Technology</h3>
        <p className="text-cyan-100/90 leading-relaxed">
          I aim to become a Senior Software Architect and master AI/ML. One day I’ll build a solar-powered nature home with a tech lab — a personal ecosystem under the stars.
        </p>
      </motion.div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact (Deep Space)">
      <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl">
          <p className="text-white font-medium">Hire / Collaborate / Say Hi</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <a className="inline-flex items-center gap-2 text-cyan-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href="mailto:nileshchavan0608@gmail.com" aria-label="Email"><Mail size={16}/> Email</a>
            <a className="inline-flex items-center gap-2 text-cyan-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href="https://github.com/nilesh-0608" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/> GitHub</a>
            <a className="inline-flex items-center gap-2 text-cyan-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href="https://www.linkedin.com/in/nilesh-chavan-7a4920176/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/> LinkedIn</a>
            <a className="inline-flex items-center gap-2 text-cyan-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href="https://www.instagram.com/nil.0608/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16}/> Instagram</a>
            <a className="inline-flex items-center gap-2 text-cyan-100 hover:text-white" href="tel:+918689864937" aria-label="Phone"><Phone size={16}/> +91 86898 64937</a>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00E5FF] text-[#0E0B16] font-semibold uppercase tracking-wide shadow-[0_0_25px_#00E5FF] hover:shadow-[0_0_45px_#00E5FF] transition-shadow"><Download size={16} /> Download Resume (PDF)</a>
          </div>
        </motion.div>
        <motion.form variants={fadeUp} className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl grid gap-4" action="mailto:nileshchavan0608@gmail.com" method="POST" encType="text/plain" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-cyan-200/80 mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 text-cyan-100 placeholder:text-cyan-200/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-cyan-200/80 mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 text-cyan-100 placeholder:text-cyan-200/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-cyan-200/80 mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 text-cyan-100 placeholder:text-cyan-200/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" placeholder="Your message"></textarea>
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#00E5FF] text-[#0E0B16] font-semibold uppercase tracking-wide shadow-[0_0_25px_#00E5FF] hover:shadow-[0_0_45px_#00E5FF] transition-shadow">Send</button>
            <span className="text-xs text-cyan-200/70">Form uses mailto by default. Configure endpoint for production.</span>
          </div>
        </motion.form>
      </motion.div>
    </Section>
  );
}
