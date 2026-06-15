import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-page' },
    { name: 'All Services', href: '#services-page' },
    { name: 'Partner With Us', href: '#partner-page' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact-page' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Etailed Digital India"
              className="h-12 w-12 shrink-0 rounded-lg object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Etailed Digital India</h1>
              <p className="text-xs text-gray-600">Digital Marketing & SaaS Solutions</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand font-semibold transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-brand font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
