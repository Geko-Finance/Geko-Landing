interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
        {badge}
      </span>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-white/80 sm:text-lg">
        {subtitle}
      </p>
    </header>
  );
}
