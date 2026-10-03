import { useState, useEffect } from 'react';
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
  Clock,
  Zap,
  Users,
  Bot,
  ShoppingBag,
  HeartPulse,
  Play,
  Pause,
  RotateCcw,
  GitBranch,
  Cpu,
  Server,
  Activity,
  Search,
  Lock,
  FileText,
} from 'lucide-react';

/* ─── 4 CORE METHODOLOGY STAGES ─── */
const METHODOLOGY_STAGES = [
  {
    id: 'discovery',
    stepNumber: '01',
    name: 'Plan & Scope',
    shortName: 'Plan',
    duration: 'Weeks 1 – 2',
    icon: Compass,
    headline: 'Plan & Architect',
    badge: 'Scope Locked',
    description: 'We map user flows and lock down scope before writing code.',
    metrics: [
      { label: 'Scope Creep', value: '0% Guaranteed' },
      { label: 'Budget Risk', value: '$0 Fixed Price' },
    ],
    fileTab: 'user-journey.fig',
    stageTag: 'Scope Locked',
    footerLeft: '2-Week Milestones Scheduled',
    footerRight: '0 Budget Surprises',
    guaranteeText: 'Fixed-Price Agreement',
    guaranteeBadge: '100% Scope Lock',
  },
  {
    id: 'architecture',
    stepNumber: '02',
    name: 'Design & Setup',
    shortName: 'Design',
    duration: 'Weeks 2 – 3',
    icon: Layers,
    headline: 'Design & Cloud Setup',
    badge: 'Cloud Ready',
    description: 'Interactive UI screens and auto-scaling cloud infrastructure built for speed.',
    metrics: [
      { label: 'Global Latency', value: '<15ms Edge' },
      { label: 'Cloud Architecture', value: 'Next.js + Postgres' },
    ],
    fileTab: 'cloud-topology.mesh',
    stageTag: 'Cloud Ready',
    footerLeft: 'Zero Cold-Start Routing',
    footerRight: 'TLS 1.3 Encrypted',
    guaranteeText: 'Auto-Scaling Infrastructure',
    guaranteeBadge: 'Multi-Region Mesh',
  },
  {
    id: 'engineering',
    stepNumber: '03',
    name: 'Build & Test',
    shortName: 'Build',
    duration: 'Weeks 3 – 8+',
    icon: Code2,
    headline: 'Build in 2-Week Sprints',
    badge: 'Tests Passing',
    description: 'Rapid 14-day agile cycles with working staging previews and automated tests.',
    metrics: [
      { label: 'Test Coverage', value: '100% Automated' },
      { label: 'Client Preview', value: 'Every 14 Days' },
    ],
    fileTab: 'ci-cd.pipeline',
    stageTag: '48/48 Passing',
    footerLeft: 'Continuous Automated QA',
    footerRight: '0 Vulnerabilities',
    guaranteeText: 'Working Demo Every 14 Days',
    guaranteeBadge: 'Direct Engineer Access',
  },
  {
    id: 'deployment',
    stepNumber: '04',
    name: 'Launch & Support',
    shortName: 'Launch',
    duration: 'Launch & Beyond',
    icon: Globe,
    headline: 'Launch & Full Ownership',
    badge: 'Production Live',
    description: 'Zero-downtime global rollout with complete source code and IP transfer.',
    metrics: [
      { label: 'Uptime SLA', value: '99.99% Online' },
      { label: 'Code Ownership', value: '100% Handover' },
    ],
    fileTab: 'production.online',
    stageTag: '99.99% Online',
    footerLeft: 'Full Source Code & License Handover',
    footerRight: '99.99% Uptime SLA',
    guaranteeText: '100% Source Code & IP Handover',
    guaranteeBadge: 'Zero Lock-In',
  },
];

/* ─── REAL-WORLD PROJECT EXAMPLES ─── */
const BLUEPRINT_EXAMPLES = [
  {
    id: 'enterprise-ai',
    title: 'Smart AI Business Platform',
    shortTitle: 'AI Platform',
    icon: Bot,
    category: 'AI & Automation',
    color: '#2563eb',
    desc: 'Lets your team search internal documents, summarize reports, and automate daily tasks using private AI.',
    features: ['Private AI Chatbot', 'Document Search', 'Fast Dashboard', 'Secure Cloud'],
    outcome: 'Saves 15+ hours per week per employee',
    demoUrl: 'internal.byteai.corp/search',
  },
  {
    id: 'ecommerce',
    title: 'Modern Online Store',
    shortTitle: 'E-Commerce',
    icon: ShoppingBag,
    category: 'E-Commerce',
    color: '#ea580c',
    desc: 'A lightning-fast online shop with instant search, mobile checkout, and live inventory sync.',
    features: ['One-Click Checkout', 'Apple Pay & Stripe', 'Live Inventory', 'Instant Search'],
    outcome: 'Loads in under 1 second, boosting conversions',
    demoUrl: 'checkout.aerobrand.com',
  },
  {
    id: 'healthcare',
    title: 'Patient & Clinic Portal',
    shortTitle: 'Healthcare',
    icon: HeartPulse,
    category: 'Healthcare & Apps',
    color: '#0d9488',
    desc: 'An easy portal for booking appointments, viewing medical records, and messaging doctors securely.',
    features: ['Online Booking', 'Encrypted Records', 'Doctor Messaging', 'Mobile Friendly'],
    outcome: 'Simple for patients, 100% private & secure',
    demoUrl: 'care.cityclinic.org/telehealth',
  },
];

const STAGE_DURATION_MS = 6500; // 6.5s per stage in auto-tour

export default function ProjectJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Real-world product example simulation state
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [productStep, setProductStep] = useState(1);
  const [isProductPlaying, setIsProductPlaying] = useState(true);

  const currentStage = METHODOLOGY_STAGES[activeStageIndex];
  const activeProduct = BLUEPRINT_EXAMPLES[activeProductIndex];

  // Auto-play progress timer for methodology (steady, consistent speed across all stages)
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const intervalTime = 50; // update smoothly every 50ms
    const stepIncrement = (intervalTime / STAGE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          setActiveStageIndex(curr => (curr + 1) % METHODOLOGY_STAGES.length);
          return 0;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered]);

  // Auto-play timer for product simulation steps (2.4s per step)
  useEffect(() => {
    if (!isProductPlaying) return;

    const timer = setInterval(() => {
      setProductStep(prev => (prev % 3) + 1);
    }, 2400);

    return () => clearInterval(timer);
  }, [isProductPlaying, activeProductIndex]);

  const handleStageSelect = idx => {
    setActiveStageIndex(idx);
    setProgress(0);
  };

  const handleProductSelect = idx => {
    setActiveProductIndex(idx);
    setProductStep(1);
  };

  const renderProductSimulation = (id, step) => {
    if (id === 'enterprise-ai') {
      return (
        <div className="space-y-3">
          {/* Search Bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200/90 text-xs">
            <Search size={14} className="text-slate-400 shrink-0" />
            <span className="text-slate-700 font-medium truncate">
              {step === 1 ? 'Find renewal dates and liability caps in vendor SLAs...' : 'Find renewal dates and liability caps in vendor SLAs'}
            </span>
            <button className="ml-auto px-2.5 py-1 rounded bg-blue-600 text-white font-semibold text-[10px] shrink-0">
              Search
            </button>
          </div>

          {/* Real-time vector retrieval banner */}
          <div className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-md bg-blue-50/80 border border-blue-100 text-blue-800 transition-all duration-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Zap size={12} className="text-blue-600" />
              {step === 1 ? 'Querying private document vector index...' : '42 internal PDFs scanned in 110ms'}
            </span>
            <span className="font-mono text-[10px] text-blue-600">
              {step === 1 ? 'Scanning...' : 'Match: 99.4%'}
            </span>
          </div>

          {/* Simulated AI Output */}
          <div
            className={`p-3.5 rounded-xl border transition-all duration-300 ${
              step === 3
                ? 'bg-white border-blue-200/80 shadow-xs opacity-100'
                : step === 2
                ? 'bg-blue-50/40 border-blue-200/60 opacity-90'
                : 'bg-slate-50/50 border-slate-200/60 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <Bot size={13} className="text-blue-600" />
                <span className="text-[11px] font-bold text-slate-800">Private AI Assistant</span>
              </div>
              <span className={`text-[10px] font-medium flex items-center gap-1 px-2 py-0.5 rounded border transition-colors ${
                step === 3
                  ? 'text-emerald-700 bg-emerald-50 border-emerald-100'
                  : 'text-slate-500 bg-slate-100 border-slate-200/60'
              }`}>
                <CheckCircle2 size={11} className={step === 3 ? 'text-emerald-600' : 'text-slate-400'} />
                {step === 3 ? 'Citations Grounded' : step === 2 ? 'Analyzing...' : 'Ready'}
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal min-h-[38px] flex items-center">
              {step === 1 && 'Enter query to extract verified terms from enterprise repository.'}
              {step === 2 && 'Retrieving matching clauses and cross-referencing master agreements...'}
              {step === 3 && (
                <span>
                  &ldquo;Section 8.2 confirms liability is strictly capped at{' '}
                  <strong className="font-semibold text-slate-900">$50,000</strong>. Renewal notice is required 30 days prior to Nov 15.&rdquo;
                </span>
              )}
            </p>
            <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100 flex-wrap">
              <span className="text-[10px] text-slate-400 font-mono">Sources:</span>
              <span className={`text-[10px] px-2 py-0.5 rounded font-mono border flex items-center gap-1 transition-colors ${
                step >= 2 ? 'bg-slate-100 text-slate-700 border-slate-300' : 'bg-slate-50 text-slate-400 border-slate-200/40'
              }`}>
                <FileText size={10} className="text-slate-400" /> Master-SLA-2025.pdf:p.14
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded font-mono border flex items-center gap-1 transition-colors ${
                step >= 2 ? 'bg-slate-100 text-slate-700 border-slate-300' : 'bg-slate-50 text-slate-400 border-slate-200/40'
              }`}>
                <FileText size={10} className="text-slate-400" /> Vendor-Addendum.docx
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (id === 'ecommerce') {
      return (
        <div className="space-y-3">
          {/* Mini Product Item */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-11 h-11 rounded-lg bg-orange-100/80 border border-orange-200/60 flex items-center justify-center text-orange-600 shrink-0">
              <ShoppingBag size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold text-slate-900 truncate">Aero Carbon Studio Pods</h5>
                <span className="text-xs font-mono font-bold text-slate-900">$189.00</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                  ● In Stock
                </span>
                <span className="text-[10px] text-slate-500">Ships same day</span>
              </div>
            </div>
          </div>

          {/* 1-Click Buy Action */}
          <div>
            <button
              className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                step === 1
                  ? 'bg-slate-900 text-white shadow-xs'
                  : step === 2
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-emerald-600 text-white shadow-sm'
              }`}
            >
              {step === 1 && (
                <>
                  <Zap size={13} className="text-amber-300" />
                  <span>Instant Buy with Apple Pay • $189.00</span>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authorizing Stripe Edge Checkout...</span>
                </>
              )}
              {step === 3 && (
                <>
                  <CheckCircle2 size={13} />
                  <span>Order Confirmed in 0.38s!</span>
                </>
              )}
            </button>
          </div>

          {/* Real-Time Sync Status */}
          <div
            className={`p-3 rounded-xl border transition-all duration-300 ${
              step === 3
                ? 'bg-white border-emerald-200/80 shadow-xs'
                : step === 2
                ? 'bg-orange-50/30 border-orange-200/60'
                : 'bg-slate-50/50 border-slate-200/60'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
              <span className="text-slate-800 font-bold">
                {step === 3 ? 'Order #BS-8429 Confirmed' : step === 2 ? 'Processing Payment...' : '1-Click Checkout'}
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-colors ${
                step === 3 ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-slate-500 bg-slate-100 border-slate-200/60'
              }`}>
                {step === 3 ? 'Stripe 200 OK' : step === 2 ? 'Edge TLS' : 'Stripe Ready'}
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <Check size={12} className={step >= 2 ? 'text-emerald-600 shrink-0' : 'text-slate-400 shrink-0'} />
                <span>{step >= 2 ? 'Inventory decremented across 3 global warehouses' : 'Global multi-warehouse sync ready'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={12} className={step === 3 ? 'text-emerald-600 shrink-0' : 'text-slate-400 shrink-0'} />
                <span>{step === 3 ? 'Instant customer receipt & fulfillment webhook dispatched' : 'Automatic receipt & fulfillment pipeline'}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (id === 'healthcare') {
      return (
        <div className="space-y-3">
          {/* Doctor Profile */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="w-11 h-11 rounded-full bg-teal-100/80 border border-teal-200/70 flex items-center justify-center text-teal-700 shrink-0 font-bold text-xs">
              DR
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold text-slate-900 truncate">Dr. Sarah Chen, MD</h5>
                <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded font-medium border border-teal-100">
                  Telehealth
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Cardiology & Preventive Care</p>
            </div>
          </div>

          {/* Slot Picker */}
          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-600 font-medium mb-1.5 px-0.5">
              <span>Select Appointment Slot:</span>
              <span className="text-teal-700 font-semibold">
                {step >= 2 ? 'Tomorrow, 10:30 AM (Selected)' : 'Tomorrow (Select time)'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="py-1.5 text-center text-xs rounded-lg border border-slate-200 text-slate-400 bg-white">
                09:00 AM
              </div>
              <div
                className={`py-1.5 text-center text-xs rounded-lg font-semibold border transition-all duration-200 flex items-center justify-center gap-1 ${
                  step >= 2
                    ? 'bg-teal-600 text-white border-teal-600 shadow-2xs'
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                {step >= 2 && <Check size={11} />}
                10:30 AM
              </div>
              <div className="py-1.5 text-center text-xs rounded-lg border border-slate-200 text-slate-400 bg-white">
                02:15 PM
              </div>
            </div>
          </div>

          {/* HIPAA Encryption & Booking Status */}
          <div
            className={`p-3 rounded-xl border transition-all duration-300 ${
              step === 3
                ? 'bg-white border-teal-200/80 shadow-xs'
                : step === 2
                ? 'bg-teal-50/30 border-teal-200/60'
                : 'bg-slate-50/50 border-slate-200/60'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
              <span className="text-slate-800 font-bold flex items-center gap-1.5">
                <Lock size={12} className={step >= 2 ? 'text-teal-600' : 'text-slate-400'} /> HIPAA 256-Bit Encrypted
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-colors ${
                step === 3 ? 'text-teal-800 bg-teal-50 border-teal-100' : 'text-slate-500 bg-slate-100 border-slate-200/60'
              }`}>
                {step === 3 ? 'EHR Synced' : step === 2 ? 'Connecting...' : 'EHR Ready'}
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <Check size={12} className={step >= 2 ? 'text-teal-600 shrink-0' : 'text-slate-400 shrink-0'} />
                <span>{step >= 2 ? 'Encrypted video room created for tomorrow 10:30 AM' : 'Video consultation room ready'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={12} className={step === 3 ? 'text-teal-600 shrink-0' : 'text-slate-400 shrink-0'} />
                <span>{step === 3 ? 'SMS confirmation & medical intake link dispatched' : 'SMS confirmation link pending'}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderStageVisualCanvas = stageInput => {
    const stage =
      typeof stageInput === 'string'
        ? METHODOLOGY_STAGES.find(s => s.id === stageInput) || METHODOLOGY_STAGES[0]
        : stageInput || METHODOLOGY_STAGES[0];

    const stageId = stage.id;

    const renderNodes = () => {
      if (stageId === 'discovery') {
        return (
          <>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-1.5 border border-blue-100">
                <Users size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">User Flow</div>
              <div className="mt-1 flex flex-col items-center gap-0.5">
                <span className="w-7 h-1 bg-slate-200 rounded-full" />
                <span className="w-4 h-1 bg-slate-200 rounded-full" />
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-1">Wireframes</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border-2 border-primary shadow-2xs ring-4 ring-blue-50 text-center flex flex-col items-center justify-center relative transition-all">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center mb-1.5 shadow-2xs">
                <Layers size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-900">Interactive UI</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-blue-50 text-[9px] text-primary font-mono font-bold flex items-center gap-1">
                <Sparkles size={8} /> Figma Proto
              </div>
              <div className="text-[9px] text-blue-700 font-mono mt-0.5">Clickable</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 border border-emerald-100">
                <ShieldCheck size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">Fixed Road</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-[9px] text-emerald-700 font-mono font-bold flex items-center gap-0.5">
                <Check size={8} className="stroke-[3]" /> Zero Creep
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">Scope Lock</div>
            </div>
          </>
        );
      }

      if (stageId === 'architecture') {
        return (
          <>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-1.5 border border-blue-100">
                <Globe size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">Next.js 15</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-slate-100 text-[9px] text-slate-600 font-mono">
                Edge CDN
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">&lt;15ms Latency</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border-2 border-primary shadow-2xs ring-4 ring-blue-50 text-center flex flex-col items-center justify-center relative transition-all">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center mb-1.5 shadow-2xs">
                <Cpu size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-900">FastAPI Core</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-blue-50 text-[9px] text-primary font-mono font-bold flex items-center gap-1">
                <Zap size={8} /> REST / Graph
              </div>
              <div className="text-[9px] text-blue-700 font-mono mt-0.5">Autoscaling</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 border border-emerald-100">
                <Server size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">PostgreSQL</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-[9px] text-emerald-700 font-mono font-bold flex items-center gap-1">
                <Lock size={8} /> TLS 1.3
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">Encrypted DB</div>
            </div>
          </>
        );
      }

      if (stageId === 'engineering') {
        return (
          <>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-1.5 border border-blue-100">
                <GitBranch size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">14-Day Sprint</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-slate-100 text-[9px] text-slate-600 font-mono">
                Agile Cadence
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">Milestones</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border-2 border-emerald-500 shadow-2xs ring-4 ring-emerald-50 text-center flex flex-col items-center justify-center relative transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-1.5 shadow-2xs">
                <Check size={15} className="stroke-[3]" />
              </div>
              <div className="text-[11px] font-bold text-slate-900">Automated QA</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-[9px] text-emerald-700 font-mono font-bold flex items-center gap-1">
                <CheckCircle2 size={8} /> 48/48 Passing
              </div>
              <div className="text-[9px] text-emerald-700 font-mono mt-0.5">100% Tests</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5 border border-purple-100">
                <Activity size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">Staging Demo</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-purple-50 text-[9px] text-purple-700 font-mono font-bold">
                Live Preview
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">Client Access</div>
            </div>
          </>
        );
      }

      if (stageId === 'deployment') {
        return (
          <>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 border border-emerald-100">
                <Globe size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">Public Live</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-emerald-50 text-[9px] text-emerald-700 font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">Zero Downtime</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border-2 border-primary shadow-2xs ring-4 ring-blue-50 text-center flex flex-col items-center justify-center relative transition-all">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center mb-1.5 shadow-2xs">
                <ShieldCheck size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-900">100% IP Rights</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-blue-50 text-[9px] text-primary font-mono font-bold">
                Full Source
              </div>
              <div className="text-[9px] text-blue-700 font-mono mt-0.5">Zero Lock-In</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 text-center flex flex-col items-center justify-center transition-all">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5 border border-indigo-100">
                <Activity size={14} />
              </div>
              <div className="text-[11px] font-bold text-slate-800">24/7 SLA</div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-indigo-50 text-[9px] text-indigo-700 font-mono font-bold">
                99.99% Up
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-0.5">Active Alerts</div>
            </div>
          </>
        );
      }

      return null;
    };

    return (
      <div className="space-y-3">
        {/* Clean Architectural Canvas - Bytesoft Light Style */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#f8faff] border border-blue-100/90 shadow-xs relative overflow-hidden">
          {/* Technical Dot Pattern */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"
            aria-hidden="true"
          />

          {/* Canvas Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 text-[11px] relative z-10">
            <div className="flex items-center gap-2 font-mono text-slate-700 font-medium">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-primary/70" />
              </div>
              <span className="text-slate-800 font-semibold">{stage.fileTab}</span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/90 font-bold flex items-center gap-1.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {stage.stageTag}
            </span>
          </div>

          {/* Visual Node Pipeline */}
          <div className="relative py-1 z-10">
            {/* Connecting Track */}
            <div className="absolute top-[26px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-200 via-primary/30 to-blue-200 -translate-y-1/2 z-0 hidden sm:block" />

            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 relative z-10">
              {renderNodes()}
            </div>
          </div>

          {/* Spec Bar */}
          <div className="mt-3.5 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500 font-mono relative z-10">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{stage.footerLeft}</span>
            </span>
            <span className="text-emerald-700 font-semibold">{stage.footerRight}</span>
          </div>
        </div>

        {/* Value Guarantee Card */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 text-primary text-xs font-semibold flex items-center justify-between shadow-2xs">
          <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
            <CheckCircle2 size={14} className="text-primary shrink-0" />
            <span>{stage.guaranteeText}</span>
          </span>
          <span className="text-[10px] font-mono font-bold text-primary bg-white px-2 py-0.5 rounded-md border border-blue-200 shadow-2xs">
            {stage.guaranteeBadge}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      {/* ─── SCOPED KEYFRAME ANIMATIONS ─── */}
      <style>{`
        @keyframes stepContentFadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-12 pb-10 md:pt-16 md:pb-14 border-b border-slate-200/80 bg-white overflow-hidden">
        {/* Subtle ambient background glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/30 to-transparent blur-3xl rounded-full"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold uppercase tracking-wider mb-5 shadow-2xs hover:bg-blue-100/60 transition-colors">
            <Sparkles size={13} className="text-primary" />
            How Bytesoft Builds
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            How We Build Your Project.{' '}
            <span className="text-primary underline decoration-blue-200 decoration-wavy underline-offset-8">
              Simple, Fast & Reliable.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            We follow a simple, transparent 4-step process to take your idea from a plan to a live product. No confusing tech jargon, no hidden fees — just great software delivered on time.
          </p>
        </div>
      </section>

      {/* ─── MINIMAL 4-STEP PROCESS SECTION (BYTESOFT STYLE) ─── */}
      <section className="py-8 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Integrated Auto-Tour Status & Controls */}
          <div className="flex items-center justify-between mb-3 px-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isPlaying && !isHovered ? 'bg-primary' : 'bg-slate-400'
                  }`}
                />
              </span>
              <span className="font-semibold text-slate-800">
                {isPlaying && !isHovered ? 'Process Tour' : 'Tour Paused'}
              </span>
              <span className="text-slate-400 font-mono hidden sm:inline">
                • Stage {activeStageIndex + 1} of {METHODOLOGY_STAGES.length}
              </span>
              {isHovered && isPlaying && (
                <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80 hidden sm:inline">
                  Hovering to read
                </span>
              )}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-700 font-medium shadow-2xs hover:shadow-xs transition-all cursor-pointer text-[11px]"
            >
              {isPlaying ? (
                <>
                  <Pause size={10} className="text-slate-600" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play size={10} className="text-primary fill-primary" />
                  <span>Resume</span>
                </>
              )}
            </button>
          </div>

          {/* Clean Segmented Stepper Bar: 1 Single Responsive Row on Mobile & Desktop */}
          <div className="bg-white border border-slate-200/80 p-1 sm:p-1.5 rounded-2xl shadow-xs mb-6">
            <div className="grid grid-cols-4 gap-1 sm:gap-2">
              {METHODOLOGY_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                const isCompleted = idx < activeStageIndex;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleStageSelect(idx)}
                    className={`relative py-2 px-1.5 sm:px-3 sm:py-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between ${
                      isActive
                        ? 'bg-blue-50/90 text-primary font-bold shadow-2xs border border-blue-200/90'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-all ${
                          isActive
                            ? 'bg-primary text-white shadow-2xs scale-105 ring-2 ring-primary/20'
                            : isCompleted
                            ? 'bg-blue-100/70 text-primary font-semibold'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {isCompleted ? <Check size={11} className="stroke-[3]" /> : stage.stepNumber}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono hidden md:inline">
                        {stage.duration}
                      </span>
                    </div>

                    <div className="text-[11px] sm:text-xs md:text-sm font-semibold truncate leading-tight">
                      <span className="sm:hidden">{stage.shortName}</span>
                      <span className="hidden sm:inline">{stage.name}</span>
                    </div>

                    {/* Minimalist progress line with synchronized linear speed */}
                    <div className="h-0.5 bg-slate-100 rounded-full mt-1.5 sm:mt-2 overflow-hidden relative">
                      <div
                        className="h-full bg-primary rounded-full transition-[width] ease-linear"
                        style={{
                          width: isCompleted ? '100%' : isActive ? `${progress}%` : '0%',
                          transitionDuration: isActive ? '50ms' : '0ms',
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unified Stage Card with Ambient Glow */}
          <div className="relative">
            {/* Subtle ambient background glow */}
            <div
              className="pointer-events-none absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-blue-100/40 via-indigo-50/20 to-teal-50/30 blur-xl opacity-60"
              aria-hidden="true"
            />

            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-sm transition-all relative"
            >
              <div
                key={currentStage.id}
                style={{ animation: 'stepContentFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both' }}
              >
                {/* Responsive 2-Column Grid on Desktop; Logical Stack on Mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left / Top Details: Header, Headline, Description, Key Metrics */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Step & Status Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 text-primary font-mono border border-blue-100">
                            Step {currentStage.stepNumber}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1 font-medium font-mono">
                            <Clock size={11} /> {currentStage.duration}
                          </span>
                        </div>

                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/90 flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {currentStage.badge}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                        {currentStage.headline}
                      </h2>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                        {currentStage.description}
                      </p>

                      {/* Visual KPI Metric Cards */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mt-5 pt-3.5 border-t border-slate-100">
                        {currentStage.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors shadow-2xs"
                          >
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                              {m.label}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1 flex items-center gap-1.5">
                              <CheckCircle2 size={13} className="text-primary shrink-0" />
                              <span className="truncate">{m.value}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Stage Architectural Canvas */}
                  <div className="lg:col-span-7">
                    {renderStageVisualCanvas(currentStage)}
                  </div>
                </div>
                </div>

                {/* Unified Bottom Navigation Bar - Always at Bottom on Mobile & Desktop */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveStageIndex(prev => Math.max(0, prev - 1));
                        setProgress(0);
                      }}
                      disabled={activeStageIndex === 0}
                      className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 text-xs font-semibold disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95 cursor-pointer"
                    >
                      <ArrowLeft
                        size={13}
                        className="group-hover:-translate-x-1 transition-transform duration-200"
                      />{' '}
                      Previous
                    </button>

                    <button
                      onClick={() => {
                        setActiveStageIndex(prev => (prev + 1) % METHODOLOGY_STAGES.length);
                        setProgress(0);
                      }}
                      className="group inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-4.5 sm:py-2 rounded-full bg-primary text-white hover:bg-blue-900 text-xs font-semibold transition-all shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
                    >
                      {activeStageIndex === METHODOLOGY_STAGES.length - 1 ? (
                        <>
                          Restart Tour{' '}
                          <RotateCcw
                            size={12}
                            className="group-hover:rotate-180 transition-transform duration-500"
                          />
                        </>
                      ) : (
                        <>
                          Next Step{' '}
                          <ArrowRight
                            size={12}
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </>
                      )}
                    </button>
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    Step {activeStageIndex + 1} of {METHODOLOGY_STAGES.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* ─── REAL-WORLD PROJECT EXAMPLES ─── */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              Real-World Examples
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
              How We Build Different Types of Projects
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Whether you need a custom online store, a private AI tool, or a healthcare app, our process keeps your project on track and on budget.
            </p>
          </div>

          {/* Interactive Category Selector */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3.5 mb-6">
            {BLUEPRINT_EXAMPLES.map((ex, idx) => {
              const ExIcon = ex.icon;
              const isActive = activeProductIndex === idx;
              return (
                <button
                  key={ex.id}
                  onClick={() => handleProductSelect(idx)}
                  className={`text-left p-2.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 ${
                    isActive
                      ? 'bg-white border-blue-600 shadow-xs ring-2 ring-blue-600/10'
                      : 'bg-[#f6f8fc] border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isActive ? 'scale-105' : ''
                    }`}
                    style={{ background: `${ex.color}15`, color: ex.color }}
                  >
                    <ExIcon size={17} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        <span className="sm:hidden">{ex.shortTitle}</span>
                        <span className="hidden sm:inline">{ex.category}</span>
                      </span>
                    </div>
                    <span className="hidden sm:block text-[11px] text-slate-500 truncate mt-0.5">
                      {ex.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Live Product Preview Showcase */}
          <div
            className="bg-[#f6f8fc] border border-slate-200/90 rounded-2xl shadow-2xs overflow-hidden transition-all duration-300"
            onMouseEnter={() => setIsProductPlaying(false)}
            onMouseLeave={() => setIsProductPlaying(true)}
          >
            {/* Top Browser / Window Frame */}
            <div className="px-3.5 sm:px-4 py-2.5 bg-white border-b border-slate-200/80 flex items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100/80 border border-slate-200/60 text-[11px] font-mono text-slate-500 truncate">
                  <Lock size={10} className="text-slate-400 shrink-0" />
                  <span className="truncate">https://{activeProduct.demoUrl}</span>
                </div>
              </div>

              {/* Live Status indicator */}
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Preview</span>
              </div>
            </div>

            {/* Showcase Main Content */}
            <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Context, Features, Verified Outcome */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        background: `${activeProduct.color}15`,
                        color: activeProduct.color,
                      }}
                    >
                      {activeProduct.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      Live Simulation
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {activeProduct.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {activeProduct.desc}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    What&apos;s Included:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProduct.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 bg-white border border-slate-200/80 rounded-md text-[11px] text-slate-700 font-medium shadow-2xs flex items-center gap-1"
                      >
                        <Check size={11} className="text-primary" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome Banner */}
                <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{activeProduct.outcome}</span>
                </div>
              </div>

              {/* Right Column: Animated Product Simulation */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-xs">
                  {renderProductSimulation(activeProduct.id, productStep)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CLIENTS TRUST OUR PROCESS ─── */}
      <section className="py-12 md:py-16 bg-[#f6f8fc] border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white border border-slate-200/80 hover:border-blue-300/80 rounded-2xl p-5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">100% Yours</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                You own all source code, designs, and credentials from day one. Zero lock-in, ever.
              </p>
            </div>

            <div className="group bg-white border border-slate-200/80 hover:border-blue-300/80 rounded-2xl p-5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Clear 2-Week Updates</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                You get to test working progress every two weeks. You are always in the loop.
              </p>
            </div>

            <div className="group bg-white border border-slate-200/80 hover:border-blue-300/80 rounded-2xl p-5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 flex items-center justify-center mb-3">
                <Zap size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Built-in Security</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                We test for safety and privacy so your customer and business data stays protected.
              </p>
            </div>

            <div className="group bg-white border border-slate-200/80 hover:border-blue-300/80 rounded-2xl p-5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Smooth Handover</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Easy video walkthroughs and helpful documentation so your team can run it with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA SECTION ─── */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            Start Your Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Have an Idea in Mind?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Let&apos;s have a friendly chat about your project. We&apos;ll answer your questions, walk you through options, and give you an honest plan and estimate.
          </p>

          <div className="flex items-center justify-center gap-3.5 flex-wrap mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-blue-900 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Chat with Our Team{' '}
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all shadow-2xs active:scale-95"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
