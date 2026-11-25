import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { EDUCATION, EXPERIENCES } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-slate-800/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Career &amp; Academic Background
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Experience &amp; Education
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {EXPERIENCES.map((exp) => (
              <div key={`${exp.role}-${exp.period}`} className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-cyan-300">{exp.company}</p>
                    </div>
                  </div>
                  <span className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1 font-mono text-xs text-slate-400">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">{exp.summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {exp.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
                    Education
                  </span>
                  <h3 className="text-lg font-bold text-white">{EDUCATION.institution}</h3>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
                <p className="font-semibold text-slate-100">{EDUCATION.degree}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-slate-400">
                  <span>{EDUCATION.period}</span>
                  <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
                    {EDUCATION.score}
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/25 bg-indigo-500/10 text-indigo-300">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-indigo-300">
                    Campus &amp; Leadership
                  </span>
                  <h3 className="text-lg font-bold text-white">Positions of Responsibility</h3>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {EDUCATION.leadership.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white">{item.title}</span>
                      <span className="font-mono text-[11px] text-slate-400">{item.year}</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
