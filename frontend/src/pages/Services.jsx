import { useState } from 'react';
import { MonitorSmartphone, LineChart, Users, Store, HeartPulse, Smartphone, Bot, Palette, ArrowRight, CheckCircle2, Lightbulb, PenTool, Code2, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <MonitorSmartphone size={40} className="text-white" />,
      title: "Web Engineering",
      desc: "Custom, responsive web applications built with modern frameworks for exceptional speed and user experience. We engineer scalable architectures that grow with your business.",
      features: ["React & Next.js Development", "Custom API Integrations", "Advanced Performance Optimization", "Headless CMS Architecture"]
    },
    {
      icon: <LineChart size={40} className="text-white" />,
      title: "Search Optimization",
      desc: "Technical and content-driven SEO strategies that dominate search rankings and capture high-intent traffic. We turn search engines into your most reliable acquisition channel.",
      features: ["Comprehensive Technical Audits", "Data-Driven Content Strategy", "High-Authority Link Building", "Local & Enterprise SEO"]
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "Social Media Strategy",
      desc: "Engaging campaigns across social channels that build brand loyalty, foster community, and generate qualified leads. We tell your brand's story where your audience lives.",
      features: ["Multi-Channel Content Creation", "Community Management", "Influencer Partnerships", "Advanced Analytics & Reporting"]
    },
    {
      icon: <Store size={40} className="text-white" />,
      title: "E-commerce Platforms",
      desc: "Scalable, secure online storefronts optimized for seamless shopping experiences and high conversion rates. We build digital retail environments that drive sales.",
      features: ["Shopify & Custom Solutions", "Secure Payment Gateways", "Inventory & ERP Sync", "Cart Abandonment Recovery"]
    },
    {
      icon: <HeartPulse size={40} className="text-white" />,
      title: "Healthcare Software",
      desc: "Secure, compliant, and intuitive software solutions designed specifically for healthcare providers and patients. We bridge the gap between medical care and modern technology.",
      features: ["HIPAA Compliant Architecture", "EHR/EMR Integrations", "Secure Patient Portals", "Telehealth Infrastructure"]
    },
    {
      icon: <Smartphone size={40} className="text-white" />,
      title: "App Development",
      desc: "Native and cross-platform mobile applications that deliver engaging experiences right to your users' fingertips. We turn complex mobile requirements into intuitive apps.",
      features: ["iOS & Android Native Apps", "React Native Cross-Platform", "Real-time Push Notifications", "Offline Mode Synchronization"]
    },
    {
      icon: <Bot size={40} className="text-white" />,
      title: "AI Integration",
      desc: "Intelligent automation and AI-driven solutions to streamline operations and unlock powerful data insights. Future-proof your business with cutting-edge machine learning.",
      features: ["Custom LLM Integration", "Automated Customer Support Bots", "Predictive Business Analytics", "Workflow Process Automation"]
    },
    {
      icon: <Palette size={40} className="text-white" />,
      title: "UI/UX Design",
      desc: "User-centric interface design focusing on aesthetics and usability to maximize engagement and conversion. We design experiences that users love to interact with.",
      features: ["In-depth User Research", "Wireframing & Journey Mapping", "Interactive High-Fidelity Prototyping", "Design System Creation"]
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
    <div className="pt-20">
      
      {/* Page Hero */}
      <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive Digital <br className="hidden md:block" /> Engineering
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            End-to-end technical solutions and strategic marketing designed to scale your business and dominate your industry.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 group-hover:bg-blue-900">
                    {service.icon}
                  </div>
                  <span className="text-slate-200 font-black text-6xl opacity-50 group-hover:text-slate-100 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wider uppercase">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <CheckCircle2 size={18} className="text-secondary mr-3 shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Methodology</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just build websites; we engineer businesses. Here is how we guarantee results for every client we partner with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((method, index) => (
              <div key={index} className="relative group">
                {/* Connector line for desktop */}
                {index < methodologies.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-slate-100 -z-10 group-hover:bg-blue-100 transition-colors"></div>
                )}
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:border-blue-50 transition-colors">
                    {method.icon}
                  </div>
                  <span className="text-secondary font-black tracking-widest mb-2">{method.step}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Common questions clients ask before partnering with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border ${openFaq === index ? 'border-secondary shadow-md' : 'border-slate-100 shadow-sm'} overflow-hidden transition-all duration-300`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-secondary shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0" size={24} />
                  )}
                </button>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed pt-4 border-t border-slate-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to engineer your next <br className="hidden md:block"/> phase of growth?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Stop losing ground to competitors. Let's discuss your project and architect a digital solution that delivers measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 flex items-center group w-full sm:w-auto justify-center">
              Schedule a Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link to="/portfolio" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all duration-300 w-full sm:w-auto text-center">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
