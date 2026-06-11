import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      phase: "Phase I",
      title: "Business & Website Discovery",
      badge: "Discovery",
      color: "var(--accent-purple)",
      bgGlow: "rgba(139, 92, 246, 0.05)",
      headline: "Understanding Where You Are Today.",
      desc: "Every project starts with understanding your business, goals, audience, and current online presence. Whether you're launching a new business, updating an existing website, or planning a complete redesign, we identify opportunities, challenges, and the best path forward.",
      deliverables: [
        "Business discovery session",
        "Website audit (if applicable)",
        "Competitor research",
        "Project roadmap & recommendations"
      ]
    },
    {
      num: "02",
      phase: "Phase II",
      title: "Website Strategy & Structure",
      badge: "Plan",
      color: "var(--accent-blue)",
      bgGlow: "rgba(59, 130, 246, 0.05)",
      headline: "Planning before designing.",
      desc: "A great website isn't built page by page. It's planned page by page. We create a clear website structure, user journey, content flow, and navigation system so visitors can quickly find information and confidently take action.",
      deliverables: [
        "Sitemap & page architecture",
        "User journey planning",
        "Content structure mapping",
        "Wireframes & page strategy"
      ]
    },
    {
      num: "03",
      phase: "Phase III",
      title: "Design & Development",
      badge: "Build",
      color: "var(--accent-pink)",
      bgGlow: "rgba(236, 72, 153, 0.05)",
      headline: "Bringing the vision to life.",
      desc: "Once the strategy is approved, we design and develop a custom website tailored to your business goals and brand identity. Every page is built with performance, responsiveness, usability, and long-term scalability in mind.",
      deliverables: [
        "Custom website design",
        "Responsive development",
        "Mobile optimization",
        "Performance-focused build"
      ]
    },
    {
      num: "04",
      phase: "Phase IV",
      title: "Launch & Ongoing Support",
      badge: "Launch",
      color: "var(--accent-emerald)",
      bgGlow: "rgba(16, 185, 129, 0.05)",
      headline: "A website that grows with your business.",
      desc: "Launching your website is only the beginning. We help ensure everything continues running smoothly, stays updated, performs reliably, and evolves as your business grows.",
      deliverables: [
        "Website deployment",
        "Testing & quality assurance",
        "Maintenance & updates",
        "Ongoing support"
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
        backgroundColor: '#050505',
        padding: '120px 8%',
        position: 'relative',
        zIndex: 2,
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        overflow: 'visible'
      }}
      id="process"
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

      {/* Radial purple glow behind heading area */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '5%', 
          width: '700px', 
          height: '700px', 
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)', 
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

      {/* Smooth top transition into DiscoveryJourney */}
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

      {/* Smooth bottom transition into Footer */}
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
            color: '#FFFFFF',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            transition: 'color 0.4s ease'
          }}>
            {steps[activeStep].headline}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#B8B8C5',
            maxWidth: '680px',
            marginTop: '20px',
            lineHeight: '1.6',
            transition: 'color 0.4s ease'
          }}>
            {steps[activeStep].desc}
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
                  background: `radial-gradient(circle, ${steps[activeStep].color}12 0%, rgba(5,5,5,0) 70%)`
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
                <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'monospace' }}>
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
                    color: '#FFFFFF',
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
                    color: '#B8B8C5',
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
                      color: '#FFFFFF',
                      fontWeight: 800,
                      marginBottom: '12px',
                      fontFamily: 'var(--font-display)'
                    }}>
                      Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#B8B8C5' }}>
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
                      {idx === 3 && <ScaleVisual color={step.color} />}
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
          background: rgba(10, 10, 15, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6), 
                      inset 0 1px 0 rgba(255, 255, 255, 0.08);
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
            background: rgba(10, 10, 15, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.08);
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
function DiscoverVisual() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-sans)', color: '#FFFFFF' }}>
      
      {/* Bento Grid Board */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px', flexGrow: 1 }}>
        
        {/* Left Bento: Strategy Workshop Board */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ fontSize: '10px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Strategy Board</div>
          
          {/* Mock sticky notes */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', flexGrow: 1, position: 'relative', marginTop: '4px' }}>
            <div style={{
              background: '#fef08a',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              padding: '8px 10px',
              borderRadius: '4px',
              fontSize: '9px',
              fontWeight: 600,
              width: '45%',
              transform: 'rotate(-2deg)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              color: '#854d0e'
            }}>
              📌 Target User Personas
            </div>
            <div style={{
              background: '#fbcfe8',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              padding: '8px 10px',
              borderRadius: '4px',
              fontSize: '9px',
              fontWeight: 600,
              width: '45%',
              transform: 'rotate(3deg)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              color: '#9d174d'
            }}>
              💡 Competitor Benchmarks
            </div>
            <div style={{
              background: '#c7d2fe',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              padding: '8px 10px',
              borderRadius: '4px',
              fontSize: '9px',
              fontWeight: 600,
              width: '90%',
              transform: 'rotate(-1deg)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              color: '#3730a3'
            }}>
              🎯 Objectives & Roadmap Planning
            </div>
          </div>
        </div>
        
        {/* Right Bento: Competitor Audit */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Discovery Audit</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '9px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px' }}>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}> WP Page Load</span>
                <span>4.8s ❌</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px' }}>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Template Bloat</span>
                <span>High ❌</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px', background: 'rgba(34, 197, 94, 0.06)', borderRadius: '4px', border: '1px solid rgba(34,197,94,0.1)' }}>
                <span style={{ color: '#4ade80', fontWeight: 'bold' }}>Our Objective</span>
                <span style={{ color: '#4ade80' }}>&lt; 1.0s ✅</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Bar: Audit Checklist */}
      <div style={{
        padding: '10px 14px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        fontSize: '11px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ade80', fontWeight: 'bold' }}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 6px #22c55e' }}></span>
          DISCOVERY BRIEFING COMPLETED
        </div>
        <div style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'monospace' }}>4/4 TASKS VERIFIED</div>
      </div>
    </div>
  );
}

function PlanVisual({ color }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-sans)', color: '#FFFFFF' }}>
      
      {/* Sitemap & UX Grid Canvas */}
      <div style={{
        flex: 1,
        border: '1px dashed rgba(255, 255, 255, 0.12)',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.01) radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '12px 12px',
        position: 'relative',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}>
        
        {/* Sitemap Flow Nodes */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, position: 'relative' }}>
          <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
            {/* Connection lines */}
            <path d="M 160 30 L 160 65" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3, 3" />
            <path d="M 160 65 L 60 65 L 60 100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3, 3" />
            <path d="M 160 65 L 160 100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3, 3" />
            <path d="M 160 65 L 260 65 L 260 100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3, 3" />
          </svg>
          
          {/* Main Nodes */}
          <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', background: '#050505', border: `1.5px solid ${color}`, padding: '4px 10px', borderRadius: '6px', fontSize: '9px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', color: '#FFFFFF' }}>
            [Home Page]
          </div>
          
          <div style={{ position: 'absolute', bottom: '15px', left: '20px', background: 'rgba(10, 10, 15, 0.9)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 8px', borderRadius: '4px', fontSize: '8px', fontWeight: 600, color: '#B8B8C5' }}>
            [Services Hub]
          </div>
          <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(10, 10, 15, 0.9)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 8px', borderRadius: '4px', fontSize: '8px', fontWeight: 600, color: '#B8B8C5' }}>
            [Case Studies]
          </div>
          <div style={{ position: 'absolute', bottom: '15px', right: '20px', background: 'rgba(10, 10, 15, 0.9)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 8px', borderRadius: '4px', fontSize: '8px', fontWeight: 600, color: '#B8B8C5' }}>
            [Briefing Center]
          </div>
        </div>

        {/* Figma/Planning controls overlay */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px', fontSize: '9px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ background: `${color}15`, color: color, padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>USER JOURNEY: OPTIMIZED</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Wireframes Complete</span>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#6366f1', color: '#fff', fontSize: '7px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>A</div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', color: '#fff', fontSize: '7px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>U</div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ExecuteVisual({ color }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-sans)', color: '#FFFFFF' }}>
      
      {/* Responsive Preview Layout */}
      <div style={{
        flex: 1,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        background: 'rgba(0, 0, 0, 0.25)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        
        {/* stacked preview screens in dynamic isometric layers */}
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Laptop Preview Mockup */}
          <div style={{
            width: '75%',
            height: '75%',
            background: 'rgba(10, 10, 15, 0.95)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '10px',
            left: '20px',
            zIndex: 1,
            overflow: 'hidden'
          }}>
            {/* Header bar */}
            <div style={{ height: '14px', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', padding: '0 6px', gap: '3px' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            {/* Client layout */}
            <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#FFFFFF', lineHeight: 1.1 }}>Scale Your Brand</div>
              <div style={{ width: '100%', height: '20px', background: `${color}10`, border: `1px solid ${color}20`, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', color: color, fontWeight: 'bold' }}>Bespoke UI Layout</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                <div style={{ height: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '3px' }} />
                <div style={{ height: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '3px' }} />
              </div>
            </div>
          </div>

          {/* Mobile Preview Mockup */}
          <div style={{
            width: '26%',
            height: '65%',
            background: 'rgba(10, 10, 15, 0.98)',
            border: '1.5px solid rgba(255, 255, 255, 0.18)',
            borderRadius: '10px',
            boxShadow: '0 12px 35px rgba(0,0,0,0.6)',
            position: 'absolute',
            bottom: '10px',
            right: '20px',
            zIndex: 2,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header notch */}
            <div style={{ height: '10px', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '25px', height: '3px', borderRadius: '10px', background: '#333' }} />
            </div>
            {/* Client layout */}
            <div style={{ flex: 1, padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '7px', fontWeight: 'bold', color: '#FFFFFF' }}>Mobile View</div>
              <div style={{ width: '100%', height: '30px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4px' }}>
                <div style={{ width: '70%', height: '3px', background: '#555', borderRadius: '1px' }} />
                <div style={{ width: '50%', height: '3px', background: '#777', borderRadius: '1px' }} />
                <div style={{ width: '100%', height: '8px', background: color, borderRadius: '2px' }} />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Design Assets Palette */}
      <div style={{
        padding: '10px 14px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        fontSize: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase' }}>UI Tokens:</span>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#020204' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7c3aed' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2563eb' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#059669' }} />
        </div>
        <div style={{ color: color, fontWeight: 'bold' }}>RESPONSIVE DESIGN BUILDS</div>
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-sans)', color: '#FFFFFF' }}>
      
      {/* Growth Performance Board */}
      <div style={{
        flex: 1,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        background: 'rgba(0, 0, 0, 0.25)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Growth Stats Overview */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase' }}>Conversion Metrics</span>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#4ade80', letterSpacing: '-0.02em', marginTop: '2px' }}>8.42% CVR</span>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase' }}>Monthly Traffic</span>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF' }}>+340% YoY</span>
          </div>
        </div>

        {/* Growth Curve Chart */}
        <div style={{ flex: 1, minHeight: '60px', position: 'relative', display: 'flex', alignItems: 'flex-end', paddingBottom: '10px' }}>
          <svg style={{ width: '100%', height: '100%' }}>
            {/* grid lines */}
            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            
            {/* Growth Curve */}
            <motion.path 
              d="M 5 60 C 50 60, 100 45, 140 25 T 280 2" 
              fill="none" 
              stroke="#4ade80" 
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            
            {/* Glowing peak dot */}
            <circle cx="280" cy="2" r="4" fill="#22c55e" />
            <circle cx="280" cy="2" r="8" fill="none" stroke="#22c55e" strokeWidth="1" className="pulse-indicator" style={{ transformOrigin: '280px 2px' }} />
          </svg>
        </div>

        {/* Recent Form Capture Submissions list */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase' }}>Recent Inquiries:</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34,197,94,0.1)', padding: '4px 6px', borderRadius: '4px' }}>
            <span style={{ fontWeight: 'bold', color: '#4ade80' }}>📨 Strategy Call Booked</span>
            <span style={{ color: '#4ade80', fontWeight: 'bold' }}>New Prospect</span>
          </div>
        </div>

      </div>
    </div>
  );
}
