import { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles, Star } from 'lucide-react';
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
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Products & Innovations</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Next-Gen Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
            Explore our curated collection of production-ready applications, AI tools, and enterprise platforms.
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
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 group relative border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

                  {/* Title & Partner Preview */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md">{project.name}</h3>
                      <p className="text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
                        {project.partner}
                      </p>
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
                      <Link to={`/products/${project.id}`} className="text-primary font-bold text-sm inline-flex items-center group-hover:text-secondary transition-colors">
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
              No products found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Final CTA - Reduced Height */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Ready to bring your idea to life?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-6 max-w-xl mx-auto">
            Let's collaborate to build the next generation of scalable and intelligent software solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg text-sm md:text-base"
          >
            Get in Touch
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}