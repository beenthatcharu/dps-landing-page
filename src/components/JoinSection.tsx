"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function JoinSection() {
  return (
    <section className="relative py-24 md:py-32 text-white text-center overflow-hidden">
      {/* Background Image - Exactly as per screenshot */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.lugc.link/90d7fd4e-1c9c-48e6-898f-ef737995c3ad/-/format/auto/')",
        }}
      />
      {/* Overlay to match the darkened look of the image */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-8">
        {/* School Icon/Logo above heading as per image */}
        <div className="flex justify-center mb-4">
            <img src="https://cdn-icons-png.flaticon.com/512/167/167707.png" className="w-20 h-20 md:w-28 md:h-28" alt="School Icon" />
        </div>

        <p className="text-yellow-500 font-semibold tracking-widest uppercase text-xs md:text-sm">
          Where Learning Knows No Boundaries
        </p>

        <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight">
          Join DPS International School
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-sm md:text-xl font-medium text-gray-100/90 leading-relaxed">
            DPSIS started its operation at Singapore on 19th April 2004. At school, our earnest desire is to nurture the young fertile minds by positive development through excellent academic and extra curricular inputs.
          </p>
          <p className="text-sm md:text-xl font-medium text-gray-100/90 leading-relaxed">
            The school ensures that students coming from diverse communities, regions, backgrounds and professions are given a common platform and equal opportunities.
          </p>
        </div>

        <div className="pt-8">
          <Button 
            className="bg-[#F2B705] text-black hover:bg-yellow-400 h-12 md:h-14 px-10 md:px-14 text-sm md:text-lg font-bold rounded-lg shadow-lg transition-all"
          >
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}