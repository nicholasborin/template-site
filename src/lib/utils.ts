type ClassValue = string | number | null | boolean | undefined | ClassValue[];

/** Combina classes condicionalmente sem dependências externas (substitui clsx/tailwind-merge simples) */
export function cn(...inputs: ClassValue[]): string {
  const flatten = (values: ClassValue[]): string[] =>
    values.flatMap((value) => {
      if (Array.isArray(value)) return flatten(value);
      if (typeof value === "string" && value.length > 0) return [value];
      return [];
    });

  return flatten(inputs).join(" ");
}

/** Monta a URL do WhatsApp a partir do número e mensagem configurados */
export function buildWhatsAppUrl(number: string, message: string): string {
  const sanitized = number.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${sanitized}?text=${encodedMessage}`;
}

/** Monta o link de telefone (tel:) a partir do número exibido */
export function buildTelUrl(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

/** Monta o link de e-mail (mailto:) */
export function buildMailUrl(email: string, subject?: string): string {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}
