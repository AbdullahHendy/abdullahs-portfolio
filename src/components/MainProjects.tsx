import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { TfiCup } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";

export function MainProjects() {
  return (
    <BentoGrid className="max-w-5xl">

      <BentoGridItem
       title={
          <div className="flex text-base md:text-xl items-center justify-center gap-3">
            <span>CENT Paper Emulation</span>
            <a 
              href="https://github.com/AbdullahHendy/cent-emulation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
              title="View Source on GitHub"
            >
              <FiGithub className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </div>
        }
        description={
          <div className="text-base md:text-xl">
            Cycle-accurate FPGA emulation of one CENT paper in a real-world scenario. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        }
        header={
          <a
            href="/cent-emulation.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/cent-emulation.png"
              alt="CENT Paper Implementation"
              className="w-full h-full object-contain cursor-pointer"
            />
          </a>
        }
        className="col-span-1 bg-slate-950 border-white/5 hover:border-emerald-500/50"
      />

      <BentoGridItem
        title={
          <div className="flex text-base md:text-xl items-center justify-center gap-3">
            <span>Mars Mission Emulation</span>
            <a 
              href="https://github.com/csun-opencv/Mars-Mission-Emulation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
              title="View Source on GitHub"
            >
              <FiGithub className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </div>
        }
        description={
          <div className="text-base md:text-xl">
            Emulation of a Mars mission scenario in a simulated environment. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        }
        header={
          <a
            href="/mars-mission-emulation.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/mars-mission-emulation.png"
              alt="Mars Mission Emulation"
              className="w-full h-full object-contain cursor-pointer"
            />
          </a>
        }
        icon={<TfiCup className="text-amber-400 font-bold" />}
        className="col-span-1 bg-slate-950 border-white/5 hover:border-emerald-500/50"
      />

      <BentoGridItem
        title={
          <div className="flex text-base md:text-xl items-center justify-center gap-3">
            <span>Live Translation Engine</span>
            <a 
              href="https://github.com/AbdullahHendy/live-translation"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
              title="View Source on GitHub"
            >
              <FiGithub className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </div>
        }
        description={
          <div className="text-base md:text-xl">
            Real-time language translation for seamless communication. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        }
        header={
          <a
            href="/live-translation-pipeline.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/live-translation-pipeline.png"
              alt="Live Translation Engine"
              className="w-full h-full object-contain cursor-pointer"
            />
          </a>
        }
        className="bg-slate-950 border-white/5 hover:border-emerald-500/50"
      />

      <BentoGridItem
        title={
          <div className="flex text-base md:text-xl items-center justify-center gap-3">
            <span>Audio Amplifier</span>
            <a 
              href="https://github.com/AbdullahHendy/Speaker-PCB"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
              title="View Source on GitHub"
            >
              <FiGithub className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </div>
        }
        description={
          <div className="text-base md:text-xl">
            Audio amplifier for high-fidelity sound. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        }
        header={
          <a
            href="/pcb-3d.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/pcb-3d.png"
              alt="PCB 3D Model"
              className="w-full h-full object-contain cursor-pointer"
            />
          </a>
        }
        className="col-span-1 bg-slate-950 border-white/5 hover:border-emerald-500/50"
      />
    </BentoGrid>
  );
}