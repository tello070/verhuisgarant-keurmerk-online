
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Award, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Award className="h-8 w-8 text-brand-blue" />
              <span className="ml-2 text-xl font-bold text-brand-blue">
                Verhuisgarant
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link to="/over-ons" className="font-medium hover:text-brand-blue transition-colors">
              Over Ons
            </Link>
            <Link to="/voordelen" className="font-medium hover:text-brand-blue transition-colors">
              Voordelen
            </Link>
            <Link to="/aanmelden" className="font-medium hover:text-brand-blue transition-colors">
              Aanmelden
            </Link>
            <Link to="/gecertificeerde-bedrijven" className="font-medium hover:text-brand-blue transition-colors">
              Gecertificeerde Bedrijven
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-brand-blue mr-2" />
              <span className="text-sm font-medium">020-123-4567</span>
            </div>
            <Button className="cta-gradient">
              Aanmelden
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-brand-blue"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium py-2 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/over-ons" 
                className="font-medium py-2 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                Over Ons
              </Link>
              <Link 
                to="/voordelen" 
                className="font-medium py-2 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                Voordelen
              </Link>
              <Link 
                to="/aanmelden" 
                className="font-medium py-2 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                Aanmelden
              </Link>
              <Link 
                to="/gecertificeerde-bedrijven" 
                className="font-medium py-2 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
              >
                Gecertificeerde Bedrijven
              </Link>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-blue mr-2" />
                <span className="text-sm font-medium">020-123-4567</span>
              </div>
              <Button className="cta-gradient w-full">
                Aanmelden
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
