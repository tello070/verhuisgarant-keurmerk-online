
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Check } from 'lucide-react';

interface ApplicationStepsProps {
  currentStep: number;
  totalSteps: number;
}

const ApplicationSteps: React.FC<ApplicationStepsProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  const steps = [
    { id: 1, title: "Bedrijfsgegevens" },
    { id: 2, title: "Diensten & Specialisaties" },
    { id: 3, title: "Certificering & Documenten" },
    { id: 4, title: "Bevestiging" }
  ];

  return (
    <div className="mb-8">
      <div className="relative mb-8">
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="flex justify-between">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="flex flex-col items-center relative"
          >
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
                ${currentStep > step.id 
                  ? "bg-brand-blue text-white" 
                  : currentStep === step.id 
                    ? "bg-brand-blue-light text-white border-2 border-brand-blue" 
                    : "bg-gray-100 text-gray-400 border border-gray-300"}`}
            >
              {currentStep > step.id ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <span 
              className={`text-xs font-medium ${
                currentStep >= step.id ? "text-brand-blue" : "text-gray-400"
              } text-center w-20 md:w-24`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationSteps;
