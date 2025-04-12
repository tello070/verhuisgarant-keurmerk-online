
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, Upload, FileLock } from 'lucide-react';

interface CertificationFormProps {
  form: UseFormReturn<any>;
}

const CertificationForm: React.FC<CertificationFormProps> = ({ form }) => {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
        <div className="flex items-start gap-3">
          <Shield className="h-6 w-6 text-brand-blue mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Certificeringsinformatie</h3>
            <p className="text-gray-600">
              Om het Verhuisgarant keurmerk te ontvangen, moet uw bedrijf voldoen aan onze kwaliteitseisen. 
              U dient te beschikken over een geldige bedrijfsverzekering en relevante certificeringen in de verhuisbranche.
              Daarnaast vragen wij u akkoord te gaan met onze gedragscode en voorwaarden.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Verzekering & Certificering</h4>
        <Card>
          <CardContent className="p-6 space-y-6">
            <FormField
              control={form.control}
              name="insurance"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div>
                    <FormLabel className="font-medium cursor-pointer">
                      Aansprakelijkheidsverzekering
                    </FormLabel>
                    <FormDescription>
                      Ons bedrijf beschikt over een geldige bedrijfsaansprakelijkheidsverzekering en een transportverzekering voor goederen.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="certification"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div>
                    <FormLabel className="font-medium cursor-pointer">
                      Erkend Verhuisbedrijf
                    </FormLabel>
                    <FormDescription>
                      Ons bedrijf is aangesloten bij een erkende branchevereniging of heeft relevante certificeringen (zoals NIWO, ISO, etc.).
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Documentatie</h4>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">KvK-uittreksel</label>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-5 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <FileCheck className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Sleep uw KvK-uittreksel hierheen of klik om te uploaden
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, DOC of DOCX (max. 5MB)
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Verzekeringscertificaat</label>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-5 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <FileLock className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Sleep uw verzekeringscertificaat hierheen of klik om te uploaden
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, DOC of DOCX (max. 5MB)
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Aanvullende certificaten (optioneel)</label>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-5 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    multiple
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Sleep aanvullende certificaten hierheen of klik om te uploaden
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, DOC, DOCX, JPG of PNG (max. 10MB)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Kwaliteitsgarantie & Voorwaarden</h4>
        <Card>
          <CardContent className="p-6">
            <FormField
              control={form.control}
              name="termsAgreed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      required
                    />
                  </FormControl>
                  <div className="space-y-1">
                    <FormLabel className="font-medium cursor-pointer">
                      Akkoordverklaring *
                    </FormLabel>
                    <FormDescription>
                      Ik verklaar hierbij dat:
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>Alle verstrekte informatie naar waarheid is ingevuld</li>
                        <li>Ons bedrijf zich houdt aan de Verhuisgarant kwaliteitseisen en gedragscode</li>
                        <li>Wij akkoord gaan met periodieke kwaliteitscontroles</li>
                        <li>Wij de jaarlijkse bijdrage zullen voldoen bij acceptatie</li>
                        <li>Wij akkoord gaan met de <a href="#" className="text-brand-blue hover:underline">algemene voorwaarden</a> en <a href="#" className="text-brand-blue hover:underline">privacyverklaring</a></li>
                      </ul>
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CertificationForm;
