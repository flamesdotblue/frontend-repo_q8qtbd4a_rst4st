import React from 'react';
import { Shield, Zap, Heart, Bolt, Coins, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Track = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
    <h3 className="text-xl font-semibold">{title}</h3>
    <ul className="mt-3 space-y-2 text-white/90">
      {items.map((i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          {i}
        </li>
      ))}
    </ul>
  </div>
);

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-white">
    <Icon className="mb-2 h-5 w-5" />
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-white/80">{label}</div>
  </div>
);

const SystemsShowcase = () => {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Skill Trees & Upgrades</h2>
            <p className="mt-3 max-w-xl text-white/80">
              Each hero has one active skill and three passive skills. Earn XP to unlock nodes, evolve your build, and upgrade weapons through modular attachments and rarity tiers.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Track
                title="Active Skills"
                items={[
                  'Blink Strike: dash + katana finisher',
                  'Aegis Wall: deployable energy shield',
                  'Stormcaller: burst damage ultimate',
                ]}
              />
              <Track
                title="Passive Skills"
                items={[
                  'Lifesteal: heal on hit',
                  'Evasive Step: chance to auto-dodge',
                  'Regenerator: out-of-combat healing',
                ]}
              />
              <Track
                title="Weapon Upgrades"
                items={[
                  'Barrels: recoil & range',
                  'Scopes: ADS & zoom tiers',
                  'Magazines: capacity & reload',
                ]}
              />
              <Track
                title="Companion Pets"
                items={[
                  'Scout: highlights enemies',
                  'Retriever: fetches airdrops',
                  'Guardian: periodic shield pulse',
                ]}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-3 gap-4">
              <Stat icon={Zap} label="Active" value="1" />
              <Stat icon={Heart} label="Passives" value="3" />
              <Stat icon={Bolt} label="Elements" value="4" />
              <Stat icon={Shield} label="Armor Tiers" value="5" />
              <Stat icon={Coins} label="Rarities" value="5" />
              <Stat icon={Star} label="Pets" value="3+" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-emerald-600/20 p-6 text-white">
              <h3 className="text-lg font-semibold">Animated Lobby</h3>
              <p className="mt-2 text-white/85">
                A 3D animated lobby welcomes you before each match: preview heroes, pets, and equip your best weapons and shields before you board the flight.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemsShowcase;
