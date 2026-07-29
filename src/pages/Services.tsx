import { Plane, Ship, Truck, FileText, Package, Shield, Home as HomeIcon } from 'lucide-react';
import { generateWhatsAppLink } from '../lib/utils';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Services() {
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

  const services = [
    {
      id: "air-freight",
      icon: Plane,
      title: "Air Freight",
      description: "Fast, secure air cargo for time-sensitive shipments — documents, perishables, and high-value goods — between Nigeria and our partner countries.",
      details: "Typical use cases: urgent documents, perishable foods, high-value electronics.",
      cta: "Get an Air Freight Quote",
      whatsapp: "Hi Adedola Gold, I need an Air Freight quote."
    },
    {
      id: "ocean-freight",
      icon: Ship,
      title: "Ocean Freight (FCL/LCL)",
      description: "Cost-effective shipping for bulk and container loads — Full Container Load (FCL) for large volumes, Less-than-Container Load (LCL) for smaller consolidated shipments.",
      details: "Ideal for heavy machinery, bulk commercial goods, and large personal moves.",
      cta: "Get an Ocean Freight Quote",
      whatsapp: "Hi Adedola Gold, I need an Ocean Freight quote."
    },
    {
      id: "road-freight",
      icon: Truck,
      title: "Road Freight — Lagos, Mainland & Rural Nigeria",
      description: "Last-mile and inter-state delivery across Nigeria, including hard-to-reach rural regions — because logistics shouldn't stop at the city limit.",
      details: "Seamless connection from ports and airports directly to the final destination.",
      cta: "Request Road Delivery",
      whatsapp: "Hi Adedola Gold, I need to request road delivery in Nigeria."
    },
    {
      id: "customs",
      icon: FileText,
      title: "Customs Clearance & Documentation",
      description: "End-to-end handling of import/export paperwork, duties, and compliance — so your shipment doesn't sit at the port.",
      details: "We navigate complex customs regulations in Nigeria, Malaysia, UAE, USA, and UK.",
      cta: "Ask About Customs Clearance",
      whatsapp: "Hi Adedola Gold, I have a question about Customs Clearance."
    },
    {
      id: "warehousing",
      icon: Package,
      title: "Warehousing & Consolidation",
      description: "Secure short- and long-term storage, plus consolidation services for customers combining multiple orders into one shipment.",
      details: "Perfect for diaspora shoppers buying from multiple vendors.",
      cta: "Ask About Warehousing",
      whatsapp: "Hi Adedola Gold, I'm interested in warehousing/consolidation."
    },
    {
      id: "insurance",
      icon: Shield,
      title: "Cargo Insurance",
      description: "Optional coverage for peace of mind on high-value or long-distance shipments.",
      details: "Protect your investment against unforeseen transit issues.",
      cta: "Ask About Insurance",
      whatsapp: "Hi Adedola Gold, I need information on cargo insurance."
    },
    {
      id: "door-to-door",
      icon: HomeIcon,
      title: "Door-to-Door Delivery",
      description: "From port or warehouse straight to your doorstep — urban or rural, Nigeria-wide or globally.",
      details: "The ultimate hands-off logistics experience.",
      cta: "Request Door-to-Door",
      whatsapp: "Hi Adedola Gold, I need a door-to-door delivery quote."
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
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20 lg:py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Full-Spectrum Freight & Logistics Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whatever the mode, whatever the size — we move it reliably, on time, and in full compliance with local and international regulations.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={service.id} 
              id={service.id}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-gray-500 mb-8">
                    {service.details}
                  </p>
                  <a
                    href={generateWhatsAppLink(service.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* End CTA */}
      <section className="bg-amber-100 py-16 text-center px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Not sure which service you need?</h2>
          <p className="text-gray-700 mb-8 text-lg">Tell us what you're shipping and we'll recommend the right option.</p>
          <a
            href={generateWhatsAppLink("Hi Adedola Gold, I need help figuring out which shipping service is best for me.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg shadow-amber-600/20"
          >
            Ask for a Recommendation
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}
