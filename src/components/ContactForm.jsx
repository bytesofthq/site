import React, { useRef, useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const SERVICE_ID = "service_gwe0ocl";
    const TEMPLATE_ID = "template_uu4adkx";
    const PUBLIC_KEY = "rnv_5Dfi34ewElXPD";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus({ type: 'success' });
          form.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus({ type: 'error', message: error.text });
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} className="space-y-6 md:space-y-8" onSubmit={sendEmail}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Full Name *</label>
        <input 
          type="text" 
          name="name"
          placeholder="John Doe" 
          className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" 
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Email Address *</label>
          <input 
            type="email" 
            name="email"
            placeholder="john@company.com" 
            className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" 
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Phone Number *</label>
          <input 
            type="tel" 
            name="phone"
            placeholder="+91 98765 43210" 
            className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" 
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Service Required</label>
        <select name="software_type" className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all appearance-none text-gray-700" required>
          <option value="Web Engineering">Web Engineering</option>
          <option value="E-commerce Platform">E-commerce Platform</option>
          <option value="App Development">App Development</option>
          <option value="SEO & Marketing">SEO & Marketing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Project Details *</label>
        <textarea 
          name="message"
          rows="5" 
          placeholder="Tell us about your goals, timeline, and current challenges..." 
          className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all resize-none"
          required
        ></textarea>
      </div>

      {submitStatus?.type === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-600 flex items-center gap-3 border border-emerald-100">
          <CheckCircle2 size={20} className="shrink-0" />
          <span className="font-medium text-sm">Your inquiry has been sent successfully! We will get back to you soon.</span>
        </div>
      )}

      {submitStatus?.type === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 flex items-center gap-3 border border-red-100">
          <AlertCircle size={20} className="shrink-0" />
          <span className="font-medium text-sm">Oops! Failed to send: {submitStatus.message || "Unknown error"}</span>
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold text-lg py-4 md:py-5 rounded-xl hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg">
        {isSubmitting ? (
          'Submitting...'
        ) : (
          <>
            <Send size={20} className="mr-3 group-hover:animate-bounce" />
            Submit Project Inquiry
          </>
        )}
      </button>
      <p className="text-center text-sm text-gray-500 mt-4">
        Your information is secure and will never be shared with third parties.
      </p>
    </form>
  );
}
