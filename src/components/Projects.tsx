"use client";

import { useState } from "react";
import {
  shopifyStores,
  newShopifyStores,
  shopifyApps,
  wooStores,
  framerHeadless,
  aiTools,
} from "@/lib/data";

type TabKey = "stores" | "apps" | "headless" | "ai" | "woo";

const tabs: { key: TabKey; label: string }[] = [
  { key: "stores", label: "Shopify stores" },
  { key: "apps", label: "Shopify apps" },
  { key: "headless", label: "Framer & headless" },
  { key: "ai", label: "AI-driven tooling" },
  { key: "woo", label: "WooCommerce" },
];

function StoreGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {items.map((site) => (
        <a
          key={site}
          href={`https://${site}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl border border-border bg-surface/50 px-4 py-3.5 text-[14px] text-text transition-colors hover:border-liquid-1/50 hover:bg-surface-2"
        >
          <span className="truncate">{site}</span>
          <span className="ml-2 text-muted transition-colors group-hover:text-liquid-1">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<TabKey>("stores");

  return (
    <section id="work" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[12px] uppercase tracking-widest text-liquid-1">
          04 · Selected work
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          A cross-section of the build log.
        </h2>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-6">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full px-4 py-2 font-mono text-[13px] transition-colors ${
                active === t.key
                  ? "bg-text text-ink"
                  : "border border-border text-muted hover:text-text"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {active === "stores" && (
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 font-mono text-[12px] uppercase tracking-widest text-muted">
                  Recent
                </h3>
                <StoreGrid items={newShopifyStores} />
              </div>
              <div>
                <h3 className="mb-4 font-mono text-[12px] uppercase tracking-widest text-muted">
                  Featured
                </h3>
                <StoreGrid items={shopifyStores} />
              </div>
            </div>
          )}

          {active === "woo" && (
            <div>
              <p className="mb-6 max-w-2xl text-[14.5px] leading-relaxed text-muted">
                WooCommerce builds for brands that prefer WordPress — custom
                functionality shipped through child themes to keep core/theme
                updates safe.
              </p>
              <StoreGrid items={wooStores} />
            </div>
          )}

          {active === "apps" && (
            <div className="grid gap-5 sm:grid-cols-2">
              {shopifyApps.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-liquid-1/50"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {app.name}
                    </h3>
                    <span className="text-muted transition-colors group-hover:text-liquid-1">
                      ↗
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {app.desc}
                  </p>
                </a>
              ))}
            </div>
          )}

          {active === "headless" && (
            <div>
              <p className="mb-6 max-w-2xl text-[14.5px] leading-relaxed text-muted">
                Bridging no-code canvases and headless catalogs with real
                commerce logic — for stores where the front end and the
                storefront platform aren&apos;t the same thing.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {framerHeadless.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-border bg-surface/50 p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-text">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "ai" && (
            <div>
              <p className="mb-6 max-w-2xl text-[14.5px] leading-relaxed text-muted">
                Small tools and automations that remove repetitive work from
                storefront and content operations.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {aiTools.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-border bg-surface/50 p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-text">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
