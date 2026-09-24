import { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ChevronUp, Building2, Sparkles } from 'lucide-react';
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
      <section className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading + Direct Help Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={13} className="text-secondary" />
                <span>Frequently Asked</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                Everything you need to know about our partnership models, timelines, onboarding, and pricing before we kick off.
              </p>

              {/* Direct Help Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Need quick clarity?</h3>
                    <p className="text-xs text-slate-500">We respond in under 24 hours.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Have a specific question not covered here? Feel free to reach out directly or drop us a line below.
                </p>
                <a
                  href="mailto:contact@bytesofthq.com"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-900 transition-colors shadow-xs"
                >
                  <Mail size={13} />
                  <span>Email our team</span>
                </a>
              </div>
            </div>

            {/* Right Column: Accordions */}
            <div className="lg:col-span-7 space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-blue-200/90 shadow-md shadow-blue-900/[0.04]'
                        : 'border-slate-100 shadow-xs hover:border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full px-5 sm:px-6 py-4.5 text-left flex justify-between items-center focus:outline-none group cursor-pointer gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-secondary transition-colors">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-sm sm:text-[15px] font-semibold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary text-white border-primary rotate-180'
                            : 'bg-slate-50 text-slate-400 border-slate-100 group-hover:border-blue-100 group-hover:text-primary'
                        }`}
                      >
                        <ChevronDown size={14} />
                      </div>
                    </button>

                    <div
                      className={`px-5 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pt-3 border-t border-slate-100 pl-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

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
