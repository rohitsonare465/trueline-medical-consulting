import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import founderImage from '@/assets/founder.jpeg';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credentials = [
    { label: 'MSN', desc: 'Master of Science in Nursing' },
    { label: 'RN', desc: 'Registered Nurse' },
    { label: 'CNOR', desc: 'Certified Operating Room Nurse' },
    { label: 'NE-BC', desc: 'Nurse Executive Board Certified' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Header Section - Enhanced */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-[#253749] via-[#253749] to-[#293847] overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(195, 153, 63,0.12)_0%,_transparent_60%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 border border-[#C3993F]/15 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity } }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
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
                About Us
              </p>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                About TrueLine
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
              Supporting personal injury and medical malpractice attorneys nationwide in evaluating
              medical risks and standards of care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section - Premium Enhanced */}
      <section ref={ref} className="py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C3993F]/8 to-transparent"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Floating decorations */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-10 w-16 h-16 border border-[#C3993F]/15 rounded-full"
        />

        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side - Enhanced Frame */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="overflow-hidden shadow-2xl shadow-gray-400/30 rounded-sm"
                >
                  <ImageWithFallback
                    src={founderImage}
                    alt="Khaleela Umheni, Founder and Principal Legal Nurse Consultant"
                    className="w-full h-[550px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#253749]/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Multi-layer decorative frame */}
                <motion.div
                  className="absolute -inset-4 border border-[#C3993F]/30 -z-10 rounded-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.div
                  className="absolute -inset-8 border border-[#253749]/10 -z-20 rounded-sm"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#C3993F]" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#C3993F]" />

                {/* Credentials badge - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -15px rgba(37, 55, 73, 0.5)' }}
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-gradient-to-br from-[#253749] via-[#293847] to-[#253749] p-6 md:p-8 shadow-2xl shadow-[#253749]/40 cursor-pointer"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <div className="text-white text-center relative z-10">
                    <motion.span
                      className="text-4xl md:text-5xl font-semibold block mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      15+
                    </motion.span>
                    <span className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                      Years Nursing<br />Experience
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 60 } : {}}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-gradient-to-r from-[#C3993F] to-transparent mb-6"
              />
              <span className="text-[#C3993F] tracking-widest text-sm uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '3px' }}>
                Founder & Principal Legal Nurse Consultant
              </span>

              <h2
                className="text-4xl md:text-5xl text-[#253749] mt-4 mb-2 leading-tight tracking-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
              >
                Khaleela Umheni
              </h2>
              <p
                className="text-lg text-[#C3993F] mb-8"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                MSN, RN, CNOR, NE-BC
              </p>

              {/* Enhanced Credentials Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, boxShadow: '0 10px 30px -10px rgba(37, 55, 73, 0.15)' }}
                    className="bg-gradient-to-br from-gray-50 to-white p-4 border-l-3 border-[#C3993F] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer rounded-r-sm"
                    style={{ borderLeftWidth: '3px' }}
                  >
                    <span className="text-[#253749] font-semibold block" style={{ fontFamily: 'Inter, sans-serif' }}>{cred.label}</span>
                    <span className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{cred.desc}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-5 text-gray-600 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                <p>
                  I started TrueLine Medical Legal Consulting to improve patient safety and to be a voice for people
                  who are injured and left with questions. As a hospital program manager, I oversaw safety events
                  across surgical services and reviewed how care was delivered, documented, and explained.
                </p>
                <p>
                  Some reviews reveal how care failures contributed to injury. Others confirm that appropriate care
                  was provided and the outcome was an unfortunate complication. Either way, attorneys need clear
                  clinical insight to determine how the case should move forward and when accountability is warranted.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Background - Enhanced */}
      <section className="py-28 bg-[#f8f7f4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #253749 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Decorative floating elements */}
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
              Background & Expertise
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#253749] mb-10"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              Education & Experience
            </h2>
            <motion.div
              className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-left bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-lg shadow-gray-200/50 border border-gray-100/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              <p>
                Khaleela holds a <strong className="text-[#253749]">Master of Science in Nursing from University of Texas Arlington</strong> and
                a <strong className="text-[#253749]">Bachelor of Science in Nursing from Lamar University</strong>.
              </p>
              <p>
                With 15 years of nursing experience, Khaleela specializes in patient safety, medical record analysis,
                and quality improvement. She has a strong background in perioperative nursing, risk reduction strategies,
                and regulatory compliance, making her a valuable asset to attorneys handling personal injury, medical
                malpractice, and toxic tort cases.
              </p>
              <p>
                In addition to her clinical expertise, Khaleela has been an educator for several years, training nurses
                and healthcare teams on patient safety, surgical procedures, and regulatory standards. She has also
                presented multiple poster presentations at the Association of periOperative Registered Nurses (AORN),
                showcasing her contributions to perioperative nursing and quality improvement initiatives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Philosophy Section - Premium Cards */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Animated concentric circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gray-100/80 rounded-full"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-100 rounded-full opacity-30"
          animate={{ scale: [1.05, 1, 1.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="max-w-[1100px] mx-auto px-8 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-6"
              />
              <p className="text-[#C3993F] text-sm tracking-[4px] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                What Sets Us Apart
              </p>
              <h2
                className="text-4xl md:text-5xl text-[#253749] mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
              >
                Our Philosophy
              </h2>
            </div>

            <div className="space-y-6">
              <PhilosophyCard
                title="Analytical Reports"
                content="We provide analytical reports to each case's needs, from early intake screening through trial support. Our work goes beyond organizing records—we analyze medical facts in the context of liability, causation, and damages."
                delay={0.1}
              />
              <PhilosophyCard
                title="Strategic Case Positioning"
                content="We identify strengths, vulnerabilities, and key points that impact case value, settlement strategy, and litigation. Our recommendations help attorneys decide whether to move forward, how to position the case, and where additional development may be needed."
                delay={0.2}
              />
              <PhilosophyCard
                title="Medical Literature & Expert Support"
                content="When appropriate, we support the analysis with medical literature and assist with identifying qualified experts. This comprehensive approach ensures attorneys have the clinical foundation needed for strong case development."
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA - Enhanced */}
      <section className="py-28 bg-gradient-to-br from-[#253749] via-[#253749] to-[#293847] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(195, 153, 63,0.15)_0%,_transparent_60%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-[#C3993F]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-20 w-3 h-3 bg-white/20 rounded-full"
        />

        <div className="max-w-[900px] mx-auto px-8 md:px-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              Why Didn't I Do This Sooner?
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              When attorneys bring us in early, uncertainty turns into clarity and medical records stop feeling
              overwhelming. Our role is to help attorneys move forward with confidence before resources are spent,
              positions are locked in, and opportunities are missed.
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
                GET STARTED TODAY
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Philosophy Card Component with 3D Tilt
function PhilosophyCard({ title, content, delay }: { title: string; content: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        x: 10,
        rotateY: 2,
        boxShadow: '0 25px 50px -15px rgba(37, 55, 73, 0.15), 0 0 30px rgba(195, 153, 63, 0.08)'
      }}
      className="bg-white/80 backdrop-blur-sm p-8 md:p-10 border-l-4 border-[#C3993F] shadow-lg transition-all duration-500 cursor-pointer rounded-r-lg overflow-hidden relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glassmorphism inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#C3993F]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <h3
          className="text-xl md:text-2xl text-[#253749] mb-3"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
        >
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          {content}
        </p>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#C3993F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
