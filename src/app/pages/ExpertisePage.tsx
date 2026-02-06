import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';

export function ExpertisePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Header Section - Premium Enhanced */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#253749] via-[#253749] to-[#293847] overflow-hidden">
        {/* Animated gradient background */}
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

        <div className="max-w-[1200px] mx-auto px-6 md:px-16 text-center relative">
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
                Our Qualifications
              </p>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Expertise & Credentials
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto"
            />
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

      {/* Credentials Section - Premium Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C3993F]/8 to-transparent"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Floating decoration */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 w-16 h-16 border border-[#C3993F]/15 rounded-full"
        />

        <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{ boxShadow: '0 35px 70px -15px rgba(37, 55, 73, 0.15)' }}
            className="bg-white/90 backdrop-blur-xl p-10 md:p-14 lg:p-16 border-l-4 border-[#C3993F] shadow-2xl rounded-r-lg transition-all duration-500"
          >
            {/* Glassmorphism inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#C3993F]/5 rounded-r-lg pointer-events-none" />

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#253749] mb-3 relative z-10"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
            >
              Khaleela Umheni, MSN, RN, CNOR, NE-BC
            </h2>
            <p className="text-lg md:text-xl text-[#C3993F] mb-12 relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Founder & Principal Legal Nurse Consultant
            </p>

            <div className="space-y-10 text-gray-700 relative z-10" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
              <CredentialSection
                title="Education"
                items={[
                  'Master of Science in Nursing – University of Texas Arlington',
                  'Bachelor of Science in Nursing – Lamar University'
                ]}
                delay={0.1}
              />

              <CredentialSection
                title="Professional Certifications"
                items={[
                  'Certified Operating Room Nurse (CNOR)',
                  'Nurse Executive Board Certified (NE-BC)'
                ]}
                delay={0.2}
              />

              <CredentialSection
                title="Clinical & Leadership Experience"
                items={[
                  '15 years of nursing experience across clinical and executive leadership roles',
                  'Hospital program management with oversight of patient safety events',
                  'Quality improvement initiatives and regulatory compliance',
                  'Care delivery oversight and clinical documentation review',
                  'Perioperative nursing and surgical risk reduction',
                  'Medical record analysis and adverse event investigation'
                ]}
                delay={0.3}
              />

              <CredentialSection
                title="Professional Presentations & Education"
                items={[
                  'National presenter on patient safety and quality improvement',
                  'Educator on perioperative best practices and clinical standards',
                  'Poster presentations at AORN (Association of periOperative Registered Nurses) conferences',
                  'Subject matter expert on medical documentation and care standards'
                ]}
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Approach Section - Premium Enhanced */}
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

        <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C3993F] to-transparent mx-auto mb-6"
            />
            <h2
              className="text-4xl md:text-5xl text-[#253749] mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
            >
              Professional Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ApproachCard
              title="Evidence-Based Analysis"
              content="Every case review is grounded in current medical literature, established standards of care, and clinical best practices. We provide citations and references to support our findings."
              delay={0.1}
            />
            <ApproachCard
              title="Attorney-Focused Communication"
              content="We translate complex medical terminology into clear, actionable insights. Our reports are structured to support legal strategy, not just clinical description."
              delay={0.2}
            />
            <ApproachCard
              title="Confidentiality & Professionalism"
              content="We maintain strict confidentiality and adhere to the highest professional standards in all case consultations and documentation."
              delay={0.3}
            />
            <ApproachCard
              title="Responsive Collaboration"
              content="We understand litigation timelines and provide timely, thorough analysis when you need it. Available for ongoing consultation as your case evolves."
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Credential Section Component
function CredentialSection({ title, items, delay }: { title: string; items: string[]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <h3 className="font-semibold text-[#253749] mb-4 text-base md:text-lg flex items-center gap-3" style={{ fontFamily: 'Inter, sans-serif' }}>
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#C3993F] to-[#C3993F]/50" />
        {title}
      </h3>
      <ul className="space-y-3 text-gray-700 ml-6">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: delay + (index * 0.05) }}
            whileHover={{ x: 5 }}
            className="flex items-start gap-3 text-sm md:text-base cursor-default"
          >
            <motion.span
              className="text-[#C3993F] mt-1.5"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              ◆
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// Enhanced Approach Card Component
function ApproachCard({ title, content, delay }: { title: string; content: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        y: -10,
        rotateX: 2,
        boxShadow: '0 30px 60px -15px rgba(37, 55, 73, 0.18), 0 0 30px rgba(195, 153, 63, 0.1)'
      }}
      className="group bg-white/90 backdrop-blur-xl p-8 border-t-2 border-[#C3993F] rounded-b-lg shadow-xl transition-all duration-500 cursor-pointer overflow-hidden relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glassmorphism inner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#C3993F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-lg" />

      <div className="relative z-10">
        <h3
          className="text-xl md:text-2xl text-[#253749] mb-3 group-hover:text-[#C3993F] transition-colors duration-300"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
        >
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
          {content}
        </p>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#C3993F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-lg" />
    </motion.div>
  );
}
