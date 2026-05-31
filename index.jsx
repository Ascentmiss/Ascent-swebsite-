import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Lock, Zap, Github, ExternalLink, ChevronRight, Phone, Stethoscope, TrendingUp, Clock } from 'lucide-react';

export default function BreathedPlatform() {
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
            BREATHED<span className="text-blue-500">.PLATFORM</span>
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
                Workflows that breathe.
              </h1>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                The Voice RAG API for Enterprise Workflows. Deploy autonomous voice agents to run your medical scheduling, automated collections, and 24/7 administrative pipelines—completely connected to your live data.
              </p>
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              <button className="px-6 py-3 bg-white text-black font-semibold text-sm hover:bg-slate-100 transition-all duration-200 border border-white flex items-center gap-2">
                Request Demo
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
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>

          {/* Right Column - Voice Agent Metrics Dashboard */}
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
                <div className="text-slate-500 mb-2">AGENTS ACTIVE</div>
                <div className="text-xl font-bold text-blue-500">24</div>
              </div>
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">AVG LATENCY</div>
                <div className="text-xl font-bold text-blue-500">
                  {Math.round(latency)}ms
                </div>
              </div>
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">SUCCESS RATE</div>
                <div className="text-xl font-bold text-green-500">98%</div>
              </div>
            </div>

            {/* Status Line */}
            <div className="border border-neutral-800 p-3 text-xs">
              <div className="text-slate-500 mb-1">SYSTEM STATUS</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-slate-300">All regions operational · Enterprise infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Band */}
      <section className="py-12 px-6 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
            <div className="text-xs text-slate-400">Call accuracy with RAG</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">&lt;100ms</div>
            <div className="text-xs text-slate-400">Real-time data retrieval</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
            <div className="text-xs text-slate-400">Autonomous operations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">$0</div>
            <div className="text-xs text-slate-400">Staff overhead</div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">What Breathed Does</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1: Real-Time Voice RAG API */}
            <div className="border border-neutral-800 p-8 space-y-6 bg-neutral-950/50">
              <div className="flex items-center gap-3">
                <Phone size={32} className="text-blue-500" />
                <h3 className="text-2xl font-bold">Real-Time Voice RAG API</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Standard voice AI sounds robotic and can't access real data during a phone call. Breathed's Voice RAG engine allows an AI agent to talk on the phone with a human and instantly pull up information from your internal databases mid-conversation.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Seamless mid-call data retrieval</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Sub-100ms response time</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Zero hallucination answers</span>
                </div>
              </div>
            </div>

            {/* Feature 2: Medical Operations */}
            <div className="border border-neutral-800 p-8 space-y-6 bg-neutral-950/50">
              <div className="flex items-center gap-3">
                <Stethoscope size={32} className="text-green-500" />
                <h3 className="text-2xl font-bold">🩺 Medical Operations</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Breathed handles incoming patient calls, automatically verifies HIPAA requirements, searches patient records using the RAG API, routes the call perfectly, and logs appointment updates directly into the hospital's database.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-green-500">→</span>
                  <span>HIPAA-verified patient data access</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">→</span>
                  <span>Automatic appointment scheduling</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">→</span>
                  <span>Intelligent call routing</span>
                </div>
              </div>
            </div>

            {/* Feature 3: Collections & AR */}
            <div className="border border-neutral-800 p-8 space-y-6 bg-neutral-950/50">
              <div className="flex items-center gap-3">
                <TrendingUp size={32} className="text-yellow-500" />
                <h3 className="text-2xl font-bold">💸 Collections Pipeline</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automates outbound accounting phone pipelines. Calls clients with overdue balances, answers complex questions about their billing histories using live financial database lookups, and processes card payments securely over the phone.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-yellow-500">→</span>
                  <span>Automated AR calling</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-yellow-500">→</span>
                  <span>Secure payment processing</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-yellow-500">→</span>
                  <span>Real-time billing lookups</span>
                </div>
              </div>
            </div>

            {/* Feature 4: Admin Automation */}
            <div className="border border-neutral-800 p-8 space-y-6 bg-neutral-950/50">
              <div className="flex items-center gap-3">
                <Clock size={32} className="text-purple-500" />
                <h3 className="text-2xl font-bold">📝 Admin Automation</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Takes over routine clerical data entry. When an administrative event happens (like a form submission or a completed call), Breathed triggers background automated workflows to update software systems without human intervention.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Workflow automation</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Data entry elimination</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-500">→</span>
                  <span>System integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 After-Hours Section */}
      <section className="py-24 px-6 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">🌙 24/7 After-Hours Intelligence</h2>
          
          <div className="bg-black border border-neutral-800 overflow-hidden">
            {/* Section Header */}
            <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4">
              <h3 className="text-lg font-semibold text-blue-400">Never Miss a Lead</h3>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <p className="text-slate-400 leading-relaxed text-lg">
                Ensures a business never misses a lead or an emergency. When clients call late at night, Breathed's conversational engine:
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">▸</span>
                  <span>Processes their queries in real-time</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">▸</span>
                  <span>Triages the urgency of each call</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">▸</span>
                  <span>Logs actionable messages for morning staff</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">▸</span>
                  <span>Handles emergency escalations 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Integration Example */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Enterprise Integration</h2>
          
          <div className="bg-neutral-950 border border-neutral-800 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex items-center gap-3 text-xs font-mono">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="ml-4 flex gap-4 text-slate-500">
                <span className="text-blue-400">voice-agent.ts</span>
                <span className="text-slate-600">config.json</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-4 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-slate-400">
                <span className="text-blue-400">import</span> {'{'}
                <span className="text-yellow-400"> BreathedAgent, VoiceRAG </span>
                {'}'} <span className="text-blue-400">from</span>{' '}
                <span className="text-green-400">'@breathed/voice-platform'</span>;
              </div>

              <div className="text-slate-400">
                <span className="text-blue-400">import</span> {'{'}
                <span className="text-yellow-400"> DataConnector </span>
                {'}'} <span className="text-blue-400">from</span>{' '}
                <span className="text-green-400">'@breathed/enterprise-data'</span>;
              </div>

              <div className="mt-6 text-slate-400">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-400">voiceAgent</span> <span className="text-slate-500">=</span>{' '}
                <span className="text-blue-400">new</span>{' '}
                <span className="text-cyan-400">BreathedAgent</span>({'{'}
              </div>

              <div className="ml-6 space-y-2 text-slate-400">
                <div>
                  <span className="text-yellow-400">ragEngine</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-blue-400">new</span>{' '}
                  <span className="text-cyan-400">VoiceRAG</span>(),
                </div>
                <div>
                  <span className="text-yellow-400">dataConnector</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">'live-crm-connection'</span>,
                </div>
                <div>
                  <span className="text-yellow-400">securityLevel</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">'enterprise'</span>,
                </div>
                <div>
                  <span className="text-yellow-400">compliance</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">['HIPAA', 'SOC2']</span>,
                </div>
              </div>

              <div className="text-slate-400">
                {'}'});
              </div>

              <div className="mt-6 text-slate-400">
                <span className="text-yellow-400">voiceAgent</span>
                <span className="text-slate-500">.</span>
                <span className="text-cyan-400">onInboundCall</span>(<span className="text-purple-400">async</span> ({' '}
                <span className="text-yellow-400">call</span> {'}'} <span className="text-slate-500">=&gt;</span> {'{'}
              </div>

              <div className="ml-6 space-y-2 text-slate-400">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-yellow-400">response</span> <span className="text-slate-500">=</span> <span className="text-blue-400">await</span> voiceAgent
                  <span className="text-slate-500">.</span>
                  <span className="text-cyan-400">processCall</span>(<span className="text-yellow-400">call</span>);
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
          <h2 className="text-5xl font-bold mb-16 text-center">Enterprise Advantages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="border border-neutral-800 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Zap size={28} className="text-blue-500" />
                <h3 className="text-2xl font-bold">High-Precision RAG</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enterprise data architecture that queries your internal databases without hallucination. 98% accuracy with fully compliant answers grounded in real-time knowledge.
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
                <h3 className="text-2xl font-bold">Autonomous Operations</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Run your entire administrative pipeline 24/7 without human intervention. AI handles routine tasks seamlessly while intelligent escalation preserves human oversight where needed.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Fully autonomous workflows</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Smart escalation & routing</span>
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
                Zero-data-retention architecture with end-to-end encryption. HIPAA, SOC 2 Type II, and ISO 27001 compliant. All audit logs to enterprise monitoring.
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
                <h3 className="text-2xl font-bold mb-4">Replace Manual Staff</h3>
                <p className="text-slate-400 leading-relaxed">
                  Eliminate manual administrative overhead. Breathed runs your entire pipeline autonomously—medical scheduling, collections calls, data entry—all without human intervention. Companies replace 3-5 FTEs of administrative work per agent deployed.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 border border-neutral-800 text-center">
                <div className="text-5xl font-bold text-blue-500 mb-2">3-5 FTE</div>
                <div className="text-xs text-slate-400">Equivalent automation per agent</div>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-neutral-800 p-8">
              <div className="bg-neutral-950 p-8 border border-neutral-800 text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">$0</div>
                <div className="text-xs text-slate-400">Overhead per additional call</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Infinite Scale</h3>
                <p className="text-slate-400 leading-relaxed">
                  Scale operations infinitely without hiring. Each additional 1,000 calls/month costs near $0 in operational overhead. No more hiring bottleneck for seasonal spikes or business growth.
                </p>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-neutral-800 p-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">24/7 Operations</h3>
                <p className="text-slate-400 leading-relaxed">
                  Your business never closes. Medical offices handle after-hours calls. Collections run 24/7. Admin tasks complete overnight. No more emergency on-call staff or missed revenue opportunities.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 border border-neutral-800 text-center">
                <div className="text-5xl font-bold text-yellow-500 mb-2">24/7</div>
                <div className="text-xs text-slate-400">Autonomous operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-24 px-6 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Experience Breathed Live</h2>
            <p className="text-lg text-slate-400">
              Call our autonomous voice line to experience the platform in action.
            </p>
          </div>

          <div className="border border-neutral-800 p-12 space-y-6 bg-black">
            <Phone size={48} className="mx-auto text-blue-500" />
            <div>
              <div className="text-sm text-slate-400 mb-2">Call Our Live Demo Voice Agent</div>
              <div className="text-5xl font-bold text-blue-500 mb-2">(Coming Soon)</div>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                <span>Launching Q3 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">From Contract to Autonomous in 60 Days</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Week 1-2 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <div className="text-3xl font-bold text-blue-500 mb-4">Week 1-2</div>
              <h3 className="text-xl font-bold">Discovery & Setup</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Requirements gathering</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Data source integration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Compliance review</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Infrastructure provisioning</span>
                </li>
              </ul>
            </div>

            {/* Week 3-4 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <div className="text-3xl font-bold text-blue-500 mb-4">Week 3-4</div>
              <h3 className="text-xl font-bold">Training & Testing</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Model training</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Workflow testing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Quality assurance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Staff training</span>
                </li>
              </ul>
            </div>

            {/* Week 5-8 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <div className="text-3xl font-bold text-green-500 mb-4">Week 5-8</div>
              <h3 className="text-xl font-bold">Go-Live & Scale</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Soft launch</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Monitoring & optimization</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Performance tuning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  <span>Full production scale</span>
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
            <h2 className="text-4xl font-bold">Ready to Breathe Again?</h2>
            <p className="text-slate-400">Let us show you how Breathed transforms your operations. We'll respond within 2 hours.</p>
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
              <select
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-blue-500 focus:outline-none transition-colors"
                required
              >
                <option value="">Select Use Case</option>
                <option value="medical">Medical Office Operations</option>
                <option value="collections">Accounts Receivable & Collections</option>
                <option value="admin">Admin Tasks & Data Mapping</option>
                <option value="afterhours">24/7 After-Hours Messaging</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your operational challenges..."
                rows="4"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-200 text-lg"
              >
                Request a Demo
              </button>
            </form>
          ) : (
            <div className="bg-neutral-950 border border-green-500/50 p-8 text-center space-y-4">
              <div className="text-4xl text-green-500">✓</div>
              <p className="text-white font-semibold text-lg">Thanks for reaching out</p>
              <p className="text-slate-400">Our team will contact you within 2 hours to schedule your demo.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 border-b border-neutral-800 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Stop Running Your Business Manually</h2>
          <p className="text-xl text-slate-400">Breathed replaces manual work with intelligent, autonomous workflows.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-bold text-base hover:bg-slate-100 transition-all duration-200">
            Request Demo
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-bold text-base border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center justify-center gap-2">
            <Github size={18} />
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xs text-slate-500 font-mono">
            © 2026 Breathed. The Voice RAG API for Enterprise Workflows.
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
            <span>HIPAA & SOC 2 Compliant</span>
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
