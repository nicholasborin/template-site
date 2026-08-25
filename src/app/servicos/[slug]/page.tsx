import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Cta } from "@/components/sections/Cta";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-surface-alt py-16 sm:py-20">
        <Container>
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para serviços
          </Link>

          <div className="mt-8 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {service.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-ink">O que está incluso</h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-surface-alt p-6">
            <h3 className="font-semibold text-ink">Pronto para começar?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Fale com nossa equipe e descubra como esse serviço pode se aplicar à{" "}
              {siteConfig.name}.
            </p>
            <Button href="/contato" className="mt-5 w-full">
              {siteConfig.cta.primaryLabel}
            </Button>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-alt py-16 sm:py-24">
          <Container>
            <h2 className="text-xl font-semibold text-ink">Outros serviços</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <Cta />
    </>
  );
}
