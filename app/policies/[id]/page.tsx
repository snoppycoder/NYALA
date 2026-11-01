import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ActionBar } from "@/components/action-bar";
import { Row } from "@/components/row";
import { policy, supportPhone } from "@/lib/mock";
import { cta, ctaOutline } from "@/lib/ui";

export default async function PolicyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // TODO: fetch the real policy by id
  const p = { ...policy, id };

  return (
    <>
      <header className="bg-[#7a1a0a] px-5 pb-6 pt-8 text-primary-foreground">
        <Link href="/policies" className="text-sm font-extrabold">&lt; Policies</Link>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight">{p.product}</h1>
        <p className="mt-1 flex items-center gap-2">
          Policy {p.id} ·
          <Badge className="bg-white font-extrabold text-primary hover:bg-white">{p.status}</Badge>
        </p>
      </header>

      <main className="flex-1 space-y-3 p-4">
        <Card className="gap-0 rounded-3xl px-5 py-4 shadow-none">
          <h2 className="mb-1 text-lg font-extrabold">Policy details</h2>
          <Row label="Cover" value={p.cover} />
          <Row label="Insured vehicle" value={`${p.plate} · ${p.vehicle}`} />
          <Row label="Policy period" value={p.period} />
          <Row label="Sum insured" value={p.sumInsured} />
        </Card>

        <Card className="gap-0 rounded-3xl px-5 py-4 shadow-none">
          <h2 className="mb-1 text-lg font-extrabold">Payment</h2>
          <Row label="Premium paid" value={p.premium} />
          <Row label="Paid via" value={p.paidVia} />
          <Row label="Transaction ID" value={p.txnId} />
        </Card>

        <Card className="gap-0 rounded-3xl px-5 py-4 shadow-none">
          <h2 className="mb-1 text-lg font-extrabold">Need help?</h2>
          <Row label="Claims" value="Report a claim in the app" />
          <Row label="Phone" value={<a href={`tel:${supportPhone.replace(/[^+\d]/g, "")}`}>{supportPhone}</a>} />
        </Card>
      </main>

      <ActionBar className="space-y-3">
        <Button asChild className={`w-full ${cta}`}>
          <Link href={`/policies/${p.id}/certificate`}>Download sample certificate</Link>
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button asChild variant="outline" className={ctaOutline}>
            <Link href="/claims">Report a claim</Link>
          </Button>
          <Button asChild variant="outline" className={ctaOutline}>
            <Link href="/quote">Renew</Link>
          </Button>
        </div>
      </ActionBar>
    </>
  );
}
