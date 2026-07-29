import { Users, Target, ShieldCheck, Map } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white min-h-screen"
    >
      <section className="bg-amber-50 py-20 lg:py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Both the Paperwork and the Marketplace</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Adedola Gold Global Logistics was built on a simple idea: Nigeria's markets and Nigeria's people deserve a logistics partner who understands the formal realities of global freight alongside the raw, on-the-ground reality of local sourcing.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  For years, shipping out of or into Nigeria meant choosing between two extremes: expensive international couriers who only handled clean, standardized packages, or informal agents who lacked the documentation expertise to clear customs smoothly.
                </p>
                <p>
                  We saw the gap. Diaspora Nigerians wanted authentic food items but couldn't get them sourced and shipped legally. Local SMEs wanted to import from Malaysia and Qatar but were getting stuck at the ports due to improper paperwork.
                </p>
                <p>
                  Adedola Gold was founded to bridge this gap. We combine formal freight forwarding operations with hands-on, human sourcing — a rare hybrid that ensures your goods don't just move, but that they are exactly what you ordered, handled properly every step of the way.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 rounded-3xl aspect-square lg:aspect-auto lg:h-full w-full min-h-[400px] relative overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=800" alt="Logistics Warehouse" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Adedola Gold?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Users, title: "A Rare Hybrid", desc: "We combine formal freight forwarding with hands-on, human sourcing." },
              { icon: Map, title: "Unmatched Coverage", desc: "Coverage across Nigeria most couriers skip, including Mainland and deep rural regions." },
              { icon: Target, title: "Dedicated Teams", desc: "Specialized teams for each major trade corridor to ensure local compliance and speed." }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                key={i} 
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
              >
                <item.icon className="w-10 h-10 text-amber-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <ShieldCheck className="w-16 h-16 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Fully Licensed & Certified</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Operating with complete transparency, valid customs brokerage licenses, and verified carrier partnerships to ensure your cargo is always in safe, legal hands.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            {/* Placeholder logos */}
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
