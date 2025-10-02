import { Link } from 'react-router-dom';
import { Scale, Calculator, Lightbulb, Laptop, Clock, Handshake, Globe, Building, ArrowRight } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import ClientCarousel from '../components/ClientCarousel';
import { useCountUp } from '../hooks/useCountUp';
import nairobiOverview from '../assets/nairobi-overview.jpg';

const Home = () => {
  const services = [
    {
      icon: Scale,
      title: 'Audit & Assurance',
      description: 'Independent, objective reviews that enhance financial clarity, strengthen compliance, and build stakeholder trust.',
      link: '/services/audit',
      color: 'gold' as const,
    },
    {
      icon: Calculator,
      title: 'Tax Advisory',
      description: 'Strategic planning and compliance services designed to optimize tax efficiency and mitigate regulatory risks.',
      link: '/services/tax',
      color: 'gold' as const,
    },
    {
      icon: Laptop,
      title: 'Forensic & IT Audits',
      description: 'IT audits, forensic reviews, and system evaluations that ensure compliance, security, and smarter decision-making.',
      link: '/services/technology',
      color: 'gold' as const,
    },
  ];

  const stats = [
    { number: 18, suffix: '+', label: 'Years of Experience', icon: Clock },
    { number: 100, suffix: '+', label: 'Clients Served', icon: Handshake },
    { number: 12, suffix: '+', label: 'Sectors Covered', icon: Globe },
    { number: 3, suffix: '', label: 'Core Practice Areas', icon: Building },
  ];

  const CountingStats = () => {
    const counter1 = useCountUp({ end: stats[0].number, suffix: stats[0].suffix, duration: 2000 });
    const counter2 = useCountUp({ end: stats[1].number, suffix: stats[1].suffix, duration: 2000 });
    const counter3 = useCountUp({ end: stats[2].number, suffix: stats[2].suffix, duration: 2000 });
    const counter4 = useCountUp({ end: stats[3].number, suffix: stats[3].suffix, duration: 2000 });

    const counters = [counter1, counter2, counter3, counter4];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center counter-card">
              <div className="w-20 h-20 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center counter-icon">
                <IconComponent className="w-10 h-10 text-gold" />
              </div>
              <div 
                ref={counters[index].elementRef}
                className="text-5xl md:text-6xl font-bold text-gold font-playfair mb-3"
              >
                {counters[index].count}
              </div>
              <div className="text-muted-foreground font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Professional Excellence Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-section-title-with-underline text-primary">
                Professional Excellence in Financial Services
              </h2>
              <div className="space-y-4">
                <p className="text-lead">
                  Bell-Mount & Associates is a professional services firm offering a full range of Audit, Tax, and Advisory solutions for domestic and international clients.
                </p>
                <p className="text-lead">
                  We design management solutions that effectively address complex business challenges, create measurable value, and support long-term growth.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-secondary font-medium hover:text-accent transition-colors duration-200 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Image */}
            <div className="lg:order-2">
              <div className="relative">
                <img 
                  src={nairobiOverview} 
                  alt="Nairobi skyline representing Bell Mount & Associates local expertise"
                  className="w-full h-[400px] object-cover rounded-xl shadow-[var(--shadow-professional)]"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-20 bg-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-section-title-with-underline">
              Our Core Services
            </h2>
            <p className="text-lead max-w-3xl mx-auto mt-6">
              Tailored audit, tax, and forensic solutions that build trust and resilience.
            </p>
          </div>
          
          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Book Consultation CTA */}
          <div className="text-center animate-fade-in-up">
            <Link
              to="/contact"
              className="btn-consultation-gold inline-flex items-center space-x-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner with Us - Enhanced Metrics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title-with-underline text-primary mx-auto">
              Why Partner with Us
            </h2>
            <p className="text-lead max-w-3xl mx-auto mt-6">
              Trusted expertise backed by years of experience and proven results across diverse industries.
            </p>
          </div>
          <CountingStats />
        </div>
      </section>

      {/* Managing Partner's Message */}
      <section className="py-16 bg-background border-t border-gold/20">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h3 className="text-3xl md:text-4xl font-playfair text-primary mb-2">
              Steve Muru
            </h3>
            <p className="text-lg text-gold font-medium">
              Message from Our Managing Partner
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-lg md:text-xl leading-relaxed text-foreground font-open-sans mb-6 italic">
              "At Bell-Mount & Associates, we believe every number tells a story. Our role is to translate that story into insight, growth, and resilience for our clients."
            </blockquote>
            <cite className="block text-base font-medium text-primary font-montserrat">
              — Steve Muru, Managing Partner
            </cite>
          </div>
        </div>
      </section>

      {/* Our Valued Clients */}
      <ClientCarousel />
    </div>
  );
};

export default Home;