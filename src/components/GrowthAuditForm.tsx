import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Phone, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { FormData } from '../types';

interface GrowthAuditFormProps {
  selectedPlan: string;
  onClearPlan: () => void;
}

interface FormErrors {
  name?: string;
  businessName?: string;
  phone?: string;
  city?: string;
  goal?: string;
}

export const GrowthAuditForm: React.FC<GrowthAuditFormProps> = ({
  selectedPlan,
  onClearPlan,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    phone: '',
    city: '',
    goal: '',
    selectedPlan: selectedPlan || '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, selectedPlan }));
    }
  }, [selectedPlan]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field once user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business name.';
    }

    // Validate phone number: Indian phone numbers typically 10 digits
    const cleanedPhone = formData.phone.replace(/[\s\-\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your WhatsApp phone number.';
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city.';
    }

    if (!formData.goal.trim()) {
      newErrors.goal = 'Please tell us what you want to grow.';
    } else if (formData.goal.trim().length < 5) {
      newErrors.goal = 'Please provide a little more detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    /**
     * =========================================================================
     * TODO: FUTURE BACKEND / CRM / FORM INTEGRATION
     * =========================================================================
     * Replace this simulated timeout with your actual form submission handler.
     * Examples:
     * 1. Send to a serverless API endpoint:
     *    await fetch('/api/lead', { method: 'POST', body: JSON.stringify(formData) });
     * 2. Send to Formspree / Web3Forms / Resend:
     *    await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... });
     * 3. Forward directly to WhatsApp webhook or CRM (e.g. HubSpot, Notion, Google Sheets).
     * =========================================================================
     */
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      city: '',
      goal: '',
      selectedPlan: '',
    });
    setErrors({});
    onClearPlan();
  };

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-24 border-t border-outline/40 overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="pointer-events-none absolute inset-0 cta-glow" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
        {/* Left: Final CTA Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col gap-gutter-lg">
          <span className="font-mono text-mono-md text-primary font-semibold">
            बढ़ो • START GROWING
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface text-balance font-extrabold tracking-tight">
            Aapka dhanda ready hai.
            <br />
            <span className="text-primary">Ab customers ko dikhate hain.</span>
          </h2>
          <p className="font-body text-body-lg text-on-surface-muted text-pretty max-w-prose">
            Let’s build an online presence that brings attention, enquiries, and
            real business growth.
          </p>

          <div className="flex flex-wrap items-center gap-gutter-md pt-gutter-xs">
            <a
              href="#audit-form"
              className="group inline-flex items-center justify-center gap-gutter-sm rounded-full bg-primary px-gutter-lg sm:px-gutter-xl py-4 text-on-primary font-label text-label-lg font-bold transition-all duration-state-change hover:-translate-y-0.5 hover:bg-primary-glow shadow-lg shadow-primary/10 cursor-pointer"
            >
              <span>Book Your Free Growth Audit</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-state-change group-hover:translate-x-1" />
            </a>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-gutter-sm rounded-full border border-outline-green bg-surface-container/80 backdrop-blur-md px-gutter-lg py-4 text-primary font-label text-label-lg font-semibold transition-colors duration-state-change hover:border-primary hover:bg-surface-container-high"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Right: Glass Contact Form */}
        <div
          id="audit-form"
          className="lg:col-span-6 glass-panel rounded-lg p-gutter-lg sm:p-gutter-xl"
        >
          {isSubmitted ? (
            <div className="py-8 flex flex-col items-center text-center gap-gutter-md animate-fade-rise">
              <div className="h-16 w-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary mb-2">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-headline text-headline-md text-on-surface font-extrabold">
                Dhanyawad! Request Received.
              </h3>
              <p className="font-body text-body-md text-on-surface-muted max-w-md leading-relaxed">
                We have received your details for{' '}
                <span className="text-on-surface font-semibold">
                  {formData.businessName || 'your business'}
                </span>
                {formData.selectedPlan && (
                  <span>
                    {' '}
                    interested in the{' '}
                    <strong className="text-primary">{formData.selectedPlan}</strong> plan
                  </span>
                )}
                . Our growth strategist will inspect your profile and message you on
                WhatsApp within 24 hours.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 rounded-full border border-outline-green bg-surface-container/80 px-gutter-lg py-2.5 text-on-surface font-label text-label-sm hover:border-primary transition-colors cursor-pointer"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-gutter-md" noValidate>
              {/* Selected Plan indicator badge if user arrived from pricing */}
              {formData.selectedPlan && (
                <div className="flex items-center justify-between p-3 rounded-md bg-surface-container border border-primary/40 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-on-surface-muted">
                      Selected Plan:{' '}
                      <strong className="text-primary font-bold">
                        {formData.selectedPlan}
                      </strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, selectedPlan: '' }));
                      onClearPlan();
                    }}
                    className="text-on-surface-muted hover:text-on-surface p-1 cursor-pointer"
                    aria-label="Remove selected plan"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
                {/* Name */}
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-label text-label-sm text-on-surface font-semibold">
                    Name <span className="text-primary">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={`w-full rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-outline'
                    } bg-surface/80 px-gutter-md py-3 font-body text-body-md text-on-surface placeholder:text-on-surface-muted/70 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 font-label text-label-sm text-red-400 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </label>

                {/* Business Name */}
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-label text-label-sm text-on-surface font-semibold">
                    Business Name <span className="text-primary">*</span>
                  </span>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Kora Café / IronCore Gym"
                    required
                    className={`w-full rounded-md border ${
                      errors.businessName ? 'border-red-500' : 'border-outline'
                    } bg-surface/80 px-gutter-md py-3 font-body text-body-md text-on-surface placeholder:text-on-surface-muted/70 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors`}
                  />
                  {errors.businessName && (
                    <span className="flex items-center gap-1 font-label text-label-sm text-red-400 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.businessName}
                    </span>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
                {/* Phone / WhatsApp */}
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-label text-label-sm text-on-surface font-semibold">
                    WhatsApp Number <span className="text-primary">*</span>
                  </span>
                  <div className="relative flex items-center">
                    <Phone className="w-4 h-4 text-on-surface-muted absolute left-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98XXX XXXXX"
                      required
                      className={`w-full rounded-md border ${
                        errors.phone ? 'border-red-500' : 'border-outline'
                      } bg-surface/80 pl-10 pr-gutter-md py-3 font-body text-body-md text-on-surface placeholder:text-on-surface-muted/70 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="flex items-center gap-1 font-label text-label-sm text-red-400 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </span>
                  )}
                </label>

                {/* City */}
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-label text-label-sm text-on-surface font-semibold">
                    City <span className="text-primary">*</span>
                  </span>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Pune, Bengaluru, Jaipur"
                    required
                    className={`w-full rounded-md border ${
                      errors.city ? 'border-red-500' : 'border-outline'
                    } bg-surface/80 px-gutter-md py-3 font-body text-body-md text-on-surface placeholder:text-on-surface-muted/70 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors`}
                  />
                  {errors.city && (
                    <span className="flex items-center gap-1 font-label text-label-sm text-red-400 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.city}
                    </span>
                  )}
                </label>
              </div>

              {/* What do you want to grow? */}
              <label className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-sm text-on-surface font-semibold">
                  What do you want to grow? <span className="text-primary">*</span>
                </span>
                <textarea
                  name="goal"
                  rows={3}
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder="Tell us about your business—Reels, local enquiries, Meta ads, or Google Maps..."
                  required
                  className={`w-full rounded-md border ${
                    errors.goal ? 'border-red-500' : 'border-outline'
                  } bg-surface/80 px-gutter-md py-3 font-body text-body-md text-on-surface placeholder:text-on-surface-muted/70 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors`}
                />
                {errors.goal && (
                  <span className="flex items-center gap-1 font-label text-label-sm text-red-400 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.goal}
                  </span>
                )}
              </label>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-gutter-xs w-full inline-flex items-center justify-center gap-gutter-sm rounded-full bg-primary px-gutter-md sm:px-gutter-xl py-3.5 text-on-primary font-label text-label-lg font-bold transition-all duration-state-change hover:-translate-y-0.5 hover:bg-primary-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/10"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Book Your Free Growth Audit'}</span>
                {!isSubmitting && (
                  <ArrowRight className="w-5 h-5 transition-transform duration-state-change group-hover:translate-x-1" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
