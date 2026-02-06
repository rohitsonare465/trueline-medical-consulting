import { motion } from 'motion/react';
import logo from '../../assets/logo.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#f5f5f0] to-[#eeeee8] pt-20 pb-10 overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C3993F] to-transparent" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-24 h-24 border border-[#C3993F]/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-3 h-3 bg-[#C3993F]/20 rounded-full"
      />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo Section - Enhanced */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-white p-4 rounded-xl shadow-lg shadow-gray-200/50 inline-block mb-5 border border-gray-100/50"
              whileHover={{ scale: 1.02, boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)' }}
            >
              <img src={logo} alt="TrueLine Medical Legal Consulting Logo" className="h-14 w-auto object-contain" />
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Clinical insight and strategic case support for complex injury and malpractice cases.
            </p>
          </motion.div>

          {/* Quick Links Section - Enhanced */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-sm font-semibold tracking-wider mb-6 px-4 py-2 bg-gradient-to-r from-[#253749] to-[#293847] text-white rounded-lg shadow-md shadow-[#253749]/20"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <motion.button
                    onClick={() => onNavigate?.(link.id)}
                    className="text-[#253749] hover:text-[#C3993F] transition-all duration-300 text-sm flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="w-0 h-[1px] bg-[#C3993F] group-hover:w-4 transition-all duration-300"
                    />
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section - Enhanced */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-sm font-semibold tracking-wider mb-6 px-4 py-2 bg-gradient-to-r from-[#253749] to-[#293847] text-white rounded-lg shadow-md shadow-[#253749]/20"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact
            </h3>
            <div className="space-y-3 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-[#253749] font-semibold">
                Khaleela Umheni, MSN, RN, CNOR, NE-BC
              </p>
              <p className="text-gray-600">
                Owner & Principal Consultant
              </p>
              <motion.a
                href="mailto:Khaleela@truelinemedicallegal.com"
                className="text-[#253749] hover:text-[#C3993F] transition-colors duration-300 flex items-center gap-2 group"
                whileHover={{ x: 3 }}
              >
                Khaleela@truelinemedicallegal.com
              </motion.a>
              <motion.a
                href="tel:+12818456224"
                className="text-[#253749] hover:text-[#C3993F] transition-colors duration-300 flex items-center gap-2 group"
                whileHover={{ x: 3 }}
              >
                (281) 845-6224
              </motion.a>
            </div>
            <motion.p
              className="text-gray-500 text-xs mt-5 italic px-3 py-2 bg-white/50 rounded-lg border border-gray-100/50"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.02 }}
            >
              Referrals appreciated
            </motion.p>
          </motion.div>
        </div>

        {/* Copyright - Enhanced */}
        <motion.div
          className="border-t border-gray-200/80 pt-8 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C3993F]/50 to-transparent" />

          <p className="text-gray-500 text-sm tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} TrueLine Medical Legal Consulting, LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
