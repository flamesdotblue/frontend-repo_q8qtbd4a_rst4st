import React from 'react';
import { Plane, Package, Shield, Sword, PawPrint, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const LobbyCTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Board the Flight, Drop In, Take Over</h2>
            <p className="mt-3 text-white/85">
              Start in a cinematic 3D lobby. Choose your hero, assign one active and three passive skills, pick a pet, then fly over vast natural maps. Jump, loot, and outplay human enemies.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <Plane className="h-4 w-4" /> Flight Start
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-4 w-4" /> Airdrops
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <Shield className="h-4 w-4" /> Shields
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <Sword className="h-4 w-4" /> Katana
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <PawPrint className="h-4 w-4" /> Pets
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <Rocket className="h-4 w-4" /> Upgrades
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black shadow-lg shadow-white/10 transition hover:scale-[1.02]">Enter Lobby</button>
              <button className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">View Skill Trees</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-fuchsia-500/20 p-1">
              <div className="h-full w-full rounded-[14px] bg-black/60 p-6">
                <div className="grid h-full grid-rows-3 gap-3 text-white/90">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">Hero Preview • Animations</div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">Pet Loadout • Specials</div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">Weapon & Shield • Upgrades</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LobbyCTA;
