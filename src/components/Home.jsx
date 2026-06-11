import React from 'react';

// Import Custom Interactive Components
import Hero3D from './Hero3D';
import ManifestoSection from './ManifestoSection';
import ProblemSection from './ProblemSection';
import DiscoveryJourney from './DiscoveryJourney';
import ProcessSection from './ProcessSection';

export default function Home() {
  return (
    <>
      {/* ================= PREMIUM 3D SHADER HERO SECTION ================= */}
      <Hero3D />

      {/* ================= MANIFESTO SECTION ================= */}
      <ManifestoSection />

      {/* ================= STORYTELLING PROBLEM SECTION ================= */}
      <ProblemSection />

      {/* ================= IMMERSIVE 3D DIGITAL DISCOVERY JOURNEY ================= */}
      <DiscoveryJourney />

      {/* ================= PROCESS NARRATIVE TIMELINE ================= */}
      <ProcessSection />
    </>
  );
}



