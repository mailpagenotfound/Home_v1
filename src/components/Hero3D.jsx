import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Globe, 
  Eye, 
  TrendingUp, 
  Code, 
  CheckCircle,
  TrendingDown,
  Sparkles,
  MousePointerClick,
  Monitor,
  Layout,
  MessageSquare,
  BarChart2,
  Lock,
  Compass,
  Zap
} from 'lucide-react';

export default function Hero3D() {
  // -------------------------------------------------------------
  // STAGES & INTERACTIVE STATES
  // -------------------------------------------------------------
  // Stages:
  // 1: Search typing "why can't customers find my website"
  // 2: Typing complete, pause, then searching...
  // 3: Search results render, PageNotFound highlighted
  // 4: PageNotFound result clicked/selected -> expands to browser & unlocks scroll
  const [hasRevealedHero, setHasRevealedHero] = useState(false);
  const [typingStage, setTypingStage] = useState(1);
  const [typedText, setTypedText] = useState('');
  
  const [isSearching, setIsSearching] = useState(false);
  const [searchGlow, setSearchGlow] = useState(false);
  
  const query = "why can't customers find my website";
  const containerRef = useRef(null);
  const hasRevealedHeroRef = useRef(hasRevealedHero);

  // -------------------------------------------------------------
  // STAGE 1 & 2: AUTO TYPING AND AUTO SEARCH TRIGGER
  // -------------------------------------------------------------
  // Typing simulation
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('hero-locked');
    
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= query.length) {
        setTypedText(query.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingStage(2); // Typing complete
      }
    }, 75);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Event listener scroll-blocking to ensure bulletproof locking during stages 1-3
  useEffect(() => {
    const preventScroll = (e) => {
      if (typingStage < 4) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const keys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
    const preventDefaultForKeys = (e) => {
      if (typingStage < 4 && keys[e.keyCode]) {
        e.preventDefault();
        return false;
      }
    };

    if (typingStage < 4) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventDefaultForKeys, { passive: false });
      document.body.classList.add('hero-locked');
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.classList.remove('hero-locked');
      if (window.lenis) {
        window.lenis.start();
      }
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventDefaultForKeys);
      document.body.classList.remove('hero-locked');
    };
  }, [typingStage]);

  // Handle stage transitions
  useEffect(() => {
    if (typingStage === 2) {
      // Pause 1 second then trigger search
      const timer = setTimeout(() => {
        setIsSearching(true);
        setSearchGlow(true);
        // Searching state for 1.8 seconds
        const searchTimer = setTimeout(() => {
          setTypingStage(3); // Results page ready
          setIsSearching(false);
        }, 1800);
        return () => clearTimeout(searchTimer);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (typingStage === 3) {
      // Automatically highlight and select PageNotFound after 1.5 seconds
      const highlightTimer = setTimeout(() => {
        setTypingStage(4); // Trigger PageNotFound selected and expanded
      }, 1500);
      return () => clearTimeout(highlightTimer);
    }
  }, [typingStage]);

  // -------------------------------------------------------------
  // SCROLL BOUND TRANSFORMATIONS (STAGE 3 TO 8)
  // -------------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stage 3 & 4: Browser window transforms into MacBook screen and opens lid
  // Range: 0.0 -> 0.20: Scale & Perspective tilt browser window, Keyboard Base slides up
  // Stage 3 & 4: Browser window transforms into MacBook screen and opens lid
  // Range: 0.0 -> 0.20: Scale & Perspective tilt browser window, Keyboard Base slides up
  const browserScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.65]);
  const browserY = useTransform(scrollYProgress, [0, 0.2], ["0vh", "5vh"]);
  const browserRotateX = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      return -10;
    } else {
      if (progress < 0.2) {
        return (progress / 0.2) * -10;
      }
      return -10;
    }
  });
  const keyboardOpacity = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      return 1;
    } else {
      if (progress < 0.08) return 0;
      if (progress < 0.2) {
        return (progress - 0.08) / 0.12;
      }
      return 1;
    }
  });
  const keyboardY = useTransform(scrollYProgress, [0.08, 0.2], ["60px", "0px"]);

  // MacBook lid opening rotation hinge: rotate from closed (-90deg flat) to open (-10deg tilted back)
  // Range: 0.20 -> 0.45: Lid rotation opens
  const lidRotation = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      return -8;
    } else {
      if (progress < 0.2) return -92;
      if (progress < 0.45) {
        const ratio = (progress - 0.2) / 0.25;
        return -92 + ratio * (-8 - -92);
      }
      return -8;
    }
  });

  // Mock Website inside Screen scrolling / building sections
  // Range: 0.45 -> 0.72: Mock screen page scrolls / builds
  const webScrollY = useTransform(scrollYProgress, [0.45, 0.72], ["0%", "-78%"]);
  
  // Website build section indicators
  const step1Opacity = useTransform(scrollYProgress, [0.45, 0.52], [0.3, 1]);
  const step2Opacity = useTransform(scrollYProgress, [0.52, 0.58], [0.1, 1]);
  const step3Opacity = useTransform(scrollYProgress, [0.58, 0.64], [0.1, 1]);
  const step4Opacity = useTransform(scrollYProgress, [0.64, 0.70], [0.1, 1]);
  const step5Opacity = useTransform(scrollYProgress, [0.70, 0.75], [0.1, 1]);

  // Stage 7: Floating status transformation cards
  // Range: 0.70 -> 0.85: Staggered fades and translations around laptop
  // Fade out completely by 0.88 when the final hero state begins to reveal
  const card1Opacity = useTransform(scrollYProgress, [0.70, 0.76, 0.85, 0.88], [0, 1, 1, 0]);
  const card1X = useTransform(scrollYProgress, [0.70, 0.76], [-80, 0]);
  const card1Y = useTransform(scrollYProgress, [0.70, 0.76], [-30, 0]);

  const card2Opacity = useTransform(scrollYProgress, [0.73, 0.79, 0.85, 0.88], [0, 1, 1, 0]);
  const card2X = useTransform(scrollYProgress, [0.73, 0.79], [-90, 0]);
  const card2Y = useTransform(scrollYProgress, [0.73, 0.79], [40, 0]);

  const card3Opacity = useTransform(scrollYProgress, [0.76, 0.82, 0.85, 0.88], [0, 1, 1, 0]);
  const card3X = useTransform(scrollYProgress, [0.76, 0.82], [80, 0]);
  const card3Y = useTransform(scrollYProgress, [0.76, 0.82], [-40, 0]);

  const card4Opacity = useTransform(scrollYProgress, [0.78, 0.84, 0.85, 0.88], [0, 1, 1, 0]);
  const card4X = useTransform(scrollYProgress, [0.78, 0.84], [90, 0]);
  const card4Y = useTransform(scrollYProgress, [0.78, 0.84], [30, 0]);

  // Stage 8: Laptop zooms out & final headline overlays fade in
  // Range: 0.85 -> 1.0: Laptop scale decreases, final reveal elements fade in
  const finalLaptopScale = useTransform(scrollYProgress, [0.85, 0.96], [1, 0.7]);
  const finalLaptopY = useTransform(scrollYProgress, [0.85, 0.96], ["0px", "80px"]);
  const finalOverlayOpacity = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      if (progress < 0.2) {
        return 1 - (progress / 0.2);
      }
      if (progress < 0.88) return 0;
      if (progress < 0.96) {
        return (progress - 0.88) / 0.08;
      }
      return 1;
    } else {
      if (progress < 0.88) return 0;
      if (progress < 0.96) {
        return (progress - 0.88) / 0.08;
      }
      return 1;
    }
  });
  const finalOverlayY = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      if (progress < 0.2) {
        return `${-80 * (1 - (progress / 0.2))}px`;
      }
      if (progress < 0.88) return "40px";
      if (progress < 0.96) {
        const ratio = (progress - 0.88) / 0.08;
        return `${40 - ratio * 120}px`;
      }
      return "-80px";
    } else {
      if (progress < 0.88) return "40px";
      if (progress < 0.96) {
        const ratio = (progress - 0.88) / 0.08;
        return `${40 - ratio * 120}px`;
      }
      return "-80px";
    }
  });

  // Top level definitions to avoid conditional React Hook violations
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  
  const laptopScaleValue = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      if (progress < 0.2) return 0.45;
      if (progress < 0.4) {
        const ratio = (progress - 0.2) / 0.2;
        return 0.45 + ratio * (0.65 - 0.45);
      }
      if (progress < 0.85) return 0.65;
      if (progress < 0.96) {
        const ratio = (progress - 0.85) / 0.11;
        return 0.65 - ratio * (0.65 - 0.45);
      }
      return 0.45;
    } else {
      if (progress < 0.2) {
        const ratio = progress / 0.2;
        return 1 - ratio * (1 - 0.65);
      }
      if (progress < 0.85) return 0.65;
      if (progress < 0.96) {
        const ratio = (progress - 0.85) / 0.11;
        return 0.65 - ratio * (0.65 - 0.45);
      }
      return 0.45;
    }
  });

  const laptopYValue = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      if (progress < 0.2) return "28vh";
      if (progress < 0.4) {
        const ratio = (progress - 0.2) / 0.2;
        return `${28 - ratio * (28 - 3)}vh`;
      }
      if (progress < 0.85) return "3vh";
      if (progress < 0.96) {
        const ratio = (progress - 0.85) / 0.11;
        return `${3 + ratio * (28 - 3)}vh`;
      }
      return "28vh";
    } else {
      if (progress < 0.2) {
        const ratio = progress / 0.2;
        return `${ratio * 3}vh`;
      }
      if (progress < 0.85) return "3vh";
      if (progress < 0.96) {
        const ratio = (progress - 0.85) / 0.11;
        return `${3 + ratio * (28 - 3)}vh`;
      }
      return "28vh";
    }
  });

  const finalOverlayPointerEvents = useTransform(finalOverlayOpacity, (v) => v > 0.8 ? 'auto' : 'none');

  // Subtle background spotlight brightness linked to progress
  const bgSpotlight = useTransform(scrollYProgress, (progress) => {
    if (hasRevealedHeroRef.current) {
      return 'radial-gradient(circle at center 60%, rgba(124, 58, 237, 0.15) 0%, rgba(2, 2, 4, 0) 75%)';
    } else {
      if (progress < 0.2) {
        return 'radial-gradient(circle at center 60%, rgba(124, 58, 237, 0.06) 0%, rgba(2, 2, 4, 0) 65%)';
      }
      if (progress < 0.9) {
        const ratio = (progress - 0.2) / 0.7;
        const opacity = 0.06 + ratio * (0.15 - 0.06);
        const radius = 65 + ratio * (75 - 65);
        return `radial-gradient(circle at center 60%, rgba(124, 58, 237, ${opacity}) 0%, rgba(2, 2, 4, 0) ${radius}%)`;
      }
      return 'radial-gradient(circle at center 60%, rgba(124, 58, 237, 0.15) 0%, rgba(2, 2, 4, 0) 75%)';
    }
  });

  // Keep the Ref in sync with the state
  useEffect(() => {
    hasRevealedHeroRef.current = hasRevealedHero;
  }, [hasRevealedHero]);

  // Monitor scroll progress to set hasRevealedHero to true
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.85 && !hasRevealedHeroRef.current) {
        setHasRevealedHero(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ position: 'relative', minHeight: '520vh', backgroundColor: '#020204' }}>
      
      {/* Dynamic Background Spotlight */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: bgSpotlight,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Grid Pattern overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.7
        }}
      />

      {/* Sticky Hero Animation Viewport */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100vw', overflow: 'hidden', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Stages 1, 2, 3: Flat Window (Search / Results / Selection) */}
        {typingStage < 4 && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 30, padding: '0 8%' }}>
            
            {/* STAGE 1 & 2: Center Search Box */}
            {typingStage <= 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  maxWidth: '640px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '40px',
                  textAlign: 'center'
                }}
              >
                {/* Sleek Search Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'clamp(36px, 6vw, 48px)', fontWeight: 900, letterSpacing: '-0.04em', fontFamily: 'var(--font-display)', color: '#ffffff', userSelect: 'none' }}>
                  Search
                </div>

                {/* Search Bar Box */}
                <div 
                  style={{
                    width: '100%',
                    background: '#0a0a0f',
                    border: searchGlow ? '1px solid var(--accent-purple)' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: searchGlow ? '0 0 30px rgba(124, 58, 237, 0.3)' : '0 10px 40px rgba(0,0,0,0.5)',
                    borderRadius: '99px',
                    padding: '16px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'all 0.4s ease',
                    position: 'relative'
                  }}
                >
                  <Search size={20} color={searchGlow ? '#a78bfa' : '#64748b'} />
                  
                  {/* Typed Text Input Field Mock */}
                  <div style={{ flex: 1, textAlign: 'left', fontSize: '18px', color: '#ffffff', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-sans)', height: '24px' }}>
                    <span>{typedText}</span>
                    {/* Blinking typing cursor */}
                    {typingStage === 1 && (
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }} 
                        style={{ width: '2px', height: '20px', background: '#a78bfa', marginLeft: '2px', display: 'inline-block' }}
                      />
                    )}
                  </div>

                  {/* Search action indicator */}
                  <div style={{ display: 'flex', gap: '12px', opacity: 0.3 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
                  </div>
                </div>

                {/* Search query feedback display */}
                <AnimatePresence>
                  {isSearching && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{ marginTop: '10px' }}
                    >
                      <p style={{ fontSize: '14px', color: '#a78bfa', fontWeight: 600 }}>Searching...</p>
                      <p style={{ fontSize: '12px', color: 'var(--text-dark-sub)', marginTop: '4px' }}>
                        Finding businesses that create online presence...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* STAGE 2: Search Results Display */}
            {typingStage === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  width: '100%',
                  maxWidth: '720px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                {/* Search Bar top header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px', marginBottom: '8px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
                    Web<span style={{ color: 'var(--accent-purple)', fontSize: '12px', marginLeft: '4px' }}>Search</span>
                  </div>
                  <div style={{ flex: 1, background: '#0a0a0f', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '8px 16px', borderRadius: '99px', fontSize: '13px', color: '#ffffff' }}>
                    {query}
                  </div>
                </div>

                {/* Other standard Result 1 */}
                <div style={{ padding: '8px 0', opacity: 0.35, filter: 'blur(0.5px)' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>https://www.omnimediaseo.com</span>
                  <h3 style={{ fontSize: '18px', color: '#3b82f6', fontWeight: 600, marginTop: '2px' }}>OmniMedia Agency | Traditional Marketing Packages</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-dark-sub)', marginTop: '4px' }}>
                    We build templates and run organic search campaigns for corporate businesses. Check out our monthly retainer plans.
                  </p>
                </div>

                {/* Highlighted Result 2: PageNotFound */}
                <motion.div 
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: 1.02,
                    boxShadow: '0 0 40px rgba(124, 58, 237, 0.15)',
                    borderColor: 'rgba(124, 58, 237, 0.6)'
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    background: 'rgba(12, 12, 18, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    padding: '24px',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#a78bfa', fontWeight: 600, letterSpacing: '0.05em' }}>https://pagenotfound.com</span>
                      <h3 style={{ fontSize: '22px', color: '#a78bfa', fontWeight: 800, marginTop: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        PageNotFound <span style={{ color: '#4ade80', fontSize: '12px', background: 'rgba(74, 222, 128, 0.08)', padding: '2px 8px', borderRadius: '99px', border: '1px solid rgba(74, 222, 128, 0.2)' }}>Recommended</span>
                      </h3>
                    </div>
                    <motion.div 
                      animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }} 
                      transition={{ repeat: Infinity, duration: 2 }} 
                      style={{ color: '#a78bfa' }}
                    >
                      <MousePointerClick size={18} />
                    </motion.div>
                  </div>
                  <h4 style={{ fontSize: '15px', color: '#ffffff', fontWeight: 600, marginTop: '6px' }}>Create Your Online Presence</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-dark-sub)', marginTop: '6px', lineHeight: 1.5 }}>
                    Helping businesses become visible, trusted, and unforgettable online. We engineer custom high-speed websites, craft strategic SEO frameworks, and connect automated lead funnels.
                  </p>
                </motion.div>

                {/* Other standard Result 3 */}
                <div style={{ padding: '8px 0', opacity: 0.35, filter: 'blur(0.5px)' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>https://www.templatebuilderspro.io</span>
                  <h3 style={{ fontSize: '18px', color: '#3b82f6', fontWeight: 600, marginTop: '2px' }}>ProWeb Builders - Digital Templates and Site Creators</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-dark-sub)', marginTop: '4px' }}>
                    Select from 100+ generic web templates. Easy builder drag-and-drop. Build your portfolio page today.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* STAGE 3 TO 8: SCROLL-DRIVEN WINDOW/MACBOOK STORY */}
        {typingStage >= 4 && (
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Scroll Indicator overlay (only visible before user scrolls much) */}
            <motion.div 
              style={{
                position: 'absolute',
                bottom: '40px',
                zIndex: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                opacity: scrollIndicatorOpacity
              }}
            >
              <span style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dark-sub)', fontWeight: 600 }}>
                Scroll to explore the build
              </span>
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                style={{ width: '2px', height: '18px', background: '#a78bfa', borderRadius: '99px' }}
              />
            </motion.div>

            {/* STAGE 7: Floating Status Cards Grid Container */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 12, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Card 1: Website Live (Top-Left) */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '12%',
                  top: '22%',
                  opacity: card1Opacity,
                  x: card1X,
                  y: card1Y,
                  background: 'rgba(10, 10, 15, 0.85)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  boxShadow: '0 10px 30px rgba(74, 222, 128, 0.1)',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80' }}>
                  <Monitor size={14} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>WEB PLATFORM</div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Website Live <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 10px #4ade80' }} />
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Rankings Increasing (Bottom-Left) */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '8%',
                  bottom: '22%',
                  opacity: card2Opacity,
                  x: card2X,
                  y: card2Y,
                  background: 'rgba(10, 10, 15, 0.85)',
                  border: '1px solid rgba(167, 139, 250, 0.3)',
                  boxShadow: '0 10px 30px rgba(167, 139, 250, 0.1)',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  width: '210px'
                }}
              >
                <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>ORGANIC ENGINE</span>
                  <TrendingUp size={14} color="#a78bfa" />
                </div>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff' }}>Rankings Rising</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                  {/* Clean mini chart sparkline representation */}
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                    <path d="M 0 18 Q 15 12 30 14 T 60 2" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: '12px', color: '#4ade80', fontWeight: 'bold' }}>+120 Pos</span>
                </div>
              </motion.div>

              {/* Card 3: Inbox Inquiry Received (Top-Right) */}
              <motion.div
                style={{
                  position: 'absolute',
                  right: '10%',
                  top: '25%',
                  opacity: card3Opacity,
                  x: card3X,
                  y: card3Y,
                  background: 'rgba(10, 10, 15, 0.85)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  width: '220px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
                  <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700 }}>NEW INQUIRY RECEIVED</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>"Need a custom platform build..."</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>From: Studio Pro LLC (Budget: $25k)</div>
              </motion.div>

              {/* Card 4: Traffic Growing (Bottom-Right) */}
              <motion.div
                style={{
                  position: 'absolute',
                  right: '12%',
                  bottom: '24%',
                  opacity: card4Opacity,
                  x: card4X,
                  y: card4Y,
                  background: 'rgba(10, 10, 15, 0.85)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.1)',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4' }}>
                  <Zap size={14} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>TRAFFIC IMPACT</div>
                  <div style={{ fontSize: '16px', fontWeight: 900, color: '#4ade80' }}>
                    +310.4% <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 'normal' }}>MoM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* STAGE 8: Final Headline Overlay View */}
            <motion.div 
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 20,
                pointerEvents: finalOverlayPointerEvents,
                opacity: finalOverlayOpacity,
                y: finalOverlayY,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 8%',
                textAlign: 'center'
              }}
            >
              {/* Ambient Animated Glow behind branding */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.18, 0.3, 0.18]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: '600px',
                  height: '600px',
                  background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, rgba(124, 58, 237, 0) 70%)',
                  filter: 'blur(50px)',
                  zIndex: -1,
                  pointerEvents: 'none',
                  top: '50%',
                  left: '50%'
                }}
                x="-50%"
                y="-50%"
              />

              {/* Badge */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '99px',
                  background: 'rgba(124, 58, 237, 0.05)',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                  boxShadow: '0 0 20px rgba(124, 58, 237, 0.1)',
                  marginBottom: '20px',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <Sparkles size={12} color="#a78bfa" />
                <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#a78bfa', fontWeight: 700, fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                  Create Your Online Presence
                </span>
              </div>

              {/* Title */}
              <h1 
                style={{
                  fontSize: 'clamp(38px, 6.5vw, 76px)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  fontFamily: 'var(--font-display)',
                  color: '#ffffff',
                  marginBottom: '24px',
                  maxWidth: '960px'
                }}
              >
                Your customers are already searching.<br />
                <span style={{ color: '#4ade80', textShadow: '0 0 30px rgba(74, 222, 128, 0.2)' }}>
                  Can they find you?
                </span>
              </h1>

              {/* Subheading */}
              <p 
                style={{
                  fontSize: 'clamp(15px, 2.2vw, 18px)',
                  color: 'var(--text-dark-sub)',
                  lineHeight: '1.65',
                  maxWidth: '700px',
                  margin: '0 auto 40px auto',
                  fontWeight: 400
                }}
              >
                We help businesses build websites, improve visibility, and generate growth through strategic digital experiences.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="#/schedule" 
                  className="btn-premium btn-premium-primary"
                  style={{ 
                    backgroundColor: 'var(--accent-purple)', 
                    color: '#ffffff',
                    boxShadow: '0 10px 25px rgba(124, 58, 237, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Book a Strategy Call <ArrowRight size={14} />
                </a>
                <a 
                  href="#/services" 
                  className="btn-premium btn-premium-secondary"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    color: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  View Services
                </a>
              </div>
            </motion.div>

            {/* STAGE 3-6: MacBook Mockup Container */}
            <motion.div 
              style={{
                scale: laptopScaleValue,
                y: laptopYValue,
                rotateX: browserRotateX,
                perspective: '1200px',
                transformStyle: 'preserve-3d',
                width: '100%',
                maxWidth: '920px',
                aspectRatio: '16 / 10',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 10
              }}
            >
              {/* Laptop Screen Lid / Top Half */}
              <motion.div
                style={{
                  width: '100%',
                  height: '96%',
                  background: '#040406',
                  border: '14px solid #15161b',
                  borderBottom: '16px solid #15161b',
                  borderRadius: '20px 20px 0 0',
                  boxShadow: 'inset 0 0 10px rgba(255,255,255,0.03)',
                  overflow: 'hidden',
                  position: 'relative',
                  transformOrigin: 'bottom center',
                  transformStyle: 'preserve-3d',
                  rotateX: lidRotation,
                  zIndex: 2
                }}
              >
                {/* Camera notch cutout */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '10px',
                    background: '#15161b',
                    borderRadius: '0 0 6px 6px',
                    zIndex: 10
                  }}
                />

                {/* Mock Browser Title bar */}
                <div style={{ height: '36px', background: '#0e1017', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px', zIndex: 9, position: 'relative' }}>
                  {/* Mock browser dots */}
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  {/* Address bar URL display */}
                  <div style={{ flex: 1, maxWidth: '280px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', fontSize: '9px', color: '#94a3b8', textAlign: 'center', padding: '4px 0', border: '1px solid rgba(255,255,255,0.02)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                    https://pagenotfound.com
                  </div>
                </div>

                {/* ================= STAGE 5 & 6 Mock website frame container ================= */}
                <div 
                  style={{
                    width: '100%',
                    height: 'calc(100% - 36px)',
                    background: '#040406',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <motion.div
                    style={{
                      width: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      y: webScrollY,
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#020204'
                    }}
                  >
                    
                    {/* STEP 1: Main Mock Website Hero */}
                    <motion.div 
                      style={{ 
                        height: '100%', 
                        minHeight: '280px', 
                        padding: '40px 32px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        borderBottom: '1px dashed rgba(255,255,255,0.04)',
                        opacity: step1Opacity
                      }}
                    >
                      {/* Nav header representation */}
                      <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
                        <div style={{ fontWeight: 800, fontSize: '11px', letterSpacing: '-0.3px' }}>
                          Page<span style={{ color: '#4ade80' }}>Not</span>Found
                        </div>
                        <div style={{ display: 'flex', gap: '12px', fontSize: '8px', opacity: 0.6 }}>
                          <span>Services</span>
                          <span>SEO</span>
                          <span>Growth</span>
                          <span>Contact</span>
                        </div>
                        <div style={{ background: 'var(--accent-purple)', fontSize: '7px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '99px' }}>
                          Book Call
                        </div>
                      </div>

                      {/* Main screen title */}
                      <span style={{ fontSize: '7px', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        Digital Visibility System
                      </span>
                      <h2 style={{ fontSize: '24px', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginTop: '6px', color: '#ffffff' }}>
                        Create Your Online Presence
                      </h2>
                      <p style={{ fontSize: '10px', color: 'var(--text-dark-sub)', marginTop: '8px', maxWidth: '340px', lineHeight: 1.5 }}>
                        We build custom codebases, design premium UI/UX, and optimize search engine crawling to help your business get found.
                      </p>
                      
                      {/* Buttons display */}
                      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                        <div style={{ padding: '6px 14px', background: '#ffffff', color: '#000000', fontSize: '8px', fontWeight: 'bold', borderRadius: '4px' }}>
                          Get Started
                        </div>
                        <div style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '8px', fontWeight: 'bold', borderRadius: '4px' }}>
                          Learn More
                        </div>
                      </div>
                    </motion.div>

                    {/* STEP 2: Services Section Layout */}
                    <motion.div 
                      style={{ 
                        padding: '36px 32px', 
                        borderBottom: '1px dashed rgba(255,255,255,0.04)',
                        opacity: step2Opacity
                      }}
                    >
                      <span style={{ fontSize: '7px', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.1em' }}>OUTCOMES & SOLUTIONS</span>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginTop: '2px', marginBottom: '16px' }}>
                        What We Actually Do
                      </h3>
                      
                      {/* Services small list */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '12px' }}>
                          <Code size={12} color="#a78bfa" />
                          <h4 style={{ fontSize: '10px', fontWeight: 700, marginTop: '6px', color: '#ffffff' }}>High-Speed Code</h4>
                          <p style={{ fontSize: '8px', color: 'var(--text-dark-sub)', marginTop: '4px', lineHeight: 1.4 }}>
                            No bulky plugins or page-builder platforms. Pure react frameworks optimized for under 1-second render.
                          </p>
                        </div>
                        <div style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '12px' }}>
                          <Globe size={12} color="#3b82f6" />
                          <h4 style={{ fontSize: '10px', fontWeight: 700, marginTop: '6px', color: '#ffffff' }}>SEO Crawl Architectures</h4>
                          <p style={{ fontSize: '8px', color: 'var(--text-dark-sub)', marginTop: '4px', lineHeight: 1.4 }}>
                            Explicit crawl paths and metadata models matching search index schedules to rank key terms immediately.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* STEP 3: SEO Visibility Status Section */}
                    <motion.div 
                      style={{ 
                        padding: '36px 32px', 
                        borderBottom: '1px dashed rgba(255,255,255,0.04)',
                        opacity: step3Opacity
                      }}
                    >
                      <span style={{ fontSize: '7px', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.1em' }}>INDEX METRICS</span>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginTop: '2px', marginBottom: '12px' }}>
                        SEO Engine Architecture
                      </h3>
                      
                      {/* Search console graph mock */}
                      <div style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '8px', color: '#94a3b8' }}>Average Position Over Time</span>
                          <span style={{ fontSize: '8px', color: '#4ade80', fontWeight: 'bold' }}>+24.8% Increase</span>
                        </div>
                        {/* Sparkline curve */}
                        <svg viewBox="0 0 300 60" style={{ width: '100%', height: '36px' }}>
                          <path d="M 0 50 Q 50 45 100 30 T 200 42 T 300 8" fill="none" stroke="#4ade80" strokeWidth="2" />
                          <circle cx="300" cy="8" r="3" fill="#4ade80" />
                        </svg>
                      </div>
                    </motion.div>

                    {/* STEP 4: Lead Generation Sync representation */}
                    <motion.div 
                      style={{ 
                        padding: '36px 32px', 
                        borderBottom: '1px dashed rgba(255,255,255,0.04)',
                        opacity: step4Opacity
                      }}
                    >
                      <span style={{ fontSize: '7px', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.1em' }}>CRM CONNECTIONS</span>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginTop: '2px', marginBottom: '12px' }}>
                        Lead Pipeline Automation
                      </h3>
                      
                      {/* Form representation */}
                      <div style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                          <div style={{ height: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '3px' }} />
                          <div style={{ height: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '3px' }} />
                        </div>
                        <div style={{ height: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '3px' }} />
                        <div style={{ height: '18px', background: '#a78bfa', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 'bold', color: '#000' }}>
                          Submit Project Request
                        </div>
                      </div>
                    </motion.div>

                    {/* STEP 5: Contact Footer Mockup */}
                    <motion.div 
                      style={{ 
                        padding: '24px 32px 40px 32px', 
                        background: '#0a0a0f',
                        opacity: step5Opacity
                      }}
                    >
                      <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center', fontSize: '7px', color: 'var(--text-dark-sub)' }}>
                        <span>© 2026 PageNotFound. All rights reserved.</span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <span>Terms</span>
                          <span>Privacy</span>
                          <span>Sitemap</span>
                        </div>
                      </div>
                    </motion.div>

                  </motion.div>
                </div>
              </motion.div>

              {/* Laptop Keyboard Base / Bottom Half */}
              <motion.div
                style={{
                  width: '102%',
                  height: '12px',
                  background: 'linear-gradient(to bottom, #d1d5db, #9ca3af)',
                  borderRadius: '0 0 16px 16px',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
                  transformStyle: 'preserve-3d',
                  // Slide/fade keyboard base in
                  opacity: keyboardOpacity,
                  y: keyboardY,
                  transform: 'rotateX(80deg) translateY(-8px)',
                  transformOrigin: 'top center',
                  zIndex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: '-4px'
                }}
              >
                {/* Macbook lip indent */}
                <div 
                  style={{
                    width: '80px',
                    height: '3px',
                    backgroundColor: 'rgba(0,0,0,0.25)',
                    borderRadius: '0 0 4px 4px'
                  }}
                />
              </motion.div>

            </motion.div>
          </div>
        )}

      </div>
    </div>
  );
}
