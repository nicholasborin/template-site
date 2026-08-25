import type { SVGProps } from "react";

/**
 * Ícones de marca simples em SVG. O lucide-react removeu ícones de
 * marcas (Instagram, LinkedIn, Facebook, YouTube) de seu pacote, então
 * mantemos aqui um conjunto mínimo e leve, no mesmo estilo outline.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.7c0-1.3.9-2.3 2.3-2.3s2.2 1 2.2 2.3v3.7" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 8.5h2V5.5h-2c-2 0-3.2 1.3-3.2 3.2v2H9.5v3h1.8v6.8h3v-6.8h2.1l.4-3h-2.5v-1.7c0-.6.3-1.5 1.4-1.5Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
