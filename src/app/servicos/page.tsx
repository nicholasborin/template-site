import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Reveal } from "@/components/shared/Reveal";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Serviços",
  description: `Conheça todos os serviços de ${siteConfig.segment.toLowerCase()} da ${siteConfig.name}.`,
};

export default function ServicosPage() {
  return (
    <>
      <section className="bg-surface-alt py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Nossos serviços"
            title="Soluções sob medida para cada etapa do seu negócio"
            description="Cada serviço pode ser contratado de forma isolada ou combinada, de acordo com o momento da sua empresa."
          />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 100}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Cta />
    </>
  );
}
