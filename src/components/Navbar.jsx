import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const links = [
  { href: '#top', label: 'Home', id: 'top' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#gaming', label: 'Gaming', id: 'gaming' },
  { href: '#vision', label: 'Vision', id: 'vision' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const behavior = siteConfig.behavior;
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState('top');
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // theme init
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', enableDark);
    setDarkMode(enableDark);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  // Active link sync
  useEffect(() => {
    const ids = links.map(l=>l.id);
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach((en)=>{
        if(en.isIntersecting){
          const id = en.target.id;
          if(ids.includes(id)) setActive(id);
        }
      })
    }, { threshold: 0.6 });
    ids.forEach((id)=>{ const el = document.getElementById(id); if(el) obs.observe(el); });
    return ()=>{ obs.disconnect(); };
  }, []);

  // Auto hide on scroll
  useEffect(() => {
    if (!behavior.navbar.autoHide) return;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current && y > 120;
      setHidden(goingDown);
      lastY.current = y;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [behavior.navbar.autoHide]);

  // Smooth scroll with offset
  useEffect(() => {
    const onClick = (e) => {
      const t = e.target.closest('a[href^="#"]');
      if (!t) return;
      const id = t.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - (siteConfig.behavior.navbar.smoothScrollOffset || 0);
      window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
      setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [prefersReduced]);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-transform ${hidden ? '-translate-y-full' : 'translate-y-0'}`} aria-label="Primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-lg" role="navigation" aria-label="Main">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group flex items-center gap-2" aria-label="Go to top">
              {/* Animated cosmic glyph */}
              <span aria-hidden className={`relative inline-flex h-7 w-7 rounded-full border border-cyan-300/40 shadow-[0_0_12px_rgba(0,229,255,0.45)] bg-gradient-to-br from-[#00E5FF]/30 to-[#301934]/40 ${!prefersReduced ? 'transition-transform group-hover:rotate-6 group-hover:scale-110' : ''}`}></span>
              <span className="text-cyan-300 font-orbitron tracking-widest text-sm sm:text-base group-hover:text-cyan-200 transition-colors">NILESH CHAVAN</span>
            </a>
            <div className="flex items-center gap-1 sm:gap-2">
              <a href="https://github.com/nilesh-0608" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nilesh-chavan-7a4920176/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/nil.0608/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className={`sm:hidden p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-transform ${open ? 'rotate-90' : ''}`} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                {/* Hamburger morph */}
                <span className="block w-5 h-[2px] bg-current mb-[5px] transition-all" style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
                <span className="block w-5 h-[2px] bg-current mb-[5px] transition-opacity" style={{ opacity: open ? 0 : 1 }} />
                <span className="block w-5 h-[2px] bg-current transition-all" style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
              </button>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-6 px-6 pb-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={`nav-link relative uppercase tracking-widest text-xs text-cyan-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 ${active===l.id ? 'text-white' : ''}`} aria-current={active===l.id ? 'page' : undefined}>
                {l.label}
                {/* neon underline from center */}
                <span aria-hidden className={`absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-[2px] w-0 bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-all duration-200 ${active===l.id ? 'w-full' : 'group-hover:w-full'}`}></span>
                {/* orbiting particle indicator */}
                {active===l.id && <span aria-hidden className="absolute -right-3 -top-2 h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-ping"></span>}
              </a>
            ))}
          </div>
          {open && (
            <div id="mobile-menu" className="sm:hidden grid grid-cols-2 gap-3 px-4 pb-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="uppercase tracking-widest text-xs text-cyan-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1">
                  {l.label}
                </a>
              ))}
            </div>
          )}
          {behavior.navbar.showProgressBar && (
            <div className="h-[2px] bg-white/10">
              <div className="h-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" style={{ width: `${progress}%` }} aria-hidden></div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
