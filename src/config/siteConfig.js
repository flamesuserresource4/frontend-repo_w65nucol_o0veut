// Central config for theme, behavior, and content mapping
export const theme = {
  colors: {
    midnight: '#0E0B16',
    nebula: '#301934',
    cyan: '#00E5FF',
    green: '#0B6E4F',
    violet: '#9D4EDD'
  },
  typography: {
    heading: 'Orbitron, Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
  }
};

export const behavior = {
  // Navbar behavior
  navbar: {
    autoHide: true, // hide on scroll down, show on scroll up
    showProgressBar: true,
    offset: 72 // px offset for smooth scrolling anchors
  },
  // Scrolling experience
  scroll: {
    snap: false, // set to true to enable section snap-scrolling
    threshold: 0.5, // IntersectionObserver threshold
    rootMargin: '0px'
  },
  // Performance toggles
  performance: {
    particlesDesktop: 36,
    particlesMobile: 14,
    baseStars: 80,
    reduceMotionParticles: 6 // when prefers-reduced-motion
  }
};

// Map sections to universe sky themes
export const sectionSkyMap = {
  top: 'cosmos', // Hero
  about: 'cosmos',
  identity: 'cosmos',
  skills: 'nebula',
  projects: 'galaxy',
  gaming: 'starcluster',
  vision: 'aurora',
  contact: 'deepspace'
};

// Copy strings centralization (easy to tweak)
export const copy = {
  hero: {
    title: 'Nilesh Chavan',
    subtitle: 'Full-Stack Developer • Debugging Expert • Aspiring Software Architect',
    tagline: 'Cosmic • Gaming • Technology',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Download Resume (PDF)',
    note: 'Prefer dark mode — toggle in header'
  }
};
