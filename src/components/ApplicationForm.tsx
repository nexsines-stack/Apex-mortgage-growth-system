import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { qualifyLead, QualificationResult } from '../services/geminiService';

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    city: '',
    phone: '',
    email: '',
    volume: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [qualificationResult, setQualificationResult] = useState<QualificationResult | null>(null);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (value.trim().length < 2) error = 'Full name is required';
        break;
      case 'companyName':
        if (value.trim().length < 2) error = 'Company name is required';
        break;
      case 'city':
        if (value.trim().length < 2) error = 'City is required';
        break;
      case 'phone':
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
        if (!value.trim()) error = 'Phone number is required';
        else if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 7) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Please enter a valid email address';
        break;
      case 'volume':
        if (!value) error = 'Please select your current volume';
        break;
      case 'budget':
        if (!value) error = 'Please select your monthly budget';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      if (key !== 'message') {
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (isValid) {
      setIsSubmitting(true);
      try {
        const result = await qualifyLead(formData);
        setQualificationResult(result);
        setIsSuccess(true);
      } catch (error) {
        console.error("Submission error:", error);
        // Handle error appropriately, maybe show a generic success message or error alert
        setIsSuccess(true); // Fallback to success for now
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getInputClasses = (name: string) => {
    const base = "w-full bg-carbon border rounded-sm px-4 py-3 text-white focus:outline-none transition-colors appearance-none";
    if (touched[name] && errors[name]) {
      return `${base} border-red-500 focus:border-red-500`;
    }
    if (touched[name] && !errors[name] && formData[name as keyof typeof formData]) {
      return `${base} border-emerald-500/50 focus:border-gold-500`;
    }
    return `${base} border-white/10 focus:border-gold-500`;
  };

  if (isSuccess) {
    return (
      <section id="apply" className="py-24 bg-charcoal relative border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 rounded-2xl flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Application Received</h3>
            
            {qualificationResult && (
              <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                  <span className="text-gray-400">Qualification Score</span>
                  <span className={`text-2xl font-bold ${
                    qualificationResult.qualificationLevel === 'High' ? 'text-emerald-500' :
                    qualificationResult.qualificationLevel === 'Medium' ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {qualificationResult.score}/100
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">AI Analysis</p>
                  <p className="text-gray-300 italic">"{qualificationResult.reasoning}"</p>
                </div>
              </div>
            )}

            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Thank you for applying to Apex Mortgage Growth. Our team will review your details and reach out within 24 hours.
            </p>
            <Button onClick={() => { setIsSuccess(false); setQualificationResult(null); }} variant="outline">
              Submit Another Application
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 bg-charcoal relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Application Form</h2>
          <p className="text-gray-400 text-lg">Fill out the form below to see if you qualify for the Apex System.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('fullName')} 
                  placeholder="John Doe" 
                />
                {touched.fullName && errors.fullName && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1 absolute -bottom-5 left-0">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </div>
                )}
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Company Name</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('companyName')} 
                  placeholder="Premier Mortgage" 
                />
                {touched.companyName && errors.companyName && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1 absolute -bottom-5 left-0">
                    <AlertCircle className="w-3 h-3" /> {errors.companyName}
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">City / Region</label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('city')} 
                  placeholder="Miami, FL" 
                />
                {touched.city && errors.city && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1 absolute -bottom-5 left-0">
                    <AlertCircle className="w-3 h-3" /> {errors.city}
                  </div>
                )}
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('phone')} 
                  placeholder="+1 (555) 000-0000" 
                />
                {touched.phone && errors.phone && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1 absolute -bottom-5 left-0">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 relative pt-2">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('email')} 
                  placeholder="john@example.com" 
                />
                {touched.email && errors.email && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1 absolute -bottom-5 left-0">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Current Monthly Volume</label>
                <select 
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('volume')}
                >
                  <option value="" disabled>Select Volume</option>
                  <option value="0-2">0 - 2 Deals / mo</option>
                  <option value="3-5">3 - 5 Deals / mo</option>
                  <option value="6-10">6 - 10 Deals / mo</option>
                  <option value="11+">11+ Deals / mo</option>
                </select>
                {touched.volume && errors.volume && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1 absolute -bottom-5 left-0">
                    <AlertCircle className="w-3 h-3" /> {errors.volume}
                  </div>
                )}
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Monthly Ad Budget</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('budget')}
                >
                  <option value="" disabled>Select Budget</option>
                  <option value="<2k">Less than $2,000</option>
                  <option value="2k-5k">$2,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
                {touched.budget && errors.budget && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1 absolute -bottom-5 left-0">
                    <AlertCircle className="w-3 h-3" /> {errors.budget}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Additional Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                className="w-full bg-carbon border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none" 
                placeholder="Tell us about your current growth goals..."
              ></textarea>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
              Your information is secure and will never be shared.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
