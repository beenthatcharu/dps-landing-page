"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "DPS seal of Quality and Excellence",
  "Child - Centered Philosophy",
  "Sprawling Campus where education meets Sports & Creativity",
  "Sound financial backing from a committed Management",
  "Only trained and experienced teaching faculty",
  "Parents Involvement in teaching - learning process as the teachers",
  "A Different Approach where it provides a variety of learning experiences which promote integrated growth in all areas, be it physical, intellectual, moral or social",
];

export default function WhySchool() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0B1B3B] to-[#08132A] overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/20 blur-[120px] md:blur-[160px] rounded-full -z-10"/>
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 blur-[120px] md:blur-[160px] rounded-full -z-10"/>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* IMAGE */}

        <motion.div
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="relative"
        >

          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_40px_80px_-10px_rgba(0,0,0,0.6)] border border-white/10">

            <Image
              src="https://cdn.lugc.link/90d7fd4e-1c9c-48e6-898f-ef737995c3ad/-/stretch/off/-/resize/x634/-/format/auto/"
              alt="DPS International School"
              width={750}
              height={480}
              className="object-cover w-full h-full"
            />

          </div>

        </motion.div>

        {/* CONTENT */}

        <div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Why DPS International School?
          </h2>

          <div className="w-16 md:w-20 h-1 bg-blue-500 mt-3 md:mt-4 mb-8 md:mb-10 rounded-full"></div>

          {/* BENEFITS */}

          <div className="space-y-3 md:space-y-4">

            {benefits.map((benefit, i) => (

              <div
                key={i}
                className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >

                <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500/20">

                  <CheckCircle2 className="text-green-400 w-4 h-4 md:w-5 md:h-5"/>

                </div>

                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
