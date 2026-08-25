import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { buildTelUrl, buildMailUrl } from "@/lib/utils";

const infoItems = [
  {
    icon: Phone,
    label: "Telefone",
    value: siteConfig.contact.phoneDisplay,
    href: buildTelUrl(siteConfig.contact.phone),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.contact.email,
    href: buildMailUrl(siteConfig.contact.email),
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city} - ${siteConfig.contact.address.state}`,
    href: siteConfig.contact.address.mapsUrl,
  },
  {
    icon: Clock,
    label: "Horário",
    value: siteConfig.contact.hours,
  },
];

export function ContactSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Fale conosco"
          title="Pronto para dar o próximo passo?"
          description="Preencha o formulário abaixo ou entre em contato diretamente por telefone, e-mail ou WhatsApp."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              {infoItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-surface p-6 shadow-soft lg:col-span-3 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
