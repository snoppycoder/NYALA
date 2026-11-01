import { CertificateActions } from "@/app/policies/[id]/certificate/certificate-actions";
import { Logo } from "@/components/logo";
import { Row } from "@/components/row";
import { policy } from "@/lib/mock";

export default async function CertificateContent({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const p = { ...policy, id };

    return (
        <>
            <header className="no-print border-b bg-card px-5 py-5">
                <p className="font-semibold text-muted-foreground">
                    Preview · Sample certificate
                </p>
            </header>

            <main className="flex-1 p-4">
                <div className="border-2 border-[#7a1a0a] p-1">
                    <div className="relative overflow-hidden border border-[#7a1a0a] bg-card px-5 pb-6 pt-6">
                        <span
                            aria-hidden
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] select-none text-8xl font-extrabold tracking-wide text-[#7a1a0a]/[0.07]"
                        >
                            SAMPLE
                        </span>

                        <Logo />

                        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#7a1a0a]">
                            Certificate of Insurance
                        </h1>

                        <p className="mb-3 text-muted-foreground">
                            The Seal of Your Protection
                        </p>

                        <div className="relative divide-y">
                            <Row label="Policy no." value={p.id} className="py-3" />
                            <Row label="Product" value={p.product} className="py-3" />
                            <Row label="Cover" value={p.cover} className="py-3" />
                            <Row label="Insured" value={p.plate} className="py-3" />
                            <Row label="Period" value={p.period} className="py-3" />
                            <Row label="Premium paid" value={p.premium} className="py-3" />
                            <Row label="Transaction ID" value={p.txnId} className="py-3" />
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-muted-foreground">
                            <div className="border-t-2 border-foreground pt-1.5">
                                Authorized signature
                            </div>
                            <div className="border-t-2 border-foreground pt-1.5">
                                Date of issue
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <CertificateActions />
        </>
    );
}