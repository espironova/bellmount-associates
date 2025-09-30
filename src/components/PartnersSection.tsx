import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Globe, 
  Shield, 
  Handshake,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Partner logos and information - you can replace these with actual partner data
  const partners = [
    {
      name: 'ICPAK',
      logo: 'ICPAK',
      description: 'Institute of Certified Public Accountants of Kenya',
      category: 'Professional Body',
      website: '#'
    },
    {
      name: 'ACCA',
      logo: 'ACCA',
      description: 'Association of Chartered Certified Accountants',
      category: 'International Certification',
      website: '#'
    },
    {
      name: 'World Bank',
      logo: 'WB',
      description: 'Global Development Partner',
      category: 'Development Partner',
      website: '#'
    },
    {
      name: 'USAID',
      logo: 'USAID',
      description: 'United States Agency for International Development',
      category: 'Development Partner',
      website: '#'
    },
    {
      name: 'EU Development',
      logo: 'EU',
      description: 'European Union Development Programs',
      category: 'Development Partner',
      website: '#'
    },
    {
      name: 'UN Agencies',
      logo: 'UN',
      description: 'United Nations Development Programs',
      category: 'International Organization',
      website: '#'
    },
    {
      name: 'KCB Bank',
      logo: 'KCB',
      description: 'Kenya Commercial Bank',
      category: 'Financial Institution',
      website: '#'
    },
    {
      name: 'Equity Bank',
      logo: 'EQB',
      description: 'Equity Bank Kenya',
      category: 'Financial Institution',
      website: '#'
    }
  ];

  const partnersPerSlide = 4;
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, isVisible]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-background via-muted/5 to-background overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="gold-accent-line mx-auto mb-8"></div>
          <h2 className="text-section-title text-primary font-playfair mb-6">
            Our Partners
          </h2>
          <p className="text-lead text-muted-foreground max-w-3xl mx-auto">
            Trusted partnerships with leading organizations, professional bodies, and development partners
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300 shadow-lg -translate-x-6"
          >
            <ChevronLeft className="w-5 h-5 text-gold" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300 shadow-lg translate-x-6"
          >
            <ChevronRight className="w-5 h-5 text-gold" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {partners.slice(slideIndex * partnersPerSlide, (slideIndex + 1) * partnersPerSlide).map((partner, index) => (
                      <div
                        key={partner.name}
                        className={`group transition-all duration-700 ease-out ${
                          isVisible
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        {/* Partner Card */}
                        <div className="relative bg-background border border-border rounded-2xl p-6 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
                          {/* Partner Logo */}
                          <div className="w-full h-24 bg-muted/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                            <div className="text-2xl font-bold text-muted-foreground group-hover:text-gold transition-colors duration-300 font-montserrat">
                              {partner.logo}
                            </div>
                          </div>
                          
                          {/* Partner Info */}
                          <div className="text-center">
                            <h3 className="text-lg font-semibold text-foreground font-montserrat mb-2 group-hover:text-gold transition-colors duration-300">
                              {partner.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                              {partner.description}
                            </p>
                            
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-1 px-3 py-1 bg-muted/30 text-muted-foreground text-xs rounded-full group-hover:bg-gold/20 group-hover:text-gold transition-colors duration-300">
                              <Star className="w-3 h-3" />
                              {partner.category}
                            </div>
                          </div>

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'bg-gold w-8 h-3 shadow-lg shadow-gold/30' 
                    : 'bg-muted-foreground/30 w-3 h-3 hover:bg-muted-foreground/50 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 ease-out ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <Handshake className="w-6 h-6 text-gold" />
            <span className="text-lg font-medium">
              Partnering with {partners.length}+ leading organizations across East Africa
            </span>
            <Handshake className="w-6 h-6 text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;