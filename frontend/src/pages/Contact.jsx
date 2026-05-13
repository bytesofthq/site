import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, HelpCircle, ChevronDown, ChevronUp, Building2, ExternalLink } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. A standard corporate website typically takes 4-6 weeks from discovery to launch, while complex web applications or e-commerce platforms can take 8-12 weeks. We provide a detailed timeline during the proposal phase."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. These include regular security updates, performance monitoring, content updates, and dedicated technical support to ensure your digital asset continues to perform optimally."
    },
    {
      question: "What size companies do you typically work with?",
      answer: "We partner with ambitious organizations across the spectrum—from well-funded startups launching their first digital product to established enterprises looking to replatform or optimize their existing infrastructure."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We believe in transparent, value-based pricing. After our initial discovery call, we provide a detailed proposal with a fixed project fee or a retainer structure, ensuring there are no hidden costs or surprise invoices down the line."
    },
    {
      question: "Can I visit your office for a meeting?",
      answer: "Absolutely! We welcome clients to our headquarters at Integral University, Lucknow. Please schedule an appointment with our team before visiting, and we'll be happy to host you."
    }
  ];

  return (
    <div>
      
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Mail size={14} className="text-secondary" />
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Let's Build Something <br className="hidden md:block" /> Extraordinary
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
            Reach out to our strategic team to discuss your next big digital transformation. We're ready to engineer your growth.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Left Column: Contact Methods */}
            <div className="lg:w-1/3 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Contact Info</h2>
                <div className="w-12 h-1 bg-secondary rounded-full mb-5"></div>
                <p className="text-gray-600">Choose the most convenient way to reach us.</p>
              </div>

              {/* Sales / New Business */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 group hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Briefcase className="text-secondary" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">New Business</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Ready to start a project? Talk to our sales and strategy team.
                </p>
                <a href="mailto:bytesofthq@gmail.com" className="text-primary font-semibold hover:text-secondary flex items-center gap-2 text-sm transition-colors">
                  <Mail size={14} />
                  bytesofthq@gmail.com
                </a>
              </div>

              {/* Client Support */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 group hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-secondary" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Client Support</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Existing client needing technical assistance? We're here 24/7.
                </p>
                <a href="mailto:support@bytesoft.com" className="text-primary font-semibold hover:text-secondary flex items-center gap-2 text-sm transition-colors">
                  <Mail size={14} />
                  support@bytesoft.com
                </a>
              </div>

              {/* Headquarters - Enhanced with Map Link */}
              <div className="bg-gradient-to-br from-primary to-blue-900 p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-5 border border-white/20 group-hover:scale-110 transition-transform">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Headquarters</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-3">
                     <a 
                    href="https://maps.google.com/?q=Integral+University+Lucknow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 group/link"
                  >
                    <MapPin size={14} className="text-secondary" />
                  
                    
                  
                    Integral University, Kursi Road<br />
                    Lucknow, Uttar Pradesh<br />
                    Pin Code: 226026
                    </a>
                  </p>
                  
                  {/* Phone Number */}
                  
                  
                  {/* Clickable Map Link */}
                 
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-4">
                    <Phone size={14} className="text-secondary" />
                    <span>+91 8810743304</span>
                    <span>+91 9214749997</span>
                       <span>+91 8009874351</span>

                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
                  <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                  <div className="w-12 h-0.5 bg-secondary mt-4 rounded-full"></div>
                </div>
                
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-4">
              <HelpCircle size={28} className="text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-base md:text-lg px-4">Everything you need to know before we get started.</p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  openFaq === index ? 'border-secondary shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                <button 
                  className="w-full px-5 md:px-6 py-4 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="text-sm md:text-base font-semibold text-gray-900 pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-secondary shrink-0 transition-transform duration-300" size={18} />
                  ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-secondary shrink-0 transition-all duration-300" size={18} />
                  )}
                </button>
                
                <div 
                  className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-3 border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
           {/* CTA Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary via-blue-800 to-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Prefer a quick call?</h3>
          <p className="text-blue-100 mb-6 md:mb-8">Speak directly with our strategy team</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a 
              href="tel:+918810743304" 
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg text-base md:text-lg w-full sm:w-auto"
            >
              <Phone size={18} />
              +91 8810743304
            </a>

            <a 
              href="tel:+919214749997" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg text-base md:text-lg border border-white/20 w-full sm:w-auto"
            >
              <Phone size={18} />
              +91 9214749997
            </a>
          </div>
          
          
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}