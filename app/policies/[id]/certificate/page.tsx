import CertificateContent from "@/components/certificate-content";
import { Suspense } from "react";


export default function CertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center">
          <p className="text-sm text-muted-foreground">
            Preparing certificate...
          </p>
        </main>
      }
    >
      <CertificateContent params={params} />
    </Suspense>
  );
}