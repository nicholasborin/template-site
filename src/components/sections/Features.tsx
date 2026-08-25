import { features } from "@/data/features";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Reveal } from "@/components/shared/Reveal";

export function Features() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Diferenciais"
          title="Por que empresas escolhem trabalhar conosco"
          description="Combinamos proximidade, técnica e agilidade — sem burocracia desnecessária."
        />
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 100}>
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
