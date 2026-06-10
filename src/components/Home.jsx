import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Send, CheckCircle } from 'lucide-react';

// Import Custom Interactive Components
import Hero3D from './Hero3D';
import ManifestoSection from './ManifestoSection';
import ProblemSection from './ProblemSection';
import DiscoveryJourney from './DiscoveryJourney';
import ProcessSection from './ProcessSection';
export default function Home() {
  const ctaRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Monitor scroll for CTA light-to-dark transition
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end end"]
  });

  // Smoothly interpolate background color from off-white (#fafaf9) to cinematic black (#020204)
  const ctaBg = useTransform(scrollYProgress, [0.1, 0.7], ["#fafaf9", "#020204"]);
  // Transition text color from deep charcoal to white
  const ctaText = useTransform(scrollYProgress, [0.1, 0.7], ["#18181b", "#ffffff"]);
  // Transition subtext color from deep zinc to light zinc-gray
  const ctaSubText = useTransform(scrollYProgress, [0.1, 0.7], ["#52525b", "#a1a1aa"]);
  // Transition input border from soft gray to translucent white
  const ctaInputBorder = useTransform(scrollYProgress, [0.1, 0.7], ["rgba(24, 24, 27, 0.1)", "rgba(255, 255, 255, 0.12)"]);
  // Transition glass container backgrounds and borders
  const ctaGlassBg = useTransform(scrollYProgress, [0.1, 0.7], ["rgba(24, 24, 27, 0.015)", "rgba(255, 255, 255, 0.03)"]);
  const ctaBorderColor = useTransform(scrollYProgress, [0.1, 0.7], ["rgba(24, 24, 27, 0.08)", "rgba(255, 255, 255, 0.08)"]);
  const ctaInputBg = useTransform(scrollYProgress, [0.1, 0.7], ["rgba(24, 24, 27, 0.01)", "rgba(255, 255, 255, 0.02)"]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ================= PREMIUM 3D SHADER HERO SECTION ================= */}
      <Hero3D />

      {/* ================= MANIFESTO SECTION ================= */}
      <ManifestoSection />

      {/* ================= STORYTELLING PROBLEM SECTION ================= */}
      <ProblemSection />

      {/* ================= IMMERSIVE 3D DIGITAL DISCOVERY JOURNEY ================= */}
      <DiscoveryJourney />

      {/* ================= PROCESS NARRATIVE TIMELINE ================= */}
      <ProcessSection />



      {/* ================= FINAL CTA / THEME TRANSITION ================= */}
      <motion.section
        ref={ctaRef}
        style={{
          background: ctaBg,
          color: ctaText,
          padding: '140px 8%',
          position: 'relative',
          zIndex: 2,
          transition: 'color 0.4s ease',
        }}
        id="contact"
      >
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8%', alignItems: 'center' }} className="cta-split">
          
          {/* Left Block */}
          <div style={{ flex: 1.1 }}>
            <motion.p
              style={{
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--accent-purple)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Begin the Journey
            </motion.p>
            
            <motion.h2
              style={{
                fontSize: 'clamp(32px, 6vw, 64px)',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Ready To Be Seen?
            </motion.h2>
            
            <motion.p
              style={{
                fontSize: '17px',
                color: ctaSubText,
                lineHeight: '1.6',
                marginBottom: '40px',
                maxWidth: '500px',
              }}
            >
              Let's craft an online presence that search engines index cleanly and customers navigate with confidence. Start a conversation or outline your objectives below.
            </motion.p>

            {/* Quick trust indicators */}
            <div style={{ display: 'flex', gap: '32px' }}>
              <div>
                <span style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>Zero</span>
                <span style={{ fontSize: '12px', display: 'block', color: 'var(--accent-purple)', fontWeight: 600 }}>Templates Used</span>
              </div>
              <div style={{ borderLeft: '1px solid rgba(24, 24, 27, 0.1)', paddingLeft: '32px' }} className="cta-stat-border">
                <span style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>Clean</span>
                <span style={{ fontSize: '12px', display: 'block', color: 'var(--accent-purple)', fontWeight: 600 }}>Crawl Architectures</span>
              </div>
            </div>
          </div>

          {/* Right Block: Booking Form */}
          <motion.div
            className="glass-panel"
            style={{
              flex: 1,
              padding: '40px',
              background: ctaGlassBg,
              borderColor: ctaBorderColor,
              borderRadius: '20px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'var(--accent-emerald)' }}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>Project Request Received</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light-sub)' }}>
                  We'll review your details and connect within 24 hours. Get ready to grow.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px' }} className="form-row">
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600 }}>Name</label>
                    <motion.input
                      required
                      type="text"
                      placeholder="John Doe"
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        background: ctaInputBg,
                        border: '1px solid',
                        borderColor: ctaInputBorder,
                        color: 'inherit',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600 }}>Company</label>
                    <motion.input
                      required
                      type="text"
                      placeholder="Apex Corp"
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        background: ctaInputBg,
                        border: '1px solid',
                        borderColor: ctaInputBorder,
                        color: 'inherit',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600 }}>Email Address</label>
                  <motion.input
                    required
                    type="email"
                    placeholder="john@example.com"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: ctaInputBg,
                      border: '1px solid',
                      borderColor: ctaInputBorder,
                      color: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600 }}>Primary Focus Area</label>
                  <motion.select
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: ctaInputBg,
                      border: '1px solid',
                      borderColor: ctaInputBorder,
                      color: 'inherit',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="seo">Search Index Architecture (Crawlability)</option>
                    <option value="ppc">Intent Acquisition (Funnels & Campaigns)</option>
                    <option value="brand">Visual Authority Systems (Design & Coherence)</option>
                    <option value="web">Headless Web Engineering (React & Speeds)</option>
                    <option value="automation">Connected Operations (Workflows & API)</option>
                  </motion.select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600 }}>Tell Us About Your Project</label>
                  <motion.textarea
                    rows={4}
                    placeholder="Briefly describe what you would like to build or automate..."
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: ctaInputBg,
                      border: '1px solid',
                      borderColor: ctaInputBorder,
                      color: 'inherit',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium btn-premium-primary"
                  style={{
                    padding: '14px 0',
                    width: '100%',
                    gap: '8px',
                    backgroundColor: 'var(--accent-purple)',
                    color: '#ffffff',
                    marginTop: '8px',
                    boxShadow: '0 10px 20px rgba(139, 92, 246, 0.2)'
                  }}
                >
                  Initiate Strategy Consultation <Send size={14} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Responsive splits adjustments */}
      <style>{`
        @media (max-width: 900px) {
          .cta-split {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .cta-stat-border {
            border-left: none !important;
            padding-left: 0 !important;
            margin-top: 16px;
          }
          .form-row {
            flex-direction: column !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
