import { ArrowRight, Globe } from 'lucide-react';
import { generateWhatsAppLink } from '../lib/utils';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function TradeChannels() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const channels = [
    {
      id: "malaysia",
      flag: "🇲🇾",
      country: "Malaysia",
      headline: "Your Malaysia–Nigeria Freight Specialists",
      moves: "Textiles, electronics, machinery parts, palm-based goods, consumer goods.",
      transit: "Air: 3-5 days | Ocean: 35-45 days",
      know: "Malaysia customs documentation, consolidation options for SME importers.",
      whatsapp: "Hi Adedola Gold, I want to ship between Malaysia and Nigeria."
    },
    {
      id: "qatar",
      flag: "🇶🇦",
      country: "Qatar/UAE",
      headline: "Fast, Reliable Freight to and from Qatar",
      moves: "Electronics, textiles, general trade goods, jewelry-adjacent trade, personal effects.",
      transit: "Air: 2-3 days | Ocean: 25-30 days",
      know: "UAE free-zone shipping options, express air options for urgent cargo.",
      whatsapp: "Hi Adedola Gold, I want to ship between Qatar and Nigeria."
    },
    {
      id: "usa",
      flag: "🇺🇸",
      country: "USA",
      headline: "USA–Nigeria Imports & Exports, Simplified",
      moves: "Diaspora personal shipments, food items, electronics, vehicles/parts, commercial goods.",
      transit: "Air: 5-7 days | Ocean: 40-50 days",
      know: "US export documentation, Nigerian customs duty guidance for diaspora shippers.",
      whatsapp: "Hi Adedola Gold, I want to ship between the USA and Nigeria."
    },
    {
      id: "uk",
      flag: "🇬🇧",
      country: "UK",
      headline: "UK–Nigeria Imports & Exports, Handled End-to-End",
      moves: "Diaspora food/grocery orders, personal effects, commercial cargo.",
      transit: "Air: 3-5 days | Ocean: 30-40 days",
      know: "UK export rules, popular consolidation routes for diaspora customers.",
      whatsapp: "Hi Adedola Gold, I want to ship between the UK and Nigeria."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-gray-50 min-h-screen"
    >
      {/* Hub Header */}
      <section className="bg-gray-900 text-white py-20 lg:py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Dedicated Channels, Built for Each Corridor</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every trade lane has its own rules, timelines, and quirks. We've built specialized expertise — and specialized teams — for each one.
          </p>
        </motion.div>
      </section>

      {/* Grid of Channels */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {channels.map((channel, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              key={channel.id} 
              id={channel.id}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 scroll-mt-24`}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="text-[120px] leading-none drop-shadow-xl">{channel.flag}</div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-amber-600">{channel.country}</span>
                  <span className="text-gray-300">⇄</span>
                  <span className="text-xl font-bold text-gray-900">Nigeria</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{channel.headline}</h2>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="font-bold text-gray-900 min-w-32">What moves:</span>
                    <span className="text-gray-600">{channel.moves}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gray-900 min-w-32">Transit time:</span>
                    <span className="text-gray-600">{channel.transit}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gray-900 min-w-32">What to know:</span>
                    <span className="text-gray-600">{channel.know}</span>
                  </li>
                </ul>

                <a
                  href={generateWhatsAppLink(channel.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  Start a {channel.country} Shipment <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Rest of World */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            id="rest-of-world" 
            className="bg-amber-50 rounded-3xl p-8 md:p-12 text-center scroll-mt-24 border border-amber-100"
          >
            <Globe className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rest of World / Custom Routes</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              For corridors not listed — tell us where, and we'll build a custom logistics plan tailored to your exact needs.
            </p>
            <a
              href={generateWhatsAppLink("Hi Adedola Gold, I need to ask about a custom shipping route to/from a country not listed.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg shadow-amber-600/20"
            >
              Ask About a Custom Route
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
