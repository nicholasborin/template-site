import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/utils";

/** Botão flutuante de WhatsApp — controlado via siteConfig.contact.whatsapp */
export function WhatsAppButton() {
  if (!siteConfig.contact.whatsapp) return null;

  const url = buildWhatsAppUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" fill="white" aria-hidden="true" />
    </a>
  );
}
