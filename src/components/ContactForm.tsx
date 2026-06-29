import React, { useState } from 'react';
import { Loader, CheckCircle, AlertTriangle, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.email.trim()) {
      errs.email = "Your email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format.";
    }
    if (!formData.message.trim()) errs.message = "Message text cannot be empty.";

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit contact request.");
      }
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-6 rounded-xl border border-green-100 text-center space-y-3 animate-fade-in">
        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h4 className="text-lg font-bold text-gray-900 font-display">Message Sent Successfully</h4>
        <p className="text-gray-600 text-xs max-w-sm mx-auto">
          We have received your message. A representative from RSDS NDT will get back to you shortly at the provided email address.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="px-4 py-2 bg-primary-navy text-white text-xs font-semibold rounded-md hover:bg-navy-light transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3.5 bg-red-50 rounded-lg flex items-start gap-2 border border-red-100 text-xs text-red-700">
          <AlertTriangle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Your Name *</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          className={`w-full px-3.5 py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 ${
            fieldErrors.name ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
          } transition-all`}
        />
        {fieldErrors.name && <span className="text-xs text-red-500 mt-0.5 block">{fieldErrors.name}</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Email Address *</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={`w-full px-3.5 py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 ${
              fieldErrors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
            } transition-all`}
          />
          {fieldErrors.email && <span className="text-xs text-red-500 mt-0.5 block">{fieldErrors.email}</span>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Phone Number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(409) 272-0514"
            className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-accent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Inquiry Subject</label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-accent transition-all"
        >
          <option value="">General Inquiry / Questions</option>
          <option value="Training Registration">Training Courses & Level I/II/III Prep</option>
          <option value="Onsite Consulting">ASNT Level III Consulting & QA Procedures</option>
          <option value="Weld Inspection">AWS Certified Welding Inspection (CWI)</option>
          <option value="NDT Inspection">NDT Service Scheduling (UT, PT, MT, VT, RT)</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you? Feel free to describe your structural safety questions, customized schedules..."
          className={`w-full px-3.5 py-2 rounded-lg border text-xs focus:outline-none focus:ring-2 ${
            fieldErrors.message ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
          } transition-all`}
        ></textarea>
        {fieldErrors.message && <span className="text-xs text-red-500 mt-0.5 block">{fieldErrors.message}</span>}
      </div>

      <button
        id="submit-contact"
        type="submit"
        disabled={loading}
        className="w-full py-2.5 bg-orange-accent text-white font-semibold rounded-lg text-xs hover:bg-orange-hover shadow-md hover:shadow-orange-accent/10 flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader className="w-3.5 h-3.5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>Send Secure Message</span>
          </>
        )}
      </button>
    </form>
  );
}
