import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Cta() {
  const whatsappUrl = buildWhatsAppUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-primary px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0%, transparent 30%), radial-gradient(circle at 80% 90%, var(--color-accent) 0%, transparent 35%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-xl text-3xl font-semibold text-white sm:text-4xl">
              Vamos conversar sobre o seu projeto?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Agende uma conversa sem compromisso e descubra como podemos ajudar a sua empresa a
              crescer com mais clareza.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={whatsappUrl} size="lg" className="bg-white text-primary hover:bg-white/90">
                Falar no WhatsApp
              </Button>
              <Button
                href="/contato"
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:border-white hover:text-white"
              >
                Preencher formulário
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
