import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { routeFor } from "@/lib/routes";
import SiteDocument from "@/components/site-document";

type Params = Promise<{ slug?: string[] }>;

export const viewport: Viewport = { width: "device-width", initialScale: 1, userScalable: false };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const r = routeFor((await params).slug);
  return r ? { title: r.title, description: r.description || undefined } : {};
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const r = routeFor((await params).slug);
  if (!r) notFound();
  return <SiteDocument route={r}>{children}</SiteDocument>;
}
