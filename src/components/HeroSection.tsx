"use client";

import { motion } from "framer-motion";
import EnquiryForm from "./EnquiryForm";
import { AgeGradeTable } from "./AgeGradeTable";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[100vh] flex items-center pt-[90px] md:pt-[110px] pb-12 md:pb-16 overflow-hidden bg-background bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.lugc.link/7309a6b8-b380-422e-96c6-99656dcab271/-/stretch/off/-/resize/x1024/-/format/auto/')",
      }}
    >

      {/* DPS Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A47]/90 via-[#0E2A47]/70 to-transparent z-0" />

      {/* Decorative Premium Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-accent/10 rounded-full blur-[160px] -mr-96 -mt-48 opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary/5 rounded-full blur-[140px] -ml-48 -mb-48 opacity-60" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* ✅ DPS STYLE CONTAINER ALIGNMENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col space-y-8 md:space-y-10 text-center lg:text-left"
        >

          <div className="space-y-5 md:space-y-6">

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-3 bg-white/60 backdrop-blur-sm border border-white/20 px-5 md:px-6 py-2 rounded-full w-fit shadow-sm mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2B705] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F2B705]"></span>
              </span>

              <span className="text-white font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase">
                Admissions Open 2026-2027
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-white font-headline tracking-tight">
              DPS 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#2563EB]">
                {" "}International{" "}
              </span>
              <br/>
              <span className="text-[#F2B705]">School.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed max-w-xl md:max-w-2xl mx-auto lg:mx-0">
              Admissions for the current academic year (2026-2027) are open.
            </p>

          </div>

          <div className="space-y-6 md:space-y-8">

            <div className="flex items-start justify-center lg:justify-start space-x-4">
              <div className="w-1 h-14 md:h-16 bg-[#F2B705] rounded-full mt-1" />
              <p className="text-gray-200 font-medium text-base md:text-lg max-w-md">
                Enroll your child in DPS International School and provide them with the foundation they need to excel in an ever-changing world.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full md:w-fit mx-auto lg:mx-0"
            >
              <AgeGradeTable />
            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >

          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0 rounded-2xl"></div>

            <div className="relative z-10">
              <EnquiryForm />
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}