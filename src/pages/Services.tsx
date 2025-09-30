import { useState, useEffect, useRef } from 'react';
import { Shield, Calculator, Handshake, Search, Users, Building, Factory, Briefcase, GraduationCap, Laptop, TrendingUp, Clock, UserCheck, Globe, Briefcase as BriefcaseIcon, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ExpandableServiceCard from '../components/ExpandableServiceCard';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import ClientCarousel from '../components/ClientCarousel';
import PartnersSection from '../components/PartnersSection';
import BlogCard from '../components/BlogCard';
import IndustriesSection from '../components/IndustriesSection';

import heroImage from '../assets/african-boardroom-meeting.jpg';
import shiftBlogImage from '../assets/shif-transition-blog.jpg';
import forensicImage from '../assets/forensic-it-services.jpg';
import hrImage from '../assets/hr-consulting-services.jpg';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [servicesVisible, setServicesVisible] = useState(false);
  const servicesRef = useRef<HTMLElement>(null);

  // Expandable services with unified content
  const expandableServices = [
    {
      icon: Shield,
      title: 'Audit & Assurance',
      tagline: 'Clarity and trust through rigorous reviews.',
      description: 'Our Audit & Assurance services provide independent and objective reviews that build financial clarity, enhance compliance, and strengthen confidence with stakeholders.',
      offerings: [
        'Statutory audits for compliance with regulations',
        'Internal audits to strengthen controls and detect inefficiencies',
        'Compliance reviews ensuring legal and regulatory adherence',
        'Donor-funded project audits for NGOs and international bodies'
      ]
    },
    {
      icon: FileText,
      title: 'Tax Advisory',
      tagline: 'Optimized compliance with smart tax strategies.',
      description: 'We deliver strategic tax planning and advisory solutions that help businesses remain compliant while optimizing efficiency.',
      offerings: [
        'Corporate tax planning and compliance',
        'VAT, PAYE, and Withholding Tax advisory',
        'Transfer pricing reviews',
        'Representation before tax authorities'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Advisory',
      tagline: 'Governance and strategies that drive sustainable growth.',
      description: 'Our Business Advisory services empower organizations with strategies, governance frameworks, and financial management solutions that drive sustainable performance and resilience.',
      offerings: [
        'Risk management frameworks',
        'Corporate governance reviews',
        'Financial management consulting',
        'Business process improvement'
      ]
    },
    {
      icon: Search,
      title: 'Forensic & IT Audits',
      tagline: 'Fraud detection and system checks for resilience.',
      description: 'We protect organizations from risks, fraud, and weaknesses through forensic reviews and IT system audits. Our approach blends investigative expertise with technology assurance to safeguard financial integrity.',
      offerings: [
        'Fraud investigations',
        'Forensic audits for irregularities',
        'IT systems reviews for efficiency and control',
        'Cybersecurity assessments'
      ]
    },
    {
      icon: Users,
      title: 'HR Consulting',
      tagline: 'People-focused solutions for lasting performance.',
      description: 'We provide human capital solutions that strengthen organizations by aligning talent, performance, and strategy. Our HR consulting equips businesses with structures for growth and workforce sustainability.',
      offerings: [
        'HR audits',
        'Recruitment and staffing solutions',
        'Performance management frameworks',
        'Training and capacity building'
      ]
    }
  ];

  // Featured services for spotlight
  const featuredServices = [
    {
      icon: Search,
      title: 'Forensic & IT Audits',
      description: 'Comprehensive forensic investigations and IT system audits that protect your business from fraud, ensure data integrity, and strengthen cybersecurity frameworks.',
      features: [
        'Fraud investigations and forensic accounting',
        'IT systems security and compliance reviews',
        'Cybersecurity assessments and data integrity checks',
        'Digital forensics and evidence collection'
      ],
      image: forensicImage,
      link: '/contact'
    },
    {
      icon: Users,
      title: 'HR Consulting',
      description: 'Strategic human resource solutions that build strong organizational culture, enhance performance management, and ensure compliance with employment regulations.',
      features: [
        'HR audits and policy development',
        'Recruitment and talent acquisition strategies',
        'Performance management frameworks',
        'Training and capacity building programs'
      ],
      image: hrImage,
      link: '/contact'
    }
  ];


  const methodology = [
    { step: '01', title: 'Assess', description: 'Diagnostic review', icon: Search },
    { step: '02', title: 'Advise', description: 'Tailored recommendations', icon: Handshake },
    { step: '03', title: 'Implement', description: 'Guided execution', icon: GraduationCap },
    { step: '04', title: 'Grow', description: 'Continuous support', icon: TrendingUp }
  ];

  // Scroll spy and services reveal functionality
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Trigger services reveal at 80% of hero height
      if (scrollY > heroHeight * 0.8 && !servicesVisible) {
        setServicesVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [servicesVisible]);

  const handleCardToggle = (title: string) => {
    setExpandedCard(prev => prev === title ? null : title);
  };

    return (
    <div className="min-h-screen">
      {/* Enhanced Services Hero - Using Hero Component */}
      <Hero
        title="Our Services, Your Growth"
        subtitle="OUR SERVICES"
        description="Trusted Audit, Tax, Advisory, Forensic, and HR consulting solutions across Africa."
        backgroundImage={heroImage}
        fullScreen={true}
      >
        <Link
          to="/contact"
          className="btn-consultation-gold text-xl px-10 py-5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
        >
          Book Consultation
        </Link>
      </Hero>


      {/* Unified Services Section */}
      <section 
        ref={servicesRef}
        className={`py-24 bg-background transition-all duration-1000 ${
          servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your business across Africa's dynamic markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {expandableServices.map((service, index) => (
              <div 
                key={service.title}
                className={`transition-all duration-700 ease-out ${
                  servicesVisible 
                    ? 'animate-fade-in-up opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } ${index >= 3 ? 'md:col-start-1 lg:col-start-2' : ''} ${index === 4 ? 'md:col-start-2 lg:col-start-3' : ''}`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <ExpandableServiceCard
                  icon={service.icon}
                  title={service.title}
                  tagline={service.tagline}
                  description={service.description}
                  offerings={service.offerings}
                  isExpanded={expandedCard === service.title}
                  onToggle={() => handleCardToggle(service.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <IndustriesSection 
        variant="services"
        title="Industries We Serve"
        subtitle="Comprehensive solutions across diverse sectors with specialized expertise tailored to each industry's unique challenges and opportunities."
      />

      {/* Our Partners */}
      <PartnersSection />


      {/* Latest News & Insights */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title-with-underline text-foreground font-playfair">
              Latest News & Insights
            </h2>
            <p className="text-lead mt-6">
              Stay informed with our latest perspectives on regulatory changes and industry developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <BlogCard
                image={shiftBlogImage}
                category="Tax Advisory"
                title="The Transition from NHIF to SHIF"
                date="1 Oct 2024"
                author="Bell-Mount Advisory"
                excerpt="Understanding the regulatory changes and compliance requirements as Kenya transitions from NHIF to the new Social Health Insurance Fund (SHIF)."
                link="/contact"
              />
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <BlogCard
                image={heroImage}
                category="Business Advisory"
                title="Corporate Governance Best Practices"
                date="15 Sep 2024"
                author="Bell-Mount Advisory"
                excerpt="Key strategies for implementing effective governance frameworks that drive accountability and sustainable growth in African businesses."
                link="/contact"
              />
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <BlogCard
                image={forensicImage}
                category="Forensic Audits"
                title="Fraud Prevention in Digital Age"
                date="1 Sep 2024"
                author="Bell-Mount Advisory"
                excerpt="Essential cybersecurity measures and forensic controls to protect your organization from modern fraud threats and data breaches."
                link="/contact"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;