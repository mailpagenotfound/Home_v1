import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, CornerDownRight, HelpCircle } from 'lucide-react';

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Briefing builder states
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [websiteBudget, setWebsiteBudget] = useState('');
  const [marketingBudget, setMarketingBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  
  const [clientInfo, setClientInfo] = useState({
    contactName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    achieve: ''
  });

  const goals = [
    { id: 'business_website', label: 'Business Website' },
    { id: 'ecommerce_website', label: 'E-Commerce Website' },
    { id: 'website_redesign', label: 'Website Redesign' },
    { id: 'seo', label: 'Google Ranking (SEO)' },
    { id: 'social_media', label: 'Social Media Marketing' },
    { id: 'gbp_setup', label: 'Google Business Profile Setup' },
    { id: 'branding_logo', label: 'Branding & Logo Design' },
    { id: 'meta_ads', label: 'Meta Ads (Facebook & Instagram)' },
    { id: 'google_ads', label: 'Google Ads' },
    { id: 'complete_marketing', label: 'Complete Digital Marketing' }
  ];

  const websiteBudgets = [
    { value: '15-20k', label: '₹15,000 – ₹20,000' },
    { value: '20-40k', label: '₹20,000 – ₹40,000' },
    { value: '40-75k', label: '₹40,000 – ₹75,000' },
    { value: '75k+', label: '₹75,000+' }
  ];

  const marketingBudgets = [
    { value: '5-10k_mo', label: '₹5,000 – ₹10,000 / month' },
    { value: '10-20k_mo', label: '₹10,000 – ₹20,000 / month' },
    { value: '20-35k_mo', label: '₹20,000 – ₹35,000 / month' },
    { value: '35k+_mo', label: '₹35,000+ / month' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediately' },
    { value: '2weeks', label: 'Within 2 Weeks' },
    { value: '1month', label: 'Within 1 Month' },
    { value: 'exploring', label: 'Just Exploring Options' }
  ];

  const faqs = [
    {
      q: 'How much does a website cost?',
      a: 'Our business websites typically start from ₹15,000 and scale based on features, pages, and integrations required.'
    },
    {
      q: 'Do you offer monthly marketing plans?',
      a: 'Yes. We provide flexible monthly plans for SEO, social media management, and digital marketing based on your business goals.'
    },
    {
      q: 'How long does a website take?',
      a: 'Most projects are completed within 1–4 weeks depending on complexity and content readiness.'
    },
    {
      q: 'Will I own my website?',
      a: 'Absolutely. Once the project is completed and handed over, you retain full ownership of your website and assets.'
    },
    {
      q: 'Can you help my business rank on Google?',
      a: 'Yes. We offer SEO and local search optimization services to improve your visibility and attract more potential customers.'
    }
  ];

  // Rotating placeholder logic for the textarea
  const placeholders = [
    "We want a professional website for our business...",
    "We want more enquiries from Google...",
    "We want help managing our social media..."
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const placeholderText = placeholders[placeholderIndex];

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

    // Build structured email body
    const formattedGoals = selectedGoals.length > 0
      ? selectedGoals.map(gId => goals.find(g => g.id === gId)?.label || gId).join('\n  - ')
      : 'None selected';

    const selectedWebBudget = websiteBudget
      ? websiteBudgets.find(b => b.value === websiteBudget)?.label
      : 'None selected';

    const selectedMktBudget = marketingBudget
      ? marketingBudgets.find(b => b.value === marketingBudget)?.label
      : 'None selected';

    const selectedTimeline = timeline
      ? timelines.find(t => t.value === timeline)?.label
      : 'None selected';

    const subject = `Project Briefing - ${clientInfo.businessName || clientInfo.contactName}`;
    
    const body = `Hi PageNotFound Team,

I have completed the Briefing Builder on your website. Here are my project requirements:

01 / WHAT DO YOU NEED HELP WITH?
  - ${formattedGoals}

02 / PROJECT BUDGET
  - Website Projects: ${selectedWebBudget}
  - Marketing Projects: ${selectedMktBudget}

03 / WHEN WOULD YOU LIKE TO START?
  - ${selectedTimeline}

04 / ABOUT MY BUSINESS
  - Contact Name: ${clientInfo.contactName}
  - Business Name: ${clientInfo.businessName}
  - Email Address: ${clientInfo.email}
  - Phone Number: ${clientInfo.phone}
  - Website: ${clientInfo.website || 'Not provided'}
  
  What we are looking to achieve:
  ${clientInfo.achieve}

Best regards,
${clientInfo.contactName}
`;

    // Trigger mailto link redirection safely via a dynamic anchor element
    const mailtoUrl = `mailto:drop@pagenotfound.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // Delay the success screen state change to allow browser to handle the mailto redirect before unmounting the form
    setTimeout(() => {
      setFormSubmitted(true);
    }, 400);
  };

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
            <CornerDownRight size={14} /> GET IN TOUCH / BRIEFING CENTER
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
            Helping Businesses <span className="text-reveal">Get Found Online</span>.
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-dark-sub)',
              lineHeight: '1.6',
              maxWidth: '750px'
            }}
          >
            From websites and branding to SEO and digital marketing, we help businesses create a strong online presence that attracts customers and drives growth.
          </p>
        </div>

        {/* Briefing Builder + Form Grid */}
        <div style={{ display: 'flex', gap: '60px', marginBottom: '120px' }} className="contact-grid">
          
          {/* Left Block: Briefing Builder */}
          <div style={{ flex: 1.2 }}>
            <div className="glass-panel" style={{ padding: '40px', borderColor: 'var(--border-dark)', background: 'rgba(255, 255, 255, 0.015)' }}>
              
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
                  <p style={{ fontSize: '15px', color: 'var(--text-dark-sub)', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6', marginBottom: '30px' }}>
                    Your customized requirement mapping has been compiled. If your email client did not launch automatically, you can send it directly to our team:
                  </p>
                  <a 
                    href={`mailto:drop@pagenotfound.in`}
                    className="btn-premium btn-premium-primary"
                    style={{
                      padding: '12px 30px',
                      backgroundColor: 'var(--accent-purple)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: 600,
                      boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)'
                    }}
                  >
                    drop@pagenotfound.in
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  
                  {/* Step 1: Goals */}
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-purple)' }}>01 /</span> WHAT DO YOU NEED HELP WITH?
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
                              borderColor: isSelected ? 'var(--accent-purple)' : 'var(--border-dark)',
                              background: isSelected ? 'rgba(124, 58, 237, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                              color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <span style={{ color: isSelected ? 'var(--accent-purple)' : 'transparent', fontWeight: 'bold' }}>✓</span>
                            {goal.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Budget */}
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-blue)' }}>02 /</span> PROJECT BUDGET
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="budget-columns">
                      {/* Website Projects Budget */}
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>Website Projects</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {websiteBudgets.map(b => {
                            const isSelected = websiteBudget === b.value;
                            return (
                              <button
                                type="button"
                                key={b.value}
                                onClick={() => setWebsiteBudget(isSelected ? '' : b.value)}
                                style={{
                                  padding: '12px 16px',
                                  borderRadius: '8px',
                                  fontSize: '13px',
                                  fontWeight: 600,
                                  textAlign: 'left',
                                  cursor: 'pointer',
                                  border: '1px solid',
                                  borderColor: isSelected ? 'var(--accent-blue)' : 'var(--border-dark)',
                                  background: isSelected ? 'rgba(37, 99, 235, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                                  color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                                  transition: 'all 0.2s ease',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px'
                                }}
                              >
                                <div style={{
                                  width: '16px',
                                  height: '16px',
                                  borderRadius: '4px',
                                  border: '2px solid',
                                  borderColor: isSelected ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.15)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '10px',
                                  color: '#ffffff'
                                }}>
                                  {isSelected && '✓'}
                                </div>
                                {b.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Marketing Projects Budget */}
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>Marketing Projects</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {marketingBudgets.map(b => {
                            const isSelected = marketingBudget === b.value;
                            return (
                              <button
                                type="button"
                                key={b.value}
                                onClick={() => setMarketingBudget(isSelected ? '' : b.value)}
                                style={{
                                  padding: '12px 16px',
                                  borderRadius: '8px',
                                  fontSize: '13px',
                                  fontWeight: 600,
                                  textAlign: 'left',
                                  cursor: 'pointer',
                                  border: '1px solid',
                                  borderColor: isSelected ? 'var(--accent-blue)' : 'var(--border-dark)',
                                  background: isSelected ? 'rgba(37, 99, 235, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                                  color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                                  transition: 'all 0.2s ease',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px'
                                }}
                              >
                                <div style={{
                                  width: '16px',
                                  height: '16px',
                                  borderRadius: '4px',
                                  border: '2px solid',
                                  borderColor: isSelected ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.15)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '10px',
                                  color: '#ffffff'
                                }}>
                                  {isSelected && '✓'}
                                </div>
                                {b.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Timeline */}
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-cyan)' }}>03 /</span> WHEN WOULD YOU LIKE TO START?
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                      {timelines.map(t => {
                        const isSelected = timeline === t.value;
                        return (
                          <button
                            type="button"
                            key={t.value}
                            onClick={() => setTimeline(t.value)}
                            style={{
                              padding: '12px 18px',
                              borderRadius: '8px',
                              fontSize: '13px',
                              fontWeight: 600,
                              textAlign: 'left',
                              cursor: 'pointer',
                              border: '1px solid',
                              borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-dark)',
                              background: isSelected ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                              color: isSelected ? 'var(--text-dark)' : 'var(--text-dark-sub)',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px'
                            }}
                          >
                            <div style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              border: '2px solid',
                              borderColor: isSelected ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.2s ease'
                            }}>
                              {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />}
                            </div>
                            {t.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 4: Contact Details */}
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-emerald)' }}>04 /</span> TELL US ABOUT YOUR BUSINESS
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="contact-form-row">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Contact Name *</label>
                        <input
                          required
                          type="text"
                          name="contactName"
                          value={clientInfo.contactName}
                          onChange={handleInfoChange}
                          placeholder="John Doe"
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid var(--border-dark)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Business Name *</label>
                        <input
                          required
                          type="text"
                          name="businessName"
                          value={clientInfo.businessName}
                          onChange={handleInfoChange}
                          placeholder="Your Business Name"
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid var(--border-dark)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="contact-form-row">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Email Address *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={clientInfo.email}
                          onChange={handleInfoChange}
                          placeholder="john@business.com"
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid var(--border-dark)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Phone Number *</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={clientInfo.phone}
                          onChange={handleInfoChange}
                          placeholder="+91 98765 43210"
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid var(--border-dark)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Website (Optional)</label>
                      <input
                        type="url"
                        name="website"
                        value={clientInfo.website}
                        onChange={handleInfoChange}
                        placeholder="https://yourbusiness.com"
                        style={{
                          padding: '12px 16px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-dark)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>What are you looking to achieve?</label>
                      <textarea
                        required
                        rows={4}
                        name="achieve"
                        value={clientInfo.achieve}
                        onChange={handleInfoChange}
                        placeholder={placeholderText}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-dark)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                          resize: 'none',
                          fontFamily: 'inherit',
                          fontSize: '14px'
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
                <div key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '20px' }}>
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
          .budget-columns {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
