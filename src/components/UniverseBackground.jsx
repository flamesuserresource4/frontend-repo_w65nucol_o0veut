import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const themeDefs = {
  cosmos: {
    id: 'cosmos',
    gradient: 'from-[#0E0B16]/40 via-[#0E0B16]/60 to-[#0E0B16]/90',
    glow: 'rgba(0,229,255,0.18)'
  },
  nebula: {
    id: 'nebula',
    gradient: 'from-[#301934]/40 via-[#301934]/30 to-transparent',
    glow: 'rgba(180,80,255,0.28)'
  },
  galaxy: {
    id: 'galaxy',
    gradient: 'from-[#00111A]/40 via-[#00111A]/0 to-transparent',
    glow: 'rgba(0,229,255,0.22)'
  },
  starCluster: {
    id: 'starCluster',
    gradient: 'from-[#0E0B16]/20 via-[#9D4EDD]/10 to-transparent',
    glow: 'rgba(157,78,221,0.28)'
  },
  aurora: {
    id: 'aurora',
    gradient: 'from-[#0B6E4F]/20 via-[#00E5FF]/10 to-transparent',
    glow: 'rgba(11,110,79,0.30)'
  },
  deepSpace: {
    id: 'deepSpace',
    gradient: 'from-[#05060A]/70 via-[#0E0B16]/90 to-[#0E0B16]',
    glow: 'rgba(255,255,255,0.12)'
  }
};

export default function UniverseBackground() {
  const [sky, setSky] = useState('cosmos');
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 640px)').matches;

  const perf = siteConfig.behavior.performance;
  const particleCount = prefersReduced ? 0 : (isMobile && perf.reduceOnMobile ? perf.particlesMobile : perf.particlesDesktop);
  const starCount = (isMobile && perf.reduceOnMobile) ? Math.floor((perf.baseStars || 60) * 0.5) : (perf.baseStars || 60);

  useEffect(() => {
    function onSkyChange(e) {
      const next = e?.detail;
      if (next && themeDefs[next]) setSky(next);
    }
    window.addEventListener('skychange', onSkyChange);
    return () => window.removeEventListener('skychange', onSkyChange);
  }, []);

  const baseStars = useMemo(
    () => Array.from({ length: starCount }).map((_, i) => ({
      left: ((i * 37) % 100),
      top: ((i * 19) % 100),
      delay: (i % 9) * 0.35,
      size: (i % 3) + 1
    })),
    [starCount]
  );

  const particles = useMemo(
    () => Array.from({ length: particleCount }).map((_, i) => ({
      x: (i * 41) % 100,
      y: (i * 23) % 100,
      d: (i % 7) * 0.4,
      s: 6 + (i % 5) * 2
    })),
    [particleCount]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      {/* Shared subtle star field */}
      <div className="absolute inset-0 opacity-40">
        <div className="stars" />
      </div>

      {/* Extra twinkles */}
      <div className="absolute inset-0 twinkle-layer">
        {baseStars.map((s, idx) => (
          <span
            key={idx}
            className="star-dot"
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          />
        ))}
      </div>

      {/* Sky themes cross-fade */}
      <AnimatePresence mode="popLayout">
        {Object.values(themeDefs).map((conf) => (
          <motion.div
            key={conf.id + (conf.id === sky)}
            initial={{ opacity: conf.id === sky ? 0 : 0 }}
            animate={{ opacity: conf.id === sky ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {/* Thematic gradient veil */}
            <div className={`absolute inset-0 bg-gradient-to-b ${conf.gradient}`} />

            {/* Thematic floating particles */}
            {!prefersReduced && (
              <div className="absolute inset-0">
                {particles.map((p, i) => (
                  <motion.span
                    key={i}
                    className="rounded-full blur-2xl opacity-30"
                    style={{
                      position: 'absolute',
                      left: `${p.x}%`,
                      top: `${p.y}%`,
                      width: p.s * 14,
                      height: p.s * 14,
                      background: conf.glow
                    }}
                    animate={{
                      x: [0, 8, -6, 0],
                      y: [0, -10, 6, 0]
                    }}
                    transition={{ duration: 10 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: p.d }}
                  />
                ))}
              </div>
            )}

            {/* Bottom fade to ensure contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0B16]" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
