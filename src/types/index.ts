import type { LucideIcon } from "lucide-react";

/** Identidade e dados institucionais da empresa (camada de conteúdo) */
export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  segment: string;
  foundedYear: number;
  logo: {
    text: string;
    imageSrc?: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappMessage: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      mapsUrl?: string;
    };
    hours: string;
  };
  social: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    youtube?: string;
  };
  cta: {
    primaryLabel: string;
    secondaryLabel: string;
  };
  url: string;
}

/** Paleta e tokens visuais — controla toda a identidade do tema */
export interface ThemeConfig {
  colors: {
    primary: string;
    primaryDark: string;
    primaryForeground: string;
    secondary: string;
    accent: string;
    ink: string;
    inkMuted: string;
    surface: string;
    surfaceAlt: string;
    border: string;
  };
  font: {
    heading: string;
    body: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  keywords: string[];
  ogImage: string;
  twitterHandle?: string;
  locale: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}
