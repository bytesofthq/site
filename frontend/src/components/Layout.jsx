import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MessageSquare, Phone, MapPin, Mail, Send, Menu, X, Home, Briefcase, Info, CreditCard, LayoutTemplate, ChevronUp, ExternalLink, Sparkles } from 'lucide-react';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Thin Top Bar - Enhanced */}
      <div className="bg-gradient-to-r from-[#0b1120] to-[#1a2332] text-gray-300 text-xs py-2 text-center hidden md:block border-b border-white/5">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-secondary" />
            <span>Get a Free Consultation Today — No Commitment Required</span>
          </div>
          <span className="text-gray-600">|</span>
          <a href="tel:+919214749997" className="flex items-center gap-1 hover:text-secondary transition-colors">
            <Phone size={10} />
            <span>Call: +91 9214749997</span>
          </a>
          <span className="text-gray-600">|</span>
          <a href="mailto:bytesofthq@gmail.com" className="flex items-center gap-1 hover:text-secondary transition-colors">
            <Mail size={10} />
            <span>bytesofthq@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Navigation - Enhanced */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Bytesoft home">
            <img
              src="/bs-logo.jpg"
              alt="Bytesoft"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
            <span className="hidden lg:block ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bytesoft
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`relative px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive 
                      ? 'text-primary bg-primary/5' 
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-gradient-to-r from-primary to-blue-800 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-sm hover:from-blue-800 hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Quote
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Enhanced */}
      <footer className="bg-gradient-to-br from-[#0b1120] to-[#0f172a] text-gray-300 pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            
            {/* Column 1: About */}
            <div>
              <div className="mb-5">
                <img
                  src="/bs-logo.jpg"
                  alt="Bytesoft"
                  className="h-12 w-auto object-contain"
                />
                <div className="h-0.5 w-12 bg-secondary mt-3 rounded-full"></div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                A premier digital agency specializing in high-performance web development, strategic SEO, and data-driven marketing to elevate your brand's online presence.
              </p>
              <div className="flex gap-3 mt-5">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-11.952c0-.211-.005-.423-.015-.635.75-.54 1.397-1.204 1.907-1.97z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-5 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">→ Home</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">→ Services</Link></li>
                <li><Link to="/our-work" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">→ Our Work</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">→ About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">→ Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-5 relative inline-block">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span className="text-gray-400">Lucknow, Uttar Pradesh, India</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-secondary shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919214749997" className="text-gray-400 hover:text-secondary transition-colors">+91 9214749997</a>
                    <a href="tel:+917033546623" className="text-gray-400 hover:text-secondary transition-colors">+91 7033546623</a>
                    <a href="tel:+918009874351" className="text-gray-400 hover:text-secondary transition-colors">+91 8009874351</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-secondary shrink-0" />
                  <a href="mailto:bytesofthq@gmail.com" className="text-gray-400 hover:text-secondary transition-colors">bytesofthq@gmail.com</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-5 relative inline-block">
                Newsletter
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full"></span>
              </h4>
              <p className="text-sm leading-relaxed text-gray-400 mb-5">
                Subscribe to get the latest updates on web development and digital marketing trends.
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-1 px-4 py-2.5 text-sm text-gray-900 bg-white border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-secondary text-white px-4 py-2.5 rounded-r-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Bytesoft. All Rights Reserved. | Designed with ❤️ in India</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className={`fixed bottom-6 right-6 flex flex-col space-y-3 z-50 transition-all duration-300 ${isMobileMenuOpen || isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
        className={`fixed bottom-6 left-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>

      {/* Mobile Navigation Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[110] transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center gap-2">
            <img src="/bs-logo.jpg" alt="Bytesoft" className="h-8 w-auto" />
            <span className="font-bold text-primary">Menu</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full bg-white shadow-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`flex items-center px-5 py-3.5 mx-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} className={`mr-3 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                {link.label}
                {isActive && <span className="ml-auto w-1.5 h-1.5 bg-secondary rounded-full"></span>}
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Direct Contact</p>
          <div className="flex flex-col space-y-3">
            <a href="mailto:bytesofthq@gmail.com" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
              <Mail size={14} className="mr-3 text-secondary" />
              bytesofthq@gmail.com
            </a>
            <a href="tel:+919214749997" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
              <Phone size={14} className="mr-3 text-secondary" />
              +91 9214749997
            </a>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-11.952c0-.211-.005-.423-.015-.635.75-.54 1.397-1.204 1.907-1.97z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
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