
import {
  MonitorSmartphone,
  LineChart,
  Users,
  Store,
  HeartPulse,
  Smartphone,
  Bot,
  Palette,
  Star,
  Zap,
  HeartHandshake,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
  MapPin,
  Shield,
  Sparkles,
  Quote,
  CheckCircle2,
  Cpu,
  Layers,
  FileSearch,
  Network,
  Activity,
  Code2,
  Terminal,
  Workflow,
  Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

// Helper to safely extract tech tags from any techStack shape (object or array)
const getTechTags = (techStack) => {
  if (!techStack) return [];
  if (Array.isArray(techStack)) return techStack.slice(0, 3);
  if (typeof techStack === 'object') {
    const tags = [
      ...(techStack.frontend || []),
      ...(techStack.backend || []),
      ...(techStack.tools || []),
      ...(techStack.database || [])
    ];
    return tags.slice(0, 3);
  }
  return [];
};

// Real verified client partners
const testimonials = [
  {
    quote: "Campus Quest completely revolutionized how we conduct assessments. Our students love the real-time competition and instant feedback. Faculty workload has reduced significantly, and they can now focus on teaching.",
    name: "Dr. S. Ahmad",
    role: "Examination Coordinator",
    org: "Leading University",
    initial: "SA",
    project: "Campus Quest",
    category: "EdTech Platform",
    projectId: "campus-quest"
  },
  {
    quote: "TrackMyBus transformed our transportation experience. Students no longer stand confused waiting for buses. The real-time tracking is incredibly accurate, and the notifications are always timely.",
    name: "A. Kumar",
    role: "Transport Coordinator",
    org: "Leading University",
    initial: "AK",
    project: "TrackMyBus",
    category: "IoT & Mobility",
    projectId: "track-my-bus"
  },
  {
    quote: "Bytesoft built us a clean, professional website that truly represents our brand. Our dealer inquiries have gone up noticeably since the launch. Great team to work with.",
    name: "Team Bharat Almirah",
    role: "Management Team",
    org: "Bharat Almirah, India",
    initial: "BA",
    project: "Bharat Almirah",
    category: "Brand Platform",
    projectId: "bharat-almirah"
  }
];

// Dual-pillar Service Architecture: Digital & Software + AI & Intelligent Technology
const digitalServices = [
  { icon: MonitorSmartphone, title: "Web Design & Development", desc: "Custom, high-velocity web platforms, enterprise portals, and SaaS applications built for sub-second speeds and massive scale." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Production-ready native and cross-platform iOS & Android apps with fluid 60fps animations and offline-first reliability." },
  { icon: Store, title: "E-Commerce Platforms", desc: "High-converting headless storefronts, custom checkout funnels, and real-time enterprise ERP inventory synchronization." },
  { icon: HeartPulse, title: "Healthcare Software", desc: "HIPAA-compliant patient portals, clinical management workflows, and secure EHR/EMR FHIR interoperability." },
  { icon: LineChart, title: "Search Optimization (SEO)", desc: "Data-driven technical SEO audits and structured schema engineering that capture qualified commercial search intent." },
  { icon: Users, title: "Digital Growth & Strategy", desc: "Targeted digital marketing campaigns, content engines, and attribution analytics that build authentic brand authority." },
  { icon: Palette, title: "UI/UX Architecture & Design", desc: "User-centered design architecture, interactive click-through prototypes, and production Figma design systems." },
  { icon: Code2, title: "Custom Cloud & Backend Systems", desc: "Resilient microservices, high-throughput REST/GraphQL APIs, and autoscaling cloud infrastructure with zero downtime." }
];

const intelligentServices = [
  { icon: Bot, title: "AI Integration & Workflows", desc: "Embedding state-of-the-art LLM intelligence directly into existing enterprise databases and operational business pipelines." },
  { icon: Cpu, title: "Autonomous AI Agents", desc: "Task-oriented, deterministic autonomous agents that execute multi-step workflows, tool calls, and API transactions with strict guardrails." },
  { icon: FileSearch, title: "Document Intelligence", desc: "Automated multi-modal OCR extraction, contract parsing, invoice processing, and structured schema validation." },
  { icon: Layers, title: "Enterprise Knowledge (RAG)", desc: "Private vector database search across internal documentation, SOPs, and proprietary databases with zero data leakage." },
  { icon: Activity, title: "Predictive Analytics & ML", desc: "Custom machine learning models for demand forecasting, customer churn prediction, anomaly detection, and operational optimization." },
  { icon: Network, title: "Voice & Conversational AI", desc: "Next-generation conversational agents and voice systems designed for intelligent triage and natural customer dialog." }
];

// Trust & Value Proposition
const advantages = [
  { icon: Star, title: "Production-Grade Craft", desc: "Top-tier software engineering with an obsessive focus on sub-second latency, security hygiene, and clean architectural maintainability." },
  { icon: Zap, title: "High-Velocity Sprints", desc: "Disciplined 1–2 week agile sprint cycles that ship tested, reviewable milestones on a transparent, predictable schedule." },
  { icon: HeartHandshake, title: "Direct Senior Partnership", desc: "Unfiltered collaboration with principal engineers and technical architects—no middlemen, account managers, or communication silos." },
  { icon: Shield, title: "100% IP & Code Ownership", desc: "Fixed-scope deliverables, complete source code repository handover, and absolute intellectual property freedom from day one." }
];

// Delivery Process (Preserved & Enhanced)
const process = [
  {
    step: "01",
    title: "Discover & Architect",
    desc: "We unpack your business requirements, define user workflows, and establish an unshakeable technical blueprint before writing a single line of code.",
    tags: ["Scope & Goals", "Tech Architecture", "Data Security"]
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "We translate strategy into responsive Figma design systems, component tokens, and interactive high-fidelity prototypes validated with real users.",
    tags: ["UI/UX Prototypes", "Design System", "Workflow Mapping"]
  },
  {
    step: "03",
    title: "Engineer & Build",
    desc: "Our senior developers write clean, modular, test-driven code in rapid sprint cycles with continuous integration, strict typing, and peer reviews.",
    tags: ["Production Code", "Weekly Sprints", "API Engineering"]
  },
  {
    step: "04",
    title: "Scale & Deploy",
    desc: "We configure resilient cloud infrastructure, automated load testing, and security hardening for zero-downtime production deployment.",
    tags: ["Cloud Launch", "QA Testing", "Performance Tuning"]
  },
  {
    step: "05",
    title: "Govern & Support",
    desc: "Proactive uptime monitoring, security patching, performance profiling, and continuous feature optimization as your business scales.",
    tags: ["SLA Monitoring", "Ongoing Updates", "System Health"]
  }
];

const blueprints = [
  { label: "SaaS Web Platform", stack: "Next.js + Tailwind + Node.js API", db: "PostgreSQL + Redis", time: "2–4 Weeks" },
  { label: "Mobile Application", stack: "React Native + Cross-Platform Engine", db: "MongoDB Atlas / Supabase", time: "4–8 Weeks" },
  { label: "Enterprise Software", stack: "React + Python FastAPI Microservices", db: "PostgreSQL ACID Cluster", time: "6–10 Weeks" },
  { label: "E-Commerce Engine", stack: "Next.js + Headless Storefront + Stripe", db: "PostgreSQL + Redis Cache", time: "4–6 Weeks" },
  { label: "Healthcare Portal", stack: "React + FHIR Interop API + HIPAA Shield", db: "Encrypted PostgreSQL", time: "8–12 Weeks" },
  { label: "AI & Automation Layer", stack: "Python LangGraph + Custom LLM Agents", db: "Pinecone / pgvector Vector DB", time: "3–6 Weeks" },
  { label: "Custom Cloud Cluster", stack: "Distributed Microservices + Docker", db: "Multi-Region Distributed DB", time: "Flexible" }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('digital');
  const [selectedBlueprint, setSelectedBlueprint] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Reveal animation observer
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prevTestimonial = () => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div>
      {/* =========================================================================
          HERO SECTION: Modernized messaging + PRESERVED 01/02/03 Floating Image Visual
          ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="absolute top-[-8%] right-[-6%] w-[640px] h-[640px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="max-w-xl">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-primary text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-xs">
              <Sparkles size={14} className="text-secondary shrink-0" />
              <span>Architecting Digital Products & Intelligent Systems</span>
            </div>

            {/* Strategic Headline */}
            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[3.35rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Engineering Digital
              <span className="block text-slate-900">Experiences &</span>
              <span className="mt-1 pl-4 border-l-[5px] border-secondary block text-primary">
                Intelligent Systems
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Bytesoft engineers high-velocity digital products, mission-critical software, and enterprise AI workflows that help modern organizations operate with agility, connect with customers, and drive measurable growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-9">
              <Link
                to="/project-journey"
                className="bg-primary hover:bg-blue-900 text-white font-semibold px-6 py-3.5 rounded-full transition-all shadow-sm hover:shadow inline-flex items-center gap-2.5 text-sm sm:text-base group"
              >
                <Zap size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                <span>Experience How Bytesoft Builds</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="bg-white border border-slate-200 text-slate-800 font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors text-sm sm:text-base"
              >
                Book Architecture Consultation
              </Link>
            </div>

            {/* Credibility Badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 pt-2 border-t border-slate-200/70">
              {[
                "50+ Production Systems Shipped",
                "100% IP & Code Ownership",
                "Software + AI Native",
                "Zero Vendor Lock-in"
              ].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================================================
              HERO VISUAL (PRESERVED): The exact 3 floating panels (01 Discover, 02 Design, 03 Build)
              ========================================================================= */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="hero-float relative w-full max-w-[500px] h-[400px] sm:h-[440px]"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 78% 74% at 48% 52%, #000 62%, transparent 92%)",
                maskImage: "radial-gradient(ellipse 78% 74% at 48% 52%, #000 62%, transparent 92%)"
              }}
              aria-label="Bytesoft Delivery Framework: 01 Discover, 02 Design, 03 Build"
            >
              {/* Background ambient glow */}
              <div className="absolute left-[18%] top-[18%] h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />

              {/* 01 Discover Card */}
              <div className="absolute left-0 top-3 w-[70%] origin-bottom-left -rotate-[13deg] rounded-[1.6rem] border border-white/80 bg-white/40 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] backdrop-blur-md sm:p-5">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-400 uppercase">01</p>
                <p className="mt-1 text-base font-semibold text-slate-600">Discover</p>
                <div className="mt-4 space-y-2">
                  <div className="h-1.5 w-[84%] rounded-full bg-slate-300/80" />
                  <div className="h-1.5 w-[60%] rounded-full bg-slate-200" />
                  <div className="h-1.5 w-[72%] rounded-full bg-slate-200/80" />
                </div>
              </div>

              {/* 02 Design Card */}
              <div className="absolute left-[14%] top-[5.25rem] w-[72%] -rotate-[4deg] rounded-[1.6rem] border border-white bg-white/75 p-4 shadow-[0_24px_50px_-28px_rgba(30,58,138,0.55)] backdrop-blur-md sm:p-5">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">02</p>
                <p className="mt-1 text-base font-semibold text-slate-900">Design</p>
                <div className="mt-4 flex gap-2">
                  <div className="h-12 flex-1 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white" />
                  <div className="h-12 flex-1 rounded-xl border border-slate-100 bg-slate-50" />
                  <div className="h-12 w-9 rounded-xl border border-blue-100 bg-blue-50" />
                </div>
              </div>

              {/* 03 Build Card */}
              <div className="absolute right-0 top-[11.5rem] w-[74%] rotate-[7deg] overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-[#2a56c6] via-[#1e3a8a] to-[#152a66] p-5 text-white shadow-[0_30px_55px_-18px_rgba(30,58,138,0.7)]">
                <div className="hero-sheen pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-y-3 right-0 w-px bg-gradient-to-b from-transparent via-amber-200 to-amber-400/70" />
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/90 to-amber-300" />
                <p className="relative text-[10px] font-semibold tracking-[0.22em] text-white/55 uppercase">03</p>
                <p className="relative mt-1 text-xl font-semibold">Build</p>
                <p className="relative mt-2 text-sm leading-relaxed text-blue-100/90">Clean code, shipped with you.</p>
                <div className="relative mt-4 flex items-center gap-1.5">
                  <span className="h-1.5 w-8 rounded-full bg-white/75" />
                  <span className="h-1.5 w-4 rounded-full bg-white/30" />
                  <span className="h-1.5 w-6 rounded-full bg-amber-200/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY POSITIONING BANNER: "Software is our foundation. Intelligence is our next layer."
          ========================================================================= */}
      <section className="py-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                <Layers size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Software is our foundation. Intelligence is our next layer.
                </p>
                <p className="text-xs text-slate-500">
                  From mission-critical web and mobile architectures to autonomous AI workflow layers.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700">Web & Mobile</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700">Cloud Systems</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700">Healthcare</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-blue-50 text-primary border border-blue-100">+ AI Layer</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAGNETIC ANIMATED ACTION CARD: "See Your Idea Become a System"
          Directly invites user to experience the cinematic interactive journey
          ========================================================================= */}
      <section className="py-14 md:py-20 bg-[#f6f8fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden border border-slate-200/80 shadow-sm">
            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold mb-4 shadow-xs">
                  <Sparkles size={13} className="text-secondary" />
                  <span>Our Engineering Process</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                  See Your Idea Become a <span className="text-primary">System.</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  From initial technical requirements to multi-region cloud rollout, explore our transparent 4-stage engineering lifecycle engineered for performance and scalability.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/project-journey"
                    className="bg-primary hover:bg-blue-900 text-white font-semibold px-7 py-3.5 rounded-full shadow-md shadow-primary/15 hover:shadow-lg transition-all inline-flex items-center gap-2.5 text-sm sm:text-base group"
                  >
                    <span>Explore How We Build</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-600">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>4-Stage Lifecycle</span>
                  </div>
                </div>
              </div>

              {/* Clean Modern Architecture Lifecycle Stream Widget */}
              <div className="bg-slate-50/90 backdrop-blur-sm border border-slate-200/80 p-5 sm:p-6 rounded-2xl space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Activity size={14} className="text-primary" />
                    Engineering Milestones
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    DISCIPLINED
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100 shadow-xs hover:border-blue-200 transition-all">
                    <span className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <Terminal size={13} />
                      </div>
                      <span>01. Discovery & Strategy</span>
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 text-[10px] font-semibold px-2 py-0.5 rounded">RFC</span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100 shadow-xs hover:border-blue-200 transition-all">
                    <span className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                      <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                        <Workflow size={13} />
                      </div>
                      <span>02. System Architecture</span>
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 text-[10px] font-semibold px-2 py-0.5 rounded">Decoupled</span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100 shadow-xs hover:border-blue-200 transition-all">
                    <span className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                      <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Bot size={13} />
                      </div>
                      <span>03. Agile Engineering & AI</span>
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 text-[10px] font-semibold px-2 py-0.5 rounded">Sprints</span>
                  </div>

                  <div className="flex items-center justify-between bg-blue-50/80 p-3 rounded-xl border border-blue-200/80 shadow-xs">
                    <span className="flex items-center gap-2.5 text-xs font-semibold text-primary">
                      <div className="w-6 h-6 rounded-md bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Cloud size={13} />
                      </div>
                      <span>04. Cloud Deployment & Scale</span>
                    </span>
                    <span className="text-amber-800 bg-amber-100 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded">99.99%</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>4-stage engineering methodology</span>
                  <Link to="/project-journey" className="text-primary font-medium hover:underline inline-flex items-center gap-0.5">
                    Explore process <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: COMPLETE SERVICES PORTFOLIO (Digital & Software + AI & Intelligent Tech)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3">
              <Sparkles size={13} className="text-secondary" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              What We Build & Engineer
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Explore our production software engineering capabilities alongside enterprise AI architectures designed for measurable commercial impact.
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex items-center bg-slate-50 p-1 rounded-full border border-slate-200 mt-6 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveServiceTab('digital')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeServiceTab === 'digital'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Digital & Software Engineering
              </button>
              <button
                type="button"
                onClick={() => setActiveServiceTab('intelligent')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeServiceTab === 'intelligent'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                AI & Intelligent Technology
              </button>
            </div>
          </div>

          {/* Tab 1: Digital & Software Grid */}
          {activeServiceTab === 'digital' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
              {digitalServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1.5 text-base">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-50">
                      <Link to="/services" className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1">
                        Learn more <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: AI & Intelligent Tech Grid */}
          {activeServiceTab === 'intelligent' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
              {intelligentServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-white rounded-2xl border border-blue-100/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary border border-blue-100 flex items-center justify-center mb-4">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Production-Ready</span>
                      <Link to="/services" className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1">
                        View details <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
            >
              <span>View full service details & pricing models</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: HOW WE DELIVER (PRESERVED NON-NEGOTIABLE)
          Connected Timeline Track with sprint cycles and tag chips
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#f6f8fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28 self-start">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">How we deliver</h2>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed text-sm sm:text-base">
              A proven methodology refined across 50+ shipped projects. Each milestone stays completely visible, so you always know what code is shipping next.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Predictable 1–2 week sprint cycles
            </div>
          </div>

          {/* Connected Timeline Track */}
          <div className="relative">
            <div className="absolute left-5 top-5 bottom-8 w-px bg-slate-200 hidden sm:block" />

            <div className="space-y-4">
              {process.map((step) => (
                <div key={step.step} className="relative flex gap-4 sm:gap-6 items-start">
                  {/* Step Node */}
                  <div className="relative z-10 hidden sm:flex w-10 h-10 rounded-full bg-primary text-white text-sm font-bold items-center justify-center shrink-0 shadow-sm">
                    {step.step}
                  </div>

                  {/* Step Card */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <div className="flex items-center gap-3 mb-2 sm:hidden">
                      <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <h3 className="font-semibold text-slate-900 text-base">{step.title}</h3>
                    </div>

                    <div className="hidden sm:flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="font-semibold text-slate-900 text-base">{step.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mb-3 sm:mb-0">{step.desc}</p>

                    <div className="flex flex-wrap gap-1.5 sm:hidden">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: FEATURED REAL PROJECTS (Campus Quest, Bharat Almirah, etc.)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-2 shadow-xs">
                <span>Real Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Featured Systems We Engineered</h2>
              <p className="text-slate-500 text-sm sm:text-base">Real software solutions driving operations for our clients.</p>
            </div>
            <Link to="/our-work" className="text-primary font-semibold hover:text-secondary inline-flex items-center gap-1 text-sm group">
              <span>View all projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectsData.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                to={`/our-work/${project.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-primary font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {getTechTags(project.techStack).map((t) => (
                      <span key={t} className="text-[10px] font-medium bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: REAL CLIENT TESTIMONIALS (Dr. S. Ahmad, A. Kumar, Team Bharat Almirah)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#f6f8fc] border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
            <Sparkles size={13} className="text-secondary" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">What Our Partners Say</h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto mb-10">
            Real feedback from organizations we have partnered with to build impactful digital products.
          </p>

          {/* Refined Spotlight Card */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.06)] p-7 sm:p-10 md:p-12 transition-all overflow-hidden text-center group"
          >
            {/* Watermark Quote Icon */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-slate-100 -rotate-12 pointer-events-none select-none transition-transform group-hover:scale-105 duration-500" />

            {/* Stars & Case Study Link */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <Link
                to={`/our-work/${testimonials[activeTestimonial].projectId}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary bg-slate-50 hover:bg-blue-50/60 px-3 py-1.5 rounded-full border border-slate-100 transition-all group/link"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>{testimonials[activeTestimonial].project}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-normal">{testimonials[activeTestimonial].category}</span>
                <ArrowRight size={12} className="text-slate-400 group-hover/link:text-secondary group-hover/link:translate-x-0.5 transition-all ml-0.5" />
              </Link>
            </div>

            {/* Quote with Smooth Transition */}
            <p
              key={activeTestimonial}
              className="relative z-10 text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed font-normal mb-8 max-w-2xl mx-auto"
            >
              “{testimonials[activeTestimonial].quote}”
            </p>

            {/* Author with Verified Badge */}
            <div className="relative z-10 flex items-center justify-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-blue-50 text-primary font-bold text-sm flex items-center justify-center border border-blue-200 shadow-xs shrink-0">
                {testimonials[activeTestimonial].initial}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <span title="Verified Client Partner" className="inline-flex text-emerald-500">
                    <CheckCircle2 size={14} />
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {testimonials[activeTestimonial].role} · <span className="text-slate-700 font-medium">{testimonials[activeTestimonial].org}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Pagination & Arrow Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? 'bg-primary w-7' : 'bg-slate-300 hover:bg-slate-400 w-2'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: WHY CLIENTS CHOOSE BYTESOFT (Stats & Advantages)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
              <Star size={13} className="text-secondary" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Why Teams Choose Bytesoft</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
              Reliable execution, thoughtful software architecture, and a clear commitment to your business outcomes.
            </p>
          </div>

          {/* Clean Minimal Stats Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm py-5 px-6 sm:px-8 mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 text-center">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "10+", label: "Expert Engineers" },
                { value: "24/7", label: "Ongoing SLA Support" }
              ].map((stat, idx) => (
                <div key={stat.label} className={`px-4 ${idx > 1 ? "pt-4 sm:pt-0" : ""}`}>
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: BUILD YOUR DIGITAL SYSTEM (Interactive Quick Selector)
          ========================================================================= */}
      <section className="py-14 md:py-18 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Interactive Blueprint</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">Build Your Digital System</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select your system type below to see recommended technology architecture for your requirements.
            </p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {/* Quick Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                { label: "Website", stack: "Next.js + Tailwind + Edge CDN", db: "PostgreSQL", time: "2–4 Weeks" },
                { label: "Mobile App", stack: "React Native + Node.js API", db: "MongoDB Atlas", time: "4–8 Weeks" },
                { label: "Business Software", stack: "React + Python FastAPI", db: "PostgreSQL ACID", time: "6–10 Weeks" },
                { label: "E-Commerce", stack: "Next.js + GraphQL + Stripe", db: "MongoDB + Redis", time: "4–6 Weeks" },
                { label: "Healthcare", stack: "React + FHIR API + HIPAA", db: "Encrypted PostgreSQL", time: "8–12 Weeks" },
                { label: "AI & Automation", stack: "Python LangGraph + RAG", db: "Pinecone Vector DB", time: "3–6 Weeks" },
                { label: "Custom Platform", stack: "Microservices + Cloud Cluster", db: "Multi-DB Cluster", time: "Flexible" }
              ].map((pill, pIdx) => (
                <button
                  key={pill.label}
                  type="button"
                  onClick={() => setSelectedBlueprint(pIdx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedBlueprint === pIdx
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-primary'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Architecture Card */}
            <div className="grid sm:grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 mb-5 text-xs text-slate-700">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Recommended Stack</p>
                <p className="font-semibold text-slate-900 mt-0.5">{blueprints[selectedBlueprint].stack}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Database Layer</p>
                <p className="font-semibold text-slate-900 mt-0.5">{blueprints[selectedBlueprint].db}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Estimated Sprint Delivery</p>
                <p className="font-semibold text-primary mt-0.5">{blueprints[selectedBlueprint].time}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500">Fixed-price milestone proposal delivered within 24 hours.</span>
              <Link
                to="/contact"
                className="bg-primary hover:bg-blue-900 text-white font-semibold px-5 py-2.5 rounded-full shadow-xs transition-colors inline-flex items-center gap-1.5"
              >
                <span>Request Custom Scope & Quote</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: FINAL CONVERSION & GET IN TOUCH
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#f6f8fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-[0_15px_45px_-15px_rgba(15,23,42,0.06)] p-7 sm:p-10 md:p-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
            {/* Subtle Ambient Corner Tint */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/80 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>Let's Build Together</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                Ready to engineer your next mission-critical system?
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Whether you need an enterprise web platform, a native mobile application, or a private AI automation layer, our senior architects will evaluate your requirements and deliver a clear execution roadmap within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3.5 rounded-full hover:bg-blue-900 shadow-sm hover:shadow transition-all group text-sm sm:text-base"
                >
                  <span>Book Architecture Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-xs text-slate-400 font-medium">
                  ⚡ Reply within 24 hours
                </span>
              </div>
            </div>

            {/* Right Contact Tiles */}
            <div className="relative z-10 space-y-3">
              <a
                href="mailto:bytesofthq@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 hover:bg-blue-50/70 border border-slate-100 hover:border-blue-100 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors truncate">
                    bytesofthq@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919214749997"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 hover:bg-blue-50/70 border border-slate-100 hover:border-blue-100 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Direct Hotline</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                    +91 9214749997
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Headquarters</p>
                  <p className="text-sm font-semibold text-slate-800">
                    Lucknow, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
