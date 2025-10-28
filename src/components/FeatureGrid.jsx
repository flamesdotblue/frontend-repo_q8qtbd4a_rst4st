import React from 'react';
import { Crosshair, Shield, Sword, PawPrint, Package, Zap, Heart, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Tactical Gunplay',
    icon: Crosshair,
    desc: 'Responsive third-person shooting with recoil, ADS, and enemy AI behaviors.',
  },
  {
    title: 'Armor & Shields',
    icon: Shield,
    desc: 'Loot helmets, vests, and energy shields to survive intense firefights.',
  },
  {
    title: 'Melee Finishers',
    icon: Sword,
    desc: 'Close the distance with katanas and stylish finishers inspired by top shooters.',
  },
  {
    title: 'Companion Pets',
    icon: PawPrint,
    desc: 'Summon pets with unique abilities like item fetching, detecting threats, or buffs.',
  },
  {
    title: 'Airdrops & Loot',
    icon: Package,
    desc: 'Chase supply airdrops for high-tier weapons, attachments, and resources.',
  },
  {
    title: 'Dynamic World',
    icon: Map,
    desc: 'Explore forests, rivers, and mountain outposts with day-night and weather cycles.',
  },
  {
    title: 'Passive Powers',
    icon: Heart,
    desc: 'Lifesteal, auto-regeneration, and evasive dodges that trigger during combat.',
  },
  {
    title: 'Ultimate Abilities',
    icon: Zap,
    desc: 'One active skill per hero for tide-turning moments and stylish plays.',
  },
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4 }}
    className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-inner backdrop-blur hover:bg-white/10"
  >
    <div className="mb-3 inline-flex rounded-xl bg-white/10 p-3">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-white/80">{desc}</p>
  </motion.div>
);

const FeatureGrid = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Core Gameplay</h2>
          <p className="mt-3 text-white/80">Designed for thrilling firefights, meaningful progression, and cinematic action.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
