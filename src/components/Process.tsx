import { motion } from 'motion/react';

const steps = [
  { num: "01", title: "Deep Market & Offer Research", desc: "We analyze your local market, competitors, and craft an irresistible mortgage offer." },
  { num: "02", title: "High-Converting Mortgage Funnel Creation", desc: "Custom landing pages engineered specifically for mortgage lead conversion." },
  { num: "03", title: "Google Ads + Meta Ads Campaign Setup", desc: "Multi-channel omnipresence targeting high-intent homebuyers and refinancers." },
  { num: "04", title: "Advanced Lead Pre-Qualification Filters", desc: "Filtering out low credit scores and tire-kickers before they reach your CRM." },
  { num: "05", title: "Automated CRM Integration", desc: "Seamless flow of data directly into your preferred CRM system." },
  { num: "06", title: "WhatsApp + SMS Follow-Up Automation", desc: "Speed-to-lead automated sequences that engage prospects within seconds." },
  { num: "07", title: "Appointment Booking Optimization", desc: "Frictionless calendar systems that turn qualified leads into booked calls." },
  { num: "08", title: "Data-Driven Scaling & Optimization", desc: "Continuous A/B testing and budget scaling to hit your 30+ closings target." }
];

export function Process() {
  return (
    <section id="system" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Mortgage Growth System</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">The exact 8-step framework we use to predictably scale top-producing brokers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-5xl font-serif font-bold text-white/5 absolute top-4 right-4 group-hover:text-gold-500/10 transition-colors">
                {step.num}
              </div>
              <div className="w-12 h-12 rounded-full bg-carbon border border-gold-500/30 flex items-center justify-center mb-6 text-gold-500 font-bold">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
