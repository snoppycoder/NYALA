"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepHeader } from "@/components/step-header";
import { ActionBar } from "@/components/action-bar";
import { COVERS, CoverId, calcPremium, formatETB } from "@/lib/quote";
import { cta, ctaOutline } from "@/lib/ui";
import { cn } from "@/lib/utils";

export default function QuotePage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState<CoverId>("comprehensive");

  const numeric = Number(value.replace(/,/g, "")) || 0;
  const premium = calcPremium(numeric, cover);

  function onValueChange(raw: string) {
    const digits = raw.replace(/\D/g, "");
    setValue(digits ? Number(digits).toLocaleString("en-US") : "");
  }

  function pay() {
    router.push(`/payment?cover=${cover}&value=${numeric}&premium=${premium}`);
  }

  return (
    <>
      <StepHeader step={2} title="Personal vehicle quote" />

      <main className="flex-1 space-y-4 p-5">
        <div className="space-y-2">
          <Label htmlFor="value" className="text-base font-bold">Vehicle value (ETB)</Label>
          <Input
            id="value"
            inputMode="numeric"
            placeholder="e.g. 1,500,000"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            className="h-14 rounded-2xl border-input bg-card px-4 text-lg"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-base font-semibold">Cover type</Label>
          <RadioGroup value={cover} onValueChange={(v) => setCover(v as CoverId)} className="gap-3">
            {COVERS.map((c) => (
              <Label
                key={c.id}
                htmlFor={c.id}
                className={cn(
                  "block cursor-pointer rounded-2xl border bg-card px-5 py-6 font-normal transition-colors",
                  "has-[[data-state=checked]]:border-2 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent",
                  "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring"
                )}
              >
                <RadioGroupItem value={c.id} id={c.id} className="sr-only" />
                <span className="block text-lg font-extrabold leading-snug">{c.name}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{c.summary}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <Card className="gap-0 rounded-2xl px-5 py-4 shadow-none">
          <p className="text-sm font-semibold text-muted-foreground">Estimated premium / year</p>
          <p className="text-4xl font-extrabold text-primary">
            {premium ? formatETB(premium) : "ETB [amount]"}
          </p>
        </Card>
      </main>

      <ActionBar className="grid grid-cols-[1fr_2fr] gap-3">
        <Button asChild variant="outline" className={ctaOutline}>
          <Link href="/">Back</Link>
        </Button>
        <Button className={cta} onClick={pay} disabled={!premium}>
          Pay with telebirr
        </Button>
      </ActionBar>
    </>
  );
}
