import { motion } from 'motion/react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Header Section - Premium Enhanced */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#253749] via-[#253749] to-[#293847] overflow-hidden">
        {/* Animated gradient backgrounds */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(195, 153, 63,0.15)_0%,_transparent_60%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating decorative circles */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }, rotate: { duration: 60, repeat: Infinity, ease: "linear" } }}
          className="absolute top-20 right-20 w-96 h-96 border border-[#C3993F]/15 rounded-full"
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating accent dots */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#C3993F]/50 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full"
        />

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1000px] mx-auto px-6 md:px-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#C3993F]/40 bg-[#C3993F]/10 backdrop-blur-md mb-8 shadow-lg shadow-black/10"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-[#C3993F]"
              />
              <p className="text-[#C3993F] text-sm tracking-[3px] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Get In Touch
              </p>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Let's Discuss Your Case
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-8"
            />

            <p
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-4"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              Clinical insight and strategic case support for complex injury and malpractice cases.
            </p>
            <motion.p
              className="text-sm text-white/50 italic"
              style={{ fontFamily: 'Inter, sans-serif' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Referrals appreciated.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Animated Section Divider */}
      <div className="relative h-16 bg-gradient-to-b from-[#253749] to-white overflow-hidden">
        <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1200 50" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M0 25 Q 300 0 600 25 T 1200 25 V 50 H 0 Z"
            fill="white"
            initial={{ d: "M0 25 Q 300 50 600 25 T 1200 25 V 50 H 0 Z" }}
            animate={{ d: ["M0 25 Q 300 0 600 25 T 1200 25 V 50 H 0 Z", "M0 25 Q 300 50 600 25 T 1200 25 V 50 H 0 Z", "M0 25 Q 300 0 600 25 T 1200 25 V 50 H 0 Z"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Contact Form Section - Premium Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background decorations */}
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C3993F]/8 to-transparent"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[#253749]/5 to-transparent" />

        {/* Floating decoration */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 w-16 h-16 border border-[#C3993F]/15 rounded-full"
        />

        <div className="max-w-[900px] mx-auto px-6 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            whileHover={{ boxShadow: '0 35px 70px -15px rgba(37, 55, 73, 0.15)' }}
            className="bg-white/90 backdrop-blur-xl p-10 md:p-14 shadow-2xl border border-gray-100/80 rounded-lg transition-all duration-500 overflow-hidden relative"
          >
            {/* Glassmorphism inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#C3993F]/5 rounded-lg pointer-events-none" />

            {/* Animated gradient top border */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#253749] via-[#C3993F] to-[#253749]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 relative z-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#253749] via-[#293847] to-[#253749] flex items-center justify-center shadow-xl shadow-[#253749]/30"
                >
                  <motion.span
                    className="text-3xl text-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    ✓
                  </motion.span>
                </motion.div>
                <h3 className="text-3xl text-[#253749] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                  Thank You!
                </h3>
                <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Thank you for reaching out. We will contact you within 24 hours to discuss your case needs.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-gray-700 mb-3 tracking-wide text-xs uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '2px' }}>
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-[#C3993F] bg-transparent transition-all duration-300"
                      placeholder="Type here"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      whileFocus={{ scale: 1.01 }}
                    />
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-[#C3993F] to-[#E0C27A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-gray-700 mb-3 tracking-wide text-xs uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '2px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-[#C3993F] bg-transparent transition-all duration-300"
                      placeholder="Type here"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-[#C3993F] to-[#E0C27A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-gray-700 mb-3 tracking-wide text-xs uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '2px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-[#C3993F] bg-transparent transition-all duration-300"
                    placeholder="Type here"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-[#C3993F] to-[#E0C27A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-gray-700 mb-3 tracking-wide text-xs uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '2px' }}>
                    Case Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-[#C3993F] bg-transparent resize-none transition-all duration-300"
                    placeholder="Type here"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-[#C3993F] to-[#E0C27A] origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#253749] to-[#293847] text-white py-5 transition-all duration-500 relative overflow-hidden group tracking-widest mt-8 rounded-sm disabled:opacity-70 shadow-xl shadow-[#253749]/20"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '3px' }}
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(37, 55, 73, 0.35)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500">
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        SENDING...
                      </>
                    ) : (
                      'SUBMIT INQUIRY'
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#C3993F] via-[#D39012] to-[#8F6B1D]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-200%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Additional Information Section - Premium Enhanced */}
      <section className="py-24 bg-[#f8f7f4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #253749 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-20 right-10 w-40 h-40 border border-[#C3993F]/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-3 h-3 bg-[#C3993F]/20 rounded-full"
        />

        <div className="max-w-[900px] mx-auto px-6 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-6"
            />
            <h2
              className="text-3xl md:text-4xl text-[#253749] mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              What to Expect
            </h2>
            <motion.div
              className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-lg shadow-gray-200/50 border border-gray-100/50 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    className="text-[#C3993F] text-xl mt-0.5"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✓
                  </motion.span>
                  <span>We will respond to your inquiry within <strong className="text-[#253749]">24 hours</strong> to schedule an initial consultation.
                    During this call, we will discuss your case needs, timeline, and how our services can support your litigation strategy.</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    className="text-[#C3993F] text-xl mt-0.5"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    ✓
                  </motion.span>
                  <span>All consultations are <strong className="text-[#253749]">confidential</strong> and conducted with the understanding that time is critical in legal matters.</span>
                </motion.p>
              </div>
            </motion.div>

            {/* Contact info card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <motion.a
                href="mailto:Khaleela@truelinemedicallegal.com"
                className="inline-flex items-center gap-4 px-8 py-5 bg-white rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ y: -5, boxShadow: '0 25px 50px -15px rgba(37, 55, 73, 0.2)' }}
              >
                <motion.span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#253749] via-[#293847] to-[#253749] flex items-center justify-center text-white text-lg shadow-lg shadow-[#253749]/30"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  @
                </motion.span>
                <div className="text-left">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email Us
                  </span>
                  <span className="text-[#253749] font-semibold text-lg group-hover:text-[#C3993F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Khaleela@truelinemedicallegal.com
                  </span>
                </div>
              </motion.a>
              <motion.a
                href="tel:+12818456224"
                className="inline-flex items-center gap-4 px-8 py-5 bg-white rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group ml-4"
                whileHover={{ y: -5, boxShadow: '0 25px 50px -15px rgba(37, 55, 73, 0.2)' }}
              >
                <motion.span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#253749] via-[#293847] to-[#253749] flex items-center justify-center text-white text-lg shadow-lg shadow-[#253749]/30"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  📞
                </motion.span>
                <div className="text-left">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Call Us
                  </span>
                  <span className="text-[#253749] font-semibold text-lg group-hover:text-[#C3993F] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +1 (281) 845-6224
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
