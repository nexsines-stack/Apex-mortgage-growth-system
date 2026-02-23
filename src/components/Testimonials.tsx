import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: "John D.", company: "Premier Mortgage Group", text: "Apex completely transformed our business. We went from chasing bad leads to having a calendar full of pre-qualified appointments. Best ROI we've ever seen." },
  { name: "Sarah M.", company: "Elite Home Loans", text: "I was skeptical at first, but the quality of these leads is unmatched. The pre-qualification filters actually work. We closed 12 deals in our first month." },
  { name: "Michael R.", company: "First Choice Lending", text: "The automation is what sold me. I don't have to manually follow up anymore. The system warms them up, and I just close the deals." },
  { name: "David L.", company: "Summit Mortgage", text: "We scaled from 8 to 32 closings a month in just 4 months. The team at Apex knows exactly what they are doing with Google Ads." },
  { name: "Emily W.", company: "Coastal Finance", text: "Finally, a system that delivers on its promises. No more shared Zillow leads. These are exclusive and highly motivated buyers." },
  { name: "Robert T.", company: "Pinnacle Lending", text: "The CRM integration is flawless. Every lead drops in, gets a text, and books a call. It's a well-oiled machine." },
  { name: "Jessica K.", company: "Horizon Mortgage", text: "Our cost per acquisition dropped by 40% while our volume tripled. The data-driven approach Apex uses is next level." },
  { name: "William P.", company: "Nexus Home Loans", text: "I've worked with 5 different agencies before Apex. None of them built a comprehensive system like this. It's a game changer." },
  { name: "Amanda S.", company: "Sterling Mortgage", text: "If you want to stop worrying about where your next deal is coming from, hire Apex. Predictable, scalable, and professional." },
  { name: "Thomas G.", company: "Vanguard Lending", text: "The best investment we made this year. Period. The ROI was positive by week 3, and it's only scaled up since then." }
];

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col"
            >
              <Quote className="w-8 h-8 text-gold-500/20 mb-4" />
              <p className="text-sm text-gray-300 mb-6 flex-grow italic">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-carbon border border-gold-500/30 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/${t.name.replace(' ', '')}/100/100`} alt={t.name} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gold-500">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
