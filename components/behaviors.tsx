"use client";
import { useEffect } from "react";

/**
 * Page behaviours, ported from the theme and plugin scripts with their own values:
 * back-to-top, mobile menu, button / social hover colours, entrance animations, lazy backgrounds,
 * parallax backgrounds, FAQ accordions, the blog masonry grid and the location map.
 */

type Off = () => void;
const SWING = "cubic-bezier(0.37, 0, 0.63, 1)"; // jQuery "swing": 0.5 - cos(p * PI) / 2

function on<K extends keyof WindowEventMap>(t: Window, ev: K, fn: (e: WindowEventMap[K]) => void, offs: Off[], opts?: AddEventListenerOptions): void;
function on(t: EventTarget, ev: string, fn: (e: Event) => void, offs: Off[], opts?: AddEventListenerOptions): void;
function on(t: EventTarget, ev: string, fn: (e: Event) => void, offs: Off[], opts?: AddEventListenerOptions) {
  t.addEventListener(ev, fn, opts);
  offs.push(() => t.removeEventListener(ev, fn, opts));
}

/** jQuery slideDown / slideUp on height + vertical padding. */
function slide(el: HTMLElement, open: boolean, ms: number, done?: () => void) {
  el.getAnimations().forEach((a) => a.cancel());
  if (open) el.style.display = "block";
  const cs = getComputedStyle(el);
  const full = { height: `${el.scrollHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)}px`, paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom };
  const zero = { height: "0px", paddingTop: "0px", paddingBottom: "0px" };
  el.style.overflow = "hidden";
  const anim = el.animate(open ? [zero, full] : [full, zero], { duration: ms, easing: SWING });
  anim.onfinish = () => {
    el.style.overflow = "";
    if (!open) el.style.display = "none";
    done?.();
  };
}

function backToTop(offs: Off[]) {
  const btn = document.getElementById("back_to_top");
  if (!btn) return;
  on(window, "scroll", () => {
    const st = window.scrollY;
    const e = st > 0 ? st + window.innerHeight / 2 : 1;
    btn.classList.remove("off", "on");
    btn.classList.add(e < 1000 ? "off" : "on");
  }, offs, { passive: true });
  on(btn, "click", (ev) => {
    ev.preventDefault();
    const from = window.scrollY, dur = from / 3, t0 = performance.now();
    const step = (t: number) => {
      const p = dur ? Math.min(1, (t - t0) / dur) : 1;
      window.scrollTo(0, from * (1 - p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, offs);
}

function mobileMenu(offs: Off[]) {
  const btn = document.querySelector<HTMLElement>(".mobile_menu_button > span");
  const ul = document.querySelector<HTMLElement>(".mobile_menu > ul");
  if (!btn || !ul) return;
  on(btn, "click", (ev) => {
    ev.preventDefault();
    slide(ul, getComputedStyle(ul).display === "none", 200);
  }, offs);
}

/** Bridge reads hover colours from data attributes and swaps inline styles on enter / leave. */
function hoverColors(offs: Off[]) {
  for (const b of document.querySelectorAll<HTMLElement>(".qbutton")) {
    const cs = getComputedStyle(b);
    const baseBg = cs.backgroundColor, baseBorder = cs.borderTopColor, baseColor = cs.color;
    let hb = b.dataset.hoverBackgroundColor;
    if (hb && hb.startsWith("#") && hb.length === 9) {
      const t = hb.slice(1);
      hb = `rgba(${parseInt(t.slice(0, 2), 16)},${parseInt(t.slice(2, 4), 16)},${parseInt(t.slice(4, 6), 16)},${Math.trunc((parseInt(t.slice(6, 8), 16) / 255) * 100) / 100})`;
    }
    const hBorder = b.dataset.hoverBorderColor, hColor = b.dataset.hoverColor;
    on(b, "mouseenter", () => {
      if (hb) b.style.backgroundColor = hb;
      if (hBorder) b.style.borderColor = hBorder;
      if (hColor) b.style.color = hColor;
    }, offs);
    on(b, "mouseleave", () => {
      if (hb) b.style.backgroundColor = baseBg;
      if (hBorder) b.style.borderColor = baseBorder;
      if (hColor) b.style.color = baseColor;
    }, offs);
  }
  for (const h of document.querySelectorAll<HTMLElement>(".q_social_icon_holder")) {
    const hover = h.dataset.hoverColor;
    const icon = h.querySelector<HTMLElement>(".simple_social");
    if (!hover || !icon) continue;
    const base = h.dataset.color ?? getComputedStyle(icon).color;
    const style = icon.getAttribute("style") ?? "";
    on(icon, "mouseenter", () => icon.setAttribute("style", `${style}color: ${hover}!important;`), offs);
    on(icon, "mouseleave", () => icon.setAttribute("style", `${style}color: ${base};`), offs);
  }
}

/** Elementor entrance animations: observed at threshold 0, class swap after the element's own delay. */
function entranceAnimations(offs: Off[]) {
  const device = window.innerWidth <= 767 ? "mobile" : window.innerWidth <= 1024 ? "tablet" : "desktop";
  const chain = device === "mobile" ? ["_mobile", "_tablet", ""] : device === "tablet" ? ["_tablet", ""] : [""];
  const pick = (s: Record<string, unknown>, key: string) => {
    for (const sfx of chain) { const v = s[key + sfx]; if (v) return String(v); }
    return "";
  };
  const timers: number[] = [];
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const el = en.target as HTMLElement;
      io.unobserve(el);
      let s: Record<string, unknown> = {};
      try { s = JSON.parse(el.dataset.settings || "{}"); } catch { /* malformed settings: no animation */ }
      const name = pick(s, "animation") || pick(s, "_animation");
      if (name === "none") { el.classList.remove("elementor-invisible"); continue; }
      const delay = Number(s._animation_delay ?? s.animation_delay ?? 0) || 0;
      timers.push(window.setTimeout(() => { el.classList.remove("elementor-invisible"); el.classList.add("animated", name); }, delay));
    }
  }, { rootMargin: "0px", threshold: [0] });
  for (const el of document.querySelectorAll<HTMLElement>("[data-settings]")) {
    let s: Record<string, unknown> = {};
    try { s = JSON.parse(el.dataset.settings || "{}"); } catch { continue; }
    if (pick(s, "animation") || pick(s, "_animation")) io.observe(el);
  }
  offs.push(() => { io.disconnect(); timers.forEach(clearTimeout); });
}

/** Elementor's inline lazy-background observer. */
function lazyBackgrounds(offs: Off[]) {
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add("e-lazyloaded"); io.unobserve(en.target); }
  }, { rootMargin: "200px 0px 200px 0px" });
  document.querySelectorAll(".e-con.e-parent:not(.e-lazyloaded)").forEach((el) => io.observe(el));
  offs.push(() => io.disconnect());
}

/** Bridge parallax: background-position follows (firstTop - scrollTop) * 0.4 * data-speed while on screen. */
function parallax(offs: Off[]) {
  for (const el of document.querySelectorAll<HTMLElement>(".parallax_section_holder")) {
    const speed = 0.4 * Number(el.dataset.speed ?? 0.1);
    const firstTop = el.getBoundingClientRect().top + window.scrollY;
    const update = () => {
      const o = window.scrollY, top = el.getBoundingClientRect().top + o;
      if (top + el.offsetHeight < o || o + window.innerHeight < top) return;
      el.style.backgroundPosition = `50% ${Math.round((firstTop - o) * speed)}px`;
    };
    on(window, "scroll", update, offs, { passive: true });
    on(window, "resize", update, offs);
    update();
  }
}

/** jQuery UI accordion as the FAQ plugin configures it: collapsible, swing, default 400ms. Initial state is in the markup. */
function accordions(offs: Off[]) {
  for (const holder of document.querySelectorAll<HTMLElement>(".qodef-qi-faq.ui-accordion")) {
    const heads = [...holder.querySelectorAll<HTMLElement>(":scope > .ui-accordion-header")];
    const setHead = (h: HTMLElement, open: boolean) => {
      h.classList.toggle("ui-accordion-header-active", open);
      h.classList.toggle("ui-state-active", open);
      h.classList.toggle("ui-accordion-header-collapsed", !open);
      h.classList.toggle("ui-corner-all", !open);
      h.setAttribute("aria-selected", String(open));
      h.setAttribute("aria-expanded", String(open));
      h.tabIndex = open ? 0 : -1;
      const p = h.nextElementSibling as HTMLElement | null;
      if (p) { p.classList.toggle("ui-accordion-content-active", open); p.setAttribute("aria-hidden", String(!open)); }
    };
    for (const h of heads) {
      on(h, "click", (ev) => {
        ev.preventDefault();
        const panel = h.nextElementSibling as HTMLElement | null;
        if (!panel) return;
        const wasOpen = h.classList.contains("ui-accordion-header-active");
        const current = heads.find((x) => x !== h && x.classList.contains("ui-accordion-header-active"));
        if (current) { setHead(current, false); const cp = current.nextElementSibling as HTMLElement | null; if (cp) slide(cp, false, 400); }
        setHead(h, !wasOpen);
        slide(panel, !wasOpen, 400);
      }, offs);
    }
  }
}

/** Isotope masonry exactly as the theme runs it: sizer column, gutter element, laid out once (resizable: false). */
function masonry(offs: Off[]) {
  for (const holder of document.querySelectorAll<HTMLElement>(".blog_holder.masonry, .blog_holder.blog_pinterest")) {
    const inner = holder.closest(".column_inner") ?? holder.closest(".container_inner");
    if (inner) holder.style.width = `${(inner as HTMLElement).getBoundingClientRect().width}px`;
    const imgs = [...holder.querySelectorAll("img")];
    const ready = Promise.all(imgs.map((i) => (i.complete ? Promise.resolve() : new Promise<void>((r) => { i.addEventListener("load", () => r(), { once: true }); i.addEventListener("error", () => r(), { once: true }); }))));
    let cancelled = false;
    offs.push(() => { cancelled = true; });
    ready.then(() => window.setTimeout(() => {
      if (cancelled) return;
      const sizer = holder.querySelector<HTMLElement>(".blog_holder_grid_sizer");
      const gut = holder.querySelector<HTMLElement>(".blog_holder_grid_gutter");
      const items = [...holder.querySelectorAll<HTMLElement>(":scope > article")];
      holder.style.position = "relative";
      for (const it of items) it.style.position = "absolute";
      const gutter = gut ? gut.getBoundingClientRect().width : 0;
      const colW = (sizer ? sizer.getBoundingClientRect().width : items[0]?.getBoundingClientRect().width ?? 1) + gutter;
      const cs = getComputedStyle(holder);
      const cw = holder.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const excess = colW - (cw % colW);
      let cols = (excess && excess < 1 ? Math.round : Math.floor)((cw + gutter) / colW);
      cols = Math.max(cols, 1);
      const ys = new Array(cols).fill(0);
      for (const it of items) {
        const r = it.getBoundingClientRect(), ics = getComputedStyle(it);
        const ow = r.width + parseFloat(ics.marginLeft) + parseFloat(ics.marginRight);
        const oh = r.height + parseFloat(ics.marginTop) + parseFloat(ics.marginBottom);
        let span = ow / colW;
        span = Math.min((span % 1 && span % 1 < 1 ? Math.round : Math.ceil)(span) || 1, cols);
        let bestY = Infinity, bestC = 0;
        for (let c = 0; c <= cols - span; c++) { const y = Math.max(...ys.slice(c, c + span)); if (y < bestY) { bestY = y; bestC = c; } }
        it.style.left = `${bestC * colW}px`;
        it.style.top = `${bestY}px`;
        for (let c = bestC; c < bestC + span; c++) ys[c] = bestY + oh;
      }
      holder.style.height = `${Math.max(...ys)}px`;
      holder.animate([{ opacity: getComputedStyle(holder).opacity }, { opacity: "1" }], { duration: 500, easing: SWING, fill: "forwards" });
    }, 400));
  }
}

/** The location map, centred and zoomed as the page's map options say (Google embed, no account key). */
function maps() {
  for (const el of document.querySelectorAll<HTMLElement>(".aioseo-local-map[data-lat]")) {
    if (el.querySelector("iframe")) continue;
    const { lat, lng, zoom } = el.dataset;
    el.classList.add("map-loaded");
    el.style.position = "relative";
    el.style.overflow = "hidden";
    const f = document.createElement("iframe");
    f.src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
    f.title = "Map";
    f.loading = "lazy";
    f.referrerPolicy = "no-referrer-when-downgrade";
    f.setAttribute("style", "border:0;position:absolute;inset:0;width:100%;height:100%");
    el.replaceChildren(f);
  }
}


/** The phone-shortcut page: setup steps for the visitor's platform; ?open=1 (the saved shortcut) forwards to the portal. */
function portalShortcut(offs: Off[]) {
  const box = document.getElementById("gbcwSetupInstructions");
  if (!box) return;
  const portalUrl = document.querySelector<HTMLAnchorElement>(".gbcw-portal-button")?.href ?? "/";
  const ua = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /android/.test(ua);
  if (new URLSearchParams(location.search).get("open") === "1") {
    box.innerHTML = "<strong>Opening portal...</strong> You are being sent to the secure Glinting Bay customer portal.";
    const t = window.setTimeout(() => { location.href = portalUrl; }, 1000);
    offs.push(() => clearTimeout(t));
    return;
  }
  if (isAndroid) {
    box.innerHTML = "<strong>Android setup:</strong><ol><li>Tap the Chrome <strong>3-dot menu</strong>.</li><li>Choose <strong>Install app</strong> if available.</li><li>If offered, name it <strong>Glinting Bay</strong>.</li><li>Tap <strong>Install</strong> or <strong>Add</strong>.</li><li>After saving it, use the button below to continue to the customer portal.</li></ol>";
    return;
  }
  if (isIOS) {
    box.innerHTML = "<strong>iPhone setup:</strong><ol><li>Open this page in Safari.</li><li>Tap the <strong>Share</strong> button.</li><li>Choose <strong>Add to Home Screen</strong>.</li><li>Name it <strong>Glinting Bay</strong>.</li><li>Tap <strong>Add</strong>.</li><li>After saving it, use the button below to continue to the customer portal.</li></ol>";
    return;
  }
  box.innerHTML = "<strong>Setup:</strong> Use your browser menu to save or bookmark this Glinting Bay customer portal shortcut page.";
}

/** Search overlay colours follow the page: ink and surface from the body. */
function searchColors() {
  const c = getComputedStyle(document.body), r = document.documentElement;
  if (c.color) r.style.setProperty("--jp-search-page-ink", c.color);
  const bg = c.backgroundColor;
  if (bg && bg !== c.color && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") r.style.setProperty("--jp-search-page-surface", bg);
}

/** Elementor gallery, grid layout: the e-gallery library sets columns / gaps / ratio per device as custom properties. */
function galleries(offs: Off[]) {
  for (const w of document.querySelectorAll<HTMLElement>(".elementor-widget-gallery")) {
    const box = w.querySelector<HTMLElement>(".elementor-gallery__container");
    if (!box) continue;
    let s: Record<string, any> = {};
    try { s = JSON.parse(w.dataset.settings || "{}"); } catch { continue; }
    if ((s.gallery_layout ?? "grid") !== "grid") continue;
    const items = [...box.querySelectorAll<HTMLElement>(":scope > .e-gallery-item")];
    const [rw, rh] = String(s.aspect_ratio || "3:2").split(":").map(Number);
    const ratio = (rh / rw) * 100;
    box.classList.add("e-gallery-container", "e-gallery-grid", "e-gallery--ltr");
    for (const it of items) {
      const img = it.querySelector<HTMLElement>(".e-gallery-image");
      if (img?.dataset.thumbnail) img.style.backgroundImage = `url("${img.dataset.thumbnail}")`;
    }
    const layout = () => {
      // e-gallery picks the first breakpoint the window is strictly narrower than (767, 1024)
      const dev = window.innerWidth < 767 ? "_mobile" : window.innerWidth < 1024 ? "_tablet" : "";
      const pick = (k: string) => s[k + dev] ?? (dev === "_mobile" ? s[k + "_tablet"] : undefined) ?? s[k];
      const cols = Number(pick("columns")) || 1;
      const gap = Number(pick("gap")?.size ?? 10);
      const rows = Math.ceil(items.length / cols);
      const W = box.getBoundingClientRect().width;
      const itemW = (W - (cols - 1) * gap) / cols;
      const H = rows * itemW * (ratio / 100) + (rows - 1) * gap;
      box.style.setProperty("--hgap", `${gap}px`);
      box.style.setProperty("--vgap", `${gap}px`);
      box.style.setProperty("--animation-duration", "350ms");
      box.style.setProperty("--columns", String(cols));
      box.style.setProperty("--rows", String(rows));
      box.style.setProperty("--aspect-ratio", `${ratio}%`);
      box.style.setProperty("--container-aspect-ratio", `${W ? (H / W) * 100 : 0}%`);
      items.forEach((it, i) => { it.style.setProperty("--column", String(i % cols)); it.style.setProperty("--row", String(Math.floor(i / cols))); });
    };
    layout();
    on(window, "resize", layout, offs);
  }
}

export default function Behaviors() {
  useEffect(() => {
    const offs: Off[] = [];
    searchColors();
    backToTop(offs);
    mobileMenu(offs);
    hoverColors(offs);
    entranceAnimations(offs);
    lazyBackgrounds(offs);
    parallax(offs);
    accordions(offs);
    masonry(offs);
    galleries(offs);
    maps();
    portalShortcut(offs);
    return () => offs.forEach((f) => f());
  }, []);
  return null;
}
