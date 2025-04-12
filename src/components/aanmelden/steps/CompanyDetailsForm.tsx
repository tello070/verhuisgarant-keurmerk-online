
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, Globe, Phone, Mail, MapPin, Upload } from 'lucide-react';

interface CompanyDetailsFormProps {
  form: UseFormReturn<any>;
  logoPreview: string | null;
  handleLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = ({ 
  form, 
  logoPreview, 
  handleLogoUpload 
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-medium mb-4">Algemene informatie</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrijfsnaam *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Uw bedrijfsnaam" 
                      {...field} 
                      required 
                      className="pl-10"
                    />
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="kvkNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>KvK-nummer *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="12345678" 
                    {...field} 
                    required 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="www.uwbedrijf.nl" 
                      {...field}
                      className="pl-10"
                    />
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="foundedYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Oprichtingsjaar</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="2010" 
                      type="number" 
                      {...field} 
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-medium mb-4">Contactgegevens</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mailadres *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="email" 
                      placeholder="info@uwbedrijf.nl" 
                      {...field} 
                      required 
                      className="pl-10"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefoonnummer *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="020 123 4567" 
                      {...field} 
                      required 
                      className="pl-10"
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-medium mb-4">Adresgegevens</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adres *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Straatnaam 123" 
                      {...field} 
                      required 
                      className="pl-10"
                    />
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="1234 AB" 
                      {...field} 
                      required 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plaats *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Amsterdam" 
                      {...field} 
                      required 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-medium mb-4">Bedrijfslogo</h4>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">
                  Upload uw bedrijfslogo
                </label>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Sleep uw logo hierheen of klik om te uploaden
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG of SVG (max. 5MB)
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Voorbeeld</label>
                <div className="border border-gray-200 rounded-lg flex items-center justify-center p-4 h-[150px] bg-gray-50">
                  {logoPreview ? (
                    <img 
                      src={logoPreview} 
                      alt="Bedrijfslogo" 
                      className="max-h-full max-w-full object-contain" 
                    />
                  ) : (
                    <p className="text-sm text-gray-400">
                      Geen logo geüpload
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyDetailsForm;
