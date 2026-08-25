import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { Card } from "@/components/ui/Card";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <div className="mb-4 flex gap-0.5 text-accent" aria-hidden="true">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
      </div>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-ink-muted">
            {testimonial.role} — {testimonial.company}
          </p>
        </div>
      </div>
    </Card>
  );
}
