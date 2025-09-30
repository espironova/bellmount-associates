import { Building2, Users, Globe, Target, Eye, Heart, ArrowRight, CheckCircle, Award, Building, Lightbulb, BarChart3, Calculator, Shield, MapPin, Phone, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import ClientCarousel from '../components/ClientCarousel';
import IndustriesSection from '../components/IndustriesSection';
import nairobiSkyline from '../assets/nairobi-skyline-dusk.jpg';
import boardroomImage from '../assets/modern-boardroom.jpg';
import teamSilhouettes from '../assets/team-silhouettes.jpg';

const About = () => {
  const missionVisionValues = [
    {
      icon: Target,
      title: 'Mission',
      content: 'To empower clients with clarity, resilience, and long-term value.',
    },
    {
      icon: Eye,
      title: 'Vision', 
      content: 'To be Africa\'s most trusted audit, tax, and advisory partner.',
    },
    {
      icon: Heart,
      title: 'Values',
      content: 'Integrity | Excellence | Partnership | Innovation',
    },
  ];


  const leadership = [
    {
      name: 'Wangari',
      role: 'Managing Partner',
      quote: 'We are driven by integrity and committed to helping businesses thrive.',
      image: teamSilhouettes
    }
  ];

  const accreditations = [
    'ICPAK (Institute of Certified Public Accountants of Kenya)',
    'ACCA (Association of Chartered Certified Accountants)',
    'International Federation of Accountants (IFAC)',
    'East African Association of Accountants'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Hero
        title="Who We Are"
        subtitle="ABOUT US"
        description="Bell-Mount & Associates, trusted Audit, Tax, Advisory, and Technology partners for over 18 years."
        variant="default"
        backgroundImage={nairobiSkyline}
        fullScreen={true}
      />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-slide-left">
              <div className="gold-accent-line mb-8"></div>
              <h2 className="text-section-title text-primary font-playfair mb-8">
                Our Journey
              </h2>
              <div className="space-y-6">
                <p className="text-lead text-foreground font-medium leading-relaxed">
                  Founded in 2005, Bell-Mount & Associates has grown into one of Kenya's most trusted professional services firms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We support corporates, SMEs, NGOs, and development partners with tailored financial, advisory, and technology solutions — helping businesses achieve clarity, compliance, and sustainable growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to excellence and deep understanding of the African business landscape has made us the preferred partner for organizations seeking professional financial and advisory services that drive measurable results.
                </p>
              </div>
            </div>
            <div className="fade-slide-right">
              <div className="relative">
                <img
                  src={boardroomImage}
                  alt="Modern African business boardroom"
                  className="w-full rounded-2xl shadow-elegant"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="gold-accent-line mx-auto mb-8"></div>
            <h2 className="text-section-title text-primary font-playfair mb-6">
              Guided by Purpose
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionVisionValues.map((item, index) => (
              <div
                key={index}
                className="premium-card group cursor-pointer stagger-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-montserrat text-primary text-center">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <IndustriesSection 
        variant="about"
        title="Who We Serve"
        subtitle="From global organizations to local enterprises, Bell-Mount delivers trusted solutions across diverse industries with specialized expertise and proven results."
      />

      {/* Leadership Highlight */}
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="gold-accent-line mx-auto mb-8"></div>
            <h2 className="text-section-title text-primary font-playfair mb-6">
              Leadership You Can Trust
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="premium-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="relative">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        className="w-48 h-48 object-cover rounded-2xl mx-auto shadow-elegant"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-primary font-playfair mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-gold font-medium mb-6">
                      {leader.role}
                    </p>
                    <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                      "{leader.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="gold-accent-line mx-auto mb-8"></div>
            <h2 className="text-section-title text-primary font-playfair mb-6">
              Professional Standards
            </h2>
            <p className="text-lead text-muted-foreground max-w-3xl mx-auto">
              Bell-Mount's work is guided by internationally recognized professional bodies:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {accreditations.map((accreditation, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-card rounded-xl border hover:shadow-elegant transition-shadow duration-300 stagger-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Award className="w-8 h-8 text-gold flex-shrink-0" />
                <span className="text-foreground font-medium">
                  {accreditation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Organizations Showcase */}
      <ClientCarousel 
        variant="about" 
        speed={4000}
      />

      {/* Final CTA Strip */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${nairobiSkyline})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-section-title font-playfair mb-6">
              Let's Build Stronger Businesses Together
            </h2>
            <p className="text-lead text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Partner with Bell-Mount for trusted Audit, Tax, and Advisory services.
            </p>
            <button className="cta-button-gold group">
              <span>Book a Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;