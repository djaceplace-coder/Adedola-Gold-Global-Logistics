import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ShippingPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white min-h-screen py-20 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Shipping Options & Transit Times</h2>
          <p className="mb-4">
            We offer both Air and Ocean freight options depending on your timeline and budget constraints.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Express Air Freight:</strong> Typically takes 3-7 business days depending on the destination (e.g., Qatar/UAE, USA, UK).</li>
            <li><strong>Standard Ocean Freight:</strong> Typically takes 25-50 days depending on the corridor and consolidation schedules.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Processing Time</h2>
          <p className="mb-4">
            All orders are processed within 1-2 business days upon receipt at our Lagos sorting facility. Market sourcing requests require an additional 2-5 days for procurement prior to shipping.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Customs & Duties</h2>
          <p className="mb-4">
            Unless otherwise agreed (e.g., Door-to-Door DDP service), the consignee is responsible for all import duties, taxes, and customs clearance fees at the destination country.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Tracking Your Order</h2>
          <p className="mb-4">
            Once your shipment is processed, you will receive a tracking number via WhatsApp. You can track your shipment on our <Link to="/track-quote" className="text-amber-600 hover:underline">Track & Quote</Link> page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Lost or Damaged Items</h2>
          <p className="mb-4">
            If your goods arrive damaged or are lost in transit, you must notify us within 7 days of the expected delivery date. Standard carrier liability limits apply unless full cargo insurance was purchased prior to shipping.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
