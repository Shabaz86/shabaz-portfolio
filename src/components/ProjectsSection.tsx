import { useState } from 'react';
import { ArrowUpRight, Layers, Sparkles, X } from 'lucide-react';
import { PROJECTS, type ProjectCategory, type ProjectItem } from '../data/portfolio';

const CATEGORIES: ProjectCategory[] = ['All', 'GenAI & Agents', 'Cloud & Backend', 'Data & ML'];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filtered =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="border-t border-slate-800/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Production Systems &amp; Work
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered AI &amp; Backend Solutions
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
              Real-world systems built across multi-agent orchestration, hybrid &amp; knowledge-graph
              RAG, high-concurrency cloud APIs, and ML analytics.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 shadow-sm shadow-cyan-500/30'
                      : 'border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="glass-card group flex flex-col justify-between rounded-2xl p-6 transition duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-cyan-300">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">{project.period}</span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-400">{project.subtitle}</p>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/5 px-3.5 py-2.5">
                  <div className="font-mono text-sm font-bold text-emerald-300">
                    {project.impactMetric}
                  </div>
                  <div className="text-[11px] text-slate-400">{project.impactLabel}</div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-800 bg-slate-950/70 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="rounded-md border border-slate-800 bg-slate-950/70 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  <Layers className="h-3.5 w-3.5 text-cyan-400" />
                  Inspect Architecture &amp; Details
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 rounded-lg border border-slate-800 p-1.5 text-slate-400 transition hover:border-slate-700 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="font-mono text-xs text-cyan-300">
              {selectedProject.category} · {selectedProject.role}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white">{selectedProject.title}</h3>
            <p className="mt-1 font-mono text-xs text-slate-400">{selectedProject.subtitle}</p>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {selectedProject.summary}
            </p>

            <div className="mt-6">
              <h4 className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                Architecture Pipeline
              </h4>
              <div className="mt-3 flex flex-col gap-2">
                {selectedProject.architectureFlow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/75 px-3.5 py-2.5 text-xs text-slate-200"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 font-mono text-[11px] font-bold text-cyan-300">
                      {index + 1}
                    </span>
                    <span className="font-mono">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                Key Engineering Contributions
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                Stack
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-xs text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
