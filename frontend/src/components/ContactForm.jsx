import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Full Name *</label>
        <input 
          type="text" 
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
            placeholder="john@company.com" 
            className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" 
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Phone Number *</label>
          <input 
            type="tel" 
            placeholder="+91 98765 43210" 
            className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" 
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Service Required</label>
        <select className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all appearance-none text-gray-700">
          <option>Web Engineering</option>
          <option>E-commerce Platform</option>
          <option>App Development</option>
          <option>SEO & Marketing</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">Project Details *</label>
        <textarea 
          rows="5" 
          placeholder="Tell us about your goals, timeline, and current challenges..." 
          className="w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all resize-none"
          required
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-primary text-white font-bold text-lg py-4 md:py-5 rounded-xl hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center group">
        <Send size={20} className="mr-3 group-hover:animate-bounce" />
        Submit Project Inquiry
      </button>
      <p className="text-center text-sm text-gray-500 mt-4">
        Your information is secure and will never be shared with third parties.
      </p>
    </form>
  );
}
