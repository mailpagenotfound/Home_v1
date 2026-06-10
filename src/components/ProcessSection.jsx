import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Rocket, Activity, TrendingUp, Code, CheckCircle, Cpu, Zap, ArrowUpRight } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      phase: "Phase I",
      title: "Crawl & Bottleneck Discovery",
      badge: "Discover",
      color: "var(--accent-purple)",
      bgGlow: "rgba(139, 92, 246, 0.05)",
      headline: "Deconstruct your current organic footprints.",
      desc: "Before engineering any code, we crawl your current site from scratch. We isolate indexation bottlenecks, rendering errors, slow core web vitals, and crawl sitemap paths to define a clear, custom roadmap.",
      deliverables: [
        "Full sitemap crawl indexation analysis",
        "Search query cluster mapping",
        "Competitor structural bottleneck audit"
      ]
    },
    {
      num: "02",
      phase: "Phase II",
      title: "Conversion-Bound Intent Mapping",
      badge: "Plan",
      color: "var(--accent-blue)",
      bgGlow: "rgba(59, 130, 246, 0.05)",
      headline: "Tailored structures for active buyers.",
      desc: "We align your pages not by keyword-stuffing spreadsheets, but by direct user intent. We build detailed search paths connecting buyer queries to customized landing layouts that drive conversions, not vanity impressions.",
      deliverables: [
        "Structured semantic architecture maps",
        "Search funnel intent diagrams",
        "Keyword-to-page matching matrices"
      ]
    },
    {
      num: "03",
      phase: "Phase III",
      title: "Semantic React Engineering",
      badge: "Build",
      color: "var(--accent-pink)",
      bgGlow: "rgba(236, 72, 153, 0.05)",
      headline: "Coded for instant page speeds and compliance.",
      desc: "We write clean, high-performance React code from scratch. By implementing semantic HTML5 structures, dynamic JSON-LD structured schemas, and lightning-fast loading layouts, we make sure search engines read your site with zero friction.",
      deliverables: [
        "Semantic React DOM components",
        "Automatic schema & sitemap injection",
        "PageSpeed optimization (LCP under 1.2s)"
      ]
    },
    {
      num: "04",
      phase: "Phase IV",
      title: "Automated Growth Scaling",
      badge: "Scale",
      color: "var(--accent-emerald)",
      bgGlow: "rgba(16, 185, 129, 0.05)",
      headline: "Pipeline growth synced automatically.",
      desc: "We connect your high-performing search pages directly to customer capture pipelines. We sync lead forms, CRM platforms, and database webhooks in real-time, ensuring traffic spikes translate directly into sales calls.",
      deliverables: [
        "Automated CRM & pipeline bridges",
        "Real-time visibility growth tracker",
        "Synchronized sales alerts & webhooks"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.process-step-panel');
      let currentStep = 0;
      
      const viewportCenter = window.innerHeight / 2.2;
      let minDistance = Infinity;
      
      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 3;
        const distance = Math.abs(viewportCenter - elCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentStep = index;
        }
      });
      
      if (currentStep !== activeStep && currentStep >= 0 && currentStep < steps.length) {
        setActiveStep(currentStep);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial load trigger
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep, steps.length]);

  return (
    <section 
      style={{
        backgroundColor: '#fafaf9',
        padding: '120px 8%',
        position: 'relative',
        zIndex: 2,
        borderBottom: '1px solid rgba(24, 24, 27, 0.08)',
        overflow: 'visible'
      }}
      id="process"
    >
      {/* Background spot light */}
      <div 
        className="glow-spot" 
        style={{ 
          top: '20%', 
          left: '10%', 
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.02) 0%, rgba(250, 250, 249, 0) 70%)',
          width: '700px',
          height: '700px'
        }} 
      />

      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'left', marginBottom: '80px', maxWidth: '800px' }}>
          <p style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: steps[activeStep].color,
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            marginBottom: '16px',
            transition: 'color 0.4s ease'
          }}>
            SYSTEMATIC ROADMAP — {steps[activeStep].phase}
          </p>
          
          <h2 style={{
            fontSize: 'clamp(32px, 5.5vw, 64px)',
            fontWeight: 900,
            fontFamily: 'var(--font-display)',
            color: 'var(--text-light)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em'
          }}>
            Engineering Permanent <br />
            <span style={{ 
              backgroundImage: 'linear-gradient(135deg, #18181b 30%, rgba(24, 24, 27, 0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Visibility.</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-light-sub)',
            maxWidth: '560px',
            marginTop: '20px',
            lineHeight: '1.6'
          }}>
            No guesses, no generic template checklist. A highly scientific search-compliance timeline designed to capture, optimize, and dominate rank structures.
          </p>
        </div>

        {/* Splitscreen Layout */}
        <div className="splitscreen-container">
          
          {/* LEFT COLUMN: Sticky Engine Canvas (Desktop Only) */}
          <div className="sticky-canvas-wrapper">
            <div className="sticky-glass-panel">
              
              {/* Dynamic light reflecting step color */}
              <div 
                className="panel-light-glow"
                style={{
                  background: `radial-gradient(circle, ${steps[activeStep].color}12 0%, rgba(250,250,249,0) 70%)`
                }}
              />

              <div className="canvas-header">
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="canvas-title-label" style={{ color: steps[activeStep].color }}>
                  {steps[activeStep].badge.toUpperCase()} ENGINE ACTIVE
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(24, 24, 27, 0.15)', fontFamily: 'monospace' }}>
                  V.1.09
                </div>
              </div>

              <div className="canvas-content-box">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    {activeStep === 0 && <DiscoverVisual color={steps[0].color} />}
                    {activeStep === 1 && <PlanVisual color={steps[1].color} />}
                    {activeStep === 2 && <ExecuteVisual color={steps[2].color} />}
                    {activeStep === 3 && <ScaleVisual color={steps[3].color} />}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Narrative steps */}
          <div className="narrative-scroller">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={idx} 
                  className="process-step-panel"
                  style={{
                    opacity: isActive ? 1 : 0.28,
                    transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(10px)',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Step Label/Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <span style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      fontWeight: 800,
                      color: step.color,
                      backgroundColor: `${step.color}12`,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-display)'
                    }}>
                      Step {step.num}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 style={{
                    fontSize: 'clamp(22px, 3.2vw, 32px)',
                    fontWeight: 900,
                    color: 'var(--text-light)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15
                  }}>
                    {step.title}
                  </h3>

                  {/* Subheadline sentence */}
                  <p style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: step.color,
                    marginTop: '8px',
                    fontFamily: 'var(--font-display)'
                  }}>
                    {step.headline}
                  </p>

                  {/* Step Description */}
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--text-light-sub)',
                    lineHeight: '1.6',
                    marginTop: '12px'
                  }}>
                    {step.desc}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div style={{ marginTop: '24px' }}>
                    <div style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--text-light)',
                      fontWeight: 800,
                      marginBottom: '12px',
                      fontFamily: 'var(--font-display)'
                    }}>
                      Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-light-sub)' }}>
                          <span style={{ color: step.color, marginTop: '2px', display: 'flex' }}>
                            <CheckCircle size={14} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Inline Visual (Hidden on Desktop) */}
                  <div className="mobile-only-visual">
                    <div className="mobile-visual-card" style={{ borderColor: `${step.color}15` }}>
                      {idx === 0 && <DiscoverVisual color={step.color} />}
                      {idx === 1 && <PlanVisual color={step.color} />}
                      {idx === 2 && <ExecuteVisual color={step.color} />}
                      {idx === 3 && <OptimizeVisual color={step.color} />}
                      {idx === 4 && <ScaleVisual color={step.color} />}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Styled tags for layout and responsive overrides */}
      <style>{`
        .splitscreen-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          margin-top: 60px;
          position: relative;
          align-items: start;
        }

        .sticky-canvas-wrapper {
          position: sticky;
          top: 18vh;
          height: 64vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          align-self: start;
        }

        .sticky-glass-panel {
          width: 100%;
          height: 100%;
          max-height: 480px;
          background: rgba(244, 244, 245, 0.8);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(24, 24, 27, 0.08);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px -15px rgba(24, 24, 27, 0.06), 
                      inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .panel-light-glow {
          position: absolute;
          top: -150px;
          left: -150px;
          width: 300px;
          height: 300px;
          pointer-events: none;
          z-index: 0;
          transition: background 0.8s ease;
        }

        .canvas-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(24, 24, 27, 0.08);
          padding-bottom: 14px;
          margin-bottom: 20px;
          z-index: 1;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #eab308; }
        .dot-green { background-color: #22c55e; }

        .canvas-title-label {
          font-family: monospace;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          transition: color 0.4s ease;
        }

        .canvas-content-box {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          overflow: hidden;
          position: relative;
        }

        .narrative-scroller {
          display: flex;
          flex-direction: column;
          gap: 160px;
          padding-top: 40px;
          padding-bottom: 30vh;
        }

        .process-step-panel {
          scroll-margin-top: 25vh;
        }

        .mobile-only-visual {
          display: none;
        }

        /* SVG Animations & Classes */
        @keyframes scanSweep {
          0% { transform: translateY(-10px); opacity: 0; }
          10% { opacity: 0.35; }
          90% { opacity: 0.35; }
          100% { transform: translateY(180px); opacity: 0; }
        }

        @keyframes dashOffset {
          to {
            stroke-dashoffset: -40;
          }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.6); opacity: 0.9; }
        }

        .anim-sweep {
          animation: scanSweep 3.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        .pulse-indicator {
          animation: pulseDot 2s infinite ease-in-out;
        }

        /* Responsive stack break */
        @media (max-width: 900px) {
          .splitscreen-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .sticky-canvas-wrapper {
            display: none !important;
          }

          .narrative-scroller {
            gap: 80px !important;
            padding-bottom: 40px !important;
          }

          .process-step-panel {
            opacity: 1 !important;
            transform: none !important;
          }

          .mobile-only-visual {
            display: block !important;
            margin-top: 24px;
            width: 100%;
          }

          .mobile-visual-card {
            width: 100%;
            height: 280px;
            background: rgba(244, 244, 245, 0.8);
            border: 1px solid rgba(24, 24, 27, 0.08);
            border-radius: 14px;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
}

// -------------------------------------------------------------
// DYNAMIC SVG SUB-COMPONENTS
// -------------------------------------------------------------

function DiscoverVisual({ color }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace' }}>
      
      {/* Visual Crawler Sitemap Matrix */}
      <div style={{ flex: 1, position: 'relative', border: '1px dashed rgba(24, 24, 27, 0.08)', borderRadius: '10px', background: 'rgba(24, 24, 27, 0.01)', overflow: 'hidden' }}>
        
        {/* Animated Sweep Radar bar */}
        <div 
          className="anim-sweep"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(to right, rgba(0,0,0,0), ${color}, rgba(0,0,0,0))`,
            boxShadow: `0 0 10px ${color}`,
            pointerEvents: 'none',
            zIndex: 2
          }}
        />

        {/* Matrix Nodes layout */}
        <svg width="100%" height="100%" viewBox="0 0 320 180" style={{ zIndex: 1, position: 'relative' }}>
          {/* Sitemap Paths */}
          <line x1="160" y1="20" x2="160" y2="150" stroke="rgba(24, 24, 27, 0.08)" strokeWidth="1.5" />
          <line x1="80" y1="70" x2="240" y2="70" stroke="rgba(24, 24, 27, 0.08)" strokeWidth="1.5" />
          <line x1="80" y1="70" x2="80" y2="130" stroke="rgba(24, 24, 27, 0.08)" strokeWidth="1.5" />
          <line x1="240" y1="70" x2="240" y2="130" stroke="rgba(24, 24, 27, 0.08)" strokeWidth="1.5" />

          {/* Node: Root */}
          <circle cx="160" cy="20" r="6" fill="#fafaf9" stroke={color} strokeWidth="2" />
          <text x="160" y="36" fill="#18181b" fontSize="8" textAnchor="middle">INDEX /</text>

          {/* Nodes Level 2 */}
          <circle cx="80" cy="70" r="5" fill="#fafaf9" stroke={color} strokeWidth="1.5" />
          <text x="75" y="60" fill="var(--text-light-sub)" fontSize="8">/about</text>

          <circle cx="240" cy="70" r="5" fill="#fafaf9" stroke={color} strokeWidth="1.5" />
          <text x="245" y="60" fill="var(--text-light-sub)" fontSize="8">/services</text>

          {/* Target Nodes */}
          <circle cx="80" cy="130" r="4" fill="#fafaf9" stroke="#ef4444" strokeWidth="1.5" />
          <text x="80" y="145" fill="#ef4444" fontSize="7" textAnchor="middle">404 ORPHAN</text>

          <circle cx="160" cy="110" r="4" fill="#fafaf9" stroke="#15803d" strokeWidth="1.5" />
          <text x="160" y="125" fill="#15803d" fontSize="7" textAnchor="middle">/case-studies</text>

          <circle cx="240" cy="130" r="4" fill="#fafaf9" stroke="#ca8a04" strokeWidth="1.5" />
          <text x="240" y="145" fill="#ca8a04" fontSize="7" textAnchor="middle">NO SCHEMA</text>

          {/* Pulsing indicator dots */}
          <circle cx="80" cy="130" r="8" fill="none" stroke="#ef4444" strokeWidth="1" className="pulse-indicator" style={{ transformOrigin: '80px 130px' }} />
          <circle cx="240" cy="130" r="8" fill="none" stroke="#ca8a04" strokeWidth="1" className="pulse-indicator" style={{ transformOrigin: '240px 130px' }} />
        </svg>
      </div>

      {/* Terminal Readout Logs */}
      <div style={{
        marginTop: '12px',
        padding: '10px 12px',
        backgroundColor: 'rgba(24, 24, 27, 0.03)',
        border: '1px solid rgba(24, 24, 27, 0.06)',
        borderRadius: '6px',
        fontSize: '10.5px',
        color: '#7c3aed',
        lineHeight: '1.4'
      }}>
        <div style={{ color: '#18181b', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.4, marginBottom: '4px' }}>Active Crawl Log:</div>
        <div>➜ Crawling URL index node [160, 20] ... <span style={{ color: '#15803d' }}>200 OK</span></div>
        <div>➜ Auditing Metadata schemas ... <span style={{ color: '#ef4444' }}>Warning: 1 missing schema</span></div>
        <div>➜ Bottleneck mapping completed in 104ms.</div>
      </div>
    </div>
  );
}

function PlanVisual({ color }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace' }}>
      
      {/* Network Intent Mapping Canvas */}
      <div style={{ flex: 1, border: '1px dashed rgba(24, 24, 27, 0.08)', borderRadius: '10px', background: 'rgba(24, 24, 27, 0.01)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <svg width="100%" height="100%" viewBox="0 0 320 160">
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(24, 24, 27, 0.01)" />
              <stop offset="50%" stopColor={color} />
              <stop offset="100%" stopColor="rgba(24, 24, 27, 0.01)" />
            </linearGradient>
          </defs>

          {/* Paths connecting nodes with dash offset animations */}
          <path d="M 20 40 Q 100 40 160 80" fill="none" stroke="url(#gradient-line)" strokeWidth="1.5" strokeDasharray="6, 6" style={{ animation: 'dashOffset 2.5s linear infinite' }} />
          <path d="M 20 80 H 160" fill="none" stroke="url(#gradient-line)" strokeWidth="1.5" strokeDasharray="6, 6" style={{ animation: 'dashOffset 2s linear infinite' }} />
          <path d="M 20 120 Q 100 120 160 80" fill="none" stroke="url(#gradient-line)" strokeWidth="1.5" strokeDasharray="6, 6" style={{ animation: 'dashOffset 3s linear infinite' }} />

          <path d="M 160 80 Q 220 50 280 50" fill="none" stroke="url(#gradient-line)" strokeWidth="1.5" strokeDasharray="6, 6" style={{ animation: 'dashOffset 2s linear infinite' }} />
          <path d="M 160 80 Q 220 110 280 110" fill="none" stroke="url(#gradient-line)" strokeWidth="1.5" strokeDasharray="6, 6" style={{ animation: 'dashOffset 2.2s linear infinite' }} />

          {/* Source nodes (Search Intents) */}
          <g>
            <rect x="20" y="28" width="65" height="20" rx="3" fill="#f4f4f5" stroke="rgba(24,24,27,0.15)" strokeWidth="1" />
            <text x="25" y="41" fill="#18181b" fontSize="8">"seo agency"</text>
            <circle cx="85" cy="38" r="2.5" fill={color} />
          </g>

          <g>
            <rect x="20" y="70" width="70" height="20" rx="3" fill="#f4f4f5" stroke="rgba(24,24,27,0.15)" strokeWidth="1" />
            <text x="25" y="83" fill="#18181b" fontSize="8">"grow organic"</text>
            <circle cx="90" cy="80" r="2.5" fill={color} />
          </g>

          <g>
            <rect x="20" y="110" width="80" height="20" rx="3" fill="#f4f4f5" stroke="rgba(24,24,27,0.15)" strokeWidth="1" />
            <text x="25" y="123" fill="#18181b" fontSize="8">"react optimization"</text>
            <circle cx="100" cy="120" r="2.5" fill={color} />
          </g>

          {/* Center Router Box */}
          <g>
            <rect x="135" y="65" width="50" height="30" rx="4" fill="#fafaf9" stroke={color} strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.15))' }} />
            <text x="160" y="80" fill="#18181b" fontSize="8" fontWeight="bold" textAnchor="middle">MAPPER</text>
            <text x="160" y="89" fill="rgba(24,24,27,0.4)" fontSize="6" textAnchor="middle">ROUTING</text>
          </g>

          {/* Target Pages */}
          <g>
            <circle cx="280" cy="50" r="3.5" fill="#15803d" />
            <text x="290" y="53" fill="#18181b" fontSize="8">/services/react-seo</text>
            <text x="290" y="62" fill="var(--text-light-sub)" fontSize="6">High Intent (Conversion)</text>
          </g>

          <g>
            <circle cx="280" cy="110" r="3.5" fill="#1d4ed8" />
            <text x="290" y="113" fill="#18181b" fontSize="8">/blog/organic-funnel</text>
            <text x="290" y="122" fill="var(--text-light-sub)" fontSize="6">Informational (Awareness)</text>
          </g>

        </svg>
      </div>

      {/* Description Info */}
      <div style={{
        marginTop: '12px',
        padding: '10px 12px',
        backgroundColor: 'rgba(24, 24, 27, 0.03)',
        border: '1px solid rgba(24, 24, 27, 0.06)',
        borderRadius: '6px',
        fontSize: '10.5px',
        color: '#2563eb',
        lineHeight: '1.4'
      }}>
        <div style={{ color: '#18181b', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.4, marginBottom: '4px' }}>Active Intent Map:</div>
        <div>➜ Grouping search queries into semantic intent trees...</div>
        <div>➜ Mapping nodes to conversion page routers ... <span style={{ color: '#15803d' }}>Complete</span></div>
      </div>
    </div>
  );
}

function ExecuteVisual({ color }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace' }}>
      
      {/* Code Editor Panel */}
      <div style={{
        flex: 1,
        backgroundColor: '#f4f4f5',
        border: '1px solid rgba(24, 24, 27, 0.08)',
        borderRadius: '10px',
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: '10px',
        color: '#52525b',
        boxShadow: 'inset 0 0 20px rgba(24, 24, 27, 0.02)'
      }}>
        
        {/* Editor tabs */}
        <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid rgba(24, 24, 27, 0.08)', paddingBottom: '6px', marginBottom: '8px' }}>
          <span style={{ color: color, borderBottom: `1.5px solid ${color}`, paddingBottom: '4px', fontWeight: 'bold' }}>Page.jsx</span>
          <span style={{ opacity: 0.3 }}>SEO.jsx</span>
          <span style={{ opacity: 0.3 }}>sitemap.xml</span>
        </div>

        {/* Code Content */}
        <div style={{ flex: 1, lineHeight: '1.5', paddingLeft: '4px', color: '#27272a' }}>
          <div><span style={{ color: '#b91c1c' }}>import</span> React <span style={{ color: '#b91c1c' }}>from</span> <span style={{ color: '#15803d' }}>'react'</span>;</div>
          <div><span style={{ color: '#b91c1c' }}>import</span> &#123; <span style={{ color: '#1d4ed8' }}>SEOHead</span> &#125; <span style={{ color: '#b91c1c' }}>from</span> <span style={{ color: '#15803d' }}>'./SEO'</span>;</div>
          <br />
          <div><span style={{ color: '#b91c1c' }}>export default function</span> <span style={{ color: '#b45309' }}>VisibilityEngine</span>() &#123;</div>
          <div>&nbsp;&nbsp;<span style={{ color: '#b91c1c' }}>return</span> (</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#be185d' }}>main</span> <span style={{ color: '#1d4ed8' }}>className</span>=<span style={{ color: '#15803d' }}>"index-velocity"</span>&gt;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#1d4ed8' }}>SEOHead</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#1d4ed8' }}>title</span>=<span style={{ color: '#15803d' }}>"Rank #1 - Search Visibility Engine"</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#1d4ed8' }}>schema</span>=&#123;<span style={{ color: '#6d28d9' }}>JSONLD</span>&#125;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#1d4ed8' }}>StaticRender</span> <span style={{ color: '#1d4ed8' }}>optimized</span>=&#123;<span style={{ color: '#b91c1c' }}>true</span>&#125; /&gt;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#be185d' }}>main</span>&gt;</div>
          <div>&nbsp;&nbsp;);</div>
          <div>&#125;</div>
        </div>

        {/* Console info line */}
        <div style={{
          borderTop: '1px solid rgba(24, 24, 27, 0.08)',
          paddingTop: '6px',
          marginTop: '6px',
          color: color,
          fontSize: '9px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span>⚡ Vite compiler: Ready</span>
          <span style={{ color: '#15803d' }}>DOM Node count: 212 (Indexable)</span>
        </div>

      </div>

      {/* Extra execute indicators */}
      <div style={{
        marginTop: '12px',
        padding: '10px 12px',
        backgroundColor: 'rgba(24, 24, 27, 0.03)',
        border: '1px solid rgba(24, 24, 27, 0.06)',
        borderRadius: '6px',
        fontSize: '10.5px',
        color: '#be185d',
        lineHeight: '1.4'
      }}>
        <div style={{ color: '#18181b', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.4, marginBottom: '4px' }}>Build Terminal output:</div>
        <div>➜ Dynamic JSON-LD structured schema inject ... <span style={{ color: '#15803d' }}>Built</span></div>
        <div>➜ Server-side rendering (SSR) routing static bundles ... <span style={{ color: '#15803d' }}>Injected</span></div>
      </div>
    </div>
  );
}

function OptimizeVisual({ color }) {
  const [percentage, setPercentage] = useState(42);

  useEffect(() => {
    // Ticking animation for PageSpeed score counting up from 42 to 99
    const duration = 2000;
    const endValue = 99;
    const startTime = performance.now();

    const updateScore = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(42 + ease * (endValue - 42));
      
      setPercentage(current);

      if (progress < 1) {
        requestAnimationFrame(updateScore);
      }
    };

    requestAnimationFrame(updateScore);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace' }}>
      
      {/* Visual circular dashboard dial */}
      <div style={{ flex: 1, border: '1px dashed rgba(24, 24, 27, 0.08)', borderRadius: '10px', background: 'rgba(24, 24, 27, 0.01)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        
        {/* SVG Dial */}
        <svg width="120" height="120" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
          {/* Track Circle */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(24, 24, 27, 0.08)" strokeWidth="6" />
          
          {/* Animating Circle line */}
          <motion.circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke={color} 
            strokeWidth="6" 
            strokeDasharray="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
            transition={{ duration: 2, ease: "easeOut" }}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 6px ${color}80)`
            }}
          />
        </svg>

        {/* Metric Label overlapping the center */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          top: '32%'
        }}>
          <div style={{ fontSize: '28px', fontWeight: 900, color: '#18181b', letterSpacing: '-0.03em', lineHeight: 1 }}>
            {percentage}
          </div>
          <div style={{ fontSize: '7px', color: color, letterSpacing: '0.15em', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '2px' }}>
            PAGESPEED
          </div>
        </div>

        {/* Status indicator badge */}
        <div style={{
          marginTop: '10px',
          fontSize: '9px',
          color: '#15803d',
          backgroundColor: 'rgba(34, 197, 94, 0.06)',
          border: '1px solid rgba(34, 197, 94, 0.15)',
          padding: '2px 8px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontWeight: 'bold'
        }}>
          <span className="dot dot-green" style={{ width: '5px', height: '5px' }}></span>
          LIGHTHOUSE COMPLIANT
        </div>

      </div>

      {/* Core Web Vitals Badges */}
      <div style={{
        marginTop: '12px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '8px',
        fontSize: '9px',
        textAlign: 'center'
      }}>
        <div style={{ padding: '8px', background: 'rgba(24, 24, 27, 0.03)', border: '1px solid rgba(24, 24, 27, 0.06)', borderRadius: '6px' }}>
          <div style={{ opacity: 0.4, marginBottom: '2px' }}>LCP SPEED</div>
          <div style={{ color: '#15803d', fontWeight: 'bold' }}>0.8s (EXCELLENT)</div>
        </div>
        <div style={{ padding: '8px', background: 'rgba(24, 24, 27, 0.03)', border: '1px solid rgba(24, 24, 27, 0.06)', borderRadius: '6px' }}>
          <div style={{ opacity: 0.4, marginBottom: '2px' }}>LAYOUT SHIFT</div>
          <div style={{ color: '#15803d', fontWeight: 'bold' }}>0.00 (STABLE)</div>
        </div>
        <div style={{ padding: '8px', background: 'rgba(24, 24, 27, 0.03)', border: '1px solid rgba(24, 24, 27, 0.06)', borderRadius: '6px' }}>
          <div style={{ opacity: 0.4, marginBottom: '2px' }}>INPUT BLOCK</div>
          <div style={{ color: '#15803d', fontWeight: 'bold' }}>12ms (INSTANT)</div>
        </div>
      </div>
    </div>
  );
}

function ScaleVisual({ color }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace' }}>
      
      {/* Tunnel Automation Dashboard Layout */}
      <div style={{ flex: 1, border: '1px dashed rgba(24, 24, 27, 0.08)', borderRadius: '10px', background: 'rgba(24, 24, 27, 0.01)', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* SVG scale pipelines */}
        <svg width="100%" height="100%" viewBox="0 0 320 160">
          {/* Synchronized Dash Arrays */}
          <line x1="80" y1="80" x2="240" y2="80" stroke="rgba(24, 24, 27, 0.08)" strokeWidth="2" />
          <line x1="80" y1="80" x2="240" y2="80" stroke={color} strokeWidth="2" strokeDasharray="8, 12" style={{ animation: 'dashOffset 3s linear infinite' }} />

          <path d="M 80 80 L 160 30 L 240 80" fill="none" stroke="rgba(24, 24, 27, 0.06)" strokeWidth="1.5" />
          <path d="M 80 80 L 160 30 L 240 80" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="6, 10" style={{ animation: 'dashOffset 2s linear infinite' }} />

          <path d="M 80 80 L 160 130 L 240 80" fill="none" stroke="rgba(24, 24, 27, 0.06)" strokeWidth="1.5" />
          <path d="M 80 80 L 160 130 L 240 80" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="6, 10" style={{ animation: 'dashOffset 2.5s linear infinite' }} />

          {/* Sync Nodes */}
          <circle cx="80" cy="80" r="5" fill="#fafaf9" stroke={color} strokeWidth="1.5" />
          <text x="80" y="93" fill="var(--text-light-sub)" fontSize="7" textAnchor="middle">SEO Engine</text>

          <circle cx="160" cy="30" r="5" fill="#fafaf9" stroke={color} strokeWidth="1.5" />
          <text x="160" y="20" fill="var(--text-light-sub)" fontSize="7" textAnchor="middle">Webhooks Sync</text>

          <circle cx="160" cy="130" r="5" fill="#fafaf9" stroke={color} strokeWidth="1.5" />
          <text x="160" y="143" fill="var(--text-light-sub)" fontSize="7" textAnchor="middle">Analytics API</text>

          <circle cx="240" cy="80" r="6" fill="#fafaf9" stroke="#15803d" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 5px rgba(34, 197, 94, 0.15))' }} />
          <text x="240" y="94" fill="#18181b" fontSize="8" fontWeight="bold" textAnchor="middle">Lead Database</text>
        </svg>

        {/* Mini traffic growth chart overlay */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '90px',
          height: '45px',
          background: 'rgba(250, 250, 249, 0.95)',
          border: '1px solid rgba(24, 24, 27, 0.12)',
          borderRadius: '4px',
          padding: '4px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '6.5px', color: color, fontWeight: 'bold' }}>CONVERSION SCALING</div>
          
          {/* SVG Sparkline drawing itself */}
          <svg width="100%" height="22" viewBox="0 0 80 20">
            <motion.path 
              d="M 2 18 Q 20 18 35 14 T 60 8 T 78 2" 
              fill="none" 
              stroke="#15803d" 
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            <line x1="2" y1="18" x2="78" y2="18" stroke="rgba(24, 24, 27, 0.1)" strokeWidth="0.5" />
          </svg>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6.5px', color: '#18181b' }}>
            <span>Traffic: 4.2x</span>
            <span style={{ color: '#15803d' }}>+320% Leads</span>
          </div>
        </div>

      </div>

      {/* Sync Report */}
      <div style={{
        marginTop: '12px',
        padding: '10px 12px',
        backgroundColor: 'rgba(24, 24, 27, 0.03)',
        border: '1px solid rgba(24, 24, 27, 0.06)',
        borderRadius: '6px',
        fontSize: '10.5px',
        color: '#059669',
        lineHeight: '1.4'
      }}>
        <div style={{ color: '#18181b', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.4, marginBottom: '4px' }}>Sync Pipelines:</div>
        <div>➜ Routing traffic spikes into lead database pipelines...</div>
        <div>➜ Triggering webhooks automation sync... <span style={{ color: '#15803d' }}>Online</span></div>
      </div>
    </div>
  );
}
