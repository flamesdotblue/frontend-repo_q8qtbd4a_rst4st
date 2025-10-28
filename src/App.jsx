import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import SystemsShowcase from './components/SystemsShowcase';
import LobbyCTA from './components/LobbyCTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroSection />
      <FeatureGrid />
      <SystemsShowcase />
      <LobbyCTA />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Skyfall Legends • A cinematic open-world RPG shooter experience.
      </footer>
    </div>
  );
};

export default App;
