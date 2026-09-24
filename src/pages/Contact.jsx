import { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
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
      question: "Can we have a meeting?",
      answer: "Absolutely! We're a remote-first team based in Lucknow, India. We're happy to connect over a video call or phone at a time that suits you. Reach out via our contact form or email and we'll schedule something promptly."
    }
  ];

  return (
    <div>
      
      {/* Page Hero */}
      <section className="pt-14 pb-4 md:pt-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Let's Build Something <span className="text-accent">Extraordinary</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            Whether you have a project in mind or just want to explore possibilities, our team is ready to help.
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

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 group hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Whether you have a new project in mind or need support — we're here for everything. We reply within 24 hours.
                </p>
                <a href="mailto:bytesofthq@gmail.com" className="text-primary font-semibold hover:text-primary flex items-center gap-2 text-sm transition-colors">
                  <Mail size={14} />
                  bytesofthq@gmail.com
                </a>
              </div>

              {/* Headquarters - Enhanced with Map Link */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <Building2 className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Based in</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Lucknow, Uttar Pradesh, India. Remote-first, available across India and beyond.
                </p>
                <div className="flex flex-col gap-2 text-sm text-slate-700">
                  <a href="tel:+919214749997" className="flex items-center gap-2 hover:text-accent">
                    <Phone size={14} className="text-accent shrink-0" /> +91 9214749997
                  </a>
                  <a href="tel:+918810743304" className="flex items-center gap-2 hover:text-accent">
                    <Phone size={14} className="text-accent shrink-0" /> +91 8810743304
                  </a>
                  <a href="tel:+918009874351" className="flex items-center gap-2 hover:text-accent">
                    <Phone size={14} className="text-accent shrink-0" /> +91 8009874351
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-4">Schedule a call to talk through your project.</p>
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

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-4">
              <HelpCircle size={28} className="text-primary" />
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
                    <ChevronUp className="text-primary shrink-0 transition-transform duration-300" size={18} />
                  ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-primary shrink-0 transition-all duration-300" size={18} />
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
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Prefer a quick call?</h3>
          <p className="text-slate-500 mb-6">Speak directly with our team.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a href="tel:+918810743304" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 w-full sm:w-auto">
              <Phone size={16} /> +91 8810743304
            </a>
            <a href="tel:+919214749997" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-full hover:border-accent w-full sm:w-auto">
              <Phone size={16} /> +91 9214749997
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
