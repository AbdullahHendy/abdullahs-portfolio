"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  year: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-mono"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-12 md:gap-4"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center self-start pr-5 md:pr-10">
              <div className="h-10 absolute left-3 md:left-3 w-10 bg-slate-900 border border-white/5 flex items-center justify-center">
                <div className="h-4 w-4 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block min-w-60 text-xl md:pl-20 md:text-3xl font-bold text-emerald-400 font-mono">
                {item.year}
              </h3>
            </div>

            <div className="relative pl-15 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-emerald-400 font-mono">
                {item.year}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-emerald-900/30 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-0.5 bg-linear-to-t from-emerald-400 via-emerald-500 to-transparent from-0% via-10%"
          />
        </div>
      </div>
    </div>
  );
};
