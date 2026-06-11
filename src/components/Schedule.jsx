import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Video, Check, ArrowRight, CornerDownRight, Sparkles, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Schedule() {
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState('Google Meet');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ name: '', email: '', domain: '', note: '' });

  // Mock available dates (next few weekdays)
  const availableDates = [
    { day: 'Mon', num: '15', dateString: 'Monday, June 15' },
    { day: 'Tue', num: '16', dateString: 'Tuesday, June 16' },
    { day: 'Wed', num: '17', dateString: 'Wednesday, June 17' },
    { day: 'Thu', num: '18', dateString: 'Thursday, June 18' },
    { day: 'Fri', num: '19', dateString: 'Friday, June 19' },
  ];

  // Mock available times slots (9 AM - 5 PM)
  const availableTimes = [
    '09:00 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
  ];

  const handleNextStep = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time slot first.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert('Please fill in your name and email.');
      return;
    }
    
    // Trigger confetti animation
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7c3aed', '#2563eb', '#06b6d4', '#059669', '#ec4899']
    });

    setStep(3);
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
        paddingBottom: '120px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {/* Background ambient glows */}
      <div className="glow-spot" style={{ top: '10%', right: '15%', opacity: 0.5 }} />
      <div className="glow-spot" style={{ bottom: '10%', left: '10%', opacity: 0.3, background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, rgba(2, 2, 4, 0) 70%)' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 8%' }}>
        
        {/* Header Block */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'var(--accent-purple)',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} /> Briefing &amp; Strategy
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            Book a <span className="text-reveal">Strategy Call</span>.
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-dark-sub)',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Select a date, time, and your preferred platform. Let's map out a customized digital engineering sitemap for your pipeline.
          </p>
        </div>

        {/* Steps tracker progress indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: step >= 1 ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 'bold',
              color: step >= 1 ? '#ffffff' : 'var(--text-dark-sub)',
              border: step >= 1 ? 'none' : '1px solid var(--border-dark)',
              transition: 'all 0.3s ease'
            }}>
              1
            </span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: step >= 1 ? 'var(--text-dark)' : 'var(--text-dark-sub)' }}>Time &amp; Platform</span>
          </div>
          <ChevronRight size={14} style={{ color: 'rgba(255, 255, 255, 0.15)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: step >= 2 ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 'bold',
              color: step >= 2 ? '#ffffff' : 'var(--text-dark-sub)',
              border: step >= 2 ? 'none' : '1px solid var(--border-dark)',
              transition: 'all 0.3s ease'
            }}>
              2
            </span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: step >= 2 ? 'var(--text-dark)' : 'var(--text-dark-sub)' }}>Briefing Details</span>
          </div>
        </div>

        {/* Content Pane */}
        <div className="glass-panel" style={{ padding: '40px', borderColor: 'var(--border-dark)', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            
            {/* Step 1: Select Platform and Date/Time */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* 1. Select Platform */}
                <div style={{ marginBottom: '36px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Video size={18} style={{ color: 'var(--accent-purple)' }} /> Select Video Platform
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {['Google Meet', 'Zoom'].map((p) => {
                      const isSelected = platform === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPlatform(p)}
                          style={{
                            background: isSelected ? 'rgba(124, 58, 237, 0.08)' : 'rgba(255, 255, 255, 0.01)',
                            border: '1px solid',
                            borderColor: isSelected ? 'var(--accent-purple)' : 'var(--border-dark)',
                            borderRadius: '12px',
                            padding: '18px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            color: isSelected ? '#ffffff' : 'var(--text-dark-sub)',
                            fontWeight: 600,
                            fontSize: '15px',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            border: '2px solid',
                            borderColor: isSelected ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                          }}>
                            {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-purple)' }} />}
                          </div>
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Select Date */}
                <div style={{ marginBottom: '36px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} style={{ color: 'var(--accent-purple)' }} /> Select Date
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }} className="date-grid">
                    {availableDates.map((d) => {
                      const isSelected = selectedDate === d.dateString;
                      return (
                        <button
                          key={d.num}
                          type="button"
                          onClick={() => setSelectedDate(d.dateString)}
                          style={{
                            background: isSelected ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.01)',
                            border: '1px solid',
                            borderColor: isSelected ? 'var(--accent-purple)' : 'var(--border-dark)',
                            borderRadius: '12px',
                            padding: '16px 8px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '6px',
                            color: isSelected ? '#ffffff' : 'var(--text-dark-sub)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: isSelected ? 1 : 0.6 }}>{d.day}</span>
                          <span style={{ fontSize: '20px', fontWeight: 800, color: isSelected ? '#ffffff' : 'var(--text-dark)' }}>{d.num}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Select Time */}
                <div style={{ marginBottom: '40px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={18} style={{ color: 'var(--accent-purple)' }} /> Available Timeslots (EST / Local Time)
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '10px' }}>
                    {availableTimes.map((t) => {
                      const isSelected = selectedTime === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          style={{
                            background: isSelected ? 'rgba(124, 58, 237, 0.15)' : 'rgba(255, 255, 255, 0.01)',
                            border: '1px solid',
                            borderColor: isSelected ? 'var(--accent-purple)' : 'var(--border-dark)',
                            borderRadius: '10px',
                            padding: '12px 6px',
                            cursor: 'pointer',
                            color: isSelected ? '#ffffff' : 'var(--text-dark-sub)',
                            fontSize: '13px',
                            fontWeight: 600,
                            textAlign: 'center',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="btn-premium btn-premium-primary"
                  style={{ width: '100%', gap: '8px' }}
                >
                  Continue to Briefing Details <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {/* Step 2: Form Booking Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700, letterSpacing: '0.05em' }}>Meeting Setup</span>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, marginTop: '2px' }}>
                      {platform} on {selectedDate} at {selectedTime}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-purple)',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'underline'
                    }}
                  >
                    Change Time
                  </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="fullName" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Full Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-dark)',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="workEmail" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Work Email *</label>
                      <input
                        id="workEmail"
                        type="email"
                        required
                        placeholder="john@domain.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-dark)',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="companyDomain" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>Company Website / Domain</label>
                    <input
                      id="companyDomain"
                      type="text"
                      placeholder="domain.com"
                      value={form.domain}
                      onChange={(e) => setForm({ ...form, domain: e.target.value })}
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-dark)',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="pipelineObjective" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-dark-sub)' }}>What is your core pipeline or visibility objective?</label>
                    <textarea
                      id="pipelineObjective"
                      rows="4"
                      placeholder="E.g., We are launching a new product and need a fast site, or our current site does not generate organic conversions..."
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-dark)',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-premium btn-premium-primary"
                    style={{ width: '100%', gap: '8px', marginTop: '10px' }}
                  >
                    Confirm Booking Schedule <Check size={16} />
                  </button>
                </form>
              </motion.div>
            )}

            {/* Step 3: Success Screen */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', padding: '24px 0' }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid var(--accent-emerald)',
                  color: 'var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                }}>
                  <Check size={32} />
                </div>

                <h2 style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: '12px' }}>
                  Strategy Call Scheduled!
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-dark-sub)', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto 36px auto' }}>
                  Congratulations {form.name}! Your briefing blueprint has been initiated. A calendar invitation with the {platform} link has been sent to <span style={{ color: '#ffffff', fontWeight: 600 }}>{form.email}</span>.
                </p>

                <div style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '12px',
                  padding: '20px',
                  maxWidth: '380px',
                  margin: '0 auto 40px auto',
                  textAlign: 'left'
                }}>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--accent-purple)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Meeting Blueprint
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>{platform} Session</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-dark-sub)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Calendar size={14} /> {selectedDate}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-dark-sub)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} /> {selectedTime}
                  </div>
                </div>

                <a
                  href="#/"
                  className="btn-premium btn-premium-secondary"
                  style={{ padding: '12px 28px' }}
                >
                  Return to Home
                </a>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .date-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
