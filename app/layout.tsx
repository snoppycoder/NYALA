import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Nyala Insurance",
  description: "The Seal of Your Protection",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7a1a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${jakarta.variable} font-sans`}>
        {/* Mobile-first frame: full width on phones, centred column on desktop */}
        <div className="mx-auto flex min-h-dvh w-full flex-col bg-background md:shadow-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
