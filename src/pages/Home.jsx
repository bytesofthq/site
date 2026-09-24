import { MonitorSmartphone, LineChart, Users, Store, HeartPulse, Smartphone, Bot, Palette, Star, Zap, HeartHandshake, Mail, ChevronLeft, ChevronRight, ArrowRight, Phone, MapPin, Shield, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

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

const services = [
  { icon: MonitorSmartphone, title: "Web Engineering", desc: "Custom, responsive web applications built for speed and a clear user experience." },
  { icon: LineChart, title: "Search Optimization", desc: "Technical and content SEO that captures high-intent search traffic." },
  { icon: Users, title: "Social Media Strategy", desc: "Campaigns that build loyalty, community, and qualified leads." },
  { icon: Store, title: "E-commerce Platforms", desc: "Secure storefronts built for a smooth shopping experience." },
  { icon: HeartPulse, title: "Healthcare Software", desc: "Secure, intuitive software for healthcare providers and patients." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform apps that reach users on their phones." },
  { icon: Bot, title: "AI Integration", desc: "Automation and AI that streamline work and surface useful insight." },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces that balance clarity, usability, and a strong brand feel." }
];

const advantages = [
  { icon: Star, title: "Uncompromising Quality", desc: "Top-tier engineering with an obsessive focus on performance and usability." },
  { icon: Zap, title: "Rapid Deployment", desc: "Agile delivery that launches robust solutions on a predictable timeline." },
  { icon: HeartHandshake, title: "Dedicated Partnership", desc: "An extension of your team, with proactive support after launch." },
  { icon: Shield, title: "You Own the Code", desc: "Fixed-price proposals, direct access to the team, and full code ownership." }
];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand your goals, audience, and the technical landscape to map the optimal path forward.",
    tags: ["Scope & Goals", "Tech Architecture"]
  },
  {
    step: "02",
    title: "Design",
    desc: "Turn the strategy into user-centric wireframes, interactive prototypes, and design systems.",
    tags: ["UI/UX Prototypes", "Design System"]
  },
  {
    step: "03",
    title: "Build",
    desc: "Ship clean, scalable code with weekly sprint reviews and continuous feedback loops.",
    tags: ["Production Code", "Weekly Sprints"]
  },
  {
    step: "04",
    title: "Scale",
    desc: "Thorough testing, performance optimization, and seamless cloud deployment.",
    tags: ["QA Testing", "Cloud Launch"]
  },
  {
    step: "05",
    title: "Support",
    desc: "Proactive monitoring, regular updates, and iterative improvements well after launch.",
    tags: ["SLA Monitoring", "Ongoing Updates"]
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="absolute top-[-8%] right-[-6%] w-[640px] h-[640px] bg-blue-100/80 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-primary text-sm font-medium px-3.5 py-1.5 rounded-full mb-7 shadow-sm">
              <Sparkles size={14} />
              Digital experiences that drive growth
            </div>
            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
              Engineering Digital
              <span className="block">Experiences That</span>
              <span className="mt-1 pl-4 border-l-[5px] border-secondary block">Drive Growth</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 mb-8 leading-relaxed">
              A premier digital agency specializing in high-performance web development, strategic SEO, and data-driven marketing to elevate your brand's online presence.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/contact" className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition-colors shadow-sm inline-flex items-center gap-2">
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link to="/our-work" className="bg-white border border-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-colors">
                View Our Work
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {["50+ Projects", "100% Satisfaction", "Remote-first"].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="hero-float relative w-full max-w-[500px] h-[400px] sm:h-[440px]"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 78% 74% at 48% 52%, #000 62%, transparent 92%)",
                maskImage: "radial-gradient(ellipse 78% 74% at 48% 52%, #000 62%, transparent 92%)"
              }}
              aria-hidden="true"
            >
              <div className="absolute left-[18%] top-[18%] h-56 w-56 rounded-full bg-blue-200/70 blur-3xl" />

              <div className="absolute left-0 top-3 w-[70%] origin-bottom-left -rotate-[13deg] rounded-[1.6rem] border border-white/80 bg-white/40 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] backdrop-blur-md sm:p-5">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-400">01</p>
                <p className="mt-1 text-base font-semibold text-slate-600">Discover</p>
                <div className="mt-4 space-y-2">
                  <div className="h-1.5 w-[84%] rounded-full bg-slate-300/80" />
                  <div className="h-1.5 w-[60%] rounded-full bg-slate-200" />
                  <div className="h-1.5 w-[72%] rounded-full bg-slate-200/80" />
                </div>
              </div>

              <div className="absolute left-[14%] top-[5.25rem] w-[72%] -rotate-[4deg] rounded-[1.6rem] border border-white bg-white/75 p-4 shadow-[0_24px_50px_-28px_rgba(30,58,138,0.55)] backdrop-blur-md sm:p-5">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-primary">02</p>
                <p className="mt-1 text-base font-semibold text-slate-900">Design</p>
                <div className="mt-4 flex gap-2">
                  <div className="h-12 flex-1 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white" />
                  <div className="h-12 flex-1 rounded-xl border border-slate-100 bg-slate-50" />
                  <div className="h-12 w-9 rounded-xl border border-blue-100 bg-blue-50" />
                </div>
              </div>

              <div className="absolute right-0 top-[11.5rem] w-[74%] rotate-[7deg] overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-[#2a56c6] via-[#1e3a8a] to-[#152a66] p-5 text-white shadow-[0_30px_55px_-18px_rgba(30,58,138,0.7)]">
                <div className="hero-sheen pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-y-3 right-0 w-px bg-gradient-to-b from-transparent via-amber-200 to-amber-400/70" />
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/90 to-amber-300" />
                <p className="relative text-[10px] font-semibold tracking-[0.22em] text-white/55">03</p>
                <p className="relative mt-1 text-xl font-semibold">Build</p>
                <p className="relative mt-2 text-sm leading-relaxed text-blue-100/80">Clean code, shipped with you.</p>
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

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Digital Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Comprehensive strategies and technical expertise tailored to your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Why teams choose Bytesoft</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Reliable execution, thoughtful design, and a clear commitment to your success.
            </p>
          </div>

          {/* Clean Minimal Stats Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm py-5 px-6 sm:px-8 mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 text-center">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "10+", label: "Expert Developers" },
                { value: "24/7", label: "Support Available" }
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


      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28 self-start">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">How we deliver</h2>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              A proven methodology refined across the projects we have shipped. Each step stays visible, so you always know what happens next.
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

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Featured Projects</h2>
              <p className="text-slate-500">A selection of our most impactful digital work.</p>
            </div>
            <Link to="/our-work" className="text-accent font-semibold hover:text-primary inline-flex items-center gap-1 text-sm">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectsData.slice(0, 3).map((project) => (
              <Link key={project.id} to={`/our-work/${project.id}`} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-1">{project.category}</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{project.name}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{project.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Sparkles size={13} className="text-secondary" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">What our partners say</h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto mb-10">
            Real feedback from organizations we have partnered with to build impactful digital products.
          </p>

          {/* Refined Spotlight Card */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative bg-white rounded-3xl border border-slate-100 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.06)] p-7 sm:p-10 md:p-12 transition-all overflow-hidden text-center group"
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

            {/* Quote with Smooth Key Transition */}
            <p
              key={activeTestimonial}
              className="relative z-10 text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed font-normal mb-8 max-w-2xl mx-auto"
            >
              “{testimonials[activeTestimonial].quote}”
            </p>

            {/* Author with Verified Badge */}
            <div className="relative z-10 flex items-center justify-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-blue-50 text-primary font-bold text-sm flex items-center justify-center border border-blue-100/80 shadow-sm shrink-0">
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
                  {testimonials[activeTestimonial].role} · <span className="text-slate-600 font-medium">{testimonials[activeTestimonial].org}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Pagination & Arrow Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
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
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-[0_15px_45px_-15px_rgba(15,23,42,0.06)] p-7 sm:p-10 md:p-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
            {/* Subtle Ambient Corner Tint */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/80 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                Let's start a conversation
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Ready to elevate your digital presence or build your next product? Reach out and our team will reply within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 shadow-sm hover:shadow transition-all group"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-xs text-slate-400 font-medium">
                  ⚡ Reply within 24h guaranteed
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
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Call Directly</p>
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
