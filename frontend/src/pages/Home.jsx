import { MapPin, Building2, MonitorSmartphone, LineChart, Users, Store, Star, Zap, HeartHandshake, Mail, HeartPulse, Smartphone, Bot, Palette, ChevronLeft, ChevronRight, ArrowRight, Phone, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { projectsData } from './Data/Projects';

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

const clients = [
  "E-commerce & Retail",
  "Healthcare & Pharma", 
  "Banking & Fintech",
  "Education & EdTech",
  "Real Estate",
  "Manufacturing",
  "Media & Entertainment",
  "Logistics & Supply Chain"
];

// Display as chips/badges


export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    developers: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = { projects: 100, satisfaction: 98, developers: 10, support: 24 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          projects: Math.min(Math.floor(targets.projects * progress), targets.projects),
          satisfaction: Math.min(Math.floor(targets.satisfaction * progress), targets.satisfaction),
          developers: Math.min(Math.floor(targets.developers * progress), targets.developers),
          support: Math.min(Math.floor(targets.support * progress), targets.support)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const prevTestimonial = () => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#eef0f8] py-20 md:py-28 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              BYTESOFT — Engineering Digital Experiences That{' '}
              <span className="text-secondary relative inline-block">
                Drive Growth
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q 100 12 200 8" fill="transparent" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
              A premier digital agency specializing in high-performance web development, strategic SEO, and data-driven marketing to elevate your brand's online presence.
            </p>
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-900 transition-colors shadow-md">Request Demo</Link>
              <Link to="/our-work" className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors">View Our Work</Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team working at Bytesoft"
                className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by businesses - ATTRACTIVE & RESPONSIVE */}
      <section className="bg-white py-16 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          
          
          <p className="text-center text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
            TRUSTED BY BUSINESSES ACROSS INDUSTRIES
          </p>
          
          
          
          {/* Marquee Container */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="overflow-hidden py-6">
              <div className="flex animate-marquee whitespace-nowrap">
                {clients.map((client, i) => (
                  <div key={`first-${i}`} className="inline-flex items-center mx-4 sm:mx-6 md:mx-8">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-500 hover:text-primary transition-all duration-300 cursor-default select-none tracking-wide">
                      {client}
                    </span>
                    <span className="ml-4 sm:ml-6 md:ml-8 text-gray-300 text-lg">•</span>
                  </div>
                ))}
                {clients.map((client, i) => (
                  <div key={`second-${i}`} className="inline-flex items-center mx-4 sm:mx-6 md:mx-8">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-500 hover:text-primary transition-all duration-300 cursor-default select-none tracking-wide">
                      {client}
                    </span>
                    <span className="ml-4 sm:ml-6 md:ml-8 text-gray-300 text-lg">•</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Digital Solutions</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              Comprehensive strategies and technical expertise tailored to your business goals.
            </p>
          </div>          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <MonitorSmartphone size={28} className="sm:w-8 sm:h-8" />, title: "Web Engineering", desc: "Custom, responsive web applications built with modern frameworks for exceptional speed and user experience." },
              { icon: <LineChart size={28} className="sm:w-8 sm:h-8" />, title: "Search Optimization", desc: "Technical and content-driven SEO strategies that dominate search rankings and capture high-intent traffic." },
              { icon: <Users size={28} className="sm:w-8 sm:h-8" />, title: "Social Media Strategy", desc: "Engaging campaigns across social channels that build brand loyalty, foster community, and generate leads." },
              { icon: <Store size={28} className="sm:w-8 sm:h-8" />, title: "E-commerce Platforms", desc: "Scalable, secure online storefronts optimized for seamless shopping experiences and high conversion rates." },
              { icon: <HeartPulse size={28} className="sm:w-8 sm:h-8" />, title: "Healthcare Software", desc: "Secure, compliant, and intuitive software solutions designed specifically for healthcare providers and patients." },
              { icon: <Smartphone size={28} className="sm:w-8 sm:h-8" />, title: "App Development", desc: "Native and cross-platform mobile applications that deliver engaging experiences right to your users' fingertips." },
              { icon: <Bot size={28} className="sm:w-8 sm:h-8" />, title: "AI Integration", desc: "Intelligent automation and AI-driven solutions to streamline operations and unlock powerful data insights." },
              { icon: <Palette size={28} className="sm:w-8 sm:h-8" />, title: "UI/UX Design", desc: "User-centric interface design focusing on aesthetics and usability to maximize engagement and conversion." }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:border-blue-100 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-5 sm:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="maxw-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">The Bytesoft Advantage</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              Partner with us for reliable execution, innovative design, and a steadfast commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
            <div className="flex flex-col items-center group px-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-50 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star size={32} className="md:w-10 md:h-10 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Uncompromising Quality</h3>
              <p className="text-sm md:text-base text-gray-600">We deliver top-tier engineering and digital solutions with an obsessive focus on performance and usability.</p>
            </div>
            <div className="flex flex-col items-center group px-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-50 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap size={32} className="md:w-10 md:h-10 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Rapid Deployment</h3>
              <p className="text-sm md:text-base text-gray-600">We respect your timelines, employing agile methodologies to launch robust solutions ahead of schedule.</p>
            </div>
            <div className="flex flex-col items-center group px-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-50 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake size={32} className="md:w-10 md:h-10 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Dedicated Partnership</h3>
              <p className="text-sm md:text-base text-gray-600">Consider us an extension of your team. Our proactive support ensures your digital assets always perform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to grow your business?</h2>
          <p className="text-blue-200 text-base md:text-lg mb-8 max-w-xl mx-auto px-4">Let's build something great together. Get a free consultation — no commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-secondary text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg text-base md:text-lg">
              Let's Talk →
            </Link>
            <Link to="/our-work" className="bg-white/10 border border-white/30 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/20 transition-colors text-base md:text-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
              <div className="w-16 h-1.5 bg-secondary mb-5 md:mb-6 rounded-full"></div>
              <p className="text-gray-600 max-w-xl text-base md:text-lg">
                A selection of our most impactful digital transformations.
              </p>
            </div>
            <Link to="/our-work" className="text-secondary font-bold hover:text-orange-700 flex items-center group text-sm sm:text-base">
              View All Our Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {projectsData.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                to={`/our-work/${project.id}`}
                className="rounded-2xl overflow-hidden shadow-lg group relative block"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-secondary font-semibold text-xs sm:text-sm mb-2 tracking-wider uppercase">{project.category}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">{project.shortDescription}</p>
                    <span className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 inline-flex items-center gap-1 text-secondary text-xs font-bold">
                      View Details <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Partners Say</h2>
          <div className="w-16 h-1.5 bg-secondary mx-auto mb-12 md:mb-16 rounded-full" />

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl text-secondary opacity-50">&ldquo;</div>

            <p className="text-base sm:text-lg md:text-xl text-white mb-8 md:mb-10 leading-relaxed font-light min-h-[120px] sm:min-h-[100px] transition-all duration-300 px-2">
              {testimonials[activeTestimonial].quote}
            </p>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 bg-secondary flex items-center justify-center shadow-lg">
                <span className="text-white text-xl sm:text-2xl font-bold">{testimonials[activeTestimonial].initial}</span>
              </div>
              <h4 className="font-bold text-white text-base sm:text-lg">{testimonials[activeTestimonial].name}</h4>
              <p className="text-blue-200 text-xs sm:text-sm">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            <button onClick={prevTestimonial} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronLeft size={20} className="sm:w-5 sm:h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${ i === activeTestimonial ? 'bg-secondary w-5 sm:w-6' : 'bg-white/40 hover:bg-white/60'}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronRight size={20} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">Transparent Pricing Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10 text-base sm:text-lg px-2">
              No hidden fees or surprise costs. Choose a plan that scales with your ambition, or contact us for a custom enterprise solution.
            </p>
            <Link to="/pricing" className="inline-block bg-primary text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-900 transition-colors text-base md:text-lg">View Package Options</Link>
          </div>
        </div>

      </section> */}

      {/* Get In Touch Section - Professional */}
            {/* Get In Touch Section - Professional with Workspace Image */}
      <section ref={sectionRef} className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                Ready to elevate your digital presence? Reach out to our strategists today to discuss how we can engineer your next phase of growth.
              </p>

              {/* Remote-first badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Remote-first · Serving clients across India & beyond
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 divide-y divide-gray-100">
                <a href="mailto:bytesofthq@gmail.com" className="flex items-center gap-4 p-4 sm:p-5 hover:bg-slate-50 transition-colors group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Mail size={18} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email us</p>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">bytesofthq@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+919214749997" className="flex items-center gap-4 p-4 sm:p-5 hover:bg-slate-50 transition-colors group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Phone size={18} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Call us</p>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">+91 9214749997</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 sm:p-5">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Based in</p>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">Lucknow, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 sm:p-5">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Response time</p>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Attractive Contact Us Button */}
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-blue-800 text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl hover:from-blue-800 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg mt-6 sm:mt-8 group relative overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </div>

            {/* Animated Counters */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1 sm:mb-2 counter-number">{counters.projects}+</div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">Projects Completed</div>
                  <div className="w-8 sm:w-12 h-0.5 bg-secondary/30 mx-auto mt-2 sm:mt-3 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1 sm:mb-2 counter-number">{counters.satisfaction}%</div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">Client Satisfaction</div>
                  <div className="w-8 sm:w-12 h-0.5 bg-secondary/30 mx-auto mt-2 sm:mt-3 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1 sm:mb-2 counter-number">{counters.developers}+</div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">Expert Developers</div>
                  <div className="w-8 sm:w-12 h-0.5 bg-secondary/30 mx-auto mt-2 sm:mt-3 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1 sm:mb-2 counter-number">{counters.support}/7</div>
                  <div className="text-gray-500 text-xs sm:text-sm font-medium">Support Available</div>
                  <div className="w-8 sm:w-12 h-0.5 bg-secondary/30 mx-auto mt-2 sm:mt-3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .counter-number {
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
}