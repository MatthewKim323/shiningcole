"use client";
import { useState } from "react";

const CSS = `
@font-face{font-family:"CwInter";font-style:normal;font-weight:100 900;font-display:swap;src:url(/fonts/font-06e95729c1.woff2) format("woff2")}
.cw-root{position:fixed;right:24px;bottom:52px;z-index:999999999;font-family:"CwInter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
.cw-card{position:absolute;right:0;bottom:68px;width:320px;box-sizing:border-box;padding:0 20px 20px;background:#fff;border-radius:12px;box-shadow:0 8px 26px rgba(0,18,46,.16);transform-origin:100% 100%;transition:opacity .25s ease,transform .25s ease}
.cw-card[data-open="false"]{opacity:0;transform:translateY(8px) scale(.98);pointer-events:none}
.cw-art{display:block;width:240px;height:200px;margin:0 auto}
.cw-text{margin:24px 0 0;font-size:15px;line-height:20px;font-weight:400;color:#080f1a;letter-spacing:0}
.cw-rule{height:1px;margin:20px 0 0;background:#d3dbe5;border:0}
.cw-link{display:inline-block;margin-top:20px;font-size:15px;line-height:20px;color:#0566ff;text-decoration:none}
.cw-link:hover{text-decoration:underline}
.cw-bubble{position:relative;display:flex;align-items:center;justify-content:center;width:56px;height:56px;padding:0;border:0;border-radius:50%;background:#0b1a4a;cursor:pointer;box-shadow:0 2px 8px rgba(0,18,46,.18);transition:transform .2s ease}
.cw-bubble:hover{transform:scale(1.06)}
.cw-badge{position:absolute;top:-6px;right:-6px;min-width:20px;height:20px;padding:0 6px;box-sizing:border-box;border-radius:10px;background:#e81332;color:#fff;font-size:12px;font-weight:700;line-height:20px;text-align:center}
.cw-tag{transform-box:fill-box;transform-origin:50% 50%;animation:cw-in .7s cubic-bezier(.2,.9,.3,1.2) both}
.cw-tag.cw-b{animation-delay:.12s}
.cw-dot{animation:cw-fade .4s ease both;animation-delay:.6s}
@keyframes cw-in{from{opacity:0;transform:scale(.6) rotate(-8deg)}to{opacity:1;transform:none}}
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
        <svg className="cw-art" viewBox="0 0 240 200" aria-hidden="true">
          <g className="cw-tag">
            <path d="M58 36c4-8 13-12 21-8l22 11c8 4 11 13 8 21l-30 70c-4 9-14 13-23 9l-34-15c-9-4-13-14-9-23z" fill="#4ac6ea" />
            <circle cx="88" cy="45" r="6" fill="#fff" />
            <circle cx="47" cy="64" r="8" fill="none" stroke="#fff" strokeWidth="5" />
            <circle cx="47" cy="107" r="8" fill="none" stroke="#fff" strokeWidth="5" transform="translate(16 -8)" />
            <path d="M24 103l50-28" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g className="cw-tag cw-b">
            <path d="M118 58c2-9 11-14 20-11l25 8c9 3 14 12 12 21l-19 83c-2 10-12 16-22 13l-38-11c-10-3-15-13-12-23z" fill="#ea6373" />
            <path d="M103 98c4-16 10-30 16-41 3 14 3 30-2 46-3 10-8 19-12 25-3-9-4-20-2-30z" fill="#3b4e6a" opacity=".85" />
            <circle cx="146" cy="58" r="6" fill="#fff" />
            <circle cx="153" cy="96" r="8" fill="none" stroke="#fff" strokeWidth="5" />
            <circle cx="172" cy="128" r="8" fill="none" stroke="#fff" strokeWidth="5" />
            <path d="M160 82l-14 64" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g className="cw-dot" fill="#4ac6ea">
            <circle cx="206" cy="128" r="4" />
            <circle cx="207" cy="143" r="4" />
            <circle cx="198" cy="156" r="4" />
          </g>
        </svg>
        <p className="cw-text">Get Your First Month for Just $5! 🚗✨</p>
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
