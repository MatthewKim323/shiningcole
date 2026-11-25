import type { Metadata, Viewport } from "next";
import { byPath } from "@/lib/routes";
import SiteDocument from "@/components/site-document";

const r = byPath.get("/404/")!;

export const metadata: Metadata = { title: r.title, description: r.description || undefined };
export const viewport: Viewport = { width: "device-width", initialScale: 1, userScalable: false };

export default function GlobalNotFound() {
  const { Component } = r;
  return (
    <SiteDocument route={r}>
      <Component />
    </SiteDocument>
  );
}
