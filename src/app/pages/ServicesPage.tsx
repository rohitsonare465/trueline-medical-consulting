import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: 'Merit Screening and Case Intake',
      description: 'Early medical record review to help assess liability, causation considerations, and overall case viability.',
      num: '01'
    },
    {
      title: 'Causation and Damages Analysis',
      description: 'Analysis of the medical record to evaluate how injury, treatment, and outcomes relate to claimed damages.',
      num: '02'
    },
    {
      title: 'Medical Record Analysis and Case Chronology',
      description: 'Objective analysis of medical records organized into clear timelines that reflect the course of care.',
      num: '03'
    },
    {
      title: 'Expert Identification and Collaboration',
      description: 'Assistance identifying appropriate medical experts and organizing records to support efficient expert review.',
      num: '04'
    },
    {
      title: 'Litigation and Trial Support',
      description: 'Medical legal support to assist attorneys during depositions, trial preparation, and related proceedings.',
      num: '05'
    },
    {
      title: 'Medical Record Audit Trails and Metadata Review',
      description: 'Review of medical record metadata and documentation history to assess timing, edits, and documentation patterns.',
      num: '06'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Header Section - Premium Enhanced */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#253749] via-[#253749] to-[#293847] overflow-hidden">
        {/* Animated gradient backgrounds */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(195, 153, 63,0.12)_0%,_transparent_60%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating decorative circles */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 border border-[#C3993F]/15 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating accent dots */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#C3993F]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white/20 rounded-full"
        />

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1200px] mx-auto px-8 md:px-16 text-center relative">
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
                className="w-2 h-2 rounded-full bg-[#C3993F]"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-[#C3993F] text-sm tracking-[3px] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                What We Offer
              </p>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-8"
            />

            <p
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              Comprehensive medical-legal expertise tailored to your case requirements.
              From initial case screening through trial support, we provide the clinical insight
              attorneys need to build stronger cases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Section Divider */}
      <div className="relative h-20 bg-gradient-to-b from-[#253749] to-white overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M0 30 Q 300 0 600 30 T 1200 30 V 60 H 0 Z"
            fill="white"
            initial={{ d: "M0 30 Q 300 60 600 30 T 1200 30 V 60 H 0 Z" }}
            animate={{ d: ["M0 30 Q 300 0 600 30 T 1200 30 V 60 H 0 Z", "M0 30 Q 300 60 600 30 T 1200 30 V 60 H 0 Z", "M0 30 Q 300 0 600 30 T 1200 30 V 60 H 0 Z"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Services Grid Section - Premium Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background decorations */}
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C3993F]/8 to-transparent"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[#253749]/5 to-transparent" />

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 w-16 h-16 border border-[#C3993F]/15 rounded-full"
        />

        <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-28 bg-[#f8f7f4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #253749 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Decorative rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-80 h-80 border border-[#C3993F]/10 rounded-full"
        />

        <div className="max-w-[1000px] mx-auto px-8 md:px-16 text-center relative">
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
            <p className="text-[#C3993F] text-sm tracking-[4px] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Our Approach
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#253749] mb-10"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              Why Work With Us Early?
            </h2>
            <motion.div
              className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-lg shadow-gray-200/50 border border-gray-100/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p
                className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                Attorneys should get us involved early in the process—then we stay engaged through trial,
                helping them make informed judgment calls, anticipate pitfalls, and prevent surprises.
              </p>
              <p
                className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                In other words, we help you see exactly where to focus so you can stay one step ahead.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Call to Action - Premium Enhanced */}
      <section className="py-28 bg-gradient-to-br from-[#253749] via-[#253749] to-[#293847] relative overflow-hidden">
        {/* Animated gradient backgrounds */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(195, 153, 63,0.15)_0%,_transparent_60%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Floating decorations */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 border border-[#C3993F]/15 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#C3993F]/30 rounded-full"
        />

        <div className="max-w-[900px] mx-auto px-8 md:px-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#C3993F] via-[#D39012] to-[#8F6B1D] flex items-center justify-center shadow-xl shadow-[#C3993F]/30"
            >
              <div className="w-10 h-10 rounded-full bg-white/20" />
            </motion.div>

            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              Ready to Strengthen Your Case?
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              Contact us to discuss how our medical-legal expertise can support your litigation strategy.
            </p>
            <motion.button
              onClick={() => onNavigate?.('contact')}
              className="group relative px-12 py-5 bg-white tracking-widest overflow-hidden shadow-xl rounded-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '3px' }}
              whileHover={{ scale: 1.03, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="relative z-20 group-hover:text-white transition-colors duration-500"
                style={{ color: '#253749' }}
              >
                SCHEDULE A CONSULTATION
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C3993F] via-[#D39012] to-[#8F6B1D] z-10"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-10"
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.button>
            <motion.p
              className="text-white/50 text-sm mt-10 tracking-wide"
              style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              The feedback we hear repeatedly is, "Why didn't I do this sooner?"
            </motion.p>
          </motion.div>
        </div>
      </section >
    </div >
  );
}

// Enhanced Service Card Component with 3D Effects
function ServiceCard({ service, index }: { service: { title: string; description: string; num: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -15,
        rotateX: 2,
        boxShadow: '0 35px 70px -15px rgba(37, 55, 73, 0.2), 0 0 40px rgba(195, 153, 63, 0.1)'
      }}
      className="group relative bg-white/90 backdrop-blur-xl p-10 rounded-lg border border-gray-100/80 shadow-xl shadow-gray-200/50 transition-all duration-500 cursor-pointer overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated gradient top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#253749] via-[#C3993F] to-[#253749]"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      />

      {/* Glassmorphism inner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#C3993F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      {/* Number indicator with glow effect */}
      <motion.div
        className="absolute top-8 right-8 text-gray-100 text-5xl font-bold group-hover:text-[#C3993F]/30 transition-colors duration-500"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
        whileHover={{ scale: 1.1 }}
      >
        {service.num}
      </motion.div>

      {/* Animated accent line */}
      <div className="w-12 h-[2px] bg-gradient-to-r from-[#C3993F] to-[#C3993F]/50 mb-6 group-hover:w-20 transition-all duration-500 mt-4" />

      <h3
        className="text-xl md:text-2xl text-[#253749] mb-4 leading-snug group-hover:text-[#C3993F] transition-colors duration-300 relative z-10"
        style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
      >
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
        {service.description}
      </p>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C3993F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      {/* Arrow indicator with animation */}
      <motion.div
        className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
  );
}
