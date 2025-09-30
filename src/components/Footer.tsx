import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <footer className="footer-modern">
      <div className="container-custom pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1 - Company Identity */}
          <div className="footer-column-fade">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                <span className="text-gold font-bold text-xl font-playfair">BMA</span>
              </div>
              <div>
                <div className="text-lg font-semibold text-white">
                  Bell Mount & Associates
                </div>
                <div className="text-sm text-gray-400">
                  Certified Public Accountants
                </div>
              </div>
            </div>
            
            {/* Company Description */}
            <p className="text-gray-300 mb-8 leading-relaxed">
              Professional Audit, Tax, and Advisory firm with 18+ years of trusted expertise in Kenya and beyond.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="footer-social-icon group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="footer-social-icon group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="footer-social-icon group"
                aria-label="Facebook"
              >
                <Globe className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column-fade" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-gold mb-6 font-playfair">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-column-fade" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-gold mb-6 font-playfair">Contact Us</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>The Close Business Centre</div>
                  <div>Museum Hill-Westlands</div>
                  <div>P.O. Box 10599-00100, Nairobi</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>+254 (0) 725-806441</div>
                  <div>+254 (0) 723-374822</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:steve@bell-mount.co.ke"
                  className="text-sm text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  steve@bell-mount.co.ke
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="https://www.bell-mount.co.ke"
                  className="text-sm text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  www.bell-mount.co.ke
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="footer-cta-button inline-flex items-center space-x-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm italic">
            "Delivering clarity, compliance, and growth for businesses since 2005."
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="footer-divider"></div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8">
          <div className="text-sm text-gray-400">
            © {currentYear} Bell Mount & Associates. All Rights Reserved.
          </div>
          <div className="flex items-center">
            <a
              href="https://www.espiranova.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gold transition-colors duration-300"
            >
              Powered by EspiraNova
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;