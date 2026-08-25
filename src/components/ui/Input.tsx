import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export function Field({ label, htmlFor, required, error, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}

const fieldStyles =
  "w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 transition-colors focus-visible:border-primary";

export function Input(props: ComponentPropsWithoutRef<"input">) {
  return <input className={cn(fieldStyles, props.className)} {...props} />;
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className={cn(fieldStyles, "min-h-32 resize-y", props.className)} {...props} />;
}
