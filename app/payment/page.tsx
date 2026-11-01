import { Card } from "@/components/ui/card";
import { StepHeader } from "@/components/step-header";
import { Row } from "@/components/row";
import { PaymentForm } from "./payment-form";
import { getCover, formatETB, policyPeriod } from "@/lib/quote";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ cover?: string; premium?: string }>;
}) {
  const sp = await searchParams;
  const cover = getCover(sp.cover);
  const premium = Number(sp.premium) || 0;
  const amount = premium ? formatETB(premium) : "ETB [amount]";

  return (
    <>
      <StepHeader step={3} title="Pay with telebirr" />
      <PaymentForm
        cover={cover.id}
        premium={premium}
        amount={amount}
        summary={
          <Card className="gap-0 rounded-2xl px-5 py-3 shadow-none">
            <Row label={`Personal vehicle · ${cover.name}`} value={amount} />
            <Row label="Policy period" value={policyPeriod()} strong={false} className="border-b pb-3" />
            <Row label={<b className="text-foreground">Total</b>} value={<span className="text-primary">{amount}</span>} />
          </Card>
        }
      />
    </>
  );
}
