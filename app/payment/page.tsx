import PaymentContent from "@/components/payment-content";
import { Suspense } from "react";

export default function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ cover?: string; premium?: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="flex flex-1 items-center justify-center px-5">
          <p className="text-sm text-muted-foreground">
            Loading payment details...
          </p>
        </main>
      }
    >
      <PaymentContent searchParams={searchParams} />
    </Suspense>
  );
}