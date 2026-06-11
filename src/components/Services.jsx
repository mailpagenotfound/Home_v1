import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CornerDownRight, 
  Check, 
  X, 
  LayoutTemplate, 
  Search, 
  Megaphone, 
  Palette, 
  MapPin, 
  Target 
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 0,
      title: 'Website Design & Development',
      icon: LayoutTemplate,
      tagline: 'A website that makes a great first impression.',
      color: '#8B5CF6', // Purple
      description: 'Your website is often the first thing people see before they contact you. We create professional, mobile-friendly websites that help visitors trust your business and take action.',
      features: [
        'Custom Website Design',
        'Mobile-Friendly Layout',
        'Fast Loading Pages',
        'Contact Forms & WhatsApp Integration',
        'SEO-Friendly Setup',
        'Ongoing Support'
      ]
    },
    {
      id: 1,
      title: 'Google Ranking & SEO',
      icon: Search,
      tagline: 'Help customers find you on Google.',
      color: '#3B82F6', // Blue
      description: "Having a website isn't enough. Your business needs to appear when people search for your services. We improve your visibility so more potential customers can discover your business online.",
      features: [
        'Better Google Visibility',
        'Local SEO Setup',
        'Keyword Optimization',
        'Google Search Console Setup',
        'Website SEO Improvements',
        'Monthly Growth Tracking'
      ]
    },
    {
      id: 2,
      title: 'Social Media Management',
      icon: Megaphone,
      tagline: 'Stay active where your customers are.',
      color: '#06B6D4', // Cyan
      description: 'We help businesses build a strong social media presence through engaging content and consistent branding.',
      features: [
        'Content Planning',
        'Social Media Posts',
        'Creative Designs',
        'Reels & Short Videos',
        'Account Management',
        'Performance Reports'
      ]
    },
    {
      id: 3,
      title: 'Branding & Design',
      icon: Palette,
      tagline: 'Look professional everywhere.',
      color: '#10B981', // Emerald
      description: 'A strong brand helps customers remember and trust your business. We create branding that reflects who you are and what makes your business unique.',
      features: [
        'Logo Design',
        'Brand Colors & Fonts',
        'Social Media Branding',
        'Business Marketing Materials',
        'Brand Guidelines'
      ]
    },
    {
      id: 4,
      title: 'Google Business Profile Setup',
      icon: MapPin,
      tagline: 'Get found by local customers.',
      color: '#EC4899', // Pink
      description: 'When someone searches for businesses near them, your Google profile plays a huge role. We optimize your profile to increase calls, visits, and enquiries.',
      features: [
        'Google Business Profile Setup',
        'Business Information Optimization',
        'Maps Visibility Improvements',
        'Review Management Guidance',
        'Local Search Optimization'
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing & Lead Generation',
      icon: Target,
      tagline: 'Turn visitors into customers.',
      color: '#8B5CF6', // Purple Accent
      description: 'We create marketing campaigns designed to bring the right people to your business and encourage them to get in touch.',
      features: [
        'Facebook & Instagram Ads',
        'Google Ads',
        'Lead Generation Campaigns',
        'Audience Targeting',
        'Conversion Tracking',
        'Performance Reports'
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
      {/* Ambient backgrounds */}
      <div className="glow-spot" style={{ top: '10%', right: '10%', opacity: 0.4 }} />
      <div className="glow-spot" style={{ bottom: '10%', left: '5%', opacity: 0.3, background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(2, 2, 4, 0) 70%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8%' }}>
        
        {/* Header Title */}
        <div style={{ marginBottom: '80px' }}>
          <p
            style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'var(--accent-purple)',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <CornerDownRight size={14} /> Our Services
          </p>
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
              maxWidth: '900px',
              color: '#FFFFFF'
            }}
          >
            Everything Your Business Needs to <span className="text-reveal">Grow Online.</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-dark-sub)',
              lineHeight: '1.6',
              maxWidth: '750px'
            }}
          >
            Whether you\'re starting from scratch or looking to improve your online presence, we help you attract more customers, build trust, and grow your business online.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px', 
            marginBottom: '120px' 
          }}
        >
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -8, borderColor: service.color, backgroundColor: 'rgba(255, 255, 255, 0.015)' }}
                className="glass-panel"
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderColor: 'var(--border-dark)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
                  transition: 'border-color 0.3s ease, background-color 0.3s ease'
                }}
              >
                {/* Icon Wrapper */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `${service.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: service.color,
                    marginBottom: '28px',
                    border: `1px solid ${service.color}25`
                  }}
                >
                  <Icon size={24} />
                </div>

                {/* Title and Tagline */}
                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>
                  {service.title}
                </h3>
                <p style={{ color: service.color, fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '20px', textTransform: 'uppercase' }}>
                  {service.tagline}
                </p>

                {/* Description */}
                <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px', flexGrow: 1 }}>
                  {service.description}
                </p>

                {/* Deliverables List */}
                <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px', color: 'var(--text-dark)' }}>
                  What You Get
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-dark-sub)' }}>
                      <Check size={14} style={{ color: service.color, marginTop: '4px', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Book Link Button */}
                <a
                  href="#/schedule"
                  className="btn-premium btn-premium-secondary"
                  style={{
                    padding: '10px 20px',
                    alignSelf: 'stretch',
                    gap: '8px',
                    fontSize: '13px',
                    textAlign: 'center',
                    borderColor: 'var(--border-dark)',
                    background: 'rgba(255, 255, 255, 0.01)',
                    color: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    if (e.target.style) {
                      e.target.style.borderColor = service.color;
                      e.target.style.background = `${service.color}08`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (e.target.style) {
                      e.target.style.borderColor = 'var(--border-dark)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.01)';
                    }
                  }}
                >
                  Book Strategy Slot <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bespoke vs. Traditional Comparison Section */}
        <div style={{ marginBottom: '120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>
              Why We Are Different
            </h2>
            <p style={{ color: 'var(--text-dark-sub)', marginTop: '10px', fontSize: '15px' }}>
              Standard marketing approaches often fail because they rely on shortcuts. We prioritize code performance and precise audience intent.
            </p>
          </div>

          <div className="glass-panel" style={{ overflowX: 'auto', padding: '10px', borderColor: 'var(--border-dark)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <th style={{ padding: '24px 20px', fontSize: '14px', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Operational Pillar</th>
                  <th style={{ padding: '24px 20px', fontSize: '14px', color: 'var(--text-dark-sub)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Traditional Template Agency</th>
                  <th style={{ padding: '24px 20px', fontSize: '14px', color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>PageNotFound Bespoke Pipelines</th>
                </tr>
              </thead>
              <tbody>
                {compareMatrix.map((row, index) => (
                  <tr key={index} style={{ borderBottom: index === compareMatrix.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.04)', background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.005)' : 'transparent' }}>
                    <td style={{ padding: '20px', fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)', fontFamily: 'var(--font-display)' }}>{row.metric}</td>
                    <td style={{ padding: '20px', fontSize: '14px', color: 'var(--text-dark-sub)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <X size={14} style={{ color: '#ef4444', flexShrink: 0 }} /> {row.traditional}
                      </span>
                    </td>
                    <td style={{ padding: '20px', fontSize: '14px', color: 'var(--text-dark)', fontWeight: 500 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} /> {row.bespoke}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
