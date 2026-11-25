import { ArrowRight, Cpu, GraduationCap, Mail, Network, Server } from 'lucide-react';
import { HERO_METRICS, PORTFOLIO_CONFIG } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {PORTFOLIO_CONFIG.availability}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {PORTFOLIO_CONFIG.name}
            </h1>

            <p className="mt-3 font-mono text-base font-medium text-cyan-300 sm:text-lg">
              {PORTFOLIO_CONFIG.title}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {PORTFOLIO_CONFIG.aboutSummary}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Explore Production Systems
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={PORTFOLIO_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                <GitHubIcon className="h-4 w-4 text-slate-400" />
                GitHub
              </a>
              <a
                href={PORTFOLIO_CONFIG.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4 text-cyan-400" />
                LinkedIn
              </a>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                {PORTFOLIO_CONFIG.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card relative overflow-hidden rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-900">
                  <img
                    src={PORTFOLIO_CONFIG.profileImage}
                    alt={PORTFOLIO_CONFIG.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
                    System Profile
                  </span>
                  <h2 className="mt-1 text-lg font-semibold text-white">
                    {PORTFOLIO_CONFIG.shortName}
                  </h2>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                    <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
                    Int. M.Sc. Math &amp; Computing, BIT Mesra
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {HERO_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-3.5"
                  >
                    <div className="font-mono text-xl font-bold text-cyan-300">{metric.value}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3.5 font-mono text-xs">
                <div className="mb-2 flex items-center justify-between text-slate-400">
                  <span>core_architecture.stack</span>
                  <span className="text-emerald-400">● prod-ready</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                    <span>LangGraph · Azure OpenAI · Function Calling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Network className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Neo4j Graph-RAG · Azure AI Search (BM25+Vec)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Azure Functions · GCP Cloud Run · Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
