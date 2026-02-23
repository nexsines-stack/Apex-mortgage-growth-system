import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const stats = [
  { label: "Loan Volume Generated", value: 22, suffix: "M+", prefix: "$" },
  { label: "Qualified Mortgage Leads", value: 5000, suffix: "+" },
  { label: "Closings Generated", value: 420, suffix: "+" },
  { label: "Lead-to-Appointment Rate", value: 72, suffix: "%" },
  { label: "Closings Per Month Systems", value: 30, suffix: "+" },
  { label: "Average ROAS", value: 4.5, suffix: "X" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  // Format number with commas if it's large, or keep decimals if it's small
  const formattedCount = value % 1 !== 0 
    ? count.toFixed(1) 
    : Math.floor(count).toLocaleString();

  return (
    <span className="text-4xl md:text-5xl font-serif font-bold text-white">
      {prefix}{formattedCount}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-charcoal relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl text-center group"
            >
              <div className="mb-2 text-gold-500 group-hover:scale-110 transition-transform duration-300">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
