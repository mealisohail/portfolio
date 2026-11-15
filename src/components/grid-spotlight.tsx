"use client";

import { useEffect, useRef } from "react";

/**
 * A faint grid that follows the cursor behind the page content.
 * Mouse/trackpad only; skipped for touch and reduced-motion users.
 */
export function GridSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (
      !matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)")
        .matches
    )
      return;

    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = parent.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
        el.style.opacity = "1";
      });
    };
    const hide = () => (el.style.opacity = "0");

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, []);

  return <div ref={ref} aria-hidden className="grid-spotlight" />;
}
