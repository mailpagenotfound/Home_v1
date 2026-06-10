import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Palette, Network, ArrowRight, CornerDownRight, Check, X } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const servicesList = [
    {
      id: 0,
      title: 'Search Index Audit & Setup',
      icon: Search,
      tagline: 'Search engines must read your code to rank your pages.',
      color: 'var(--accent-purple)',
      description: 'A beautiful site is useless if it is invisible to search engines. We audit your codebase structure and fix rendering bottlenecks so search engines can index your site easily and naturally.',
      features: [
        'Code and tag layout adjustments for indexing',
        'Clean structure mapping for sitemaps and links',
        'Fixing hidden rendering blocks that delay crawling',
        'Setting up search schemas so search engine crawlers read details',
        'Continuous checks to prevent search indexing errors'
      ]
    },
    {
      id: 1,
      title: 'Intent Mapping & Campaigns',
      icon: Compass,
      tagline: 'Attract active buyers, ignore vanity clicks.',
      color: 'var(--accent-blue)',
      description: 'We design campaigns that target queries representing genuine buying interest. We prioritize bringing you qualified prospects rather than empty clicks.',
      features: [
        'Direct search-intent query alignment maps',
        'High-converting, lightning-fast landing structures',
        'Qualified inquiry capture and attribution setup',
        'Split-testing pages for optimal conversions',
        'Strategic allocation to lower acquisition costs'
      ]
    },
    {
      id: 2,
      title: 'Custom Brand & Layout Design',
      icon: Palette,
      tagline: 'Visual layouts that command immediate trust.',
      color: 'var(--accent-cyan)',
      description: 'We build custom-designed layouts with rich typography and breathing room that represent your brand as a market authority. No templates, no cookie-cutter presets.',
      features: [
        'Bespoke logo design and color identities',
        'Intuitive navigation patterns and spacing scales',
        'Consistent typography rules that guide attention',
        'Custom interactive elements that capture focus',
        'Figma concepts coded directly into clean React'
      ]
    },
    {
      id: 3,
      title: 'Sales Pipeline Integrations',
      icon: Network,
      tagline: 'Sync web traffic directly to your sales CRM.',
      color: 'var(--accent-emerald)',
      description: 'We connect your website forms and touchpoints with your CRM systems and databases. When leads come in, your sales workflow fires off immediately.',
      features: [
        'Lead forms syncing directly to HubSpot or Salesforce',
        'Automated notifications via Slack or email webhooks',
        'Analytics reporting mapping calls to source channels',
        'Connecting scheduling widgets like Calendly',
        'Custom webhooks bridging leads to customer databases'
      ]
    }
  ];

  const compareMatrix = [
    { metric: 'Development Basis', traditional: 'Heavy template builders with bloated plugins', bespoke: 'Custom React code written from scratch' },
    { metric: 'Search Compliance', traditional: 'Slow indexing and template markup issues', bespoke: 'Index-compliant schema and semantic structure' },
    { metric: 'Campaign Goals', traditional: 'Aiming for search impressions and vanity clicks', bespoke: 'Targeting buying queries and pipeline growth' },
    { metric: 'Page Loading Speed', traditional: 'Slow mobile load times (3 to 6 seconds)', bespoke: 'Sub-second speeds that prevent lost leads' },
    { metric: 'Lead Syncing', traditional: 'Manual downloads and disjointed databases', bespoke: 'Automatic real-time sync with CRM platforms' }
  ];

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
      <div className="glow-spot" style={{ top: '20%', right: '10%', opacity: 0.5 }} />
      <div className="glow-spot" style={{ bottom: '15%', left: '5%', opacity: 0.3, background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(2, 2, 4, 0) 70%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8%' }}>
        
        {/* Header Title */}
        <div style={{ marginBottom: '80px' }}>
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
            <CornerDownRight size={14} /> Our Capabilities
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
            Engineered Services for <span className="text-reveal">Sustainable Growth</span>.
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-dark-sub)',
              lineHeight: '1.6',
              maxWidth: '750px'
            }}
          >
            We replace traditional marketing templates with custom-built search indexation systems, conversion funnels, and brand layouts that attract the right audience.
          </p>
        </div>

        {/* Tabbed Interactive Service Deep-Dive */}
        <div style={{ display: 'flex', gap: '50px', marginBottom: '120px' }} className="services-tabs-layout">
          {/* Left: Tab Selectors */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              const isSelected = activeService === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  style={{
                    background: isSelected ? 'rgba(24, 24, 27, 0.03)' : 'transparent',
                    border: '1px solid',
                    borderColor: isSelected ? 'rgba(24, 24, 27, 0.08)' : 'rgba(24, 24, 27, 0.02)',
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: '100%',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="service-tab-button"
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: isSelected ? `${service.color}15` : 'rgba(24, 24, 27, 0.02)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? service.color : 'var(--text-dark-sub)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                        fontFamily: 'var(--font-display)',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.title}
                    </h3>
                    <span style={{ fontSize: '13px', color: 'var(--text-dark-sub)', opacity: isSelected ? 0.8 : 0.5 }}>
                      {service.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Content View (Animated with AnimatePresence) */}
          <div style={{ flex: 1.2, minHeight: '400px' }}>
            <AnimatePresence mode="wait">
              {servicesList.map((service, index) => {
                if (index !== activeService) return null;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass-panel"
                    style={{
                      padding: '48px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderColor: 'var(--border-dark)'
                    }}
                  >
                    <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h2>
                    <p style={{ color: service.color, fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '24px', textTransform: 'uppercase' }}>
                      {service.tagline}
                    </p>
                    <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                      {service.description}
                    </p>

                    <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', color: 'var(--text-dark)' }}>
                      Key Focus Deliverables
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--text-dark-sub)' }}>
                          <Check size={16} style={{ color: service.color, marginTop: '3px', flexShrink: 0 }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#/contact"
                      className="btn-premium btn-premium-secondary"
                      style={{
                        marginTop: '40px',
                        padding: '12px 24px',
                        alignSelf: 'flex-start',
                        gap: '8px',
                        fontSize: '13px'
                      }}
                    >
                      Inquire About This Service <ArrowRight size={14} />
                    </a>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bespoke vs. Traditional Comparison Section */}
        <div style={{ marginBottom: '120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              Why We Are Different
            </h2>
            <p style={{ color: 'var(--text-dark-sub)', marginTop: '10px', fontSize: '15px' }}>
              Standard marketing approaches often fail because they rely on shortcuts. We prioritize code performance and precise audience intent.
            </p>
          </div>

          <div className="glass-panel" style={{ overflowX: 'auto', padding: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(24, 24, 27, 0.08)' }}>
                  <th style={{ padding: '24px 20px', fontSize: '14px', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Operational Pillar</th>
                  <th style={{ padding: '24px 20px', fontSize: '14px', color: 'var(--text-dark-sub)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Traditional Template Agency</th>
                  <th style={{ padding: '24px 20px', fontSize: '14px', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>PageNotFound Bespoke Pipelines</th>
                </tr>
              </thead>
              <tbody>
                {compareMatrix.map((row, index) => (
                  <tr key={index} style={{ borderBottom: index === compareMatrix.length - 1 ? 'none' : '1px solid rgba(24, 24, 27, 0.04)', background: index % 2 === 0 ? 'rgba(24, 24, 27, 0.01)' : 'transparent' }}>
                    <td style={{ padding: '20px', fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)', fontFamily: 'var(--font-display)' }}>{row.metric}</td>
                    <td style={{ padding: '20px', fontSize: '14px', color: 'var(--text-dark-sub)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <X size={14} style={{ color: '#ef4444', flexShrink: 0 }} /> {row.traditional}
                      </span>
                    </td>
                    <td style={{ padding: '20px', fontSize: '14px', color: 'var(--text-dark)', fontWeight: 500 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} /> {row.bespoke}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-tabs-layout {
            flex-direction: column !important;
          }
          .service-tab-button {
            padding: 16px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
