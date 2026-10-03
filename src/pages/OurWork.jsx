import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    onTime: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = { projects: 50, satisfaction: 100, onTime: 100, support: 24 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          projects: Math.min(Math.floor(targets.projects * progress), targets.projects),
          satisfaction: Math.min(Math.floor(targets.satisfaction * progress), targets.satisfaction),
          onTime: Math.min(Math.floor(targets.onTime * progress), targets.onTime),
          support: Math.min(Math.floor(targets.support * progress), targets.support)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // Extract unique categories from projectsData
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="bg-[#f6f8fc] min-h-screen">
      {/* Page Hero - Matching Project Journey Header Exactly */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={13} className="text-primary" />
            Proven Portfolio & Case Studies
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Software Solutions & Digital Products.{' '}
            <span className="text-primary underline decoration-blue-200 decoration-wavy underline-offset-8">
              Shipped with Impact.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore our portfolio of enterprise platforms, full-stack web applications, and intelligent systems engineered for high velocity, reliability, and measurable business growth.
          </p>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10 pt-8 border-t border-slate-100">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">{counters.projects}+</div>
              <div className="text-slate-500 text-xs font-medium">Production Systems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">{counters.satisfaction}%</div>
              <div className="text-slate-500 text-xs font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">{counters.onTime}%</div>
              <div className="text-slate-500 text-xs font-medium">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary mb-0.5">{counters.support}/7</div>
              <div className="text-slate-500 text-xs font-medium">Uptime & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Gallery Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar - Matching Navigation Pills */}
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="inline-flex flex-wrap items-center justify-center bg-white p-1.5 rounded-full border border-slate-200/80 shadow-xs gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={activeFilter === category}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activeFilter === category
                      ? 'bg-primary text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-xs group border border-slate-200/80 flex flex-col hover:shadow-md transition-all duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden shrink-0 bg-slate-50">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" 
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Title Preview */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{project.name}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  {/* Rating Section */}
                  {project.rating && (
                    <div className="mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star size={15} className="fill-amber-400 text-amber-400" />
                          <span className="text-xs sm:text-sm font-bold text-slate-800">{project.rating}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack?.frontend?.slice(0, 2).map((tech, i) => (
                         <span key={`fe-${i}`} className="text-[11px] font-mono font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/60">
                           {tech}
                         </span>
                      ))}
                      {project.techStack?.backend?.slice(0, 2).map((tech, i) => (
                         <span key={`be-${i}`} className="text-[11px] font-mono font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/60">
                           {tech}
                         </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <Link to={`/our-work/${project.id}`} className="text-primary font-semibold text-xs sm:text-sm inline-flex items-center hover:text-blue-900 transition-colors">
                        View Details
                        <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={14} />
                      </Link>
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-8 h-8 bg-slate-50 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group/link border border-slate-200 hover:border-primary"
                          title="Visit Live Site"
                          aria-label={`Visit ${project.name} live site (opens in a new tab)`}
                        >
                          <ExternalLink size={14} className="text-slate-500 group-hover/link:text-white transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500 font-mono text-sm">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Final CTA - Matching Services & Home */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} className="text-secondary" />
            <span>Start Your Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Let&apos;s collaborate on the next product you want to ship. We&apos;ll provide transparent technical milestones and fixed deliverables.
          </p>
          <div className="flex items-center justify-center gap-3.5 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-900 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 font-semibold px-6 py-3.5 rounded-full hover:bg-slate-50 transition-colors shadow-2xs text-sm sm:text-base">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}