import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
