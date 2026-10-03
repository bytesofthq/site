import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Sparkles,
  Compass,
  Layers,
  Code2,
  Globe,
  ShieldCheck,
  Terminal,
  Cpu,
  Database,
  Users,
  Zap,
  BarChart3,
  Bot,
  ShoppingBag,
  HeartPulse,
  Clock,
  FileText,
  ChevronRight,
} from 'lucide-react';

/* ─── 4 CORE METHODOLOGY STAGES ─── */
const METHODOLOGY_STAGES = [
  {
    id: 'discovery',
    stepNumber: '01',
    name: 'Discovery & Strategy',
    shortTitle: 'Discovery',
    tagline: 'Scope, Requirements & Technical RFC',
    icon: Compass,
    duration: 'Week 1 – 2',
    headline: 'Deconstruct the Problem & Eliminate Architecture Risks Early',
    description:
      'Before writing a single line of code, our lead engineers dissect your product requirements, user personas, and data models. We establish strict technical boundaries, identify potential bottlenecks, and produce an unambiguous roadmap.',
    deliverables: [
      'Comprehensive Technical Specification & Architecture RFC',
      'Data Flow Diagrams & Third-Party Integration Matrix',
      'Security, Privacy & Regulatory Compliance Scope (SOC2, HIPAA, GDPR)',
      'Milestone-Driven MVP & Full-Scale Release Schedule',
    ],
    metricValue: '100%',
    metricLabel: 'Architecture Alignment Before Coding',
    visualType: 'discovery',
  },
  {
    id: 'architecture',
    stepNumber: '02',
    name: 'System Architecture & Stack',
    shortTitle: 'Architecture',
    tagline: 'Blueprints, Data Schemas & Cloud Topology',
    icon: Layers,
    duration: 'Week 2 – 3',
    headline: 'Design Decoupled, Fault-Tolerant System Topologies',
    description:
      'We select the optimal technology stack tailored precisely to your concurrency, latency, and scalability requirements. From asynchronous microservices and edge databases to AI vector retrieval pipelines, every component is chosen intentionally.',
    deliverables: [
      'Decoupled Microservice & Event-Driven Topology Map',
      'Relational / NoSQL Database Schema & Query Optimization Plan',
      'Vector Embedding & Retrieval Pipeline Blueprint (for AI projects)',
      'Infrastructure as Code (Terraform / Docker) Foundation',
    ],
    metricValue: '<30ms',
    metricLabel: 'Target API Latency Threshold',
    visualType: 'architecture',
  },
  {
    id: 'engineering',
    stepNumber: '03',
    name: 'Agile Engineering & AI',
    shortTitle: 'Engineering',
    tagline: 'Two-Week Sprints, Clean Code & Testing',
    icon: Code2,
    duration: 'Week 3 – 8+',
    headline: 'Sprint-Based Execution with Continuous Integration',
    description:
      'Our senior engineers write clean, typed, modular code backed by strict automated testing suites and CI/CD pipelines. You get deployable staging builds every two weeks with full visibility into the development repository.',
    deliverables: [
      'Bi-Weekly Deployable Sprints with Live Staging Demos',
      'Unit, Integration & End-to-End Automated Test Coverage',
      'Automated Vulnerability, Type-Check & Code Quality Audits',
      'Fine-Tuning, Prompt Engineering & Model Evaluation Suites',
    ],
    metricValue: '95%+',
    metricLabel: 'Automated Test Coverage & CI Pass Rate',
    visualType: 'engineering',
  },
  {
    id: 'deployment',
    stepNumber: '04',
    name: 'Cloud Deployment & Scaling',
    shortTitle: 'Deployment',
    tagline: 'Zero-Downtime Rollout & APM Observability',
    icon: Globe,
    duration: 'Week 8 – Launch',
    headline: 'Zero-Downtime Production Rollout with 24/7 Telemetry',
    description:
      'We orchestrate high-availability deployment to global cloud providers (AWS, GCP, Vercel Edge). We configure multi-zone failover, automated scaling rules, and telemetry monitoring, followed by complete IP handover to your team.',
    deliverables: [
      'Multi-Zone Cloud Orchestration with Auto-Scaling Policies',
      '24/7 APM Monitoring, Health Pings & Real-Time Alerting',
      'Complete Source Code Ownership, Git History & IP Transfer',
      'Comprehensive Developer Documentation & Team Handover',
    ],
    metricValue: '99.99%',
    metricLabel: 'Guaranteed Production Availability SLA',
    visualType: 'deployment',
  },
];

/* ─── ARCHETYPE EXAMPLES ─── */
const BLUEPRINT_EXAMPLES = [
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI Platform',
    icon: Bot,
    category: 'Intelligent Technology',
    color: '#2563eb',
    desc: 'Autonomous multi-agent orchestration with enterprise vector database & private RAG.',
    stack: ['Python', 'LangGraph', 'Pinecone', 'FastAPI', 'React', 'GCP'],
    outcome: '34ms latency, SOC2 compliant, 4.2k queries/min',
  },
  {
    id: 'ecommerce',
    title: 'High-Concurrency E-Commerce',
    icon: ShoppingBag,
    category: 'Digital Engineering',
    color: '#ea580c',
    desc: 'Multi-vendor digital storefront with live inventory sync and sub-second checkout.',
    stack: ['Next.js 15', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    outcome: '18ms TTFB, 99.99% availability, PCI-DSS verified',
  },
  {
    id: 'healthcare',
    title: 'Healthcare SaaS Platform',
    icon: HeartPulse,
    category: 'Regulated Systems',
    color: '#0d9488',
    desc: 'Patient portal with AI clinical triage, encrypted EHR records, and strict HIPAA compliance.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS ECS'],
    outcome: 'Zero-retention triage, AES-256 encrypted, 100% HIPAA audit',
  },
];

/* ─── VISUAL CARD PREVIEWS ─── */
function StageVisual({ type, stage }) {
  if (type === 'discovery') {
    return (
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Technical RFC Preview
            </span>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-primary border border-blue-100">
              Approved
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="text-slate-400 block text-[10px] uppercase">System Scope</span>
              <p className="font-semibold text-slate-900 mt-0.5">High-Throughput Microservice Architecture</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="text-slate-400 block text-[10px] uppercase">Compliance Matrix</span>
              <p className="font-semibold text-slate-900 mt-0.5">SOC2 Type II + GDPR Data Residency Validated</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
              <span className="text-slate-400 block text-[10px] uppercase">Milestone Targets</span>
              <p className="font-semibold text-slate-900 mt-0.5">4 Two-Week Sprints → Staging Release on Day 45</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Deliverable: Architecture RFC v1.0</span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <Check size={13} className="stroke-[3]" /> Scope Locked
          </span>
        </div>
      </div>
    );
  }

  if (type === 'architecture') {
    return (
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              System Topology Spec
            </span>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
              Decoupled
            </span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/60">
              <span className="text-slate-500">Edge Gateway</span>
              <span className="font-bold text-slate-800">Cloudflare Workers / NGINX</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/60">
              <span className="text-slate-500">Application Layer</span>
              <span className="font-bold text-slate-800">FastAPI / Node.js Microservices</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/60">
              <span className="text-slate-500">Intelligent Layer</span>
              <span className="font-bold text-primary">LangGraph + Pinecone Vector Index</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/60">
              <span className="text-slate-500">Persistent State</span>
              <span className="font-bold text-slate-800">PostgreSQL (Multi-AZ) + Redis</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Infrastructure as Code: Terraform</span>
          <span className="text-blue-600 font-semibold">Zero Single Point of Failure</span>
        </div>
      </div>
    );
  }

  if (type === 'engineering') {
    return (
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md h-full flex flex-col justify-between font-mono text-xs text-slate-300">
        <div>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-slate-400 text-[11px] ml-1">ci-cd-pipeline.yml</span>
            </div>
            <span className="text-emerald-400 text-[11px] font-bold">ALL CHECKS PASSED</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <Check size={14} className="stroke-[3]" />
              <span>TypeScript strict typecheck: 0 errors</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Check size={14} className="stroke-[3]" />
              <span>ESLint & Prettier code standard: verified</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Check size={14} className="stroke-[3]" />
              <span>Jest & Vitest test suites: 142/142 passed</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Check size={14} className="stroke-[3]" />
              <span>OWASP Dependency vulnerability scan: 0 alerts</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 pt-1">
              <span>❯ Staging preview deployed to edge branch</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Sprint 03 • Release Candidate</span>
          <span className="text-emerald-400 font-semibold">Ready for Staging Review</span>
        </div>
      </div>
    );
  }

  // deployment
  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Production Telemetry
          </span>
          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-3 bg-white rounded-xl border border-slate-200/60 text-center">
            <span className="text-xl font-bold font-mono text-emerald-600">99.99%</span>
            <span className="text-[10px] font-mono text-slate-500 block uppercase mt-0.5">Uptime SLA</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200/60 text-center">
            <span className="text-xl font-bold font-mono text-primary">18ms</span>
            <span className="text-[10px] font-mono text-slate-500 block uppercase mt-0.5">Average TTFB</span>
          </div>
        </div>

        <div className="space-y-2 font-mono text-xs">
          <div className="p-2.5 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between">
            <span className="text-slate-500">Multi-Region Edge</span>
            <span className="font-semibold text-slate-800">US, EU, AP Active</span>
          </div>
          <div className="p-2.5 bg-white rounded-xl border border-slate-200/60 flex items-center justify-between">
            <span className="text-slate-500">IP Transfer</span>
            <span className="font-semibold text-emerald-600">100% Client Repo Access</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>Handover: Docs, Keys & Repos</span>
        <span className="text-emerald-600 font-semibold">Production Certified</span>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function ProjectJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = METHODOLOGY_STAGES[activeStageIndex];
  const StepIcon = currentStage.icon;

  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      {/* ─── HERO SECTION ─── */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={13} className="text-primary" />
            How Bytesoft Builds
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            From Concept to Production.{' '}
            <span className="text-primary underline decoration-blue-200 decoration-wavy underline-offset-8">
              Engineered for Scale.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            We follow a disciplined, transparent 4-stage engineering lifecycle. No guesswork, no black boxes — just high-velocity execution, clean architecture, and total intellectual property ownership.
          </p>
        </div>
      </section>

      {/* ─── INTERACTIVE 4-STEP METHODOLOGY SECTION ─── */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stepper Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {METHODOLOGY_STAGES.map((stage, idx) => {
              const TabIcon = stage.icon;
              const isActive = idx === activeStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-white border-primary shadow-sm ring-2 ring-primary/10 -translate-y-0.5'
                      : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isActive ? 'text-primary' : 'text-slate-400'
                      }`}
                    >
                      {stage.stepNumber}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-blue-50 text-primary' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <TabIcon size={16} />
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isActive ? 'text-slate-900' : 'text-slate-600'
                      }`}
                    >
                      {stage.shortTitle}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5 truncate">
                      {stage.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Details & Deliverables */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-primary">
                      Stage {currentStage.stepNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock size={12} /> {currentStage.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {currentStage.headline}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                    {currentStage.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3.5">
                      Key Engineering Deliverables:
                    </h4>
                    <div className="space-y-2.5">
                      {currentStage.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} className="stroke-[3]" />
                          </span>
                          <span className="text-sm font-medium text-slate-800 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stage Navigation Footer */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveStageIndex(prev => Math.max(0, prev - 1))}
                      disabled={activeStageIndex === 0}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <ArrowLeft size={13} /> Previous
                    </button>
                    <button
                      onClick={() =>
                        setActiveStageIndex(prev =>
                          Math.min(METHODOLOGY_STAGES.length - 1, prev + 1)
                        )
                      }
                      disabled={activeStageIndex === METHODOLOGY_STAGES.length - 1}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white hover:bg-blue-900 text-xs font-semibold transition-colors disabled:opacity-30 disabled:pointer-events-none"
                    >
                      Next: {METHODOLOGY_STAGES[Math.min(METHODOLOGY_STAGES.length - 1, activeStageIndex + 1)].shortTitle} <ArrowRight size={13} />
                    </button>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Stage {activeStageIndex + 1} of {METHODOLOGY_STAGES.length}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage Artifact Preview */}
              <div className="lg:col-span-5">
                <StageVisual type={currentStage.visualType} stage={currentStage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REAL-WORLD ARCHITECTURE BLUEPRINTS ─── */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">
              Industry Blueprints
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
              How This Methodology Applies in Practice
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Whether building an enterprise AI orchestrator or a high-concurrency commerce marketplace, our engineering lifecycle ensures predictable, high-performance delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLUEPRINT_EXAMPLES.map(ex => {
              const ExIcon = ex.icon;
              return (
                <div
                  key={ex.id}
                  className="bg-[#f6f8fc] border border-slate-200/80 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `${ex.color}15`, color: ex.color }}
                      >
                        <ExIcon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200/70">
                        {ex.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">{ex.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{ex.desc}</p>

                    <div className="mt-4 pt-4 border-t border-slate-200/60">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Core Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {ex.stack.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-white border border-slate-200/80 rounded text-[10px] font-mono text-slate-700 font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                    <span>{ex.outcome}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CLIENTS TRUST OUR PROCESS ─── */}
      <section className="py-12 md:py-16 bg-[#f6f8fc] border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">100% IP Ownership</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                You own all source code, models, documentation, and infrastructure credentials from day one.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3">
                <Terminal size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Transparent Sprints</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Bi-weekly deployable previews, live staging environments, and direct access to senior engineers.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3">
                <Zap size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Security-First Architecture</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Integrated OWASP standards, automated static code analysis, and continuous compliance checks.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Seamless Handover</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Detailed architecture diagrams, API specs, and post-launch onboarding for your internal team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA SECTION ─── */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">
            Start Your Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Have an Idea or Architecture Challenge?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Let&apos;s schedule a technical discovery call. We&apos;ll evaluate your system requirements, review technical feasibility, and sketch out a preliminary roadmap.
          </p>

          <div className="flex items-center justify-center gap-3.5 flex-wrap mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-blue-900 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Book Strategy Consultation <ArrowRight size={15} />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-2xs"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
