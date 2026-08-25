import type { ThemeConfig } from "@/types";

/**
 * CONFIGURAÇÃO DE TEMA
 * ------------------------------------------------------------------
 * Controla 100% da identidade visual do site. Nenhuma cor deve ser
 * escrita diretamente em um componente — sempre use as classes
 * utilitárias geradas a partir destes tokens (bg-primary, text-ink,
 * border-border, rounded-md, etc.), definidas em app/globals.css.
 *
 * Para trocar a identidade de um cliente, basta editar os valores
 * abaixo. Exemplos de outras paletas ficam comentados no final.
 */
export const themeConfig: ThemeConfig = {
  colors: {
    primary: "#1B3A5C", // azul petróleo — autoridade e confiança
    primaryDark: "#12283F",
    primaryForeground: "#FFFFFF",
    secondary: "#0F172A",
    accent: "#C6A15B", // dourado sutil — toque premium
    ink: "#111827",
    inkMuted: "#5B6472",
    surface: "#FFFFFF",
    surfaceAlt: "#F6F7F9",
    border: "#E6E8EC",
  },
  font: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
  },
  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
  },
};

/**
 * Exemplos de outras identidades — troque `themeConfig` acima pela
 * variação desejada para reskinar o site em minutos.
 *
 * Cliente "clínica" (verde + branco):
 * primary: "#0F5C4C", primaryDark: "#0A3F34", accent: "#8FBF9F"
 *
 * Cliente "escritório de advocacia" (preto + dourado):
 * primary: "#111111", primaryDark: "#000000", accent: "#B8963E"
 *
 * Cliente "tecnologia" (roxo + branco):
 * primary: "#4B3AA6", primaryDark: "#352878", accent: "#7C6CF0"
 */
