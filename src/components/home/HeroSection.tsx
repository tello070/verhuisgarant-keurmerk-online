
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Award, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-white/20 rounded-full px-3 py-1 mb-6">
                <Award className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Het betrouwbaarste keurmerk van Nederland</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Het keurmerk voor kwalitatieve verhuisbedrijven
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
                Onderscheid uw verhuisbedrijf met het meest vertrouwde keurmerk in Nederland. Verbeter uw reputatie en trek meer klanten aan.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="cta-gradient">
                  Aanmelden als bedrijf
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button size="lg" variant="outline" className="bg-white text-brand-blue hover:bg-white/90">
                  Zoek gecertificeerde bedrijven
                </Button>
              </div>
              
              <div className="flex flex-wrap mt-8 gap-x-8 gap-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-white" />
                  <span>500+ gecertificeerde bedrijven</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-white" />
                  <span>10.000+ tevreden verhuisklanten</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-white" />
                  <span>Landelijke dekking</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10 animate-slide-in">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 relative z-10">
                <div className="absolute -top-3 -right-3 bg-brand-orange text-white rounded-full p-2 shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Waarom Verhuisgarant?
                </h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                    <span>Strikte kwaliteitscontroles en certificering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                    <span>Meer zichtbaarheid en klanten voor uw bedrijf</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                    <span>Onderscheid uzelf van concurrenten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                    <span>Klachtenbemiddeling en -afhandeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                    <span>Jaarlijkse vakgerichte bijscholing</span>
                  </li>
                </ul>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -left-6 h-40 w-40 bg-brand-orange/10 rounded-full"></div>
              <div className="absolute bottom-10 -right-6 h-24 w-24 bg-brand-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
