
import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "De Jong Verhuizingen",
      location: "Amsterdam",
      quote: "Sinds we het Verhuisgarant keurmerk dragen, is onze omzet met 35% gestegen. Klanten kiezen bewust voor de zekerheid die het keurmerk biedt.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1600518464441-9306b00c3309?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Van Dijk Transport",
      location: "Rotterdam",
      quote: "Het certificeringsproces was grondig maar zeer waardevol. Het heeft ons geholpen onze processen te verbeteren en onze professionaliteit te verhogen.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Bakker Verhuizers",
      location: "Utrecht",
      quote: "De zichtbaarheid die we krijgen via het Verhuisgarant platform heeft ons talloze nieuwe klanten opgeleverd. Een investering die zichzelf terugverdient.",
      stars: 4,
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=100"
    }
  ];
  
  return (
    <section className="bg-brand-blue text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Wat zeggen onze gecertificeerde bedrijven?</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-white/80">
          Ontdek waarom honderden verhuisbedrijven hebben gekozen voor het Verhuisgarant keurmerk en de voordelen die het hen heeft gebracht.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-gray-800 relative">
              <div className="absolute -top-4 -left-4 bg-brand-orange rounded-full p-2 shadow-md">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill={i < testimonial.stars ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-medium mb-6">
            Word onderdeel van de groeiende gemeenschap van gecertificeerde verhuisbedrijven.
          </p>
          <button className="cta-gradient px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
            Aanmelden voor certificering
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
