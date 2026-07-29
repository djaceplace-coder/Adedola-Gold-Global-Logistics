import { generateWhatsAppLink } from '../lib/utils';
import { ShoppingBag, Search, CheckCircle, Package, Truck, MapPin, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function MarketSourcing() {
  const whatsappOrder = generateWhatsAppLink("Hi Adedola Gold, I have a shopping list I'd like sourced from Nigeria:\n1.\n2.\n3.");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-gray-50 min-h-screen"
    >
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20 lg:py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">We Go To The Market — So You Don't Have To</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Craving home? Need a specific ingredient, brand, or item from Nigeria that you can't find abroad? Our team physically sources it, verifies quality, and ships it to you — anywhere in the world.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-16 tracking-tight"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "1. Send your list", desc: "Via WhatsApp, however detailed or vague." },
              { icon: Search, title: "2. We source it", desc: "Our agents visit markets across Lagos, Mainland, and rural Nigeria." },
              { icon: CheckCircle, title: "3. We verify & pack", desc: "Quality-checked, properly packaged for international shipping." },
              { icon: Truck, title: "4. We ship it to you", desc: "Tracked, with updates the whole way to your door." }
            ].map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                key={i} 
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href={whatsappOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg shadow-gray-900/20"
            >
              Send Your Shopping List on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-16 tracking-tight"
          >
            Popular Sourcing Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Staples & Grains", 
                items: "Rice, garri, beans, semovita, yam flour, plantain flour.",
                msg: "Hi Adedola Gold, I'd like to order Staples & Grains.",
                img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800"
              },
              { 
                title: "Spices & Seasoning", 
                items: "Crayfish, ogbono, egusi, local pepper blends, iru (locust beans).",
                msg: "Hi Adedola Gold, I'd like to order Spices & Seasoning.",
                img: "https://images.unsplash.com/photo-1596683720379-b73ce1e4cf54?q=80&w=800"
              },
              { 
                title: "Snacks & Drinks", 
                items: "Chin chin, plantain chips, kilishi, local beverages.",
                msg: "Hi Adedola Gold, I'd like to order Snacks & Drinks.",
                img: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800"
              },
              { 
                title: "Fresh/Dry Specialty", 
                items: "Stockfish, dried fish, smoked meats, bitter leaf, scent leaf.",
                msg: "Hi Adedola Gold, I'd like to order Specialty Items.",
                img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800"
              },
              { 
                title: "Special/Custom Orders", 
                items: "Anything not listed — traditional attire, local crafts, specific brands. Tell us and we'll find it.",
                msg: "Hi Adedola Gold, I have a custom sourcing request.",
                img: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=800"
              }
            ].map((cat, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={i} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden group"
              >
                <div className="h-40 -mt-6 -mx-6 mb-6 bg-gray-200 relative overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{cat.items}</p>
                <a
                  href={generateWhatsAppLink(cat.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium py-3 rounded-xl transition-colors mt-auto"
                >
                  Order This Category
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Sourcing Map & Pricing Note */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="text-amber-600" /> Regional Sourcing Coverage
                </h3>
                <ul className="space-y-6">
                  <li>
                    <h4 className="font-bold text-gray-900 text-lg">📍 Lagos Markets</h4>
                    <p className="text-gray-600">Fast access to major hubs like Mile 12, Balogun, and Tejuosho for bulk goods, textiles, and fresh produce.</p>
                  </li>
                  <li>
                    <h4 className="font-bold text-gray-900 text-lg">📍 Mainland & Interstate</h4>
                    <p className="text-gray-600">Sourcing specialized grains, yams, and regional specialties directly from major agricultural states.</p>
                  </li>
                  <li>
                    <h4 className="font-bold text-gray-900 text-lg">📍 Rural Regions</h4>
                    <p className="text-gray-600">We send agents to deep rural markets to get the most authentic, lowest-priced raw commodities.</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Pricing & Ordering Note</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Because every order is custom-sourced, pricing depends on item availability and actual market rates on the day. 
                </p>
                <div className="bg-white/10 rounded-xl p-6 mb-8 border border-white/10">
                  <p className="text-amber-400 font-medium italic">
                    "Send your list on WhatsApp and we'll confirm exact pricing before purchase — absolutely no surprises."
                  </p>
                </div>
                <a
                  href={whatsappOrder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  Start Sourcing Now
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </motion.div>
  );
}
