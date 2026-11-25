import { NextResponse, type NextRequest } from "next/server";

/** Share buttons link to `?share=<network>` on the post itself; send the visitor on to that network's share page. */
export function proxy(req: NextRequest) {
  const net = req.nextUrl.searchParams.get("share");
  const page = new URL(req.nextUrl.pathname, req.nextUrl.origin).toString();
  if (net === "twitter" || net === "x") return NextResponse.redirect(`https://twitter.com/intent/tweet?url=${encodeURIComponent(page)}`);
  if (net === "facebook") return NextResponse.redirect(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(page)}`);
  return NextResponse.next();
}

export const config = { matcher: "/((?!_next|sitecss|img|fonts|media|app.css).*)" };
