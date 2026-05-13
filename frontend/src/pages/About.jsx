import { ArrowRight, Target, ShieldCheck, Zap, Award, Globe, Search, PenTool, Code, Rocket, CheckCircle2, Server, Smartphone, Database, Layout, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Zap size={32} className="text-secondary" />,
      title: "Radical Innovation",
      desc: "We don't settle for industry standards; we define them. Our team is constantly exploring emerging technologies to give you a competitive edge."
    },
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      title: "Uncompromising Integrity",
      desc: "We believe in transparent pricing, honest timelines, and clear communication. No hidden fees, no technical jargon—just results."
    },
    {
      icon: <Award size={32} className="text-secondary" />,
      title: "Relentless Excellence",
      desc: "From the first pixel designed to the final line of code deployed, we maintain an obsessive focus on quality and performance."
    }
  ];

  return (
    <div>
      
      {/* Page Hero - Enhanced with Gradient Background */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary py-20 md:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Who We Are</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Engineering the <br className="hidden md:block" /> Future of Digital
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            We are a collective of passionate technologists, visionary designers, and data-driven strategists dedicated to building exceptional online experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
            
            <div className="lg:w-1/2 relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-8 -translate-y-8 -z-10"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-50 rounded-full translate-x-8 translate-y-8 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Bytesoft Team Collaboration" 
                className="rounded-2xl shadow-2xl border border-slate-100 object-cover w-full h-[400px] md:h-[500px]"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4 md:gap-6 animate-pulse-slow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="text-primary" size={24} />
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-black text-gray-900 mb-1">100+</span>
                  <span className="text-gray-600 text-sm md:text-base font-medium">Projects Delivered</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Target size={28} className="text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                At Bytesoft, we believe that the internet is the most powerful tool for business growth in human history. Yet, too many companies are held back by slow, outdated, and uninspired digital infrastructure.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                Our mission is simple: <strong className="text-gray-900 font-semibold">We don't just build websites; we architect digital growth platforms.</strong> By combining cutting-edge software engineering with deep psychological marketing insights, we build digital assets that dominate markets and drive measurable ROI.
              </p>
              
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div className="border-l-4 border-secondary pl-5 md:pl-6">
                  <span className="block text-3xl md:text-4xl font-black text-gray-900 mb-1 md:mb-2">98%</span>
                  <span className="text-gray-600 text-sm md:text-base font-medium">Client Retention Rate</span>
                </div>
                <div className="border-l-4 border-primary pl-5 md:pl-6">
                  <span className="block text-3xl md:text-4xl font-black text-gray-900 mb-1 md:mb-2">10x</span>
                  <span className="text-gray-600 text-sm md:text-base font-medium">Average ROI Delivered</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              The foundational principles that guide every line of code we write and every strategy we deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Process */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Proven Process</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              A systematic approach to turning complex challenges into elegant digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-100 -z-10"></div>
            
            {[
              { icon: <Search size={24} />, title: "1. Discovery", desc: "We dive deep into your business goals, target audience, and market landscape." },
              { icon: <PenTool size={24} />, title: "2. Strategy & Design", desc: "Crafting intuitive user experiences and striking visual identities that convert." },
              { icon: <Code size={24} />, title: "3. Engineering", desc: "Building robust, scalable, and blazingly fast technical infrastructure." },
              { icon: <Rocket size={24} />, title: "4. Launch & Scale", desc: "Deploying flawlessly and continuously optimizing for maximum growth." }
            ].map((step, index) => (
              <div key={index} className="relative group text-center flex flex-col items-center p-4">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-4 border-slate-50 flex items-center justify-center mb-4 md:mb-5 shadow-sm group-hover:border-secondary transition-colors duration-300 relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">The Tech Stack We Master</h2>
              <div className="w-16 h-1.5 bg-secondary mb-6 md:mb-8 rounded-full"></div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                We don't tie ourselves to a single technology. We select the right tools for your specific business requirements, ensuring scalability, security, and exceptional performance.
              </p>
              <ul className="space-y-3">
                {['High-Performance React & Next.js', 'Robust Node.js & Python Backends', 'Scalable AWS Cloud Infrastructure', 'Modern E-commerce Platforms'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm md:text-base font-medium">
                    <CheckCircle2 className="text-secondary mr-3 shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {[
                { name: "Frontend", icon: <Layout size={20} />, tags: "React, Vue, Next.js" },
                { name: "Backend", icon: <Server size={20} />, tags: "Node, Python, Go" },
                { name: "Database", icon: <Database size={20} />, tags: "PostgreSQL, MongoDB" },
                { name: "Mobile", icon: <Smartphone size={20} />, tags: "React Native, Flutter" },
                { name: "Cloud", icon: <Globe size={20} />, tags: "AWS, GCP, Vercel" },
                { name: "UI/UX", icon: <PenTool size={20} />, tags: "Figma, TailwindCSS" },
              ].map((tech, idx) => (
                <div key={idx} className="bg-white p-4 md:p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 text-secondary rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.tags}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Reduced Height */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Ready to partner with the best?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-6 max-w-xl mx-auto">
            Whether you are looking to build a new platform from scratch or scale an existing product, our team is ready to deliver.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg text-sm md:text-base"
          >
            Get In Touch
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}