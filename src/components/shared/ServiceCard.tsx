import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { Card } from "@/components/ui/Card";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Card className="group flex h-full flex-col">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {service.shortDescription}
      </p>
      <Link
        href={`/servicos/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent"
      >
        Saiba mais
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </Link>
    </Card>
  );
}
