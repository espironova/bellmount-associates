import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const FeaturedServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  image, 
  link 
}: FeaturedServiceCardProps) => {
  return (
    <div className="group bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4 w-12 h-12 bg-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-gold" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold font-playfair text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <Link
          to={link}
          className="inline-flex items-center space-x-2 text-gold font-medium hover:text-primary transition-colors duration-300 group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedServiceCard;