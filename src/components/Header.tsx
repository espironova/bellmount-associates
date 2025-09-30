import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Audit & Assurance', href: '/services#audit', section: 'audit' },
        { name: 'Tax Advisory', href: '/services#tax', section: 'tax' },
        { name: 'Business Advisory', href: '/services#advisory', section: 'advisory' },
        { name: 'Forensic & IT Audits', href: '/services#forensic', section: 'forensic' },
        { name: 'HR Consulting', href: '/services#hr', section: 'hr' },
      ],
    },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/services') {
      window.location.href = `/services#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleServiceClick = (e: React.MouseEvent, item: any) => {
    if (item.section) {
      e.preventDefault();
      scrollToSection(item.section);
      setActiveDropdown(null);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">BMA</span>
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-bold font-montserrat text-primary">
                Bell Mount & Associates
              </div>
              <div className="text-xs text-muted-foreground">
                Certified Public Accountants
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 font-medium text-[#0A2342] transition-all duration-300 relative ${
                    location.pathname === item.href 
                      ? 'text-[#FFD700]'
                      : 'hover:text-[#0A2342] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFD700] after:transition-all after:duration-300 hover:after:w-full'
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 transition-all duration-200 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    style={{
                      opacity: activeDropdown === item.name ? 1 : 0,
                      visibility: activeDropdown === item.name ? 'visible' : 'hidden',
                    }}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={(e) => handleServiceClick(e, dropdownItem)}
                        className="w-full text-left block px-4 py-2 text-sm text-[#0A2342] hover:bg-[#FFD700]/10 hover:text-[#FFD700] transition-colors duration-300"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-[#FFD700] text-[#0A2342] px-6 py-3 rounded-lg font-bold flex items-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/40 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Let's Talk</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-secondary/10"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-[#0A2342]" /> : <Menu className="w-6 h-6 text-[#0A2342]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`block py-2 font-medium ${
                        location.pathname === item.href ? 'text-[#FFD700]' : 'text-[#0A2342]'
                      }`}
                      onClick={() => !item.dropdown && setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => handleDropdown(item.name)}
                        className="p-2"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={(e) => handleServiceClick(e, dropdownItem)}
                          className="w-full text-left block py-2 text-sm text-[#0A2342] hover:text-[#FFD700] transition-colors duration-300"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="pt-4 border-t border-border mt-4">
              <Link
                to="/contact"
                className="bg-[#FFD700] text-[#0A2342] px-6 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 w-full transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;