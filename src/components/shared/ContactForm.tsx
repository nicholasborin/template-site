"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Formulário de contato desacoplado do envio.
 *
 * `handleSubmit` é o único ponto de integração — troque a implementação
 * por Formspree, Resend, um webhook próprio ou uma API/CRM sem alterar
 * o restante do componente. Por padrão, apenas simula o envio.
 */
async function submitContactForm(data: Record<string, string>): Promise<void> {
  // Exemplo de integração futura com Formspree:
  // await fetch("https://formspree.io/f/SEU_ID", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   body: JSON.stringify(data),
  // });

  await new Promise((resolve) => setTimeout(resolve, 900));
  console.info("Contato recebido (mock):", data);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      await submitContactForm(payload);
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-surface-alt p-8 text-center" role="status">
        <p className="text-lg font-semibold text-ink">Mensagem enviada com sucesso!</p>
        <p className="mt-2 text-sm text-ink-muted">
          Obrigado pelo contato. Nossa equipe vai retornar em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate>
      <Field label="Nome" htmlFor="name" required>
        <Input id="name" name="name" autoComplete="name" required />
      </Field>
      <Field label="E-mail" htmlFor="email" required>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </Field>
      <Field label="Telefone" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </Field>
      <Field label="Empresa" htmlFor="company">
        <Input id="company" name="company" autoComplete="organization" />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Assunto" htmlFor="subject">
          <Input id="subject" name="subject" />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field label="Mensagem" htmlFor="message" required>
          <Textarea id="message" name="message" required />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
        </Button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            Não foi possível enviar sua mensagem. Tente novamente em instantes.
          </p>
        )}
      </div>
    </form>
  );
}
