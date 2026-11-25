import { notFound } from "next/navigation";
import { ROUTES, routeFor } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTES.filter((r) => r.path !== "/404/").map((r) => ({ slug: r.path === "/" ? [] : r.path.split("/").filter(Boolean) }));
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const r = routeFor((await params).slug);
  if (!r) notFound();
  const { Component } = r;
  return <Component />;
}
