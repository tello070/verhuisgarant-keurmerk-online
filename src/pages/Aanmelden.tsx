
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ApplicationForm from '@/components/aanmelden/ApplicationForm';
import ApplicationSteps from '@/components/aanmelden/ApplicationSteps';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Aanmelden = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-light text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16 text-brand-orange" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Aanmelden voor Verhuisgarant</h1>
              <p className="text-xl">
                Word een gecertificeerd verhuisbedrijf en onderscheid uzelf van de concurrentie
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Award className="h-8 w-8 text-brand-blue" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Certificeringsproces
                </h2>
              </div>
              
              <ApplicationSteps currentStep={currentStep} totalSteps={totalSteps} />
              
              <div className="mt-8">
                <ApplicationForm 
                  currentStep={currentStep} 
                  setCurrentStep={setCurrentStep}
                  totalSteps={totalSteps}
                />
              </div>

              <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-blue mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Waarom aanmelden bij Verhuisgarant?</h3>
                    <p className="text-gray-600 mb-4">
                      Als gecertificeerd verhuisbedrijf profiteert u van meer klantvertrouwen, verhoogde zichtbaarheid en een bewezen kwaliteitskeurmerk dat u onderscheidt in een competitieve markt.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Toegang tot het exclusieve Verhuisgarant-netwerk</li>
                      <li>Vermelding op onze website en promotiemateriaal</li>
                      <li>Gebruik van het officiële Verhuisgarant-keurmerklogo</li>
                      <li>Periodieke kwaliteitsevaluaties en ondersteuning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Aanmelden;
