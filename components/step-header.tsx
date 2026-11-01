import { Progress } from "@/components/ui/progress";

export function StepHeader({ step, title, total = 3 }: { step: number; title: string; total?: number }) {
  return (
    <header className="border-b bg-card px-5 pb-4 pt-6">
      <p className="text-sm font-semibold text-muted-foreground">Step {step} of {total}</p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{title}</h1>
      <Progress value={(step / total) * 100} className="mt-3 h-2 bg-border" />
    </header>
  );
}
