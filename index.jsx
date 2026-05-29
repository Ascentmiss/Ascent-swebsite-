import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Lock, Zap, Github, ExternalLink, ChevronRight } from 'lucide-react';

export default function VoiceRAGMarketing() {
  const [latency, setLatency] = useState(84);
  const [throughput, setThroughput] = useState(24);

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

  return (
    <div className="bg-black text-white font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-tight">
            VOICE<span className="text-blue-500">.RAG</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              API Docs
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Architecture
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Pricing
            </a>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold hover:bg-slate-100 transition-all duration-200 border border-white">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Deploy to Azure
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
                Real-Time Voice RAG. Sub-100ms Latency on Azure.
              </h1>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                Inject enterprise data into live voice streams with native Microsoft Azure integration. 
                Stream context-aware responses at millisecond speeds using WebSocket-native pipelines and 
                Azure AI Search.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-white text-black font-semibold text-sm hover:bg-slate-100 transition-all duration-200 border border-white flex items-center gap-2">
                Get API Key
                <ArrowRight size={16} />
              </button>
              <button className="px-6 py-3 bg-transparent text-white font-semibold text-sm border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center gap-2">
                Read Docs
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column - Audio Terminal Dashboard */}
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

            {/* Status Metrics */}
            <div className="grid grid-cols-3 gap-4 text-xs font-mono">
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">STREAMING</div>
                <div className="text-xl font-bold text-blue-500">
                  {Math.round(throughput)}kbps
                </div>
              </div>
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">LATENCY</div>
                <div className="text-xl font-bold text-blue-500">
                  {Math.round(latency)}ms
                </div>
              </div>
              <div className="border border-neutral-800 p-3">
                <div className="text-slate-500 mb-2">REGION</div>
                <div className="text-xl font-bold text-blue-500">
                  US-East-2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Terminal Section */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-950 border border-neutral-800 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex items-center gap-3 text-xs font-mono">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="ml-4 flex gap-4 text-slate-500">
                <span className="text-blue-400">server.ts</span>
                <span className="text-slate-600">azure-rag-config.json</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-4 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-slate-400">
                <span className="text-blue-400">import</span> {'{'}
                <span className="text-yellow-400"> VoiceRAG, StreamConfig </span>
                {'}'} <span className="text-blue-400">from</span>{' '}
                <span className="text-green-400">'@azure/voice-rag-sdk'</span>;
              </div>

              <div className="text-slate-400">
                <span className="text-blue-400">import</span> {'{'}
                <span className="text-yellow-400"> SearchClient </span>
                {'}'} <span className="text-blue-400">from</span>{' '}
                <span className="text-green-400">'@azure/search-documents'</span>;
              </div>

              <div className="mt-6 text-slate-400">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-400">rag</span> <span className="text-slate-500">=</span>{' '}
                <span className="text-blue-400">new</span>{' '}
                <span className="text-cyan-400">VoiceRAG</span>({'{'}
              </div>

              <div className="ml-6 space-y-2 text-slate-400">
                <div>
                  <span className="text-yellow-400">endpoint</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">process.env.AZURE_VOICE_ENDPOINT</span>,
                </div>
                <div>
                  <span className="text-yellow-400">apiKey</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">process.env.AZURE_API_KEY</span>,
                </div>
                <div>
                  <span className="text-yellow-400">searchClient</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-blue-400">new</span>{' '}
                  <span className="text-cyan-400">SearchClient</span>({'{'}
                  <span className="text-yellow-400">indexName</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">'enterprise-docs'</span>
                  {'}'}{' '}
                  <span className="text-slate-500">,</span>
                </div>
                <div>
                  <span className="text-yellow-400">websocketConfig</span>
                  <span className="text-slate-500">:</span> {'{'}
                  <span className="text-yellow-400">bufferSize</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-orange-400">8192</span>,{' '}
                  <span className="text-yellow-400">reconnectMs</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-orange-400">3000</span>
                  {'}'}{' '}
                  <span className="text-slate-500">,</span>
                </div>
              </div>

              <div className="text-slate-400">
                {'}'});
              </div>

              <div className="mt-6 text-slate-400">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-400">stream</span> <span className="text-slate-500">=</span>{' '}
                <span className="text-blue-400">await</span>{' '}
                <span className="text-yellow-400">rag</span>
                <span className="text-slate-500">.</span>
                <span className="text-cyan-400">streamVoiceWithContext</span>({'{'}
              </div>

              <div className="ml-6 space-y-2 text-slate-400">
                <div>
                  <span className="text-yellow-400">audioStream</span>
                  <span className="text-slate-500">:</span> <span className="text-yellow-400">inputAudio</span>,
                </div>
                <div>
                  <span className="text-yellow-400">contextQuery</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-green-400">'billing anomalies'</span>,
                </div>
                <div>
                  <span className="text-yellow-400">maxContextTokens</span>
                  <span className="text-slate-500">:</span>{' '}
                  <span className="text-orange-400">2048</span>,
                </div>
              </div>

              <div className="text-slate-400">
                {'}'});
              </div>

              <div className="mt-6 text-slate-400">
                <span className="text-yellow-400">stream</span>
                <span className="text-slate-500">.</span>
                <span className="text-cyan-400">on</span>(<span className="text-green-400">'data'</span>,{' '}
                <span className="text-yellow-400">chunk</span>{' '}
                <span className="text-slate-500">=&gt;</span> {'{'}
              </div>

              <div className="ml-6 text-slate-400">
                <span className="text-cyan-400">console</span>
                <span className="text-slate-500">.</span>
                <span className="text-cyan-400">log</span>(<span className="text-green-400">'Streamed:'</span>,{' '}
                <span className="text-yellow-400">chunk</span>
                <span className="text-slate-500">);</span>
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

      {/* Architecture & Security Grid */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Built for Enterprise Scale</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-r border-neutral-800">
            {/* Column 1 */}
            <div className="border-r border-neutral-800 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Zap size={24} className="text-blue-500" />
                <h3 className="text-2xl font-bold">Real-Time Pipeline</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                WebSocket-native audio streaming with sub-100ms roundtrip latency. Adaptive bitrate encoding 
                for variable network conditions. Context retrieval happens in parallel with audio buffering.
              </p>
              <ul className="space-y-3 text-xs font-mono text-slate-500">
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Bidirectional WebSocket multiplexing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Opus codec @ 16kbps-32kbps adaptive</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Parallel RAG retrieval pipeline</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Zero-copy buffer optimization</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="border-r border-neutral-800 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Code2 size={24} className="text-blue-500" />
                <h3 className="text-2xl font-bold">Microsoft Native</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deep integration with Azure AI Search for semantic retrieval and Azure Cosmos DB for 
                distributed state management. Leverages Azure Cognitive Services for speech-to-text preprocessing.
              </p>
              <ul className="space-y-3 text-xs font-mono text-slate-500">
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Azure AI Search vector endpoints</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Cosmos DB multi-region replication</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Managed identity authentication</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>OpenAI GPT-4 Turbo integration</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Lock size={24} className="text-blue-500" />
                <h3 className="text-2xl font-bold">Enterprise Security</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Zero-data-retention architecture with end-to-end encryption. All audio streams are processed 
                in-memory with automatic purging. HIPAA, SOC 2 Type II, and ISO 27001 compliance certified.
              </p>
              <ul className="space-y-3 text-xs font-mono text-slate-500">
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>AES-256-GCM encryption in transit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Memory-only processing (no disk)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Private endpoint VNet injection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">→</span>
                  <span>Audit logging to Azure Monitor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Built for Real-World Applications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Use Case 1 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-500/20 border border-blue-500 text-xs text-blue-400 font-mono">1</span>
                Customer Support AI Agents
              </h3>
              <p className="text-slate-400 text-sm">
                Real-time customer service agents that pull context from knowledge bases, ticket history, 
                and company policies mid-conversation. Respond naturally with accurate, up-to-date information.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-500/20 border border-blue-500 text-xs text-blue-400 font-mono">2</span>
                Compliance & Risk Monitoring
              </h3>
              <p className="text-slate-400 text-sm">
                Voice-driven compliance verification that cross-references regulatory databases in real-time. 
                Flag anomalies, maintain audit trails, and ensure zero policy drift.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-500/20 border border-blue-500 text-xs text-blue-400 font-mono">3</span>
                Medical & Healthcare Q&A
              </h3>
              <p className="text-slate-400 text-sm">
                Clinical decision support powered by real-time EHR data retrieval. Doctors query via voice, 
                get evidence-based recommendations grounded in patient records instantly.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="border border-neutral-800 p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-500/20 border border-blue-500 text-xs text-blue-400 font-mono">4</span>
                Financial Services Voice Search
              </h3>
              <p className="text-slate-400 text-sm">
                Wealth advisors query real-time market data, client portfolios, and compliance rules via voice. 
                Responses ground in current data with millisecond latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Start Building in Minutes</h2>
            <p className="text-lg text-slate-400">
              Get your API key and deploy your first voice RAG stream to Azure in under 5 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-white text-black font-bold text-base hover:bg-slate-100 transition-all duration-200 border border-white">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-bold text-base border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center justify-center gap-2">
              <Github size={18} />
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xs text-slate-500 font-mono">
            © 2026 Voice RAG. Built on <span className="text-slate-400">Microsoft Azure</span>.
          </div>

          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors duration-200">
              API Reference
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Blog
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Status
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
            <span className="text-blue-500">✓</span>
            <span>Built on Azure</span>
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
