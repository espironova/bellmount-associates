import { LucideIcon } from 'lucide-react';

interface CoreServiceCardProps {
  icon: LucideIcon;
  title: string;
  impactStatement: string;
}

const CoreServiceCard = ({ 
  icon: Icon, 
  title, 
  impactStatement 
}: CoreServiceCardProps) => {
  return (
    <div className="group bg-background border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Icon */}
      <div className="w-16 h-16 bg-background border-2 border-gold rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold/10 group-hover:shadow-lg group-hover:shadow-gold/20">
        <Icon className="w-8 h-8 text-gold transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--gold))]" />
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-semibold font-playfair text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      
      {/* Impact Statement */}
      <p className="text-muted-foreground leading-relaxed text-base">
        {impactStatement}
      </p>
    </div>
  );
};

export default CoreServiceCard;