import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { 
    name: 'Trade Channels', 
    path: '/trade-channels',
    dropdown: [
      { name: 'Malaysia', path: '/trade-channels#malaysia' },
      { name: 'Qatar/UAE', path: '/trade-channels#qatar' },
      { name: 'USA', path: '/trade-channels#usa' },
      { name: 'UK', path: '/trade-channels#uk' },
      { name: 'Rest of World', path: '/trade-channels#rest-of-world' },
    ]
  },
  { name: 'Market Sourcing', path: '/market-sourcing' },
  { name: 'Track & Quote', path: '/track-quote' },
  { name: 'Learn', path: '/learn' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const fullText = "Global Logistics";
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 3000;
    const pauseBeforeType = 1000;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && typedText === '') {
      timeout = setTimeout(() => setIsDeleting(false), pauseBeforeType);
    } else {
      timeout = setTimeout(() => {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1) 
            : fullText.slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-gray-900 text-gray-200 text-xs py-2 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-orange-400" />
          <span>+234 903 845 0299</span>
        </div>
        <div className="flex items-center gap-1.5 font-medium tracking-wide">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>We ship: 🇳🇬 Nigeria ⇄ 🇲🇾 Malaysia ⇄ 🇶🇦 Qatar ⇄ 🇺🇸 USA ⇄ 🇬🇧 UK</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-amber-600 transition-colors">
              AG
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">
                Adedola<span className="text-amber-600">Gold</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 h-3 flex items-center font-bold">
                {typedText}
                <span className="w-[1.5px] h-3 bg-amber-500 ml-[1px] animate-pulse"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group" onMouseEnter={() => link.dropdown && setDropdownOpen(true)} onMouseLeave={() => link.dropdown && setDropdownOpen(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-semibold transition-colors flex items-center gap-1',
                      isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                    )
                  }
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </NavLink>

                {/* Dropdown */}
                {link.dropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-amber-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg pb-6">
          <div className="px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'block px-3 py-3 rounded-md text-base font-medium',
                      isActive ? 'bg-amber-50 text-amber-600' : 'text-gray-900 hover:bg-gray-50'
                    )
                  }
                  onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
                {link.dropdown && (
                  <div className="pl-6 space-y-1 pb-2">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-amber-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
