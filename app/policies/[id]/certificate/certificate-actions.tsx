"use client";

import { Button } from "@/components/ui/button";
import { ActionBar } from "@/components/action-bar";
import { cta, ctaOutline } from "@/lib/ui";

export function CertificateActions() {
  async function share() {
    const data = { title: "Nyala Insurance certificate", url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(data); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(data.url);
    }
  }

  return (
    <ActionBar className="grid grid-cols-[1fr_2fr] gap-3">
      <Button variant="outline" className={ctaOutline} onClick={share}>Share</Button>
      {/* Opens the print dialog -> "Save as PDF". Swap for a server-generated PDF when ready. */}
      <Button className={cta} onClick={() => window.print()}>Download</Button>
    </ActionBar>
  );
}
