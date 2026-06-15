import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Etailed Digital India"
                className="h-10 w-10 shrink-0 rounded-lg object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">Etailed Digital India</h3>
                <p className="text-xs text-gray-400">by Etailed Digital Services Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Accelerating business growth with digital marketing, custom SaaS products, and automation solutions across India.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/17fbyxSaVE/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/etailedindia?igsh=anB3eXB3ZGV4ZG80"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-palette-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@etaileddigitalindia9259?si=vJUc1Gs2YfhZKZoK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-danger transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/etailed-digital-services-private%C2%A0limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-hover transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/ETailedIndia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about-page" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services-page" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact-page" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#digital-business" className="text-gray-400 hover:text-white transition-colors">Web & Branding</a></li>
              <li><a href="#website-ecommerce" className="text-gray-400 hover:text-white transition-colors">Website & E-Commerce</a></li>
              <li><a href="#social-media" className="text-gray-400 hover:text-white transition-colors">Social Media Services</a></li>
              <li><a href="#automations-crm" className="text-gray-400 hover:text-white transition-colors">Automations & CRM</a></li>
              <li><a href="#digital-marketing" className="text-gray-400 hover:text-white transition-colors">Digital Marketing & SaaS</a></li>
              <li><a href="#blogs-page" className="text-gray-400 hover:text-white transition-colors">Blog & Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-sm text-gray-400">+91 93928 98733</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-sm text-gray-400">+91 9390168733</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-sm text-gray-400">support@e-tailedindia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {currentYear} Etailed Digital Services Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#refund" className="text-sm text-gray-400 hover:text-white transition-colors">Refund Policy</a>
              <a href="#shipping" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping Policy</a>
              <a href="#disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">Disclaimer</a>
              <a href="#cookie" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
