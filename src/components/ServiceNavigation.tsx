import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ServiceNavigationProps {
  activeSection: string;
}

const ServiceNavigation = ({ activeSection }: ServiceNavigationProps) => {
  const [isSticky, setIsSticky] = useState(false);

  const sections = [
    { id: 'audit', label: 'Audit & Assurance' },
    { id: 'tax', label: 'Tax Advisory' },
    { id: 'advisory', label: 'Business Advisory' },
    { id: 'forensic', label: 'Forensic & IT' },
    { id: 'hr', label: 'HR Consulting' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div className={`hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg min-w-[200px]">
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  activeSection === section.id
                    ? 'text-gold bg-gold/10 border-l-2 border-gold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <div className="absolute inset-y-0 left-0 w-1 bg-gold rounded-r-full"></div>
                )}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                to="/contact"
                className="block w-full text-center bg-gold text-gold-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold/90 transition-colors duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Top Tab Menu */}
      <div className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="overflow-x-auto">
          <div className="flex space-x-1 p-4 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-gold bg-gold/10 border-b-2 border-gold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceNavigation;