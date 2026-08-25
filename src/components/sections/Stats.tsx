import { stats } from "@/data/stats";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/Reveal";

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary py-14 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-semibold sm:text-4xl">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="mt-1.5 text-sm text-white/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
