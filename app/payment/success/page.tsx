import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { ActionBar } from "@/components/action-bar";
import { Row } from "@/components/row";
import { policy } from "@/lib/mock";
import { formatETB } from "@/lib/quote";
import { cta, ctaOutline } from "@/lib/ui";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ premium?: string; txn?: string }>;
}) {
  const sp = await searchParams;
  const amount = Number(sp.premium) ? formatETB(Number(sp.premium)) : "ETB [amount]";

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center gap-5 px-5 text-center">
        <Logo />
        <CircleCheck className="size-16 text-primary" strokeWidth={1.5} />
        <h1 className="text-3xl font-extrabold tracking-tight">Payment successful</h1>
        <p className="text-muted-foreground">Your policy {policy.id} is now active.</p>
        <Card className="w-full rounded-2xl px-5 py-3 text-left shadow-none">
          <Row label="telebirr transaction ID" value={sp.txn ?? "[txn ID]"} />
          <Row label="Amount paid" value={amount} />
        </Card>
      </main>
      <ActionBar className="space-y-3">
        <Button className={`w-full ${cta}`}>
          <Link href={`/policies/${policy.id}`}>View policy</Link>
        </Button>
        <Button variant="outline" className={`w-full ${ctaOutline}`}>
          <Link href={`/policies/${policy.id}/certificate`}>Download certificate</Link>
        </Button>
      </ActionBar>
    </>
  );
}
