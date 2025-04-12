
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-blue-light text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-white/20 rounded-full px-4 py-2 mb-6">
            <Award className="h-5 w-5 mr-2" />
            <span className="text-base font-medium">Het meest vertrouwde keurmerk voor verhuizers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om uw verhuisbedrijf naar het volgende niveau te tillen?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Sluit u aan bij de toonaangevende verhuisbedrijven van Nederland. 
            Het Verhuisgarant-keurmerk onderscheidt uw bedrijf van de concurrentie 
            en helpt u meer klanten aan te trekken.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90">
              Aanmelden voor certificering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Meer informatie aanvragen
            </Button>
          </div>
          
          <p className="mt-8 text-white/80 text-sm">
            Heeft u vragen? Neem contact met ons op via 020-123-4567 of info@verhuisgarant.nl
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
