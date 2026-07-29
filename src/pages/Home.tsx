import { Link } from 'react-router-dom';
import { Ship, ShoppingBag, Globe, MapPin, Truck, Clock, ArrowRight, ShieldCheck, Map, MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../lib/utils';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Globe3D from '../components/Globe3D';

export default function Home() {
  const whatsappStartLink = generateWhatsAppLink("Hi Adedola Gold, I want to start a shipment. Here are my details:\n- From:\n- To:\n- Item(s):");
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-20 lg:pt-32 pb-20 lg:pb-0 overflow-hidden min-h-[90vh] flex items-center">
        
        {/* Full-width interactive 3D Background */}
        <div className="absolute inset-0 z-0">
          <Globe3D className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-3/5 max-w-3xl lg:py-20 pointer-events-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                Your Trusted Bridge Between Nigeria and the World
              </h1>
              <p className="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed font-medium">
                Freight, logistics, and hands-on market sourcing — from Lagos to Malaysia, Qatar, the USA, and the UK. No middlemen, no guesswork, no login required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/services" 
                  className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-amber-600/20"
                >
                  <Ship className="w-5 h-5" />
                  Ship With Us
                </Link>
                <Link 
                  to="/market-sourcing" 
                  className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-gray-900/20"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Source & Buy For Me
                </Link>
              </div>
              
              <a 
                href={whatsappStartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-bold transition-colors group"
              >
                Start a Shipment on WhatsApp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </section>

      {/* Trade Lane Strip */}
      <div className="bg-gray-900 text-gray-300 py-6 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 md:justify-center min-w-max text-sm font-medium">
          <Link to="/trade-channels#malaysia" className="flex items-center gap-3 hover:text-white transition-colors">
            <span className="text-xl">🇳🇬</span> Nigeria ⇄ Malaysia <span className="text-xl">🇲🇾</span>
          </Link>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
          <Link to="/trade-channels#dubai" className="flex items-center gap-3 hover:text-white transition-colors">
            <span className="text-xl">🇳🇬</span> Nigeria ⇄ Qatar/UAE <span className="text-xl">🇶🇦</span>
          </Link>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
          <Link to="/trade-channels#usa" className="flex items-center gap-3 hover:text-white transition-colors">
            <span className="text-xl">🇳🇬</span> Nigeria ⇄ USA <span className="text-xl">🇺🇸</span>
          </Link>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
          <Link to="/trade-channels#uk" className="flex items-center gap-3 hover:text-white transition-colors">
            <span className="text-xl">🇳🇬</span> Nigeria ⇄ UK <span className="text-xl">🇬🇧</span>
          </Link>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
          <Link to="/trade-channels#rest-of-world" className="flex items-center gap-3 hover:text-white transition-colors text-amber-500">
            Rest of World <Globe className="w-4 h-4 inline" />
          </Link>
        </div>
      </div>

      {/* Why Adedola Gold */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Adedola Gold</h2>
            <p className="text-gray-600 text-lg">More than just shipping. We are your logistics partner and sourcing team, built for reliability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: ShoppingBag, title: "Dual Expertise", desc: "We don't just ship; we source. From rare local foods to specialty items, we're your hands on the ground." },
              { icon: MapPin, title: "Nationwide Reach", desc: "Lagos, Mainland, and rural regions across Nigeria — no location too remote." },
              { icon: Globe, title: "Global Corridors", desc: "Dedicated, specialized channels to Malaysia, Qatar, the USA, and the UK." },
              { icon: ShieldCheck, title: "Real Humans, Real Fast", desc: "Every quote and update comes straight to your WhatsApp — no portals, no passwords." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-colors">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center tracking-tight"
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gray-200 overflow-hidden">
               <motion.div 
                 initial={{ x: "-100%" }}
                 whileInView={{ x: "0%" }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="w-full h-full bg-amber-500 origin-left"
               />
            </div>
            
            {[
              { num: "1", title: "Tell us what you need", desc: "via WhatsApp or our quote form" },
              { num: "2", title: "We source or arrange pickup", desc: "our team handles sourcing, packing, and documentation" },
              { num: "3", title: "We deliver", desc: "tracked updates until it reaches your door, anywhere" }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-full border-8 border-gray-50 flex items-center justify-center shadow-lg mb-6 z-10 relative group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-amber-600">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trade Channels */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Featured Trade Channels</h2>
              <p className="text-gray-600 text-lg max-w-2xl">Dedicated routes with specialized expertise for each corridor.</p>
            </div>
            <Link to="/trade-channels" className="text-amber-600 font-medium hover:text-amber-700 flex items-center gap-1 group">
              View all channels <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Malaysia", flag: "🇲🇾", desc: "Textiles, machinery, and commercial freight experts." },
              { name: "Qatar/UAE", flag: "🇶🇦", desc: "Electronics, general trade, and express air options." },
              { name: "USA", flag: "🇺🇸", desc: "Diaspora shipments, food items, and commercial imports." },
              { name: "UK", flag: "🇬🇧", desc: "Groceries, personal effects, and fast consolidation routes." }
            ].map((channel, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={channel.name} 
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-gray-200/50 transition-all group relative overflow-hidden"
              >
                <div className="text-4xl mb-4">{channel.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{channel.name}</h3>
                <p className="text-gray-600 text-sm mb-6 h-10">{channel.desc}</p>
                <Link 
                  to={`/trade-channels#${channel.name.toLowerCase().replace('/', '-')}`}
                  className="w-full block text-center py-2.5 rounded-lg bg-gray-50 text-gray-900 font-medium group-hover:bg-amber-600 group-hover:text-white transition-colors"
                >
                  Explore Channel
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Sourcing Teaser */}
      <section className="py-24 bg-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Can't find it abroad? <br/>
                <span className="text-amber-600">We'll go to the market for you.</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Craving home? Need a specific ingredient, brand, or item from Nigeria that you can't find? Our team physically sources it, verifies quality, and ships it to you.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Spices & Seasoning', 'Grains & Staples', 'Snacks & Drinks', 'Special Orders'].map(cat => (
                  <div key={cat} className="flex items-center gap-2 text-gray-800 font-medium">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    {cat}
                  </div>
                ))}
              </div>
              
              <Link to="/market-sourcing" className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                See Full Catalogue
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-amber-200 overflow-hidden relative shadow-2xl">
                {/* Actual image */}
                <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=1000" alt="Market Sourcing" className="absolute inset-0 w-full h-full object-cover" />
                {/* Floating elements */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                  <div className="font-bold text-sm">📍 Lagos Markets</div>
                </div>
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                  <div className="font-bold text-sm">✈️ Shipped to London</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center tracking-tight"
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "I ordered egusi and stockfish from Lagos and it reached me in London in just 4 days. Perfectly packaged. They literally went to the market for me.", author: "Sarah T.", location: "London, UK" },
              { text: "The Qatar channel is unmatched. Smooth customs clearance and constant WhatsApp updates. I never had to log into any portal to know where my goods were.", author: "Ahmed K.", location: "Qatar, UAE" },
              { text: "Moved my entire commercial freight from Malaysia seamlessly. Adedola Gold handled all the paperwork. Very reliable team.", author: "Chuka E.", location: "Lagos, NG" }
            ].map((t, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                key={i} 
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative"
              >
                <div className="flex gap-1 text-amber-500 mb-6">
                  {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Hub Teaser */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Shipping Guides & Tips</h2>
            <Link to="/learn" className="text-amber-600 font-medium hover:text-amber-700 flex items-center gap-1 group">
              Read all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How to Ship Food Items from Nigeria Legally", tag: "Guide", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800" },
              { title: "Qatar Import Rules for First-Timers", tag: "Rules", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800" },
              { title: "FCL vs LCL: Which Ocean Freight Option Is Right?", tag: "Logistics", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800" }
            ].map((article, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
              >
                <Link to="/learn" className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img src={article.img} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-3 block">{article.tag}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors leading-snug">{article.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-20 bg-gray-900 text-center px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to ship or source?</h2>
          <p className="text-xl text-gray-400 mb-10">Let's talk on WhatsApp and get your shipment moving today.</p>
          <a
            href={generateWhatsAppLink("Hi Adedola Gold, I'd like a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-green-500/20 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Talk on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}
