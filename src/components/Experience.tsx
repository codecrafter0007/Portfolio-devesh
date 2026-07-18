import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[12px] uppercase tracking-widest text-liquid-1">
          02 · Experience
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Where the work happened.
        </h2>

        <div className="mt-14 border-t border-border">
          {experience.map((job, i) => (
            <div
              key={job.role + job.period}
              className="grid gap-4 border-b border-border py-10 md:grid-cols-[100px_1fr_1.4fr] md:gap-8"
            >
              <div className="font-mono text-[13px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <p className="font-mono text-[12px] text-liquid-1">{job.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-text">
                  {job.role}
                </h3>
                <p className="mt-1 text-[14px] text-muted">
                  {job.org} · {job.place}
                </p>
              </div>

              <ul className="space-y-2.5">
                {job.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-liquid-2" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
