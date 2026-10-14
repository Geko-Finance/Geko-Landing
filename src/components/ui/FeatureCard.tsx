import React from "react";
import Badge from "./Badge";

interface FeatureCardProps {
  badge: string;
  title: string;
  description: string;
  reverse?: boolean;
  visual: React.ReactNode;
}

export default function FeatureCard({
  badge,
  title,
  description,
  reverse = false,
  visual,
}: FeatureCardProps) {
  return (
    <div className="w-full rounded-3xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-8 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 hover:shadow-emerald-500/5">
      <div
        className={`flex flex-col gap-10 md:items-center ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Content Column */}
        <div className="flex-1 flex flex-col items-start gap-4 text-left">
          <Badge>{badge}</Badge>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
            {title}
          </h3>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Visual / Mockup Column */}
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-zinc-800/60 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-800/50 p-6 flex items-center justify-center overflow-hidden shadow-inner group">
            {/* Soft background ambient glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10 opacity-50 blur-xl transition duration-500 group-hover:opacity-75" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {visual}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
