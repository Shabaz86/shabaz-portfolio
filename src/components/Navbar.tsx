import { useState } from 'react';
import { FileDown, Menu, Terminal, X } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio';

const NAV_LINKS = [
  { label: 'Systems', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#070B12]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 transition group-hover:border-cyan-300/60 group-hover:bg-cyan-500/20">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm">
            shabaz<span className="text-cyan-400">.ai</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}

          {PORTFOLIO_CONFIG.resumeUrl ? (
            <a
              href={PORTFOLIO_CONFIG.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-500/20"
            >
              <FileDown className="h-3.5 w-3.5" />
              Resume
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-500/20"
            >
              Hire / Connect
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-slate-700 hover:text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800/70 bg-[#070B12]/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800/60 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
