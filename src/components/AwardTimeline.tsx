import React from "react";
import { Timeline } from "../components/ui/timeline";

export function AwardTimeline() {
  const awardData = [
    {
      year: "2023",
      content: (
        <div className="flex flex-col">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/opencv.png"
              alt="OpenCV Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              OpenCV AI 2023 Competition
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-base md:text-xl mb-4 md:mb-2">
            Finalist - ~Top 10%
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-500 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">Description of the award and project and link.</span>
            </div>
          </div>

        </div>
      ),
    },
    {
      year: "2020",
      content: (
        <div className="flex flex-col">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/csun.png"
              alt="CSUN Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              CSUN WAVES 2020 Annual Book
            </h4>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-emerald-400 font-mono font-bold text-base md:text-xl">
              Published Essay - "dasdas"
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-500 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">Description of the award and project and link.</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-clip">
      <Timeline data={awardData} />
    </div>
  );
}
