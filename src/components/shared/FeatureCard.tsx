import type { Feature } from "@/types";

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-surface-alt text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-ink">{feature.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
      </div>
    </div>
  );
}
