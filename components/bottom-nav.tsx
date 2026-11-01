"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  House,
  FileText,
  ClipboardList,
  UserRound,
} from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: House },
  { href: "/policies", label: "Policies", icon: FileText },
  { href: "/claims", label: "Claims", icon: ClipboardList },
  { href: "/account", label: "Account", icon: UserRound },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-lg grid-cols-4 px-2 py-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1.5",
                "transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center rounded-full px-4 py-1 transition-colors duration-200",
                  active && "bg-primary/10"
                )}
              >
                <Icon
                  size={22}
                  strokeWidth={active ? 2.5 : 1.8}
                  aria-hidden="true"
                />
              </span>

              <span
                className={cn(
                  "text-xs leading-tight",
                  active ? "font-semibold" : "font-medium"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}