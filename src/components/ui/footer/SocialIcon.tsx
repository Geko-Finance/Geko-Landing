import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  children: ReactNode;
}

export default function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:scale-110"
    >
      {children}
    </a>
  );
}
