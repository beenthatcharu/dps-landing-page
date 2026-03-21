"use client";

import { motion } from "framer-motion";
import EnquiryForm from "./EnquiryForm";
import { AgeGradeTable } from "./AgeGradeTable";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-10 overflow-hidden bg-background bg-cover bg-center font-sans"
      style={{
        backgroundImage:
          "url('https://cdn.lugc.link/7309a6b8-b380-422e-96c6-99656dcab271/-/stretch/off/-/resize/x1024/-/format/auto/')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0" />

      {/* Container - Matches standard Navbar constraints */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT - Removed items-center to keep it left-aligned */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >

            {/* BADGE */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full w-fit">
              <span className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-white text-[10px] sm:text-[12px] font-bold tracking-widest uppercase">
                Admissions Open 2026-2027
              </span>
            </div>

            {/* HEADING - Adjusted size for better impact */}
            <h1 className="font-black text-white leading-[1.1] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              DPS <span className="text-blue-400">International</span>
              <br />
              <span className="text-yellow-400">School.</span>
            </h1>

            {/* PARAGRAPH */}
            <p className="text-gray-100 text-base sm:text-lg md:text-xl font-medium max-w-xl">
              Admissions for the current academic year (2026-2027) are open.
            </p>

            {/* DESCRIPTION */}
            <div className="flex items-stretch space-x-4">
              <div className="w-1.5 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm sm:text-base max-w-md leading-relaxed">
                Enroll your child in DPS International School and provide them with the foundation they need to excel in an ever-changing world.
              </p>
            </div>

            {/* TABLE - Left aligned */}
            <div className="w-full sm:max-w-md pt-4">
              <AgeGradeTable />
            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
              <EnquiryForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}