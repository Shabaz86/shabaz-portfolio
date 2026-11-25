import { useState, type FormEvent } from 'react';
import { Check, Copy, Mail, Send } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    if (PORTFOLIO_CONFIG.formspreeEndpoint) {
      setStatus('submitting');
      try {
        const res = await fetch(PORTFOLIO_CONFIG.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });
        if (res.ok) {
          setStatus('sent');
          setName('');
          setEmail('');
          setMessage('');
          return;
        }
        setStatus('error');
      } catch {
        setStatus('error');
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${PORTFOLIO_CONFIG.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section id="contact" className="border-t border-slate-800/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Let&apos;s Connect
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Build Something Intelligent Together
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Looking for a Generative AI Engineer or Backend Developer who ships reliable
              multi-agent systems, RAG architectures, and scalable cloud APIs? Reach out directly.
            </p>

            <div className="mt-7 space-y-3">
              <div className="glass-card flex items-center justify-between rounded-xl px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  <span className="font-mono text-xs text-slate-200 sm:text-sm">
                    {PORTFOLIO_CONFIG.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_CONFIG.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:text-cyan-300"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={PORTFOLIO_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:text-cyan-300"
                >
                  <LinkedInIcon className="h-4 w-4 text-cyan-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role, AI architecture challenge, or project..."
                  className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'sent' && (
                  <span className="font-mono text-xs text-emerald-300">
                    ✓ Message ready! Check your email client or confirmation.
                  </span>
                )}
                {status === 'error' && (
                  <span className="font-mono text-xs text-rose-400">
                    Unable to submit right now. Please email directly.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
