import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeHash, setActiveHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About Us', href: '#/about' },
    { name: 'Services', href: '#/services' },
    { name: 'Portfolio', href: '#/portfolio' },
    { name: 'Contact Us', href: '#/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: isScrolled ? '15px 8%' : '30px 8%',
          background: isScrolled ? 'rgba(4, 4, 8, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-bottom 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '24px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            PageNotFound
            <span style={{ color: 'var(--accent-purple)', marginLeft: '1px' }}>.</span>
          </motion.div>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href || (link.href === '#/' && (activeHash === '' || activeHash === '#/'));
            return (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                style={{
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                  fontFamily: 'var(--font-display)',
                  borderBottom: isActive ? '1px solid var(--accent-purple)' : '1px solid transparent',
                  paddingBottom: '2px'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                {link.name}
              </motion.a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <motion.a
            href="#/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium btn-premium-primary desktop-btn"
            style={{
              padding: '10px 20px',
              fontSize: '13px',
              gap: '6px',
            }}
          >
            Book a Strategy Call <ArrowRight size={14} />
          </motion.a>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'none',
              padding: '4px',
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(4, 4, 8, 0.98)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {navLinks.map((link, idx) => {
              const isActive = activeHash === link.href || (link.href === '#/' && (activeHash === '' || activeHash === '#/'));
              return (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {link.name}
                </motion.a>
              );
            })}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
              href="#/contact"
              onClick={() => setIsOpen(false)}
              className="btn-premium btn-premium-primary"
              style={{ marginTop: '16px', gap: '8px' }}
            >
              Book a Strategy Call <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styling for Responsive Navbar */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-btn {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
