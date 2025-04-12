
import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Award, 
  ThumbsUp, 
  FileText, 
  Users, 
  GraduationCap, 
  BadgeCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-blue" />,
      title: "Meer Omzet",
      description: "Gecertificeerde bedrijven zien gemiddeld 27% meer omzet door het vertrouwen dat het keurmerk biedt."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-blue" />,
      title: "Onderscheidend Vermogen",
      description: "Zet uw bedrijf apart van de concurrentie met een erkend keurmerk voor kwaliteit."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-blue" />,
      title: "Exclusieve Vermelding",
      description: "Prominente weergave op onze website en in onze zoekmachine voor verhuisbedrijven."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-brand-blue" />,
      title: "Klantenvertrouwen",
      description: "Verhuisgarant staat voor betrouwbaarheid, waardoor klanten eerder voor u kiezen."
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-blue" />,
      title: "Marketingmateriaal",
      description: "Toegang tot officieel keurmerkmateriaal voor uw website, voertuigen en drukwerk."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Netwerk",
      description: "Word deel van ons netwerk van topbedrijven en profiteer van kennisdeling."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-brand-blue" />,
      title: "Trainingen",
      description: "Exclusieve toegang tot vakgerichte trainingen en opleidingen voor uw personeel."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-brand-blue" />,
      title: "Klachtenbemiddeling",
      description: "Professionele ondersteuning bij eventuele klachtenafhandeling en bemiddeling."
    }
  ];
  
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Voordelen van ons keurmerk</h2>
        <p className="section-subtitle">
          Het Verhuisgarant keurmerk biedt talloze voordelen voor uw verhuisbedrijf. Ontdek waarom het keurmerk onmisbaar is voor groeiende verhuisbedrijven.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="bg-brand-blue/10 p-4 rounded-full inline-flex mb-4 self-start">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 flex-grow">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Klaar om uw bedrijf naar een hoger niveau te tillen?</h3>
          <Button size="lg" className="cta-gradient">
            Vraag het keurmerk aan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
