import { Link, Outlet } from 'react-router-dom';
import { MessageSquare, Phone, MapPin, Mail, Send } from 'lucide-react';

export default function Layout() {
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
                Delhi's premier website development and digital solutions company, dedicated to helping businesses grow online with cutting-edge technology and strategic marketing.
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
                  <span className="leading-relaxed text-gray-400 mt-1">First Floor 111-112, Rishal Complex, Shiva Market, Pitampura, New Delhi - 110034</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span className="text-gray-400">+91 78349 80726</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                    <Mail size={14} className="text-white" />
                  </div>
                  <span className="text-gray-400">customerbysoft@gmail.com</span>
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
            <p>© 2026 Bytesoft Delhi. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <button className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-transform hover:scale-105 flex items-center justify-center">
          <MessageSquare size={24} />
        </button>
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-105 flex items-center justify-center">
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
}
