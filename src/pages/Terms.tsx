import { motion } from 'motion/react';

export default function Terms() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white min-h-screen py-20 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the logistics and market sourcing services provided by Adedola Gold Global Logistics ("we," "us," or "our"), you agree to be bound by these Terms of Service.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
          <p className="mb-4">
            Adedola Gold provides freight forwarding, customs clearance, warehousing, local delivery, and market sourcing services between Nigeria, Malaysia, Qatar/UAE, the USA, and the UK.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Quotes and Pricing</h2>
          <p className="mb-4">
            All quotes provided via WhatsApp or our web forms are estimates based on the weight, volume, and information provided at the time of inquiry. Final pricing is subject to physical inspection and weighing of the goods at our facilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Prohibited Items</h2>
          <p className="mb-4">
            We strictly prohibit the shipment of illegal substances, hazardous materials, perishable goods without prior arrangement, and any items restricted by the destination country's customs regulations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Market Sourcing Liability</h2>
          <p className="mb-4">
            For market sourcing requests, we act as your purchasing agent. We guarantee the quality and accuracy of the items sourced at the point of purchase, but are not the manufacturer of these goods.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Insurance and Claims</h2>
          <p className="mb-4">
            Basic liability coverage is included. Additional comprehensive cargo insurance can be purchased upon request. Claims for loss or damage must be filed within 7 days of delivery.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
