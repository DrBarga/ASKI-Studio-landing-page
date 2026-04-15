"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PreloaderStage = "loading" | "revealing" | "hidden";

export function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<PreloaderStage>("loading");

  useEffect(() => {
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.style.overflow = "hidden";

    const duration = prefersReducedMotion ? 260 : 1850;
    const revealDelay = prefersReducedMotion ? 80 : 160;
    const hideDelay = prefersReducedMotion ? 420 : 1080;
    const start = performance.now();

    let animationFrame = 0;
    let revealTimeout = 0;
    let hideTimeout = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const nextProgress = Math.min(
        100,
        Math.round((elapsed / duration) * 100),
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = window.requestAnimationFrame(tick);
        return;
      }

      revealTimeout = window.setTimeout(() => {
        setStage("revealing");
      }, revealDelay);

      hideTimeout = window.setTimeout(() => {
        setStage("hidden");
        root.style.overflow = previousOverflow;
      }, hideDelay);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(revealTimeout);
      window.clearTimeout(hideTimeout);
      root.style.overflow = previousOverflow;
    };
  }, []);

  if (stage === "hidden") {
    return null;
  }

  const isRevealing = stage === "revealing";

  return (
    <div
      aria-hidden={isRevealing}
      className="fixed inset-0 z-[200] bg-transparent"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#040405] transition-transform duration-[1150ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealing ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#040405] transition-transform duration-[1150ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealing ? "translate-y-full" : "translate-y-0"
        }`}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-500 ${
          isRevealing
            ? "scale-[0.985] opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        <div className="flex w-full max-w-sm flex-col items-center text-center">
          <div className="preloader-logo-wrap relative mb-10 h-[88px] w-[320px] max-w-full overflow-hidden rounded-[1.5rem] sm:h-[96px] sm:w-[360px]">
            <div className="preloader-logo-glow absolute inset-x-6 inset-y-3 rounded-full bg-[radial-gradient(circle,rgba(201,164,122,0.18),transparent_72%)] blur-2xl" />
            <Image
              src="/assets/aski/logo.png"
              alt="ASKI Studio"
              fill
              className="preloader-logo relative z-10 object-cover object-center"
              priority
            />
          </div>

          <div className="mb-3 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full origin-left rounded-full bg-gradient-to-r from-[#f0d2ad] via-[#c9a47a] to-[#9a7350] transition-transform duration-150"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>

          <p className="mb-8 text-sm font-semibold tabular-nums tracking-[0.12em] text-[rgba(240,210,173,0.85)]">
            {progress}%
          </p>

          <p className="text-[0.72rem] uppercase tracking-[0.32em] text-white/32">
            Premiumowe remonty wnętrz
          </p>
        </div>
      </div>
    </div>
  );
}
