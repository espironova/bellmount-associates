import { Users, Award, TrendingUp, Shield, CheckCircle, Target, Users2, Briefcase } from 'lucide-react';
import Hero from '../components/Hero';
import LeadershipCard from '../components/LeadershipCard';
import ManagerCard from '../components/ManagerCard';
import ClientCarousel from '../components/ClientCarousel';
import { useCountUp } from '../hooks/useCountUp';
import teamCultureImage from '../assets/team-culture-banner.jpg';
import teamSilhouettesImage from '../assets/team-silhouettes.jpg';
import placeholderPortrait from '../assets/team-placeholder-portrait.jpg';

const Team = () => {
  // Count-up hooks for stats
  const experienceCount = useCountUp({ end: 50, duration: 2000, suffix: '+' });
  const certificationsCount = useCountUp({ end: 15, duration: 2000, suffix: '+' });
  const projectsCount = useCountUp({ end: 500, duration: 2000, suffix: '+' });
  const sectorsCount = useCountUp({ end: 12, duration: 2000, suffix: '+' });

  const leadership = [
    {
      name: 'Wangari Gathara',
      position: 'Managing Partner',
      qualifications: ['MBA', 'CPA(K)', 'CISA'],
      experience: '18+ years of experience in audit, tax, and advisory',
      tagline: '18+ years of experience in audit, tax, and advisory',
      bio: 'Specialist in financial audits, tax planning, and donor-funded project reviews. Guides organizations across corporate, NGO, and public sectors with expertise in strategic management and risk assessment.',
      image: placeholderPortrait,
    },
    {
      name: 'Steve Muru',
      position: 'Partner',
      qualifications: ['CPA(K)', 'BCom', 'ICPAK Member'],
      experience: '15+ years in Audit, Tax & Advisory services',
      tagline: 'Expert in business advisory and governance audits',
      bio: 'Advises corporates and NGOs on strategy, governance, and compliance. Focuses on risk management and regulatory frameworks with extensive experience in business consulting.',
    },
    {
      name: 'Julius',
      position: 'Partner',
      qualifications: ['CPA(K)', 'IT Audit Certified'],
      experience: '12+ years in forensic and IT auditing',
      tagline: 'Specialist in forensic audits and IT systems',
      bio: 'Leads forensic investigations, system reviews, and cybersecurity assessments. Helps clients detect irregularities and secure systems with expertise in fraud detection and IT controls.',
    },
    {
      name: 'Margaret',
      position: 'Partner',
      qualifications: ['B.A', 'FCCA UK', 'Tax Expert'],
      experience: '14+ years in tax and compliance services',
      tagline: 'Expert in tax and compliance services',
      bio: 'Provides tax planning, compliance advisory, and representation before tax authorities. Ensures compliance while optimizing efficiency with deep expertise in VAT, PAYE, and corporate tax.',
    },
  ];

  const managers = [
    {
      role: 'Audit Manager',
      department: 'Audit & Assurance',
      tagline: 'Focus on statutory and internal audits across sectors',
    },
    {
      role: 'Tax Manager',
      department: 'Tax Advisory',
      tagline: 'Experienced in VAT, PAYE, and corporate tax compliance',
    },
    {
      role: 'Advisory Manager',
      department: 'Business Advisory',
      tagline: 'Supports governance, risk, and process improvement',
    },
    {
      role: 'Forensic & IT Audit Manager',
      department: 'Forensic Services',
      tagline: 'Handles fraud investigations and system reviews',
    },
    {
      role: 'HR Manager',
      department: 'Human Resources',
      tagline: 'Specialist in HR audits, recruitment, and performance frameworks',
    },
  ];

  const organizationStructure = [
    {
      level: 'Managing Partner',
      description: 'Strategic leadership and client relationship management',
      icon: Award,
    },
    {
      level: 'Partner',
      description: 'Business development and service delivery oversight',
      icon: TrendingUp,
    },
    {
      level: 'Senior Manager',
      description: 'Project management and quality assurance',
      icon: Shield,
    },
    {
      level: 'Managers & Senior Staff',
      description: 'Service delivery and client engagement',
      icon: Users,
    },
  ];

  const specializations = [
    {
      area: 'Audit Management',
      focus: 'Governance, Statutory, and IT Audit',
      team: 'Maureen Wangari, Martin Kirika',
    },
    {
      area: 'Tax Advisory',
      focus: 'Health Checks, Compliance, and Strategic Planning',
      team: 'Steve Muru, Julius Njuguna',
    },
    {
      area: 'Business Advisory',
      focus: 'Company Changes, Governance, and Strategic Consulting',
      team: 'Margaret Gichuki, Steve Muru',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Our People, Our Strength"
        subtitle="OUR TEAM"
        description="Bell-Mount is led by experienced partners and supported by a skilled professional team delivering trusted audit, tax, advisory, forensic, and HR consulting solutions across Africa."
        backgroundImage={teamSilhouettesImage}
        fullScreen={true}
      />

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-primary font-playfair mb-6">
              Leadership Team
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Meet the experienced partners who guide our strategic direction and ensure 
              exceptional service delivery across all practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <LeadershipCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Managers & Senior Team */}
      <section className="section-padding bg-muted/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-primary font-playfair mb-6">
              Managers & Senior Team
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Our experienced managers and senior professionals lead specialized teams 
              across all service areas, ensuring quality delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managers.map((manager, index) => (
              <ManagerCard key={index} {...manager} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Highlight */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={teamCultureImage}
              alt="Bell-Mount & Associates Team Culture"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                  Professional Excellence
                </h3>
                <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
                  "Our multidisciplinary team of CPAs, ACCAs, and advisors combines 
                  global standards with local expertise to deliver clarity and growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Professional Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-title text-primary font-playfair mb-6">
              Commitment to Professional Excellence
            </h2>
            <p className="text-lead mb-12">
              Our team is committed to continuous professional development, staying current with 
              industry trends, regulatory changes, and best practices.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="counter-card text-center" ref={experienceCount.elementRef}>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary font-montserrat mb-2">
                  {experienceCount.count}
                </div>
                <div className="text-muted-foreground text-sm">Years Combined Experience</div>
              </div>
              
              <div className="counter-card text-center" ref={certificationsCount.elementRef}>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary font-montserrat mb-2">
                  {certificationsCount.count}
                </div>
                <div className="text-muted-foreground text-sm">Professional Certifications</div>
              </div>
              
              <div className="counter-card text-center" ref={projectsCount.elementRef}>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary font-montserrat mb-2">
                  {projectsCount.count}
                </div>
                <div className="text-muted-foreground text-sm">Successful Projects</div>
              </div>
              
              <div className="counter-card text-center" ref={sectorsCount.elementRef}>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary font-montserrat mb-2">
                  {sectorsCount.count}
                </div>
                <div className="text-muted-foreground text-sm">Sectors Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Want to Work With Our Experts?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Ready to benefit from our combined expertise? Let's discuss how our team 
              can help achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ boxShadow: '0 0 25px hsl(var(--accent) / 0.4)' }}
              >
                Book Consultation
              </a>
              <a 
                href="/contact" 
                className="border-2 border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/40"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;