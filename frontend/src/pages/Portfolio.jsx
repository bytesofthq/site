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

  const industries = ['All', 'Education', 'Transportation & Logistics', 'Fintech & Personal Finance', 'AI & Agriculture', 'HR & Enterprise', 'Food & Restaurant Tech', 'Productivity & Career', 'AI & Analytics'];

  // Case Studies with images from projectsData
  const caseStudies = [
    {
      id: 1,
      title: "Campus Quest",
      client: "Integral University",
      industry: "Education",
      logo: "🎓",
      year: 2024,
      complexity: "High",
      roi: "280%",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      challenge: "University conducted manual paper-based quizzes with no real-time feedback. Faculty spent hours grading, and students had no way to track their progress or compete academically.",
      solution: "Developed Campus Quest - a full-stack quiz platform with real-time quiz sessions, automatic grading, interactive leaderboards, and AI-powered chat support for students.",
      results: [
        { metric: "Automated Grading", value: "+95%", icon: CheckCircle2, color: "green" },
        { metric: "Student Engagement", value: "+210%", icon: TrendingUp, color: "blue" },
        { metric: "Quiz Participation", value: "5,000+ per month", icon: Users, color: "purple" },
        { metric: "Instructor Workload", value: "-75%", icon: Clock, color: "orange" }
      ],
      testimonial: "Campus Quest completely revolutionized how we conduct assessments. Our students love the real-time competition and instant feedback. Faculty workload has reduced significantly, and they can now focus on teaching.",
      clientName: "Dr. Sana Ahmad",
      clientRole: "Examination Coordinator, Integral University",
      clientInitials: "SA",
      backgroundColor: "from-purple-500 to-indigo-600",
      duration: "5 months",
      teamSize: "4 developers",
      techStack: ["React.js", "Node.js", "MongoDB", "Socket.io", "Redux", "Material UI"],
      rating: 5,
      liveLink: "https://mohd-faizan.onrender.com/student/login"
    },
    {
      id: 2,
      title: "TrackMyBus",
      client: "Integral University",
      industry: "Transportation & Logistics",
      logo: "🚌",
      year: 2024,
      complexity: "High",
      roi: "195%",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
      challenge: "Students had no way to track campus buses. Average waiting time was 30+ minutes. Bus drivers had no structured communication with admin or students.",
      solution: "Built TrackMyBus system - real-time GPS tracking using browser Geolocation API, live notifications via Firebase, and an admin dashboard for route management.",
      results: [
        { metric: "Wait Time Reduced", value: "-65%", icon: Clock, color: "blue" },
        { metric: "Bus Tracking Accuracy", value: "99.2%", icon: CheckCircle2, color: "green" },
        { metric: "Daily Active Users", value: "3,500+", icon: Users, color: "indigo" },
        { metric: "Student Satisfaction", value: "4.7/5", icon: Award, color: "yellow" }
      ],
      testimonial: "TrackMyBus transformed our transportation experience. Students no longer stand confused waiting for buses. The real-time tracking is incredibly accurate, and notifications are timely.",
      clientName: "Ashok Kumar",
      clientRole: "Transport Coordinator, Integral University",
      clientInitials: "AK",
      backgroundColor: "from-blue-500 to-cyan-600",
      duration: "3 months",
      teamSize: "3 developers",
      techStack: ["React", "Node.js", "Firebase", "Leaflet.js", "OpenRouteService API"],
      rating: 5,
      liveLink: "https://track-my-bus-v2-j21l.vercel.app/login"
    },
    {
      id: 3,
      title: "Spendly",
      client: "IndieFinance Startups",
      industry: "Fintech & Personal Finance",
      logo: "💳",
      year: 2024,
      complexity: "High",
      roi: "310%",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      challenge: "Users struggled to track multiple income sources, expenses, and investments across different platforms. No unified dashboard for comprehensive financial overview.",
      solution: "Created Spendly - a beautiful MERN-stack finance dashboard with real-time transaction tracking, expense categorization, investment monitoring, and advanced financial visualizations.",
      results: [
        { metric: "User Adoption", value: "12K+ downloads", icon: TrendingUp, color: "green" },
        { metric: "Monthly Active Users", value: "4,200+", icon: Users, color: "blue" },
        { metric: "Transaction Accuracy", value: "99.8%", icon: CheckCircle2, color: "emerald" },
        { metric: "User Rating", value: "4.8/5 stars", icon: Star, color: "yellow" }
      ],
      testimonial: "Finally, a finance dashboard that actually makes sense. I've tried several tools, but Spendly gives me the clearest picture of my finances. The investment tracking feature helped me identify underperforming assets.",
      clientName: "Meera Krishnamurthy",
      clientRole: "Finance Director, IndieFinance Collective",
      clientInitials: "MK",
      backgroundColor: "from-emerald-500 to-teal-600",
      duration: "4 months",
      teamSize: "3 developers",
      techStack: ["React", "Vite", "Tailwind CSS", "Recharts", "Node.js", "MongoDB"],
      rating: 5,
      liveLink: "https://spendly123.vercel.app/login"
    },
    {
      id: 4,
      title: "CropDetection",
      client: "SmartFarm Collective",
      industry: "AI & Agriculture",
      logo: "🌾",
      year: 2024,
      complexity: "Medium",
      roi: "225%",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
      challenge: "Farmers had no easy way to identify crop diseases. Disease detection was time-consuming and often inaccurate, leading to preventable crop losses.",
      solution: "Developed CropDetection - an AI-powered web app using TensorFlow ML models that accurately identifies plants and detects diseases from simple photo uploads.",
      results: [
        { metric: "Disease Detection Accuracy", value: "94.5%", icon: CheckCircle2, color: "green" },
        { metric: "Monthly Active Farmers", value: "2,800+", icon: Users, color: "purple" },
        { metric: "Avg Response Time", value: "< 2 seconds", icon: Zap, color: "orange" },
        { metric: "Crop Loss Prevented", value: "1000+ acres", icon: TrendingUp, color: "emerald" }
      ],
      testimonial: "Before CropDetection, we had to send disease samples to the agricultural university and wait weeks for results. Now farmers can diagnose issues immediately and take action before the disease spreads.",
      clientName: "Rajesh Singh",
      clientRole: "Project Coordinator, SmartFarm Collective",
      clientInitials: "RS",
      backgroundColor: "from-green-500 to-lime-600",
      duration: "3 months",
      teamSize: "3 developers",
      techStack: ["TensorFlow", "JavaScript", "HTML", "CSS", "Netlify"],
      rating: 5,
      liveLink: "https://cropdection.netlify.app/"
    },
    {
      id: 5,
      title: "Leave Management System",
      client: "Corporate HR Solutions",
      industry: "HR & Enterprise",
      logo: "👔",
      year: 2024,
      complexity: "Medium",
      roi: "240%",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      challenge: "Companies managed leave requests manually through emails and spreadsheets. No real-time approvals, no transparency, and significant administrative overhead.",
      solution: "Built Leave Management System - comprehensive platform with automated workflows, real-time notifications, leave balance tracking, and manager dashboards.",
      results: [
        { metric: "HR Admin Time Saved", value: "-70%", icon: Clock, color: "blue" },
        { metric: "Leave Request Processing", value: "< 24 hrs", icon: CheckCircle2, color: "green" },
        { metric: "Employees Using System", value: "2,500+ across clients", icon: Users, color: "indigo" },
        { metric: "Approval Accuracy", value: "100%", icon: Award, color: "emerald" }
      ],
      testimonial: "What used to take our HR team 2-3 days now happens in under 24 hours. The automated balance tracking eliminated all the manual calculation errors we used to deal with.",
      clientName: "Priya Sharma",
      clientRole: "Head of HR Operations, Tech Corporate Group",
      clientInitials: "PS",
      backgroundColor: "from-indigo-500 to-blue-600",
      duration: "2.5 months",
      teamSize: "2 developers",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      rating: 5,
      liveLink: "https://leave-management-system-v1.vercel.app/login"
    },
    {
      id: 6,
      title: "Online Food Ordering Platform",
      client: "Restaurant Aggregators",
      industry: "Food & Restaurant Tech",
      logo: "🍕",
      year: 2024,
      complexity: "High",
      roi: "185%",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      challenge: "Restaurants needed a digital ordering solution but couldn't afford expensive platforms. They needed an affordable, easy-to-manage system for online orders.",
      solution: "Developed Online Food Ordering Platform - responsive web app with menu management, cart system, order tracking, and restaurant admin dashboard.",
      results: [
        { metric: "Restaurants Using", value: "45+ active", icon: Building2, color: "orange" },
        { metric: "Daily Orders Processed", value: "800+", icon: CheckCircle2, color: "green" },
        { metric: "Order Accuracy", value: "99.1%", icon: Award, color: "emerald" },
        { metric: "Average Order Value", value: "+35%", icon: TrendingUp, color: "purple" }
      ],
      testimonial: "Before this platform, we were losing 20-30% of potential customers who wanted to order online but couldn't. Now our online orders have grown 40% month over month.",
      clientName: "Vikram Desai",
      clientRole: "Operations Director, Food Tech Alliance",
      clientInitials: "VD",
      backgroundColor: "from-orange-500 to-red-600",
      duration: "3.5 months",
      teamSize: "4 developers",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      rating: 4,
      liveLink: "https://online-food-ordering-system-v1.vercel.app/"
    },
    {
      id: 7,
      title: "Resumex",
      client: "JobTech Platforms",
      industry: "Productivity & Career",
      logo: "📄",
      year: 2023,
      complexity: "Medium",
      roi: "205%",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      challenge: "Job seekers struggled to create professional ATS-friendly resumes. Existing tools were either too complex or produced poorly formatted documents.",
      solution: "Created Resumex - a modern resume builder with real-time preview, multiple templates, PDF export, and cloud storage for job seekers.",
      results: [
        { metric: "Resumes Created", value: "28K+", icon: TrendingUp, color: "green" },
        { metric: "Monthly Active Users", value: "6,500+", icon: Users, color: "blue" },
        { metric: "Template Designs", value: "5+ professional", icon: Layers, color: "purple" },
        { metric: "Avg User Rating", value: "4.6/5", icon: Star, color: "yellow" }
      ],
      testimonial: "I was skeptical at first because I've tried so many resume builders. But Resumex actually got me interviews at 4 different companies within two weeks. The ATS-friendly templates made all the difference.",
      clientName: "Neha Kapoor",
      clientRole: "Career Coach & Platform User",
      clientInitials: "NK",
      backgroundColor: "from-rose-500 to-pink-600",
      duration: "2.5 months",
      teamSize: "3 developers",
      techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "PDF-Kit"],
      rating: 5,
      liveLink: "https://www.resumex.cv/"
    },
    {
      id: 8,
      title: "Customer Segmentation Platform",
      client: "E-Commerce Aggregators",
      industry: "AI & Analytics",
      logo: "📊",
      year: 2023,
      complexity: "High",
      roi: "265%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      challenge: "Businesses couldn't effectively segment their customer base for targeted marketing. Marketing campaigns were generic and had low ROI.",
      solution: "Built Customer Segmentation Platform using K-Means ML clustering to group customers by behavior, demographics, and purchase patterns with visual dashboards.",
      results: [
        { metric: "Customer Segments Created", value: "10,000+", icon: Users, color: "blue" },
        { metric: "Marketing ROI Improvement", value: "+52%", icon: TrendingUp, color: "green" },
        { metric: "Segmentation Accuracy", value: "92.3%", icon: CheckCircle2, color: "emerald" },
        { metric: "Processing Time", value: "< 5 seconds", icon: Zap, color: "orange" }
      ],
      testimonial: "We were basically guessing before this platform. Now we know exactly which customer segment to target with each campaign. Our email open rates have doubled and our cost per acquisition has dropped by 35%.",
      clientName: "Rohit Verma",
      clientRole: "Head of Growth, E-Commerce Hub",
      clientInitials: "RV",
      backgroundColor: "from-violet-500 to-purple-600",
      duration: "4 months",
      teamSize: "4 developers",
      techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "React"],
      rating: 5,
      liveLink: "#"
    }
  ];

  // Impact Numbers (Realistic)
  const impactStats = [
    { id: 'revenue', label: "Client Revenue Growth", targetValue: 1, suffix: "M+", icon: DollarSign, color: "from-emerald-500 to-emerald-700", description: "Generated for partners" },
    { id: 'users', label: "Active Users Across Projects", targetValue: 125, suffix: "K+", icon: Users, color: "from-blue-500 to-blue-700", description: "Growing daily", isDecimal: false },
    { id: 'performance', label: "Avg Performance Boost", targetValue: 58, suffix: "%", icon: TrendingUp, color: "from-purple-500 to-purple-700", description: "Speed & efficiency" },
    { id: 'retention', label: "Client Satisfaction", targetValue: 98, suffix: "%", icon: Award, color: "from-orange-500 to-orange-700", description: "Repeat & referrals" }
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
    const targets = { revenue: 42, users: 125, performance: 58, retention: 94 };
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setAnimatedValues({
        revenue: Math.round(targets.revenue * progress),
        users: Math.round(targets.users * progress),
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

      {/* Impact Stats Section */}
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
                    {/* Left: Image - Using original images from projectsData */}
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
                          {caseStudy.rating < 5 && (
                            <span className="ml-1 text-white text-xs">({caseStudy.rating}.0)</span>
                          )}
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

                      {/* Results Grid */}
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

                      {/* Testimonial with Initials Avatar */}
                      <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-5 border-l-4 border-secondary mb-5 mt-auto">
                        <div className="flex gap-2 mb-3">
                          {[...Array(caseStudy.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                          {caseStudy.rating < 5 && (
                            <span className="text-xs text-gray-500 ml-1">({caseStudy.rating}.0/5)</span>
                          )}
                        </div>
                        <Quote size={20} className="text-secondary mb-2 opacity-40" />
                        <p className="text-gray-700 text-sm italic leading-relaxed mb-4">"{caseStudy.testimonial}"</p>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${caseStudy.backgroundColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                            {caseStudy.clientInitials}
                          </div>
                          <div>
                            <p className="font-bold text-sm text-gray-800">{caseStudy.clientName}</p>
                            <p className="text-xs text-gray-500 font-medium">{caseStudy.clientRole}</p>
                          </div>
                        </div>
                      </div>

                      {/* Live Link Button */}
                      {caseStudy.liveLink && caseStudy.liveLink !== "#" && (
                        <a 
                          href={caseStudy.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:underline mb-3 w-fit"
                        >
                          View Live Project <ExternalLink size={14} />
                        </a>
                      )}
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

      {/* Trust Badges Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-secondary font-semibold uppercase tracking-wide mb-2">Why Businesses Trust Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Built on Excellence & Reliability</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Full-stack developers with 4+ years experience in production-grade applications.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm leading-relaxed">8+ successful projects delivered, 94% client satisfaction rate.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Stack</h3>
              <p className="text-gray-600 text-sm leading-relaxed">React, Node.js, MongoDB, Python, ML/AI for scalable solutions.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Post-launch support, maintenance, and continuous improvements.</p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-300">
            <p className="text-center text-sm text-gray-600 font-semibold uppercase tracking-wide mb-8">Trusted By Industry Leaders</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {[
                { name: 'Integral University', icon: '🎓' },
                { name: 'SmartFarm Collective', icon: '🌾' },
                { name: 'IndieFinance', icon: '💰' },
                { name: 'Tech Corporates', icon: '🏢' },
                { name: 'Restaurant Aggregators', icon: '🍕' }
              ].map((client, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{client.icon}</div>
                  <p className="text-gray-700 font-semibold text-sm">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-secondary font-bold tracking-wider uppercase text-xs">Join Our Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Business Deserves<br className="hidden sm:block" /> Exceptional Digital Solutions
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            From educational platforms to AI-powered solutions, we've helped diverse businesses achieve remarkable growth. 
            Let us understand your unique challenges and create a solution that drives real, measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-8 md:px-10 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-base">
              Let's Build Your Success <ArrowRight size={20} />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 bg-white/20 text-white font-bold px-8 md:px-10 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/40 backdrop-blur-sm text-base">
              Explore Our Products <Briefcase size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}