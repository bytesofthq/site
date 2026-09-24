import { useRef, useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowRight, ChevronDown } from 'lucide-react';
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
    <form ref={form} className="space-y-5" onSubmit={sendEmail}>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
          Full Name <span className="text-secondary">*</span>
        </label>
        <input 
          type="text" 
          name="name"
          placeholder="e.g. Sarah Jenkins" 
          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-slate-800 text-sm transition-all" 
          required
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
            Email Address <span className="text-secondary">*</span>
          </label>
          <input 
            type="email" 
            name="email"
            placeholder="sarah@company.com" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-slate-800 text-sm transition-all" 
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
            Phone Number <span className="text-secondary">*</span>
          </label>
          <input 
            type="tel" 
            name="phone"
            placeholder="+91 98765 43210" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-slate-800 text-sm transition-all" 
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
          Service Required
        </label>
        <div className="relative">
          <select 
            name="software_type" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-slate-800 text-sm transition-all appearance-none pr-10 cursor-pointer" 
            required
          >
            <option value="Web Engineering">Web Engineering</option>
            <option value="Search Optimization">Search Optimization & SEO</option>
            <option value="Social Media Strategy">Social Media Strategy</option>
            <option value="E-commerce Platform">E-commerce Platform</option>
            <option value="Healthcare Software">Healthcare Software</option>
            <option value="App Development">App Development</option>
            <option value="AI Integration">AI Integration & Automation</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other Custom Solution</option>
          </select>
          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
          Project Details <span className="text-secondary">*</span>
        </label>
        <textarea 
          name="message"
          rows="4" 
          placeholder="Briefly describe your objectives, estimated timeline, and current requirements..." 
          className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 text-slate-800 text-sm transition-all resize-none"
          required
        ></textarea>
      </div>

      {submitStatus?.type === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-700 flex items-center gap-3 border border-emerald-200/80 text-xs sm:text-sm">
          <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />
          <span className="font-medium">Thank you! Your project inquiry has been received. We'll be in touch shortly.</span>
        </div>
      )}

      {submitStatus?.type === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 text-red-700 flex items-center gap-3 border border-red-200/80 text-xs sm:text-sm">
          <AlertCircle size={18} className="shrink-0 text-red-600" />
          <span className="font-medium">Failed to submit: {submitStatus.message || "Please try again or email us directly."}</span>
        </div>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="group w-full bg-primary text-white font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl hover:bg-blue-900 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending Inquiry...'
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-200" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        Strict privacy: Your information is safe and never shared with third parties.
      </p>
    </form>
  );
}
