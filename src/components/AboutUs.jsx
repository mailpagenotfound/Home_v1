import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, ArrowRight, CornerDownRight } from 'lucide-react';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-dark)',
        minHeight: '100vh',
        paddingTop: '160px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {/* Background ambient glows */}
      <div className="glow-spot" style={{ top: '-10%', left: '20%', opacity: 0.6 }} />
      <div className="glow-spot" style={{ bottom: '-10%', right: '10%', opacity: 0.4, background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(2, 2, 4, 0) 70%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8%' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '100px' }}>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--accent-purple)',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <CornerDownRight size={14} /> Who We Are
          </motion.p>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              maxWidth: '900px'
            }}
          >
            We Are the Link Between <span className="text-gradient-purple-blue">Invisibility</span> and <span className="text-gradient-cyan-emerald">Authority</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              color: 'var(--text-dark-sub)',
              lineHeight: '1.6',
              maxWidth: '800px',
              fontWeight: 400
            }}
          >
            In a digital universe where billions of queries are submitted every second, most businesses remain hidden behind dead links, slow load times, and poor crawl architectures. 
            We named ourselves <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>PageNotFound</span> as a reminder of what happens when strategy and technical execution are ignored. We build the pipelines that make you discoverable.
          </motion.p>
        </div>

        {/* Narrative / Philosophy section */}
        <motion.div 
          variants={itemVariants}
          className="glass-panel"
          style={{
            padding: '60px',
            marginBottom: '100px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', gap: '60px', flexDirection: 'row' }} className="philosophy-flex">
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px', fontFamily: 'var(--font-display)' }}>
                The Digital Landscape is Broken.
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
                Most agencies focus on cosmetic template updates that look beautiful to the owner but remain invisible to search engines and users. They buy stock illustrations, write generic content, and run standard ad setups.
              </p>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7' }}>
                We believe digital growth is an engineering discipline. A website must load instantly, render clean semantic markup, answer search query intent precisely, and convert visitors into partners without friction.
              </p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', flexShrink: 0 }}>
                  <Shield size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', fontFamily: 'var(--font-display)' }}>Absolute Technical Integrity</h4>
                  <p style={{ color: 'var(--text-dark-sub)', fontSize: '14px', lineHeight: '1.6' }}>We write performant code, set up rigorous indexation maps, and avoid bulky page-builders that slow down crawls.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', flexShrink: 0 }}>
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px', fontFamily: 'var(--font-display)' }}>Intent-Driven Acquisition</h4>
                  <p style={{ color: 'var(--text-dark-sub)', fontSize: '14px', lineHeight: '1.6' }}>We capture demand where it already exists. We target keywords that indicate clear buying signals instead of chasing high-volume vanity traffic.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pillars / Values Section */}
        <div style={{ marginBottom: '120px' }}>
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              Our Foundations of Authority
            </h2>
            <p style={{ color: 'var(--text-dark-sub)', marginTop: '12px', fontSize: '16px' }}>
              We do not build templates. We build custom infrastructures that demand attention.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <motion.div
              variants={itemVariants}
              className="glass-panel"
              style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-purple)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                01 / SEARCH INFRASTRUCTURE
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
                Indexation & Crawl
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>
                Search engines must index your website effectively. We design logical page hierarchies, clean rendering strategies, and correct structured metadata to make indexing seamless.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-panel"
              style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                02 / VISUAL STORYTELLING
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
                Emotional Coherence
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>
                A brand's design system represents its digital handshake. We build premium, bespoke layouts, custom assets, and immersive animations that communicate instantly that you are a market leader.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-panel"
              style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                03 / PERFORMANCE PIPELINES
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
                Direct Attribution
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>
                Traffic is meaningless without action. We design conversion funnels, load-optimized landing experiences, and solid lead systems so every visitor represents potential growth.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div style={{ marginBottom: '100px' }} className="approach-section">
          <div style={{ display: 'flex', gap: '60px', flexDirection: 'row', alignItems: 'center' }} className="philosophy-flex">
            <motion.div style={{ flex: 1 }} variants={itemVariants}>
              <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
                We Build for Longevity.
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                PageNotFound was founded to bypass the traditional retainer churn. We treat marketing as an engineering pipeline. We audit, restructure, track, and scale. We don't guess—we optimize.
              </p>
              <a 
                href="#/contact" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-dark)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '15px',
                  borderBottom: '1px solid var(--accent-purple)',
                  paddingBottom: '4px',
                  transition: 'gap 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.gap = '12px'}
                onMouseLeave={(e) => e.target.style.gap = '8px'}
              >
                Discuss a Partnership <ArrowRight size={14} />
              </a>
            </motion.div>
            <motion.div style={{ flex: 1 }} variants={itemVariants}>
              <div style={{ borderLeft: '2px solid rgba(24, 24, 27, 0.08)', paddingLeft: '32px' }}>
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-purple)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Pillar I</span>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', fontFamily: 'var(--font-display)' }}>No Vanity Metrics</h4>
                  <p style={{ color: 'var(--text-dark-sub)', fontSize: '14px', lineHeight: '1.6' }}>We focus on metrics that impact your business—qualified leads, pipeline value, organic market share, and revenue. Impressions alone don't build businesses.</p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Pillar II</span>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', fontFamily: 'var(--font-display)' }}>Full Transparency</h4>
                  <p style={{ color: 'var(--text-dark-sub)', fontSize: '14px', lineHeight: '1.6' }}>No complex agency reporting. You get access to a clean dashboard displaying indexation rates, organic pipeline, and client acquisition cost. Fully audited.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-flex {
            flex-direction: column !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
