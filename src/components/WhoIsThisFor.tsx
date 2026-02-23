import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function WhoIsThisFor() {
  return (
    <section className="py-24 bg-charcoal relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-2xl border-t-4 border-t-emerald-500"
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-500" />
              </span>
              WHO THIS IS FOR
            </h3>
            <ul className="space-y-4">
              {[
                "Mortgage brokers currently doing 5+ deals/month",
                "Teams and brokerages ready to scale aggressively",
                "Brokers with a dedicated advertising budget",
                "Growth-focused professionals who value systems",
                "Those who can handle an influx of 30+ new clients"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-2xl border-t-4 border-t-red-500"
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </span>
              WHO THIS IS NOT FOR
            </h3>
            <ul className="space-y-4">
              {[
                "Beginners just getting their license",
                "Brokers with a 'no-budget' or scarcity mindset",
                "People looking for cheap, shared, low-intent leads",
                "DIY marketers who want to manage their own ads",
                "Those unwilling to follow up with qualified prospects"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
