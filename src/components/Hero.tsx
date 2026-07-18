"use client";

import { motion } from "framer-motion";
import LiquidBackground from "./LiquidBackground";
import { profile, stats } from "@/lib/data";

const codeLines = [
  { indent: 0, tokens: [{ t: "{% ", c: "text-liquid-2" }, { t: "if", c: "text-liquid-1" }, { t: " product.available ", c: "text-text" }, { t: "%}", c: "text-liquid-2" }] },
  { indent: 1, tokens: [{ t: "<button>", c: "text-muted" }, { t: "{{", c: "text-liquid-2" }, { t: " 'Add to cart' ", c: "text-accent-warm" }, { t: "}}", c: "text-liquid-2" }, { t: "</button>", c: "text-muted" }] },
  { indent: 0, tokens: [{ t: "{% ", c: "text-liquid-2" }, { t: "else", c: "text-liquid-1" }, { t: " %}", c: "text-liquid-2" }] },
  { indent: 1, tokens: [{ t: "<button ", c: "text-muted" }, { t: "disabled", c: "text-liquid-1" }, { t: ">", c: "text-muted" }, { t: "Sold out", c: "text-accent-warm" }, { t: "</button>", c: "text-muted" }] },
  { indent: 0, tokens: [{ t: "{% ", c: "text-liquid-2" }, { t: "endif", c: "text-liquid-1" }, { t: " %}", c: "text-liquid-2" }] },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <LiquidBackground />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[12px] text-liquid-1">
              <span className="h-1.5 w-1.5 rounded-full bg-liquid-1" />
              {"{{ available_for_work }}"}
            </div>

            <h1 className="font-display text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl">
              Storefronts built like{" "}
              <span className="bg-gradient-to-r from-liquid-1 to-liquid-2 bg-clip-text text-transparent">
                Liquid
              </span>{" "}
              — flexible where it counts, fast under load.
            </h1>

            <p className="mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-muted">
              {profile.tagline} Senior Shopify Developer and Frontend Team Lead
              based in {profile.location}, working across theme builds,
              headless commerce, custom apps, and the tooling that keeps it
              all fast.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-text px-6 py-3 font-mono text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                View the work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-6 py-3 font-mono text-[13px] text-text transition-colors hover:border-liquid-1 hover:text-liquid-1"
              >
                {profile.email}
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold text-text">
                    {s.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-surface/80 shadow-[0_30px_80px_-30px_rgba(69,232,196,0.25)] backdrop-blur">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-muted">
                  product-card.liquid
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.9]">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.c}>
                        {tok.t}
                      </span>
                    ))}
                  </div>
                ))}
                <div className="mt-1 inline-block h-4 w-2 animate-pulse bg-liquid-1/70" />
              </pre>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-surface-2 px-4 py-3 shadow-xl sm:block">
              <p className="font-mono text-[11px] text-muted">Core Web Vitals</p>
              <p className="font-display text-lg font-semibold text-liquid-1">
                All green
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
