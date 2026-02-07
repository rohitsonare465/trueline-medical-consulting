import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to opacity and blur values
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0.85)', 'rgba(255,255,255,0.98)']);
  const headerShadow = useTransform(scrollY, [0, 100], ['0 4px 30px rgba(0,0,0,0.05)', '0 4px 30px rgba(0,0,0,0.12)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT' },
    { id: 'expertise', label: 'EXPERTISE' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow
        }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${isScrolled ? 'border-gray-100/80 py-3' : 'border-gray-100/30 py-4 md:py-5'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Logo with enhanced hover effect */}
          <motion.button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={logo}
                alt="TrueLine Medical Legal Consulting Logo"
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                  }`}
                whileHover={{ scale: 1.05 }}
              />
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={`text-xs tracking-[2px] transition-all duration-300 relative py-2 group font-medium ${currentPage === item.id
                  ? 'text-[#253749]'
                  : 'text-gray-500 hover:text-[#253749]'
                  }`}
              >
                {item.label}
                {/* Active indicator with glow */}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C3993F] via-[#D39012] to-[#C3993F] rounded-full"
                    style={{ boxShadow: '0 2px 10px rgba(195, 153, 63, 0.5)' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {/* Hover underline effect */}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#C3993F]/50 to-[#C3993F]/30 rounded-full ${currentPage === item.id ? 'w-0' : 'w-0 group-hover:w-full'
                    }`}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* CTA Button - Enhanced */}
            <motion.button
              onClick={() => handleNavigate('contact')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#253749] to-[#293847] text-white text-xs tracking-[2px] font-medium rounded-sm relative overflow-hidden group shadow-lg shadow-[#253749]/20"
              whileHover={{ scale: 1.03, boxShadow: '0 15px 35px -10px rgba(37, 55, 73, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-20 text-white">GET STARTED</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C3993F] via-[#D39012] to-[#8F6B1D] z-10"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 z-10"
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, delay: 0.15 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-150 transition-all duration-300 shadow-sm"
            whileTap={{ scale: 0.95 }}
            whileHover={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 5 : 0 }}
                className="block w-full h-0.5 bg-[#253749] rounded-full origin-center"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1, scaleX: isMobileMenuOpen ? 0 : 1 }}
                className="block w-full h-0.5 bg-[#253749] rounded-full"
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -5 : 0 }}
                className="block w-full h-0.5 bg-[#253749] rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Enhanced */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel - Premium Slide */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white/98 backdrop-blur-2xl z-50 lg:hidden shadow-2xl"
            >
              {/* Decorative gradient top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#253749] via-[#C3993F] to-[#253749]" />

              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                      className={`text-left py-4 px-5 rounded-xl transition-all duration-300 ${currentPage === item.id
                        ? 'bg-gradient-to-r from-[#253749] to-[#293847] text-white shadow-lg shadow-[#253749]/20'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="text-sm tracking-[2px] font-medium flex items-center gap-3">
                        {currentPage === item.id && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-[#C3993F]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA - Enhanced */}
                <motion.button
                  onClick={() => handleNavigate('contact')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto py-4 bg-gradient-to-r from-[#C3993F] via-[#D39012] to-[#8F6B1D] text-white text-sm tracking-[2px] font-medium rounded-xl shadow-lg shadow-[#C3993F]/30 relative overflow-hidden group"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">SCHEDULE CONSULTATION</span>
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.button>

                {/* Contact Info - Enhanced */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 pt-6 border-t border-gray-100 text-center"
                >
                  <p className="text-xs text-gray-500 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Get in touch
                  </p>
                  <a
                    href="mailto:Khaleela@truelinemedicallegal.com"
                    className="text-sm text-[#253749] hover:text-[#C3993F] transition-colors duration-300 font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Khaleela@truelinemedicallegal.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
