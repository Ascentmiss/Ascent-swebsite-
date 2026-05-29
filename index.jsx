import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Lock, Zap, Github, ExternalLink, ChevronRight, Phone } from 'lucide-react';

export default function AscentMissionAssurance() {
  const [latency, setLatency] = useState(84);
  const [throughput, setThroughput] = useState(24);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const next = prev + (Math.random() - 0.5) * 30;
        return Math.max(65, Math.min(120, next));
      });
      setThroughput(prev => {
        const next = prev + (Math.random() - 0.5) * 8;
        return Math.max(16, Math.min(32, next));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-black text-white font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-tight">
            ASCENT<span className="text-blue-500">.MISSION</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Solutions
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Case Studies
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Resources
            </a>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold hover:bg-slate-100 transition-all duration-200 border border-white">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                Real-Time Voice RAG for Contact Centers.
              </h1>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                Replace push-button IVR menus with natural conversation. Ascent Mission Assurance injects live enterprise data into voice streams at sub-100ms latency on Azure infrastructure.
              </p>
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              <button className="px-6 py-3 bg-white text-black font-semibold text-sm hover:bg-slate-100 transition-all duration-200 border border-white flex items-center gap-2">
                Request Audit
                <ArrowRight size={16} />
              </button>
              <button className="px-6 py-3 bg-transparent text-white font-semibold text-sm border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center gap-2">
                Download Materials
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex gap-6 flex-wrap text-xs font-mono text-slate-400 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Azure Communication Services</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>HIPAA Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column - Call Center Metrics Dashboard */}
          <div className="bg-neutral-950 border border-neutral-800 p-6 space-y-6">
            {/* Audio Waveform Visualizer */}
            <div className="flex items-end justify-center gap-1 h-24 bg-neutral-900/50 px-6 py-4 border border-neutral-800">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-blue-500 rounded-full origin-bottom"
                  style={{
                    height: `${Math.random() * 80 + 20}%`,
                    animation: `pulse ${0.6 + (i % 5) * 0.1}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                    animationDelay: `${(i * 0.05)}s`,
                    opacity: 0.8 + Math.random() * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Live Call Metrics */}
            <div className="grid grid-cols-3 gap-4 text-xs font-mono">
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">CALLS ACTIVE</div>
                <div className="text-xl font-bold text-blue-500">24</div>
              </div>
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">AVG LATENCY</div>
                <div className="text-xl font-bold text-blue-500">
                  {Math.round(latency)}ms
                </div>
              </div>
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">AI COMPLETION</div>
                <div className="text-xl font-bold text-green-500">80%</div>
              </div>
            </div>

            {/* Status Line */}
            <div className="border border-neutral-800 p-3 text-xs">
              <div className="text-slate-500 mb-1">SYSTEM STATUS</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-slate-300">All regions operational · Next gen Azure runtime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Band */}
      <section className="py-12 px-6 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">98.3%</div>
            <div className="text-xs text-slate-400">Intent accuracy on first utterance</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">&lt;500ms</div>
            <div className="text-xs text-slate-400">P95 response latency</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">4 wks</div>
            <div className="text-xs text-slate-400">Contract to first live call</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">80%</div>
            <div className="text-xs text-slate-400">AI completion on routine calls</div>
          </div>
        </div>
      </section>

      {/* Code Integration Example */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Native Azure Integration</h2>
          
          <div className="bg-neutral-950 border border-neutral-800 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex items-center gap-3 text-xs font-mono">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="ml-4 flex gap-4 text-slate-500">
                <span className="text-blue-400">contact-center.ts</span>
                <span className="text-slate-600">azure-config.json</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-4 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-slate-400">
                <span className="text-blue-400">import</span> {'{'}
                <span className="text-yellow-400"> AscentRAG, CallRouter </span>
                {'}'} <span className="text-blue-400">from</span>{' '}
                <span className="text-green-400">'@ascent/mission-assurance'</span>;
              </div>

              <div className="text-slate-400">
                <span className="text-blue-400">import</span> {'{'}
                <span className="text-yellow-400"> SearchClient </span>
                {'}'} <span className="text-blue-400">from</span>{' '}
                <span className="text-green-400">'@azure/search-documents'</span>;
              </div>

              <div className="mt-6 text-slate-400">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-400">contactCenter</span> <span className="text-slate-500">=</span>{' '}
                <span className="text-blue-400">new</span>{' '}
                <span className="text-cyan-400">AscentRAG</span>({'{'}
              </div>

              <div className="ml-6 space-y-2 text-slate-400">
                <div>
                  <span className="text-yellow-400">endpoint</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">process.env.ASCENT_ENDPOINT</span>,
                </div>
                <div>
                  <span className="text-yellow-400">azureSearchIndex</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">'knowledge-base'</span>,
                </div>
                <div>
                  <span className="text-yellow-400">callCompletionThreshold</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-orange-400">0.8</span>,
                </div>
                <div>
                  <span className="text-yellow-400">escalationRule</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">'transfer_on_complexity'</span>,
                </div>
              </div>

              <div className="text-slate-400">
                {'}'});
              </div>

              <div className="mt-6 text-slate-400">
                <span className="text-yellow-400">contactCenter</span>
                <span className="text-slate-500">.</span>
                <span className="text-cyan-400">onInboundCall</span>(<span className="text-purple-400">async</span> ({' '}
                <span className="text-yellow-400">call</span>, <span className="text-yellow-400">context</span>{' '}
                {'}'} <span className="text-slate-500">=&gt;</span> {'{'}
              </div>

              <div className="ml-6 space-y-2 text-slate-400">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-yellow-400">response</span> <span className="text-slate-500">=</span> <span className="text-blue-400">await</span> <span className="text-yellow-400">contactCenter</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-cyan-400">processWithRAG</span>(<span className="text-yellow-400">call</span>);
                </div>
                <div>
                  <span className="text-yellow-400">call</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-cyan-400">respond</span>(<span className="text-yellow-400">response</span>);
                </div>
              </div>

              <div className="text-slate-400">
                {'}'});
              </div>

              {/* Blinking Cursor */}
              <div className="inline-block w-2 h-6 bg-blue-500 animate-pulse ml-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Why Ascent Mission Assurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="border border-neutral-800 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Zap size={28} className="text-blue-500" />
                <h3 className="text-2xl font-bold">High Precision RAG</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Azure-native architecture that queries your enterprise data without hallucination. 98.3% intent accuracy on first utterance with fully compliant answers grounded in real-time knowledge bases.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Zero hallucination LLM design</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Multi-source data fusion</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="border border-neutral-800 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Code2 size={28} className="text-blue-500" />
                <h3 className="text-2xl font-bold">Human-in-the-Loop</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Agents aren't replaced—they're enhanced. AI handles routine data collection and seamlessly transfers complex cases with full context already captured. 4 weeks to live calls.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Intelligent escalation paths</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Context-aware transfers</span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="border border-neutral-800 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Lock size={28} className="text-blue-500" />
                <h3 className="text-2xl font-bold">Enterprise Security</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Zero-data-retention architecture with end-to-end encryption. In-memory processing only. HIPAA, SOC 2 Type II, and ISO 27001 compliant. All audit logs to Azure Monitor.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>AES-256-GCM encryption</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Private VNet endpoints</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Outcomes */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Proven Results</h2>

          <div className="space-y-8">
            {/* Outcome 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-neutral-800 p-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">+40% Completion Rate</h3>
                <p className="text-slate-400 leading-relaxed">
                  Replace push-button IVR menus with natural conversation. Customers simply state their needs, eliminating drop-offs. Large health networks see completion rates jump from 58% to 98%.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 border border-neutral-800 text-center">
                <div className="text-5xl font-bold text-blue-500 mb-2">+40%</div>
                <div className="text-xs text-slate-400">vs. push-button IVR</div>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-neutral-800 p-8">
              <div className="bg-neutral-950 p-8 border border-neutral-800 text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">80%</div>
                <div className="text-xs text-slate-400">Routine calls resolved by AI</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">80% AI Completion</h3>
                <p className="text-slate-400 leading-relaxed">
                  Fully automate routine inbound operations. Reduce abandoned calls and free operators for high-value interactions. Finance and insurance customers reduce AHT by 45%.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-neutral-800 p-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">0 Peak Season Congestion</h3>
                <p className="text-slate-400 leading-relaxed">
                  AI-powered callback scheduling eliminates waiting times during peaks. Automatic intelligent routing improves NPS scores. Healthcare systems report 15+ point TNPS improvement.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 border border-neutral-800 text-center">
                <div className="text-5xl font-bold text-yellow-500 mb-2">0</div>
                <div className="text-xs text-slate-400">Peak season congestion events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-24 px-6 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Hear It Before You Commit</h2>
            <p className="text-lg text-slate-400">
              Experience Ascent Mission Assurance voice handling in real time. No demo request form.
            </p>
          </div>

          <div className="border border-neutral-800 p-12 space-y-6 bg-black">
            <Phone size={48} className="mx-auto text-blue-500" />
            <div>
              <div className="text-sm text-slate-400 mb-2">Call Our Live Demo Line</div>
              <div className="text-5xl font-bold text-blue-500 mb-2">1-866-673-0770</div>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Contract to Confident in 90 Days</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Day 30 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <div className="text-5xl font-bold text-blue-500 mb-4">30</div>
              <h3 className="text-xl font-bold">Foundation & Discovery</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Baseline call audit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Taxonomy alignment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Azure provisioning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Compliance review</span>
                </li>
              </ul>
            </div>

            {/* Day 60 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <div className="text-5xl font-bold text-blue-500 mb-4">60</div>
              <h3 className="text-xl font-bold">Integration & Go-Live</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>CRM integrations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Parallel run</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Agent training</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Live monitoring</span>
                </li>
              </ul>
            </div>

            {/* Day 90 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <div className="text-5xl font-bold text-green-500 mb-4">90</div>
              <h3 className="text-xl font-bold">Optimization & Scale</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Performance review</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Model refinement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Expansion planning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Ready to Transform Your Call Operations?</h2>
            <p className="text-slate-400">Tell us about your contact center. We'll respond within one business day.</p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-neutral-950 border border-neutral-800 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Monthly Call Volume"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
              <textarea
                placeholder="What are your contact center challenges?"
                rows="4"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-200 text-lg"
              >
                Request an Infrastructure Audit
              </button>
            </form>
          ) : (
            <div className="bg-neutral-950 border border-green-500/50 p-8 text-center space-y-4">
              <div className="text-4xl text-green-500">✓</div>
              <p className="text-white font-semibold text-lg">Thanks for reaching out</p>
              <p className="text-slate-400">We'll contact you within one business day with a tailored briefing.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 border-b border-neutral-800 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Stop Making Your Customers Wait</h2>
          <p className="text-xl text-slate-400">Transform your telephone entry point with transparent, human-quality AI.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-bold text-base hover:bg-slate-100 transition-all duration-200">
            Contact Us
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-bold text-base border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center justify-center gap-2">
            <Github size={18} />
            View Documentation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xs text-slate-500 font-mono">
            © 2026 Ascent Mission Assurance. Built on <span className="text-slate-400">Microsoft Azure</span>.
          </div>

          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Solutions
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Resources
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Blog
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Support
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
            <span className="text-blue-500">✓</span>
            <span>SOC 2 Type II Certified</span>
          </div>
        </div>
      </footer>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            height: 20%;
          }
          50% {
            opacity: 1;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
