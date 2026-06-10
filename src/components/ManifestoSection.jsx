import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ManifestoSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the storytelling image
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // Opacity transitions for text blocks
  const textOp1 = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0.8]);
  const textOp2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0.8]);
  const textOp3 = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 1]);

  // Expanding cinematic clip-path reveal on scroll
  const clipPathVal = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    ["inset(15% 15% 15% 15% round 24px)", "inset(0% 0% 0% 0% round 24px)"]
  );

  // Parallax zoom settle
  const imgScale = useTransform(scrollYProgress, [0.05, 0.35], [1.25, 1.0]);

  return (
    <section 
      ref={containerRef}
      style={{
        backgroundColor: '#fafaf9',
        padding: '160px 8%',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        borderBottom: '1px solid rgba(24, 24, 27, 0.08)'
      }}
      id="manifesto"
    >
      {/* Background spot light */}
      <div 
        className="glow-spot" 
        style={{ 
          top: '20%', 
          right: '5%', 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, rgba(250, 250, 249, 0) 65%)',
          width: '700px',
          height: '700px'
        }} 
      />

      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Cinematic Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}
        className="manifesto-grid"
        >
          {/* Left Block: The Narrative Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div>
              <p style={{
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'var(--accent-purple)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                Founder Story
              </p>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
                color: 'var(--text-light)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}>
                Why We Started <br />
                <span className="text-reveal-light">PageNotFound.</span>
              </h2>
            </div>

            {/* Paragraph 1 */}
            <motion.div style={{ opacity: textOp1, y: 0 }} transition={{ duration: 0.8 }}>
              <h4 style={{ fontSize: '18px', color: 'var(--text-light)', fontWeight: 600, marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                1. The WordPress / Template Trap
              </h4>
              <p style={{ fontSize: '15px', color: 'var(--text-light-sub)', lineHeight: '1.7' }}>
                We saw countless founders build extraordinary products, spend $20,000 on visual mockups, and launch them on bloated WordPress or Webflow templates. To the human eye, it looked gorgeous. To search engine indexing crawlers, it was a slow, unreadable mess of script tags and layout shifts. We started PageNotFound to build custom Web/React spaces from the ground up, designed to be crawled instantly.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div style={{ opacity: textOp2 }} transition={{ duration: 0.8 }}>
              <h4 style={{ fontSize: '18px', color: 'var(--text-light)', fontWeight: 600, marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                2. SEO is Software Engineering
              </h4>
              <p style={{ fontSize: '15px', color: 'var(--text-light-sub)', lineHeight: '1.7' }}>
                Most agencies send lists of target keywords and PDF reports while ignoring broken sitemaps, rendering errors, and poor core web vitals. We believe SEO is a software engineering discipline, not a copy-paste marketing checklist. If your code is fast, clean, and semantically logical, rankings follow naturally.
              </p>
            </motion.div>

            {/* Paragraph 3 */}
            <motion.div style={{ opacity: textOp3 }} transition={{ duration: 0.8 }}>
              <h4 style={{ fontSize: '18px', color: 'var(--text-light)', fontWeight: 600, marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                3. Pipelines Over Spreadsheets
              </h4>
              <p style={{ fontSize: '15px', color: 'var(--text-light-sub)', lineHeight: '1.7' }}>
                We don't sell vanity impressions or search volume spikes that don't convert. We measure success by organic pipeline value, conversion rate optimization, and active sales calls booked. We run lean, custom, and transparent—connecting your web traffic directly to your sales pipeline.
              </p>
            </motion.div>
          </div>

          {/* Right Block: Parallax Imagery Panel */}
          <div style={{ position: 'relative' }}>
            {/* Main Image Container */}
            <motion.div style={{
              width: '100%',
              height: '580px',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(24, 24, 27, 0.08)',
              boxShadow: '0 40px 80px rgba(24, 24, 27, 0.08)',
              clipPath: clipPathVal
            }}>
              {/* Parallax Image */}
              <motion.img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="PageNotFound custom creative workspace"
                style={{
                  width: '100%',
                  height: '130%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  y: imgY,
                  scale: imgScale,
                  filter: 'grayscale(40%) contrast(105%) brightness(95%)'
                }}
              />
              {/* Gradient Dark Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(250,250,249,0) 40%, rgba(250,250,249,0.9) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Float Overlay Card inside image */}
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px',
                zIndex: 3
              }}>
                <div className="glass-panel" style={{
                  padding: '24px',
                  background: 'rgba(250, 250, 249, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(24, 24, 27, 0.08)'
                }}>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--accent-purple)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px'
                  }}>
                    Our Mandate
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-light)',
                    lineHeight: '1.4',
                    fontStyle: 'italic'
                  }}>
                    "We don't decorate templates. We write high-performance code that connects your brand with active buyers."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Accent Floating Border Detail */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '80px',
              height: '80px',
              borderTop: '2px solid var(--accent-purple)',
              borderLeft: '2px solid var(--accent-purple)',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              borderBottom: '2px solid var(--accent-cyan)',
              borderRight: '2px solid var(--accent-cyan)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>

      </div>

      {/* Responsive adjustments styles */}
      <style>{`
        @media (max-width: 900px) {
          .manifesto-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
