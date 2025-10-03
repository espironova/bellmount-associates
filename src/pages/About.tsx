import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Target, Eye, Heart, Award, Building2, Users, Briefcase, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { useCountUp } from '../hooks/useCountUp';
import Hero from '../components/Hero';
import ClientCarousel from '../components/ClientCarousel';
import teamSilhouettesImage from '../assets/team-silhouettes.jpg';
import placeholderPortrait from '../assets/team-placeholder-portrait.jpg';
import teamCultureImage from '../assets/team-culture-banner.jpg';

const About = () => {
  const [searchParams] = useSearchParams();
  const [selectedLeader, setSelectedLeader] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('who-we-are');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'leadership' || tab === 'who-we-are') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Count-up hooks for impact stats
  const yearsCount = useCountUp({ end: 18, duration: 2000, suffix: '+' });
  const clientsCount = useCountUp({ end: 100, duration: 2000, suffix: '+' });
  const sectorsCount = useCountUp({ end: 12, duration: 2000, suffix: '+' });
  const servicesCount = useCountUp({ end: 4, duration: 2000 });

  const timeline = [
    {
      year: '2006',
      title: 'Founded in Kenya',
      description: 'Bell-Mount & Associates established as a professional services firm.'
    },
    {
      year: '2010s',
      title: 'Service Expansion',
      description: 'Expanded into statutory and internal audits, tax advisory, forensic audits, and HR consulting.'
    },
    {
      year: '2015',
      title: 'Client Base Growth',
      description: 'Grew client base to corporates, NGOs, SMEs, public sector, and donor-funded projects.'
    },
    {
      year: 'Today',
      title: 'Industry Recognition',
      description: 'Recognized across 12+ sectors for clarity, compliance, and growth.'
    }
  ];

  const sectors = [
    { name: 'Corporate Organisations', icon: Building2 },
    { name: 'NGOs & Donor Agencies', icon: Users },
    { name: 'Public Sector', icon: Shield },
    { name: 'SMEs', icon: Briefcase },
    { name: 'Financial Institutions', icon: TrendingUp }
  ];

  const partners = [
    {
      name: 'Steve Muru',
      position: 'Managing Partner',
      qualifications: ['CPA(K)', 'BCom', 'ICPAK Member'],
      tagline: 'Expert in business advisory and governance audits',
      bio: 'Advises corporates and NGOs on strategy, governance, and compliance. Focuses on risk management and regulatory frameworks with extensive experience in business consulting.',
      image: placeholderPortrait
    },
    {
      name: 'Maureen Wangari',
      position: 'Partner',
      qualifications: ['MBA', 'CPA(K)', 'CISA'],
      tagline: '18+ years of experience in audit, tax, and advisory',
      bio: 'Specialist in financial audits, tax planning, and donor-funded project reviews. Guides organizations across corporate, NGO, and public sectors with expertise in strategic management and risk assessment.',
      image: placeholderPortrait
    }
  ];

  const managers = [
    {
      name: 'Julius',
      role: 'Forensic & IT Audit Manager',
      focus: 'Specialist in forensic audits and IT systems',
      bio: 'Leads forensic investigations, system reviews, and cybersecurity assessments. Helps clients detect irregularities and secure systems with expertise in fraud detection and IT controls.',
      image: placeholderPortrait
    },
    {
      name: 'Margaret',
      role: 'Tax Manager',
      focus: 'Expert in tax and compliance services',
      bio: 'Provides tax planning, compliance advisory, and representation before tax authorities. Ensures compliance while optimizing efficiency with deep expertise in VAT, PAYE, and corporate tax.',
      image: placeholderPortrait
    },
    {
      name: 'Audit Manager',
      role: 'Audit Manager',
      focus: 'Focus on statutory and internal audits across sectors',
      bio: 'Experienced audit professional specializing in statutory audits, internal control reviews, and compliance assessments across various industries.',
      image: placeholderPortrait
    },
    {
      name: 'HR Manager',
      role: 'HR Manager',
      focus: 'Specialist in HR audits, recruitment, and performance frameworks',
      bio: 'Leads HR consulting services including HR audits, talent management, organizational development, and performance management systems.',
      image: placeholderPortrait
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Who We Are"
        subtitle="ABOUT US"
        description="Bell-Mount & Associates is a professional services firm offering Audit, Tax, Forensic and HR consulting. Since 2006, we have combined global standards with local expertise to deliver clarity, compliance and growth."
        backgroundImage={teamSilhouettesImage}
        fullScreen={true}
      />

      {/* Tabbed Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
              <TabsTrigger value="who-we-are" className="text-base md:text-lg">Who We Are</TabsTrigger>
              <TabsTrigger value="leadership" className="text-base md:text-lg">Our Leadership</TabsTrigger>
            </TabsList>

            {/* Tab 1: Who We Are */}
            <TabsContent value="who-we-are" className="space-y-20">
              
              {/* Our Journey Timeline */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="gold-accent-line mx-auto mb-8"></div>
                  <h2 className="text-section-title text-primary font-playfair mb-4">
                    Our Journey
                  </h2>
                </div>
                
                {/* Desktop Timeline - Horizontal */}
                <div className="hidden md:block relative">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gold/20"></div>
                  <div className="grid grid-cols-4 gap-8 relative">
                    {timeline.map((milestone, index) => (
                      <div key={index} className="text-center">
                        <div className="relative mb-6">
                          <div className="w-16 h-16 bg-gold rounded-full mx-auto flex items-center justify-center shadow-lg">
                            <Clock className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border hover:shadow-elegant transition-shadow duration-300">
                          <div className="text-2xl font-bold text-gold mb-2 font-playfair">
                            {milestone.year}
                          </div>
                          <h4 className="text-lg font-semibold text-primary mb-2 font-montserrat">
                            {milestone.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Timeline - Vertical */}
                <div className="md:hidden space-y-6">
                  {timeline.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="bg-card p-4 rounded-xl border flex-1">
                        <div className="text-xl font-bold text-gold mb-1 font-playfair">
                          {milestone.year}
                        </div>
                        <h4 className="text-base font-semibold text-primary mb-2 font-montserrat">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guided by Purpose */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="gold-accent-line mx-auto mb-8"></div>
                  <h2 className="text-section-title text-primary font-playfair mb-4">
                    Guided by Purpose
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div className="premium-card">
                      <div className="flex items-start gap-4 mb-4">
                        <Target className="w-10 h-10 text-gold flex-shrink-0" />
                        <h3 className="text-2xl font-semibold text-primary font-playfair">Mission</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        To provide high quality, professional audit, tax, forensic and advisory services to our clients while maintaining the highest standards of integrity and independence.
                      </p>
                    </div>

                    <div className="premium-card">
                      <div className="flex items-start gap-4 mb-4">
                        <Eye className="w-10 h-10 text-gold flex-shrink-0" />
                        <h3 className="text-2xl font-semibold text-primary font-playfair">Vision</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        To be the most trusted professional services firm, delivering value through clarity, compliance, and growth.
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="premium-card h-full flex flex-col justify-center">
                    <div className="flex items-start gap-4 mb-6">
                      <Heart className="w-10 h-10 text-gold flex-shrink-0" />
                      <h3 className="text-2xl font-semibold text-primary font-playfair">Core Values</h3>
                    </div>
                    <ul className="space-y-4">
                      {['Integrity', 'Professionalism', 'Excellence', 'Client Commitment'].map((value, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                          <span className="text-lg text-foreground font-medium">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Impact */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="gold-accent-line mx-auto mb-8"></div>
                  <h2 className="text-section-title text-primary font-playfair mb-4">
                    Our Impact at a Glance
                  </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center counter-card" ref={yearsCount.elementRef}>
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-4xl font-bold text-gold font-montserrat mb-2">
                      {yearsCount.count}
                    </div>
                    <div className="text-muted-foreground text-sm">Years of Experience</div>
                  </div>

                  <div className="text-center counter-card" ref={clientsCount.elementRef}>
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-4xl font-bold text-gold font-montserrat mb-2">
                      {clientsCount.count}
                    </div>
                    <div className="text-muted-foreground text-sm">Clients Served</div>
                  </div>

                  <div className="text-center counter-card" ref={sectorsCount.elementRef}>
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-4xl font-bold text-gold font-montserrat mb-2">
                      {sectorsCount.count}
                    </div>
                    <div className="text-muted-foreground text-sm">Sectors Covered</div>
                  </div>

                  <div className="text-center counter-card" ref={servicesCount.elementRef}>
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-4xl font-bold text-gold font-montserrat mb-2">
                      {servicesCount.count}
                    </div>
                    <div className="text-muted-foreground text-sm">Core Service Areas</div>
                  </div>
                </div>
              </div>

              {/* Sectors We Serve */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="gold-accent-line mx-auto mb-8"></div>
                  <h2 className="text-section-title text-primary font-playfair mb-4">
                    Sectors We Serve
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectors.map((sector, index) => (
                    <div
                      key={index}
                      className="premium-card group cursor-pointer text-center"
                    >
                      <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <sector.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary font-montserrat">
                        {sector.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Clientele */}
              <div className="max-w-4xl mx-auto text-center">
                <div className="gold-accent-line mx-auto mb-8"></div>
                <h2 className="text-section-title text-primary font-playfair mb-6">
                  Our Clientele
                </h2>
                <p className="text-lead text-muted-foreground mb-12">
                  We serve a wide range of clients across Kenya and the region, including corporates, NGOs, public institutions, and donor-funded projects.
                </p>
              </div>

              <ClientCarousel variant="about" speed={4000} />

            </TabsContent>

            {/* Tab 2: Our Leadership */}
            <TabsContent value="leadership" className="space-y-20">
              
              {/* Message from Managing Partner */}
              <div className="max-w-5xl mx-auto">
                <div className="premium-card">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-secondary/10">
                        <img 
                          src={placeholderPortrait} 
                          alt="Steve Muru - Managing Partner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                      <h3 className="text-3xl font-bold text-primary font-playfair mb-2">
                        Steve Muru
                      </h3>
                      <div className="text-gold font-semibold mb-6 text-lg">
                        Message from Our Managing Partner
                      </div>
                      <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-6">
                        "At Bell-Mount & Associates, we believe every number tells a story. Our role is to translate that story into insight, growth, and resilience for our clients."
                      </blockquote>
                      <div className="mt-4 text-primary font-semibold">
                        — Steve Muru, Managing Partner
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partners */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="gold-accent-line mx-auto mb-8"></div>
                  <h2 className="text-section-title text-primary font-playfair mb-4">
                    Partners
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedLeader(partner)}
                      className="premium-card cursor-pointer group hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-secondary/10">
                        <img 
                          src={partner.image} 
                          alt={`${partner.name} - ${partner.position}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 font-playfair text-primary text-center">
                        {partner.name}
                      </h3>
                      <div className="text-gold font-semibold mb-4 text-center">
                        {partner.position}
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {partner.qualifications.map((qual, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full font-medium"
                          >
                            {qual}
                          </span>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {partner.tagline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Management Team */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="gold-accent-line mx-auto mb-8"></div>
                  <h2 className="text-section-title text-primary font-playfair mb-4">
                    Management Team
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {managers.map((manager, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedLeader(manager)}
                      className="card-professional cursor-pointer group hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-secondary/10">
                        <img 
                          src={manager.image} 
                          alt={`${manager.name} - ${manager.role}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 font-montserrat text-foreground text-center">
                        {manager.name}
                      </h4>
                      <div className="text-gold font-medium mb-3 text-sm text-center">
                        {manager.role}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed text-center">
                        {manager.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Culture Banner */}
              <div className="max-w-6xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={teamCultureImage}
                    alt="Bell-Mount & Associates Team Culture"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <p className="text-lg md:text-xl max-w-3xl leading-relaxed font-medium">
                        "Our multidisciplinary team of CPAs, ACCAs, and advisors combines global standards with local expertise to deliver clarity and growth."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Leader Bio Modal */}
      <Dialog open={!!selectedLeader} onOpenChange={() => setSelectedLeader(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-6 mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary/10 flex-shrink-0">
                {selectedLeader?.image ? (
                  <img 
                    src={selectedLeader.image} 
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <div className="text-2xl font-bold text-primary">
                      {selectedLeader?.name?.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <DialogTitle className="text-2xl font-playfair mb-2">
                  {selectedLeader?.name}
                </DialogTitle>
                <div className="text-gold font-semibold">
                  {selectedLeader?.position || selectedLeader?.role}
                </div>
              </div>
            </div>
            {selectedLeader?.qualifications && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedLeader.qualifications.map((qual: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full font-medium"
                  >
                    {qual}
                  </span>
                ))}
              </div>
            )}
          </DialogHeader>
          <DialogDescription className="text-base text-foreground leading-relaxed">
            {selectedLeader?.bio}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
