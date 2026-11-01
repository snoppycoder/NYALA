import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { policy } from "@/lib/mock";

export default function PoliciesPage() {
  return (
    <>
      <header className="border-b bg-card px-5 pb-4 pt-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Policies</h1>
      </header>
      <div className="space-y-3 p-4">
        <Link href={`/policies/${policy.id}`} className="block">
          <Card className="gap-1 rounded-3xl p-5 shadow-none transition-colors hover:bg-accent">
            <div className="flex items-center justify-between">
              <span className="text-lg font-extrabold">{policy.product}</span>
              <Badge>{policy.status}</Badge>
            </div>
            <p className="text-muted-foreground">{policy.cover}</p>
            <p className="font-semibold">{policy.plate} · {policy.vehicle}</p>
          </Card>
        </Link>
      </div>
    </>
  );
}
