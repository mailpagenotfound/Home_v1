import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CornerDownRight, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'seo', name: 'SEO & Tech Engineering' },
    { id: 'experience', name: 'Experience & 3D Design' },
    { id: 'campaign', name: 'Performance Funnels' }
  ];

  const projects = [
    {
      id: 'aether',
      title: 'Aether Logistics',
      category: 'seo',
      role: 'Crawl Architecture & SEO Engineering',
      tagline: 'Expanding indexation footprint from legacy fragments to 98% coverage.',
      challenge: 'Aether Logistics had a custom JS single-page application that rendered client-side. Because crawlers could not load the heavy JS scripts within their CPU cycles, only 12% of regional shipping hubs and routes were indexed, making them invisible for organic B2B freight queries.',
      solution: 'We rebuilt the site layout using static route generation mapping, fully semantic HTML structures, server-side pre-rendered content, and schema structured injection. We corrected header statuses and established crawler-friendly links across all hub locations.',
      results: [
        '98% index coverage achieved in 60 days',
        '340% increase in organic search visibility for B2B route queries',
        '2.4x growth in monthly freight request pipelines'
      ],
      color: 'var(--accent-purple)'
    },
    {
      id: 'vanguard',
      title: 'Vanguard Legal',
      category: 'campaign',
      role: 'Experience Design & Acquisition Funnels',
      tagline: 'Attracting premium venture clients through conversion-centered UX design.',
      challenge: 'Vanguard Legal wanted to acquire boutique startup and legal fund partners from search traffic. However, their legacy landing pages were cluttered, slow-loading, and utilized generic templates, resulting in a high bounce rate and low conversion rates.',
      solution: 'We engineered a high-end, dark-theme layout with customized type scales and smooth animations, emphasizing corporate authority. We simplified the client onboarding experience into a multi-step intent qualifier form that reduced administrative friction.',
      results: [
        'Conversion rate increased from 1.1% to 4.6%',
        '58% reduction in cost-per-acquisition (CPA) on search ads',
        '4.2x growth in qualifying founder consultation queries'
      ],
      color: 'var(--accent-blue)'
    },
    {
      id: 'kinetix',
      title: 'Kinetix Bio',
      category: 'experience',
      role: 'Bespoke 3D Experience & WebGL',
      tagline: 'Establishing scientific authority via interactive WebGL interfaces.',
      challenge: 'As a biotech pioneer, Kinetix Bio struggled to explain their complex protein folding platform to institutional investors and pharma partners without scheduling long technical presentations.',
      solution: 'We developed an interactive 3D WebGL protein visualizer integrated directly into their website. Users could rotate, interact with, and view molecular structures in real time, demonstrating their technological capabilities visually.',
      results: [
        'Average session duration increased from 42s to 4m 15s',
        'Secured 2 new enterprise biotech institutional partnerships',
        'Eliminated visual ambiguity in corporate pitch cycles'
      ],
      color: 'var(--accent-cyan)'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
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
      <div className="glow-spot" style={{ top: '-10%', left: '10%', opacity: 0.4 }} />
      <div className="glow-spot" style={{ bottom: '-15%', right: '5%', opacity: 0.5, background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(2, 2, 4, 0) 70%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8%' }}>
        {/* Title Block */}
        <div style={{ marginBottom: '60px' }}>
          <p
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
            <CornerDownRight size={14} /> Our Studies
          </p>
          <h1
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
              maxWidth: '900px'
            }}
          >
            Engineering Outcomes. <span className="text-gradient-cyan-emerald">Building Trust</span>.
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-dark-sub)',
              lineHeight: '1.6',
              maxWidth: '750px'
            }}
          >
            Explore case studies detailing how we rebuild digital systems to optimize search performance, lead quality, and brand authority.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '80px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '99px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                background: filter === cat.id ? 'var(--accent-purple)' : 'rgba(24, 24, 27, 0.03)',
                color: filter === cat.id ? '#ffffff' : 'var(--text-dark-sub)',
                border: '1px solid',
                borderColor: filter === cat.id ? 'var(--accent-purple)' : 'rgba(24, 24, 27, 0.06)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '120px' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="glass-panel"
                style={{
                  padding: '50px',
                  borderColor: 'var(--border-dark)',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '50px'
                }}
                className="glass-panel portfolio-project-card"
              >
                {/* Left Side: Summary */}
                <div style={{ flex: 1.2 }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: project.color, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                    {project.role}
                  </span>
                  <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: '16px', color: 'var(--text-dark)', fontWeight: 500, lineHeight: '1.5', marginBottom: '24px' }}>
                    {project.tagline}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', color: 'var(--text-dark-sub)' }}>
                        The Challenge
                      </h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-dark-sub)', lineHeight: '1.6' }}>
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', color: 'var(--text-dark-sub)' }}>
                        Our Solution
                      </h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-dark-sub)', lineHeight: '1.6' }}>
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Key Outcomes */}
                <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ background: 'rgba(24, 24, 27, 0.01)', border: '1px solid rgba(24, 24, 27, 0.08)', borderRadius: '16px', padding: '30px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>
                      Attributed Outcomes
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {project.results.map((res, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '4px', flexShrink: 0 }} />
                          <span style={{ fontSize: '14px', color: 'var(--text-dark-sub)', lineHeight: '1.5', fontWeight: 500 }}>
                            {res}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#/contact"
                      className="btn-premium btn-premium-primary"
                      style={{
                        marginTop: '30px',
                        width: '100%',
                        padding: '12px 0',
                        fontSize: '13px',
                        gap: '6px',
                        backgroundColor: project.color,
                        color: '#fff',
                        boxShadow: `0 8px 16px ${project.color}15`
                      }}
                    >
                      Request Case Briefing <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-project-card {
            flex-direction: column !important;
            padding: 30px !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
