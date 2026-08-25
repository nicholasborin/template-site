import type { NavigationConfig } from "@/types";

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ],
  ctaLabel: "Falar com um especialista",
  ctaHref: "/contato",
};
