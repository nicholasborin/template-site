import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

export function Process() {
  return (
    <section className="bg-secondary py-20 text-white sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Como funciona"
          title="Um processo claro, do primeiro contato ao resultado"
          align="center"
          className="[&_h2]:text-white [&_p]:text-white/60"
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <div className="relative border-t-2 border-accent pt-5">
                <span className="text-sm font-semibold text-accent">{step.number}</span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
