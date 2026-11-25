import type { CSSProperties } from "react";

/** Inline styles that carry custom properties or var() values, which React's style types cannot express. */
export const sx = (o: Record<string, string>) => o as unknown as CSSProperties;
