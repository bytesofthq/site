import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
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
    }
  ];

  return (
    <div className="pt-20">
      
      {/* Page Hero */}
      <section className="relative bg-slate-50 py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Let's Build Something <br className="hidden md:block" /> Extraordinary
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reach out to our strategic team to discuss your next big digital transformation. We're ready to engineer your growth.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Contact Methods */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Contact Info</h2>
                <p className="text-gray-600 mb-8">Choose the most convenient way to reach us.</p>
              </div>

              {/* Sales */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:border-secondary transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">New Business</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Ready to start a project? Talk to our sales and strategy team.
                </p>
                <a href="mailto:bytesofthq@gmail.com" className="text-primary font-bold hover:text-secondary flex items-center">
                  bytesofthq@gmail.com
                </a>
              </div>

              {/* Support */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:border-secondary transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Client Support</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Existing client needing technical assistance? We're here 24/7.
                </p>
                <a href="mailto:bytesofthq@gmail.com" className="text-primary font-bold hover:text-secondary flex items-center">
                  bytesofthq@gmail.com
                </a>
              </div>

              {/* HQ */}
              <div className="bg-primary p-8 rounded-3xl border border-blue-900 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Integral University,<br />
                  Lucknow,<br />
                  226026
                </p>
                <div className="flex items-center text-white font-bold mt-6">
                  <Phone size={18} className="mr-2 text-secondary" />
                  +91 9214749997
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-slate-100 h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
                <p className="text-gray-600 mb-10">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center border border-slate-100">
                <HelpCircle size={32} className="text-secondary" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">Everything you need to know before we get started.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-blue-200 transition-colors"
              >
                <button 
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-secondary shrink-0 ml-4" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0 ml-4" size={24} />
                  )}
                </button>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed border-t border-slate-100 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
