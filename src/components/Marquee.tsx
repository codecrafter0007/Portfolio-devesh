import { shopifyStores, newShopifyStores, wooStores } from "@/lib/data";

const allNames = [...newShopifyStores, ...shopifyStores, ...wooStores].map((d) =>
  d.replace(/\.(com|in|co|io|se|sg|de|uk|co\.in|co\.uk)$/i, "").replace(/\..+$/, "")
);

export default function Marquee() {
  const loopItems = [...allNames, ...allNames];

  return (
    <div className="border-b border-border bg-surface/40 py-6">
      <div className="mb-3 px-6 text-center font-mono text-[11px] uppercase tracking-widest text-muted">
        Storefronts shipped for
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {loopItems.map((name, i) => (
            <span
              key={i}
              className="font-display text-lg font-medium capitalize text-muted/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
