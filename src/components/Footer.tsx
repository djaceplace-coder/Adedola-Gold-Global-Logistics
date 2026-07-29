import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../lib/utils';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-bold text-sm">
                AG
              </div>
              <span className="font-bold text-lg tracking-tight">Adedola<span className="text-amber-500">Gold</span></span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Bridging Nigeria to the World — freight, logistics, and market sourcing.
            </p>
            <a
              href={generateWhatsAppLink("Hi Adedola Gold, I'd like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white border border-green-500/20 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services#air-freight" className="hover:text-amber-400 transition-colors">Air Freight</Link></li>
              <li><Link to="/services#ocean-freight" className="hover:text-amber-400 transition-colors">Ocean Freight</Link></li>
              <li><Link to="/services#road-freight" className="hover:text-amber-400 transition-colors">Road Freight</Link></li>
              <li><Link to="/services#customs" className="hover:text-amber-400 transition-colors">Customs Clearance</Link></li>
              <li><Link to="/services#warehousing" className="hover:text-amber-400 transition-colors">Warehousing</Link></li>
              <li><Link to="/services#insurance" className="hover:text-amber-400 transition-colors">Cargo Insurance</Link></li>
            </ul>
          </div>

          {/* Column 3: Trade Channels */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Trade Channels</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/trade-channels#malaysia" className="hover:text-amber-400 transition-colors">Malaysia</Link></li>
              <li><Link to="/trade-channels#qatar" className="hover:text-amber-400 transition-colors">Qatar/UAE</Link></li>
              <li><Link to="/trade-channels#usa" className="hover:text-amber-400 transition-colors">USA</Link></li>
              <li><Link to="/trade-channels#uk" className="hover:text-amber-400 transition-colors">UK</Link></li>
              <li><Link to="/trade-channels#rest-of-world" className="hover:text-amber-400 transition-colors">Rest of World</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/market-sourcing" className="hover:text-amber-400 transition-colors">Market Sourcing</Link></li>
              <li><Link to="/learn" className="hover:text-amber-400 transition-colors">Learn Hub</Link></li>
              <li><Link to="/track-quote" className="hover:text-amber-400 transition-colors">Track & Quote</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-amber-400 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/sitemap" className="hover:text-amber-400 transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Adedola Gold Global Logistics. All rights reserved.</span>
          
          <div className="flex items-center group cursor-default">
            <span className="uppercase tracking-[0.2em] font-medium text-[10px]">Imagined by</span>
            <span className="ml-2 px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700 font-bold tracking-wider group-hover:border-amber-500 group-hover:text-amber-400 transition-colors duration-300 text-[10px] uppercase">JuneStudio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
