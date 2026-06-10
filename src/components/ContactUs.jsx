import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, CornerDownRight, HelpCircle, ArrowRight } from 'lucide-react';

export default function ContactUs() {
  const [activeStep, setActiveStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Briefing builder states
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [clientInfo, setClientInfo] = useState({ name: '', company: '', email: '', details: '' });

  const goals = [
    { id: 'seo', label: 'Search Indexing (SEO)' },
    { id: 'campaigns', label: 'Intent Campaigns (PPC)' },
    { id: 'branding', label: 'Design System & Branding' },
    { id: 'experience', label: '3D WebGL / Experience' },
    { id: 'automation', label: 'Marketing Automation' }
  ];

  const budgets = [
    { value: '5-10', label: '$5,000 – $10,000' },
    { value: '10-25', label: '$10,000 – $25,000' },
    { value: '25+', label: '$25,000+' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (< 1 month)' },
    { value: 'standard', label: 'Standard (1–3 months)' },
    { value: 'planning', label: 'Planning (3+ months)' }
  ];

  const toggleGoal = (id) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter(g => g !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'Do you work on monthly retainers or fixed project fees?',
      a: 'We offer both options based on your goals. For core infrastructure implementation (e.g. SEO crawls, custom site builds), we structure fixed project milestones. For ongoing optimization, campaign performance, and content hub scaling, we run monthly retainer sprints.'
    },
    {
      q: 'What is your typical onboarding window?',
      a: 'Due to our technical, template-free approach, we restrict concurrent client intake. Onboarding typically takes 10 to 14 days, starting with a complete crawl audit and conversion tracking verification.'
    },
    {
      q: 'Do we own the custom codebase and assets?',
      a: 'Yes, absolutely. Once code deliverables are handed over and finalized, your company maintains full intellectual property ownership of the site, custom codebases, scripts, configurations, and creative assets.'
    },
    {
      q: 'How do you measure and verify campaign results?',
      a: 'We install server-side tracking pipelines connected directly to your CRM. This maps lead conversions directly to search queries and digital entry points, eliminating reliance on estimated browser-pixel metrics.'
    }
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
      <div className="glow-spot" style={{ top: '-10%', right: '20%', opacity: 0.5 }} />
      <div className="glow-spot" style={{ bottom: '-15%', left: '10%', opacity: 0.4, background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(2, 2, 4, 0) 70%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8%' }}>
        
        {/* Header Block */}
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
            <CornerDownRight size={14} /> Briefing Center
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
            Let's Engineer Your <span className="text-reveal">Online Presence</span>.
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-dark-sub)',
              lineHeight: '1.6',
              maxWidth: '750px'
            }}
          >
            Skip the generic introductory chat. Complete our Briefing Builder to lay out your scope, target parameters, and timelines.
          </p>
        </div>

        {/* Briefing Builder + Form Grid */}
        <div style={{ display: 'flex', gap: '60px', marginBottom: '120px' }} className="contact-grid">
          
          {/* Left Block: Briefing Builder */}
          <div style={{ flex: 1.2 }}>
            <div className="glass-panel" style={{ padding: '40px', borderColor: 'var(--border-dark)' }}>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '60px 0' }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'var(--accent-emerald)' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginBottom: '12px' }}>Briefing Strategy Initiated</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-dark-sub)', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
                    We have received your custom requirements map. Our digital architecture team will review your objectives and contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  
                  {/* Step 1: Goals */}
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-purple)' }}>01 /</span> Select Growth Objectives
                    </h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {goals.map(goal => {
                        const isSelected = selectedGoals.includes(goal.id);
                        return (
                          <button
                            type="button"
                            key={goal.id}
                            onClick={() => toggleGoal(goal.id)}
                            style={{
                              padding: '10px 18px',
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              border: '1px solid',
                              borderColor: isSelected ? 'var(--accent-purple)' : 'rgba(24, 24, 27, 0.08)',
                              background: isSelected ? 'rgba(139, 92, 246, 0.1)' : 'rgba(24, 24, 27, 0.02)',
                              color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {goal.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Budget */}
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-blue)' }}>02 /</span> Projected Investment Range
                    </h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {budgets.map(b => {
                        const isSelected = budget === b.value;
                        return (
                          <button
                            type="button"
                            key={b.value}
                            onClick={() => setBudget(b.value)}
                            style={{
                              padding: '10px 18px',
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              border: '1px solid',
                              borderColor: isSelected ? 'var(--accent-blue)' : 'rgba(24, 24, 27, 0.08)',
                              background: isSelected ? 'rgba(59, 130, 246, 0.1)' : 'rgba(24, 24, 27, 0.02)',
                              color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {b.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Timeline */}
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-cyan)' }}>03 /</span> Timeline Parameters
                    </h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {timelines.map(t => {
                        const isSelected = timeline === t.value;
                        return (
                          <button
                            type="button"
                            key={t.value}
                            onClick={() => setTimeline(t.value)}
                            style={{
                              padding: '10px 18px',
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              border: '1px solid',
                              borderColor: isSelected ? 'var(--accent-cyan)' : 'rgba(24, 24, 27, 0.08)',
                              background: isSelected ? 'rgba(6, 182, 212, 0.1)' : 'rgba(24, 24, 27, 0.02)',
                              color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {t.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 4: Contact Details */}
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-emerald)' }}>04 /</span> Strategic Context
                    </h3>
                    
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }} className="contact-form-row">
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={clientInfo.name}
                          onChange={handleInfoChange}
                          placeholder="John Doe"
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            background: 'rgba(24, 24, 27, 0.02)',
                            border: '1px solid rgba(24, 24, 27, 0.15)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Company / Domain</label>
                        <input
                          required
                          type="text"
                          name="company"
                          value={clientInfo.company}
                          onChange={handleInfoChange}
                          placeholder="domain.com"
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            background: 'rgba(24, 24, 27, 0.02)',
                            border: '1px solid rgba(24, 24, 27, 0.15)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Work Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={clientInfo.email}
                        onChange={handleInfoChange}
                        placeholder="john@domain.com"
                        style={{
                          padding: '12px 16px',
                          borderRadius: '8px',
                          background: 'rgba(24, 24, 27, 0.02)',
                          border: '1px solid rgba(24, 24, 27, 0.15)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Describe Your Pipeline Objective</label>
                      <textarea
                        rows={4}
                        name="details"
                        value={clientInfo.details}
                        onChange={handleInfoChange}
                        placeholder="Outline the current problems you are facing in search results or organic conversion..."
                        style={{
                          padding: '12px 16px',
                          borderRadius: '8px',
                          background: 'rgba(24, 24, 27, 0.02)',
                          border: '1px solid rgba(24, 24, 27, 0.15)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                          resize: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-premium btn-premium-primary"
                    style={{
                      padding: '14px 0',
                      width: '100%',
                      gap: '8px',
                      backgroundColor: 'var(--accent-purple)',
                      color: '#ffffff',
                      boxShadow: '0 10px 20px rgba(139, 92, 246, 0.2)'
                    }}
                  >
                    Submit Briefing Blueprint <Send size={14} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {/* Right Block: FAQ */}
          <div style={{ flex: 0.8 }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HelpCircle size={20} style={{ color: 'var(--accent-purple)' }} /> Clarifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(24, 24, 27, 0.08)', paddingBottom: '20px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-dark)', lineHeight: '1.4', fontFamily: 'var(--font-display)' }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-dark-sub)', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .contact-form-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
