import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0B16]/50 via-[#0E0B16]/60 to-[#0E0B16] pointer-events-none" />

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
