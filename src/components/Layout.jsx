import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MessageSquare, MessageSquareMore, Phone, Mail, Menu, X, Home, Briefcase, Info, LayoutTemplate, ChevronUp, ChevronRight, Sparkles } from 'lucide-react';
import ContactForm from './ContactForm';
import Footer from './Footer';

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/services', label: 'Services', icon: LayoutTemplate },
  { path: '/project-journey', label: 'AI Journey', icon: Sparkles },
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
    <div className="min-h-screen flex flex-col font-sans bg-[#f6f8fc] overflow-x-clip">
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled
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

          <div className="hidden lg:flex items-center bg-white/80 border border-slate-200/80 rounded-full p-1.5 shadow-sm gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${isActive
                    ? 'bg-white text-primary shadow-sm border border-slate-200 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 border border-transparent hover:bg-slate-100/50'
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

      {/* Reusable Site Footer */}
      <Footer onOpenQuote={() => setIsModalOpen(true)} />

      {/* Consolidate Floating Action Dock (Bottom Right) */}
      <div className={`fixed bottom-5 right-5 flex flex-col items-end gap-3 z-40 transition-all duration-300 ${isMobileMenuOpen || isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`bg-slate-900 text-white p-3 rounded-full shadow-xl hover:bg-primary transition-all duration-300 hover:scale-110 flex items-center justify-center ${showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90 pointer-events-none'}`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>

        {/* Email Button */}
        <a
          href="mailto:bytesofthq@gmail.com"
          className="group bg-primary text-white p-3.5 rounded-full shadow-xl hover:bg-blue-800 transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
          aria-label="Email Us"
        >
          <Mail size={19} />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            Email Us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919214749997"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 text-white p-3.5 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
          aria-label="WhatsApp Us"
        >
          <MessageSquareMore size={19} />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Modern Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[110] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in Sheet */}
        <div
          className={`relative h-full w-full max-w-[340px] ml-auto bg-[#f6f8fc] flex flex-col shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Header */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-slate-200/80 bg-white/70 backdrop-blur-sm shrink-0">
            <img src="/bs-logo.jpg" alt="Bytesoft" className="h-9 w-auto object-contain" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all active:scale-95"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-2xl transition-all group ${isActive
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-primary'
                        }`}
                    >
                      <Icon size={17} />
                    </div>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    )}
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-200 ${isActive ? 'text-primary' : 'text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5'
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Footer Actions */}
          <div className="p-5 bg-white border-t border-slate-200/80 shrink-0 space-y-3">
            <button
              onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-900 shadow-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <span aria-hidden="true">→</span>
            </button>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="mailto:bytesofthq@gmail.com"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600 hover:text-primary hover:bg-blue-50/50 transition-colors"
              >
                <Mail size={13} className="text-primary" />
                <span>Email Us</span>
              </a>
              <a
                href="tel:+919214749997"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600 hover:text-primary hover:bg-blue-50/50 transition-colors"
              >
                <Phone size={13} className="text-primary" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-center text-[11px] text-slate-400 pt-1">
              Lucknow, India · bytesofthq@gmail.com
            </p>
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
