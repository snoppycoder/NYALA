import { cn } from "@/lib/utils";

/** Sticky bottom action area used by every flow screen. */
export function ActionBar({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn("no-print sticky bottom-0 border-t bg-card px-5 py-4", className)}
      {...props}
    />
  );
}
