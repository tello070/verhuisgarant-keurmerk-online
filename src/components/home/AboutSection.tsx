
import React from 'react';
import { Shield, Truck, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Over Verhuisgarant</h2>
      <p className="section-subtitle">
        Het toonaangevende keurmerk dat staat voor betrouwbaarheid, kwaliteit en professionaliteit in de Nederlandse verhuisbranche.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
        <div>
          <p className="text-lg mb-6">
            Verhuisgarant is opgericht met één doel: de kwaliteit en betrouwbaarheid in de Nederlandse verhuisbranche naar een hoger niveau tillen. 
            Als onafhankelijke certificeringsinstantie stellen wij strenge eisen aan verhuisbedrijven die ons keurmerk willen dragen.
          </p>
          
          <p className="text-lg mb-6">
            Bedrijven met het Verhuisgarant-keurmerk voldoen aan strenge normen op het gebied van:
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                <Shield className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Kwaliteit & Betrouwbaarheid</h3>
                <p className="text-gray-600">Strenge controles op materieel, procedures en klanttevredenheid</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                <Truck className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Professionaliteit & Expertise</h3>
                <p className="text-gray-600">Opgeleide verhuizers en gebruik van professionele materialen</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                <Clock className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Service & Stiptheid</h3>
                <p className="text-gray-600">Nakomen van afspraken en transparante communicatie</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand-blue/10 p-2 rounded-full mr-4 mt-1">
                <Users className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Klanttevredenheid</h3>
                <p className="text-gray-600">Bewezen track record van tevreden klanten en oplossingsgericht werken</p>
              </div>
            </li>
          </ul>
          
          <Button className="cta-gradient">
            Lees meer over onze certificering
          </Button>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1600518464441-9306b00c3309?auto=format&fit=crop&q=80" 
            alt="Professioneel verhuisbedrijf" 
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <div className="flex items-center mb-2">
              <Shield className="h-6 w-6 text-brand-blue mr-2" />
              <h4 className="font-semibold text-lg">Ons keurmerk staat voor:</h4>
            </div>
            <p className="text-gray-600">
              "We streven naar een verhuisbranche waar kwaliteit, betrouwbaarheid en klanttevredenheid de norm zijn."
            </p>
            <div className="mt-2 text-sm font-medium text-brand-blue">
              - Directie Verhuisgarant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
