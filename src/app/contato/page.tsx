import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com a ${siteConfig.name} e agende uma conversa sem compromisso.`,
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-surface-alt py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Contato"
            title="Vamos conversar sobre o seu negócio"
            description="Responda algumas perguntas rápidas e nossa equipe entrará em contato em até um dia útil."
          />
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
