import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  color?: 'primary' | 'secondary' | 'accent' | 'gold';
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  color = 'primary' 
}: ServiceCardProps) => {
  const colorClasses = {
    primary: 'text-primary group-hover:bg-primary group-hover:text-primary-foreground',
    secondary: 'text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground',
    accent: 'text-accent group-hover:bg-accent group-hover:text-accent-foreground',
    gold: 'text-gold group-hover:bg-gold/10 group-hover:text-gold group-hover:shadow-gold'
  };

  return (
    <div className="service-card-enhanced group">
      <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-background border-2 border-border flex items-center justify-center transition-all duration-300 service-icon-container ${colorClasses[color]}`}>
        <Icon className="w-10 h-10 transition-all duration-300" />
      </div>
      
      <h3 className="text-2xl font-semibold mb-6 font-playfair text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-8 leading-relaxed text-base">
        {description}
      </p>
      
      <Link
        to={link}
        className="inline-flex items-center space-x-2 text-gold font-medium hover:text-primary transition-colors duration-300 group/link"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;