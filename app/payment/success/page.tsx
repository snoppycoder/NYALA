import SuccessContent from "@/components/success-page";
import { Suspense } from "react";


export default function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ premium?: string; txn?: string }>;
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
      <SuccessContent searchParams={searchParams} />
    </Suspense>
  );
}