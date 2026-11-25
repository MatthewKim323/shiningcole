import fs from "node:fs";
import path from "node:path";
import manifest from "@/styles/manifest.json";

/** Each route's stylesheet: its exact statement sequence, stitched from shared chunks at build time. */
const MANIFEST = manifest as Record<string, string[]>;

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(MANIFEST).map((key) => ({ key }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ key: string }> }) {
  const chunks = MANIFEST[(await params).key];
  if (!chunks) return new Response("", { status: 404 });
  const dir = path.join(process.cwd(), "styles/chunks");
  const body = '@charset "UTF-8";\n' + chunks.map((c) => fs.readFileSync(path.join(dir, `${c}.css`), "utf8")).join("");
  return new Response(body, { headers: { "content-type": "text/css; charset=utf-8", "cache-control": "public, max-age=31536000, immutable" } });
}
