import { BarChart3, Bot, BrainCircuit, Database, Search, Server } from 'lucide-react';
import type { ReactNode } from 'react';
import { SKILL_GROUPS } from '../data/portfolio';

const GROUP_ICONS: Record<string, ReactNode> = {
  genai: <Bot className="h-5 w-5 text-cyan-300" />,
  rag: <Search className="h-5 w-5 text-emerald-300" />,
  knowledge: <Database className="h-5 w-5 text-indigo-300" />,
  backend: <Server className="h-5 w-5 text-sky-300" />,
  ml: <BrainCircuit className="h-5 w-5 text-violet-300" />,
  data: <BarChart3 className="h-5 w-5 text-amber-300" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-800/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Technical Capabilities
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Stack &amp; Engineering Domains
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
          Production tooling spanning agentic LLM orchestration, hybrid &amp; graph retrieval,
          cloud-native APIs, and applied ML/BI analytics.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.id} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80">
                  {GROUP_ICONS[group.id]}
                </span>
                <h3 className="text-base font-bold text-white">{group.title}</h3>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">{group.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-800 bg-slate-950/75 px-2.5 py-1 font-mono text-xs text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    {skill}
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
