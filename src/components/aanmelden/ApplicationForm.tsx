
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Upload, Building, MapPin, Globe, Phone, Mail, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import CompanyDetailsForm from './steps/CompanyDetailsForm';
import ServicesForm from './steps/ServicesForm';
import CertificationForm from './steps/CertificationForm';
import ConfirmationForm from './steps/ConfirmationForm';
import { toast } from 'sonner';

interface ApplicationFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  currentStep,
  setCurrentStep,
  totalSteps,
}) => {
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      // Company Details
      companyName: '',
      kvkNumber: '',
      website: '',
      foundedYear: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      city: '',
      // Services
      services: [] as string[],
      specializations: [] as string[],
      serviceArea: [] as string[],
      employeeCount: '',
      vehicleCount: '',
      // Certification
      insurance: false,
      certification: false,
      termsAgreed: false,
      // Additional fields
      description: '',
    },
  });

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCompanyLogo(file);
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      toast.success("Logo succesvol geüpload");
    }
  };

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    
    // If not on the last step, move to next step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
      return;
    }
    
    // Final submission
    toast.success("Aanvraag succesvol ingediend! Wij nemen binnenkort contact met u op.");
    // Here would be the API call to submit the form data
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Bedrijfsgegevens",
      component: (
        <CompanyDetailsForm 
          form={form} 
          logoPreview={logoPreview} 
          handleLogoUpload={handleLogoUpload} 
        />
      ),
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Diensten & Specialisaties",
      component: <ServicesForm form={form} />,
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Certificering & Documenten",
      component: <CertificationForm form={form} />,
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Bevestiging",
      component: <ConfirmationForm form={form} logoPreview={logoPreview} />,
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  const currentStepData = steps.find(step => step.id === currentStep);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              {currentStepData?.icon}
              <h3 className="text-xl font-semibold ml-2">
                Stap {currentStep}: {currentStepData?.title}
              </h3>
            </div>
            {currentStepData?.component}
          </div>

          <div className="flex justify-between mt-10">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={goToPreviousStep}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Vorige
              </Button>
            ) : (
              <div></div>
            )}

            <Button type="submit" className="hero-gradient gap-2">
              {currentStep < totalSteps ? (
                <>
                  Volgende
                  <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                'Aanvraag indienen'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplicationForm;
