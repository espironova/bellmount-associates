import { useEffect, useState } from 'react';

interface ClientCarouselProps {
  variant?: 'homepage' | 'services' | 'about' | 'team';
  heading?: string;
  subtext?: string;
  speed?: number;
  className?: string;
}

const ClientCarousel = ({ 
  variant = 'homepage',
  heading,
  subtext,
  speed = 3000,
  className = ''
}: ClientCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { name: 'World Bank', logo: 'WB' },
    { name: 'USAID', logo: 'USAID' },
    { name: 'UN Women', logo: 'UN' },
    { name: 'UNDP', logo: 'UNDP' },
    { name: 'Government of Kenya', logo: 'GOK' },
    { name: 'County Governments', logo: 'CG' },
    { name: 'Banking Sector', logo: 'BS' },
    { name: 'Insurance Companies', logo: 'IC' },
    { name: 'NGO Partners', logo: 'NGO' },
    { name: 'SME Clients', logo: 'SME' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 5));
    }, speed);

    return () => clearInterval(interval);
  }, [clients.length, speed]);

  const getVisibleClients = () => {
    const startIndex = currentIndex * 5;
    return clients.slice(startIndex, startIndex + 5).concat(
      clients.slice(0, Math.max(0, startIndex + 5 - clients.length))
    );
  };

  // Default content based on variant
  const defaultContent = {
    homepage: {
      heading: "Our Valued Clients",
      subtext: "Proud to serve leading organizations across Kenya and East Africa with excellence and integrity"
    },
    services: {
      heading: "Our Valued Clients", 
      subtext: "Building lasting partnerships with leading organizations across diverse sectors and industries"
    },
    about: {
      heading: "Organizations We've Worked With",
      subtext: "Building lasting partnerships with clients across diverse sectors and industries"
    },
    team: {
      heading: "Our Valued Clients",
      subtext: "We proudly serve a diverse portfolio of clients across public, private, and development sectors"
    }
  };

  const content = defaultContent[variant];
  const displayHeading = heading || content.heading;
  const displaySubtext = subtext || content.subtext;

  // Variant-specific styling
  const getBackgroundClass = () => {
    switch (variant) {
      case 'homepage': return 'bg-muted/5';
      case 'services': return 'bg-background';
      case 'about': return 'bg-muted/20';
      case 'team': return 'bg-muted/5';
      default: return 'bg-muted/5';
    }
  };

  const getLogoSize = () => {
    switch (variant) {
      case 'about': return 'w-36 h-24'; // Larger for about page
      case 'services': return 'w-32 h-20';
      default: return 'w-32 h-20';
    }
  };

  const getSpacing = () => {
    switch (variant) {
      case 'about': return 'space-x-12'; // More generous spacing
      default: return 'space-x-8';
    }
  };

  return (
    <section className={`section-padding ${getBackgroundClass()} ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-primary font-playfair">
            {displayHeading}
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            {displaySubtext}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          {/* Sliding Animation Container */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(clients.length / 5) }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-full flex-shrink-0 justify-center items-center space-x-8">
                {clients.slice(slideIndex * 5, slideIndex * 5 + 5).map((client, index) => (
                  <div
                    key={`${client.name}-${slideIndex}-${index}`}
                    className={`flex-shrink-0 ${getLogoSize()} bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:scale-110 hover:border-gold/40 group cursor-pointer grayscale hover:grayscale-0 hover:-translate-y-2`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: currentIndex === slideIndex ? 'scale(1)' : 'scale(0.95)'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-muted-foreground group-hover:text-gold transition-colors duration-300 font-montserrat">
                        {client.logo}
                      </div>
                      <div className="text-xs text-muted-foreground/70 mt-1 group-hover:text-muted-foreground transition-colors duration-300">
                        {client.name.length > 12 ? client.name.substring(0, 12) + '...' : client.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Enhanced Gradient Fade Edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Enhanced Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: Math.ceil(clients.length / 5) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'bg-gold w-8 h-3 shadow-lg shadow-gold/30' 
                  : 'bg-muted-foreground/30 w-3 h-3 hover:bg-muted-foreground/50 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;