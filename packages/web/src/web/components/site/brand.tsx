type BrandProps = {
  tone?: "light" | "dark";
  className?: string;
};

/** Globo "rabiscado" da marca — esfera fatiada por faixas vermelhas. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="rb-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D8202A" />
          <stop offset="55%" stopColor="#B3121A" />
          <stop offset="100%" stopColor="#6E0A10" />
        </linearGradient>
        <clipPath id="rb-sphere">
          <circle cx="32" cy="32" r="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#rb-sphere)" fill="url(#rb-red)">
        <path d="M-6 12 C 14 2, 44 6, 70 0 L 70 12 C 44 18, 14 14, -6 24 Z" />
        <path d="M-6 26 C 16 16, 46 22, 70 14 L 70 27 C 46 35, 16 29, -6 39 Z" />
        <path d="M-6 41 C 16 31, 46 37, 70 29 L 70 42 C 46 50, 16 44, -6 54 Z" />
        <path d="M-6 56 C 18 46, 46 52, 70 46 L 70 58 C 46 64, 18 60, -6 70 Z" />
      </g>
    </svg>
  );
}

export function Brand({ tone = "dark", className = "" }: BrandProps) {
  const title = tone === "dark" ? "text-ink" : "text-white";
  const sub = tone === "dark" ? "text-muted-ink" : "text-white/60";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <BrandMark className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-normal tracking-[0.16em] md:text-[1.2rem] ${title}`}
        >
          RABISCO
        </span>
        <span
          className={`font-display mt-1 text-[0.5rem] font-medium tracking-[0.2em] md:text-[0.55rem] ${sub}`}
        >
          ARQUITETURA &amp; INTERIORES
        </span>
      </span>
    </span>
  );
}
