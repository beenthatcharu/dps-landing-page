"use client";

import { Target, Heart, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Mission",
    text: "DPS will continue to be a happy school for its students and enablers, facilitating curricular and co-curricular knowledge to a brimful measure thus enabling them to be future read and able leaders.",
    icon: Target,
    color: "from-blue-600 to-cyan-400",
  },
  {
    title: "Our Values",
    text: `CARING – An Inclusive and Supportive Environment.

LEARNING – Grooming Lifelong Learners.

ACHIEVING – Achieving Milestones and Setting Benchmarks.

SHARING – Sharing Our Joys, Dreams and Goals.

SOCIAL RESPONSIBILITY – Building a Better Future Today.`,
    icon: Heart,
    color: "from-rose-600 to-pink-500",
  },
  {
    title: "Our Vision",
    text: "DPS aspires to live by our motto “CARPE DIEM”, seizing each moment to shape the learning environment of the future, applying all acquired knowledge with scientific reasoning, humanity and wisdom for a happier society.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-400",
  },
];

export default function MissionVision() {
  return (
    <section
      className="section-padding relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.assets-landingi.com/uc/7d5cda0d-e32d-43b5-9112-79a17395c559/SEN001623.JPG')",
      }}
    >

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>

      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C20,80 50,120 100,100 L100,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-accent/20 rounded-full blur-[160px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="h-full p-12 lg:p-14 rounded-[4rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/[0.08] transition-all duration-700 hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.4)] hover:-translate-y-3 flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 bg-gradient-to-br ${card.color} shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                  <card.icon className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 font-headline tracking-tight">
                  {card.title}
                </h3>

                <p className="text-white/70 text-lg lg:text-xl leading-relaxed font-medium whitespace-pre-line">
                  {card.text}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}