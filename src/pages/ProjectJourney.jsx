import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Compass,
  Layers,
  Code2,
  Globe,
  ShieldCheck,
  Terminal,
  Zap,
  Users,
  Clock,
  Shield,
  Play,
  Pause,
  RotateCcw,
  Sparkles
} from 'lucide-react';

/* ─── 5 COMBINED SDLC STAGES ─── */
const METHODOLOGY_STAGES = [
  {
    id: 'discovery',
    stepNumber: '01',
    name: 'Discovery & Scope',
    shortTitle: 'Discovery',
    tagline: 'Requirements, Wireframes & Fixed-Price Scope',
    icon: Compass,
    duration: 'Week 1 – 2',
    headline: 'Deconstruct the Problem & Eliminate Architecture Risks Early',
    description:
      'Before writing a single line of code, our technical architects map every user journey, database entity, and API integration. We produce an unambiguous Technical RFC, clickable wireframes, and a fixed-price commitment with 0% scope creep.',
    deliverables: [
      'Comprehensive Technical Specification & Architecture RFC',
      'Interactive Figma User Flows & Clickable Wireframe Prototypes',
      'Security & Compliance Matrix (SOC2, HIPAA, GDPR Data Residency)',
      'Fixed-Price SOW with Guaranteed Milestone Delivery Schedule',
    ],
    metricValue: '0%',
    metricLabel: 'Scope Creep Guarantee',
    visualType: 'discovery',
  },
  {
    id: 'design',
    stepNumber: '02',
    name: 'UI/UX & Cloud Setup',
    shortTitle: 'Design & Cloud',
    tagline: 'Figma Design System, DB Schemas & Staging',
    icon: Layers,
    duration: 'Week 2 – 3',
    headline: 'Pixel-Perfect UI Architecture & Automated Staging Cloud',
    description:
      'Our designers craft a production-ready Figma design system tailored to your brand, while DevOps engineers provision dedicated staging cloud environments (AWS/GCP), CI/CD pipelines, and database schemas before sprint one kicks off.',
    deliverables: [
      'Production Figma UI/UX Design System with Reusable Tokens',
      'Decoupled Database Schema & Query Optimization Architecture',
      'Dedicated Cloud Staging Environment (AWS / GCP / Vercel)',
      'Automated Infrastructure as Code (Terraform / Docker) Setup',
    ],
    metricValue: 'Day 1',
    metricLabel: 'Staging Environment Ready',
    visualType: 'design',
  },
  {
    id: 'engineering',
    stepNumber: '03',
    name: 'Agile Build & AI',
    shortTitle: 'Engineering & AI',
    tagline: 'Two-Week Sprints, Clean Code & Neural APIs',
    icon: Code2,
    duration: 'Week 3 – 8+',
    headline: 'Sprint-Based Execution with Continuous Staging Demos',
    description:
      'Our senior engineers code in tight 14-day agile cycles with 100% automated CI/CD. From high-throughput APIs to autonomous AI agents and vector retrieval pipelines, you receive a working staging URL every two weeks to test real features.',
    deliverables: [
      'Bi-Weekly Deployable Sprints with Live Staging Previews',
      'Clean, Modular, Typed Codebase (React 19, FastAPI, Next.js)',
      'Enterprise AI Vector RAG & Autonomous Agent Pipelines',
      'Direct Slack/WhatsApp Access to Senior Technical Leads',
    ],
    metricValue: '<20ms',
    metricLabel: 'Target API Response Time',
    visualType: 'engineering',
  },
  {
    id: 'testing',
    stepNumber: '04',
    name: 'Automated QA & Security',
    shortTitle: 'QA & Security',
    tagline: 'Unit, E2E & OWASP Security Vulnerability Audits',
    icon: ShieldCheck,
    duration: 'Week 6 – 8',
    headline: 'Rigorous Multi-Layer Quality & Security Verification',
    description:
      'Every pull request undergoes automated unit, integration, and Playwright end-to-end testing suites. We execute automated static code analysis, penetration scans, and encryption checks to guarantee 100% production readiness.',
    deliverables: [
      'Full Automated Test Coverage (Unit, Integration & E2E Suites)',
      'OWASP Top 10 Security Audit & Dependency CVE Scans',
      'Load, Stress & High-Concurrency Performance Benchmarks',
      'Data Encryption at Rest (AES-256) & In Transit (TLS 1.3)',
    ],
    metricValue: '100%',
    metricLabel: 'Test Pass & Security Audit',
    visualType: 'testing',
  },
  {
    id: 'deployment',
    stepNumber: '05',
    name: 'Global Launch & Handover',
    shortTitle: 'Launch & Handover',
    tagline: 'Zero-Downtime Rollout & 100% IP Ownership',
    icon: Globe,
    duration: 'Launch & Beyond',
    headline: 'Zero-Downtime Production Deployment & 30-Day Hypercare',
    description:
      'We orchestrate high-availability global deployment to edge CDN servers with automated scaling rules. We transfer 100% of the source code, repository credentials, and IP rights, backed by 30 days of proactive 24/7 hypercare support.',
    deliverables: [
      'Zero-Downtime Blue/Green Global Cloud Production Rollout',
      '100% GitHub Repository, Cloud Root & IP Ownership Handover',
      '24/7 APM Monitoring, Error Tracking & Real-Time Alerting',
      '30-Day Post-Launch Hypercare Warranty & Technical Onboarding',
    ],
    metricValue: '99.99%',
    metricLabel: 'Production Uptime SLA',
    visualType: 'deployment',
  },
];

/* ─── 4 ENHANCED TRUST HIGHLIGHTS ─── */
const TRUST_HIGHLIGHTS = [
  {
    icon: CheckCircle2,
    metric: '0%',
    label: 'Scope Creep',
    desc: 'Unambiguous Technical RFC and fixed-price delivery guarantee.'
  },
  {
    icon: Clock,
    metric: '14-Day',
    label: 'Staging Previews',
    desc: 'Deployable bi-weekly sprint URLs to test real features continuously.'
  },
  {
    icon: Shield,
    metric: '100%',
    label: 'Code Ownership',
    desc: 'Complete IP, repo credentials, and source code transfer from day one.'
  },
  {
    icon: Zap,
    metric: '99.99%',
    label: 'Uptime SLA',
    desc: 'High-availability multi-region cloud deployment with proactive APM.'
  }
];

/* ─── 4 INTERACTIVE TRUST PILLARS ─── */
const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: '100% IP Ownership',
    desc: 'You own all source code, models, documentation, and infrastructure credentials from day one.'
  },
  {
    icon: Terminal,
    title: 'Transparent Sprints',
    desc: 'Bi-weekly deployable previews, live staging environments, and direct access to senior engineers.'
  },
  {
    icon: Zap,
    title: 'Security-First Architecture',
    desc: 'Integrated OWASP standards, automated static code analysis, and continuous compliance checks.'
  },
  {
    icon: Users,
    title: 'Seamless Handover',
    desc: 'Detailed architecture diagrams, API specs, and post-launch onboarding for your internal team.'
  }
];

/* ─── STAGE VISUAL PREVIEWS ─── */
function StageVisual({ type }) {
  if (type === 'discovery') {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl h-full flex flex-col justify-between text-white font-mono text-xs">
        <div>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px]">
            <span className="font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Compass size={14} /> Architecture RFC v1.0 • Scope Locked
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold">
              ✓ Verified
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">System Scope & User Flows</span>
              <p className="font-bold text-white mt-1">High-Throughput Decoupled Microservices</p>
              <div className="flex items-center gap-2 mt-2 text-[10px] text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>12 Core User Journeys Mapped</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Compliance & Data Boundary</span>
              <p className="font-bold text-white mt-1">SOC-2 Type II + HIPAA + GDPR Residency</p>
              <div className="text-[10px] text-emerald-400 mt-1">✓ Zero-leakage data isolation locked</div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Guaranteed Budget & Timeline</span>
              <p className="font-bold text-white mt-1">Fixed-Price SOW • 4 Two-Week Sprint Cadence</p>
              <div className="text-[10px] text-slate-400 mt-1">Guaranteed milestone delivery schedule</div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Deliverable: Signed Technical RFC</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <Check size={13} /> $0 Budget Drift
          </span>
        </div>
      </div>
    );
  }

  if (type === 'design') {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl h-full flex flex-col justify-between text-white font-mono text-xs">
        <div>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px]">
            <span className="font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers size={14} /> UI Design System & Cloud Topology
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-500/40 text-blue-300 font-bold">
              Staging Live
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Figma Design Kit:</span>
              <span className="font-bold text-white">Production Tokens & Components</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Private Staging URL:</span>
              <span className="font-bold text-emerald-400">staging.bytesoft.app</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">CI/CD Pipeline:</span>
              <span className="font-bold text-blue-400">GitHub Actions + Docker Auto-Build</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Database Schema:</span>
              <span className="font-bold text-white">PostgreSQL Multi-AZ + Redis Cluster</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Infrastructure as Code: Terraform</span>
          <span className="text-blue-400 font-semibold">Ready for Sprint 01</span>
        </div>
      </div>
    );
  }

  if (type === 'engineering') {
    return (
      <div className="bg-black border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl h-full flex flex-col justify-between font-mono text-xs text-slate-300">
        <div>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-slate-400">live-build-stream.ts</span>
            </div>
            <span className="text-emerald-400 font-bold">● CODE COMPILING</span>
          </div>

          <div className="space-y-1.5">
            <div className="text-slate-400 flex items-center gap-2">
              <span className="text-primary font-bold">$</span>
              <span>git commit -m &quot;feat: high-throughput API endpoints & auth&quot;</span>
            </div>
            <div className="text-emerald-400 pl-4">
              ✓ FastAPI microservices & routing wired
            </div>
            <div className="text-blue-400 pl-4">
              ⚡ Scalable database connection pools configured
            </div>
            <div className="text-emerald-400 pl-4">
              ✓ Sub-20ms latency verified across endpoints
            </div>
            <div className="text-slate-400 flex items-center gap-2 pt-1">
              <span className="text-primary font-bold">$</span>
              <span>docker build -t bytesoft/core:v1.2.0 --no-cache</span>
            </div>
            <div className="text-emerald-400 pl-4">
              ✓ Multi-stage container built (312MB) — 0 security CVEs
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
          <span>Sprint 03 • Continuous Integration</span>
          <span className="text-emerald-400 font-semibold">Live Staging Refreshed</span>
        </div>
      </div>
    );
  }

  if (type === 'testing') {
    return (
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl h-full flex flex-col justify-between font-mono text-xs text-slate-300">
        <div>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px]">
            <span className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck size={14} /> Automated Test & Security Suite
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold">
              100% PASSED
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check size={13} className="stroke-[3]" /> Jest / Vitest Unit Suites:
              </span>
              <span className="font-bold">148 / 148 Passed</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check size={13} className="stroke-[3]" /> Playwright E2E User Flows:
              </span>
              <span className="font-bold">42 / 42 Passed</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check size={13} className="stroke-[3]" /> OWASP Vulnerability Scan:
              </span>
              <span className="font-bold">0 CVE Alerts</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400">
              <span className="flex items-center gap-1.5">
                <Zap size={13} /> Load Test (10,000 req/sec):
              </span>
              <span className="font-bold">0% Error Rate</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Security Gate: SOC2 & Compliance Ready</span>
          <span className="text-emerald-400 font-semibold">Production Certified</span>
        </div>
      </div>
    );
  }

  // deployment (Stage 5)
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl h-full flex flex-col justify-between font-mono text-xs text-slate-300">
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px]">
          <span className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Globe size={14} /> Production Telemetry & Handover
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            99.99% Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-xl font-bold font-mono text-emerald-400">99.99%</span>
            <span className="text-[10px] text-slate-400 block uppercase mt-0.5">Uptime SLA</span>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-xl font-bold font-mono text-blue-400">16ms</span>
            <span className="text-[10px] text-slate-400 block uppercase mt-0.5">Average TTFB</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Global Regions:</span>
            <span className="text-emerald-400 font-bold">US, EU, AP Active (Multi-Edge)</span>
          </div>
          <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Code & IP Handover:</span>
            <span className="text-primary font-bold">100% Client Ownership</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <span>30-Day Hypercare: Active</span>
        <span className="text-emerald-400 font-semibold">Zero Vendor Lock-in</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT — PROJECT JOURNEY PAGE
═══════════════════════════════════════════════ */
export default function ProjectJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [autoProgress, setAutoProgress] = useState(0);

  const currentStage = METHODOLOGY_STAGES[activeStageIndex];
  const StageIcon = currentStage.icon;

  // Continuous Auto-Next Timer Loop (5s per stage)
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = 40;
    const duration = 5000; // 5s per stage
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setAutoProgress((prev) => {
        if (prev >= 100) {
          // AUTO NEXT TO NEXT STAGE
          setActiveStageIndex((curr) => (curr + 1) % METHODOLOGY_STAGES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlay, activeStageIndex]);

  const handleSelectStage = (idx) => {
    setActiveStageIndex(idx);
    setAutoProgress(0);
  };

  const handlePrevStage = () => {
    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : METHODOLOGY_STAGES.length - 1));
    setAutoProgress(0);
  };

  const handleNextStage = () => {
    setActiveStageIndex((prev) => (prev < METHODOLOGY_STAGES.length - 1 ? prev + 1 : 0));
    setAutoProgress(0);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ─── HERO HEADER (MATCHING THEME & STYLE EXACTLY) ─── */}
      <section className="pt-12 sm:pt-16 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Engineering Lifecycle & SDLC</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            How Bytesoft Builds, Tests &{' '}
            <span className="text-primary underline decoration-blue-200 decoration-wavy underline-offset-8">
              Deploys Your Software.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From technical discovery and architecture RFC to agile 2-week sprints and zero-downtime cloud deployment — experience total transparency at every phase.
          </p>

          {/* 4 Enhanced Trust Highlights */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 text-xs text-slate-600 max-w-4xl mx-auto">
            {TRUST_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-200/60 transition-all">
                <span className="text-lg sm:text-xl font-bold font-mono text-primary">{item.metric}</span>
                <span className="font-semibold text-slate-800 text-[11px] sm:text-xs mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5-STAGE INTERACTIVE METHODOLOGY ENGINE (WITH SMOOTH AUTO-NEXT) ─── */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header with Auto-Next Control */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">
                Continuous SDLC Lifecycle
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                How We Build Your Project — Simple & Transparent
              </h2>
            </div>

            {/* Auto-Next Control Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border shrink-0 ${isAutoPlay
                  ? 'bg-blue-50 text-primary border-blue-200 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-xs'
                  }`}
              >
                {isAutoPlay ? (
                  <>
                    <Pause size={12} /> Auto-Next Active
                  </>
                ) : (
                  <>
                    <Play size={12} className="fill-current" /> Resume Auto-Next
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Auto-Next Progress Line */}
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-primary transition-all duration-75 rounded-full"
              style={{ width: `${isAutoPlay ? autoProgress : 0}%` }}
            />
          </div>

          {/* ── TOP STAGE SELECTOR TABS (5 STAGES) ── */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {METHODOLOGY_STAGES.map((stg, idx) => {
              const isSelected = idx === activeStageIndex;
              const TabIcon = stg.icon;
              return (
                <button
                  key={stg.id}
                  onClick={() => handleSelectStage(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative cursor-pointer ${isSelected
                    ? 'bg-white border-primary shadow-md ring-2 ring-primary/20 -translate-y-0.5'
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                    >
                      {stg.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{stg.duration}</span>
                  </div>
                  <div className="font-extrabold text-xs text-slate-900 flex items-center gap-1.5 truncate">
                    <TabIcon size={14} className={isSelected ? 'text-primary' : 'text-slate-500'} />
                    <span className="truncate">{stg.shortTitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── 2-COLUMN STAGE WORKSPACE (DETAILS & LIVE ARTIFACT PREVIEW) ── */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Stage Narrative, Deliverables & Metrics (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Stage Badges */}
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white uppercase tracking-wider font-mono bg-primary shadow-xs">
                      Phase {currentStage.stepNumber}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {currentStage.duration}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-primary border border-blue-200">
                      {currentStage.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {currentStage.headline}
                  </h3>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {currentStage.description}
                  </p>

                  {/* Concrete Deliverables Checklist */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Tangible Deliverables in Phase {currentStage.stepNumber}:
                    </h4>
                    <div className="space-y-2">
                      {currentStage.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                        >
                          <span className="w-4 h-4 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Metric & Prev/Next Controls */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-black font-mono text-primary">
                      {currentStage.metricValue}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider leading-tight">
                      {currentStage.metricLabel}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevStage}
                      className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
                      title="Previous Phase"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={handleNextStage}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-blue-700 transition-all shadow-xs active:scale-95 cursor-pointer"
                    >
                      <span>Next Phase</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage Artifact Preview (5 cols) */}
              <div className="lg:col-span-5 min-h-[320px]">
                <StageVisual type={currentStage.visualType} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CLIENTS TRUST OUR PROCESS (INTERACTIVE CLICKABLE CARDS) ─── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">
              Guaranteed Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Clients Trust Our Process
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every software product we deliver adheres to rigorous engineering discipline, transparent sprint cadences, and total client ownership.
            </p>
          </div>

          {/* Interactive Clickable Trust Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to="/contact"
                  className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-blue-300 hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA SECTION ─── */}
      <section className="py-14 md:py-20 bg-white">
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
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-blue-800 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
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
