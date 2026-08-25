import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Cta } from "@/components/sections/Cta";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a história, a missão e os valores da ${siteConfig.name}.`,
};

const values = [
  {
    title: "Missão",
    description:
      "Ajudar empresas a crescerem com estratégia clara, processos organizados e decisões baseadas em dados.",
  },
  {
    title: "Visão",
    description:
      "Ser referência em consultoria empresarial para pequenas e médias empresas em expansão.",
  },
  {
    title: "Valores",
    description:
      "Transparência, compromisso com resultado, proximidade com o cliente e excelência técnica.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-surface-alt py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Nossa história"
            title={`Sobre a ${siteConfig.name}`}
            description={siteConfig.description}
          />
        </Container>
      </section>

      <About />
      <Stats />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="Propósito" title="Missão, visão e valores" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="rounded-lg border border-border bg-surface p-6">
                  <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Cta />
    </>
  );
}
