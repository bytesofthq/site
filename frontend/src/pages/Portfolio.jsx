import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web App', 'E-commerce', 'Corporate', 'Healthcare'];

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "Web App",
      desc: "A high-performance financial analytics platform handling real-time data for enterprise traders.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Retail Transformation",
      category: "E-commerce",
      desc: "Complete replatforming resulting in a 210% increase in mobile conversions and reduced cart abandonment.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Enterprise Portal",
      category: "Corporate",
      desc: "Scalable architecture serving 50,000+ daily active employees securely across global offices.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "MedCare System",
      category: "Healthcare",
      desc: "HIPAA-compliant patient portal connecting 100+ clinics to streamline appointment bookings and telehealth.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "SaaS Analytics Engine",
      category: "Web App",
      desc: "Complex data visualization interface allowing users to build custom marketing reports on the fly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Luxury Boutique",
      category: "E-commerce",
      desc: "Immersive headless commerce experience with 3D product viewing and seamless global checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      
      {/* Page Hero */}
      <section className="relative bg-slate-50 py-24 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Featured Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore how we've engineered digital transformations for industry-leading brands.
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
                className="rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 group relative cursor-pointer border border-slate-100"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-secondary font-semibold text-xs tracking-widest uppercase mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed max-w-xs">
                          {project.desc}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shrink-0 mb-1">
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (Just in case) */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Impressed by our work? Let's build yours.
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the ranks of successful businesses who trust us to engineer their digital growth.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center group">
            Start a Project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
