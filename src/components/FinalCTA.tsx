import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-obsidian to-obsidian"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Ready to Add <span className="text-gradient-gold">30+ Closings</span> Per Month?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Apply Now to See If You Qualify for Apex Mortgage Growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#apply" size="lg" className="w-full sm:w-auto group">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="https://wa.me/918003572951" variant="secondary" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="mr-2 w-5 h-5 text-gold-500" />
              Message Us on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
