import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { PORTFOLIO_CONFIG } from './data/portfolio';

export function App() {
  return (
    <div className="bg-grid-pattern min-h-screen bg-[#070B12] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-slate-800/70 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-slate-500">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
