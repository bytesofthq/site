import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MessageSquare, Phone, MapPin, Mail, Send, Menu, X, Home, Briefcase, Info, CreditCard, LayoutTemplate } from 'lucide-react';
import ContactForm from './ContactForm';

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/services', label: 'Services', icon: LayoutTemplate },
  { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { path: '/pricing', label: 'Pricing', icon: CreditCard },
  { path: '/about', label: 'About', icon: Info },
  { path: '/contact', label: 'Contact', icon: Mail }
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-0' : 'bg-white py-1'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
              BYTESOFT
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`relative font-medium transition-colors group py-2 ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-primary text-white px-4 py-2 md:px-6 md:py-2.5 rounded-md font-semibold text-sm md:text-base hover:bg-blue-800 transition-colors"
            >
              Get Quote
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 hover:text-primary focus:outline-none"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <div 
          className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Navigation Drawer */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-20 px-4 flex items-center justify-between border-b border-gray-100">
            <span className="text-xl font-bold text-primary tracking-tight">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="px-4 py-6 flex flex-col space-y-2 flex-grow overflow-y-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  <Icon size={20} className={`mr-3 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                  {link.label}
                </Link>
              );
            })}
          </div>
          {/* Drawer Footer */}
          <div className="p-6 border-t border-gray-100 bg-slate-50/50">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">Direct Contact</p>
            <div className="flex flex-col space-y-4">
              <a href="mailto:bytesofthq@gmail.com" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                <Mail size={16} className="mr-3 text-secondary" />
                bytesofthq@gmail.com
              </a>
              <a href="tel:+919214749997" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                <Phone size={16} className="mr-3 text-secondary" />
                +91 9214749997
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0b1120] text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: About */}
            <div>
              <div className="text-2xl font-bold mb-6 tracking-tight">
                <span className="text-white">BYTE</span><span className="text-secondary">SOFT</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                A premier digital agency specializing in high-performance web development, strategic SEO, and data-driven marketing to elevate your brand's online presence.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
                <li><Link to="/pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
                <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 relative inline-block">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <span className="leading-relaxed text-gray-400 mt-1">Integral University, Lucknow, 226026</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span className="text-gray-400">+91 9214749997</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                    <Mail size={14} className="text-white" />
                  </div>
                  <span className="text-gray-400">bytesofthq@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-6 relative inline-block">
                Newsletter
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
              </h4>
              <p className="text-sm leading-relaxed text-gray-400 mb-6">
                Subscribe to our newsletter for the latest updates on website development and digital marketing trends.
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 text-sm text-gray-900 bg-white border-none rounded-l-md focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>

          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Bytesoft. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        {/* Email/Message Button */}
        <div className="relative group flex items-center justify-end">
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-sm">
            Email Us
            {/* Tooltip Arrow */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
          </span>
          <a 
            href="mailto:bytesofthq@gmail.com"
            className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-transform hover:scale-110 flex items-center justify-center relative z-10"
            aria-label="Email Us"
          >
            <MessageSquare size={24} />
          </a>
        </div>

        {/* Phone/WhatsApp Button */}
        <div className="relative group flex items-center justify-end">
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-sm">
            WhatsApp Us
            {/* Tooltip Arrow */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
          </span>
          {/* Ping Animation Layer */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
          <a 
            href="https://wa.me/919214749997"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center relative z-10"
            aria-label="WhatsApp Us"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 focus:outline-none bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h3>
              <p className="text-gray-600 mb-8">Tell us about your project and we'll get back to you shortly.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
