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
import slide1 from '@/assets/slide_1.png';
import slide2 from '@/assets/slide_2.png';
import slide3 from '@/assets/slide_3.png';
import slide4 from '@/assets/slide_4.png';

interface SlideData {
  id: number;
  miniTagline: string;
  headline: string;
  subtext: string;
  cta: {
    text: string;
    link: string;
  };
  backgroundImage: string;
  animationClass: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    miniTagline: "OUR PROMISE",
    headline: "Dissecting Numbers, Uncovering Profits",
    subtext: "With over 18 years of expertise in audit, tax, and advisory, we transform financial complexity into growth opportunities.",
    cta: {
      text: "Discover Our Services",
      link: "/services"
    },
    backgroundImage: slide1,
    animationClass: "slide-1-animation"
  },
  {
    id: 2,
    miniTagline: "OUR INTEGRITY",
    headline: "Building Trust, Strengthening Governance",
    subtext: "Our governance audits and compliance reviews safeguard your organization's integrity and long-term success.",
    cta: {
      text: "Talk to an Expert",
      link: "/contact"
    },
    backgroundImage: slide2,
    animationClass: "slide-1-animation"
  },
  {
    id: 3,
    miniTagline: "OUR PEOPLE",
    headline: "Experienced Minds, Lasting Impact",
    subtext: "Our partners and managers bring decades of experience in audits, tax, and advisory — trusted by corporates, NGOs, and SMEs alike.",
    cta: {
      text: "Meet Our Experts",
      link: "/team"
    },
    backgroundImage: slide3,
    animationClass: "slide-1-animation"
  },
  {
    id: 4,
    miniTagline: "OUR FUTURE",
    headline: "Harnessing Technology for Smarter Decisions",
    subtext: "From IT and forensic audits to system reviews, we integrate technology to ensure compliance, efficiency, and resilience.",
    cta: {
      text: "Book a Consultation",
      link: "/contact"
    },
    backgroundImage: slide4,
    animationClass: "slide-1-animation"
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
    }, 5000);

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
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div 
                className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7), rgba(74, 144, 226, 0.5)), url(${slide.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                <div 
                  key={`slide-${slide.id}-${animationKey}`}
                  className={`max-w-4xl mx-auto text-center ${slide.animationClass}`}
                >
                    {/* Mini Tagline */}
                    <div className="mini-tagline text-accent font-medium text-sm md:text-base mb-4 font-montserrat uppercase tracking-[0.2em]">
                      {slide.miniTagline}
                    </div>
                    
                    {/* Headline */}
                    <h1 className="headline text-hero mb-6 font-montserrat text-primary-foreground font-bold">
                      {slide.headline}
                    </h1>
                    
                    {/* Subtext */}
                    <p className="subtext text-lead mb-8 max-w-3xl mx-auto text-primary-foreground/90">
                      {slide.subtext}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="cta-button">
                      <Button 
                        asChild 
                        size="lg" 
                        className="btn-hero-cta font-semibold px-8 py-4"
                      >
                        <Link to={slide.cta.link}>
                          {slide.cta.text}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-8 bg-background/20 border-primary-foreground/20 text-primary-foreground hover:bg-background/40" />
        <CarouselNext className="right-8 bg-background/20 border-primary-foreground/20 text-primary-foreground hover:bg-background/40" />

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current - 1 
                  ? 'bg-accent scale-125' 
                  : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;