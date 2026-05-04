import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MessageSquare, Phone, MapPin, Mail, Send, Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
              BYTESOFT
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-primary font-medium transition-colors">Portfolio</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium transition-colors">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex">
            <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-800 transition-colors">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium">Home</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium">Services</Link>
              <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium">Portfolio</Link>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium">Pricing</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium">About</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium">Contact</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 block text-center bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        )}
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
    </div>
  );
}
