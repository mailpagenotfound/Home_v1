import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CornerDownRight } from 'lucide-react';

export default function AboutUs() {
  const outroRef = useRef(null);
  const isOutroInView = useInView(outroRef, { amount: 0.35, once: false });
  const [isOutroHovered, setIsOutroHovered] = useState(false);

  const outroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const outroQuoteVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: 'easeOut' }
    }
  };

  const outroHeadlineVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const outroSupportVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const outroFinalVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' }
    }
  };
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
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              maxWidth: '950px',
              color: '#FFFFFF'
            }}
          >
            Helping Great Businesses Stop Looking Like <span className="text-gradient-purple-blue">Best-Kept Secrets.</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants} 
            style={{ 
              maxWidth: '850px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px' 
            }}
          >
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', color: '#FFFFFF', fontWeight: 500, lineHeight: '1.5' }}>
              Let's be honest.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-dark-sub)', lineHeight: '1.7' }}>
              You've probably spent years building your business. You've handled difficult customers, fixed problems nobody else could solve, worked weekends, skipped holidays, and somehow survived the endless "Can you just do it for less?" conversations.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-dark-sub)', lineHeight: '1.7' }}>
              Your business has grown. Your experience has grown. Your reputation has grown.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-dark-sub)', lineHeight: '1.7' }}>
              But then someone visits your website... and suddenly it feels like they're looking at a completely different business.
            </p>
            <p style={{ fontSize: '18px', color: '#8B5CF6', fontWeight: 600, lineHeight: '1.6', fontStyle: 'italic', margin: '4px 0' }}>
              Awkward.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-dark-sub)', lineHeight: '1.7' }}>
              That's where we come in.
            </p>
          </motion.div>
        </div>

        {/* Narrative / Philosophy section */}
        <motion.div 
          variants={itemVariants}
          className="glass-panel"
          style={{
            padding: '50px 60px',
            marginBottom: '100px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', gap: '60px', flexDirection: 'row' }} className="philosophy-flex">
            <div style={{ flex: 1.2 }}>
              <p style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-purple)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Why We Started
              </p>
              <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, marginBottom: '24px', fontFamily: 'var(--font-display)', lineHeight: '1.2' }}>
                Why We Started <span className="text-gradient-purple-blue">PageNotFound.</span>
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                Before starting PageNotFound, we worked with startups, agencies, and businesses across different industries. And we kept running into the same situation: Amazing businesses were being overlooked online.
              </p>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                Not because they weren't good. Not because customers didn't need them. But because their online presence wasn't doing them any favors.
              </p>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7' }}>
                Some didn't have a website. Some had websites older than their newest employee. Some had websites that looked beautiful but generated less business than a handwritten signboard.
              </p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  Meanwhile, businesses with average products and a better online presence were winning attention.
                </p>
                <p style={{ color: '#06B6D4', fontWeight: 600, fontSize: '15px', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  That felt backwards.
                </p>
              </div>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                So we decided to do something about it. PageNotFound started with a simple idea: <strong>Good businesses shouldn't be hard to find.</strong> And they definitely shouldn't lose customers because of an outdated website.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pillars / Values Section */}
        <div style={{ marginBottom: '120px' }}>
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-purple)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Our Philosophy
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              What We Believe
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <motion.div
              variants={itemVariants}
              className="glass-panel"
              style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-purple)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                01 / YOUR WEBSITE SHOULD WORK HARDER THAN YOU DO
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', fontFamily: 'var(--font-display)', color: '#FFFFFF', lineHeight: '1.3' }}>
                Work Harder Than You Do
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px' }}>
                Okay, maybe not harder. But definitely close.
              </p>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>
                A website shouldn't just sit there looking pretty. It should answer questions, build trust, generate enquiries, and make customers think: <strong>"Yep, these are the people I'm looking for."</strong>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-panel"
              style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-blue)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                02 / SIMPLE BEATS COMPLICATED
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', fontFamily: 'var(--font-display)', color: '#FFFFFF', lineHeight: '1.3' }}>
                Simple Beats Complicated
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px' }}>
                We've seen enough "revolutionary digital solutions" to last a lifetime. Most business owners don't want complicated. They want something that works.
              </p>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>
                That's exactly how we approach every project. No unnecessary jargon. No mystery. No pretending everything needs ten meetings and a 50-page strategy deck.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-panel"
              style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                03 / WE DON'T DISAPPEAR AFTER LAUNCH DAY
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', fontFamily: 'var(--font-display)', color: '#FFFFFF', lineHeight: '1.3' }}>
                We Don't Disappear
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', marginBottom: '12px' }}>
                A lot of agencies treat website launch day like a season finale. Cue dramatic music. Fade to black. Good luck.
              </p>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>
                That's not us. Need an update? Need a new page? Need help figuring something out six months later? We'll still be here.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div style={{ marginBottom: '100px' }} className="approach-section">
          <div style={{ display: 'flex', gap: '60px', flexDirection: 'row', alignItems: 'flex-start' }} className="philosophy-flex">
            <motion.div style={{ flex: 1.2 }} variants={itemVariants}>
              <p style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-purple)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Longevity
              </p>
              <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
                Built for the Long Run.
              </h3>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
                We don't believe a website is something you launch and forget about. Businesses change. Services evolve. New ideas happen. Customers expect more.
              </p>
              <p style={{ color: 'var(--text-dark-sub)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                Your online presence should grow along with everything else. Whether you're building your first website, replacing an outdated one, or finally creating something you're proud to share, we're here for the journey. Not just the launch.
              </p>
              <a 
                href="https://calendly.com/mailpagenotfound-in/30min"
                target="_blank"
                rel="noopener noreferrer"
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
                onMouseEnter={(e) => {
                  if (e.target.style) e.target.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  if (e.target.style) e.target.style.gap = '8px';
                }}
              >
                Discuss a Partnership <ArrowRight size={14} />
              </a>
            </motion.div>
            <motion.div style={{ flex: 1 }} variants={itemVariants}>
              <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.08)', paddingLeft: '32px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-purple)', textTransform: 'uppercase', display: 'block', marginBottom: '24px', letterSpacing: '0.1em' }}>
                  Why People Work With PageNotFound
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    "We explain things like humans",
                    "We care about business results, not buzzwords",
                    "We keep the process simple",
                    "We build websites people actually enjoy using",
                    "We provide ongoing support",
                    "We genuinely want your business to succeed"
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#06B6D4', fontWeight: 'bold' }}>✓</span>
                      <p style={{ color: 'var(--text-dark-sub)', fontSize: '15px', lineHeight: '1.4', margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cinematic dimming background */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            opacity: isOutroInView ? 1 : 0,
            pointerEvents: 'none',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 4
          }}
        />

        {/* Outro Callout Section */}
        <motion.div
          ref={outroRef}
          variants={outroContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          onMouseEnter={() => setIsOutroHovered(true)}
          onMouseLeave={() => setIsOutroHovered(false)}
          whileHover={{
            borderColor: 'rgba(124, 58, 237, 0.18)',
            boxShadow: '0 25px 60px rgba(124, 58, 237, 0.08)',
            backgroundColor: 'rgba(255, 255, 255, 0.025)'
          }}
          style={{
            position: 'relative',
            zIndex: 5,
            textAlign: 'center',
            padding: '100px 50px',
            background: 'rgba(255, 255, 255, 0.012)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            margin: '120px 0 150px 0',
            borderRadius: '28px',
            overflow: 'hidden',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease'
          }}
        >
          {/* Ambient Background Orbs */}
          <motion.div
            animate={{
              x: [0, 30, -15, 0],
              y: [0, -25, 15, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '10%',
              left: '15%',
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
              filter: 'blur(45px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
          <motion.div
            animate={{
              x: [0, -25, 25, 0],
              y: [0, 15, -30, 0],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '15%',
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
              filter: 'blur(45px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          {/* Decorative Quotation Marks */}
          <span style={{
            position: 'absolute',
            top: '10px',
            left: '30px',
            fontSize: '220px',
            fontFamily: 'var(--font-display), "Outfit", Georgia, serif',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--accent-purple)',
            opacity: 0.06,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            “
          </span>
          <span style={{
            position: 'absolute',
            bottom: '-100px',
            right: '30px',
            fontSize: '220px',
            fontFamily: 'var(--font-display), "Outfit", Georgia, serif',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--accent-purple)',
            opacity: 0.06,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            ”
          </span>

          <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            
            {/* Stage 1: Quote */}
            <motion.p 
              variants={outroQuoteVariants}
              style={{ 
                color: 'var(--text-dark-sub)', 
                fontSize: '15.5px', 
                lineHeight: '1.8', 
                marginBottom: '36px', 
                fontStyle: 'italic',
                fontWeight: 400
              }}
            >
              "At the end of the day, we're not trying to build the fanciest agency on the internet. We're trying to help great businesses get noticed."
            </motion.p>
            
            {/* Stage 2: Main Headline */}
            <motion.h4 
              variants={outroHeadlineVariants}
              style={{ 
                fontSize: 'clamp(28px, 4.5vw, 40px)', 
                color: '#FFFFFF', 
                fontWeight: 900, 
                lineHeight: 1.15, 
                letterSpacing: '-0.02em',
                marginBottom: '20px', 
                fontFamily: 'var(--font-display)' 
              }}
            >
              Because after everything you've put into building your business...
            </motion.h4>
            
            {/* Stage 3: Supporting Text */}
            <motion.p 
              variants={outroSupportVariants}
              style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: '17px', 
                lineHeight: '1.65', 
                marginBottom: '24px' 
              }}
            >
              Being impossible to find online shouldn't be the reason you miss your next customer.
            </motion.p>
            
            {/* Stage 4: Final highlighted sentence */}
            <motion.p 
              variants={outroFinalVariants}
              animate={isOutroHovered ? {
                letterSpacing: '0.04em',
                textShadow: '0 0 16px rgba(6, 182, 212, 0.7)'
              } : {
                letterSpacing: '0.01em',
                textShadow: '0 0 8px rgba(6, 182, 212, 0.3)'
              }}
              style={{ 
                color: '#06B6D4', 
                fontSize: '19px', 
                fontWeight: 800,
                transition: 'letter-spacing 0.3s ease, text-shadow 0.3s ease'
              }}
            >
              And honestly? That's a problem worth fixing.
            </motion.p>
          </div>
        </motion.div>
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
