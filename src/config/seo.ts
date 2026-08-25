import type { SeoConfig } from "@/types";
import { siteConfig } from "@/config/site";

export const seoConfig: SeoConfig = {
  defaultTitle: `${siteConfig.name} — ${siteConfig.segment}`,
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: siteConfig.description,
  keywords: [
    siteConfig.segment,
    siteConfig.name,
    "consultoria empresarial",
    "gestão de negócios",
    "estratégia empresarial",
  ],
  ogImage: "/images/og-cover.jpg",
  twitterHandle: "@almeidasolutions",
  locale: "pt_BR",
};
