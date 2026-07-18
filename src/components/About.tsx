import { education, languages } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-widest text-liquid-1">
              01 · About
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Five years deep in commerce&nbsp;dev.
            </h2>
          </div>

          <div className="space-y-6 text-[16px] leading-relaxed text-muted">
            <p>
              I&apos;m a Senior Shopify Developer and Frontend Team Lead based
              in Delhi, India. My work spans custom theme development,
              headless builds, complex integrations, CRO-focused redesigns,
              speed optimization, and Shopify app development — for brands
              across fashion, jewelry, home &amp; living, flooring, skincare,
              CBD, and food &amp; lifestyle.
            </p>
            <p>
              I&apos;ve led a team of seven developers as Acting Frontend Team
              Lead, run client-facing technical discovery, and shipped
              production Shopify apps used by merchants beyond the stores I
              build directly. I care about pages that load fast, checkouts
              that don&apos;t leak conversion, and code the next developer
              can actually read.
            </p>

            <div className="grid gap-8 pt-4 sm:grid-cols-2">
              <div>
                <h3 className="font-mono text-[12px] uppercase tracking-widest text-text">
                  Education
                </h3>
                <ul className="mt-3 space-y-3">
                  {education.map((e) => (
                    <li key={e.degree} className="text-[14px]">
                      <p className="text-text">{e.degree}</p>
                      <p className="text-muted">
                        {e.school} · {e.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[12px] uppercase tracking-widest text-text">
                  Languages
                </h3>
                <ul className="mt-3 space-y-2">
                  {languages.map((l) => (
                    <li
                      key={l.name}
                      className="flex items-center justify-between text-[14px]"
                    >
                      <span className="text-text">{l.name}</span>
                      <span className="text-muted">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
