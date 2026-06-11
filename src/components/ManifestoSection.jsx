import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ManifestoSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the storytelling image
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Expanding cinematic clip-path reveal on scroll
  const clipPathVal = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    ["inset(15% 15% 15% 15% round 24px)", "inset(0% 0% 0% 0% round 24px)"]
  );

  // Parallax zoom settle
  const imgScale = useTransform(scrollYProgress, [0.05, 0.35], [1.25, 1.0]);

  // Scroll-based depth scaling and movement
  const headingScaleScroll = useTransform(scrollYProgress, [0.3, 0.7], [1.0, 0.96]);
  const imageScaleScroll = useTransform(scrollYProgress, [0.3, 0.7], [1.0, 1.025]);
  const imgScrollY = useTransform(scrollYProgress, [0.3, 0.7], ["0px", "-40px"]);

  // Staggered reveal animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, letterSpacing: '0.15em' },
    visible: {
      opacity: 1,
      letterSpacing: '0.25em',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.0, ease: "easeOut" }
    }
  };

  const paragraphContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={containerRef}
      style={{
        backgroundColor: '#050505',
        padding: '160px 8%',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
      }}
      id="manifesto"
    >
      {/* Background ambient & radial glows */}
      {/* Top ambient lighting */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '400px', 
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.06), rgba(6, 182, 212, 0.02) 50%, transparent 80%)', 
          pointerEvents: 'none', 
          zIndex: 1 
        }} 
      />

      {/* Radial purple glow behind heading area with a slow breathing effect */}
      <motion.div 
        animate={{
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '5%', 
          width: '700px', 
          height: '700px', 
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)', 
          pointerEvents: 'none', 
          zIndex: 1 
        }} 
      />

      {/* Soft cyan glow behind image area */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '10%', 
          right: '5%', 
          width: '700px', 
          height: '700px', 
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)', 
          pointerEvents: 'none', 
          zIndex: 1 
        }} 
      />

      {/* Dark vignette around edges */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(2, 2, 4, 0.4) 100%)', 
          pointerEvents: 'none', 
          zIndex: 1 
        }} 
      />

      {/* Smooth top transition into Hero3D */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '120px', 
          background: 'linear-gradient(to bottom, #020204, transparent)', 
          pointerEvents: 'none', 
          zIndex: 1 
        }} 
      />

      {/* Smooth bottom transition into ProblemSection */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: '120px', 
          background: 'linear-gradient(to top, #020204, transparent)', 
          pointerEvents: 'none', 
          zIndex: 1 
        }} 
      />

      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
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
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div>
              <motion.p 
                variants={labelVariants}
                style={{
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: '#8B5CF6',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}
              >
                Founder Story
              </motion.p>
              <motion.h2 
                variants={headingVariants}
                style={{
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  scale: headingScaleScroll,
                  transformOrigin: 'left center'
                }}
              >
                Why We Started <br />
                <span className="text-reveal">PageNotFound.</span>
              </motion.h2>
            </div>

            {/* Paragraph 1 */}
            <motion.div>
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 600, margin: '0 0 12px 0', fontFamily: 'var(--font-display)' }}
              >
                Why We Started
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                style={{ fontSize: '15px', color: '#B8B8C5', lineHeight: '1.7', margin: '0 0 12px 0' }}
              >
                Before starting PageNotFound, we worked with agencies, startups, and businesses across different industries. Through those experiences, we noticed a common challenge: many small and growing businesses had incredible products and services but little to no effective online presence.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                style={{ fontSize: '15px', color: '#B8B8C5', lineHeight: '1.7', margin: '0 0 12px 0' }}
              >
                Some struggled to get discovered online, while others had websites that looked good but failed to attract customers or generate meaningful business results. Too often, businesses were overwhelmed by complex solutions when what they really needed was a simple, strategic path to building their digital presence.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
                style={{ fontSize: '15px', color: '#B8B8C5', lineHeight: '1.7', margin: '0' }}
              >
                So, we stopped talking about the problem and started building the solution — PageNotFound.
              </motion.p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div>
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 600, margin: '0 0 12px 0', fontFamily: 'var(--font-display)' }}
              >
                Our Mission
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                style={{ fontSize: '15px', color: '#B8B8C5', lineHeight: '1.7', margin: '0 0 12px 0' }}
              >
                We don't just build websites and disappear, we build long-term partnerships. Our mission is to help businesses establish a strong online presence and give them the support they need to grow. From launching your website to making updates, improving performance, adding new features, or adapting to changing business needs, we're here to provide reliable guidance and ongoing support every step of the way.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                style={{ fontSize: '15px', color: '#B8B8C5', lineHeight: '1.7', margin: '0' }}
              >
                We believe professional digital solutions should be accessible and affordable, especially for small and growing businesses. That's why we focus on creating practical, scalable websites that deliver real business value, backed by lifetime support and low-cost maintenance. Our goal isn't just to launch websites, it's to help businesses stay visible, competitive, and ready for growth in the digital world.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Block: Parallax Imagery Panel */}
          <div style={{ position: 'relative' }}>
            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ boxShadow: '0 50px 100px rgba(0, 0, 0, 0.8), 0 0 50px rgba(6, 182, 212, 0.15)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                width: '100%',
                height: '580px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(6, 182, 212, 0.08)',
                clipPath: clipPathVal,
                y: imgScrollY,
                scale: imageScaleScroll
              }}
            >
              {/* Inner Zooming Image Wrapper to keep scroll transforms and hover zoom separate */}
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1.0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
              >
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
              </motion.div>
              {/* Gradient Dark Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(5, 5, 5, 0) 40%, rgba(5, 5, 5, 0.9) 100%)',
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
                  background: 'rgba(10, 10, 15, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <p style={{
                    fontSize: '13px',
                    color: '#8B5CF6',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px'
                  }}>
                    Our Mandate
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#B8B8C5',
                    lineHeight: '1.4',
                    fontStyle: 'italic'
                  }}>
                    "We don't decorate templates. We write high-performance code that connects your brand with active buyers."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Accent Floating Border Detail SVG that draws itself */}
            <svg 
              width="80" 
              height="80" 
              style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '-20px', 
                pointerEvents: 'none' 
              }}
            >
              <motion.path 
                d="M 80 2 L 2 2 L 2 80" 
                stroke="#8B5CF6" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              borderBottom: '2px solid #06B6D4',
              borderRight: '2px solid #06B6D4',
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
