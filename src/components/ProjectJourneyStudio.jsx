import { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Shield,
  Bot,
  Activity,
  Server,
  Cloud,
  Terminal,
  Code2,
  Workflow,
  Globe,
  Zap,
  ShoppingBag,
  Stethoscope,
  Truck,
  MessageSquare,
  Check,
  Lock,
  UserCheck,
  TrendingUp,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Preset Domain Templates
const PRESET_IDEAS = [
  {
    id: "healthcare",
    title: "Hospital Triage & Appointments",
    query: "Hospital appointment scheduling and emergency triage platform",
    icon: Stethoscope,
    badge: "Healthcare & Pharma",
    actors: ["Patients", "Doctors", "Emergency Triage", "Pharmacy"],
    database: "PostgreSQL + HIPAA Encrypted Vault",
    api: "FastAPI + FHIR Health Gateway",
    aiModule: "Urgency Triage & Symptom Classifier",
    frontend: "React + Tailwind + Patient PWA",
    cloud: "AWS GovCloud + Docker Cluster",
    techs: ["React", "FastAPI", "PostgreSQL", "Docker", "FHIR API", "Triage ML"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Smart Inventory",
    query: "Multi-vendor commerce marketplace with personalized recommendations",
    icon: ShoppingBag,
    badge: "E-Commerce & Retail",
    actors: ["Shoppers", "Vendors", "Payment Gateway", "Logistics"],
    database: "MongoDB Atlas + Redis Cache",
    api: "Node.js High-Throughput REST & GraphQL",
    aiModule: "Personalized Search & Recommendation Model",
    frontend: "Next.js + Framer Motion Storefront",
    cloud: "Vercel Edge + AWS Elastic Container",
    techs: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe API", "Vector Search"]
  },
  {
    id: "ai-agent",
    title: "Autonomous Support Agent",
    query: "Omnichannel customer support router with knowledge base RAG",
    icon: MessageSquare,
    badge: "AI & Intelligent Tech",
    actors: ["Customers", "Tier-1 AI Agent", "Support Leads", "CRM DB"],
    database: "Pinecone Vector DB + PostgreSQL",
    api: "Python LangGraph + Webhook Gateway",
    aiModule: "Enterprise RAG + Contextual Tool Calling",
    frontend: "React Dashboard + Embeddable Widget",
    cloud: "GCP Cloud Run Microservices",
    techs: ["React", "Python", "Pinecone", "PostgreSQL", "LangChain", "GCP"]
  },
  {
    id: "logistics",
    title: "IoT Fleet & Dispatch System",
    query: "Real-time vehicle GPS tracking and dynamic route optimization",
    icon: Truck,
    badge: "Logistics & Mobility",
    actors: ["Drivers", "Dispatchers", "Customers", "Fleet Ops"],
    database: "TimescaleDB + Redis Pub/Sub",
    api: "Go / Node.js WebSockets & REST",
    aiModule: "Predictive ETA & Route Dispatch Engine",
    frontend: "React Native Mobile + Leaflet Maps",
    cloud: "DigitalOcean Kubernetes Cluster",
    techs: ["React Native", "Node.js", "TimescaleDB", "Redis", "Leaflet", "Kubernetes"]
  }
];

// 10 Interactive Engineering Stages
const STAGES = [
  { id: 'idea', label: '1. Scope & Idea', icon: Terminal, short: 'Scope' },
  { id: 'understand', label: '2. AI Understanding', icon: Sparkles, short: 'Analyze' },
  { id: 'architect', label: '3. Architecture', icon: Workflow, short: 'Topology' },
  { id: 'stack', label: '4. Tech Selection', icon: Layers, short: 'Stack' },
  { id: 'build', label: '5. Build Synthesis', icon: Code2, short: 'Build' },
  { id: 'intelligence', label: '6. Intelligence Layer', icon: Bot, short: 'AI Layer' },
  { id: 'governance', label: '7. Human + AI Control', icon: Shield, short: 'Governance' },
  { id: 'testing', label: '8. Verification & QA', icon: CheckCircle2, short: 'Testing' },
  { id: 'deploy', label: '9. Cloud Launch', icon: Cloud, short: 'Deploy' },
  { id: 'live', label: '10. Live Dashboard', icon: Activity, short: 'Live' }
];

export default function ProjectJourneyStudio({ onStartProject }) {
  const [stageIndex, setStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [customQuery, setCustomQuery] = useState("");
  const [selectedPreset, setSelectedPreset] = useState(PRESET_IDEAS[0]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [buildLogs, setBuildLogs] = useState([]);
  const timerRef = useRef(null);

  // Auto-play timer
  useEffect(() => {
    if (isPlaying && stageIndex < STAGES.length - 1) {
      timerRef.current = setTimeout(() => {
        setStageIndex((prev) => prev + 1);
      }, 5000);
    } else if (stageIndex === STAGES.length - 1) {
      setIsPlaying(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, stageIndex]);

  // Simulate build logs
  useEffect(() => {
    if (stageIndex === 4) {
      setBuildLogs([]);
      const logs = [
        `Initializing repository: github.com/bytesoft/${selectedPreset.id}-system`,
        "Configuring security policies & CORS middleware...",
        `Connecting primary database (${selectedPreset.database})...`,
        "Synthesizing API endpoints & GraphQL schema...",
        "Mounting UI design system components (Inter & Space Grotesk)...",
        "Binding telemetry event channels...",
        "Build complete: 0 warnings, 100% test coverage target."
      ];
      logs.forEach((log, index) => {
        setTimeout(() => {
          setBuildLogs((prev) => [...prev, log]);
        }, (index + 1) * 400);
      });
    }
  }, [stageIndex, selectedPreset]);

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setCustomQuery(preset.query);
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    const q = customQuery.toLowerCase();
    let id = "custom";
    let title = customQuery.length > 35 ? customQuery.slice(0, 35) + "..." : customQuery;
    let icon = Code2;
    let badge = "Custom Software";
    let actors = ["Users", "Admins", "API Consumers", "Operators"];
    let db = "PostgreSQL + Redis Cache";
    let api = "Node.js Express / FastAPI";
    let aiModule = "Automated Document & Task Reasoner";
    let fe = "React + Tailwind Web Application";
    let cloud = "AWS / GCP Secure Cluster";
    let techs = ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "REST API"];

    if (q.includes("health") || q.includes("clinic") || q.includes("doctor") || q.includes("hospital") || q.includes("patient")) {
      id = "healthcare";
      icon = Stethoscope;
      badge = "Healthcare & Pharma";
      actors = ["Patients", "Doctors", "Clinical Staff", "Lab Records"];
      db = "HIPAA Compliant PostgreSQL";
      api = "FastAPI + FHIR Integration";
      aiModule = "Clinical Decision Support & Urgency Triage";
      fe = "React + Mobile Patient Portal";
      techs = ["React", "FastAPI", "PostgreSQL", "HIPAA Vault", "Docker"];
    } else if (q.includes("shop") || q.includes("store") || q.includes("cart") || q.includes("ecommerce") || q.includes("e-commerce")) {
      id = "ecommerce";
      icon = ShoppingBag;
      badge = "E-Commerce & Retail";
      actors = ["Shoppers", "Vendors", "Payments", "Inventory"];
      db = "MongoDB Atlas + Redis Cache";
      api = "Node.js High-Throughput REST APIs";
      aiModule = "Personalized Recommendation Engine";
      fe = "Next.js + Tailwind Storefront";
      techs = ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe API"];
    } else if (q.includes("chat") || q.includes("bot") || q.includes("support") || q.includes("agent") || q.includes("ai")) {
      id = "ai-agent";
      icon = Bot;
      badge = "AI & Intelligent Tech";
      actors = ["End Users", "Autonomous Agent", "Human Supervisor", "CRM"];
      db = "Pinecone Vector DB + Postgres";
      api = "Python LangGraph + FastAPI";
      aiModule = "Enterprise RAG + Action Router";
      fe = "React Dashboard + Embed Widget";
      techs = ["React", "Python", "Pinecone", "LangGraph", "PostgreSQL"];
    }

    setSelectedPreset({
      id,
      title,
      query: customQuery,
      icon,
      badge,
      actors,
      database: db,
      api,
      aiModule,
      frontend: fe,
      cloud,
      techs
    });

    setStageIndex(1);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_15px_50px_-15px_rgba(30,58,138,0.08)] overflow-hidden flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-[#f8fafc] border-b border-slate-200/80 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary border border-blue-100 flex items-center justify-center font-bold">
            <Sparkles size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">
                Bytesoft Project Lifecycle Studio
              </span>
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-primary border border-blue-100">
                Interactive Simulation
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Watch an idea evolve through requirements, architecture, and live cloud deployment.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-primary text-slate-700 hover:text-primary text-xs font-semibold shadow-xs transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause size={12} className="text-amber-500" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={12} className="text-emerald-500 fill-emerald-500" />
                <span>Auto-Play</span>
              </>
            )}
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={() => { setStageIndex(0); setIsPlaying(false); }}
            className="p-1.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 shadow-xs transition-colors"
            title="Reset to Step 1"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Stage Timeline Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-6 py-2.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 min-w-max mx-auto justify-start sm:justify-center">
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            const isActive = idx === stageIndex;
            const isPassed = idx < stageIndex;

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => { setStageIndex(idx); setIsPlaying(false); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-sm ring-2 ring-primary/20'
                    : isPassed
                    ? 'bg-white text-slate-700 border border-slate-200 hover:border-primary'
                    : 'bg-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                <Icon size={12} className={isActive ? 'text-white' : isPassed ? 'text-primary' : 'text-slate-400'} />
                <span className="hidden md:inline">{s.label}</span>
                <span className="md:hidden">{s.short}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Body */}
      <div className="p-5 sm:p-8 md:p-10 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between bg-gradient-to-b from-white to-[#f8fafc]">
        
        {/* ================= STAGE 0: IDEA SCOPE ================= */}
        {stageIndex === 0 && (
          <div className="max-w-3xl mx-auto w-full text-center space-y-6 animate-fade-in my-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold">
              <Terminal size={13} className="text-secondary" />
              <span>Step 1: Define What You Want to Build</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Tell Us What You Want to Build
            </h3>
            <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto">
              Type your project concept or select a pre-configured architecture below to watch Bytesoft transform it into a production system.
            </p>

            {/* Input Bar */}
            <form onSubmit={handleAnalyze} className="relative max-w-xl mx-auto">
              <div className="flex items-center bg-white border-2 border-slate-200 focus-within:border-primary rounded-2xl p-1.5 shadow-sm transition-all">
                <Terminal size={18} className="text-primary ml-3 shrink-0" />
                <input
                  type="text"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder="e.g. Hospital triage portal, E-commerce app, Support AI..."
                  className="w-full bg-transparent border-none text-slate-800 text-sm sm:text-base px-3 py-2.5 focus:outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  <span>Analyze Idea</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>

            {/* Presets */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Or choose a common domain blueprint:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-left">
                {PRESET_IDEAS.map((preset) => {
                  const PIcon = preset.icon;
                  const isSelected = selectedPreset.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-blue-50/80 border-primary ring-1 ring-primary/30'
                          : 'bg-white border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-2">
                        <PIcon size={15} />
                      </div>
                      <p className="text-xs font-bold text-slate-900">{preset.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{preset.badge}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= STAGE 1: AI UNDERSTANDING ================= */}
        {stageIndex === 1 && (
          <div className="max-w-4xl mx-auto w-full space-y-5 animate-fade-in my-auto">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Phase 01: Requirement Decomposition</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Deconstructing Idea → Structured System Components
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Target: <span className="text-primary font-bold">{selectedPreset.query}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {[
                { label: "Core Actors & Users", val: selectedPreset.actors.join(", "), icon: Globe },
                { label: "Data & Storage Model", val: selectedPreset.database, icon: Database },
                { label: "API Gateway & Endpoints", val: selectedPreset.api, icon: Server },
                { label: "Intelligent Module", val: selectedPreset.aiModule, icon: Bot },
                { label: "Client Frontend", val: selectedPreset.frontend, icon: Code2 },
                { label: "Target Cloud Infra", val: selectedPreset.cloud, icon: Cloud }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <ItemIcon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 leading-snug">{item.val}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl text-center text-xs text-primary font-medium">
              ⚡ Requirements validated. Ready to compile architectural node topology.
            </div>
          </div>
        )}

        {/* ================= STAGE 2: ARCHITECTURE TOPOLOGY ================= */}
        {stageIndex === 2 && (
          <div className="max-w-4xl mx-auto w-full space-y-5 animate-fade-in my-auto">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Phase 02: Architectural Blueprint</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Interactive System Topology</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Click any component node to inspect its operational data protocol.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {[
                { id: "client", title: "1. Client Apps", desc: selectedPreset.frontend, icon: Globe, detail: "Fast responsive interface with client-side caching & responsive views." },
                { id: "gateway", title: "2. API Gateway", desc: selectedPreset.api, icon: Server, detail: "Rate-limiting, JWT authentication, and secure request routing." },
                { id: "database", title: "3. Persistence Layer", desc: selectedPreset.database, icon: Database, detail: "ACID compliant storage with automated failover & encryption." },
                { id: "ai", title: "4. Intelligence Engine", desc: selectedPreset.aiModule, icon: Bot, detail: "Vector lookup, LLM reasoning, and domain action handlers." }
              ].map((node) => {
                const NIcon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedNode(isSelected ? null : node.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-blue-50 border-primary ring-2 ring-primary/20'
                        : 'bg-white border-slate-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <NIcon size={16} />
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs font-bold text-slate-900">{node.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{node.desc}</p>
                    {isSelected && (
                      <p className="text-[11px] text-primary font-medium mt-2 pt-2 border-t border-blue-100 leading-snug">
                        {node.detail}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600 overflow-x-auto shadow-xs">
              <span className="font-semibold text-slate-900">Client</span>
              <span className="text-primary font-bold">⟶ [HTTPS] ⟶</span>
              <span className="font-semibold text-slate-900">API Gateway</span>
              <span className="text-primary font-bold">⟶ [Auth Gate] ⟶</span>
              <span className="font-semibold text-slate-900">Database & AI</span>
              <span className="text-emerald-600 font-bold">⟶ [200 OK]</span>
            </div>
          </div>
        )}

        {/* ================= STAGE 3: TECH SELECTION ================= */}
        {stageIndex === 3 && (
          <div className="max-w-4xl mx-auto w-full space-y-5 animate-fade-in my-auto">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Phase 03: Engineering Stack</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Selecting the Right Technology</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Tailored for high performance, maintainability, and domain compliance.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                { layer: "Frontend Layer", techs: ["React", "Next.js", "Tailwind CSS"], icon: Code2 },
                { layer: "Backend Logic", techs: ["Node.js", "Express", "FastAPI"], icon: Server },
                { layer: "Database Layer", techs: ["PostgreSQL", "MongoDB", "Redis"], icon: Database },
                { layer: "Intelligence", techs: ["Vector Search", "LangChain", "RAG"], icon: Bot },
                { layer: "Security & Auth", techs: ["JWT Tokens", "Role RBAC", "SSL TLS 1.3"], icon: Shield },
                { layer: "Cloud Hosting", techs: ["Docker", "AWS / GCP", "CI/CD Sprints"], icon: Cloud }
              ].map((item, idx) => {
                const StackIcon = item.icon;
                return (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <StackIcon size={15} className="text-primary" />
                      <span className="text-xs font-bold text-slate-900">{item.layer}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techs.map((t) => (
                        <span key={t} className="text-[10px] font-mono bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STAGE 4: BUILD SYNTHESIS ================= */}
        {stageIndex === 4 && (
          <div className="max-w-3xl mx-auto w-full space-y-4 animate-fade-in my-auto">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Phase 04: Sprint Assembly</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Live Engineering Terminal</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Simulating modular compilation and automated test hooks.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 font-mono text-xs shadow-xl text-slate-100">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-slate-300">bytesoft-build-engine</span>
                </div>
                <span className="text-emerald-400 font-semibold">Compiling v1.0.0</span>
              </div>

              <div className="space-y-2 min-h-[140px]">
                {buildLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-200">
                    <span className="text-primary font-bold select-none">❯</span>
                    <span className="leading-snug">{log}</span>
                  </div>
                ))}
                {buildLogs.length < 7 && (
                  <div className="flex items-center gap-1 text-slate-500">
                    <span className="animate-pulse">_</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= STAGE 5: INTELLIGENCE LAYER ================= */}
        {stageIndex === 5 && (
          <div className="max-w-4xl mx-auto w-full space-y-5 animate-fade-in my-auto">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Phase 05: Intelligence Engine</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Connecting Intelligence to Real Workflows
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Grounded reasoning and automated task handling with safe parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mx-auto mb-2.5">
                  <Database size={18} />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">1. Private Knowledge Base</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Grounded in internal databases, documentation, and verified business rules.
                </p>
              </div>

              <div className="bg-blue-50/80 p-4 rounded-2xl border border-primary/40 text-center shadow-xs">
                <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center mx-auto mb-2.5 shadow-xs">
                  <Bot size={18} />
                </div>
                <h4 className="text-xs font-bold text-primary mb-1">2. Reasoning & Tool Calls</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Contextual reasoning with strict safety boundaries and zero hallucination risk.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2.5">
                  <Workflow size={18} />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">3. Automated Actions</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Dispatching notifications, updating records, and triggering downstream APIs.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= STAGE 6: GOVERNANCE ================= */}
        {stageIndex === 6 && (
          <div className="max-w-3xl mx-auto w-full text-center space-y-5 animate-fade-in my-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <Shield size={13} />
              <span>Phase 06: Trust & Human Control</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Humans Decide. Systems Execute.
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
              Bytesoft builds governed software systems with explicit approval gates, role-based access control, and full auditability.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 text-left space-y-3 shadow-xs">
              {[
                { title: "Human-in-the-Loop Approval", desc: "High-value business decisions require explicit human confirmation." },
                { title: "Role-Based Access Control (RBAC)", desc: "Strict token permissions protecting confidential endpoints and records." },
                { title: "Immutable Audit Logging", desc: "Every system modification is recorded with timestamp and caller IP." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{item.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= STAGE 7: TESTING ================= */}
        {stageIndex === 7 && (
          <div className="max-w-3xl mx-auto w-full space-y-5 animate-fade-in my-auto">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Phase 07: QA Verification</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Testing the System</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Automated test verification matrix prior to production release.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                "REST API Integrity: Passed",
                "Database Migrations: Passed",
                "JWT Authentication: Passed",
                "Sub-50ms Response: Passed",
                "Cross-Device Viewport: Passed",
                "Security & CORS: Verified"
              ].map((test, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200/80 flex items-center gap-2.5 shadow-xs">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{test}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= STAGE 8: DEPLOYMENT ================= */}
        {stageIndex === 8 && (
          <div className="max-w-3xl mx-auto w-full text-center space-y-5 animate-fade-in my-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold">
              <Cloud size={13} />
              <span>Phase 08: Production Cloud Launch</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Deploying to Scalable Cloud Infrastructure
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-3 text-xs font-mono">
              <span className="bg-white px-3 py-2 rounded-xl border border-slate-200 text-slate-600 shadow-xs">Local Build</span>
              <span className="text-primary font-bold">⟶</span>
              <span className="bg-white px-3 py-2 rounded-xl border border-slate-200 text-slate-600 shadow-xs">Containerize</span>
              <span className="text-primary font-bold">⟶</span>
              <span className="bg-white px-3 py-2 rounded-xl border border-slate-200 text-slate-600 shadow-xs">Security Scan</span>
              <span className="text-primary font-bold">⟶</span>
              <span className="bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-300 text-emerald-700 font-bold shadow-xs animate-pulse">
                LIVE PRODUCTION
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1 shadow-xs">
              <p className="text-slate-900 font-bold">Cloud Deployment Profile:</p>
              <p>• Infrastructure: {selectedPreset.cloud}</p>
              <p>• SSL / TLS: 2048-bit automated certificates</p>
              <p>• Monitoring: 24/7 uptime & health ping SLA</p>
            </div>
          </div>
        )}

        {/* ================= STAGE 9: LIVE SYSTEM ================= */}
        {stageIndex === 9 && (
          <div className="max-w-4xl mx-auto w-full space-y-6 animate-fade-in my-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>System Deployed & Operational</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Your Idea. Engineered by Bytesoft.
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Live simulation telemetry for: <span className="text-primary font-bold">{selectedPreset.title}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "System Health", val: "99.99% Uptime", color: "text-emerald-600" },
                { label: "API Latency", val: "28ms Average", color: "text-primary" },
                { label: "Data Pipeline", val: "Active & Synced", color: "text-slate-800" },
                { label: "Code Ownership", val: "100% Client IP", color: "text-emerald-600" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  <p className={`text-sm sm:text-base font-bold mt-1 ${stat.color}`}>{stat.val}</p>
                </div>
              ))}
            </div>

            {/* Conversion CTA Box */}
            <div className="bg-gradient-to-r from-blue-900 via-primary to-blue-950 p-6 sm:p-8 rounded-3xl text-white text-center space-y-4 shadow-lg">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold">Ready to turn your idea into a real system?</h4>
                <p className="text-xs sm:text-sm text-blue-100/90 max-w-lg mx-auto mt-1 leading-relaxed">
                  Bytesoft builds digital products, software platforms, and intelligent business systems. Reach out today for a fixed-price proposal and direct consultation.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="bg-white text-primary hover:bg-blue-50 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all inline-flex items-center gap-2 group"
                >
                  <span>Start a Real Project</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => { setStageIndex(0); setIsPlaying(false); }}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-all border border-white/20"
                >
                  Test Another Idea
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Step Control Navigation */}
      <div className="bg-[#f8fafc] border-t border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStageIndex((prev) => Math.max(0, prev - 1))}
          disabled={stageIndex === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold transition-colors text-slate-700 shadow-xs"
        >
          <ArrowLeft size={14} />
          <span>Back</span>
        </button>

        <div className="text-xs font-semibold text-slate-500">
          Stage {stageIndex + 1} of {STAGES.length}
        </div>

        <button
          type="button"
          onClick={() => setStageIndex((prev) => Math.min(STAGES.length - 1, prev + 1))}
          disabled={stageIndex === STAGES.length - 1}
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary hover:bg-blue-900 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold text-white transition-colors shadow-sm"
        >
          <span>Next Stage</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
