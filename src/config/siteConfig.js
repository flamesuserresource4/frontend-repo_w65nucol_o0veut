// Centralized configuration for brand, behavior, performance, and section→sky mapping

export const siteConfig = {
  brand: {
    name: 'Nilesh Chavan',
    tagline: 'Cosmic • Gaming • Technology',
  },
  behavior: {
    // Navbar controls
    navbar: {
      autoHide: false,
      showProgressBar: true,
      // Used by smooth anchor scrolling to offset for sticky header height
      smoothScrollOffset: 80,
    },
    // Enable/disable CSS scroll snap for sections
    snapScrolling: true,
    // Performance tuning
    performance: {
      particlesDesktop: 28,
      particlesMobile: 10,
      baseStars: 60,
      reduceOnMobile: true,
    },
  },
  // Map page sections to background sky themes
  // Valid sky ids: 'cosmos', 'nebula', 'galaxy', 'starCluster', 'aurora', 'deepSpace'
  mapping: {
    top: 'cosmos',
    about: 'cosmos',
    identity: 'cosmos',
    skills: 'nebula',
    projects: 'galaxy',
    gaming: 'starCluster',
    vision: 'aurora',
    contact: 'deepSpace',
  },
};

export default siteConfig;
