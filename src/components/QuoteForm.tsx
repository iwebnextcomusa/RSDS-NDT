import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Loader, CheckCircle, AlertTriangle, Send } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<any | null>(null);

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone.replace(/[^0-9+]/g, ''))) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.service) errs.service = "Please select a service.";
    if (!formData.message.trim()) errs.message = "Please describe your scope of work.";

    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit quote request.");
      }
      setSuccessData(data.data);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md border border-green-100 text-center space-y-4 max-w-xl mx-auto animate-fade-in">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 font-display">Quote Request Submitted!</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Thank you, <strong className="text-primary-navy">{successData.name}</strong>. Your request for <strong className="text-orange-accent">{SERVICES.find(s => s.id === successData.service)?.title || successData.service}</strong> has been logged.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 text-left text-xs text-gray-600 space-y-1.5 border border-gray-100 max-w-md mx-auto">
          <div className="flex justify-between border-b border-gray-200 pb-1.5 mb-1.5">
            <span className="font-semibold text-gray-700">Reference ID:</span>
            <span className="font-mono text-gray-500">{successData.id}</span>
          </div>
          <div><span className="font-medium">Company:</span> {successData.company || 'Not Specified'}</div>
          <div><span className="font-medium">Phone:</span> {successData.phone}</div>
          <div><span className="font-medium">Email:</span> {successData.email}</div>
          <div className="pt-1"><span className="font-medium">Message:</span> <p className="mt-1 text-gray-500 line-clamp-3 italic">"{successData.message}"</p></div>
        </div>

        <p className="text-xs text-gray-500 italic pt-2">
          An RSDS inspection consultant will contact you within 24 business hours to finalize pricing.
        </p>

        <button
          onClick={() => setSuccessData(null)}
          className="mt-4 px-6 py-2.5 bg-primary-navy text-white font-medium rounded-lg text-sm hover:bg-navy-light transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 space-y-5">
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-xl font-bold text-primary-navy font-display">Request an Inspection Quote</h3>
        <p className="text-xs text-gray-500 mt-1">Submit your project details and receive an expert consultation and estimate.</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 rounded-lg flex items-start gap-3 border border-red-100 text-sm text-red-700">
          <AlertTriangle className="w-5 h-5 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Full Name *</label>
          <input
            id="quote-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.name ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
            } transition-all`}
          />
          {fieldErrors.name && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.name}</span>}
        </div>

        <div>
          <label htmlFor="quote-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Email Address *</label>
          <input
            id="quote-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@company.com"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
            } transition-all`}
          />
          {fieldErrors.email && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.email}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(409) 272-0514"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.phone ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
            } transition-all`}
          />
          {fieldErrors.phone && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.phone}</span>}
        </div>

        <div>
          <label htmlFor="quote-company" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Company Name</label>
          <input
            id="quote-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Energy Resources LLC"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-accent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-service" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Required Service *</label>
        <select
          id="quote-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 bg-white rounded-lg border text-sm focus:outline-none focus:ring-2 ${
            fieldErrors.service ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
          } transition-all`}
        >
          <option value="">-- Select NDT Service --</option>
          {SERVICES.map(s => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
        </select>
        {fieldErrors.service && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.service}</span>}
      </div>

      <div>
        <label htmlFor="quote-message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Scope of Work & Details *</label>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your equipment, pipe diameter, wall thickness, or welding inspection parameters..."
          className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
            fieldErrors.message ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
          } transition-all`}
        ></textarea>
        {fieldErrors.message && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.message}</span>}
      </div>

      <button
        id="submit-quote"
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-orange-accent text-white font-medium rounded-lg text-sm hover:bg-orange-hover shadow-md hover:shadow-orange-accent/15 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader className="w-4.5 h-4.5 animate-spin" />
            <span>Processing Estimate...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Request for Proposal</span>
          </>
        )}
      </button>
    </form>
  );
}
