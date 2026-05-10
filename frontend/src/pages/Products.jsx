import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from './Data/Projects';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories from projectsData
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-slate-50 py-24 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Products & Innovations</span>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Next-Gen Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of production-ready applications, AI tools, and enterprise platforms.
          </p>
        </div>
      </section>

      {/* Filter & Gallery Section */}
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 group relative border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Partner Preview */}
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{project.name}</h3>
                      <p className="text-slate-300 text-sm font-medium flex items-center gap-2">
                        {project.partner}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  <div className="mt-auto">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack?.frontend?.slice(0, 2).map((tech, i) => (
                         <span key={`fe-${i}`} className="text-xs font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md border border-blue-100">
                           {tech}
                         </span>
                      ))}
                      {project.techStack?.backend?.slice(0, 2).map((tech, i) => (
                         <span key={`be-${i}`} className="text-xs font-semibold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md border border-emerald-100">
                           {tech}
                         </span>
                      ))}
                      {project.techStack?.tools?.slice(0, 1).map((tech, i) => (
                         <span key={`tool-${i}`} className="text-xs font-semibold bg-purple-50 text-purple-600 px-2.5 py-1 rounded-md border border-purple-100">
                           {tech}
                         </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                      <Link to={`/products/${project.id}`} className="text-primary font-bold text-sm inline-flex items-center group-hover:text-secondary transition-colors">
                        View Details
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Link>
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 bg-slate-50 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group/link border border-slate-200 hover:border-primary"
                          title="Visit Live Site"
                        >
                          <ExternalLink size={18} className="text-slate-500 group-hover/link:text-white transition-colors" />
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
              No products found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to bring your idea to life?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's collaborate to build the next generation of scalable and intelligent software solutions.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center group">
            Get in Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
