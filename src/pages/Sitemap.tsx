import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Trade Channels', path: '/trade-channels' },
    { name: 'Market Sourcing', path: '/market-sourcing' },
    { name: 'Track & Quote', path: '/track-quote' },
    { name: 'Learn Hub', path: '/learn' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-gray-50 min-h-screen py-20 lg:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <ul className="space-y-4">
            {links.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-lg text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
