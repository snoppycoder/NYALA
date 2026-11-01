import Link from "next/link";
import { Car, Heart, House, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { customer, policy } from "@/lib/mock";
import { ctaDark } from "@/lib/ui";

const products = [
  { label: "Personal vehicle", icon: Car, href: "/quote" },
  { label: "Medical Assurance", icon: Heart, href: "#" },
  { label: "Life Assurance", icon: Shield, href: "#" },
  { label: "Fire and Lightning", icon: House, href: "#" },
];

export default function HomePage() {
  return (
    <>
      <header className="bg-[#7a1a0a] px-5 pb-16 pt-6 text-primary-foreground">
        <Logo />
        <p className="mt-4 text-lg">The Seal of Your Protection</p>
        <h1 className="mt-1 text-4xl font-extrabold tracking-tight">Hello, {customer.name}</h1>
      </header>

      <div className="-mt-10 space-y-6 px-4 pb-6">
        <Link href={`/policies/${policy.id}`} className="block">
          <Card className="gap-2 rounded-3xl p-5 shadow-none">
            <p className="text-sm font-semibold text-muted-foreground">
              Active policy · {policy.product} · {policy.cover}
            </p>
            <p className="text-2xl font-extrabold">
              {policy.plate} · {policy.vehicle}
            </p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-muted-foreground">Renews {policy.renews}</span>
              <span className="font-bold text-primary">{policy.status}</span>
            </div>
          </Card>
        </Link>

        <section>
          <h2 className="mb-3 text-xl font-extrabold">Get covered</h2>
          <div className="grid grid-cols-2 gap-3">
            {products.map(({ label, icon: Icon, href }) => (
              <Link key={label} href={href}>
                <Card className="h-full justify-between gap-5 rounded-3xl p-5 shadow-none transition-colors hover:bg-accent">
                  <Icon className="size-8 text-primary" strokeWidth={1.75} />
                  <span className="text-lg font-extrabold leading-tight">{label}</span>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <Button className={`w-full ${ctaDark} h-14`}>
          <Link href="/claims">Report a claim</Link>
        </Button>
      </div>
    </>
  );
}
