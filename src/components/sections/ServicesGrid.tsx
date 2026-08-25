import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Reveal } from "@/components/shared/Reveal";

interface ServicesGridProps {
  limit?: number;
}

export function ServicesGrid({ limit }: ServicesGridProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-surface-alt py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="O que fazemos"
          title="Soluções pensadas para cada etapa do seu negócio"
          description="Serviços modulares que podem ser contratados isoladamente ou em conjunto, de acordo com a necessidade da sua empresa."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 100}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
