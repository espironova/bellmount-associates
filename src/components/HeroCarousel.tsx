import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { type CarouselApi } from '@/components/ui/carousel';
import { Search, FileText, Shield } from 'lucide-react';
import slide1 from '@/assets/slide-1-nairobi.jpg';
import slide2 from '@/assets/slide-2-trust.webp';
import slide3 from '@/assets/slide_3.png';
import slide4 from '@/assets/slide-4-forensic.png';

interface SlideData {
  id: number;
  miniTagline: string;
  headline: string;
  subtext: string;
  serviceIcon: any;
  serviceLabel: string;
  cta: {
    text: string;
    link: string;
  };
  backgroundImage: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    miniTagline: "OUR PROMISE",
    headline: "Disentangling Numbers, Uncovering Profits",
    subtext: "With 18+ years of expertise in audit, tax, and advisory, we transform financial complexity into growth opportunities.",
    serviceIcon: Search,
    serviceLabel: "Audit & Assurance",
    cta: {
      text: "Discover Our Services",
      link: "/services"
    },
    backgroundImage: slide1,
  },
  {
    id: 2,
    miniTagline: "OUR INTEGRITY",
    headline: "Building Trust, Strengthening Governance",
    subtext: "Our governance audits and compliance reviews safeguard integrity and ensure sustainable growth.",
    serviceIcon: FileText,
    serviceLabel: "Tax Advisory",
    cta: {
      text: "Talk to an Expert",
      link: "/contact"
    },
    backgroundImage: slide2,
  },
  {
    id: 3,
    miniTagline: "OUR PEOPLE",
    headline: "Experienced Minds, Lasting Impact",
    subtext: "Led by partners and managers, we deliver trusted insights across corporates, NGOs, and SMEs.",
    serviceIcon: Search,
    serviceLabel: "Audit & Assurance",
    cta: {
      text: "Meet Our Team",
      link: "/team"
    },
    backgroundImage: slide3,
  },
  {
    id: 4,
    miniTagline: "OUR FUTURE",
    headline: "Harnessing Technology for Smarter Decisions",
    subtext: "From forensic reviews to IT audits, we help organizations stay secure, efficient, and resilient.",
    serviceIcon: Shield,
    serviceLabel: "Forensic & IT Audits",
    cta: {
      text: "Book a Consultation",
      link: "/contact"
    },
    backgroundImage: slide4,
  }
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap() + 1;
      setCurrent(newIndex);
      // Reset animations by updating key
      setAnimationKey(prev => prev + 1);
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isAutoPlaying) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [api, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide) => {
            const ServiceIcon = slide.serviceIcon;
            return (
              <CarouselItem key={slide.id}>
                <div 
                  className="relative h-screen flex items-center justify-center overflow-hidden"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    backgroundImage: `linear-gradient(rgba(10, 35, 66, 0.75), rgba(10, 35, 66, 0.85)), url(${slide.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="container-custom relative z-10 py-20">
                    <div 
                      key={`slide-${slide.id}-${animationKey}`}
                      className="max-w-4xl mx-auto text-center space-y-5"
                    >
                      {/* Mini Tagline */}
                      <div 
                        className="text-[#FFD700] font-medium text-base md:text-lg font-montserrat uppercase tracking-[0.3em]"
                        style={{
                          opacity: 0,
                          animation: 'fadeInBottom 0.6s ease-out 0.2s forwards'
                        }}
                      >
                        {slide.miniTagline}
                      </div>
                      
                      {/* Headline */}
                      <h1 
                        className="text-3xl md:text-[42px] lg:text-[50px] font-bold font-playfair text-white leading-tight px-4"
                        style={{
                          opacity: 0,
                          animation: 'slideInUp 0.8s ease-out 0.5s forwards'
                        }}
                      >
                        {slide.headline}
                      </h1>
                      
                      {/* Subtext */}
                      <p 
                        className="text-base md:text-lg lg:text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed px-4"
                        style={{
                          opacity: 0,
                          animation: 'fadeInUp 0.6s ease-out 0.9s forwards'
                        }}
                      >
                        {slide.subtext}
                      </p>
                      
                      {/* CTA Button */}
                      <div 
                        className="pt-2"
                        style={{
                          opacity: 0,
                          animation: 'fadeInUp 0.6s ease-out 1.3s forwards'
                        }}
                      >
                        <Button 
                          asChild 
                          size="lg" 
                          className="bg-[#FFD700] text-[#0A2342] hover:bg-[#FFD700]/90 font-bold px-8 py-5 text-lg rounded-xl shadow-lg hover:shadow-[#FFD700]/40 hover:scale-105 transition-all duration-300"
                        >
                          <Link to={slide.cta.link}>
                            {slide.cta.text}
                          </Link>
                        </Button>
                      </div>

                      {/* Service Icons Row */}
                      <div 
                        className="flex justify-center pt-6"
                        style={{
                          opacity: 0,
                          animation: 'floatUp 0.8s ease-out 1.7s forwards'
                        }}
                      >
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/40 shadow-lg shadow-[#FFD700]/20">
                              <Search className="w-7 h-7 md:w-7 md:h-7 text-[#FFD700]" />
                            </div>
                            <span className="text-white/80 text-xs md:text-sm font-medium">Audit & Assurance</span>
                          </div>
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/40 shadow-lg shadow-[#FFD700]/20">
                              <FileText className="w-7 h-7 md:w-7 md:h-7 text-[#FFD700]" />
                            </div>
                            <span className="text-white/80 text-xs md:text-sm font-medium">Tax Advisory</span>
                          </div>
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FFD700]/40 shadow-lg shadow-[#FFD700]/20">
                              <Shield className="w-7 h-7 md:w-7 md:h-7 text-[#FFD700]" />
                            </div>
                            <span className="text-white/80 text-xs md:text-sm font-medium">Forensic & IT Audits</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-4 md:left-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300" />
        <CarouselNext className="right-4 md:right-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300" />

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-[#FFD700] transition-all duration-300 ease-out"
            style={{ width: `${((current) / count) * 100}%` }}
          />
        </div>
      </Carousel>

      <style>{`
        @keyframes fadeInBottom {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;