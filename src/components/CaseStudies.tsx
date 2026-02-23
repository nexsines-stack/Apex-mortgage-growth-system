import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  { name: "John D.", city: "Miami, FL", before: "Inconsistent referrals, 3-4 deals/mo", after: "Predictable system, 28 deals/mo", spend: "$4,500", leads: "312", closings: "28", volume: "$11.2M", time: "90 Days" },
  { name: "Sarah M..", city: "Dallas, TX", before: "Buying Zillow leads, low conversion", after: "Exclusive funnels, 35 deals/mo", spend: "$6,000", leads: "420", closings: "35", volume: "$14.5M", time: "120 Days" },
  { name: "Michael R..", city: "Chicago, IL", before: "Relying on realtors only", after: "Direct-to-consumer dominance", spend: "$3,800", leads: "285", closings: "22", volume: "$8.8M", time: "60 Days" },
  { name: "David L..", city: "Los Angeles, CA", before: "High ad spend, zero tracking", after: "Optimized ROAS, 42 deals/mo", spend: "$8,500", leads: "550", closings: "42", volume: "$28.5M", time: "6 Months" },
  { name: "Emily W.", city: "Atlanta, GA", before: "Stuck at 5 deals/mo for years", after: "Scaled team, 31 deals/mo", spend: "$5,200", leads: "380", closings: "31", volume: "$12.4M", time: "90 Days" },
  { name: "Robert K.", city: "Denver, CO", before: "Wasting time on bad credit leads", after: "Pre-qualified only, 25 deals/mo", spend: "$4,100", leads: "290", closings: "25", volume: "$13.1M", time: "90 Days" },
  { name: "Amanda L.", city: "Seattle, WA", before: "No follow-up system", after: "Automated CRM, 29 deals/mo", spend: "$4,800", leads: "340", closings: "29", volume: "$18.2M", time: "120 Days" },
  { name: "Thomas B.", city: "Phoenix, AZ", before: "Losing deals to competitors", after: "Market leader, 38 deals/mo", spend: "$6,500", leads: "460", closings: "38", volume: "$16.5M", time: "5 Months" },
  { name: "Jessica H.", city: "Austin, TX", before: "Unpredictable income", after: "Consistent pipeline, 24 deals/mo", spend: "$3,500", leads: "250", closings: "24", volume: "$10.8M", time: "60 Days" },
  { name: "William C.", city: "New York, NY", before: "Expensive agency, no results", after: "Apex System, 45 deals/mo", spend: "$9,000", leads: "600", closings: "45", volume: "$32.0M", time: "6 Months" }
];

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = cases.length - 1;
      if (nextIndex >= cases.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentCase = cases[currentIndex];

  return (
    <section id="case-studies" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Proven Results</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real numbers from top-producing brokers using the Apex System.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="w-full overflow-hidden px-2 py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full glass-card p-8 md:p-12 rounded-2xl border-t-2 border-t-gold-500/50 cursor-grab active:cursor-grabbing"
              >
                {/* Slide Content */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{currentCase.name}</h3>
                    <p className="text-gold-500 font-medium text-lg">{currentCase.city}</p>
                  </div>
                  <div className="text-left md:text-right bg-carbon/80 px-5 py-3 rounded-lg border border-white/5">
                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Time to Results</span>
                    <span className="text-xl font-medium text-white">{currentCase.time}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-white/10">
                  <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-xl">
                    <span className="text-xs text-red-400 uppercase tracking-wider block mb-2 font-bold">Before Apex</span>
                    <p className="text-gray-300 text-lg">{currentCase.before}</p>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-xl">
                    <span className="text-xs text-emerald-400 uppercase tracking-wider block mb-2 font-bold">After Apex</span>
                    <p className="text-white font-medium text-lg">{currentCase.after}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Ad Spend</span>
                    <span className="text-3xl font-mono text-white">{currentCase.spend}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Leads</span>
                    <span className="text-3xl font-mono text-white">{currentCase.leads}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Closings</span>
                    <span className="text-3xl font-mono text-gold-500 font-bold">{currentCase.closings}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Volume</span>
                    <span className="text-3xl font-mono text-emerald-400 font-bold">{currentCase.volume}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-obsidian transition-all focus:outline-none"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2 flex-wrap justify-center max-w-[200px] md:max-w-none">
              {cases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === currentIndex ? 'bg-gold-500 w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-obsidian transition-all focus:outline-none"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
