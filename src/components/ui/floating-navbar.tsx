import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Terminal } from "lucide-react";
import { cn } from "../../lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export interface NavItem {
  name: string;
  link: string;
}

export interface PersonalItem {
  name: string;
  link: string;
}

export interface FloatingNavProps {
  navItems: NavItem[];
  personalItems?: PersonalItem[];
  className?: string;
}

// Helper function to map names to icons
const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "github": return <FaGithub className="w-4 h-4 md:w-6 md:h-6" />;
    case "linkedin": return <FaLinkedin className="w-4 h-4 md:w-6 md:h-6" />;
    default: return null;
  }
};

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  personalItems = [],
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState<boolean>(true);

  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    if (typeof current === "number") {
      setVisible(current < 0.05);
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.header
          key="floating-nav"
          initial={{ y: -100, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={cn(
            "fixed top-4 sm:top-6 inset-x-0 mx-auto z-50 flex items-center justify-between w-full max-w-5xl px-4 sm:px-6",
            className
          )}
        >
          {/* Top Left: Site Title / Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-mono text-xl md:text-2xl font-bold text-slate-100 hover:text-emerald-400 transition-colors relative z-50"
          >
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span className="hidden sm:block">abdullah hendy</span>
            <span className="hidden sm:inline animate-pulse text-emerald-400">_</span>
          </a>

          {/* Center: The Pill Navigation */}
          <nav className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center gap-2 md:gap-4 px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/40">
            <div className="hidden sm:flex items-center gap-1.5 pl-2 pr-1 font-mono text-sm text-emerald-400 select-none">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-500">~/</span>
            </div>

            {navItems.map((item: NavItem, idx: number) => (
              <a
                key={`nav-link-${idx}`}
                href={item.link}
                className={cn(
                  "relative font-mono text-sm md:text-base text-slate-400 hover:text-slate-100",
                  "px-3 py-1.5 rounded-full transition-colors duration-150",
                  "hover:bg-white/5"
                )}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Top Right: Social / Personal Links */}
          <div className="flex items-center gap-4 relative z-50">
            {personalItems.map((item, idx) => (
              <a
                key={`personal-link-${idx}`}
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={item.name}
                className="text-slate-400 hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
              >
                {getIcon(item.name)}
              </a>
            ))}
          </div>

        </motion.header>
      )}
    </AnimatePresence>
  );
};