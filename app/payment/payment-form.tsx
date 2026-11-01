"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionBar } from "@/components/action-bar";
import { cta } from "@/lib/ui";

export function PaymentForm({
  summary,
  cover,
  premium,
  amount,
}: {
  summary: React.ReactNode;
  cover: string;
  premium: number;
  amount: string;
}) {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const valid = /^(\+251|0)?9\d{8}$/.test(phone.replace(/\s/g, ""));

  async function pay(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    // TODO: call your telebirr API (USSD push / H5 payment) here and wait for the result.
    await new Promise((r) => setTimeout(r, 1200));
    const txn = `TB${Date.now().toString().slice(-9)}`;
    router.push(`/payment/success?cover=${cover}&premium=${premium}&txn=${txn}`);
  }

  return (
    <form onSubmit={pay} className="flex flex-1 flex-col">
      <main className="flex-1 space-y-5 p-5">
        {summary}
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-bold">telebirr phone number</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+251 9XX XXX XXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-14 rounded-2xl border-input bg-card px-4 text-lg"
          />
        </div>
        <p className="text-muted-foreground">
          You will be asked to confirm this payment with your telebirr PIN. Your policy is issued once payment succeeds.
        </p>
      </main>
      <ActionBar>
        <Button type="submit" className={`w-full ${cta}`} disabled={!valid || loading}>
          {loading ? "Waiting for telebirr…" : `Pay ${amount}`}
        </Button>
      </ActionBar>
    </form>
  );
}
