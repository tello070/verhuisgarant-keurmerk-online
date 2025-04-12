
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Truck } from 'lucide-react';

interface ServicesFormProps {
  form: UseFormReturn<any>;
}

const ServicesForm: React.FC<ServicesFormProps> = ({ form }) => {
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

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-medium mb-4">Verhuisdiensten</h4>
        <p className="text-sm text-gray-500 mb-4">
          Selecteer alle diensten die uw bedrijf aanbiedt
        </p>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceOptions.map((service) => (
                <FormField
                  key={service.id}
                  control={form.control}
                  name="services"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={service.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(service.id)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...field.value, service.id]
                                : field.value?.filter(
                                    (value: string) => value !== service.id
                                  );
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          {service.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Specialisaties</h4>
        <p className="text-sm text-gray-500 mb-4">
          Selecteer eventuele specialisaties van uw verhuisbedrijf
        </p>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specializationOptions.map((specialization) => (
                <FormField
                  key={specialization.id}
                  control={form.control}
                  name="specializations"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={specialization.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(specialization.id)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...field.value, specialization.id]
                                : field.value?.filter(
                                    (value: string) => value !== specialization.id
                                  );
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          {specialization.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Werkgebied</h4>
        <p className="text-sm text-gray-500 mb-4">
          Selecteer de provincies waarin uw bedrijf actief is
        </p>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {serviceAreaOptions.map((area) => (
                <FormField
                  key={area.id}
                  control={form.control}
                  name="serviceArea"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={area.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(area.id)}
                            onCheckedChange={(checked) => {
                              const updatedValue = checked
                                ? [...field.value, area.id]
                                : field.value?.filter(
                                    (value: string) => value !== area.id
                                  );
                              field.onChange(updatedValue);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          {area.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Bedrijfsomvang</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="employeeCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aantal medewerkers</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="number" 
                      placeholder="5" 
                      {...field} 
                      className="pl-10"
                    />
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vehicleCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aantal verhuiswagens</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="number" 
                      placeholder="3" 
                      {...field} 
                      className="pl-10"
                    />
                    <Truck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Bedrijfsomschrijving</h4>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Beschrijf kort uw bedrijf en diensten</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Geef hier een omschrijving van uw verhuisbedrijf..." 
                  {...field} 
                  rows={5}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Deze tekst kan gebruikt worden op uw Verhuisgarant-profielpagina
              </FormDescription>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ServicesForm;
