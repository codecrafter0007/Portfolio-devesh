import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[12px] uppercase tracking-widest text-liquid-1">
          03 · Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          The stack, end to end.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-liquid-1/40"
            >
              <h3 className="font-display text-lg font-semibold text-text">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 font-mono text-[12px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
