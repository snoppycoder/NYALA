import PolicyContent from "@/components/policy-content";
import { Suspense } from "react";

export default function PolicyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="flex flex-1 items-center justify-center p-6">
          <p className="text-sm text-muted-foreground">
            Loading policy details...
          </p>
        </main>
      }
    >
      <PolicyContent params={params} />
    </Suspense>
  );
}