import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Import Custom Interactive Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1.2,
      lerp: 0.08
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Keep Lenis updated on window size changes
    const handleResize = () => lenis.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  // Monitor hash changes for custom routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    // Trigger initial check
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentHash) {
      case '#/about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <AboutUs />
          </motion.div>
        );
      case '#/services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Services />
          </motion.div>
        );
      case '#/portfolio':
        return (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Portfolio />
          </motion.div>
        );
      case '#/contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactUs />
          </motion.div>
        );
      case '#/':
      default:
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Home />
          </motion.div>
        );
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Floating navigation header */}
      <Header />

      {/* Cinematic noise layer across entire website */}
      <div className="noise-overlay" />

      {/* Dynamic page transition view wrapper */}
      <main style={{ flexGrow: 1, width: '100%' }}>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* ================= LUXURY FOOTER ================= */}
      <Footer />
    </div>
  );
}
