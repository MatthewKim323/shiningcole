"use client";
import { useState } from "react";

const CSS = `
@font-face{font-family:"CwInter";font-style:normal;font-weight:100 900;font-display:swap;src:url(/fonts/font-inter-latin.woff2) format("woff2")}
.cw-root{position:fixed;right:24px;bottom:52px;z-index:999999999;font-family:"CwInter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
.cw-card{position:absolute;right:0;bottom:68px;width:320px;box-sizing:border-box;padding:0 20px 19px;background:#fff;border-radius:12px;box-shadow:0 8px 26px rgba(0,18,46,.16);transform-origin:100% 100%;transition:opacity .25s ease,transform .25s ease}
.cw-card[data-open="false"]{opacity:0;transform:translateY(8px) scale(.98);pointer-events:none}
.cw-art{display:block;width:280px;height:200px;margin:0;isolation:isolate}
.cw-root .cw-text{font-family:inherit;margin:19px 0 0;padding:0;font-size:14px;line-height:20px;font-weight:400;color:#080f1a;letter-spacing:0}
.cw-emoji{font-size:20px;line-height:20px;vertical-align:-2px}
.cw-root .cw-rule{height:1px;margin:19.5px 0 0;padding:0;background:#d3dbe5;border:0}
.cw-root .cw-link{font-family:inherit;display:inline-block;margin-top:19.5px;font-size:14px;line-height:20px;color:#0566ff;text-decoration:none}
.cw-root .cw-link:hover{text-decoration:underline}
.cw-bubble{position:relative;display:flex;align-items:center;justify-content:center;width:56px;height:56px;padding:0;border:0;border-radius:50%;background:#0b1a4a;cursor:pointer;box-shadow:0 2px 8px rgba(0,18,46,.18);transition:transform .2s ease}
.cw-bubble:hover{transform:scale(1.06)}
.cw-root .cw-badge{font-family:inherit;position:absolute;top:-6px;right:-6px;min-width:20px;height:20px;padding:0 6px;box-sizing:border-box;border-radius:10px;background:#e81332;color:#fff;font-size:12px;font-weight:700;line-height:20px;text-align:center}
.cw-tag{animation:cw-fade .5s ease both}
.cw-tag.cw-b{animation-delay:.12s}
.cw-dot{animation:cw-fade .4s ease both;animation-delay:.6s}
@keyframes cw-fade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.cw-tag,.cw-dot{animation:none}}
`;

/** Floating promo card + chat launcher, bottom right on every page. */
export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  return (
    <div className="cw-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cw-card" data-open={open} aria-hidden={!open}>
        <svg className="cw-art" viewBox="20 0 280 200" aria-hidden="true">
          <g className="cw-tag" transform="translate(126 108) rotate(30)">
            <rect x="-32" y="-56" width="64" height="112" rx="13" fill="#4ac6ea" />
            <circle cx="0" cy="-38" r="5.5" fill="#fff" />
            <circle cx="-11" cy="-8" r="7.5" fill="none" stroke="#fff" strokeWidth="5" />
            <circle cx="11" cy="24" r="7.5" fill="none" stroke="#fff" strokeWidth="5" />
            <path d="M16 -12 L-16 28" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g className="cw-tag cw-b" style={{ mixBlendMode: "multiply" }} transform="translate(201 126) rotate(-20)">
            <rect x="-35" y="-56" width="70" height="112" rx="13" fill="#ea6373" />
          </g>
          <g className="cw-tag cw-b" transform="translate(201 126) rotate(-20)">
            <circle cx="0" cy="-38" r="5.5" fill="#fff" />
            <circle cx="-12" cy="-6" r="7.5" fill="none" stroke="#fff" strokeWidth="5" />
            <circle cx="13" cy="24" r="7.5" fill="none" stroke="#fff" strokeWidth="5" />
            <path d="M6 -20 L-4 36" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g className="cw-dot" fill="#4ac6ea">
            <circle cx="261" cy="141" r="3.6" />
            <circle cx="262" cy="156" r="3.6" />
            <circle cx="253" cy="167" r="3.6" />
          </g>
        </svg>
        <p className="cw-text">Get Your First Month for Just $5! <span className="cw-emoji">🚗</span> <span className="cw-emoji">✨</span></p>
        <hr className="cw-rule" />
        <a className="cw-link" href="/#unlimited-plans">See Plans &amp; Get $5 Deal →</a>
      </div>
      <button type="button" className="cw-bubble" aria-label={open ? "Hide offer" : "Show offer"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9.5L5 20.5V17a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="#fff" />
        </svg>
        <span className="cw-badge">2</span>
      </button>
    </div>
  );
}
