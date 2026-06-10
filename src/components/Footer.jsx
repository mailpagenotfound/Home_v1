import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const canvasRef = useRef(null);

  // Subtle floating background particles in footer
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = canvas.clientWidth;
    let height = canvas.height = canvas.clientHeight;
    
    const particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height + height, // Start from bottom
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.45})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animId = requestAnimationFrame(render);
    };
    
    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const footerLinks = {
    Services: [
      { name: "Search Architecture", href: "#/services" },
      { name: "Intent Funnels", href: "#/services" },
      { name: "Visual Systems", href: "#/services" },
      { name: "Headless Engineering", href: "#/services" },
      { name: "Operational Sync", href: "#/services" }
    ],
    Company: [
      { name: "Discovery Journey", href: "#/services" },
      { name: "Architecture Audit", href: "#/about" }
    ],
    Social: [
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        )
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        )
      },
      {
        name: "GitHub",
        href: "https://github.com",
        icon: (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        )
      },
      {
        name: "Dribbble",
        href: "https://dribbble.com",
        icon: (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        )
      }
    ]
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        position: 'relative',
        padding: '100px 8% 40px 8%',
        borderTop: '1px solid var(--border-dark)',
        overflow: 'hidden'
      }}
    >
      {/* Background Canvas Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Links Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}
        >
          {/* Brand info column */}
          <div style={{ gridColumn: 'span 2' }} className="brand-col">
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 900,
              color: 'var(--text-dark)',
              letterSpacing: '-0.03em',
              marginBottom: '16px'
            }}>
              PageNotFound<span style={{ color: 'var(--accent-purple)' }}>.</span>
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-dark-sub)',
              maxWidth: '300px',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              Engineering structural digital visibility, semantic index architectures, visual systems, and connected pipelines.
            </p>
            {/* Social Icons row */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {footerLinks.Social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-dark)',
                    textDecoration: 'none'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div>
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
              Capabilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.Services.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{ fontSize: '14px', color: 'var(--text-dark-sub)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-dark)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-dark-sub)')}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 2: Company */}
          <div>
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dark)', fontWeight: 600, marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
              Explore
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.Company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{ fontSize: '14px', color: 'var(--text-dark-sub)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-dark)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-dark-sub)')}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Big Brand Typography Statement */}
        <div style={{
          borderTop: '1px solid var(--border-dark)',
          paddingTop: '60px',
          paddingBottom: '45px',
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible'
        }}>
          {/* Large brand background logo */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(40px, 10vw, 140px)',
              letterSpacing: '-0.05em',
              color: 'rgba(255, 255, 255, 0.015)',
              margin: '0',
              textTransform: 'uppercase',
              userSelect: 'none',
              pointerEvents: 'none',
              lineHeight: 1.0,
              whiteSpace: 'nowrap',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            PAGENOTFOUND
          </h1>
        </div>

        {/* Sub-bar footer info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '12px',
            color: 'var(--text-dark-sub)',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div>
            © {new Date().getFullYear()} PageNotFound. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#/" style={{ color: 'var(--text-dark-sub)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = 'var(--text-dark)')} onMouseLeave={(e) => (e.target.style.color = 'var(--text-dark-sub)')}>Privacy Policy</a>
            <a href="#/" style={{ color: 'var(--text-dark-sub)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = 'var(--text-dark)')} onMouseLeave={(e) => (e.target.style.color = 'var(--text-dark-sub)')}>Terms of Service</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .brand-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
