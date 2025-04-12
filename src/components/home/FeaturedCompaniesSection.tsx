
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const FeaturedCompaniesSection = () => {
  const companies = [
    {
      name: "Verhuisbedrijf Amsterdam",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=100",
      location: "Amsterdam, Noord-Holland",
      rating: 4.9,
      reviewCount: 127,
      specialties: ["Woningverhuizing", "Kantoorverhuizing", "Inpakservice"]
    },
    {
      name: "Rotterdam Verhuizers",
      logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=100",
      location: "Rotterdam, Zuid-Holland",
      rating: 4.8,
      reviewCount: 95,
      specialties: ["Internationaal verhuizen", "Pianovervoer", "Opslag"]
    },
    {
      name: "Vakverhuizers Utrecht",
      logo: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?auto=format&fit=crop&q=80&w=100",
      location: "Utrecht, Utrecht",
      rating: 4.7,
      reviewCount: 82,
      specialties: ["Seniorenverhuizing", "Studentenverhuizing", "Meubelopslag"]
    }
  ];
  
  return (
    <section className="section-container">
      <h2 className="section-title">Uitgelichte gecertificeerde bedrijven</h2>
      <p className="section-subtitle">
        Bekijk enkele van onze hoogst aangeschreven gecertificeerde verhuisbedrijven die voldoen aan de strenge normen van Verhuisgarant.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {companies.map((company, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="bg-brand-blue p-4 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white mr-4 flex-shrink-0">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h3 className="font-semibold text-lg leading-tight">{company.name}</h3>
                <div className="flex items-center mt-1">
                  <MapPin className="h-3.5 w-3.5 text-white/80 mr-1" />
                  <span className="text-sm text-white/80">{company.location}</span>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(company.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill={i < Math.floor(company.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{company.rating}</span>
                <span className="text-sm text-gray-500 ml-2">({company.reviewCount} beoordelingen)</span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Specialiteiten:</h4>
                <div className="flex flex-wrap gap-2">
                  {company.specialties.map((specialty, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>Bellen</span>
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span>Offerte</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center text-brand-blue">
                  <span>Details</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button size="lg" className="cta-gradient">
          Alle gecertificeerde bedrijven bekijken
        </Button>
      </div>
    </section>
  );
};

export default FeaturedCompaniesSection;
