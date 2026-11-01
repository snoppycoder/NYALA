import { BottomNav } from "@/components/bottom-nav";


export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex-1 pb-[calc(34px+env(safe-area-inset-bottom))]">{children}</div>
      <BottomNav />
    </>
  );
}