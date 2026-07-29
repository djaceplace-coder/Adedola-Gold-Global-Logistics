import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white min-h-screen py-20 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you request a quote, initiate a WhatsApp conversation, or submit a tracking inquiry. This may include your name, phone number, email address, shipping addresses, and package details.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our logistics and market sourcing services, to process transactions, and to communicate with you about your shipments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell your personal information. We may share your information with trusted third-party partners (such as customs authorities, airlines, and local delivery couriers) strictly for the purpose of fulfilling our logistics services to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Links</h2>
          <p className="mb-4">
            Our website utilizes WhatsApp for communication and ordering. Please refer to WhatsApp's privacy policy to understand how they handle data transmitted through their platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us via WhatsApp or at hello@adedolagold.com.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
