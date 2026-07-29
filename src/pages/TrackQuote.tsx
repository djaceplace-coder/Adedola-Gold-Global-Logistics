import { useState } from 'react';
import { generateWhatsAppLink } from '../lib/utils';
import { Search, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrackQuote() {
  const [quoteData, setQuoteData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    items: '',
    weight: ''
  });

  const [trackData, setTrackData] = useState({
    reference: '',
    phone: ''
  });

  const [trackResult, setTrackResult] = useState<string | null>(null);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Adedola Gold, I'd like a quote.
Name: ${quoteData.name}
Phone: ${quoteData.phone}
From: ${quoteData.from}
To: ${quoteData.to}
Items: ${quoteData.items}
Weight/Vol: ${quoteData.weight || 'Not sure'}`;
    
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tracking lookup
    setTrackResult("Shipment lookup requires agent verification. Please message us on WhatsApp with your tracking number.");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-gray-50 min-h-screen py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Track & Quote</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your shipment or track an existing order. No login required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Quote Form */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Send className="text-amber-600" /> Get a Quote
            </h2>
            <form onSubmit={handleQuoteSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input required type="text" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 focus:ring-amber-500 focus:border-amber-500 border" value={quoteData.name} onChange={e => setQuoteData({...quoteData, name: e.target.value})} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                  <input required type="text" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 focus:ring-amber-500 focus:border-amber-500 border" value={quoteData.phone} onChange={e => setQuoteData({...quoteData, phone: e.target.value})} placeholder="+234..." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shipping From</label>
                  <input required type="text" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 focus:ring-amber-500 focus:border-amber-500 border" value={quoteData.from} onChange={e => setQuoteData({...quoteData, from: e.target.value})} placeholder="e.g. Lagos, Nigeria" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shipping To</label>
                  <input required type="text" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 focus:ring-amber-500 focus:border-amber-500 border" value={quoteData.to} onChange={e => setQuoteData({...quoteData, to: e.target.value})} placeholder="e.g. London, UK" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item Description</label>
                <textarea required rows={3} className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 focus:ring-amber-500 focus:border-amber-500 border resize-none" value={quoteData.items} onChange={e => setQuoteData({...quoteData, items: e.target.value})} placeholder="What are you shipping?"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Weight/Volume <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input type="text" className="w-full rounded-xl border-gray-300 bg-gray-50 p-3 focus:ring-amber-500 focus:border-amber-500 border" value={quoteData.weight} onChange={e => setQuoteData({...quoteData, weight: e.target.value})} placeholder="e.g. 50kg or 2 boxes" />
              </div>

              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 rounded-xl transition-colors mt-4 shadow-lg shadow-amber-600/20">
                Send to WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Track Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-xl text-white flex-grow">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Search className="text-amber-500" /> Track Shipment
              </h2>
              <form onSubmit={handleTrackSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Tracking / Reference Number</label>
                  <input required type="text" className="w-full rounded-xl border-gray-700 bg-gray-800 text-white p-4 focus:ring-amber-500 focus:border-amber-500 border" value={trackData.reference} onChange={e => setTrackData({...trackData, reference: e.target.value})} placeholder="AG-123456789" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number Used at Booking</label>
                  <input required type="text" className="w-full rounded-xl border-gray-700 bg-gray-800 text-white p-4 focus:ring-amber-500 focus:border-amber-500 border" value={trackData.phone} onChange={e => setTrackData({...trackData, phone: e.target.value})} placeholder="+234..." />
                </div>
                
                <button type="submit" className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 rounded-xl transition-colors mt-4">
                  Check Status
                </button>
              </form>

              {trackResult && (
                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <p className="text-amber-100 text-sm">{trackResult}</p>
                  <a 
                    href={generateWhatsAppLink(`Hi, I want to track my shipment. Ref: ${trackData.reference}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 font-medium mt-3 text-sm hover:text-amber-300"
                  >
                    Track via WhatsApp <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Quick WhatsApp Assistant */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-amber-50 rounded-3xl p-8 border border-amber-100"
            >
              <h3 className="font-bold text-gray-900 mb-2">Need immediate help?</h3>
              <p className="text-gray-600 mb-4 text-sm">Skip the forms and message our team directly. We usually reply within 5 minutes.</p>
              <a
                href={generateWhatsAppLink("Hi Adedola Gold, I need help with an existing shipment or have a general inquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Chat with an Agent
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
