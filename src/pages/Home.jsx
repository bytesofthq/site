import { MonitorSmartphone, LineChart, Users, Store, HeartPulse, Smartphone, Bot, Palette, Star, Zap, HeartHandshake, Mail, ChevronLeft, ChevronRight, ArrowRight, Phone, MapPin, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

const testimonials = [
  {
    quote: "Campus Quest completely revolutionized how we conduct assessments. Our students love the real-time competition and instant feedback. Faculty workload has reduced significantly, and they can now focus on teaching.",
    name: "Dr. S. Ahmad",
    role: "Examination Coordinator, Leading University",
    initial: "SA"
  },
  {
    quote: "TrackMyBus transformed our transportation experience. Students no longer stand confused waiting for buses. The real-time tracking is incredibly accurate, and the notifications are always timely.",
    name: "A. Kumar",
    role: "Transport Coordinator, Leading University",
    initial: "AK"
  },
  {
    quote: "Bytesoft built us a clean, professional website that truly represents our brand. Our dealer inquiries have gone up noticeably since the launch. Great team to work with.",
    name: "Team Bharat Almirah",
    role: "Steel Furniture Brand, India",
    initial: "BA"
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
  { step: "01", title: "Discover", desc: "Understand your goals, audience, and the technical landscape." },
  { step: "02", title: "Design", desc: "Turn the strategy into user-centric wireframes and prototypes." },
  { step: "03", title: "Build", desc: "Ship clean, scalable code with continuous feedback." },
  { step: "04", title: "Scale", desc: "Test, launch, and optimize so the product can grow." },
  { step: "05", title: "Support", desc: "Ongoing updates, monitoring, and improvements after launch." }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-blue-100/70 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-primary text-sm font-medium px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
              <Sparkles size={14} />
              Digital experiences that drive growth
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
              Engineering Digital Experiences That
              <span className="block mt-2 pl-4 border-l-4 border-secondary text-slate-900">Drive Growth</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
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
            <div className="flex flex-wrap gap-3">
              {["50+ Projects", "100% Satisfaction", "Remote-first"].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-2 text-sm text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[340px] sm:h-[420px]" aria-hidden="true">
            <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-white to-indigo-100 border border-white shadow-xl" />
            <div className="absolute top-6 right-6 w-40 h-40 rounded-full bg-gradient-to-br from-accent/80 to-indigo-400 blur-2xl opacity-70" />
            <div className="absolute bottom-10 left-8 w-28 h-28 rounded-3xl bg-white/80 border border-white shadow-lg backdrop-blur" />
            <div className="absolute top-16 left-16 w-24 h-24 rounded-full border-8 border-primary/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-primary via-blue-800 to-blue-600 shadow-2xl shadow-blue-200/70 relative">
                <div className="absolute inset-6 rounded-full border border-white/40" />
                <div className="absolute inset-12 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="absolute bottom-8 right-10 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3">
              <p className="text-2xl font-bold text-accent">50+</p>
              <p className="text-xs text-slate-500">Projects delivered</p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Why teams choose Bytesoft</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Reliable execution, thoughtful design, and a clear commitment to your success.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center">
            {[
              ["50+", "Projects Delivered"],
              ["100%", "Client Satisfaction"],
              ["10+", "Expert Developers"],
              ["24/7", "Support Available"]
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-4xl md:text-5xl font-bold text-accent">{value}</p>
                <p className="text-sm text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">How we deliver</h2>
            <p className="text-slate-500 max-w-sm">A proven methodology refined across the projects we have shipped. Each step stays visible, so you always know what happens next.</p>
          </div>
          <ol className="relative space-y-4">
            {process.map((step) => (
              <li key={step.step} className="flex gap-4 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">{step.step}</span>
                <div className="pt-1.5">
                  <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">What our partners say</h2>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-8 min-h-[96px]">
              “{testimonials[activeTestimonial].quote}”
            </p>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-primary font-bold flex items-center justify-center mb-3">
                {testimonials[activeTestimonial].initial}
              </div>
              <p className="font-semibold text-slate-900">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-slate-500">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-accent hover:text-accent" aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)} aria-label={`Testimonial ${i + 1}`} className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-accent w-6' : 'bg-slate-300 w-2'}`} />
              ))}
            </div>
            <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-accent hover:text-accent" aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Let's start a conversation</h2>
              <p className="text-slate-500 mb-6">
                Ready to elevate your digital presence? Reach out and we'll reply within 24 hours.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition-colors">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4 text-sm">
              <a href="mailto:bytesofthq@gmail.com" className="flex items-center gap-3 text-slate-700 hover:text-accent">
                <Mail size={16} className="text-accent" /> bytesofthq@gmail.com
              </a>
              <a href="tel:+919214749997" className="flex items-center gap-3 text-slate-700 hover:text-accent">
                <Phone size={16} className="text-accent" /> +91 9214749997
              </a>
              <p className="flex items-center gap-3 text-slate-700">
                <MapPin size={16} className="text-accent" /> Lucknow, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
