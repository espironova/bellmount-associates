import { useState } from 'react';
import { LucideIcon, ChevronDown, CheckCircle } from 'lucide-react';

interface ExpandableServiceCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandableServiceCard = ({ 
  icon: Icon, 
  title, 
  tagline,
  description,
  offerings,
  isExpanded, 
  onToggle 
}: ExpandableServiceCardProps) => {
  return (
    <div className={`group bg-background border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
      isExpanded ? 'border-gold shadow-lg shadow-gold/10' : 'border-border shadow-sm'
    }`}>
      {/* Card Header (always visible) */}
      <div onClick={onToggle} className="p-8">
        {/* Icon */}
        <div className={`w-16 h-16 bg-background border-2 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          isExpanded ? 'border-gold bg-gold/5' : 'border-gold group-hover:bg-gold/10'
        }`}>
          <Icon className={`w-8 h-8 text-gold transition-all duration-300 ${
            isExpanded ? 'drop-shadow-[0_0_8px_hsl(var(--gold))] scale-110' : 'group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--gold))]'
          }`} />
        </div>
        
        {/* Title and Tagline */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className={`text-2xl font-semibold font-playfair mb-3 transition-colors duration-300 ${
              isExpanded ? 'text-gold' : 'text-foreground group-hover:text-gold'
            }`}>
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              {tagline}
            </p>
          </div>
          <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ml-4 flex-shrink-0 ${
            isExpanded ? 'rotate-180' : ''
          }`} />
        </div>
      </div>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 pb-8">
          <div className="border-t border-border pt-6">
            {/* Description */}
            <p className="text-foreground mb-6 leading-relaxed">
              {description}
            </p>
            
            {/* Offerings */}
            <div className="space-y-3">
              {offerings.map((offering, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-300 ${
                    isExpanded ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableServiceCard;