import { MapPin, Building2, Phone, MonitorSmartphone, LineChart, Users, Store, Star, Zap, HeartHandshake, Mail, HeartPulse, Smartphone, Bot, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

const testimonials = [
  {
    quote: "Working with Bytesoft has been a game-changer. They didn't just build a website; they engineered a digital platform that doubled our lead generation in just three months.",
    name: "Vikram Singh",
    role: "Director of Operations, Nexus Corp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Our e-commerce revenue grew by 3x within six months of launching our new Bytesoft-built platform. The team's attention to detail and speed was exceptional.",
    name: "Priya Mehra",
    role: "CEO, StyleHive India",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "From the initial brief to final delivery, Bytesoft was professional, creative, and always available. Our app now has over 10,000 active users and growing.",
    name: "Arjun Kapoor",
    role: "Founder, HealthTrack Pro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const clients = [
  "TechNova", "StyleHive", "Nexus Corp", "HealthTrack", "FinEdge", "GrowMore", "BuildRight", "MediaPulse"
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#eef0f8] py-16 md:py-24 overflow-hidden relative">
        {/* Subtle background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              BYTESOFT — Engineering Digital Experiences That{' '}
              <span className="text-secondary relative inline-block">
                Drive Growth
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q 100 12 200 8" fill="transparent" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
              A premier digital agency specializing in high-performance web development, strategic SEO, and data-driven marketing to elevate your brand's online presence.
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact" className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-900 transition-colors shadow-md">Request Demo</Link>
              <Link to="/portfolio" className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors">View Portfolio</Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team working at Bytesoft"
                className="w-full h-64 md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Strip */}
      <section className="bg-white border-y border-gray-100 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Trusted by businesses across industries</p>
          <div className="grid grid-cols-4 md:flex md:flex-wrap md:justify-center md:items-center gap-y-4 md:gap-x-12">
            {clients.map((client) => (
              <span key={client} className="text-sm md:text-xl font-bold text-gray-300 hover:text-gray-500 transition-colors tracking-tight cursor-default select-none text-center">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">Digital Solutions</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive strategies and technical expertise tailored to your business goals.
            </p>
          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MonitorSmartphone size={32} />, title: "Web Engineering", desc: "Custom, responsive web applications built with modern frameworks for exceptional speed and user experience." },
              { icon: <LineChart size={32} />, title: "Search Optimization", desc: "Technical and content-driven SEO strategies that dominate search rankings and capture high-intent traffic." },
              { icon: <Users size={32} />, title: "Social Media Strategy", desc: "Engaging campaigns across social channels that build brand loyalty, foster community, and generate leads." },
              { icon: <Store size={32} />, title: "E-commerce Platforms", desc: "Scalable, secure online storefronts optimized for seamless shopping experiences and high conversion rates." },
              { icon: <HeartPulse size={32} />, title: "Healthcare Software", desc: "Secure, compliant, and intuitive software solutions designed specifically for healthcare providers and patients." },
              { icon: <Smartphone size={32} />, title: "App Development", desc: "Native and cross-platform mobile applications that deliver engaging experiences right to your users' fingertips." },
              { icon: <Bot size={32} />, title: "AI Integration", desc: "Intelligent automation and AI-driven solutions to streamline operations and unlock powerful data insights." },
              { icon: <Palette size={32} />, title: "UI/UX Design", desc: "User-centric interface design focusing on aesthetics and usability to maximize engagement and conversion." }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:border-blue-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">The Bytesoft Advantage</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Partner with us for reliable execution, innovative design, and a steadfast commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star size={40} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uncompromising Quality</h3>
              <p className="text-gray-600">We deliver top-tier engineering and digital solutions with an obsessive focus on performance and usability.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap size={40} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Deployment</h3>
              <p className="text-gray-600">We respect your timelines, employing agile methodologies to launch robust solutions ahead of schedule.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake size={40} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Partnership</h3>
              <p className="text-gray-600">Consider us an extension of your team. Our proactive support ensures your digital assets always perform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to grow your business?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">Let's build something great together. Get a free consultation — no commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-secondary text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg text-lg">
              Let's Talk →
            </Link>
            <Link to="/portfolio" className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-primary mb-4">Featured Case Studies</h2>
              <div className="w-16 h-1.5 bg-secondary mb-6 rounded-full"></div>
              <p className="text-gray-600 max-w-xl text-lg">
                A selection of our most impactful digital transformations.
              </p>
            </div>
            <Link to="/portfolio" className="text-secondary font-bold hover:text-orange-700 flex items-center group">
              View All Projects 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech Startup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-secondary font-semibold text-sm mb-2 tracking-wider uppercase">Web App</span>
                  <h3 className="text-2xl font-bold text-white mb-2">FinTech Dashboard</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">A high-performance financial analytics platform handling real-time data.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer md:-translate-y-8">
              <div className="relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Creative Agency" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-secondary font-semibold text-sm mb-2 tracking-wider uppercase">E-commerce</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Retail Transformation</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Complete replatforming resulting in a 210% increase in mobile conversions.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Corporate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-secondary font-semibold text-sm mb-2 tracking-wider uppercase">Corporate</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Portal</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Scalable architecture serving 50,000+ daily active employees securely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Partners Say</h2>
          <div className="w-16 h-1.5 bg-secondary mx-auto mb-16 rounded-full" />

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 border border-white/20 shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-secondary opacity-50">&ldquo;</div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-secondary fill-secondary" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed font-light min-h-[100px] transition-all duration-300">
              {testimonials[activeTestimonial].quote}
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full mb-4 overflow-hidden border-2 border-secondary">
                <img src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-white text-lg">{testimonials[activeTestimonial].name}</h4>
              <p className="text-blue-200 text-sm">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${ i === activeTestimonial ? 'bg-secondary w-6' : 'bg-white/40 hover:bg-white/60'}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section (Teaser) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-slate-50 rounded-3xl p-12 text-center border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            <h2 className="text-4xl font-bold text-primary mb-6">Transparent Pricing Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
              No hidden fees or surprise costs. Choose a plan that scales with your ambition, or contact us for a custom enterprise solution.
            </p>
            <Link to="/pricing" className="btn-primary inline-block text-lg px-8 py-4">View Package Options</Link>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-lg">
                Ready to elevate your digital presence? Reach out to our strategists today to discuss how we can engineer your next phase of growth.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:border-secondary transition-colors">
                    <MapPin className="text-secondary" size={26} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Headquarters</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Integral University,<br />
                      Lucknow,<br />
                      226026
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:border-secondary transition-colors">
                    <Phone className="text-secondary" size={26} />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">Direct Line</h4>
                    <p className="text-gray-600">+91 9214749997</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:border-secondary transition-colors">
                    <Mail className="text-secondary" size={26} />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">Email Us</h4>
                    <p className="text-gray-600">bytesofthq@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
