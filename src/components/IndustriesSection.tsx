import React from 'react';
import { 
  Building2, 
  Users, 
  Building, 
  BarChart3, 
  Globe, 
  Laptop,
  Factory,
  BriefcaseIcon,
  TrendingUp,
  Heart,
  ShieldCheck,
  Zap,
  ChevronDown
} from 'lucide-react';

interface Industry {
  icon: React.ComponentType<any>;
  name: string;
  description: string;
  sectors: string[];
  highlight?: boolean;
}

interface IndustriesSectionProps {
  variant?: 'about' | 'services' | 'about-simple';
  title?: string;
  subtitle?: string;
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  variant = 'about',
  title = "Industries We Serve",
  subtitle = "From global organizations to local enterprises, Bell-Mount delivers trusted solutions across diverse industries"
}) => {
  const industries: Industry[] = [
    {
      icon: Building2,
      name: 'Banking & Finance',
      description: 'Comprehensive financial services including regulatory compliance, risk management, and strategic advisory.',
      sectors: ['Commercial Banks', 'Microfinance', 'Investment Firms', 'Insurance'],
      highlight: true
    },
    {
      icon: Users,
      name: 'NGOs & Development',
      description: 'Specialized support for development organizations with donor compliance and impact measurement.',
      sectors: ['International NGOs', 'Local CBOs', 'Development Partners', 'Social Enterprises'],
      highlight: true
    },
    {
      icon: BriefcaseIcon,
      name: 'Public Sector',
      description: 'Government institutions and parastatals requiring transparency, accountability, and regulatory compliance.',
      sectors: ['Government Agencies', 'Parastatals', 'County Governments', 'Public Utilities']
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Industrial and manufacturing companies across Kenya and East Africa seeking operational excellence.',
      sectors: ['FMCG', 'Textiles', 'Food Processing', 'Industrial Equipment']
    },
    {
      icon: BarChart3,
      name: 'SMEs & Startups',
      description: 'Growing businesses requiring scalable financial systems and strategic guidance for expansion.',
      sectors: ['Tech Startups', 'Retail Businesses', 'Service Companies', 'Family Businesses'],
      highlight: true
    },
    {
      icon: Globe,
      name: 'Technology & Services',
      description: 'Digital transformation companies and service providers navigating rapid growth and compliance.',
      sectors: ['Fintech', 'Software Companies', 'Telecommunications', 'Professional Services']
    }
  ];

  // Simple two-column layout for about-simple variant
  if (variant === 'about-simple') {
    return (
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="gold-accent-line mx-auto mb-8"></div>
            <h2 className="text-section-title text-primary font-playfair mb-6">
              {title}
            </h2>
            <p className="text-lead text-muted-foreground max-w-4xl mx-auto">
              {subtitle}
            </p>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="flex items-start space-x-4 p-6 bg-background border border-border rounded-2xl hover:border-gold/30 hover:shadow-lg transition-all duration-300 stagger-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon - Left Aligned */}
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-6 h-6 text-gold" />
                </div>
                
                {/* Content - Right Side */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground font-montserrat mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section-padding ${variant === 'about' ? 'bg-background' : 'bg-gradient-to-br from-background via-muted/5 to-background'}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          {variant === 'about' && <div className="gold-accent-line mx-auto mb-8"></div>}
          <h2 className={`${variant === 'about' ? 'text-section-title' : 'text-section-title-with-underline'} text-primary font-playfair mb-6`}>
            {title}
          </h2>
          <p className="text-lead text-muted-foreground max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Simplified Industries Grid with Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="relative group stagger-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Industry Card */}
              <div
                className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  industry.highlight 
                    ? 'bg-gradient-to-br from-background to-gold/5 border-gold/20 hover:border-gold/40' 
                    : 'bg-background border-border hover:border-gold/30'
                } group-hover:border-gold group-hover:shadow-xl`}
              >
                {/* Highlight Badge */}
                {industry.highlight && (
                  <div className="absolute -top-2 -right-2 bg-gold text-primary px-2 py-1 rounded-full text-xs font-semibold">
                    <Zap className="w-3 h-3" />
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  industry.highlight 
                    ? 'bg-gold/20 group-hover:bg-gold/30' 
                    : 'bg-muted/50 group-hover:bg-gold/10'
                }`}>
                  <industry.icon className={`w-6 h-6 transition-all duration-300 ${
                    industry.highlight 
                      ? 'text-gold group-hover:scale-110' 
                      : 'text-muted-foreground group-hover:text-gold'
                  }`} />
                </div>
                
                {/* Industry Name */}
                <h3 className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors duration-300 mb-2">
                  {industry.name}
                </h3>
                
                {/* Hover Indicator */}
                <ChevronDown className="w-4 h-4 mx-auto text-muted-foreground group-hover:text-gold transition-all duration-300 group-hover:translate-y-1" />
              </div>

              {/* Hover Content */}
              <div className="absolute top-full left-0 right-0 z-50 mt-2 p-6 bg-background border border-gold/20 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Sectors */}
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-gold" />
                      Key Sectors
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.sectors.map((sector, sectorIndex) => (
                        <span
                          key={sectorIndex}
                          className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md hover:bg-gold/10 hover:text-gold transition-colors duration-300"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;