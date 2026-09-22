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
            <h4 className="text-base md:text-2xl font-bold text-slate-200 leading-tight">
              CE Lab - University of Michigan
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-sm md:text-xl">
            Research Assistant
          </p>
          <p className="text-emerald-500 font-mono font-bold text-sm md:text-xl mb-4">
            Dr. Reetuparna Das
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Developing a cycle-accurate hardware emulation of the group's recent CENT LLM inference accelerator chip on FPGA using Ramulator2 and vendor-specific DDR models as references for DDR timing.
                <br />
                Targeting the Amazon F2 Cloud Virtex Ultrascale+ FPGA (XCVU47P HBM2) to validate the emulation across different GPT and LLaMA inference workloads.
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Extending the open-source project, LiteDRAM, to add support for CENT-specific DRAM commands in memory controllers of LPDDRx models to be instantiated in the emulation design.
              </span>
            </div>            
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
            <h4 className="text-base md:text-2xl font-bold text-slate-200 leading-tight">
              WIMS Lab - University of Michigan
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-sm md:text-xl">
            Research Assistant
          </p>
          <p className="text-emerald-500 font-mono font-bold text-sm md:text-xl mb-4">
            Dr. Yogesh Gianchandani
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Overhauled an autonomous multi-sensor Bluetooth microsystem featuring an in-house highly-sensitive capacitive pressure sensor; 
                implemented a non-blocking DMA flash pipeline for reliable untethered data acquisition allowing for multi-sensor sampling at rates ~100x higher (125 Hz). 
                <br />
                Integrated BLE 5.0 with 2M PHY negotiation and a custom data-streaming state machine, reducing post-experiment data transfer times by ~40x.
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Repurposed the overhauled microsystem to co-author novel research, utilizing the custom, highly sensitive capacitive pressure sensor and accelerometer to 
                accurately obtain the pressure spectra describing underwater vortex shedding from a submerged bluff body.
                <br />
                Used the multi-modal data to validate theoretical Strouhal frequencies across varying flow conditions.
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Working on a novel research project to reliably and cost-effectively detect hydrofoil cavitation using a custom sensing system.
              </span>
            </div>
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
            <h4 className="text-base md:text-2xl font-bold text-slate-200 leading-tight">
              Keysight Technologies
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-sm md:text-xl mb-4">
            R&D Engineer
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Designed custom RTL on a Xilinx Versal SoC leveraging PCIe 5.0 for high-bandwidth DMA-based data movement, achieving 2x throughput and 2x reduction in latency for AI/HPC infrastructure.
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Modernized legacy synchronization infrastructure by implementing custom RTL logic on timing FPGAs and its supporting gRPC microservices 
                to achieve nanosecond-level precision across distributed Ethernet test equipment.
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Developed a P4 based packet capture module within a programmable switch pipeline, enabling low-level traffic visibility for debugging high-speed Ethernet designs.
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
            <h4 className="text-base md:text-2xl font-bold text-slate-200 leading-tight">
              Cirrus Logic
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-sm md:text-xl mb-4">
            Applications Engineer Intern
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-400 font-mono font-bold leading-relaxed">
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Developed a unified Python API wrapping drivers of silicon emulation platforms with multiple FPGAs for internal and external customer workflows, 
                reducing workflow setup time and abstracting low-level variations across diverse platforms.
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emerald-500 mt-0.5">{"[>]"}</span>
              <span className="text-slate-200">
                Characterized dynamic supply rail tracking on Class H amplifiers to address customer inquiries, 
                providing detailed signal analysis to verify expected power draw under various load conditions.
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
            <h4 className="text-base md:text-2xl font-bold text-slate-200 leading-tight">
              Math Department - Cal State University Northridge
            </h4>
          </div>

          <p className="text-emerald-400 font-mono font-bold text-sm md:text-xl mb-4">
            Instructional Student Assistant
          </p>

          <div className="flex flex-col gap-1.5 text-sm md:text-lg text-slate-400 font-mono font-bold leading-relaxed">
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