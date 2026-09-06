import React from "react";
import { Timeline } from "../components/ui/timeline";

export function EducationTimeline() {
  const educationData = [
    {
      year: "2024-2026",
      content: (
        <div className="flex flex-col">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/umich.png"
              alt="University of Michigan Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              University of Michigan Ann Arbor
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-base md:text-xl mb-4 md:mb-2">
            M.S. — Electrical and Computer Engineering
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-500 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">GPA: 3.75</span>
            </div>
          </div>

        </div>
      ),
    },
    {
      year: "2019-2024",
      content: (
        <div className="flex flex-col">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/csun.png"
              alt="CSUN Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              Cal State University - Northridge
            </h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-emerald-400 font-mono font-bold text-base md:text-xl">
              B.S. — Computer Engineering
            </p>
            <p className="text-emerald-500 font-mono font-bold text-sm md:text-lg mb-4 md:mb-2">
              Minor — Mathematics
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-500 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">GPA: 4.0</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-clip">
      <Timeline data={educationData} />
    </div>
  );
}
