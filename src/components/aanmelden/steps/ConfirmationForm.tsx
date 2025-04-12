
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Card, CardContent } from "@/components/ui/card";
import { Building, Globe, Phone, Mail, MapPin, Check, AlertCircle } from 'lucide-react';

interface ConfirmationFormProps {
  form: UseFormReturn<any>;
  logoPreview: string | null;
}

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ form, logoPreview }) => {
  const watchedValues = form.watch();
  
  const selectedServices = watchedValues.services || [];
  const selectedSpecializations = watchedValues.specializations || [];
  const selectedAreas = watchedValues.serviceArea || [];
  
  const serviceOptions = [
    { id: "particuliere-verhuizingen", label: "Particuliere verhuizingen" },
    { id: "zakelijke-verhuizingen", label: "Zakelijke verhuizingen" },
    { id: "internationale-verhuizingen", label: "Internationale verhuizingen" },
    { id: "opslag-mogelijkheden", label: "Opslag mogelijkheden" },
    { id: "inpakservice", label: "Inpakservice" },
    { id: "meubelverhuizing", label: "Meubelverhuizing" },
    { id: "pianovervoer", label: "Pianovervoer" },
    { id: "kunstvervoer", label: "Kunstvervoer" },
  ];

  const specializationOptions = [
    { id: "seniorenverhuizing", label: "Seniorenverhuizing" },
    { id: "studentenverhuizing", label: "Studentenverhuizing" },
    { id: "kantoorverhuizing", label: "Kantoorverhuizing" },
    { id: "milieubesparend-verhuizen", label: "Milieubesparend verhuizen" },
    { id: "spoedverhuizing", label: "Spoedverhuizing" },
    { id: "zware-objecten", label: "Zware objecten" },
  ];

  const serviceAreaOptions = [
    { id: "noord-holland", label: "Noord-Holland" },
    { id: "zuid-holland", label: "Zuid-Holland" },
    { id: "utrecht", label: "Utrecht" },
    { id: "noord-brabant", label: "Noord-Brabant" },
    { id: "gelderland", label: "Gelderland" },
    { id: "overijssel", label: "Overijssel" },
    { id: "limburg", label: "Limburg" },
    { id: "friesland", label: "Friesland" },
    { id: "groningen", label: "Groningen" },
    { id: "drenthe", label: "Drenthe" },
    { id: "zeeland", label: "Zeeland" },
    { id: "flevoland", label: "Flevoland" },
    { id: "internationaal", label: "Internationaal" },
  ];
  
  const selectedServiceLabels = serviceOptions.filter(service => 
    selectedServices.includes(service.id)).map(service => service.label);
    
  const selectedSpecializationLabels = specializationOptions.filter(spec => 
    selectedSpecializations.includes(spec.id)).map(spec => spec.label);
    
  const selectedAreaLabels = serviceAreaOptions.filter(area => 
    selectedAreas.includes(area.id)).map(area => area.label);

  const missingRequiredFields = !watchedValues.companyName || 
    !watchedValues.kvkNumber || 
    !watchedValues.email || 
    !watchedValues.phone || 
    !watchedValues.address || 
    !watchedValues.postalCode || 
    !watchedValues.city ||
    !watchedValues.termsAgreed;

  return (
    <div className="space-y-8">
      {missingRequiredFields && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-md mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-700">Let op: Verplichte velden ontbreken</h3>
              <p className="text-red-600 text-sm">
                Ga terug naar vorige stappen om alle verplichte velden in te vullen voor u uw aanvraag indient.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-blue-50 border border-blue-100 p-4 rounded-md mb-6">
        <div className="flex items-start gap-3">
          <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-800">Controleer uw gegevens</h3>
            <p className="text-gray-600 text-sm">
              Controleer zorgvuldig alle ingevulde gegevens voordat u uw aanvraag indient. 
              U kunt teruggaan naar vorige stappen om wijzigingen aan te brengen.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-medium mb-4">Bedrijfsinformatie</h4>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                {logoPreview && (
                  <div className="border-b pb-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Logo</p>
                    <img 
                      src={logoPreview} 
                      alt="Bedrijfslogo" 
                      className="max-h-[80px] object-contain" 
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-[24px_1fr] gap-2 items-start">
                  <Building className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Bedrijfsnaam</p>
                    <p>{watchedValues.companyName || '-'}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">KvK-nummer</p>
                  <p>{watchedValues.kvkNumber || '-'}</p>
                </div>
                
                <div className="grid grid-cols-[24px_1fr] gap-2 items-start">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Website</p>
                    <p>{watchedValues.website || '-'}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Oprichtingsjaar</p>
                  <p>{watchedValues.foundedYear || '-'}</p>
                </div>
                
                <div className="grid grid-cols-[24px_1fr] gap-2 items-start">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">E-mailadres</p>
                    <p>{watchedValues.email || '-'}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-[24px_1fr] gap-2 items-start">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Telefoonnummer</p>
                    <p>{watchedValues.phone || '-'}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-[24px_1fr] gap-2 items-start">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Adres</p>
                    <p>
                      {watchedValues.address ? (
                        <>
                          {watchedValues.address}<br />
                          {watchedValues.postalCode} {watchedValues.city}
                        </>
                      ) : (
                        '-'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4">Diensten & Werkgebied</h4>
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Aangeboden diensten</p>
                  {selectedServiceLabels.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {selectedServiceLabels.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400">Geen diensten geselecteerd</p>
                  )}
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Specialisaties</p>
                  {selectedSpecializationLabels.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {selectedSpecializationLabels.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400">Geen specialisaties geselecteerd</p>
                  )}
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Werkgebied</p>
                  {selectedAreaLabels.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedAreaLabels.map((area, index) => (
                        <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">Geen werkgebieden geselecteerd</p>
                  )}
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Bedrijfsomvang</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400">Medewerkers</p>
                      <p>{watchedValues.employeeCount || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Verhuiswagens</p>
                      <p>{watchedValues.vehicleCount || '-'}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Bedrijfsomschrijving</p>
                  <p className="text-sm whitespace-pre-line">
                    {watchedValues.description || '-'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-medium mb-4">Certificering & Voorwaarden</h4>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Verzekering & Certificering</p>
                <ul className="list-inside space-y-1 mt-1">
                  <li className="flex items-center gap-2">
                    {watchedValues.insurance ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                    )}
                    <span>Aansprakelijkheidsverzekering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {watchedValues.certification ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                    )}
                    <span>Erkend Verhuisbedrijf</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">Documentatie</p>
                <ul className="list-inside space-y-1 mt-1">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span>KvK-uittreksel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span>Verzekeringscertificaat</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">Akkoordverklaring</p>
                <div className="flex items-center gap-2 mt-1">
                  {watchedValues.termsAgreed ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                  <span>
                    {watchedValues.termsAgreed 
                      ? "U bent akkoord gegaan met de voorwaarden" 
                      : "U moet akkoord gaan met de voorwaarden"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmationForm;
