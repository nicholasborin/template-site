import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { buildTelUrl, buildMailUrl } from "@/lib/utils";
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "@/components/shared/SocialIcons";

const socialIcons = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const socialEntries = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url)) as [
    keyof typeof socialIcons,
    string
  ][];

  return (
    <footer className="border-t border-border bg-secondary text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">{siteConfig.logo.text}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          {socialEntries.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socialEntries.map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {navigationConfig.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Serviços</p>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-sm text-white/60 hover:text-accent"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Contato</p>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city} —{" "}
                {siteConfig.contact.address.state}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={buildTelUrl(siteConfig.contact.phone)} className="hover:text-accent">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={buildMailUrl(siteConfig.contact.email)} className="hover:text-accent">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>
            Desde {siteConfig.foundedYear} · {siteConfig.segment}
          </p>
        </Container>
      </div>
    </footer>
  );
}
