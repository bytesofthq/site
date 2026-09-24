import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MessageSquare, Phone, MapPin, Mail, Menu, X, Home, Briefcase, Info, LayoutTemplate, ChevronUp } from 'lucide-react';
import ContactForm from './ContactForm';

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/services', label: 'Services', icon: LayoutTemplate },
  { path: '/our-work', label: 'Our Work', icon: Briefcase },
  { path: '/about', label: 'About', icon: Info },
  { path: '/contact', label: 'Contact', icon: Mail }
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isModalOpen) setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isModalOpen]);

  // Prevent body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isModalOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f6f8fc] overflow-x-hidden">
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f6f8fc]/90 backdrop-blur-xl shadow-sm'
          : 'bg-[#f6f8fc]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[4.75rem] flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center shrink-0 group" aria-label="Bytesoft home">
            <img
              src="/bs-logo.jpg"
              alt="Bytesoft"
              className="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
          </Link>

          <div className="hidden lg:flex items-center bg-white/80 border border-slate-200/80 rounded-full p-1.5 shadow-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 lg:px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-primary shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900 border border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-sm hover:bg-blue-900 transition-colors shadow-sm inline-flex items-center gap-1.5"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:text-primary hover:bg-white transition-colors focus:outline-none"
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main key={location.pathname} className="flex-grow page-transition">
        <Outlet />
      </main>

      {/* Footer - Enhanced */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            <div>
              <img src="/bs-logo.jpg" alt="Bytesoft" className="h-11 w-auto object-contain mb-4" />
              <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                A premier digital agency specializing in high-performance web development, strategic SEO, and data-driven marketing.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-accent shrink-0" />
                  <a href="mailto:bytesofthq@gmail.com" className="hover:text-accent transition-colors">bytesofthq@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-accent shrink-0" />
                  <a href="tel:+919214749997" className="hover:text-accent transition-colors">+91 9214749997</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent shrink-0" />
                  <span>Lucknow, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li><Link to="/services" className="hover:text-accent transition-colors">Web Engineering</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Search Optimization</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">App Development</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">AI Integration</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/our-work" className="hover:text-accent transition-colors">Our Work</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Get in touch</h4>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li><a href="tel:+917033546623" className="hover:text-accent transition-colors">+91 7033546623</a></li>
                <li><a href="tel:+918009874351" className="hover:text-accent transition-colors">+91 8009874351</a></li>
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a href="https://www.linkedin.com/company/bytesofthq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:text-accent hover:border-accent transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/bytesofthq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:text-accent hover:border-accent transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.facebook.com/bytesofthq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:text-accent hover:border-accent transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Bytesoft. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col space-y-3 z-40 transition-all duration-300 ${isMobileMenuOpen || isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Email Button */}
        <a 
          href="mailto:bytesofthq@gmail.com"
          className="group bg-primary text-white p-3.5 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
          aria-label="Email Us"
        >
          <Mail size={20} />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Email Us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919214749997"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
          aria-label="WhatsApp Us"
        >
          <Phone size={20} />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>

      <div
        className={`fixed inset-0 z-[110] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#eef3fb]/70 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="relative h-full flex flex-col px-5 pt-4 pb-8">
          <div className="h-14 flex items-center justify-between">
            <img src="/bs-logo.jpg" alt="Bytesoft" className="h-9 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-700 hover:text-slate-900"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3.5 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-200/80">
            <button
              onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
              className="w-full bg-primary text-white py-3.5 rounded-2xl font-semibold hover:bg-blue-900 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </button>
            <a href="mailto:bytesofthq@gmail.com" className="mt-4 block text-center text-sm text-slate-500 hover:text-primary">
              bytesofthq@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Contact Modal - Enhanced */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative animate-scale-up">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 focus:outline-none bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-10"
            >
              <X size={18} />
            </button>
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request a Quote</h3>
                <p className="text-gray-500 text-sm mt-1">Tell us about your project and we'll get back to you within 24 hours.</p>
              </div>
              <ContactForm onSuccess={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}