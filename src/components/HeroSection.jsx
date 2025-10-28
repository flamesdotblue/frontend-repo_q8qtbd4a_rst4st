import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Gamepad2, Plane, Map, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-white/90">Open-world 3D RPG Shooter</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Skyfall Legends
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 max-w-2xl text-balance text-white/85"
        >
          Drop from the skies, gear up, and master unique skill trees with active and passive powers. Battle human enemies across lush natural worlds and rise as a legendary hero.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black shadow-lg shadow-white/10 transition hover:scale-[1.02]">
            <Gamepad2 className="h-5 w-5" />
            Play Demo
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
            <Rocket className="h-5 w-5" />
            Watch Trailer
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { icon: Plane, label: 'Aerial Drop' },
            { icon: Map, label: 'Open World' },
            { icon: Rocket, label: 'Rapid Combat' },
            { icon: Gamepad2, label: 'Controller Ready' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-lg border border-white/10 bg-black/30 p-3 backdrop-blur">
              <div className="flex items-center justify-center gap-2 text-sm text-white/90">
                <Icon className="h-4 w-4 text-white/80" />
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
