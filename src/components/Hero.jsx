import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  // Generate a few twinkling stars and shooting stars positions deterministically
  const tinyStars = Array.from({ length: 40 }).map((_, i) => ({
    left: `${(i * 17) % 100}%`,
    top: `${(i * 23) % 100}%`,
    delay: (i % 7) * 0.4,
  }));
  const shooters = [
    { top: '20%', left: '-10%', delay: 2 },
    { top: '45%', left: '-20%', delay: 8 },
    { top: '70%', left: '-15%', delay: 14 },
  ];

  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline scene base */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Aurora and star layers */}
      <div className="aurora" aria-hidden />
      <div className="absolute inset-0 twinkle-layer" aria-hidden>
        {tinyStars.map((s, idx) => (
          <span
            key={idx}
            className="star-dot"
            style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 twinkle-layer" aria-hidden>
        {shooters.map((s, idx) => (
          <span
            key={idx}
            className="shooting-star"
            style={{ top: s.top, left: s.left, animation: `shoot 6s ${s.delay}s linear infinite` }}
          />
        ))}
      </div>

      {/* Gradient veil to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0B16]/60 via-[#0E0B16]/65 to-[#0E0B16] pointer-events-none" />

      {/* Title ring glow behind text */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-40 hidden sm:block" aria-hidden>
        <div className="ring-glow" />
      </div>

      {/* Floating color orbs */}
      <div className="absolute inset-0" aria-hidden>
        <span className="orb" style={{ width: 220, height: 220, left: '5%', top: '18%', background: 'rgba(0,229,255,0.18)', animation: 'floaty 10s ease-in-out infinite' }} />
        <span className="orb" style={{ width: 180, height: 180, right: '8%', top: '26%', background: 'rgba(48,25,52,0.35)', animation: 'floaty 14s ease-in-out infinite 1s' }} />
        <span className="orb" style={{ width: 260, height: 260, left: '12%', bottom: '8%', background: 'rgba(11,110,79,0.28)', animation: 'floaty 16s ease-in-out infinite 0.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]"
        >
          Nilesh Chavan – Full-Stack Developer & Aspiring Software Architect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-5 text-cyan-200/90 text-base sm:text-lg tracking-wide"
        >
          Cosmic • Gaming • Technology
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-xl bg-[#00E5FF] text-[#0E0B16] font-semibold uppercase tracking-wide shadow-[0_0_25px_#00E5FF] hover:shadow-[0_0_45px_#00E5FF] transition-shadow">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-cyan-300/50 text-cyan-200 hover:bg-white/10 transition-colors">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
