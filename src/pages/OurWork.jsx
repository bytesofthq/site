import { useState } from 'react';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories from projectsData
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Page Hero - Enhanced with Gradient Background */}
      <section className="pt-14 pb-4 md:pt-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our work</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Projects we've <span className="text-accent">built</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            A showcase of web apps, platforms, and digital products we've delivered for clients and partners.
          </p>
        </div>
      </section>

      {/* Filter & Gallery Section */}
      <section className="py-16 md:py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="reveal bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 group relative border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                ref={(el) => {
                  if (!el) return;
                  el.style.transitionDelay = `${(index % 3) * 0.1}s`;
                  const observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); }
                  }, { threshold: 0.1 });
                  observer.observe(el);
                }}
              >
                <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Title Preview */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md">{project.name}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  {/* Rating Section */}
                  {project.rating && (
                    <div className="mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="fill-amber-400 text-amber-400" />
                          <span className="font-bold text-slate-800">{project.rating}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium"></span>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack?.frontend?.slice(0, 2).map((tech, i) => (
                         <span key={`fe-${i}`} className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded-md border border-blue-100">
                           {tech}
                         </span>
                      ))}
                      {project.techStack?.backend?.slice(0, 2).map((tech, i) => (
                         <span key={`be-${i}`} className="text-xs font-semibold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md border border-emerald-100">
                           {tech}
                         </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <Link to={`/our-work/${project.id}`} className="text-primary font-bold text-sm inline-flex items-center group-hover:text-secondary transition-colors">
                        View Details
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                      </Link>
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-8 h-8 bg-slate-50 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group/link border border-slate-200 hover:border-primary"
                          title="Visit Live Site"
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
            <div className="text-center py-20 text-gray-500">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Final CTA - Reduced Height */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to bring your idea to life?</h2>
          <p className="text-slate-500 mb-6">Let's collaborate on the next product you want to ship.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}