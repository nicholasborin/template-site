import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/Reveal";

const highlights = [
  "Metodologia própria testada em centenas de projetos",
  "Equipe multidisciplinar com experiência prática de mercado",
  "Acompanhamento próximo do início ao fim do projeto",
];

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface-alt">
            <div className="grid h-full grid-cols-2 gap-px bg-border">
              {[siteConfig.foundedYear, "Presencial", "Remoto", "Nacional"].map((item) => (
                <div
                  key={String(item)}
                  className="flex items-center justify-center bg-surface-alt p-6 text-center"
                >
                  <span className="text-sm font-medium text-ink-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Sobre a {siteConfig.shortName}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Mais de uma década ajudando empresas a crescer com clareza
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Desde {siteConfig.foundedYear}, a {siteConfig.name} trabalha ao lado de empresários e
            gestores para transformar decisões complexas em planos simples de executar. Combinamos
            experiência prática com uma metodologia estruturada, sem fórmulas genéricas — cada
            projeto é construído para a realidade específica do negócio.
          </p>
          <ul className="mt-7 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
