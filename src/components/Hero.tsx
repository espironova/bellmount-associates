import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  variant?: 'default' | 'secondary';
  backgroundImage?: string;
  fullScreen?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  children, 
  variant = 'default',
  backgroundImage,
  fullScreen = false
}: HeroProps) => {
  const baseClasses = variant === 'default' ? 'wave-bg' : 'bg-secondary/10';
  const heightClasses = fullScreen 
    ? 'h-screen flex items-center justify-center -mt-16 pt-16 sm:-mt-20 sm:pt-20' 
    : 'py-12 sm:py-16 md:py-20 lg:py-32';
  
  // Force white text when background image is present for better visibility
  const textColorClasses = backgroundImage ? '!text-white' : (variant === 'default' ? 'text-primary-foreground' : 'text-primary');
  
  return (
    <section 
      className={`${baseClasses} ${heightClasses} relative overflow-hidden`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <div className={`font-medium text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 font-montserrat ${
              backgroundImage ? '!text-yellow-400' : 'text-accent'
            }`} style={backgroundImage ? { textShadow: '2px 2px 4px rgba(0,0,0,0.9)' } : {}}>
              {subtitle}
            </div>
          )}
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 font-montserrat font-bold leading-tight ${textColorClasses}`} 
              style={backgroundImage ? { textShadow: '3px 3px 6px rgba(0,0,0,0.9)' } : {}}>
            {title}
          </h1>
          
          {description && (
            <p className={`text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed ${
              backgroundImage ? '!text-white/95' : (variant === 'default' ? 'text-primary-foreground/90' : 'text-muted-foreground')
            }`} style={backgroundImage ? { textShadow: '2px 2px 4px rgba(0,0,0,0.9)' } : {}}>
              {description}
            </p>
          )}
          
          {children && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;