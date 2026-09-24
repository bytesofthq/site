import { useState, useEffect, useRef } from 'react';
import { MonitorSmartphone, LineChart, Users, Store, HeartPulse, Smartphone, Bot, Palette, ArrowRight, ArrowUpRight, CheckCircle2, Lightbulb, PenTool, Code2, Rocket, ChevronDown, ChevronUp, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
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
      
      const targets = { projects: 50, retention: 100, team: 10, support: 24 };
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

  const services = [
    {
      id: "web-engineering",
      icon: MonitorSmartphone,
      title: "Web Engineering",
      desc: "Custom, responsive web applications engineered for speed, scalability, and seamless user experiences.",
      features: ["React & Next.js", "Custom APIs", "Performance", "Headless CMS"]
    },
    {
      id: "search-optimization",
      icon: LineChart,
      title: "Search Optimization",
      desc: "Technical and data-driven SEO strategies that capture high-intent traffic and secure sustainable rankings.",
      features: ["Technical Audits", "Content Strategy", "High-Authority Links", "Enterprise SEO"]
    },
    {
      id: "social-media",
      icon: Users,
      title: "Social Media Strategy",
      desc: "Targeted multi-channel campaigns that build brand loyalty and generate verified inbound demand.",
      features: ["Content Creation", "Community Growth", "Influencer Collabs", "Analytics"]
    },
    {
      id: "ecommerce",
      icon: Store,
      title: "E-commerce Platforms",
      desc: "High-converting online storefronts optimized for smooth checkout journeys and enterprise operations.",
      features: ["Shopify & Headless", "Payment Gateways", "ERP / Sync", "CRO Audits"]
    },
    {
      id: "healthcare",
      icon: HeartPulse,
      title: "Healthcare Software",
      desc: "HIPAA-compliant, highly secure digital health solutions designed for clinical reliability and ease.",
      features: ["HIPAA Compliant", "EHR/EMR Integrations", "Patient Portals", "Telehealth"]
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "App Development",
      desc: "High-performance native and cross-platform mobile apps delivering fluid animations and native device access.",
      features: ["iOS & Android", "React Native", "Push Notifications", "Offline Sync"]
    },
    {
      id: "ai-integration",
      icon: Bot,
      title: "AI Integration",
      desc: "Intelligent automation and custom LLM workflows that streamline operations and elevate business agility.",
      features: ["Custom LLMs", "AI Support Agents", "Predictive Analytics", "Process Automation"]
    },
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      desc: "Strategic product design combining user research, design systems, and rapid prototyping.",
      features: ["User Research", "Wireframing", "Design Systems", "Usability Audits"]
    }
  ];

  const methodologies = [
    {
      icon: <Lightbulb size={32} className="text-primary" />,
      step: "01",
      title: "Discovery & Strategy",
      desc: "We begin by deeply understanding your business goals, target audience, and competitive landscape to forge a strategic roadmap."
    },
    {
      icon: <PenTool size={32} className="text-primary" />,
      step: "02",
      title: "Design & Prototyping",
      desc: "Our designers translate strategy into stunning, user-centric wireframes and interactive prototypes for your approval."
    },
    {
      icon: <Code2 size={32} className="text-primary" />,
      step: "03",
      title: "Engineering & Build",
      desc: "Our technical team brings the designs to life using clean, scalable, and modern code architectures."
    },
    {
      icon: <Rocket size={32} className="text-primary" />,
      step: "04",
      title: "Deployment & Scale",
      desc: "Rigorous testing precedes a flawless launch, followed by ongoing optimization to ensure sustained growth."
    }
  ];

  const faqs = [
    {
      question: "How long does a typical web engineering project take?",
      answer: "A standard corporate website typically takes 4-8 weeks from discovery to launch. Complex e-commerce platforms or custom web applications can take 3-6 months depending on the required features and integrations. We always provide a detailed timeline during the proposal phase."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes. We believe launch day is just the beginning. We offer tiered retainer packages that include priority support, security updates, continuous SEO optimization, and dedicated development hours for iterative improvements."
    },
    {
      question: "What is your approach to SEO?",
      answer: "We employ a white-hat, holistic approach. We start with a deep technical audit to ensure your site is perfectly readable by search engines. Then, we focus on on-page optimization, content strategy, and high-authority link acquisition to build sustainable, long-term rankings."
    },
    {
      question: "Do I own the code and digital assets after the project is completed?",
      answer: "Absolutely. Once the project is fully paid, 100% ownership of the source code, designs, and intellectual property transfers to you. We don't hold your assets hostage."
    },
    {
      question: "Can you integrate our new website with our existing CRM and ERP systems?",
      answer: "Yes, our engineering team specializes in complex API integrations. We routinely connect platforms like Salesforce, HubSpot, SAP, and custom legacy systems to ensure your digital infrastructure operates seamlessly."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      
      {/* Page Hero */}
      <section className="pt-14 pb-8 md:pt-20 md:pb-10">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our expertise</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Comprehensive Digital <span className="text-accent">Engineering</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            End-to-end technical solutions and strategic marketing designed to scale your business.
          </p>
          <div ref={statsRef} className="flex flex-wrap justify-center gap-x-6 gap-y-5 sm:gap-8 md:gap-12 mt-10">
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-accent mb-1">{counters.projects}+</div>
              <div className="text-slate-500 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-accent mb-1">{counters.retention}%</div>
              <div className="text-slate-500 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-accent mb-1">{counters.team}+</div>
              <div className="text-slate-500 text-sm">Expert Developers</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl font-bold text-accent mb-1">{counters.support}/7</div>
              <div className="text-slate-500 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">What We Deliver</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">
              Comprehensive strategies and technical expertise tailored to your business goals.
            </p>
          </div>
          
          {/* Services Grid matching website style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </div>
                      <ArrowRight size={15} className="text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>

                    <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="text-xs text-slate-500 bg-slate-50/80 px-2.5 py-1 rounded-md border border-slate-100"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-20 md:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Shield size={16} className="text-primary" />
              <span className="text-primary font-bold text-sm tracking-wider">OUR PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Work</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              A proven methodology that ensures transparency, quality, and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Number Circle */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center shadow-md group-hover:border-secondary/50 transition-colors duration-300">
                        <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {method.step}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full border border-dashed border-secondary/30 animate-spin-slow group-hover:border-secondary/50 transition-colors"></div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                    {method.icon}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-base md:text-lg px-4">
              Common questions clients ask before partnering with us.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  openFaq === index ? 'border-secondary shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 md:px-6 py-4 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="text-sm md:text-base font-semibold text-gray-900 pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-primary shrink-0 transition-transform duration-300" size={18} />
                  ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-primary shrink-0 transition-all duration-300" size={18} />
                  )}
                </button>
                
                <div 
                  className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-3 border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Have a project in mind? <span className="text-accent">Let's talk.</span>
          </h2>
          <p className="text-slate-500 mb-8">
            Whether you're starting from scratch or improving something existing, we'd love to hear about your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link to="/contact" className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 inline-flex items-center gap-2">
              Schedule a Strategy Call <ArrowRight size={16} />
            </Link>
            <Link to="/our-work" className="bg-white border border-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-full hover:border-primary hover:text-primary">
              View Our Work
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