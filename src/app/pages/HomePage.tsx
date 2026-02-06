import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroBg from '@/assets/hero-bg.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const trustStatements = [
    {
      title: 'Decades of Bedside Experience',
      description: 'Our reviews are grounded in real-world patient care—not textbook theory.'
    },
    {
      title: 'Built for Legal Strategy',
      description: 'We translate complex medical narratives into clear, actionable intelligence.'
    },
    {
      title: 'Objective. Thorough. Defensible.',
      description: 'Every opinion is rooted in evidence and clinical accountability.'
    }
  ];

  const services = [
    { title: 'Medical Record Review', description: 'Comprehensive analysis to uncover what matters most.', num: '01' },
    { title: 'Expert Witness Testimony', description: 'Credible, courtroom-ready clinical perspective.', num: '02' },
    { title: 'Life Care Planning', description: 'Detailed projections for long-term patient needs.', num: '03' },
    { title: 'Case Merit Evaluation', description: 'Early insight to guide your strategic decisions.', num: '04' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Premium Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroBg}
            alt="Professional medical and legal documentation"
            className="w-full h-full object-cover scale-105"
          />
          {/* Multi-layer gradient overlay with animated gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#253749]/98 via-[#253749]/92 to-[#34414F]/85"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(37, 55, 73,0.98) 0%, rgba(37, 55, 73,0.92) 50%, rgba(52, 65, 79,0.85) 100%)',
                'linear-gradient(135deg, rgba(37, 55, 73,0.95) 0%, rgba(41, 56, 71,0.90) 50%, rgba(52, 65, 79,0.88) 100%)',
                'linear-gradient(135deg, rgba(37, 55, 73,0.98) 0%, rgba(37, 55, 73,0.92) 50%, rgba(52, 65, 79,0.85) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(195, 153, 63,0.15)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37, 55, 73,0.4)_0%,_transparent_50%)]" />

          {/* Animated texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
        </div>

        {/* Floating geometric decorations - hidden on mobile for performance */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.08, rotate: 360 }}
          transition={{ delay: 1.5, duration: 120, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute top-20 right-20 w-96 h-96 border border-[#C3993F]/30 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.06, scale: [0.8, 1, 0.8] }}
          transition={{ delay: 2, duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute bottom-40 left-10 w-64 h-64 border border-white/20 rounded-full"
        />

        {/* Floating accent shapes - hidden on mobile for cleaner look */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.1, y: [50, 30, 50] }}
          transition={{ delay: 1, duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-1/4 left-[15%] w-3 h-3 bg-[#C3993F] rounded-full blur-[1px]"
        />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.15, y: [-30, -50, -30] }}
          transition={{ delay: 1.5, duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-1/3 right-[20%] w-2 h-2 bg-white rounded-full blur-[1px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: 2.5, duration: 2 }}
          className="hidden sm:block absolute bottom-1/4 right-[10%] w-48 h-48 border border-[#C3993F]/20 rotate-45"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#C3993F]/40 bg-[#C3993F]/10 backdrop-blur-md mb-6 sm:mb-8 shadow-lg shadow-black/10"
          >
            <motion.div
              className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#C3993F]"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-[#C3993F] text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Medical-Legal Consulting
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 sm:mb-8 text-white leading-[1.15]"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
          >
            <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Precision in Every Review.
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block bg-gradient-to-r from-white/90 via-white/80 to-[#C3993F]/60 bg-clip-text text-transparent"
            >
              Clarity in Every Case.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-2"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            Medical-legal insight built on clinical expertise—helping attorneys navigate complex medical records with confidence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xs sm:text-sm text-white/50 mb-8 sm:mb-14 tracking-wide px-2"
            style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}
          >
            Trusted by personal injury and medical malpractice attorneys nationwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center px-4"
          >
            <motion.button
              onClick={() => onNavigate('contact')}
              className="group relative w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-white text-[#253749] tracking-widest overflow-hidden rounded-sm shadow-xl shadow-black/20"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '1.5px' }}
              whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">REQUEST A CONSULTATION</span>
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
            <motion.button
              onClick={() => onNavigate('services')}
              className="group w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 border border-white/40 text-white tracking-widest backdrop-blur-md hover:bg-white/10 hover:border-white/60 transition-all duration-500 rounded-sm shadow-lg shadow-black/10"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '11px', letterSpacing: '1.5px' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW OUR SERVICES
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>


      </section>

      {/* Trust / Value Section - Enhanced Glassmorphism Cards */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Animated background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C3993F]/8 via-[#C3993F]/3 to-transparent"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#253749]/5 to-transparent" />

        {/* Floating decorative elements - hidden on mobile */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-20 left-20 w-20 h-20 border border-[#C3993F]/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:block absolute bottom-40 right-32 w-12 h-12 bg-gradient-to-br from-[#C3993F]/10 to-transparent rounded-full blur-sm"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-6"
            />
            <p className="text-[#C3993F] text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Why Attorneys Trust Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#253749] px-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
              Clinical Authority. Legal Precision.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {trustStatements.map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  boxShadow: '0 30px 60px -15px rgba(37, 55, 73, 0.2), 0 0 40px rgba(195, 153, 63, 0.1)'
                }}
                className="group relative bg-white/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-lg border border-gray-100/80 shadow-xl shadow-gray-200/50 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated top gradient border */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#253749] via-[#C3993F] to-[#253749]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                />

                {/* Glassmorphism inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#C3993F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative accent */}
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#C3993F] to-[#C3993F]/50 mb-6" />

                <h3 className="text-lg sm:text-xl md:text-2xl text-[#253749] mb-3 sm:mb-4 group-hover:text-[#C3993F] transition-colors duration-300 relative z-10" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                  {statement.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                  {statement.description}
                </p>

                {/* Corner decorations */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C3993F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#C3993F]/30 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-white to-[#f8f7f4] overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M0 30 Q 300 0 600 30 T 1200 30 V 60 H 0 Z"
            fill="#f8f7f4"
            initial={{ d: "M0 30 Q 300 60 600 30 T 1200 30 V 60 H 0 Z" }}
            animate={{ d: ["M0 30 Q 300 0 600 30 T 1200 30 V 60 H 0 Z", "M0 30 Q 300 60 600 30 T 1200 30 V 60 H 0 Z", "M0 30 Q 300 0 600 30 T 1200 30 V 60 H 0 Z"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Visual Story Section - Enhanced */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#f8f7f4] relative overflow-hidden">
        {/* Enhanced pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #253749 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating accents - hidden on mobile */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute -top-20 -right-20 w-80 h-80 border border-[#C3993F]/10 rounded-full"
        />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-gradient-to-r from-[#C3993F] to-transparent mb-6"
              />
              <p className="text-[#C3993F] text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Our Approach
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#253749] mb-5 sm:mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                Where Medicine Meets<br />the Courtroom
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Medical records tell a story—but the critical details are often buried beneath layers of clinical terminology, abbreviations, and fragmented documentation. Without deep clinical insight, pivotal information can be missed.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                TrueLine Medical Legal Consulting brings clarity to complexity. We focus not only on the medical risks but also on how causation and damages align, so attorneys can target the key issues—early, accurately, and with unwavering objectivity.
              </p>
              <motion.button
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-3 text-[#253749] text-sm tracking-widest hover:text-[#C3993F] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                whileHover={{ x: 5 }}
              >
                LEARN HOW WE WORK
                <motion.span
                  className="w-8 h-[2px] bg-[#C3993F] group-hover:w-12 transition-all duration-300"
                  whileHover={{ width: 48 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              {/* Enhanced image frame with multiple layers */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="aspect-[4/5] overflow-hidden shadow-2xl shadow-gray-400/30 rounded-sm"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                    alt="Medical professional reviewing documents"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#253749]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Double decorative frame - hidden on mobile */}
                <motion.div
                  className="hidden sm:block absolute -inset-4 border border-[#C3993F]/30 -z-10 rounded-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.div
                  className="hidden md:block absolute -inset-8 border border-[#253749]/10 -z-20 rounded-sm"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* Corner accents - hidden on mobile */}
                <div className="hidden sm:block absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#C3993F]" />
                <div className="hidden sm:block absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#C3993F]" />

                {/* Enhanced Stats badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-10 md:-left-10 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-gradient-to-br from-[#253749] via-[#293847] to-[#253749] flex items-center justify-center shadow-2xl shadow-[#253749]/40 cursor-pointer"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <div className="text-white text-center px-2 sm:px-4 relative z-10">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="text-3xl sm:text-5xl md:text-6xl font-semibold block mb-0.5 sm:mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      20+
                    </motion.span>
                    <span className="text-xs sm:text-sm md:text-base text-white/80 leading-tight" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                      Years of Clinical Experience
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section - Premium Cards */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-[#253749] via-[#253749] to-[#293847] relative overflow-hidden">
        {/* Animated background effects */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(195, 153, 63,0.12)_0%,_transparent_60%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(41, 56, 71,0.6)_0%,_transparent_60%)]"
        />

        {/* Floating geometric shapes - hidden on mobile */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute top-20 left-10 w-40 h-40 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute bottom-32 right-20 w-4 h-4 bg-[#C3993F]/30 rounded-full"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-6"
            />
            <p className="text-[#C3993F] text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
              Core Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.4), 0 0 30px rgba(195, 153, 63, 0.15)'
                }}
                className="group relative p-5 sm:p-6 md:p-8 border border-white/10 hover:border-[#C3993F]/50 transition-all duration-500 cursor-pointer backdrop-blur-md bg-white/[0.02] rounded-sm overflow-hidden"
                onClick={() => onNavigate('services')}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#C3993F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Number indicator with glow */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/10 text-2xl sm:text-4xl font-bold group-hover:text-[#C3993F]/40 transition-colors duration-500" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.num}
                </div>

                {/* Animated accent line */}
                <motion.div
                  className="w-10 sm:w-12 h-[2px] bg-gradient-to-r from-[#C3993F] to-[#C3993F]/50 mb-5 sm:mb-8 group-hover:w-16"
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 group-hover:text-[#C3993F] transition-colors duration-300 relative z-10" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300 relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                  {service.description}
                </p>

                {/* Arrow indicator with animation - hidden on mobile */}
                <motion.div
                  className="hidden sm:block absolute bottom-6 sm:bottom-8 right-6 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <motion.span
                    className="text-[#C3993F] text-lg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C3993F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-10 sm:mt-16"
          >
            <motion.button
              onClick={() => onNavigate('services')}
              className="group inline-flex items-center gap-3 text-white text-sm tracking-widest hover:text-[#C3993F] transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              whileHover={{ x: 5 }}
            >
              VIEW ALL SERVICES
              <motion.span
                className="w-8 h-[1px] bg-white/30 group-hover:bg-[#C3993F] group-hover:w-12 transition-all duration-300"
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Founder / Leadership Teaser - Enhanced */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Animated concentric circles - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gray-100/80 rounded-full opacity-50"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-100 rounded-full opacity-30"
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#C3993F]/10 rounded-full opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="max-w-[900px] mx-auto px-4 sm:px-8 md:px-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-6"
            />
            <p className="text-[#C3993F] text-xs sm:text-sm tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Our Leadership
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#253749] mb-6 sm:mb-10" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
              Led by Clinical Excellence
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto px-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              TrueLine Medical Legal Consulting was founded to improve patient safety and to be a voice for people who are injured and left with questions—bringing clinical expertise with integrity to make a decisive difference in legal outcomes.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Our leadership brings decades of hands-on patient care experience to every engagement—bridging the gap between medicine and law with precision, accountability, and an unwavering commitment to the truth.
            </p>
            <motion.button
              onClick={() => onNavigate('about')}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-[#253749] text-[#253749] tracking-widest overflow-hidden rounded-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '2px' }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -15px rgba(37, 55, 73, 0.25)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">MEET OUR TEAM →</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#253749] to-[#293847]"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Premium Design */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-[#f8f7f4] via-[#f5f4f0] to-[#efeee9] relative overflow-hidden">
        {/* Decorative elements - hidden on mobile */}
        <motion.div
          className="hidden sm:block absolute top-10 left-10 w-32 h-32 border border-[#C3993F]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-10 right-10 w-24 h-24 border border-[#253749]/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-1/4 right-1/4 w-3 h-3 bg-[#C3993F]/30 rounded-full"
        />

        <div className="max-w-[800px] mx-auto px-4 sm:px-8 md:px-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-[#C3993F]/20 to-[#C3993F]/10 flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg shadow-[#C3993F]/10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-r from-[#C3993F] to-[#D39012]" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#253749] mb-4 sm:mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
              Let's Build Your Case Together
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 px-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Partner with a team that understands both the science and the stakes.
            </p>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="group relative w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-5 bg-gradient-to-r from-[#253749] to-[#293847] text-white tracking-widest overflow-hidden shadow-xl shadow-[#253749]/30 rounded-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '2px' }}
              whileHover={{ scale: 1.03, boxShadow: '0 30px 60px -15px rgba(37, 55, 73, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">SCHEDULE A CONSULTATION</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C3993F] via-[#D39012] to-[#8F6B1D]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.button>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-xs sm:text-sm mt-6 sm:mt-10 tracking-wide"
              style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}
            >
              Referrals appreciated.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/12818456224"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7 sm:w-8 sm:h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Pulse animation ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.a>
    </div>
  );
}
