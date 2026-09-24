import { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ChevronUp, Building2, Sparkles, ArrowRight } from 'lucide-react';
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
      <section className="pt-12 pb-6 md:pt-16 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} className="text-secondary" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 mb-4 tracking-tight leading-[1.12]">
              Let's Build Something <span className="text-primary">Exceptional</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mb-6">
              Have an upcoming project, replatforming challenge, or just want to explore engineering capabilities? We are ready to help.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] font-medium text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Avg. response: &lt; 2 hours
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                NDA protected
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Contact Channels & Operational Details */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Email & Direct Inquiry */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                    Fastest Reply
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">Direct Email</h3>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                  For scopes, RFPs, and partnership requests. We review all inbound mail within 2 hours during business hours.
                </p>
                <a 
                  href="mailto:bytesofthq@gmail.com" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  <span>bytesofthq@gmail.com</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Phone & Instant Call */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                  <Phone size={18} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">Phone Consultation</h3>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                  Speak directly with our technical team during standard business hours (Mon–Sat, 9 AM – 8 PM IST).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a 
                    href="tel:+918810743304" 
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 hover:border-blue-100 hover:text-primary transition-all"
                  >
                    <Phone size={13} className="text-secondary shrink-0" />
                    <span>+91 8810743304</span>
                  </a>
                  <a 
                    href="tel:+919214749997" 
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 hover:border-blue-100 hover:text-primary transition-all"
                  >
                    <Phone size={13} className="text-secondary shrink-0" />
                    <span>+91 9214749997</span>
                  </a>
                </div>
              </div>

              {/* Headquarters & Timezone */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <Building2 size={18} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                    UTC+5:30
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">Headquarters</h3>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-3">
                  Lucknow, Uttar Pradesh, India. Operating as a remote-first engineering agency serving global clients across multiple time zones.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  <span>Available for scheduled Google Meet / Zoom discovery calls</span>
                </div>
              </div>

            </div>

            {/* Right Column: Project Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50/80 border border-blue-100/70 text-primary text-[11px] font-semibold uppercase tracking-wider mb-2">
                    <span>Fast Track</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                    Send an Inquiry
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Fill in the essential details below and our team will get in touch with an initial perspective.
                  </p>
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

      {/* Bottom Direct Call Section */}
      <section className="py-14 md:py-18 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Phone size={12} className="text-secondary" />
            <span>Direct Line</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Prefer a direct conversation?
          </h3>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto mb-6">
            Speak directly with our technical leads to discuss your scope.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a 
              href="tel:+918810743304" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-full hover:bg-blue-900 transition-colors text-sm shadow-xs"
            >
              <Phone size={14} />
              <span>+91 8810743304</span>
            </a>
            <a 
              href="tel:+919214749997" 
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors text-sm"
            >
              <Phone size={14} />
              <span>+91 9214749997</span>
            </a>
            <a 
              href="tel:+918009874351" 
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors text-sm"
            >
              <Phone size={14} />
              <span>+91 8009874351</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
