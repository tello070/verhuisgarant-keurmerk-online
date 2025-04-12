
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-brand-blue" />
              <span className="ml-2 text-xl font-bold text-brand-blue">
                Verhuisgarant
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Het Nederlandse keurmerk voor professionele verhuisbedrijven die voldoen aan de hoogste kwaliteits- en servicenormen.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/voordelen" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Voordelen
                </Link>
              </li>
              <li>
                <Link to="/aanmelden" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Aanmelden
                </Link>
              </li>
              <li>
                <Link to="/gecertificeerde-bedrijven" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Gecertificeerde Bedrijven
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                <span className="text-gray-600">
                  Keizersgracht 123<br />
                  1015 CW Amsterdam
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-blue mr-2" />
                <span className="text-gray-600">020-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-blue mr-2" />
                <span className="text-gray-600">info@verhuisgarant.nl</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nieuwsbrief</h3>
            <p className="text-gray-600 mb-4">
              Blijf op de hoogte van nieuws en updates.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <Button className="cta-gradient">
                Aanmelden
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Verhuisgarant. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">
                Privacybeleid
              </Link>
              <Link to="/voorwaarden" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
