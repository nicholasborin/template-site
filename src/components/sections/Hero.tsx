import { ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { stats } from "@/data/stats";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const headlineStat = stats[0];

  return (
    <section className="relative overflow-hidden bg-surface-alt">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, var(--color-primary) 0%, transparent 35%), radial-gradient(circle at 85% 0%, var(--color-accent) 0%, transparent 30%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {siteConfig.segment}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contato" size="lg">
              {siteConfig.cta.primaryLabel}
            </Button>
            <Button href="/servicos" size="lg" variant="outline">
              {siteConfig.cta.secondaryLabel}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 border-t border-border pt-6">
            <div className="flex -space-x-2" aria-hidden="true">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  key={letter}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface-alt bg-primary/10 text-xs font-semibold text-primary"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-ink-muted">
                {headlineStat.value}
                {headlineStat.suffix} {headlineStat.label.toLowerCase()}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-gradient-to-br from-primary to-primary-dark shadow-elevated">
            <div className="flex h-full flex-col justify-end p-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                {siteConfig.shortName}
              </p>
              <p className="mt-2 text-2xl font-semibold leading-snug">
                Estratégia clara. Execução consistente. Resultado real.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-lg border border-border bg-surface p-5 shadow-elevated sm:block">
            <p className="text-3xl font-semibold text-ink">
              {stats[2].value}
              {stats[2].suffix}
            </p>
            <p className="mt-1 text-xs text-ink-muted">{stats[2].label}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
