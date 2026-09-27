import { useState } from 'react';
import { ArrowRight, ExternalLink, Star, Sparkles } from 'lucide-react';
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
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-20">
        <div aria-hidden="true" className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-blue-100/70 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-primary text-sm font-medium px-3.5 py-1.5 rounded-full mb-6 shadow-sm"><Sparkles size={14} /> Our Work</div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight">
            Projects we've <span className="text-primary">built</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            A showcase of web apps, platforms, and digital products we've delivered for clients and partners.
          </p>
        </div>
      </section>

      {/* Filter & Gallery Section */}
      <section className="py-12 md:py-16 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                aria-pressed={activeFilter === category}
                className={`px-4 sm:px-5 py-2 rounded-full border text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  activeFilter === category 
                    ? 'bg-primary text-white border-primary shadow-sm' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm group border border-slate-100 flex flex-col hover:shadow-md transition-all duration-300 motion-safe:hover:-translate-y-0.5"
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
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Title Preview */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-semibold text-white tracking-tight">{project.name}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  {/* Rating Section */}
                  {project.rating && (
                    <div className="mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="fill-amber-400 text-amber-400" />
                          <span className="text-sm font-semibold text-slate-800">{project.rating}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack?.frontend?.slice(0, 2).map((tech, i) => (
                         <span key={`fe-${i}`} className="text-xs font-medium bg-slate-50 text-slate-500 px-2.5 py-1 rounded-md border border-slate-100">
                           {tech}
                         </span>
                      ))}
                      {project.techStack?.backend?.slice(0, 2).map((tech, i) => (
                         <span key={`be-${i}`} className="text-xs font-medium bg-slate-50 text-slate-500 px-2.5 py-1 rounded-md border border-slate-100">
                           {tech}
                         </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <Link to={`/our-work/${project.id}`} className="text-primary font-semibold text-sm inline-flex items-center hover:text-blue-900 transition-colors">
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
            <div className="text-center py-20 text-slate-500">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Final CTA - Reduced Height */}
      <section className="py-16 md:py-20">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">Ready to bring your idea to life?</h2>
          <p className="text-slate-500 mb-6">Let's collaborate on the next product you want to ship.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition-colors shadow-sm">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}