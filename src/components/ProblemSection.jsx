import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProblemSection() {
  const containerRef = useRef(null);

  // Monitor scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Statement 1 Transforms (Progress 0.0 -> 0.33)
  const op1A = useTransform(scrollYProgress, [0.0, 0.08, 0.22, 0.3], [0, 1, 1, 0]);
  const y1A = useTransform(scrollYProgress, [0.0, 0.08, 0.22, 0.3], [20, 0, 0, -20]);
  
  const op1B = useTransform(scrollYProgress, [0.1, 0.18, 0.22, 0.3], [0, 1, 1, 0]);
  const y1B = useTransform(scrollYProgress, [0.1, 0.18, 0.22, 0.3], [20, 0, 0, -20]);

  // Statement 2 Transforms (Progress 0.33 -> 0.66)
  const op2A = useTransform(scrollYProgress, [0.33, 0.41, 0.55, 0.63], [0, 1, 1, 0]);
  const y2A = useTransform(scrollYProgress, [0.33, 0.41, 0.55, 0.63], [20, 0, 0, -20]);
  
  const op2B = useTransform(scrollYProgress, [0.43, 0.51, 0.55, 0.63], [0, 1, 1, 0]);
  const y2B = useTransform(scrollYProgress, [0.43, 0.51, 0.55, 0.63], [20, 0, 0, -20]);

  // Statement 3 Transforms (Progress 0.66 -> 1.0)
  const op3A = useTransform(scrollYProgress, [0.66, 0.74, 0.88, 0.96], [0, 1, 1, 0]);
  const y3A = useTransform(scrollYProgress, [0.66, 0.74, 0.88, 0.96], [20, 0, 0, -20]);
  
  const op3B = useTransform(scrollYProgress, [0.76, 0.84, 0.88, 0.96], [0, 1, 1, 0]);
  const y3B = useTransform(scrollYProgress, [0.76, 0.84, 0.88, 0.96], [20, 0, 0, -20]);

  // Parallax shifts for the misty road/forest background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const bgFilter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["blur(15px) brightness(22%) contrast(98%) opacity(40%)", "blur(8px) brightness(18%) contrast(100%) opacity(40%)", "blur(15px) brightness(22%) contrast(98%) opacity(40%)"]
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '220vh', // Sets scroll length for the sticky track
        backgroundColor: 'var(--bg-dark)',
      }}
      id="problem"
    >
      {/* Scroll-Parallax Misty Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <motion.img
          src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1600&q=80"
          alt="Obscurity in the digital wilderness"
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            position: 'absolute',
            top: '-10%',
            left: 0,
            y: bgY,
            scale: bgScale,
            filter: bgFilter
          }}
        />
        {/* Cinematic vignette & blend overlays */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(2, 2, 4, 0.4) 0%, rgba(2, 2, 4, 0.95) 100%)',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '25%',
          background: 'linear-gradient(to bottom, var(--bg-dark) 0%, rgba(2, 2, 4, 0) 100%)',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '25%',
          background: 'linear-gradient(to top, var(--bg-dark) 0%, rgba(2, 2, 4, 0) 100%)',
          zIndex: 1
        }} />
      </div>

      {/* Sticky container that remains fixed while the user scrolls */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 8%',
          overflow: 'hidden',
          zIndex: 2 // Sit above background
        }}
      >
        {/* Glow background details */}
        <div 
          className="glow-spot" 
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, rgba(250, 250, 249, 0) 60%)',
            width: '800px',
            height: '800px',
            zIndex: 1
          }} 
        />

        {/* Outer Frame Wrapper */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
          
          {/* Scroll Indicator Subtext */}
          <motion.p
            style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--accent-purple)',
              marginBottom: '32px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.8, 0.8, 0.8, 0])
            }}
          >
            The Silent Struggle
          </motion.p>

          {/* Statement Container */}
          <div style={{ position: 'relative', height: '300px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            {/* Pair 1: Website & Search */}
            <div style={{ position: 'absolute', width: '100%' }}>
              <motion.h2
                style={{
                  opacity: op1A,
                  y: y1A,
                  fontSize: 'clamp(28px, 4.5vw, 54px)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-dark)',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                "You spend $20,000 on a custom visual template..."
              </motion.h2>
              <motion.h2
                style={{
                  opacity: op1B,
                  y: y1B,
                  fontSize: 'clamp(32px, 5.5vw, 68px)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: '#ef4444',
                  lineHeight: 1.1,
                  textShadow: '0 0 25px rgba(239, 68, 68, 0.35)'
                }}
              >
                But search engines don't even know you exist.
              </motion.h2>
            </div>

            {/* Pair 2: Ads & Conversion */}
            <div style={{ position: 'absolute', width: '100%' }}>
              <motion.h2
                style={{
                  opacity: op2A,
                  y: y2A,
                  fontSize: 'clamp(28px, 4.5vw, 54px)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-dark)',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                "You hire an agency and get lists of target keywords..."
              </motion.h2>
              <motion.h2
                style={{
                  opacity: op2B,
                  y: y2B,
                  fontSize: 'clamp(32px, 5.5vw, 68px)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: '#f59e0b',
                  lineHeight: 1.1,
                  textShadow: '0 0 25px rgba(245, 158, 11, 0.35)'
                }}
              >
                But your organic traffic doesn't actually budge.
              </motion.h2>
            </div>

            {/* Pair 3: Content & Engagement */}
            <div style={{ position: 'absolute', width: '100%' }}>
              <motion.h2
                style={{
                  opacity: op3A,
                  y: y3A,
                  fontSize: 'clamp(28px, 4.5vw, 54px)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-dark)',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                "You write blogs, share posts, and publish code..."
              </motion.h2>
              <motion.h2
                style={{
                  opacity: op3B,
                  y: y3B,
                  fontSize: 'clamp(32px, 5.5vw, 68px)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: '#ec4899',
                  lineHeight: 1.1,
                  textShadow: '0 0 25px rgba(236, 72, 153, 0.35)'
                }}
              >
                But your booking calendar remains completely silent.
              </motion.h2>
            </div>

          </div>

          {/* Subtext reveal at the bottom */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.88, 0.96], [0, 1]),
              y: useTransform(scrollYProgress, [0.88, 0.96], [20, 0]),
              marginTop: '48px',
              fontSize: '17px',
              color: 'var(--text-dark-sub)',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}
          >
            Digital obscurity is a silent tax on great products. If your target customers are searching for your solutions and finding your competitors instead, you are losing pipeline every day. We started PageNotFound to solve this exact problem: engineering custom code that commands rank and drives active inquiries.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
