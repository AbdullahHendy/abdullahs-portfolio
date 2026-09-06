import React from "react";
import { Timeline } from "../components/ui/timeline";

export function ExperienceTimeline() {
  const experienceData = [
    {
      year: "2026-Now",
      content: (
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/cse.png"
              alt="UMich CSE Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              CE Lab - University of Michigan
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-base md:text-xl mb-4">
            Research Assistant
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-base text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Designed and developed custom FPGA-based hardware leveraging PCIe 5.0 for high-bandwidth data movement, achieving 2x throughput and 2x reduction in latency for AI/HPC infrastructure[cite: 1].
              </span>
            </div>
            {/* Add more points */}
          </div>
        </div>
      ),
    },

    {
      year: "2025-Now",
      content: (
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/wims.png"
              alt="UMich WIMS Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              WIMS Lab - University of Michigan
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-base md:text-xl mb-4">
            Research Assistant
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-base text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Designed and developed custom FPGA-based hardware leveraging PCIe 5.0 for high-bandwidth data movement, achieving 2x throughput and 2x reduction in latency for AI/HPC infrastructure[cite: 1].
              </span>
            </div>
            {/* Add more points */}
          </div>
        </div>
      ),
    },

    {
      year: "2023-2025",
      content: (
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/keysight.png"
              alt="Keysight Technologies Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              Keysight Technologies
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-base md:text-xl mb-4">
            R&D Engineer
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-base text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Designed and developed custom FPGA-based hardware leveraging PCIe 5.0 for high-bandwidth data movement, achieving 2x throughput and 2x reduction in latency for AI/HPC infrastructure[cite: 1].
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Modernized legacy synchronization infrastructure by architecting multiple gRPC microservices and custom low-level FPGA logic, achieving nanosecond-level timing precision for synchronizing distributed Ethernet test devices[cite: 1].
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Developed a P4 based packet capture module within a programmable switch pipeline, enabling low-level traffic visibility for debugging high-speed Ethernet designs[cite: 1].
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      year: "2023-2023",
      content: (
        <div className="flex flex-col mb-12">
          {/* Logo and Name aligned tightly */}
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/cirrus.png"
              alt="Cirrus Logic Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              Cirrus Logic
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-base md:text-xl mb-4">
            Applications Engineer Intern
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-base text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Developed a Python API wrapper for multi-FPGA silicon emulation to support internal validation and external customer verification, reducing workflow setup time and standardizing protocols across diverse platforms[cite: 1].
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Characterized dynamic supply rail tracking on Class H amplifiers to address customer inquiries, providing detailed signal analysis to verify expected power draw under various load conditions[cite: 1].
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      year: "2021-2024",
      content: (
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-2">
            <img
              src="/csun.png"
              alt="CSUN Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <h4 className="text-lg md:text-2xl font-bold text-slate-200 leading-tight">
              Math Department - Cal State University Northridge
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-base md:text-xl mb-4">
            Instructional Student Assistant
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-base text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Provided teaching assistance for Pre-calculus, Algebra, Trigonometry, Calculus I, II, III, Differential Equations, Linear Algebra.
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Assisted in the creation of instructional materials, resources for various math courses.
              </span>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="w-full overflow-clip">
      <Timeline data={experienceData} />
    </div>
  );
}