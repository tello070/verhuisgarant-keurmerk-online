
import React from 'react';
import { 
  ClipboardList, 
  Search, 
  FileCheck, 
  Award, 
  ArrowRight 
} from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      title: "1. Aanmelding",
      description: "Vul het aanmeldformulier in en verstrek basisgegevens over uw verhuisbedrijf.",
      color: "bg-brand-blue"
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "2. Beoordeling",
      description: "Onze experts beoordelen uw aanvraag en plannen een fysieke inspectie.",
      color: "bg-brand-blue-light"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: "3. Certificering",
      description: "Na goedkeuring ontvangt u de officiële certificering en keurmerkmaterialen.",
      color: "bg-brand-orange"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "4. Keurmerkdrager",
      description: "Profileer uw bedrijf als gecertificeerde Verhuisgarant-partner.",
      color: "bg-brand-orange-light"
    }
  ];
  
  return (
    <section className="section-container">
      <h2 className="section-title">Hoe werkt de certificering?</h2>
      <p className="section-subtitle">
        Ons transparante en grondige certificeringsproces zorgt ervoor dat alleen de beste verhuisbedrijven het Verhuisgarant keurmerk mogen dragen.
      </p>
      
      <div className="relative mt-16">
        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className={`${step.color} inline-flex items-center justify-center rounded-full p-3 mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Connecting line (visible on desktop) */}
        <div className="hidden lg:block absolute top-1/3 transform -translate-y-1/2 left-0 right-0 h-0.5 bg-gray-200" style={{ zIndex: 0 }}></div>
      </div>
      
      <div className="mt-16 bg-gray-100 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Onze kwaliteitscriteria</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">Bedrijfsvoering</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Geldige vergunningen en verzekeringen</li>
              <li>Financiële stabiliteit</li>
              <li>Transparante offertes en facturen</li>
              <li>Professionele bedrijfsprocessen</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Kwaliteit & Service</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Professioneel en vakkundig personeel</li>
              <li>Modern en goed onderhouden materieel</li>
              <li>Klanttevredenheid (min. 8/10 beoordeling)</li>
              <li>Snelle en adequate klachtenafhandeling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
