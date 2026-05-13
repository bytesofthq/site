import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Sparkles, TrendingUp, CheckCircle2, Target, Award, Users, Clock, DollarSign, BarChart3, Quote, Calendar, Building2, Database, Zap, Star, Flame, Layers, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    users: 0,
    performance: 0,
    retention: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const industries = ['All', 'E-commerce', 'Healthcare', 'Fintech', 'Education', 'Enterprise'];

  // Real Client Case Studies with Enhanced Data
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Revenue Transformation",
      client: "StyleHive India",
      industry: "E-commerce",
      logo: "🛍️",
      year: 2024,
      complexity: "High",
      roi: "340%",
      challenge: "The client was struggling with 65% cart abandonment rate and poor mobile conversion (only 1.2%). Their legacy platform couldn't handle peak traffic during sales.",
      solution: "We built a headless e-commerce platform with Next.js, optimized checkout flow, integrated AI-based product recommendations, and implemented progressive web app features.",
      results: [
        { metric: "Mobile Conversions", value: "+210%", icon: TrendingUp, color: "green" },
        { metric: "Cart Abandonment", value: "-45%", icon: CheckCircle2, color: "blue" },
        { metric: "Revenue Growth", value: "$2.3M+", icon: DollarSign, color: "emerald" },
        { metric: "Page Speed", value: "3.2s → 0.8s", icon: Zap, color: "orange" }
      ],
      testimonial: "Bytesoft transformed our entire digital presence. Within 3 months, we saw our highest-ever revenue during the festive season. Their team understood our vision perfectly.",
      clientName: "Priya Mehra",
      clientRole: "CEO, StyleHive",
      clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 months",
      teamSize: "6 developers",
      techStack: ["Next.js", "Shopify API", "Stripe", "Redis", "Tailwind"],
      rating: 5
    },
    {
      id: 2,
      title: "Healthcare Patient Portal",
      client: "MedCare Health System",
      industry: "Healthcare",
      logo: "🏥",
      year: 2024,
      complexity: "Critical",
      roi: "425%",
      challenge: "100+ clinics were using outdated paper-based systems. Patients faced long wait times (avg 45 mins), and there was no centralized record keeping.",
      solution: "Developed HIPAA-compliant patient portal with online appointment booking, video consultation integration, and unified EHR system connecting all clinics.",
      results: [
        { metric: "Wait Time", value: "-65%", icon: Clock, color: "blue" },
        { metric: "Patient Satisfaction", value: "4.9/5", icon: Award, color: "yellow" },
        { metric: "Clinics Connected", value: "100+", icon: Building2, color: "purple" },
        { metric: "Records Managed", value: "500K+", icon: Database, color: "indigo" }
      ],
      testimonial: "The team at Bytesoft delivered a solution that our patients love. Appointment booking is seamless, and our staff workload has reduced significantly.",
      clientName: "Dr. Rajesh Kumar",
      clientRole: "Director, MedCare",
      clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6 months",
      teamSize: "8 developers",
      techStack: ["React", "Python", "PostgreSQL", "Twilio Video", "FHIR API"],
      rating: 5
    },
    {
      id: 3,
      title: "FinTech Analytics Dashboard",
      client: "Nexus Financial",
      industry: "Fintech",
      logo: "💰",
      year: 2023,
      complexity: "Critical",
      roi: "520%",
      challenge: "Traders needed real-time data visualization but existing dashboard was slow (8s load time) and crashed during high-volume trading hours.",
      solution: "Built real-time dashboard using WebSocket connections, optimized database queries, and implemented Redis caching for sub-second response times.",
      results: [
        { metric: "Load Time", value: "-85%", icon: Zap, color: "amber" },
        { metric: "Uptime", value: "99.99%", icon: CheckCircle2, color: "green" },
        { metric: "Data Throughput", value: "1M+/sec", icon: BarChart3, color: "blue" },
        { metric: "Active Traders", value: "5,000+", icon: Users, color: "purple" }
      ],
      testimonial: "Bytesoft delivered beyond expectations. The dashboard handles peak loads effortlessly, and our traders have full confidence in the data presented.",
      clientName: "Vikram Singh",
      clientRole: "CTO, Nexus Financial",
      clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5 months",
      teamSize: "5 developers",
      techStack: ["React", "Node.js", "WebSocket", "Redis", "AWS"],
      rating: 5
    },
    {
      id: 4,
      title: "University ERP Integration",
      client: "Integral University",
      industry: "Education",
      logo: "🎓",
      year: 2023,
      complexity: "High",
      roi: "380%",
      challenge: "University had multiple disconnected systems for admissions, fees, exams, and results. Students and staff faced difficulty accessing information.",
      solution: "Created unified student portal integrating all departments. Implemented automated fee collection, online exam scheduling, and digital result declaration.",
      results: [
        { metric: "Process Time", value: "-70%", icon: Clock, color: "blue" },
        { metric: "Student Satisfaction", value: "4.8/5", icon: Award, color: "yellow" },
        { metric: "Paperwork Reduced", value: "90%", icon: CheckCircle2, color: "green" },
        { metric: "Daily Users", value: "15,000+", icon: Users, color: "indigo" }
      ],
      testimonial: "The transformation has been remarkable. Bytesoft understood our unique requirements and delivered a system that works flawlessly.",
      clientName: "Prof. Ahmad Raza",
      clientRole: "Registrar, Integral University",
      clientImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "8 months",
      teamSize: "10 developers",
      techStack: ["React", "Django", "PostgreSQL", "Docker", "Redis"],
      rating: 5
    }
  ];

  // Impact Numbers (Animated with proper targets)
  const impactStats = [
    { id: 'revenue', label: "Total Revenue Generated", targetValue: 125, suffix: "M+", icon: DollarSign, color: "from-emerald-500 to-emerald-700", description: "For clients" },
    { id: 'users', label: "Users Impacted Globally", targetValue: 2.5, suffix: "M+", icon: Users, color: "from-blue-500 to-blue-700", description: "Across all projects", isDecimal: true },
    { id: 'performance', label: "Avg Performance Gain", targetValue: 185, suffix: "%", icon: TrendingUp, color: "from-purple-500 to-purple-700", description: "Improvement metric" },
    { id: 'retention', label: "Client Retention Rate", targetValue: 98, suffix: "%", icon: Award, color: "from-orange-500 to-orange-700", description: "Year over year" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 60;
    const stepDuration = duration / steps;
    const targets = { revenue: 125, users: 2.5, performance: 185, retention: 98 };
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setAnimatedValues({
        revenue: Math.round(targets.revenue * progress),
        users: (targets.users * progress).toFixed(1),
        performance: Math.round(targets.performance * progress),
        retention: Math.round(targets.retention * progress)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const filteredCases = activeIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.industry === activeIndustry);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Client Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Real Results for <br className="hidden md:block" /> Real Businesses
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
            Don't just take our word for it. See how we've helped businesses across industries achieve measurable growth.
          </p>
        </div>
      </section>

      {/* Impact Stats Section - Animated */}
      <section ref={statsRef} className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-secondary font-semibold uppercase tracking-wide mb-2">Our Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Delivering Measurable Results</h2>
            <p className="text-gray-600 text-base mt-3 max-w-2xl mx-auto">Real outcomes from real partnerships with industry-leading businesses</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              const displayValue = stat.id === 'revenue' ? animatedValues.revenue : 
                                  stat.id === 'users' ? animatedValues.users :
                                  stat.id === 'performance' ? animatedValues.performance :
                                  animatedValues.retention;
              
              return (
                <div key={idx} className={`text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="opacity-90" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black mb-1">
                    {displayValue}{stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm opacity-95 font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs opacity-80 font-medium">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeIndustry === industry 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-12 md:space-y-16">
            {filteredCases.map((caseStudy, index) => {
              const complexityColor = {
                'Critical': 'from-red-500 to-red-600',
                'High': 'from-orange-500 to-orange-600',
                'Medium': 'from-blue-500 to-blue-600'
              }[caseStudy.complexity] || 'from-blue-500 to-blue-600';

              return (
                <div key={caseStudy.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Header with Client Logo & Badges */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 px-6 md:px-8 py-5 border-b border-gray-100">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl animate-pulse-slow">{caseStudy.logo}</span>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Client</p>
                          <h3 className="text-lg md:text-xl font-bold text-primary">{caseStudy.client}</h3>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className={`text-xs font-bold text-white px-3 py-1.5 rounded-full bg-gradient-to-r ${complexityColor}`}>
                          {caseStudy.complexity}
                        </span>
                        <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600">
                          ROI {caseStudy.roi}
                        </span>
                        <span className="text-xs font-bold text-gray-700 px-3 py-1.5 rounded-full bg-gray-100">
                          {caseStudy.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row">
                    {/* Left: Image */}
                    <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                      <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 flex flex-wrap gap-2">
                        <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {caseStudy.industry}
                        </span>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {[...Array(caseStudy.rating)].map((_, i) => (
                            <Star key={i} size={12} className="fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:w-3/5 p-6 md:p-8 flex flex-col">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{caseStudy.title}</h2>
                      <p className="text-sm text-gray-500 mb-5 font-medium">Project Duration: {caseStudy.duration} | Team Size: {caseStudy.teamSize}</p>
                      
                      {/* Challenge */}
                      <div className="mb-5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Flame size={14} className="text-orange-500" /> The Challenge
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">{caseStudy.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Layers size={14} className="text-blue-500" /> Our Solution
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">{caseStudy.solution}</p>
                      </div>

                      {/* Results Grid - Enhanced */}
                      <div className="grid grid-cols-2 gap-3 mb-5 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        {caseStudy.results.map((result, idx) => {
                          const Icon = result.icon;
                          const colorClasses = {
                            'green': 'text-green-600 bg-green-100',
                            'blue': 'text-blue-600 bg-blue-100',
                            'emerald': 'text-emerald-600 bg-emerald-100',
                            'orange': 'text-orange-600 bg-orange-100',
                            'yellow': 'text-yellow-600 bg-yellow-100',
                            'purple': 'text-purple-600 bg-purple-100',
                            'indigo': 'text-indigo-600 bg-indigo-100',
                            'amber': 'text-amber-600 bg-amber-100'
                          }[result.color];

                          return (
                            <div key={idx} className="flex items-start gap-3 p-2">
                              <div className={`${colorClasses} rounded-lg p-2 shrink-0 mt-0.5`}>
                                <Icon size={16} />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm md:text-base font-black text-gray-900 leading-tight">{result.value}</p>
                                <p className="text-xs text-gray-600 font-semibold truncate">{result.metric}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Briefcase size={14} className="text-purple-500" /> Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.techStack.map((tech, idx) => (
                            <span key={idx} className="text-xs font-semibold bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 hover:shadow-md transition-all">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial - Enhanced */}
                      <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-5 border-l-4 border-secondary mb-5 mt-auto">
                        <div className="flex gap-2 mb-3">
                          {[...Array(caseStudy.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Quote size={20} className="text-secondary mb-2 opacity-40" />
                        <p className="text-gray-700 text-sm italic leading-relaxed mb-4">"{caseStudy.testimonial}"</p>
                        <div className="flex items-center gap-3">
                          <img src={caseStudy.clientImage} alt={caseStudy.clientName} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                          <div>
                            <p className="font-bold text-sm text-gray-800">{caseStudy.clientName}</p>
                            <p className="text-xs text-gray-500 font-medium">{caseStudy.clientRole}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="bg-gray-50/50 px-6 md:px-8 py-4 border-t border-gray-100 flex justify-between items-center flex-wrap gap-4">
                    <Link to="/contact" className="text-primary font-bold text-sm hover:text-secondary transition-colors inline-flex items-center gap-2 group/link">
                      Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contact" className="bg-gradient-to-r from-primary to-blue-800 text-white text-sm font-bold px-5 py-2 rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2">
                      Start Similar Project <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No case studies found in this industry.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-secondary font-bold tracking-wider uppercase text-xs">Ready to Transform?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Write Your<br className="hidden sm:block" /> Success Story?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our portfolio of successful clients and let us help you achieve extraordinary business results through cutting-edge digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-7 md:px-9 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 bg-white/20 text-white font-bold px-7 md:px-9 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/40 backdrop-blur-sm">
              View Services <Briefcase size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}