import { ArrowRight, Sparkles, Target, ShieldCheck, Zap, Award, Globe, Search, PenTool, Code, Rocket, CheckCircle2, Server, Smartphone, Database, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Zap size={20} className="text-primary" />,
      title: "Radical Innovation",
      desc: "We don't settle for industry standards; we define them. Our team is constantly exploring emerging technologies to give you a competitive edge."
    },
    {
      icon: <ShieldCheck size={20} className="text-primary" />,
      title: "Uncompromising Integrity",
      desc: "We believe in transparent pricing, honest timelines, and clear communication. No hidden fees, no technical jargon—just results."
    },
    {
      icon: <Award size={20} className="text-primary" />,
      title: "Relentless Excellence",
      desc: "From the first pixel designed to the final line of code deployed, we maintain an obsessive focus on quality and performance."
    }
  ];

  return (
    <div>

      {/* Page Hero - Matching Project Journey Header Exactly */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={13} className="text-primary" />
            About Bytesoft
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Engineering the Future of Software.{' '}
            <span className="text-primary underline decoration-blue-200 decoration-wavy underline-offset-8">
              Built for Impact.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            We are a high-performance engineering studio. We partner with ambitious startups and established enterprises to build resilient web architectures, intelligent AI workflows, and digital growth engines.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10 pt-8 border-t border-slate-100">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">50+</div>
              <div className="text-slate-500 text-xs font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">100%</div>
              <div className="text-slate-500 text-xs font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">Zero</div>
              <div className="text-slate-500 text-xs font-medium">Technical Compromises</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">24/7</div>
              <div className="text-slate-500 text-xs font-medium">Uptime & Support SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            <div className="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bytesoft Team Collaboration"
                className="rounded-2xl shadow-sm border border-slate-100 object-cover w-full h-72 sm:h-[360px] lg:h-[400px]"
              />

              {/* Floating Stat Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 p-4 rounded-2xl shadow-sm border border-white flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="text-primary" size={20} />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-slate-900 mb-1">50+</span>
                  <span className="text-slate-500 text-sm font-medium">Projects Delivered</span>
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Target size={20} className="text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-4 md:mb-6">
                At Bytesoft, we believe that the internet is the most powerful tool for business growth in human history. Yet, too many companies are held back by slow, outdated, and uninspired digital infrastructure.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 md:mb-8">
                Our mission is simple: <strong className="text-slate-900 font-semibold">We don't just build websites; we architect digital growth platforms.</strong> By combining cutting-edge software engineering with strategic digital insights, we build digital assets that help businesses grow and succeed online.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                <div className="border-l-2 border-secondary pl-4">
                  <span className="block text-3xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">50+</span>
                  <span className="text-slate-500 text-sm font-medium">Projects Delivered</span>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <span className="block text-3xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">100%</span>
                  <span className="text-slate-500 text-sm font-medium">Client Satisfaction</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
              The foundational principles that guide every line of code we write and every strategy we deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md motion-safe:hover:-translate-y-0.5 transition-all duration-300 border border-slate-100 group">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Process */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Our Proven Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
              A systematic approach to turning complex challenges into elegant digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {[
              { icon: <Search size={20} />, title: "Discovery", desc: "We dive deep into your business goals, target audience, and market landscape." },
              { icon: <PenTool size={20} />, title: "Strategy & Design", desc: "Crafting intuitive user experiences and striking visual identities that convert." },
              { icon: <Code size={20} />, title: "Engineering", desc: "Building robust, scalable, and blazingly fast technical infrastructure." },
              { icon: <Rocket size={20} />, title: "Launch & Scale", desc: "Deploying flawlessly and continuously optimizing for maximum growth." }
            ].map((step, index) => (
              <div key={index} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md motion-safe:hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 md:mb-6">The Tech Stack We Master</h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
                We don't tie ourselves to a single technology. We select the right tools for your specific business requirements, ensuring scalability, security, and exceptional performance.
              </p>
              <ul className="space-y-3">
                {['High-Performance React & Next.js', 'Robust Node.js & Python Backends', 'Scalable AWS Cloud Infrastructure', 'Modern E-commerce Platforms'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm font-medium">
                    <CheckCircle2 className="text-primary mr-3 shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Frontend", icon: <Layout size={20} />, tags: "React, Vue, Next.js" },
                { name: "Backend", icon: <Server size={20} />, tags: "Node, Python, Go" },
                { name: "Database", icon: <Database size={20} />, tags: "PostgreSQL, MongoDB" },
                { name: "Mobile", icon: <Smartphone size={20} />, tags: "React Native, Flutter" },
                { name: "Cloud", icon: <Globe size={20} />, tags: "AWS, GCP, Vercel" },
                { name: "UI/UX", icon: <PenTool size={20} />, tags: "Figma, TailwindCSS" },
              ].map((tech, idx) => (
                <div key={idx} className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-3 md:mb-4 transition-colors">
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{tech.name}</h4>
                  <p className="text-xs text-slate-500">{tech.tags}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Reduced Height */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Ready to partner with us?
          </h2>
          <p className="text-slate-500 mb-6">
            Whether you are looking to build a new platform from scratch or scale an existing product, our team is ready to deliver.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>


    </div>
  );
}