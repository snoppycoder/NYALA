"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ActionBar } from "@/components/action-bar";
import { claimSteps } from "@/lib/mock";
import { cta } from "@/lib/ui";
import { cn } from "@/lib/utils";

export default function ClaimsPage() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST description + photos to your claims API.
    setSubmitted(true);
  }

  return (
    <>
      <header className="border-b bg-card px-5 pb-4 pt-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Report a claim</h1>
        <p className="text-muted-foreground">Takes about 3 minutes</p>
      </header>

      <form id="claim-form" onSubmit={onSubmit} className="flex-1 space-y-5 p-5">
        <div className="space-y-2">
          <Label htmlFor="what" className="text-base font-bold">What happened?</Label>
          <Textarea
            id="what"
            required
            placeholder="Describe the incident"
            className="min-h-40 rounded-2xl border-input bg-card p-4 text-lg"
          />
        </div>

        <Label
          htmlFor="photos"
          className="flex h-28 cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-input bg-card text-base font-extrabold text-primary"
        >
          <ImagePlus className="size-5" />
          {photos.length ? `${photos.length} photo${photos.length > 1 ? "s" : ""} added` : "Add photos of damage"}
          <input
            id="photos"
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => setPhotos(Array.from(e.target.files ?? []))}
          />
        </Label>

        <a
          href="/forms/claim-notification-form.pdf"
          download
          className="inline-block font-extrabold text-primary underline underline-offset-4"
        >
          Download the claim notification form
        </a>

        {submitted && (
          <p role="status" className="rounded-xl bg-accent px-4 py-3 font-semibold text-primary">
            Claim submitted. We will assign a surveyor shortly.
          </p>
        )}

        <Card className="gap-1 rounded-2xl px-5 py-4 shadow-none">
          <h2 className="mb-1 text-lg font-extrabold">Claim status</h2>
          {claimSteps.map((s) => (
            <div key={s.label} className="flex items-center justify-between py-1">
              <span>{s.label}</span>
              <span className={cn(s.status === "Done" ? "font-extrabold text-primary" : "text-muted-foreground")}>
                {s.status}
              </span>
            </div>
          ))}
        </Card>
      </form>

      <ActionBar>
        <Button type="submit" form="claim-form" className={`w-full ${cta}`}>
          Submit claim
        </Button>
      </ActionBar>
    </>
  );
}
