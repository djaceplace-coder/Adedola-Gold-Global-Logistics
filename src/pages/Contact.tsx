import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { generateWhatsAppLink } from '../lib/utils';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Adedola Gold,
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-gray-50 min-h-screen"
    >
      <section className="bg-gray-900 text-white py-20 lg:py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Talk to a Real Person, Right Now</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No bots, no endless phone menus. Get direct answers from our logistics and sourcing experts.
          </p>
        </motion.div>
      </section>

      <section className="py-20 -mt-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-1 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp (Primary)</h3>
                <p className="text-gray-600 mb-4">Fastest response time.</p>
                <a
                  href={generateWhatsAppLink("Hi Adedola Gold, I'd like to get in touch.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors"
                >
                  +234 903 845 0299
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us during business hours.</p>
                <a href="tel:+2349038450299" className="text-lg font-bold text-gray-900 hover:text-amber-600 transition-colors">
                  +234 903 845 0299
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">For formal inquiries.</p>
                <a href="mailto:hello@adedolagold.com" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  hello@adedolagold.com
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input required type="text" className="w-full rounded-xl border-gray-300 bg-gray-50 p-4 focus:ring-amber-500 focus:border-amber-500 border" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full rounded-xl border-gray-300 bg-gray-50 p-4 focus:ring-amber-500 focus:border-amber-500 border" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                    <textarea required rows={5} className="w-full rounded-xl border-gray-300 bg-gray-50 p-4 focus:ring-amber-500 focus:border-amber-500 border resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your logistics or sourcing needs..."></textarea>
                  </div>
                  <button type="submit" className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-medium px-10 py-4 rounded-xl transition-colors shadow-lg shadow-amber-600/20">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 text-white p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><MapPin className="text-amber-500" /> Office / HQ</h3>
              <p className="text-gray-400 mb-2">Adedola Gold Global Logistics</p>
              <p className="text-gray-300">123 Logistics Way, Ikeja,<br/>Lagos, Nigeria</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-50 text-gray-900 p-8 rounded-3xl border border-amber-100"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><Clock className="text-amber-600" /> Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-amber-200/50 pb-2"><span>Monday - Friday</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-amber-200/50 pb-2"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-gray-500">Closed (WhatsApp active for emergencies)</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
