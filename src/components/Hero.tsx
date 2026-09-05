import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion, useScroll, useTransform } from "motion/react";

export interface TypewriterWord {
  text: string;
  className?: string;
}

export interface TypewriterLine {
  words: TypewriterWord[];
}

export interface HeroProps {
  prefix: string;
  name: string;
  lines: TypewriterLine[];
}

export const Hero: React.FC<HeroProps> = ({ prefix, name, lines }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const y = useTransform(scrollY, [0, 700], [0, -300]);

  return (
    <section className="sticky top-24 -z-10 flex flex-col items-start justify-center min-h-[85vh] px-4 md:px-0 max-w-4xl mx-auto w-full">  
      <motion.div style={{ opacity, y }} className="flex flex-col items-start w-full">
        {/* Prefix before the name */}
        <div className="mb-4 sm:mb-6 ml-1 md:ml-5 font-mono font-bold text-lg md:text-2xl lg:text-3xl text-emerald-400">
          <p>{prefix}</p>
        </div>

        {/* The name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold font-sans text-slate-100 tracking-tighter mb-6 sm:mb-8">
          {name}<span className="text-emerald-500">.</span>
        </h1>
        
        {/* flex-col stack of Typewriter lines */}
        <div className="flex flex-col items-start space-y-1 sm:space-y-2 w-full">
          {lines.map((line, index) => (
            <div key={index} className="flex items-center w-full">
              <span className="text-slate-500 mr-3 text-lg md:text-2xl font-mono hidden sm:inline-block">
                {">"}
              </span>
              <TypewriterEffectSmooth
                words={line.words} 
                // Added m-0 (margin zero) to prevent Aceternity's default margins from breaking the stack
                className="text-lg md:text-2xl lg:text-3xl text-slate-300 font-mono text-left m-0"
                cursorClassName="bg-emerald-400 h-5 md:h-7 lg:h-8"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};