import { motion } from 'motion/react';
import { Shield, Target, TrendingUp, Users, Zap, Settings } from 'lucide-react';

const diffs = [
  { icon: Shield, title: "We don't sell leads. We build closing systems.", desc: "Stop buying shared leads. We build an asset that you own and control entirely." },
  { icon: Users, title: "Selective onboarding process.", desc: "We only work with brokers who have the capacity and drive to handle 30+ new closings a month." },
  { icon: Target, title: "Data-backed campaign optimization.", desc: "Decisions made on millions of dollars in ad spend data, not guesswork." },
  { icon: TrendingUp, title: "Dedicated performance management.", desc: "You get a dedicated growth partner actively managing and scaling your campaigns." },
  { icon: Zap, title: "CRM & automation integration.", desc: "We connect the dots between marketing and sales so nothing falls through the cracks." },
  { icon: Settings, title: "Long-term scalability focus.", desc: "Built to scale from 5 to 50+ deals a month without breaking your operations." }
];

export function Differentiators() {
  return (
    <section className="py-24 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What Makes Us Different</h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                  <item.icon className="w-5 h-5 text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
