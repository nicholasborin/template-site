import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqAccordionItem } from "@/components/shared/FaqAccordionItem";

export function Faq() {
  return (
    <section className="bg-surface-alt py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
        <div className="mt-10">
          {faqItems.map((item, index) => (
            <FaqAccordionItem key={item.question} item={item} id={String(index)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
