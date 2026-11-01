import { cn } from "@/lib/utils";

/** Label on the left, value on the right – used in all summary cards. */
export function Row({
  label,
  value,
  strong = true,
  className,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  strong?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-baseline justify-between gap-4 py-1.5", className)}>
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("text-right", strong && "font-bold")}>{value}</span>
    </div>
  );
}
