import { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

interface ServiceAccordionProps {
  title: string;
  description: string;
  services: string[];
  isOpen: boolean;
  onToggle: () => void;
  color?: string;
}

const ServiceAccordion = ({ 
  title, 
  description, 
  services, 
  isOpen, 
  onToggle,
  color = 'gold'
}: ServiceAccordionProps) => {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-background">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-300"
      >
        <div>
          <h3 className="text-xl font-semibold font-playfair text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gold transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-3 p-3 rounded-lg bg-muted/10 transition-all duration-300 hover:bg-muted/20 ${
                  isOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAccordion;