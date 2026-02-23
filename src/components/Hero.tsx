import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-obsidian to-obsidian"></div>
      
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
      ></motion.div>
      
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest text-gold-500 uppercase">Premium Mortgage Growth System</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Helping Top-Producing Mortgage Brokers <span className="text-gradient-gold">10X Their Volume</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            We Deliver 30+ New Closings Every Month Using Pre-Qualified Mortgage Leads Powered by Advanced Google & Meta Ads Systems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="#apply" size="lg" className="w-full sm:w-auto group">
              Apply For Apex Mortgage Growth
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="https://wa.me/918003572951" variant="secondary" size="lg" className="w-full sm:w-auto">
              <MessageCircle className="mr-2 w-5 h-5 text-gold-500" />
              Check If You Qualify
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-8 border-t border-white/5">
            <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
              Built by a 15+ Years Experienced Performance Marketer Specializing in Mortgage Growth Systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
