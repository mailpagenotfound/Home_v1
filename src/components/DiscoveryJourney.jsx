import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------------------
// STAGES DATA
// -------------------------------------------------------------
const stages = [
  {
    title: "Your Business Exists. Google Doesn't Know Yet.",
    subtitle: "New Business",
    desc: "You've got the idea, the passion, and maybe even your first customers.\n\nBut when someone asks, \"Do you have a website?\" the conversation gets awkward.\n\nWe help you get online with a website that makes your business look as professional as the work you do.",
    color: "#b91c1c"
  },
  {
    title: "Your Website Is Basically On Vacation.",
    subtitle: "Existing Website",
    desc: "It was launched years ago and hasn't done much since.\n\nThe design feels old, updates feel impossible, and you're not even sure what's still working.\n\nWe bring it back to life with a modern, easy-to-manage website that actually supports your business.",
    color: "#0891b2"
  },
  {
    title: "Your Business Grew Up. Your Website Didn't.",
    subtitle: "Rebuild & Redesign",
    desc: "Your services have improved. Your brand has evolved.\n\nMeanwhile, your website is still introducing the old version of your business.\n\nWe redesign and rebuild it from the ground up so your online presence finally matches where you are today.",
    color: "#2563eb"
  },
  {
    title: "Credibility & Authority",
    subtitle: "Visual Presence",
    desc: "Generous whitespace, premium typography, and structured content assets that build visual trust, converting passive readers into interested prospects.",
    color: "#db2777"
  },
  {
    title: "Active Lead Funnels",
    subtitle: "High-Intent Campaigns",
    desc: "Laser-focused search campaigns targeting buyers at the exact moment of search. Traffic accelerates, delivering qualified inquiries to your calendar.",
    color: "#ca8a04"
  },
  {
    title: "The Visibility Standard",
    subtitle: "Compounding Growth",
    desc: "A fully customized digital engine. Your code, design, search presence, and lead channels operate as a single unified system that builds organic equity over time.",
    color: "#18181b"
  }
];

// -------------------------------------------------------------
// GLOWING RINGS (for engagement and website ripples)
// -------------------------------------------------------------
function PulseRings({ position, color, count = 3, scaleMax = 3, active = false }) {
  const ringsRef = useRef([]);

  useFrame(({ clock }) => {
    if (!active) return;
    const time = clock.getElapsedTime();
    ringsRef.current.forEach((ring, idx) => {
      if (ring) {
        const t = (time * 0.8 + idx / count) % 1;
        ring.scale.setScalar(t * scaleMax);
        ring.material.opacity = (1 - t) * 0.4;
      }
    });
  });

  if (!active) return null;

  return (
    <group position={position}>
      {Array.from({ length: count }).map((_, idx) => (
        <mesh
          key={idx}
          ref={(el) => (ringsRef.current[idx] = el)}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.01, 1, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// REUSABLE GLASS CARD WRAPPER
// -------------------------------------------------------------
function GlassCard({ children, width = 3, height = 2, borderColor = "rgba(255, 255, 255, 0.08)", glowColor = "rgba(255, 255, 255, 0.02)", title = "", opacity = 1, ...props }) {
  return (
    <group {...props}>
      {/* 3D Glass Pane */}
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshPhysicalMaterial
          color="#040408"
          transparent
          opacity={0.8 * opacity}
          roughness={0.15}
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.4}
          thickness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Glowing frame border */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[width + 0.04, height + 0.04]} />
        <meshBasicMaterial
          color={borderColor}
          wireframe
          transparent
          opacity={0.35 * opacity}
          blending={THREE.NormalBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* HTML Content Overlay */}
      <Html
        distanceFactor={6.5}
        position={[0, 0, 0.02]}
        center
        style={{ pointerEvents: 'none' }}
      >
        <div style={{
          width: `${width * 90}px`,
          height: `${height * 90}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '12px',
          borderRadius: '10px',
          background: 'rgba(4, 4, 8, 0.8)',
          border: `1px solid ${borderColor}`,
          boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.45), 0 0 10px ${glowColor}`,
          backdropFilter: 'blur(16px)',
          fontFamily: 'var(--font-display), sans-serif',
          color: '#ffffff',
          boxSizing: 'border-box',
          pointerEvents: 'none',
          opacity: opacity,
          transition: 'opacity 0.2s ease'
        }}>
          {title && (
            <div style={{
              fontSize: '8px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: borderColor,
              borderBottom: '1px solid var(--border-dark)',
              paddingBottom: '4px',
              marginBottom: '4px',
              opacity: opacity
            }}>
              {title}
            </div>
          )}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {children}
          </div>
        </div>
      </Html>
    </group>
  );
}

// -------------------------------------------------------------
// 0. INITIAL STATE: YOUR BUSINESS CARD
// -------------------------------------------------------------
function YourBusinessCard({ opacity = 1, ...props }) {
  return (
    <GlassCard
      width={2.6}
      height={1.7}
      borderColor="#ef4444"
      glowColor="rgba(239, 68, 68, 0.2)"
      title="Your Business"
      opacity={opacity}
      {...props}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'center' }}>
        <div style={{ color: '#a1a1aa', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em' }}>ISOLATED ENTITY</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', fontSize: '8px', fontFamily: 'monospace', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '5px', borderRadius: '4px', border: '1px dashed rgba(239, 68, 68, 0.35)' }}>
          <div>TRAFFIC: <span style={{ color: '#ffffff' }}>0/mo</span></div>
          <div>LEADS: <span style={{ color: '#ffffff' }}>0</span></div>
          <div style={{ gridColumn: 'span 2' }}>RANKINGS: <span style={{ color: '#ffffff' }}>None</span></div>
        </div>
        <div style={{ color: '#ef4444', fontSize: '7px', fontStyle: 'italic' }}>No visibility, no customer flow</div>
      </div>
    </GlassCard>
  );
}

// -------------------------------------------------------------
// 1. WEBSITE DEVELOPMENT: CONSTRUCTING BROWSER MOCKUP
// -------------------------------------------------------------
function BrowserMockup({ buildProgress, showDashboard, opacity = 1, ...props }) {
  const showNavbar = buildProgress >= 0.2;
  const showHero = buildProgress >= 0.45;
  const showContent = buildProgress >= 0.7;
  const showCTA = buildProgress >= 0.85;

  return (
    <group {...props}>
      {/* 3D Browser Screen Frame */}
      <mesh>
        <planeGeometry args={[4.2, 2.8]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.4 * opacity}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1.0}
          transmission={0.8}
          thickness={0.5}
        />
      </mesh>
      
      {/* Screen Glowing Edge */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[4.24, 2.84]} />
        <meshBasicMaterial
          color={showDashboard ? "#059669" : "#0891b2"}
          wireframe
          transparent
          opacity={0.35 * opacity}
          blending={THREE.NormalBlending}
        />
      </mesh>

      {/* Screen Content */}
      <Html
        distanceFactor={5.5}
        position={[0, 0, 0.03]}
        center
        style={{ pointerEvents: 'none' }}
      >
        <div style={{
          width: '380px',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '14px',
          background: 'rgba(5, 7, 12, 0.9)',
          border: `1px solid ${showDashboard ? 'rgba(16, 185, 129, 0.3)' : 'rgba(6, 182, 212, 0.3)'}`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${showDashboard ? 'rgba(16, 185, 129, 0.15)' : 'rgba(6, 182, 212, 0.15)'}`,
          backdropFilter: 'blur(20px)',
          fontFamily: 'var(--font-display), sans-serif',
          color: '#ffffff',
          boxSizing: 'border-box',
          overflow: 'hidden',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: opacity
        }}>
          {/* URL bar header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '24px',
            background: 'rgba(15, 23, 42, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '0 10px',
            gap: '8px'
          }}>
            {/* Window control dots */}
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            {/* Address bar */}
            <div style={{
              flex: 1,
              height: '14px',
              background: 'rgba(2, 6, 23, 0.6)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              color: '#94a3b8',
              letterSpacing: '0.05em'
            }}>
              {showDashboard ? "www.yourbusiness.com/analytics" : "www.yourbusiness.com"}
            </div>
          </div>

          {/* Webpage Content Switch */}
          {showDashboard ? (
            /* Dashboard View */
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              gap: '10px'
            }}>
              {/* Dashboard Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '4px'
              }}>
                <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#10b981' }}>📈 CORE METRICS</div>
                <div style={{ fontSize: '7px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 4px #10b981' }} />
                  LIVE SYNCING
                </div>
              </div>

              {/* Stats Overview */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '4px', borderRadius: '4px' }}>
                  <div style={{ fontSize: '6px', color: '#94a3b8' }}>ACTIVE USERS</div>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#10b981' }}>1,248</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '4px', borderRadius: '4px' }}>
                  <div style={{ fontSize: '6px', color: '#94a3b8' }}>CONVERSIONS</div>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#60a5fa' }}>384</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '4px', borderRadius: '4px' }}>
                  <div style={{ fontSize: '6px', color: '#94a3b8' }}>REVENUE</div>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#eab308' }}>$14.8k</div>
                </div>
              </div>

              {/* Funnel Graph Mockup */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
                <div style={{ fontSize: '6px', color: '#94a3b8' }}>ACQUISITION FUNNEL</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {/* Awareness bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ fontSize: '5px', width: '45px', color: '#94a3b8', textAlign: 'right' }}>Traffic</div>
                    <div style={{ flex: 1, height: '6px', background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '3px', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '90%', background: '#3b82f6', borderRadius: '3px' }} />
                    </div>
                    <div style={{ fontSize: '5px', width: '25px', color: '#3b82f6' }}>14.8k</div>
                  </div>
                  {/* Leads bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ fontSize: '5px', width: '45px', color: '#94a3b8', textAlign: 'right' }}>Leads</div>
                    <div style={{ flex: 1, height: '6px', background: 'rgba(236, 72, 153, 0.2)', border: '1px solid rgba(236, 72, 153, 0.4)', borderRadius: '3px', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '45%', background: '#ec4899', borderRadius: '3px' }} />
                    </div>
                    <div style={{ fontSize: '5px', width: '25px', color: '#ec4899' }}>1.2k</div>
                  </div>
                  {/* Conversions bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ fontSize: '5px', width: '45px', color: '#94a3b8', textAlign: 'right' }}>Customers</div>
                    <div style={{ flex: 1, height: '6px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '3px', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%', background: '#10b981', borderRadius: '3px' }} />
                    </div>
                    <div style={{ fontSize: '5px', width: '25px', color: '#10b981' }}>384</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Website Layout View */
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px', boxSizing: 'border-box', gap: '10px', position: 'relative' }}>
              
              {/* Navbar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: showNavbar ? 1 : 0,
                transform: showNavbar ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                paddingBottom: '6px'
              }}>
                <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '-0.02em', color: '#06b6d4' }}>YOUR LOGO</div>
                <div style={{ display: 'flex', gap: '10px', fontSize: '8px', color: '#94a3b8' }}>
                  <div>Solutions</div>
                  <div>Case Studies</div>
                  <div>Contact</div>
                </div>
              </div>

              {/* Main Area */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', textAlign: 'center', margin: 'auto 0' }}>
                {/* Hero Section */}
                <div style={{
                  opacity: showHero ? 1 : 0,
                  transform: showHero ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 900, lineHeight: 1.2 }}>
                    Scale Your Business Online
                  </div>
                  <div style={{ fontSize: '8px', color: '#94a3b8', maxWidth: '280px', margin: '0 auto' }}>
                    A high-converting website built for fast user acquisition and trust.
                  </div>
                </div>

                {/* Content / Feature Blocks */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: showContent ? 1 : 0,
                  transform: showContent ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  marginTop: '4px'
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '6px', borderRadius: '6px', width: '70px', fontSize: '7px' }}>
                    ⚡ Speed
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '6px', borderRadius: '6px', width: '70px', fontSize: '7px' }}>
                    🔒 Trust
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', padding: '6px', borderRadius: '6px', width: '70px', fontSize: '7px' }}>
                    🎯 Conversion
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{
                  opacity: showCTA ? 1 : 0,
                  transform: showCTA ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  marginTop: '6px'
                }}>
                  <span className="pulsing-button" style={{
                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    color: '#fff',
                    fontSize: '8px',
                    fontWeight: 'bold',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                    display: 'inline-block'
                  }}>
                    Get Started
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

// -------------------------------------------------------------
// 2. SEO ACTIVATION: SEARCH ENGINE CARDS
// -------------------------------------------------------------
function SEOCards({ active, opacity = 1, ...props }) {
  if (!active) return null;

  return (
    <group {...props}>
      {/* #1 Ranking Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#3b82f6"
        glowColor="rgba(59, 130, 246, 0.15)"
        title="SEO Activation"
        position={[2.8, 1.2, -1.0]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#93c5fd' }}>Search Engine Rank</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>🏆</span> #1 Ranking
          </div>
          <div style={{ fontSize: '7px', color: '#94a3b8' }}>For target buyer keywords</div>
        </div>
      </GlassCard>

      {/* Organic Traffic Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#3b82f6"
        glowColor="rgba(59, 130, 246, 0.15)"
        title="Organic Traffic"
        position={[2.6, -1.5, 0.8]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#93c5fd' }}>Traffic Growth</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#10b981' }}>📈 +340%</div>
          <div style={{ fontSize: '7px', color: '#94a3b8' }}>Consistent monthly growth</div>
        </div>
      </GlassCard>

      {/* Keyword Visibility Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#3b82f6"
        glowColor="rgba(59, 130, 246, 0.15)"
        title="Keyword Visibility"
        position={[-2.8, -1.0, -0.8]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#93c5fd' }}>Indexed Keywords</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#ffffff' }}>🔑 4.2k active</div>
          <div style={{ fontSize: '7px', color: '#94a3b8' }}>High-intent search volume</div>
        </div>
      </GlassCard>
    </group>
  );
}

// -------------------------------------------------------------
// 3. SOCIAL MEDIA GROWTH: POST INTERFACE CARDS
// -------------------------------------------------------------
function SocialCards({ active, opacity = 1, ...props }) {
  if (!active) return null;

  return (
    <group {...props}>
      {/* Instagram Post Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#ec4899"
        glowColor="rgba(236, 72, 153, 0.15)"
        title="Instagram Campaign"
        position={[-3.0, 1.8, -0.5]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#fbcfe8' }}>Instagram Post</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#ffffff' }}>🔥 Going Viral</div>
          <div style={{ fontSize: '8px', color: '#f472b6', fontWeight: 'bold' }}>❤️ 14.8k Likes</div>
        </div>
      </GlassCard>

      {/* Facebook Campaign Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#ec4899"
        glowColor="rgba(236, 72, 153, 0.15)"
        title="Facebook Ads"
        position={[3.0, -0.3, -1.8]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#fbcfe8' }}>Sponsored Reach</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#ffffff' }}>👥 320 Shares</div>
          <div style={{ fontSize: '8px', color: '#f472b6', fontWeight: 'bold' }}>💬 88 Comments</div>
        </div>
      </GlassCard>

      {/* LinkedIn Article Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#ec4899"
        glowColor="rgba(236, 72, 153, 0.15)"
        title="LinkedIn Growth"
        position={[-2.8, -2.2, 1.5]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#fbcfe8' }}>B2B Authority</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#ffffff' }}>💼 Authority Article</div>
          <div style={{ fontSize: '8px', color: '#f472b6', fontWeight: 'bold' }}>💬 45 Industry Shares</div>
        </div>
      </GlassCard>

      {/* Concentric expanding ripples around social posts */}
      <PulseRings position={[-3.0, 1.8, -0.5]} color="#ec4899" active={active && opacity > 0.1} />
      <PulseRings position={[3.0, -0.3, -1.8]} color="#ec4899" active={active && opacity > 0.1} />
      <PulseRings position={[-2.8, -2.2, 1.5]} color="#ec4899" active={active && opacity > 0.1} />
    </group>
  );
}

// -------------------------------------------------------------
// 4. PERFORMANCE MARKETING: ADS & FORMS
// -------------------------------------------------------------
function FloatingLeads({ active, opacity = 1 }) {
  const [leads, setLeads] = useState([]);
  const leadsRef = useRef([]);

  useEffect(() => {
    if (!active) {
      const handle = setTimeout(() => setLeads([]), 0);
      return () => clearTimeout(handle);
    }
    
    const labels = ["New Lead 🎉", "New Inquiry 📬", "Strategy Call Booked 📅", "Demo Scheduled 🚀"];
    const interval = setInterval(() => {
      setLeads((prev) => [
        ...prev.slice(-3), // Keep max 4 floating notifications
        {
          id: Math.random(),
          label: labels[Math.floor(Math.random() * labels.length)],
          x: (Math.random() - 0.5) * 1.5,
          y: -1.8,
          z: 0.8,
          progress: 0
        }
      ]);
    }, 2500);

    return () => clearInterval(interval);
  }, [active]);

  useFrame((state, delta) => {
    if (!active) return;
    leadsRef.current = leads.map((lead) => {
      lead.progress += delta * 0.4; // rise speed
      lead.y = -1.8 + lead.progress * 2.5; // rise up
      return lead;
    });
  });

  if (!active) return null;

  return (
    <group>
      {leads.map((lead) => {
        if (lead.progress >= 1.0) return null;
        const leadOpacity = (1.0 - lead.progress) * opacity;
        return (
          <Html
            key={lead.id}
            position={[lead.x, lead.y, lead.z]}
            center
            distanceFactor={6}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.95), rgba(202, 138, 4, 0.95))',
              color: '#000',
              fontWeight: 800,
              fontSize: '8px',
              padding: '4px 8px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(234, 179, 8, 0.4)',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-display)',
              opacity: leadOpacity,
              transform: `scale(${1 + lead.progress * 0.2})`,
              transition: 'opacity 0.1s linear'
            }}>
              {lead.label}
            </div>
          </Html>
        );
      })}
    </group>
  );
}

function PerformanceCards({ active, opacity = 1, ...props }) {
  if (!active) return null;

  return (
    <group {...props}>
      {/* Ads Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#eab308"
        glowColor="rgba(234, 179, 8, 0.15)"
        title="Search Engine Ads"
        position={[2.8, 2.2, -1.0]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontSize: '8px', background: '#eab308', color: '#000', padding: '1px 3px', borderRadius: '2px', alignSelf: 'flex-start', fontWeight: 'bold' }}>Ad</div>
          <div style={{ fontSize: '10px', fontWeight: 900, color: '#ffffff', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Scale Your Sales Today</div>
          <div style={{ fontSize: '7px', color: '#eab308' }}>www.yourbusiness.com/deals</div>
        </div>
      </GlassCard>

      {/* Meta Ads Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#eab308"
        glowColor="rgba(234, 179, 8, 0.15)"
        title="Meta Sponsored"
        position={[-2.8, 0.8, -1.5]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#fef08a' }}>Meta Campaign</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#ffffff' }}>🎯 Lead Gen Ads</div>
          <div style={{ fontSize: '8px', color: '#eab308', fontWeight: 'bold' }}>📈 CVR: +4.85%</div>
        </div>
      </GlassCard>

      {/* Lead Capture Form Card */}
      <GlassCard
        width={2.4}
        height={1.5}
        borderColor="#eab308"
        glowColor="rgba(234, 179, 8, 0.15)"
        title="Lead Funnel Capture"
        position={[0, -2.3, 0.5]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '8px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            Name: <span style={{ color: '#fff' }}>Jane Doe</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            Email: <span style={{ color: '#fff' }}>jane@client.com</span>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #eab308, #ca8a04)', color: '#000', fontWeight: 'bold', padding: '4px', borderRadius: '4px', textAlign: 'center', boxShadow: '0 4px 10px rgba(234, 179, 8, 0.2)' }}>
            Strategy Call Booked ✓
          </div>
        </div>
      </GlassCard>

      {/* Floating Lead Bubbles */}
      <FloatingLeads active={active} opacity={opacity} />
    </group>
  );
}

// -------------------------------------------------------------
// 5. ANALYTICS & GROWTH SYSTEM
// -------------------------------------------------------------
function AnalyticsSystem({ active, progress, opacity = 1, ...props }) {
  const barsRef = useRef([]);

  // Normalize Stage 5 progress (t from 0 to 1)
  const t = Math.max(0, Math.min(1, (progress - 0.71) / 0.14));

  useFrame(() => {
    if (!active) return;
    barsRef.current.forEach((bar, idx) => {
      if (bar) {
        const targetScale = (0.5 + idx * 0.45) * t;
        bar.scale.y = THREE.MathUtils.lerp(bar.scale.y, targetScale, 0.08);
        bar.position.y = -2.0 + bar.scale.y * 0.5;
      }
    });
  });

  if (!active) return null;

  return (
    <group {...props}>
      {/* 3D Bar Graphs */}
      <group position={[0, 0, -1]}>
        {Array.from({ length: 5 }).map((_, idx) => {
          const xPos = -1.2 + idx * 0.6;
          return (
            <mesh
              key={idx}
              ref={(el) => (barsRef.current[idx] = el)}
              position={[xPos, -2.0, 0]}
              scale={[1, 0.01, 1]}
            >
              <boxGeometry args={[0.26, 2.0, 0.26]} />
              <meshStandardMaterial
                color="#10b981"
                emissive="#064e3b"
                roughness={0.2}
                metalness={0.8}
                transparent
                opacity={0.8 * opacity}
              />
            </mesh>
          );
        })}
      </group>

      {/* 3D Traffic Curve Line */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                -1.8, -1.8, -0.5,
                -1.0, -1.4, -0.5,
                -0.2, -1.7, -0.5,
                0.6, -1.0, -0.5,
                1.4, -0.6, -0.5,
                2.2, 0.2, -0.5,
              ]).slice(0, Math.max(2, Math.floor(t * 6)) * 3),
              3
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#10b981" linewidth={3.0} transparent opacity={0.8 * opacity} />
      </line>

      {/* Conversion Rate Meter Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#10b981"
        glowColor="rgba(16, 185, 129, 0.15)"
        title="Conversion Metrics"
        position={[2.0, 2.0, 0]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#a7f3d0' }}>Conversion Rate (CVR)</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#ffffff' }}>⚡ 8.42% CVR</div>
          <div style={{ fontSize: '7px', color: '#94a3b8' }}>Industry Benchmark: 2.1%</div>
        </div>
      </GlassCard>

      {/* Growth ROI Card */}
      <GlassCard
        width={2.2}
        height={1.3}
        borderColor="#10b981"
        glowColor="rgba(16, 185, 129, 0.15)"
        title="ROI Analytics"
        position={[-2.0, 2.0, 0.5]}
        opacity={opacity}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#a7f3d0' }}>Return on Ad Spend</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#10b981' }}>📈 +1,240% ROI</div>
          <div style={{ fontSize: '7px', color: '#94a3b8' }}>Compounding growth engine</div>
        </div>
      </GlassCard>
    </group>
  );
}

// -------------------------------------------------------------
// DYNAMIC GLOWING DATA PIPELINES (Stage 5+)
// -------------------------------------------------------------
function ConnectionLines({ active, progress, opacity = 1 }) {
  if (!active) return null;

  const nodes = {
    web: new THREE.Vector3(0, 0.3, 0),
    seo1: new THREE.Vector3(2.8, 1.2, -1.0),
    seo2: new THREE.Vector3(2.6, -1.5, 0.8),
    seo3: new THREE.Vector3(-2.8, -1.0, -0.8),
    soc1: new THREE.Vector3(-3.0, 1.8, -0.5),
    soc2: new THREE.Vector3(3.0, -0.3, -1.8),
    soc3: new THREE.Vector3(-2.8, -2.2, 1.5),
    ads1: new THREE.Vector3(2.8, 2.2, -1.0),
    ads2: new THREE.Vector3(-2.8, 0.8, -1.5),
    lead: new THREE.Vector3(0, -2.3, 0.5),
    an1: new THREE.Vector3(2.0, 2.0, 0),
    an2: new THREE.Vector3(-2.0, 2.0, 0.5),
  };

  const lines = [
    [nodes.web, nodes.seo1],
    [nodes.web, nodes.seo2],
    [nodes.web, nodes.seo3],
    [nodes.web, nodes.soc1],
    [nodes.web, nodes.soc2],
    [nodes.web, nodes.soc3],
    [nodes.web, nodes.ads1],
    [nodes.web, nodes.ads2],
    [nodes.web, nodes.lead],
    [nodes.web, nodes.an1],
    [nodes.web, nodes.an2],
    [nodes.seo1, nodes.ads1],
    [nodes.soc1, nodes.ads2],
    [nodes.lead, nodes.an1],
    [nodes.lead, nodes.an2]
  ];

  const calculatedOpacity = Math.min(0.65, (progress - 0.75) * 4.5) * opacity;

  return (
    <group>
      {lines.map((pair, idx) => (
        <line key={idx}>
          <bufferGeometry attach="geometry" setFromPoints={pair} />
          <lineBasicMaterial
            attach="material"
            color="#10b981"
            transparent
            opacity={calculatedOpacity}
            linewidth={1.5}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// PARTICLE FLOW ENGINE
// -------------------------------------------------------------
function FlowParticles({ progress, opacity = 1 }) {
  const count = 300;
  const geomRef = useRef();
  const pointsRef = useRef();
  const particles = useRef([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const type = i % 4;
      arr.push({
        type,
        speed: 0.008 + Math.random() * 0.015,
        progress: Math.random(),
        seed: Math.random() * 100,
        start: new THREE.Vector3(),
        target: new THREE.Vector3(),
        size: 0.1 + Math.random() * 0.12
      });
    }
    particles.current = arr;
  }, []);

  useFrame((state) => {
    if (!geomRef.current) return;
    const posAttr = geomRef.current.getAttribute('position');
    const colorAttr = geomRef.current.getAttribute('color');
    const time = state.clock.getElapsedTime();
    const p = progress.current;

    particles.current.forEach((part, idx) => {
      let currentPos = new THREE.Vector3();

      // Ambient Particles (always active, drift slowly)
      if (part.type === 3) {
        part.progress += part.speed * 0.15;
        if (part.progress > 1) {
          part.progress = 0;
          part.start.set(
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 12
          );
        }
        currentPos.copy(part.start).addScaledVector(
          new THREE.Vector3(
            Math.sin(time * 0.15 + part.seed) * 0.6,
            Math.cos(time * 0.15 + part.seed) * 0.6,
            Math.sin(time * 0.08 + part.seed) * 0.6
          ),
          1
        );
        posAttr.setXYZ(idx, currentPos.x, currentPos.y, currentPos.z);
        colorAttr.setXYZ(idx, 0.35, 0.35, 0.35); // Dim grey
        return;
      }

      // Organic/SEO (Type 0): Flow from search cards into center website
      if (part.type === 0) {
        const active = p >= 0.28;
        if (active) {
          part.progress += part.speed * 0.9;
          if (part.progress > 1) {
            part.progress = 0;
            const sources = [
              new THREE.Vector3(2.8, 1.2, -1.0),
              new THREE.Vector3(2.6, -1.5, 0.8),
              new THREE.Vector3(-2.8, -1.0, -0.8)
            ];
            part.start.copy(sources[idx % sources.length]);
          }
          currentPos.lerpVectors(part.start, new THREE.Vector3(0, 0.1, 0), part.progress);
          currentPos.y += Math.sin(part.progress * Math.PI * 2 + part.seed) * 0.25;
          posAttr.setXYZ(idx, currentPos.x, currentPos.y, currentPos.z);
          colorAttr.setXYZ(idx, 0.23, 0.51, 0.96); // Neon Blue
        } else {
          posAttr.setXYZ(idx, 999, 999, 999);
        }
      }

      // Social Buzz (Type 1): Float outward from website to social cards
      if (part.type === 1) {
        const active = p >= 0.42;
        if (active) {
          part.progress += part.speed * 0.9;
          if (part.progress > 1) {
            part.progress = 0;
            part.start.set(0, 0.1, 0);
            const targets = [
              new THREE.Vector3(-3.0, 1.8, -0.5),
              new THREE.Vector3(3.0, -0.3, -1.8),
              new THREE.Vector3(-2.8, -2.2, 1.5)
            ];
            part.target.copy(targets[idx % targets.length]);
          }
          currentPos.lerpVectors(part.start, part.target, part.progress);
          currentPos.x += Math.cos(part.progress * Math.PI * 3 + part.seed) * 0.15;
          posAttr.setXYZ(idx, currentPos.x, currentPos.y, currentPos.z);
          colorAttr.setXYZ(idx, 0.92, 0.28, 0.6); // Neon Pink
        } else {
          posAttr.setXYZ(idx, 999, 999, 999);
        }
      }

      // Paid Leads (Type 2): Accelerated flow from Ads into the Lead Form
      if (part.type === 2) {
        const active = p >= 0.57;
        if (active) {
          part.progress += part.speed * 2.0; // accelerated
          if (part.progress > 1) {
            part.progress = 0;
            const sources = [
              new THREE.Vector3(2.8, 2.2, -1.0),
              new THREE.Vector3(-2.8, 0.8, -1.5)
            ];
            part.start.copy(sources[idx % sources.length]);
          }
          currentPos.lerpVectors(part.start, new THREE.Vector3(0, -2.3, 0.5), part.progress);
          posAttr.setXYZ(idx, currentPos.x, currentPos.y, currentPos.z);
          colorAttr.setXYZ(idx, 0.92, 0.7, 0.03); // Neon Gold
        } else {
          posAttr.setXYZ(idx, 999, 999, 999);
        }
      }
    });

    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = 999;
    positions[i * 3 + 1] = 999;
    positions[i * 3 + 2] = 999;
    colors[i * 3] = 1;
    colors[i * 3 + 1] = 1;
    colors[i * 3 + 2] = 1;
  }

  const getDotTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.7)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    return new THREE.CanvasTexture(canvas);
  };

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geomRef}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.22}
        map={getDotTexture()}
        transparent
        opacity={opacity}
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// -------------------------------------------------------------
// MAIN R3F 3D SCENE CONFIGURATION
// -------------------------------------------------------------
function DiscoveryScene({ progress, scrollProgress }) {
  const businessCardRef = useRef();
  const browserRef = useRef();
  const seoGroupRef = useRef();
  const socialGroupRef = useRef();
  const perfGroupRef = useRef();
  const analyticsGroupRef = useRef();

  useFrame(({ clock, camera }) => {
    const p = progress.current;
    const time = clock.getElapsedTime();

    // 1. Dynamic Cinematic Camera Paths per stage (6 stages)
    let targetCamPos = new THREE.Vector3(0, 0, 7.5);
    let targetLookAt = new THREE.Vector3(0, 0, 0);

    if (p < 0.167) {
      // Stage 0: Initial State
      targetCamPos.set(0, 0.2, 5.0);
      targetLookAt.set(0, 0, 0);
    } else if (p < 0.333) {
      // Stage 1: Website Foundation
      const t = (p - 0.167) / 0.166;
      targetCamPos.set(0, 0, THREE.MathUtils.lerp(5.0, 6.5, t));
      targetLookAt.set(0, 0, 0);
    } else if (p < 0.500) {
      // Stage 2: SEO Mapping
      const t = (p - 0.333) / 0.167;
      targetCamPos.set(
        THREE.MathUtils.lerp(0, 1.8, t),
        THREE.MathUtils.lerp(0, 0.5, t),
        THREE.MathUtils.lerp(6.5, 6.0, t)
      );
      targetLookAt.set(0, 0, 0);
    } else if (p < 0.667) {
      // Stage 3: Visual Presence
      const t = (p - 0.500) / 0.167;
      targetCamPos.set(
        THREE.MathUtils.lerp(1.8, -1.8, t),
        THREE.MathUtils.lerp(0.5, -0.5, t),
        THREE.MathUtils.lerp(6.0, 6.0, t)
      );
      targetLookAt.set(0, 0, 0);
    } else if (p < 0.833) {
      // Stage 4: Paid Ads & Forms
      const t = (p - 0.667) / 0.166;
      targetCamPos.set(
        THREE.MathUtils.lerp(-1.8, 0, t),
        THREE.MathUtils.lerp(-0.5, -1.2, t),
        THREE.MathUtils.lerp(6.0, 5.5, t)
      );
      targetLookAt.set(0, 0, 0);
    } else {
      // Stage 5: Final wide angle connected digital ecosystem
      const t = (p - 0.833) / 0.167;
      targetCamPos.set(
        THREE.MathUtils.lerp(0, 0, t),
        THREE.MathUtils.lerp(-1.2, 3.2, t),
        THREE.MathUtils.lerp(5.5, 9.2, t)
      );
      targetLookAt.set(0, 0.4, 0);
    }

    // Add subtle ambient idle float so camera is never static
    targetCamPos.x += Math.sin(time * 0.35) * 0.12;
    targetCamPos.y += Math.cos(time * 0.25) * 0.08;

    camera.position.lerp(targetCamPos, 0.045);
    camera.lookAt(targetLookAt);

    // 2. Business Card Scaling (Shrinks to 0 as Stage 1 triggers)
    if (businessCardRef.current) {
      if (p < 0.167) {
        businessCardRef.current.scale.setScalar(1.0);
      } else if (p < 0.25) {
        const s = 1.0 - (p - 0.167) / 0.083;
        businessCardRef.current.scale.setScalar(s);
      } else {
        businessCardRef.current.scale.setScalar(0);
      }
      businessCardRef.current.rotation.y = time * 0.18;
    }

    // 3. Browser Mockup Scaling (Scales up during Stage 1)
    if (browserRef.current) {
      if (p < 0.167) {
        browserRef.current.scale.setScalar(0);
      } else if (p < 0.25) {
        const s = (p - 0.167) / 0.083;
        browserRef.current.scale.setScalar(s);
      } else {
        browserRef.current.scale.setScalar(1.0);
      }
      browserRef.current.position.y = 0.1 + Math.sin(time * 0.5) * 0.06;
      browserRef.current.rotation.y = Math.sin(time * 0.3) * 0.04;
    }

    // 4. SEO Cards scaling
    if (seoGroupRef.current) {
      if (p < 0.333) {
        seoGroupRef.current.scale.setScalar(0);
      } else if (p < 0.417) {
        const s = (p - 0.333) / 0.084;
        seoGroupRef.current.scale.setScalar(s);
      } else {
        seoGroupRef.current.scale.setScalar(1.0);
      }
      seoGroupRef.current.position.y = Math.sin(time * 0.6) * 0.04;
    }

    // 5. Social Cards scaling
    if (socialGroupRef.current) {
      if (p < 0.500) {
        socialGroupRef.current.scale.setScalar(0);
      } else if (p < 0.583) {
        const s = (p - 0.500) / 0.083;
        socialGroupRef.current.scale.setScalar(s);
      } else {
        socialGroupRef.current.scale.setScalar(1.0);
      }
      socialGroupRef.current.position.y = Math.cos(time * 0.5) * 0.04;
    }

    // 6. Performance Cards scaling
    if (perfGroupRef.current) {
      if (p < 0.667) {
        perfGroupRef.current.scale.setScalar(0);
      } else if (p < 0.750) {
        const s = (p - 0.667) / 0.083;
        perfGroupRef.current.scale.setScalar(s);
      } else {
        perfGroupRef.current.scale.setScalar(1.0);
      }
      perfGroupRef.current.position.y = Math.sin(time * 0.4) * 0.03;
    }

    // 7. Analytics System scaling
    if (analyticsGroupRef.current) {
      if (p < 0.833) {
        analyticsGroupRef.current.scale.setScalar(0);
      } else if (p < 0.917) {
        const s = (p - 0.833) / 0.084;
        analyticsGroupRef.current.scale.setScalar(s);
      } else {
        analyticsGroupRef.current.scale.setScalar(1.0);
      }
    }
  });

  const pRef = progress.current;
  const buildProgress = pRef >= 0.167 && pRef < 0.333 ? (pRef - 0.167) / 0.166 : (pRef >= 0.333 ? 1.0 : 0.0);

  const sp = scrollProgress;
  
  let fadeFactor = 1.0;
  if (sp >= 0.833) {
    fadeFactor = Math.max(0, 1 - (sp - 0.833) / (0.93 - 0.833));
  }

  let bgOpacity = 1.0;
  if (sp >= 0.833) {
    bgOpacity = 0.15 + 0.85 * Math.max(0, 1 - (sp - 0.833) / (0.93 - 0.833));
  }

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.18} />
      <directionalLight position={[8, 12, 4]} intensity={1.5} />
      <pointLight position={[0, 1.5, 2]} intensity={2.5} color="#06b6d4" distance={12} />
      <pointLight position={[3, -1, 3]} intensity={1.5} color="#3b82f6" distance={10} />
      <pointLight position={[-3, 2, 3]} intensity={1.5} color="#ec4899" distance={10} />

      {/* 0. Your Business Card (Initial State) */}
      <group ref={businessCardRef} position={[0, 0.1, 0]}>
        <YourBusinessCard active={pRef < 0.25} opacity={fadeFactor} />
      </group>

      {/* 1. Website Chassis Mockup */}
      <group ref={browserRef} position={[0, 0.1, 0]}>
        <BrowserMockup buildProgress={buildProgress} showDashboard={sp >= 0.833} opacity={bgOpacity} />
      </group>

      {/* 2. SEO Cards */}
      <group ref={seoGroupRef}>
        <SEOCards active={sp >= 0.333} opacity={fadeFactor} />
      </group>

      {/* 3. Social Media Cards */}
      <group ref={socialGroupRef}>
        <SocialCards active={sp >= 0.500} opacity={fadeFactor} />
      </group>

      {/* 4. Paid Ads & Forms */}
      <group ref={perfGroupRef}>
        <PerformanceCards active={sp >= 0.667} opacity={fadeFactor} />
      </group>

      {/* 5. Live Analytics System */}
      <group ref={analyticsGroupRef}>
        <AnalyticsSystem active={sp >= 0.833} progress={sp} opacity={fadeFactor} />
      </group>

      {/* Interconnection Grid Pipelines */}
      <ConnectionLines active={sp >= 0.833} progress={sp} opacity={bgOpacity} />

      {/* Active Flowing Particles */}
      <FlowParticles progress={progress} opacity={bgOpacity} />
    </>
  );
}

// -------------------------------------------------------------
// MAIN DISCOVERY JOURNEY COMPONENT
// -------------------------------------------------------------
export default function DiscoveryJourney() {
  const containerRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const progressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Bind ScrollTrigger to progress ref and local state
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create timeline mapped to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1, // smooth dragging scroll
          onUpdate: (self) => {
            progressRef.current = self.progress;
            setScrollProgress(self.progress);
          }
        }
      });

      // Animate progress reference value
      tl.to(progressRef, {
        current: 1.0,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Determine current active card index based on progress
  const activeIndex = Math.min(
    stages.length - 1,
    Math.floor(scrollProgress * stages.length)
  );

  const sp = scrollProgress;
  
  let subLabelOpacity = 0;
  if (sp >= 0.88) {
    subLabelOpacity = Math.min(1, (sp - 0.88) / (0.93 - 0.88));
  }

  let headlineOpacity = 0;
  if (sp >= 0.91) {
    headlineOpacity = Math.min(1, (sp - 0.91) / (0.96 - 0.91));
  }

  let descOpacity = 0;
  if (sp >= 0.94) {
    descOpacity = Math.min(1, (sp - 0.94) / (0.99 - 0.94));
  }

  return (
    <div
      ref={containerRef}
      id="services"
      style={{
        position: 'relative',
        height: '500vh', // long scroll track for immersive scrolling sections
        backgroundColor: '#000000',
      }}
    >
      {/* Sticky Frame for full screen Canvas and overlaids */}
      <div
        ref={canvasWrapperRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#000000',
        }}
      >
        {/* React Three Fiber Canvas */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '12%',
          width: '88%',
          height: '100%',
          zIndex: 1,
          backgroundColor: '#000000',
        }}>
          <Canvas
            camera={{ position: [0, 0, 7.5], fov: 45 }}
            gl={{ antialias: true, alpha: false }}
          >
            <color attach="background" args={["#000000"]} />
            <fogExp2 attach="fog" args={["#000000", 0.04]} />
            <DiscoveryScene progress={progressRef} scrollProgress={scrollProgress} />
          </Canvas>
        </div>

        {/* Ambient Dark Blending Vignettes */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.95) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        {/* Top/Bottom Page edge fade shadows */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '18vh',
          background: 'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 3,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '18vh',
          background: 'linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 3,
          pointerEvents: 'none'
        }} />

        {/* NARRATIVE LAYOVER (Left side panel) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '6%',
            width: '640px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 10,
            pointerEvents: 'none',
          }}
          className="journey-cards-panel"
        >
          <AnimatePresence mode="wait">
            {stages.map((stage, idx) => {
              if (idx !== activeIndex) return null;
              
              // Skip rendering final block here so it can center
              if (idx === stages.length - 1) return null;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    background: 'rgba(5, 5, 8, 0.55)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: '44px 52px',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(124, 58, 237, 0.05)',
                    position: 'relative'
                  }}
                >
                  {/* Subtle purple radial glow behind content block */}
                  <div style={{
                    position: 'absolute',
                    left: '-10%',
                    top: '-10%',
                    width: '120%',
                    height: '120%',
                    background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0) 70%)',
                    zIndex: -1,
                    pointerEvents: 'none',
                    borderRadius: '24px'
                  }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: stage.color,
                      boxShadow: `0 0 10px ${stage.color}`
                    }} />
                    <span style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      fontWeight: 700,
                      color: stage.color,
                      fontFamily: 'var(--font-display)'
                    }}>
                      {stage.subtitle}
                    </span>
                  </div>
                  
                  <h3 style={{
                    fontSize: (idx === 0 || idx === 1 || idx === 2) ? 'clamp(26px, 3.5vw, 38px)' : 'clamp(36px, 4.5vw, 52px)',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-dark)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em'
                  }}>
                    {stage.title}
                  </h3>
                  
                  <p style={{
                    fontSize: (idx === 0 || idx === 1 || idx === 2) ? '16px' : '21px',
                    color: '#ffffff',
                    lineHeight: '1.6',
                    maxWidth: '520px',
                    whiteSpace: 'pre-line'
                  }}>
                    {stage.desc}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* FINAL OVERLAY (Centered overlay at scroll 95%+) */}
        {activeIndex === stages.length - 1 && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 8%',
              textAlign: 'center',
              zIndex: 12,
              pointerEvents: 'none'
            }}
            className="journey-final-panel"
          >
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                maxWidth: '850px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <span style={{
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                fontWeight: 700,
                color: 'var(--accent-purple)',
                fontFamily: 'var(--font-display)',
                opacity: subLabelOpacity,
                transition: 'opacity 0.4s ease'
              }}>
                Consolidated Presence
              </span>
              
              <h2 style={{
                fontSize: 'clamp(32px, 6vw, 72px)',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
                color: 'var(--text-dark)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                opacity: headlineOpacity,
                transition: 'opacity 0.4s ease'
              }}>
                Connected &amp; <span className="text-gradient-purple-blue">Discovered</span>
              </h2>
              
              <p style={{
                fontSize: '18px',
                color: 'var(--text-dark-sub)',
                lineHeight: '1.6',
                maxWidth: '620px',
                margin: '8px auto 0 auto',
                opacity: descOpacity,
                transition: 'opacity 0.4s ease'
              }}>
                Your business is no longer a hidden island. It is the core of an active, compounding digital engine scaling 24/7.
              </p>
            </motion.div>
          </div>
        )}

        {/* Bottom City Status Indicator Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '6%',
          right: '8%',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          pointerEvents: 'none',
          background: 'rgba(2, 2, 4, 0.7)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          padding: '6px 14px',
          backdropFilter: 'blur(6px)'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: scrollProgress >= 0.94 ? 'var(--accent-emerald)' : stages[activeIndex]?.color || '#ffffff',
            boxShadow: `0 0 8px ${scrollProgress >= 0.94 ? 'var(--accent-emerald)' : stages[activeIndex]?.color || '#ffffff'}`,
            transition: 'background-color 0.3s ease'
          }} />
          <span style={{
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontFamily: 'var(--font-display)',
            color: '#ffffff'
          }}>
            {stages[activeIndex]?.subtitle || "Initial"}
          </span>
        </div>
      </div>

      {/* Media styling overrides */}
      <style>{`
        @keyframes buttonPulse {
          0% { box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3); transform: scale(1); }
          50% { box-shadow: 0 4px 20px rgba(6, 182, 212, 0.6); transform: scale(1.04); }
          100% { box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3); transform: scale(1); }
        }
        .pulsing-button {
          animation: buttonPulse 2.0s infinite ease-in-out;
        }
        @media (max-width: 900px) {
          .journey-cards-panel {
            width: 84% !important;
            left: 8% !important;
            right: 8% !important;
            height: 40% !important;
            top: 8% !important;
            justify-content: flex-start !important;
          }
          .journey-final-panel {
            height: 40% !important;
            bottom: 12% !important;
            top: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
