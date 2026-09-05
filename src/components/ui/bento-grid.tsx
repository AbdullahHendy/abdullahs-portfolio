import React from "react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-4 md:auto-rows-[minmax(24rem,auto)] ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-center space-y-6 rounded-xl border border-white/5 bg-slate-950 p-6 transition duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
        className,
      )}
    >
      <div className="w-full rounded-lg overflow-hidden flex items-center justify-center">
        {header}
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-1 justify-center items-center flex flex-col space-y-2">
        {icon}
        <div className="mb-2 font-mono font-bold text-lg md:text-xl text-center text-emerald-400">
          {title}
        </div>
        <div className="font-mono font-bold text-lg md:text-xl text-slate-200 text-center leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};