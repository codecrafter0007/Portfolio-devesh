import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, var(--color-liquid-1), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono text-[12px] uppercase tracking-widest text-liquid-1">
          05 · Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
          Have a storefront that needs to move faster?
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-muted">
          I take on theme builds, headless migrations, custom Shopify apps,
          and CRO-focused rebuilds. Based in {profile.location} — open to
          remote work worldwide.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-text px-7 py-3.5 font-mono text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-border px-7 py-3.5 font-mono text-[13px] text-text transition-colors hover:border-liquid-1 hover:text-liquid-1"
          >
            {profile.phone}
          </a>
        </div>
      </div>

      <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center gap-3 border-t border-border px-6 pt-8 text-center font-mono text-[12px] text-muted sm:flex-row sm:justify-between sm:text-left">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js · deployed on Vercel</span>
      </footer>
    </section>
  );
}
