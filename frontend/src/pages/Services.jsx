import { useState, useEffect, useRef } from 'react';
import { MonitorSmartphone, LineChart, Users, Store, HeartPulse, Smartphone, Bot, Palette, ArrowRight, CheckCircle2, Lightbulb, PenTool, Code2, Rocket, ChevronDown, ChevronUp, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
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
      
      const targets = { projects: 100, retention: 98, team: 10, support: 24 };
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
      icon: <MonitorSmartphone size={40} className="text-white" />,
      title: "Web Engineering",
      desc: "Custom, responsive web applications built with modern frameworks for exceptional speed and user experience. We engineer scalable architectures that grow with your business.",
      features: ["React & Next.js Development", "Custom API Integrations", "Advanced Performance Optimization", "Headless CMS Architecture"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <LineChart size={40} className="text-white" />,
      title: "Search Optimization",
      desc: "Technical and content-driven SEO strategies that dominate search rankings and capture high-intent traffic. We turn search engines into your most reliable acquisition channel.",
      features: ["Comprehensive Technical Audits", "Data-Driven Content Strategy", "High-Authority Link Building", "Local & Enterprise SEO"],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "Social Media Strategy",
      desc: "Engaging campaigns across social channels that build brand loyalty, foster community, and generate qualified leads. We tell your brand's story where your audience lives.",
      features: ["Multi-Channel Content Creation", "Community Management", "Influencer Partnerships", "Advanced Analytics & Reporting"],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Store size={40} className="text-white" />,
      title: "E-commerce Platforms",
      desc: "Scalable, secure online storefronts optimized for seamless shopping experiences and high conversion rates. We build digital retail environments that drive sales.",
      features: ["Shopify & Custom Solutions", "Secure Payment Gateways", "Inventory & ERP Sync", "Cart Abandonment Recovery"],
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: <HeartPulse size={40} className="text-white" />,
      title: "Healthcare Software",
      desc: "Secure, compliant, and intuitive software solutions designed specifically for healthcare providers and patients. We bridge the gap between medical care and modern technology.",
      features: ["HIPAA Compliant Architecture", "EHR/EMR Integrations", "Secure Patient Portals", "Telehealth Infrastructure"],
      color: "from-rose-500 to-rose-700"
    },
    {
      icon: <Smartphone size={40} className="text-white" />,
      title: "App Development",
      desc: "Native and cross-platform mobile applications that deliver engaging experiences right to your users' fingertips. We turn complex mobile requirements into intuitive apps.",
      features: ["iOS & Android Native Apps", "React Native Cross-Platform", "Real-time Push Notifications", "Offline Mode Synchronization"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: <Bot size={40} className="text-white" />,
      title: "AI Integration",
      desc: "Intelligent automation and AI-driven solutions to streamline operations and unlock powerful data insights. Future-proof your business with cutting-edge machine learning.",
      features: ["Custom LLM Integration", "Automated Customer Support Bots", "Predictive Business Analytics", "Workflow Process Automation"],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      icon: <Palette size={40} className="text-white" />,
      title: "UI/UX Design",
      desc: "User-centric interface design focusing on aesthetics and usability to maximize engagement and conversion. We design experiences that users love to interact with.",
      features: ["In-depth User Research", "Wireframing & Journey Mapping", "Interactive High-Fidelity Prototyping", "Design System Creation"],
      color: "from-pink-500 to-pink-700"
    }
  ];

  const methodologies = [
    {
      icon: <Lightbulb size={32} className="text-secondary" />,
      step: "01",
      title: "Discovery & Strategy",
      desc: "We begin by deeply understanding your business goals, target audience, and competitive landscape to forge a strategic roadmap."
    },
    {
      icon: <PenTool size={32} className="text-secondary" />,
      step: "02",
      title: "Design & Prototyping",
      desc: "Our designers translate strategy into stunning, user-centric wireframes and interactive prototypes for your approval."
    },
    {
      icon: <Code2 size={32} className="text-secondary" />,
      step: "03",
      title: "Engineering & Build",
      desc: "Our technical team brings the designs to life using clean, scalable, and modern code architectures."
    },
    {
      icon: <Rocket size={32} className="text-secondary" />,
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
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Comprehensive Digital <br className="hidden md:block" /> Engineering
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
            End-to-end technical solutions and strategic marketing designed to scale your business and dominate your industry.
          </p>
          
          {/* Stats Row - Fixed Height & Animated */}
          <div ref={statsRef} className="flex flex-wrap justify-center gap-6 md:gap-12 mt-10 pt-6 border-t border-white/10">
            <div className="text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {counters.projects}+
              </div>
              <div className="text-blue-200 text-xs md:text-sm">Projects Delivered</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {counters.retention}%
              </div>
              <div className="text-blue-200 text-xs md:text-sm">Client Retention</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {counters.team}+
              </div>
              <div className="text-blue-200 text-xs md:text-sm">Expert Team</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {counters.support}/7
              </div>
              <div className="text-blue-200 text-xs md:text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Deliver</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              Comprehensive digital solutions tailored to your unique business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-3xl md:text-4xl font-black text-gray-200 group-hover:text-gray-300 transition-colors">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  
                  <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3 text-xs tracking-wider uppercase flex items-center gap-2">
                      <TrendingUp size={14} className="text-secondary" />
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700 text-xs md:text-sm">
                          <CheckCircle2 size={12} className="text-secondary mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
                    <ChevronUp className="text-secondary shrink-0 transition-transform duration-300" size={18} />
                  ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-secondary shrink-0 transition-all duration-300" size={18} />
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-5">
            <Sparkles size={14} className="text-secondary" />
            <span className="text-secondary text-xs md:text-sm font-medium">Start Your Journey</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            Have a project in mind? <br className="hidden md:block"/> Let's talk.
          </h2>
          
          <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto px-4">
            Whether you're starting from scratch or improving something existing, we'd love to hear about your goals and see how we can help.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
            <Link 
              to="/contact" 
              className="group bg-secondary text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl text-sm md:text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Schedule a Strategy Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
            <Link 
              to="/our-work" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm text-sm md:text-lg"
            >
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