'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => ({ error: 'Unable to parse server response.' }));

      if (res.ok && (result.success || result.id)) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage('Network error. Unable to reach server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 text-brand-warmLight font-mono text-xs tracking-wider uppercase mb-2">
            <Mail className="w-4 h-4 text-brand-crimson" />
            <span>07. Recruiter Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream tracking-tight">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warmLight to-brand-crimson">Connect</span>
          </h2>
          <p className="text-brand-muted text-sm mt-1.5 max-w-xl">
            Open to entry-level Software Developer, Junior Web Developer, and Data Analytics opportunities. Reach out via form or direct contact.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-burgundy to-brand-warm rounded-full mt-2" />
        </div>

        {/* Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Direct Channels Box */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="glass-panel p-6 sm:p-7 rounded-2xl h-full flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-brand-cream font-mono mb-1">
                  Direct Recruiter Channels
                </h3>
                <p className="text-brand-muted text-xs mb-4">
                  Feel free to contact me directly through any of these primary channels.
                </p>
                
                <div className="space-y-3">
                  {/* Email Card */}
                  <div className="p-3.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.22)] flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-muted block">Email Address</span>
                        <a
                          href={`mailto:${personal.email}`}
                          className="text-xs sm:text-sm font-mono font-medium text-brand-cream hover:text-brand-warmLight transition-colors"
                        >
                          {personal.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personal.email, 'email')}
                      className="p-2 rounded-lg bg-[#10090B] border border-[rgba(190,90,70,0.2)] text-brand-muted hover:text-brand-cream transition-colors"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? <Check className="w-4 h-4 text-brand-crimson" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone Card */}
                  <div className="p-3.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.22)] flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-muted block">Phone Contact</span>
                        <a
                          href={`tel:${personal.phone}`}
                          className="text-xs sm:text-sm font-mono font-medium text-brand-cream hover:text-brand-warmLight transition-colors"
                        >
                          {personal.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personal.phone, 'phone')}
                      className="p-2 rounded-lg bg-[#10090B] border border-[rgba(190,90,70,0.2)] text-brand-muted hover:text-brand-cream transition-colors"
                      title="Copy Phone"
                    >
                      {copiedField === 'phone' ? <Check className="w-4 h-4 text-brand-crimson" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* LinkedIn Card */}
                  <div className="p-3.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.22)] flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-muted block">LinkedIn Profile</span>
                        <a
                          href={personal.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-mono font-medium text-brand-cream hover:text-brand-warmLight transition-colors"
                        >
                          linkedin.com/in/jaiyand-a-915340267/
                        </a>
                      </div>
                    </div>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#10090B] border border-[rgba(190,90,70,0.2)] text-brand-muted hover:text-brand-cream transition-colors"
                      title="Open LinkedIn"
                    >
                      <Sparkles className="w-4 h-4" />
                    </a>
                  </div>

                  {/* GitHub Card */}
                  <div className="p-3.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.22)] flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-brand-muted block">GitHub Profile</span>
                        <a
                          href={personal.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-mono font-medium text-brand-cream hover:text-brand-warmLight transition-colors"
                        >
                          github.com/jaiyand
                        </a>
                      </div>
                    </div>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#10090B] border border-[rgba(190,90,70,0.2)] text-brand-muted hover:text-brand-cream transition-colors"
                      title="Open GitHub"
                    >
                      <Sparkles className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[rgba(190,90,70,0.2)] text-[11px] font-mono text-brand-muted flex items-center justify-between">
                <span>Location: Trichy, Tamil Nadu</span>
                <span className="text-emerald-400 font-semibold">• Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form Box */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="glass-panel p-6 sm:p-7 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-brand-cream font-mono mb-1">
                  Send Direct Message
                </h3>
                <p className="text-brand-muted text-xs mb-4">
                  Fill in your details below to send an inquiry or schedule an interview.
                </p>

                {isSuccess && (
                  <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Thank you! Your message has been sent directly to jaiyandanand@gmail.com.</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-brand-burgundy/40 border border-brand-crimson/50 text-brand-cream text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-brand-warmLight" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono text-brand-creamMuted mb-1">
                        Your Name <span className="text-brand-crimson">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.25)] text-brand-cream text-sm focus:outline-none focus:border-brand-crimson transition-colors placeholder:text-brand-muted/40 font-mono"
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1 text-brand-warmLight text-[11px] font-mono mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brand-creamMuted mb-1">
                        Your Email <span className="text-brand-crimson">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.25)] text-brand-cream text-sm focus:outline-none focus:border-brand-crimson transition-colors placeholder:text-brand-muted/40 font-mono"
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1 text-brand-warmLight text-[11px] font-mono mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brand-creamMuted mb-1">
                      Subject <span className="text-brand-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('subject')}
                      placeholder="e.g. Software Developer Role Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.25)] text-brand-cream text-sm focus:outline-none focus:border-brand-crimson transition-colors placeholder:text-brand-muted/40 font-mono"
                    />
                    {errors.subject && (
                      <span className="flex items-center gap-1 text-brand-warmLight text-[11px] font-mono mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brand-creamMuted mb-1">
                      Message <span className="text-brand-crimson">*</span>
                    </label>
                    <textarea
                      rows={3}
                      {...register('message')}
                      placeholder="Write your message or role details here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10090B]/80 border border-[rgba(190,90,70,0.25)] text-brand-cream text-sm focus:outline-none focus:border-brand-crimson transition-colors placeholder:text-brand-muted/40 font-mono resize-none"
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1 text-brand-warmLight text-[11px] font-mono mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-brand-burgundy to-brand-crimson hover:from-brand-crimson hover:to-brand-burgundy text-brand-cream font-mono font-bold text-xs transition-all duration-200 shadow-xl shadow-brand-burgundy/40 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
