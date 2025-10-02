import React from 'react';
import icpakLogo from '../assets/icpak-logo.png';
import kncciLogo from '../assets/kncci-logo.png';
import kraLogo from '../assets/kra-logo.png';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

const PartnershipsSection = () => {
  const partners: Partner[] = [
    {
      name: 'ICPAK',
      logo: icpakLogo,
      description: 'Institute of Certified Public Accountants of Kenya'
    },
    {
      name: 'KNCCI',
      logo: kncciLogo,
      description: 'Kenya National Chamber of Commerce & Industry'
    },
    {
      name: 'KRA',
      logo: kraLogo,
      description: 'Kenya Revenue Authority'
    },
    // Duplicate for continuous scrolling effect
    {
      name: 'ICPAK',
      logo: icpakLogo,
      description: 'Institute of Certified Public Accountants of Kenya'
    },
    {
      name: 'KNCCI',
      logo: kncciLogo,
      description: 'Kenya National Chamber of Commerce & Industry'
    },
    {
      name: 'KRA',
      logo: kraLogo,
      description: 'Kenya Revenue Authority'
    }
  ];

  return (
    <section className="section-padding bg-muted/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-primary font-playfair">
            Partnerships and Affiliations
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Building strong relationships with leading professional bodies and institutions across Kenya
          </p>
        </div>

        {/* Continuous Sliding Container */}
        <div className="relative overflow-hidden rounded-2xl bg-background border border-border py-8">
          {/* Sliding Animation */}
          <div className="flex animate-slide-right-to-left">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-72 h-40 mx-8 bg-background border border-border rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-gold/40 group cursor-pointer"
              >
                <div className="text-center p-6">
                  <div className="mb-3 flex items-center justify-center h-16">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-lg font-bold text-primary group-hover:text-gold transition-colors duration-300 font-montserrat mb-2">
                    {partner.name}
                  </div>
                  <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-tight">
                    {partner.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-muted/5 via-muted/5 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-muted/5 via-muted/5 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Committed to maintaining the highest professional standards through strategic partnerships
          </p>
        </div>
      </div>

    </section>
  );
};

export default PartnershipsSection;
