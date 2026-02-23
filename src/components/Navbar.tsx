import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-md border-b border-gold-500/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-gold rounded-sm flex items-center justify-center">
            <span className="text-obsidian font-serif font-bold text-xl">A</span>
          </div>
          <span className="font-serif text-xl font-semibold tracking-wide text-white">
            APEX <span className="text-gold-500">MORTGAGE</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#system" className="text-sm text-gray-300 hover:text-gold-500 transition-colors">The System</a>
          <a href="#case-studies" className="text-sm text-gray-300 hover:text-gold-500 transition-colors">Case Studies</a>
          <a href="#apply" className="text-sm text-gray-300 hover:text-gold-500 transition-colors">Apply Now</a>
          <Button href="https://wa.me/918003572951" variant="outline" size="sm">
            WhatsApp Us
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
