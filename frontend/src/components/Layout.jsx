import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Droplets, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { mockData } from '../mock';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { company } = mockData;

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Comment ça marche', href: '/process' },
    { name: 'Avis', href: '/testimonials' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_sparkle-auto-design/artifacts/rvblyzgz_ChatGPT%20Image%2020%20ao%C3%BBt%202025%2C%2022_32_04-Photoroom.svg" 
                  alt="NosVoServices Logo" 
                  className="w-10 h-10 transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/reservation">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Réserver maintenant
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/reservation" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Réserver maintenant
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_sparkle-auto-design/artifacts/rvblyzgz_ChatGPT%20Image%2020%20ao%C3%BBt%202025%2C%2022_32_04-Photoroom.svg" 
                    alt="NosVoServices Logo" 
                    className="w-10 h-10 transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold">{company.name}</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {company.description}
              </p>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {company.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {company.address}
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-300">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Informations légales</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/legal/mentions" className="hover:text-blue-400 transition-colors">Mentions légales</Link></li>
                <li><Link to="/legal/cgu" className="hover:text-blue-400 transition-colors">CGU</Link></li>
                <li><Link to="/legal/cgv" className="hover:text-blue-400 transition-colors">CGV</Link></li>
                <li><Link to="/legal/privacy" className="hover:text-blue-400 transition-colors">Confidentialité</Link></li>
                <li><Link to="/legal/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 mb-4 md:mb-0">
                &copy; 2024 {company.name}. Tous droits réservés.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;