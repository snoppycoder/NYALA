import { Card } from "@/components/ui/card";
import { Row } from "@/components/row";
import { customer, supportPhone } from "@/lib/mock";
import {
  UserRound,
  Phone,
  ShieldCheck,
  ChevronRight,
  Headset,
} from "lucide-react";

export default function AccountPage() {
  return (
    <>
      {/* Header */}
      <header className="border-b  bg-[#7a1a0a] bg-card px-5 pb-5 pt-6">
        <p className="text-sm font-medium text-muted-foreground">
          Manage your details
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
          My Account
        </h1>
      </header>

      <main className="space-y-6 p-4 pb-28">
        {/* Profile card */}
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-primary p-5 text-primary-foreground shadow-lg shadow-primary/10">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 right-20 h-28 w-28 rounded-full bg-white/5" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7a1a0a]/10 text-[#7a1a0a]">
              <UserRound size={19} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm text-primary-foreground/75">
                Welcome back
              </p>
              <h2 className="mt-1 truncate text-xl font-bold">
                {customer.name}
              </h2>

              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium">
                <ShieldCheck size={14} />
                Insurance customer
              </div>
            </div>
          </div>
        </Card>

        {/* Personal information */}
        <section className="space-y-3">
          <div className="px-1">
            <h2 className="text-lg font-bold tracking-tight">
              Personal information
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Your registered account details
            </p>
          </div>

          <Card className="overflow-hidden rounded-3xl border-border/60 px-4 shadow-sm shadow-black/[0.02]">
            <div className="flex items-center gap-3 border-b border-border/60 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UserRound size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted-foreground">
                  Full name
                </p>
                <p className="mt-1 truncate text-sm font-semibold">
                  {customer.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted-foreground">
                  Phone number
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {supportPhone}
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Support section */}
        <section className="space-y-3">
          <h2 className="px-1 text-lg font-bold tracking-tight">
            Need help?
          </h2>

          <Card className="rounded-3xl border-border/60 shadow-sm shadow-black/[0.02]">
            <a
              href={`tel:${supportPhone}`}
              className="group flex items-center gap-3 p-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <Headset size={23} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold">Contact support</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We're here to help you
                </p>
              </div>

              <ChevronRight
                size={20}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </Card>
        </section>

        {/* Footer */}
        <div className="pt-2 text-center">
          <p className="text-xs font-medium text-muted-foreground">
            Nyala Insurance
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            Your protection, our priority.
          </p>
        </div>
      </main>
    </>
  );
}