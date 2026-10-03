import { useState, useEffect, useRef } from 'react';
import {
  MonitorSmartphone,
  LineChart,
  Users,
  Store,
  HeartPulse,
  Smartphone,
  Bot,
  Palette,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Shield,
  Sparkles,
  HelpCircle,
  Zap,
  Cpu,
  FileSearch,
  Layers,
  Activity,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [activeServiceTab, setActiveServiceTab] = useState('digital');
  const [counters, setCounters] = useState({
    projects: 0,
    retention: 0,
    team: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = { projects: 50, retention: 100, team: 12, support: 24 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          projects: Math.min(Math.floor(targets.projects * progress), targets.projects),
          retention: Math.min(Math.floor(targets.retention * progress), targets.retention),
          team: Math.min(Math.floor(targets.team * progress), targets.team),
          support: Math.min(Math.floor(targets.support * progress), targets.support)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // Dual-pillar Service Architecture matching Home page exactly
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

  const methodologies = [
    {
      icon: Lightbulb,
      step: "01",
      title: "Discovery & Technical Architecture",
      desc: "We unpack your business requirements, define user workflows, and establish an unshakeable architectural blueprint before writing a single line of code.",
      deliverable: "Architecture Blueprint & Roadmap"
    },
    {
      icon: PenTool,
      step: "02",
      title: "UI/UX Prototyping & Design Systems",
      desc: "We translate strategy into responsive Figma design systems, component tokens, and interactive high-fidelity prototypes validated with real user feedback.",
      deliverable: "Interactive Prototypes & Tokens"
    },
    {
      icon: Code2,
      step: "03",
      title: "Sprint Velocity & Production Engineering",
      desc: "Our senior developers write clean, modular, test-driven code in transparent 1–2 week sprints backed by automated CI/CD pipelines and rigorous peer reviews.",
      deliverable: "Production-Grade Tested Code"
    },
    {
      icon: Rocket,
      step: "04",
      title: "Cloud Deployment, Security & Scale",
      desc: "End-to-end security audits, automated stress testing, and zero-downtime deployment backed by proactive uptime governance and performance monitoring.",
      deliverable: "Live Launch & 99.9% Uptime SLA"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical software or web development project take?",
      answer: "Standard corporate web platforms and brand systems typically launch within 3-6 weeks. Complex SaaS applications, HIPAA-compliant healthcare software, or custom mobile applications generally run 8-16 weeks across rapid 2-week agile sprints. We always provide a transparent milestone schedule with fixed deliverables before starting."
    },
    {
      question: "Do we retain 100% ownership of our code and intellectual property?",
      answer: "Absolutely. From day one, you own 100% of the intellectual property, source code, designs, and architectural assets. There are zero licensing lock-ins, proprietary framework traps, or hidden transfer fees."
    },
    {
      question: "How does Bytesoft approach data privacy and security with AI workflows?",
      answer: "We engineer private, enterprise-grade AI architectures. Your proprietary business data and customer records are never used to train public foundation models. We implement role-based access control (RBAC), private vector databases, and SOC2/HIPAA-aligned data encryption in transit and at rest."
    },
    {
      question: "Can you integrate our new software with our existing CRM and ERP systems?",
      answer: "Yes, our engineering team specializes in complex API orchestration. We routinely connect platforms like Salesforce, HubSpot, SAP, NetSuite, Stripe, and custom legacy databases to ensure your systems remain tightly synchronized."
    },
    {
      question: "What does post-launch support and ongoing maintenance include?",
      answer: "Launch day is just milestone one. We offer dedicated engineering retainers covering proactive 24/7 uptime monitoring, security updates, Core Web Vitals optimization, cloud scaling, and monthly sprint hours for iterative product evolution."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>

      {/* Page Hero */}
      <section className="pt-14 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} className="text-secondary" />
            <span>Engineering & Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Software Solutions & Intelligent Systems <span className="text-primary">Built for Scale</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            From production-grade web and mobile applications to autonomous AI agent workflows, Bytesoft engineers robust digital systems with zero technical debt and 100% intellectual property ownership.
          </p>
          <div ref={statsRef} className="flex flex-wrap justify-center gap-x-6 gap-y-5 sm:gap-8 md:gap-12 mt-10">
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-primary mb-1">{counters.projects}+</div>
              <div className="text-slate-500 text-xs sm:text-sm">Production Systems Shipped</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-primary mb-1">{counters.retention}%</div>
              <div className="text-slate-500 text-xs sm:text-sm">Client Satisfaction Rate</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-primary mb-1">{counters.team}+</div>
              <div className="text-slate-500 text-xs sm:text-sm">Senior Engineers & Architects</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-primary mb-1">{counters.support}/7</div>
              <div className="text-slate-500 text-xs sm:text-sm">Uptime & Support SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Category Filter */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Specialized Capabilities & Disciplines</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Explore our full-lifecycle engineering practices designed to transform complex business challenges into reliable, high-velocity digital products.
            </p>

            {/* Toggle Tabs matching Homepage */}
            <div className="inline-flex items-center bg-slate-50 p-1 rounded-full border border-slate-200 mt-6 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveServiceTab('digital')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeServiceTab === 'intelligent'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                AI & Intelligent Technology
              </button>
            </div>
          </div>

          {/* Tab 1: Digital & Software Grid matching Homepage */}
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
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
                      >
                        Inquire now <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: AI & Intelligent Tech Grid matching Homepage */}
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
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="text-xs font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
                      >
                        Inquire now <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Interactive AI Journey Callout Banner */}
      <section className="py-12 md:py-16 bg-[#f6f8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold mb-3.5 shadow-xs">
                  <Sparkles size={13} className="text-secondary" />
                  <span>Interactive Build Demo</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-2.5 leading-tight">
                  Want to See How We Build Your <span className="text-primary">Service?</span>
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                  Step inside our interactive AI Project Journey. Watch requirement analysis, system architecture mapping, code compilation, and live deployment in action.
                </p>

                {/* Milestone Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Requirement Analysis
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Architecture Mapping
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Cloud Deployment
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0 w-full lg:w-auto">
                <Link
                  to="/project-journey"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary hover:bg-blue-900 text-white font-semibold text-sm sm:text-base shadow-md shadow-primary/15 hover:shadow-lg transition-all group shrink-0"
                >
                  <Zap size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                  <span>Experience AI Journey</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 px-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Interactive 60s lifecycle preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-secondary" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              How We Work
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              A proven, transparent methodology that ensures predictability, quality, and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        {method.step}
                      </span>
                    </div>

                    <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {method.desc}
                    </p>
                  </div>

                  {/* Deliverable chip */}
                  <div className="pt-4 border-t border-slate-50 mt-auto flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span>{method.deliverable}</span>
                    </span>
                    {index < methodologies.length - 1 && (
                      <ArrowRight size={14} className="text-slate-300 hidden lg:block group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column: Heading + Sticky Support Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={13} className="text-secondary" />
                <span>Frequently Asked</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                Everything you need to know about our engineering standards, timelines, code ownership, and ongoing partnerships.
              </p>

              {/* Direct Inquiry Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Have a unique question?</h3>
                    <p className="text-xs text-slate-500">We typically reply in under 24 hours.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Need custom scoping, an NDA signed, or want to discuss enterprise integrations? Our engineering leads are available.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-900 transition-colors shadow-xs"
                >
                  <span>Speak with our team</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right Column: Accordions */}
            <div className="lg:col-span-7 space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                        ? 'border-blue-200/90 shadow-md shadow-blue-900/[0.04]'
                        : 'border-slate-100 shadow-xs hover:border-slate-200'
                      }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 sm:px-6 py-4.5 text-left flex justify-between items-center focus:outline-none group cursor-pointer gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-secondary transition-colors">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-sm sm:text-[15px] font-semibold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                            ? 'bg-primary text-white border-primary rotate-180'
                            : 'bg-slate-50 text-slate-400 border-slate-100 group-hover:border-blue-100 group-hover:text-primary'
                          }`}
                      >
                        <ChevronDown size={14} />
                      </div>
                    </button>

                    <div
                      className={`px-5 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pt-3 border-t border-slate-100 pl-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} className="text-secondary" />
            <span>Start Building Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Ready to engineer your next system? <span className="text-primary">Let's build.</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-8 leading-relaxed">
            Whether you are scoping an enterprise web platform, mobile product, or proprietary AI automation pipeline, our senior technical architects will deliver a clear execution roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link to="/contact" className="bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-900 transition-all shadow-md shadow-primary/15 hover:shadow-lg inline-flex items-center gap-2 text-sm sm:text-base">
              <span>Schedule Architecture Consultation</span> <ArrowRight size={16} />
            </Link>
            <Link to="/our-work" className="bg-white border border-slate-200 text-slate-800 font-semibold px-7 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors text-sm sm:text-base">
              Explore Shipped Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
        
        .counter-number {
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
}