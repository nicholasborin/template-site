import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}
