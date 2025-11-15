import { useEffect, useState } from 'react';
import { Menu, Sun, Moon, Github, Linkedin, Instagram } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#identity', label: 'Cosmic Identity' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#gaming', label: 'Gaming Mindset' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

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

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="text-cyan-300 font-orbitron tracking-widest text-lg sm:text-xl hover:text-cyan-200 transition-colors">
              NILESH CHAVAN
            </a>
            <div className="flex items-center gap-2">
              {/* Keep GitHub icon for quick access if needed; link can be updated later */}
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nilesh-chavan-7a4920176/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/nil.0608/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Instagram size={18} />
              </a>
              <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200 transition-colors">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="sm:hidden p-2 rounded-lg hover:bg-white/10 text-cyan-300 hover:text-cyan-200" onClick={() => setOpen(!open)}>
                <Menu size={20} />
              </button>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-6 px-6 pb-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="uppercase tracking-widest text-xs text-cyan-200 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          {open && (
            <div className="sm:hidden grid grid-cols-2 gap-3 px-4 pb-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="uppercase tracking-widest text-xs text-cyan-200 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
