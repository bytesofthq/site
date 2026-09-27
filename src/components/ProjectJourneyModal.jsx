import { useState, useEffect, useRef } from 'react';
import {
  X,
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
  FileCode,
  Lock,
  ChevronRight,
  Zap,
  Globe,
  Sliders,
  Send,
  Building2,
  ShoppingBag,
  Stethoscope,
  Truck,
  MessageSquare
} from 'lucide-react';

// Preset Idea templates
const PRESET_IDEAS = [
  {
    title: "Hospital Management & Triage",
    query: "Hospital appointment scheduling and emergency triage platform",
    icon: Stethoscope,
    category: "Healthcare",
    actors: ["Patients", "Doctors", "Emergency Staff", "Pharmacy"],
    database: "PostgreSQL + HIPAA Vault",
    api: "FastAPI + GraphQL Gateway",
    aiModule: "Urgency Triage & Symptom Classifier",
    frontend: "React + Tailwind + PWA",
    cloud: "AWS GovCloud + Docker"
  },
  {
    title: "Next-Gen E-Commerce Platform",
    query: "High-performance multi-vendor marketplace with AI recommendations",
    icon: ShoppingBag,
    category: "Commerce",
    actors: ["Shoppers", "Vendors", "Logistics", "Admins"],
    database: "MongoDB + Redis Cache",
    api: "Node.js Microservices",
    aiModule: "Personalized Product Recommendations",
    frontend: "Next.js + Framer Motion",
    cloud: "Vercel + AWS ECS"
  },
  {
    title: "Autonomous Customer Support",
    query: "Omnichannel customer support router with knowledge base RAG",
    icon: MessageSquare,
    category: "AI Agent",
    actors: ["Customers", "Tier-1 AI Agent", "Support Leads", "CRM"],
    database: "Pinecone Vector DB + Postgres",
    api: "Python LangGraph + REST APIs",
    aiModule: "Enterprise RAG + Tool Execution",
    frontend: "React Dashboard + Embed Widget",
    cloud: "GCP Cloud Run"
  },
  {
    title: "Fleet & Route Telematics",
    query: "Real-time IoT vehicle tracking and dynamic delivery route dispatch",
    icon: Truck,
    category: "Logistics",
    actors: ["Drivers", "Dispatchers", "Customers", "Fleet Managers"],
    database: "TimescaleDB + Redis Streams",
    api: "Go / Node.js WebSockets",
    aiModule: "Predictive ETA & Dynamic Routing",
    frontend: "React Native + Leaflet Maps",
    cloud: "DigitalOcean Kubernetes"
  }
];

// Stages definition
const STAGES = [
  { id: 'idea', label: '1. Project Scope', icon: Terminal },
  { id: 'understand', label: '2. AI Understanding', icon: Sparkles },
  { id: 'architect', label: '3. Architecture', icon: Workflow },
  { id: 'stack', label: '4. Tech Stack', icon: Layers },
  { id: 'build', label: '5. Build Synthesis', icon: Code2 },
  { id: 'intelligence', label: '6. Intelligence', icon: Bot },
  { id: 'governance', label: '7. Governance', icon: Shield },
  { id: 'testing', label: '8. Verification', icon: CheckCircle2 },
  { id: 'deploy', label: '9. Cloud Deploy', icon: Cloud },
  { id: 'live', label: '10. Live System', icon: Activity }
];

export default function ProjectJourneyModal({ isOpen, onClose, onOpenContact }) {
  const [stageIndex, setStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [customIdea, setCustomIdea] = useState("");
  const [selectedProject, setSelectedProject] = useState(PRESET_IDEAS[0]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [buildLogs, setBuildLogs] = useState([]);
  const timerRef = useRef(null);

  // Parse or adapt project specs
  const projectSpec = selectedProject;

  // Auto-play timer
  useEffect(() => {
    if (!isOpen) return;

    if (isPlaying && stageIndex < STAGES.length - 1) {
      timerRef.current = setTimeout(() => {
        setStageIndex((prev) => prev + 1);
      }, 5500);
    } else if (stageIndex === STAGES.length - 1) {
      setIsPlaying(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, stageIndex, isOpen]);

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Simulate build console output
  useEffect(() => {
    if (stageIndex === 4) {
      setBuildLogs([]);
      const logs = [
        "Initializing repository: github.com/bytesoft/" + projectSpec.category.toLowerCase() + "-core",
        "Configuring security policies & CORS middleware...",
        "Connecting primary database (" + projectSpec.database + ")...",
        "Synthesizing API endpoints & GraphQL schema...",
        "Mounting UI design system components (Inter & Space Grotesk)...",
        "Binding event telemetry & logging channels...",
        "Build complete: 0 warnings, 100% test coverage target."
      ];
      logs.forEach((log, index) => {
        setTimeout(() => {
          setBuildLogs((prev) => [...prev, log]);
        }, (index + 1) * 450);
      });
    }
  }, [stageIndex, projectSpec]);

  if (!isOpen) return null;

  const handleSelectPreset = (preset) => {
    setSelectedProject(preset);
    setCustomIdea(preset.query);
  };

  const handleAnalyzeCustom = (e) => {
    e.preventDefault();
    if (!customIdea.trim()) return;

    // Build custom dynamic spec
    const queryLower = customIdea.toLowerCase();
    let category = "Custom Software";
    let icon = Code2;
    let actors = ["Users", "Administrators", "API Clients", "Operators"];
    let db = "PostgreSQL + Redis";
    let api = "Node.js / Express Gateway";
    let aiModule = "Automated Document & Query Classifier";
    let fe = "React + Tailwind Web Portal";
    let cloud = "AWS / Cloud Run Cluster";

    if (queryLower.includes("health") || queryLower.includes("clinic") || queryLower.includes("doctor") || queryLower.includes("hospital")) {
      category = "Healthcare";
      icon = Stethoscope;
      actors = ["Patients", "Doctors", "Clinical Staff", "Lab Records"];
      db = "HIPAA Compliant Postgres";
      api = "FastAPI + FHIR Integration";
      aiModule = "Clinical Decision & Triage Support";
      fe = "React + Mobile App";
    } else if (queryLower.includes("shop") || queryLower.includes("store") || queryLower.includes("commerce") || queryLower.includes("cart")) {
      category = "E-Commerce";
      icon = ShoppingBag;
      actors = ["Customers", "Sellers", "Payment Gateways", "Inventory"];
      db = "MongoDB + Redis Cache";
      api = "Node.js High-Throughput API";
      aiModule = "Recommendation & Dynamic Pricing Engine";
      fe = "Next.js Storefront";
    } else if (queryLower.includes("chat") || queryLower.includes("bot") || queryLower.includes("support") || queryLower.includes("agent") || queryLower.includes("ai")) {
      category = "AI System";
      icon = Bot;
      actors = ["End-Users", "Autonomous Agent", "Human Supervisor", "CRM"];
      db = "Pinecone Vector DB + Postgres";
      api = "Python LangGraph / FastAPI";
      aiModule = "Enterprise RAG + Action Execution";
      fe = "Interactive Web Widget + Admin Dashboard";
    }

    setSelectedProject({
      title: customIdea.length > 32 ? customIdea.slice(0, 32) + "..." : customIdea,
      query: customIdea,
      icon,
      category,
      actors,
      database: db,
      api,
      aiModule,
      frontend: fe,
      cloud
    });

    setStageIndex(1);
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in overflow-hidden">
      {/* Outer Container */}
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[850px] bg-slate-900 border border-slate-700/80 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* Top Control Bar */}
        <div className="h-16 px-4 sm:px-6 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-primary">
              <Sparkles size={16} className="text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-wide">
                  Bytesoft Interactive Project Journey
                </span>
                <span className="hidden sm:inline-flex text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Simulation Engine
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Visualizing how your idea evolves from requirements to a live cloud system.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Play/Pause control */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors border border-slate-700"
              title={isPlaying ? "Pause auto-journey" : "Auto-play journey"}
            >
              {isPlaying ? <Pause size={13} className="text-amber-400" /> : <Play size={13} className="text-emerald-400" />}
              <span className="hidden md:inline">{isPlaying ? "Pause" : "Play"}</span>
            </button>

            {/* Restart */}
            <button
              onClick={() => { setStageIndex(0); setIsPlaying(false); }}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              title="Restart journey"
            >
              <RotateCcw size={15} />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              aria-label="Close interactive studio"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Stage Timeline Navigation */}
        <div className="bg-slate-950/40 border-b border-slate-800/80 px-2 sm:px-4 py-2 overflow-x-auto no-scrollbar shrink-0">
          <div className="flex items-center gap-1 min-w-max mx-auto justify-center">
            {STAGES.map((s, idx) => {
              const Icon = s.icon;
              const isActive = idx === stageIndex;
              const isPassed = idx < stageIndex;

              return (
                <button
                  key={s.id}
                  onClick={() => { setStageIndex(idx); setIsPlaying(false); }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400'
                      : isPassed
                      ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Icon size={12} className={isActive ? "text-white" : isPassed ? "text-blue-400" : "text-slate-500"} />
                  <span className="hidden lg:inline">{s.label}</span>
                  <span className="lg:hidden">{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Stage Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          
          {/* ================= STAGE 0: IDEA INPUT ================= */}
          {stageIndex === 0 && (
            <div className="max-w-3xl mx-auto w-full my-auto text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                <Terminal size={13} />
                <span>Step 1: Define Your Vision</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Tell Us What You Want to Build
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                Type any software or AI system concept below, or pick a preset domain to see how Bytesoft engineers the complete solution.
              </p>

              {/* Command Input Bar */}
              <form onSubmit={handleAnalyzeCustom} className="relative max-w-2xl mx-auto">
                <div className="flex items-center bg-slate-950 border-2 border-slate-700 focus-within:border-blue-500 rounded-2xl p-2 shadow-2xl transition-all">
                  <Terminal size={20} className="text-blue-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    value={customIdea}
                    onChange={(e) => setCustomIdea(e.target.value)}
                    placeholder="e.g. Hospital management system, Real-time crypto dashboard..."
                    className="w-full bg-transparent border-none text-white text-sm sm:text-base px-3 py-2.5 focus:outline-none placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
                  >
                    <span>Analyze Idea</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </form>

              {/* Preset Cards */}
              <div className="pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Or select a pre-configured architecture:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
                  {PRESET_IDEAS.map((preset) => {
                    const PIcon = preset.icon;
                    const isSelected = selectedProject.title === preset.title;
                    return (
                      <button
                        key={preset.title}
                        type="button"
                        onClick={() => handleSelectPreset(preset)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-blue-950/60 border-blue-500 ring-1 ring-blue-500/50'
                            : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                          <PIcon size={16} />
                        </div>
                        <p className="text-xs font-bold text-white leading-snug">{preset.title}</p>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{preset.category}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ================= STAGE 1: AI UNDERSTANDING ================= */}
          {stageIndex === 1 && (
            <div className="max-w-4xl mx-auto w-full my-auto space-y-6 animate-fade-in">
              <div className="text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Phase 01: Deconstruction</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Transforming Unstructured Idea → Structured System
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Selected Target: <span className="text-blue-300 font-semibold">{projectSpec.query}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
                {[
                  { label: "Core Actors & Users", val: projectSpec.actors.join(", "), icon: Globe },
                  { label: "Data & Storage Layer", val: projectSpec.database, icon: Database },
                  { label: "API Gateway & Router", val: projectSpec.api, icon: Server },
                  { label: "Intelligent Module", val: projectSpec.aiModule, icon: Bot },
                  { label: "Client Frontend", val: projectSpec.frontend, icon: Code2 },
                  { label: "Cloud Infrastructure", val: projectSpec.cloud, icon: Cloud }
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <ItemIcon size={16} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                        <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">{item.val}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-blue-950/30 border border-blue-500/30 p-3.5 rounded-xl text-center text-xs text-blue-300">
                ⚡ System boundaries defined. Ready to generate interactive topological architecture.
              </div>
            </div>
          )}

          {/* ================= STAGE 2: ARCHITECTURE MAP ================= */}
          {stageIndex === 2 && (
            <div className="max-w-4xl mx-auto w-full my-auto space-y-5 animate-fade-in">
              <div className="text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Phase 02: Topology</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Interactive System Topology</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Click any node to inspect its operational role and data transmission protocol.
                </p>
              </div>

              {/* Topology Nodes Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                {[
                  { id: "client", title: "1. Client Apps", desc: projectSpec.frontend, icon: Globe, detail: "Mobile & Web client surfaces rendering high-speed responsive UI." },
                  { id: "gateway", title: "2. API Gateway", desc: projectSpec.api, icon: Server, detail: "Handles rate-limiting, JWT authentication, and request routing." },
                  { id: "database", title: "3. Persistence", desc: projectSpec.database, icon: Database, detail: "ACID transactions with automated failover and encrypted at-rest data." },
                  { id: "ai", title: "4. AI Reasoner", desc: projectSpec.aiModule, icon: Bot, detail: "Executes LLM reasoning, vector lookup, and contextual summarization." }
                ].map((node) => {
                  const NIcon = node.icon;
                  const isSelected = selectedNode === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNode(isSelected ? null : node.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-blue-900/40 border-blue-400 ring-2 ring-blue-500/40'
                          : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                          <NIcon size={16} />
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-xs font-bold text-white">{node.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{node.desc}</p>
                      {isSelected && (
                        <p className="text-[11px] text-blue-200 mt-2 pt-2 border-t border-blue-800/60 leading-snug">
                          {node.detail}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Data Flow Indicator */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400 overflow-x-auto">
                <span>Client Request</span>
                <span className="text-blue-400">⟶ [HTTPS/WSS] ⟶</span>
                <span>API Gateway</span>
                <span className="text-blue-400">⟶ [Auth Gate] ⟶</span>
                <span>Core DB + AI Engine</span>
                <span className="text-emerald-400">⟶ [200 OK Response]</span>
              </div>
            </div>
          )}

          {/* ================= STAGE 3: TECH STACK ================= */}
          {stageIndex === 3 && (
            <div className="max-w-4xl mx-auto w-full my-auto space-y-6 animate-fade-in">
              <div className="text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Phase 03: Engineering Stack</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Modular Technology Stack</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Precision-selected technologies based on performance, maintainability, and domain compliance.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                {[
                  { layer: "Frontend UI", techs: ["React", "Next.js", "Tailwind CSS"], icon: Code2 },
                  { layer: "Backend Logic", techs: ["Node.js", "Express", "FastAPI"], icon: Server },
                  { layer: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis"], icon: Database },
                  { layer: "Intelligence", techs: ["LangChain", "Vector Embeddings", "RAG"], icon: Bot },
                  { layer: "Security & Auth", techs: ["JWT Tokens", "Role RBAC", "SSL TLS 1.3"], icon: Shield },
                  { layer: "Cloud Hosting", techs: ["Docker", "AWS / GCP", "CI/CD Sprints"], icon: Cloud }
                ].map((item, idx) => {
                  const StackIcon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2 mb-2">
                        <StackIcon size={15} className="text-blue-400" />
                        <span className="text-xs font-bold text-white">{item.layer}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.techs.map((t) => (
                          <span key={t} className="text-[10px] font-mono bg-slate-900 border border-slate-700/80 px-2 py-0.5 rounded text-slate-300">
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
            <div className="max-w-3xl mx-auto w-full my-auto space-y-4 animate-fade-in">
              <div className="text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Phase 04: Sprint Synthesis</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Live Engineering Terminal</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Simulating repository initialization, modular builds, and automated dependency binding.
                </p>
              </div>

              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 font-mono text-xs shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-500 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-400">bytesoft-build-pipeline: active</span>
                  </div>
                  <span className="text-emerald-400">Compiling v1.0.0</span>
                </div>

                <div className="space-y-2 min-h-[160px]">
                  {buildLogs.map((log, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-blue-400 select-none">❯</span>
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
            <div className="max-w-4xl mx-auto w-full my-auto space-y-5 animate-fade-in">
              <div className="text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Phase 05: Intelligence Layer</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Connecting Intelligence to Real Workflows
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  How the system extracts context, validates truth against databases, and executes safe tasks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-2.5">
                    <Database size={18} />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">1. Private Knowledge Base</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Grounding intelligence in verified documentation and business tables.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-blue-500/40 text-center ring-1 ring-blue-500/30">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-2.5">
                    <Bot size={18} />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">2. Reasoning & Tool Calls</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Contextual reasoning with strict execution boundaries and safety rules.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2.5">
                    <Workflow size={18} />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">3. Automated Actions</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Updating tickets, dispatching notifications, and logging events.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= STAGE 6: GOVERNANCE (HUMAN + AI) ================= */}
          {stageIndex === 6 && (
            <div className="max-w-3xl mx-auto w-full my-auto space-y-6 animate-fade-in text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Shield size={13} />
                <span>Phase 06: Trust & Control</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Humans Decide. Systems Execute.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
                Bytesoft engineers reliable software architectures with explicit approval gates, role permissions, and full audit logs.
              </p>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-left space-y-3">
                {[
                  { title: "Human-in-the-Loop Signoff", desc: "Critical business actions require explicit human operator confirmation." },
                  { title: "Strict Scope & Role Boundaries", desc: "Restricted API access based on authentication tokens and clearance." },
                  { title: "Immutable Audit Trails", desc: "Every system modification is timestamped and recorded in PostgreSQL." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-white">{item.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= STAGE 7: TESTING & VERIFICATION ================= */}
          {stageIndex === 7 && (
            <div className="max-w-3xl mx-auto w-full my-auto space-y-5 animate-fade-in">
              <div className="text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Phase 07: QA Verification</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Automated Test Matrix</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Validating functional behavior, edge cases, and performance before release.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "REST API Integrity: Passed",
                  "Database Migrations: Passed",
                  "JWT Authentication: Passed",
                  "Sub-50ms Response: Passed",
                  "Cross-Device Viewport: Passed",
                  "AI Output Grounding: Verified"
                ].map((test, idx) => (
                  <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">{test}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-[11px] text-slate-500">
                * Illustrative QA test matrix representing standard Bytesoft verification pipelines.
              </p>
            </div>
          )}

          {/* ================= STAGE 8: CLOUD DEPLOYMENT ================= */}
          {stageIndex === 8 && (
            <div className="max-w-3xl mx-auto w-full my-auto space-y-6 animate-fade-in text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                <Cloud size={13} />
                <span>Phase 08: Production Launch</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Deploying to Secure Cloud Infrastructure
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-4 text-xs font-mono">
                <span className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-slate-400">Local Build</span>
                <span className="text-blue-400">⟶</span>
                <span className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-slate-400">Containerize</span>
                <span className="text-blue-400">⟶</span>
                <span className="bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-slate-400">Security Scan</span>
                <span className="text-blue-400">⟶</span>
                <span className="bg-emerald-950/80 px-3 py-2 rounded-lg border border-emerald-500/50 text-emerald-300 font-bold animate-pulse">
                  LIVE CLOUD
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 max-w-lg mx-auto text-left text-xs text-slate-400 space-y-1">
                <p className="text-slate-300 font-bold">Cloud Deployment Spec:</p>
                <p>• Cluster: {projectSpec.cloud}</p>
                <p>• SSL / TLS: Let's Encrypt Automated 2048-bit</p>
                <p>• High Availability: Auto-scaling replica containers</p>
              </div>
            </div>
          )}

          {/* ================= STAGE 9: LIVE SYSTEM DASHBOARD ================= */}
          {stageIndex === 9 && (
            <div className="max-w-4xl mx-auto w-full my-auto space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>System Live & Operational</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Your System Is Operational
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Simulated live telemetry dashboard showing active metrics for: <span className="text-blue-300">{projectSpec.title}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {[
                  { label: "System Health", val: "99.99% Uptime", color: "text-emerald-400" },
                  { label: "Latency", val: "28ms Average", color: "text-blue-400" },
                  { label: "API Workflows", val: "Active & Synced", color: "text-amber-400" },
                  { label: "Code Ownership", val: "100% Client IP", color: "text-emerald-400" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className={`text-sm sm:text-base font-bold mt-1 ${stat.color}`}>{stat.val}</p>
                  </div>
                ))}
              </div>

              {/* Conversion CTA Box */}
              <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-6 rounded-2xl border border-blue-500/40 text-center space-y-4 shadow-xl">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Your Idea. Engineered by Bytesoft.</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mt-1">
                    Every great digital product starts as an idea. Let's discuss your real timeline, architecture, and transparent fixed-price milestones.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      if (onOpenContact) onOpenContact();
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 group"
                  >
                    <span>Start a Real Project</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => { setStageIndex(0); setIsPlaying(false); }}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
                  >
                    Test Another Idea
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation & Controls */}
        <div className="h-16 px-4 sm:px-6 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={() => setStageIndex((prev) => Math.max(0, prev - 1))}
            disabled={stageIndex === 0}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold transition-colors text-slate-300"
          >
            <ArrowLeft size={15} />
            <span>Back</span>
          </button>

          <div className="text-xs text-slate-400 font-mono">
            Stage {stageIndex + 1} of {STAGES.length}
          </div>

          <button
            type="button"
            onClick={() => setStageIndex((prev) => Math.min(STAGES.length - 1, prev + 1))}
            disabled={stageIndex === STAGES.length - 1}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold text-white transition-colors shadow-sm"
          >
            <span>Next</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
}
