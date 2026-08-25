import { themeConfig } from "@/config/theme";

/**
 * Converte config/theme.ts em CSS custom properties no :root.
 * Isso é o que permite reskinar o site inteiro trocando apenas
 * os valores de um único arquivo de configuração.
 */
export function ThemeStyleInjector() {
  const { colors, radius } = themeConfig;

  const css = `:root{
    --color-primary:${colors.primary};
    --color-primary-dark:${colors.primaryDark};
    --color-primary-foreground:${colors.primaryForeground};
    --color-secondary:${colors.secondary};
    --color-accent:${colors.accent};
    --color-ink:${colors.ink};
    --color-ink-muted:${colors.inkMuted};
    --color-surface:${colors.surface};
    --color-surface-alt:${colors.surfaceAlt};
    --color-border:${colors.border};
    --radius-sm:${radius.sm};
    --radius-md:${radius.md};
    --radius-lg:${radius.lg};
  }`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
