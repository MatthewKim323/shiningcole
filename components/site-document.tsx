import Header from "@/components/shell/header";
import Footer from "@/components/shell/footer";
import Behaviors from "@/components/behaviors";
import ChatWidget from "@/components/chat-widget";
import type { SiteRoute } from "@/lib/routes";

/** `?only=1` renders a route without the chrome, for clean per-page shots. */
const ONLY = `if(/[?&]only=1/.test(location.search))document.documentElement.classList.add("only-1")`;

export default function SiteDocument({ route, children }: { route: SiteRoute; children: React.ReactNode }) {
  return (
    <html dir="ltr" lang="en-US" className=" no-touchevents" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={`/sitecss/${route.css}/`} />
        <link rel="stylesheet" href="/app.css" />
        <script dangerouslySetInnerHTML={{ __html: ONLY }} />
      </head>
      <body className={route.bodyClass} suppressHydrationWarning>
        <div className="wrapper">
          <div className="wrapper_inner">
            <Header path={route.path} />
            {children}
            <Footer path={route.path} />
          </div>
        </div>
        <Behaviors />
        <ChatWidget />
      </body>
    </html>
  );
}
