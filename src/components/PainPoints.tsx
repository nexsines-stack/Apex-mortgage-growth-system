import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export function PainPoints() {
  const pains = [
    "Low-quality junk leads that never answer the phone",
    "High ad spend with negative or unpredictable ROI",
    "No pre-qualification filtering (wasting time on bad credit)",
    "No structured follow-up system to nurture prospects",
    "Inconsistent deal flow causing revenue rollercoasters"
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Why Apex Mortgage Growth Exists
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Most agencies sell you shared, recycled leads and leave you to figure out the rest. We don't do that. We build a complete, predictable closing engine.
            </p>
            
            <div className="space-y-4 mb-10">
              {pains.map((pain, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500/80 shrink-0 mt-0.5" />
                  <p className="text-gray-300">{pain}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <h3 className="text-2xl font-serif font-bold mb-6 text-white">
              The Apex Solution
            </h3>
            <p className="text-xl text-gold-500 font-medium mb-8">
              A Complete Done-For-You Mortgage Lead & Closing Engine.
            </p>
            
            <div className="space-y-6">
              {[
                "Exclusive, high-intent leads generated just for you",
                "Advanced pre-qualification funnels",
                "Automated multi-channel follow-up systems",
                "Direct-to-calendar booked appointments",
                "Guaranteed volume scaling"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
