import React, { useState } from 'react';
import { COURSES } from '../data';
import { Loader, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    course: '',
    notes: ''
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
    }
    if (!formData.course) errs.course = "Please select an NDT course.";

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
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit course registration.");
      }
      setSuccessData(data.data);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        course: '',
        notes: ''
      });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md border border-orange-100 text-center space-y-4 max-w-xl mx-auto animate-fade-in">
        <div className="w-16 h-16 bg-orange-50 text-orange-accent rounded-full flex items-center justify-center mx-auto mb-2">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 font-display">Registration Submitted!</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Excellent, <strong className="text-primary-navy">{successData.name}</strong>. Your registration for <strong className="text-orange-accent">{COURSES.find(c => c.id === successData.course)?.title || successData.course}</strong> has been saved.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 text-left text-xs text-gray-600 space-y-1.5 border border-gray-100 max-w-md mx-auto">
          <div className="flex justify-between border-b border-gray-200 pb-1.5 mb-1.5">
            <span className="font-semibold text-gray-700">Student Ref ID:</span>
            <span className="font-mono text-gray-500">{successData.id}</span>
          </div>
          <div><span className="font-medium">Company Sponsorship:</span> {successData.company || 'Self-Sponsored'}</div>
          <div><span className="font-medium">Contact Phone:</span> {successData.phone}</div>
          <div><span className="font-medium">Contact Email:</span> {successData.email}</div>
          {successData.notes && (
            <div className="pt-1"><span className="font-medium">Special Notes/Request:</span> <p className="mt-1 text-gray-500 line-clamp-2">"{successData.notes}"</p></div>
          )}
        </div>

        <p className="text-xs text-gray-500 pt-2">
          An RSDS training advisor will email you with invoice details, schedules, and hotel guidance for Mississippi lodging.
        </p>

        <button
          onClick={() => setSuccessData(null)}
          className="mt-4 px-6 py-2.5 bg-orange-accent text-white font-medium rounded-lg text-sm hover:bg-orange-hover transition-colors"
        >
          Register for Another Course
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 space-y-5">
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-xl font-bold text-primary-navy font-display">Course Registration Form</h3>
        <p className="text-xs text-gray-500 mt-1">Pre-register for classroom courses or request custom corporate training.</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 rounded-lg flex items-start gap-3 border border-red-100 text-sm text-red-700">
          <AlertTriangle className="w-5 h-5 shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="reg-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Student Full Name *</label>
          <input
            id="reg-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Johnathan Doe"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.name ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
            } transition-all`}
          />
          {fieldErrors.name && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.name}</span>}
        </div>

        <div>
          <label htmlFor="reg-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Email Address *</label>
          <input
            id="reg-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@email.com"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
            } transition-all`}
          />
          {fieldErrors.email && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.email}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="reg-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
          <input
            id="reg-phone"
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
          <label htmlFor="reg-company" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Company Sponsoring</label>
          <input
            id="reg-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Sponsoring Employer Corp (if any)"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-accent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reg-course" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Select NDT Course & Level *</label>
        <select
          id="reg-course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 bg-white rounded-lg border text-sm focus:outline-none focus:ring-2 ${
            fieldErrors.course ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-accent'
          } transition-all`}
        >
          <option value="">-- Select Certification Course --</option>
          {COURSES.map(c => (
            <option key={c.id} value={c.id}>{c.title} ({c.hours} Hours)</option>
          ))}
          <option value="custom_corporate">Request Customized Corporate Training (On-Site)</option>
        </select>
        {fieldErrors.course && <span className="text-xs text-red-500 mt-1 block">{fieldErrors.course}</span>}
      </div>

      <div>
        <label htmlFor="reg-notes" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Special Requests, Previous NDT Hours, or Questions</label>
        <textarea
          id="reg-notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Please list any specific scheduling constraints, on-site location requests, or previous certification hours..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-accent transition-all"
        ></textarea>
      </div>

      <button
        id="submit-register"
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-primary-navy text-white font-medium rounded-lg text-sm hover:bg-navy-light shadow-md hover:shadow-primary-navy/15 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader className="w-4.5 h-4.5 animate-spin" />
            <span>Submitting Registration...</span>
          </>
        ) : (
          <>
            <FileText className="w-4 h-4" />
            <span>Securely Submit Pre-Registration</span>
          </>
        )}
      </button>
    </form>
  );
}
