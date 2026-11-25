# Glinting Bay Car Wash

The Glinting Bay site: 110 routes (home, plans, fleet, support, policies, site map, 29 posts, every category, tag and author archive, and every paginated listing page), measured against its reference at 1440 / 1024 / 810 / 390 px.

## Run

```bash
bun install
bun run dev     # http://localhost:3777
bun run build
```

## How it is put together

- `app/[[...slug]]/` is the only page route. The root layout reads the route from `lib/routes.ts` (path, title, description, body class, stylesheet key) and renders `components/site-document.tsx`.
- `components/routes/*.tsx` holds each route's content, one file per route. `components/shell/` holds the header and footer, shared by every route. Menu items take their current-page classes from `lib/menu-state.ts`.
- Each route has its own exact stylesheet. The statements live once each in `styles/chunks/`, and `app/sitecss/[key]/route.ts` stitches a route's sequence back together at build time (43 distinct cascades from 3.7 MB of chunks).
- `components/behaviors.tsx` has every scripted behaviour: back-to-top, the mobile menu, button and social-icon hover colours, entrance animations, lazy backgrounds, parallax, FAQ accordions, the masonry news grid and the map. `components/chat-widget.tsx` is the floating offer card and chat launcher.
- `proxy.ts` sends `?share=twitter|facebook` on to the network's share page. `next.config.ts` sends `/freewash/` to support until a sign-up form exists.
- Assets are content addressed under `public/img`, `public/fonts` and `public/media`.

## Before going live

These carry real-world details that have to be Glinting Bay's own:

- **Logos**: the header, mobile and footer logo images in `public/img` (`img-e1471714f2.webp`, `img-dfa067ba7d.webp`, `img-cecb00be3a.webp` and their srcset variants), plus post images that show a wordmark.
- **Membership portal links**: plan sign-up, gift card and manage-account buttons point at `customerportal.nxtwash.com/glintingbaycarwash/...` and `carwashlogin.com/glintingbaycarwash/...`. Swap in the real portal account.
- **Address, phone, hours and map**: home footer area, support, fleet and policy pages. The map centres on `data-lat` / `data-lng` in `components/routes/home.tsx`.
- **Email and social**: `clubmember@glintingbaywash.com`, `gbaycw at gmail dot com` (privacy policy), and the Facebook / Instagram handles in the header and footer.
- **Free wash form**: point the `/freewash/` redirect in `next.config.ts` at the real form.
