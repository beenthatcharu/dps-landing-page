"use client";

import { BookOpenCheck, UserRoundCheck, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Holistic Education Approach",
    description:
      "Our curriculum blends academic Acknowledging uniqueness and Acknowledging uniqueness and diverse talents, our holistic education nurtures academic, artistic, athletic, and emotional aspects, fostering confident, well-rounded individuals. talents, our holistic education nurtures academic, artistic, athletic, and emotional aspects, fostering confident, well-rounded individuals.",
    icon: BookOpenCheck,
    color: "bg-blue-500/10 text-blue-600",
    iconColor: "text-blue-600",
  },
  {
    title: "Access to World Class Faculty",
    description:
      "Learn from globally Comprised of passionate, experienced educators, our faculty cultivates curiosity, critical thinking, and creativity, mentoring students to achieve their fullest potential. Comprised of passionate, experienced educators, our faculty cultivates curiosity, critical thinking, and creativity, mentoring students to achieve their fullest potential.",
    icon: UserRoundCheck,
    color: "bg-purple-500/10 text-purple-600",
    iconColor: "text-purple-600",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Modern smart-classrooms, advanced Our modern infrastructure complements education with cutting-edge technology, spacious classrooms, well-equipped labs, libraries, and sports facilities for optimal learning and growth.",
    icon: Building2,
    color: "bg-amber-500/10 text-amber-600",
    iconColor: "text-amber-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeatureCards() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">

      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 rounded-full blur-[120px] md:blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/10 rounded-full blur-[120px] md:blur-[150px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full group hover:shadow-[0_70px_140px_-20px_rgba(0,0,0,0.18)] hover:-translate-y-6 transition-all duration-700 border border-white/60 rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 bg-white/90 backdrop-blur-md relative overflow-hidden">

                {/* hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <CardHeader className="p-4 md:p-6 relative z-10">

                  {/* icon glow */}
                  <div className="relative mb-6 md:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700"></div>

                    <div
                      className={`relative w-16 h-16 md:w-20 md:h-20 ${f.color} rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-md
                      group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700`}
                    >
                      <f.icon
                        className={`w-8 h-8 md:w-10 md:h-10 ${f.iconColor} transition-transform duration-700 group-hover:scale-110`}
                      />
                    </div>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-black font-headline text-primary group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {f.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-4 md:px-6 pb-6 md:pb-10 relative z-10">
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-medium">
                    {f.description}
                  </p>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
