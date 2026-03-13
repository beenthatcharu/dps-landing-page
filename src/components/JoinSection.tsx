"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section className="relative py-40 lg:py-52 overflow-hidden text-white text-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://cdn.lugc.link/90d7fd4e-1c9c-48e6-898f-ef737995c3ad/-/stretch/off/-/resize/x634/-/format/auto/')",
        }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-[#0E2A47]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative container mx-auto px-6 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-10"
        >

          {/* Subtitle */}
          <p className="text-[#F2B705] font-semibold tracking-wider uppercase">
            Where Learning Knows No Boundaries
          </p>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Join DPS International School
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            DPSIS started its operation at Singapore on 19th April 2004.
            At school, our earnest desire is to nurture the young fertile minds
            by positive development through excellent academic and extra
            curricular inputs.
          </p>

          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            The school ensures that students coming from diverse communities,
            regions, backgrounds and professions are given a common platform
            and equal opportunities.
          </p>

          {/* Button */}
          <div className="flex justify-center pt-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#F2B705] text-black hover:bg-yellow-400 h-16 px-12 text-lg font-semibold rounded-xl shadow-lg transition-all"
              >
                <Download className="mr-3 w-5 h-5" />
                Download Prospectus
              </Button>
            </motion.div>

          </div>

        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0E2A47] to-transparent" />

    </section>
  );
}