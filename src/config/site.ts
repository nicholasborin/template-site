import type { SiteConfig } from "@/types";

/**
 * CONFIGURAÇÃO DO CLIENTE
 * ------------------------------------------------------------------
 * Este é o único arquivo que normalmente precisa ser editado para
 * "trocar" a empresa exibida no site. Nenhum componente possui
 * texto, telefone, e-mail ou nome de empresa fixo — tudo vem daqui.
 *
 * Para um novo cliente: duplique este arquivo (ou os valores dele)
 * e ajuste os campos abaixo. Veja também config/theme.ts para cores.
 */
export const siteConfig: SiteConfig = {
  name: "Almeida Solutions",
  shortName: "Almeida",
  tagline: "Consultoria empresarial que transforma decisões em resultado",
  description:
    "Consultoria e soluções empresariais para empresas que querem crescer com estratégia, processos claros e execução consistente.",
  segment: "Consultoria e Soluções Empresariais",
  foundedYear: 2012,
  logo: {
    text: "Almeida Solutions",
    // imageSrc: "/images/logo.svg",
  },
  contact: {
    phone: "+551140028922",
    phoneDisplay: "(11) 4002-8922",
    whatsapp: "+5511998887766",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da Almeida Solutions.",
    email: "contato@almeidasolutions.com.br",
    address: {
      street: "Av. Paulista, 1374 — 12º andar",
      city: "São Paulo",
      state: "SP",
      zip: "01310-100",
      mapsUrl: "https://maps.google.com/?q=Av.+Paulista+1374+São+Paulo",
    },
    hours: "Segunda a sexta, 9h às 18h",
  },
  social: {
    instagram: "https://instagram.com/almeidasolutions",
    linkedin: "https://linkedin.com/company/almeidasolutions",
    facebook: "https://facebook.com/almeidasolutions",
  },
  cta: {
    primaryLabel: "Solicitar diagnóstico gratuito",
    secondaryLabel: "Conhecer os serviços",
  },
  url: "https://www.almeidasolutions.com.br",
};
