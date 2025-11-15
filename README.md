# Nilesh Chavan — Cosmic Portfolio (React + Vite)

Bold, stylish, and cosmic-themed portfolio with a living universe background that morphs as you scroll. Built with React, Tailwind CSS, Framer Motion, and Spline.

Live preview (dev): use the preview URL provided by the environment.

## Features
- Scroll-driven universe: background transitions between Cosmos, Nebula, Galaxy, Star Cluster, Aurora, and Deep Space per active section.
- Animated navbar: transparent to glass on scroll, neon underlines, orbiting active indicator, mobile hamburger morph, auto-hide on scroll down, progress bar.
- Parallax hero with 3D Spline scene, stars, aurora, orbs, and constellations.
- Accessible: semantic sections, keyboard focus styles, ARIA labels, prefers-reduced-motion support.
- Responsive: tuned for mobile, tablet, desktop. Particle density auto-reduces on mobile.
- Exportables: placeholder resume PDF, favicon, and image placeholders.

## Tech
- React (Vite)
- Tailwind CSS
- Framer Motion
- Lucide Icons
- @splinetool/react-spline

## Getting Started

1. Install
```
npm install
```

2. Run dev server
```
npm run dev
```

3. Build for production
```
npm run build
```

4. Preview build
```
npm run preview
```

## Configuration
All key knobs are centralized in `src/config/siteConfig.js`:

- behavior.navbar.autoHide: boolean — hide on scroll down, show on scroll up
- behavior.navbar.showProgressBar: boolean — toggles top progress indicator
- behavior.navbar.smoothScrollOffset: number — anchor offset in px
- behavior.performance.particlesDesktop / particlesMobile / baseStars / reduceOnMobile
- behavior.snapScrolling: boolean — enable section snap scrolling (see notes below)
- mapping: section id -> sky theme (cosmos | nebula | galaxy | starCluster | aurora | deepSpace)
- colors: palette tokens
- brand/seo: strings

## Section → Sky Mapping
Default mapping in `siteConfig`:
- about → cosmos
- identity → cosmos
- skills → nebula
- projects → galaxy
- gaming → starCluster
- vision → aurora
- contact → deepSpace

Change mapping values and the ScrollUniverseController will adapt automatically.

## Accessibility
- Visible focus outlines on nav links and controls
- ARIA labels for icons and glyphs
- Reduced motion: motion fades and particles disabled when `prefers-reduced-motion` is set
- Keyboard navigable menu; hamburger button exposes menu via aria-expanded and aria-controls

## Performance Tuning
- Particle counts: update `behavior.performance` in `siteConfig`
- Mobile reductions: set `reduceOnMobile` true|false
- Transition durations: adjust in `UniverseBackground` (0.8s default fade)
- Image assets: replace placeholders in components with responsive images and `loading="lazy"`

## Optional: Snap Scrolling Tour
Set `behavior.snapScrolling = true` in `siteConfig`, then add this to `src/index.css` or a layout wrapper:

```
html, body { height: 100%; }
main { scroll-snap-type: y mandatory; }
section { scroll-snap-align: start; }
```

You may adjust `mandatory` to `proximity` for less strict snapping.

## Assets & Resume
- Replace `public/resume.pdf` with your actual resume.
- Favicon at `public/favicon.svg`.

## SEO
Update index.html meta tags:
- Title: "Nilesh Chavan — Full-Stack Developer & Aspiring Software Architect"
- Description: "Full-Stack Developer | Debugging expert | Micro-frontends | Building for AI/ML. Cosmic-themed portfolio."

## Deploy
- Vercel/Netlify: build command `npm run build`, output `dist/`.
- Static export can be hosted on any CDN.

## Where to tweak animations
- Background crossfade: `UniverseBackground` transition duration/ease
- Particle sizes and paths: `UniverseBackground` particles array
- Navbar hover underline and active indicator styles in `Navbar`

## License
Personal portfolio — you can adapt for your own use.
