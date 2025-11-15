import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const auroraY = useTransform(scrollY, [0, 600], [0, 60]);
  const orb1Y = useTransform(scrollY, [0, 600], [0, 40]);
  const orb1X = useTransform(scrollY, [0, 600], [0, 20]);
  const orb2Y = useTransform(scrollY, [0, 600], [0, -30]);
  const orb2X = useTransform(scrollY, [0, 600], [0, -25]);
  const orb3Y = useTransform(scrollY, [0, 600], [0, 35]);
  const orb3X = useTransform(scrollY, [0, 600], [0, 10]);

  // Generate twinkling stars deterministically
  const tinyStars = useMemo(() => (
    Array.from({ length: 40 }).map((_, i) => ({
      left: ((i * 17) % 100),
      top: ((i * 23) % 100),
      delay: (i % 7) * 0.4,
    }))
  ), []);

  const shooters = [
    { top: '20%', left: '-10%', delay: 2 },
    { top: '45%', left: '-20%', delay: 8 },
    { top: '70%', left: '-15%', delay: 14 },
  ];

  // Constellation lines computed between nearby stars
  const [lines, setLines] = useState([]);
  useEffect(() => {
    function computeLines() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const pairs = [];
      for (let i = 0; i < tinyStars.length - 1; i += 8) {
        const a = tinyStars[i];
        const b = tinyStars[i + 1];
        const ax = (a.left / 100) * w;
        const ay = (a.top / 100) * h;
        const bx = (b.left / 100) * w;
        const by = (b.top / 100) * h;
        const dx = bx - ax;
        const dy = by - ay;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        pairs.push({ left: ax, top: ay, width: dist, rotate: angle, delay: (i % 5) * 1.5 });
      }
      setLines(pairs);
    }
    computeLines();
    const obs = new ResizeObserver(() => computeLines());
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [tinyStars]);

  return (
    <section id="top" ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline scene base */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Aurora and star layers */}
      <motion.div style={{ y: auroraY }} className="aurora" aria-hidden />
      <div className="absolute inset-0 twinkle-layer" aria-hidden>
        {tinyStars.map((s, idx) => (
          <span
            key={idx}
            className="star-dot"
            style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s` }}
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

      {/* Constellation lines */}
      <div className="absolute inset-0" aria-hidden>
        {lines.map((l, i) => (
          <span
            key={i}
            className="constellation-line"
            style={{ left: l.left, top: l.top, width: l.width, transform: `rotate(${l.rotate}deg)`, animationDelay: `${l.delay}s` }}
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
        <motion.span className="orb" style={{ width: 220, height: 220, left: '5%', top: '18%', background: 'rgba(0,229,255,0.18)', y: orb1Y, x: orb1X }} />
        <motion.span className="orb" style={{ width: 180, height: 180, right: '8%', top: '26%', background: 'rgba(48,25,52,0.35)', y: orb2Y, x: orb2X }} />
        <motion.span className="orb" style={{ width: 260, height: 260, left: '12%', bottom: '8%', background: 'rgba(11,110,79,0.28)', y: orb3Y, x: orb3X }} />
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
          className="mt-8 flex items-center gap-4 relative group"
        >
          <a href="#projects" className="px-6 py-3 rounded-xl bg-[#00E5FF] text-[#0E0B16] font-semibold uppercase tracking-wide shadow-[0_0_25px_#00E5FF] hover:shadow-[0_0_45px_#00E5FF] transition-shadow">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-cyan-300/50 text-cyan-200 hover:bg-white/10 transition-colors">
            Contact
          </a>
          {/* Hover comet */}
          <span className="comet pointer-events-none" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
