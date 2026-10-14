import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center px-4 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
        {title}
      </h2>
      <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
