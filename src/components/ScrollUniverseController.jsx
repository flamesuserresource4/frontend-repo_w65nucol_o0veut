import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

// Emits custom events based on section visibility
// - 'skychange' with detail: string (sky name)
// - 'sectionchange' with detail: string (section id)
export default function ScrollUniverseController() {
  useEffect(() => {
    const mapping = siteConfig.mapping;
    const sectionThemes = Object.keys(mapping).map((id) => ({ id, sky: mapping[id] }));

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const opts = { root: null, rootMargin: '0px', threshold: prefersReduced ? 0.4 : 0.55 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const cfg = sectionThemes.find((s) => s.id === e.target.id);
          if (cfg) {
            // Maintain backward-compat string detail for skychange
            window.dispatchEvent(new CustomEvent('skychange', { detail: cfg.sky }));
            window.dispatchEvent(new CustomEvent('sectionchange', { detail: cfg.id }));
          }
        }
      });
    }, opts);

    sectionThemes.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // default on load
    window.dispatchEvent(new CustomEvent('skychange', { detail: mapping.about || 'cosmos' }));
    window.dispatchEvent(new CustomEvent('sectionchange', { detail: 'about' }));

    return () => observer.disconnect();
  }, []);

  return null;
}
