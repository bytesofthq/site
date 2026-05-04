import { ArrowRight, Target, ShieldCheck, Zap, Award, Globe } from 'lucide-react';
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
    <div className="pt-20">
      
      {/* Page Hero */}
      <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering the <br className="hidden md:block" /> Future of Digital
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We are a collective of passionate technologists, visionary designers, and data-driven strategists dedicated to building exceptional online experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full -translate-x-8 -translate-y-8 -z-10"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-50 rounded-full translate-x-8 translate-y-8 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Bytesoft Team Collaboration" 
                className="rounded-3xl shadow-2xl border border-slate-100 object-cover w-full h-[500px]"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-6 animate-pulse-slow">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="text-primary" size={32} />
                </div>
                <div>
                  <span className="block text-3xl font-black text-gray-900 mb-1">150+</span>
                  <span className="text-gray-600 font-medium">Projects Delivered</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <Target size={32} className="text-secondary" />
                <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Bytesoft, we believe that the internet is the most powerful tool for business growth in human history. Yet, too many companies are held back by slow, outdated, and uninspired digital infrastructure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Our mission is simple: <strong className="text-gray-900 font-semibold">We don't just build websites; we architect digital growth platforms.</strong> By combining cutting-edge software engineering with deep psychological marketing insights, we build digital assets that dominate markets and drive measurable ROI.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-secondary pl-6">
                  <span className="block text-4xl font-black text-gray-900 mb-2">98%</span>
                  <span className="text-gray-600 font-medium">Client Retention Rate</span>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <span className="block text-4xl font-black text-gray-900 mb-2">10x</span>
                  <span className="text-gray-600 font-medium">Average ROI Delivered</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The foundational principles that guide every line of code we write and every strategy we deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.desc}
                </p>
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
            Ready to partner with the best?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Whether you are looking to build a new platform from scratch or scale an existing product, our team is ready to deliver.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 flex items-center group w-full sm:w-auto justify-center">
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
