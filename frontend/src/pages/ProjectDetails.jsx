import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, ShieldCheck, Zap, Server, Layout as LayoutIcon, Wrench, Star } from 'lucide-react';
import { projectsData } from './Data/Projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Project Not Found</h2>
          <Link to="/products" className="text-primary hover:text-secondary flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-20 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <Link to="/products" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Products
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-primary/20 text-blue-200 border border-primary/30 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md">
              {project.category}
            </span>
            <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {project.partner}
            </span>
            {project.rating && (
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md flex items-center gap-2">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                {project.rating}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {project.name}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>

          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-primary/30 hover:-translate-y-1"
            >
              Visit Live Project <ExternalLink size={20} />
            </a>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Layers className="text-primary" /> Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {project.introduction}
              </p>
            </div>

            {/* Features */}
            {project.features && Object.keys(project.features).length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Zap className="text-primary" /> Key Features
                </h2>
                <div className="space-y-6">
                  {Object.entries(project.features).map(([group, features]) => (
                    <div key={group}>
                      <h3 className="text-lg font-semibold text-slate-700 capitalize mb-3 border-b border-slate-100 pb-2">
                        {group === 'general' ? 'Core Capabilities' : `${group} Features`}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Real-Time (If exists) */}
            {project.realTime && project.realTime.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Real-Time Capabilities</h2>
                <ul className="space-y-3">
                  {project.realTime.map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                       <span className="text-slate-600">{item}</span>
                     </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Impact */}
            {project.impact && project.impact.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Impact</h2>
                <ul className="space-y-3">
                  {project.impact.map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <Zap size={20} className="text-amber-500 shrink-0 mt-0.5" />
                       <span className="text-slate-600">{item}</span>
                     </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conclusion */}
            {project.conclusion && (
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 border border-blue-100">
                <p className="text-slate-700 leading-relaxed font-medium text-lg italic">
                  "{project.conclusion}"
                </p>
              </div>
            )}
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            {/* Project Image */}
            <div className="bg-white rounded-3xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100">
              <img src={project.image} alt={project.name} className="w-full h-auto rounded-2xl" />
            </div>

            {/* Tech Stack */}
            {project.techStack && (
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Technologies Used</h2>
                
                <div className="space-y-6">
                  {project.techStack.frontend && project.techStack.frontend.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <LayoutIcon size={16} /> Frontend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.frontend.map((tech, i) => (
                          <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.techStack.backend && project.techStack.backend.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Server size={16} /> Backend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.backend.map((tech, i) => (
                          <span key={i} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-md text-sm font-medium border border-emerald-100">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.techStack.tools && project.techStack.tools.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Wrench size={16} /> Tools & Others
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.tools.map((tech, i) => (
                          <span key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-md text-sm font-medium border border-purple-100">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Security */}
            {project.security && project.security.length > 0 && (
              <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-400">
                  <ShieldCheck size={24} /> Security Features
                </h2>
                <ul className="space-y-3">
                  {project.security.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                       <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                       <span>{item}</span>
                     </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
