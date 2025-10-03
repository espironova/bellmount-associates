import { ArrowRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '../components/ui/dialog';
import ClientCarousel from '../components/ClientCarousel';
import nairobiSkyline from '../assets/nairobi-skyline-dusk.jpg';
import teamBanner from '../assets/team-culture-banner.jpg';
import teamPlaceholder from '../assets/team-placeholder-portrait.jpg';
import { useCountUp } from '../hooks/useCountUp';

const Stat = ({ end, label, suffix = '' }: { end: number; label: string; suffix?: string; }) => {
  const { count, elementRef } = useCountUp({ end, suffix: suffix });
  return (
    <div ref={elementRef} className="text-center p-6 rounded-xl bg-card border shadow-sm stagger-fade-up">
      <div className="text-5xl font-bold text-gold font-playfair mb-2">{count}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const ImagePlaceholder = ({ alt }: { alt: string; }) => (
  <div className="w-full aspect-[4/3] bg-muted/40 border rounded-xl flex items-center justify-center text-muted-foreground text-sm">
    Upload Photo
    <span className="sr-only">{alt}</span>
  </div>
);

const ProfileCard = ({ name, role, photoAlt }: { name: string; role: string; photoAlt: string; }) => (
  <div className="group p-6 rounded-xl border bg-card hover:shadow-elegant transition-all duration-300">
    <div className="mb-4 overflow-hidden rounded-lg">
      <img src={teamPlaceholder} alt={photoAlt} className="w-full h-48 object-cover" />
    </div>
    <div className="font-semibold text-primary">{name}</div>
    <div className="text-sm text-muted-foreground mb-3">{role}</div>
    <Dialog>
      <DialogTrigger className="text-sm text-gold hover:underline">Read Bio</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{role}</DialogDescription>
        </DialogHeader>
        <div className="text-sm text-foreground">
          Bio — from profile
        </div>
      </DialogContent>
    </Dialog>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Page Title */}
      <section className="pt-16 pb-8 bg-background">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-playfair text-primary mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional Audit, Tax, Forensic and HR consultants — trusted in Kenya since 2006.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-4">
        <div className="container-custom">
          <Tabs defaultValue="who">
            <div className="flex items-center justify-center">
              <TabsList className="bg-muted/40">
                <TabsTrigger value="who">Who We Are</TabsTrigger>
                <TabsTrigger value="leadership">Our Leadership</TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1: Who We Are */}
            <TabsContent value="who" className="mt-8">
              {/* Hero Section */}
              <section className="relative overflow-hidden rounded-2xl mx-auto shadow-elegant">
                <div className="aspect-[16/6] md:aspect-[16/5] w-full">
                  <img src={teamBanner} alt="Team group banner" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                  <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-playfair text-white mb-3">Who We Are</h2>
                    <p className="text-white/90 text-sm md:text-base">
                      Bell-Mount & Associates is a professional services firm offering Audit, Tax, Forensic and HR consulting. Since 2006, we have combined global standards with local expertise to deliver clarity, compliance and growth.
                    </p>
                  </div>
                </div>
              </section>

              {/* Our Journey (Timeline) */}
              <section className="section-padding bg-background">
                <div className="container-custom">
                  <h3 className="text-section-title font-playfair text-primary mb-8">Our Journey</h3>
                  <div className="hidden md:grid grid-cols-4 gap-6">
                    {[ 
                      { title: '2006 — Founded in Kenya.' },
                      { title: 'Expanded into statutory and internal audits, tax advisory, forensic audits, and HR consulting.' },
                      { title: 'Grew client base to corporates, NGOs, SMEs, public sector, and donor-funded projects.' },
                      { title: 'Today: Recognized across 12+ sectors for clarity, compliance, and growth.' },
                    ].map((item, idx) => (
                      <div key={idx} className="relative p-6 rounded-xl border bg-card">
                        <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-gold shadow"></div>
                        <div className="text-sm text-muted-foreground">Milestone</div>
                        <div className="mt-1 font-medium">{item.title}</div>
                        {idx < 3 && (
                          <div className="hidden md:block absolute top-6 right-[-12px] w-6 h-[2px] bg-border"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden space-y-4">
                    {[ 
                      '2006 — Founded in Kenya.',
                      'Expanded into statutory and internal audits, tax advisory, forensic audits, and HR consulting.',
                      'Grew client base to corporates, NGOs, SMEs, public sector, and donor-funded projects.',
                      'Today: Recognized across 12+ sectors for clarity, compliance, and growth.',
                    ].map((text, idx) => (
                      <div key={idx} className="p-4 rounded-lg border bg-card">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-gold"></div>
                          <div className="text-sm">{text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Guided by Purpose */}
              <section className="section-padding bg-muted/20">
                <div className="container-custom">
                  <h3 className="text-section-title font-playfair text-primary mb-8">Guided by Purpose</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl border bg-card">
                      <div className="mb-4 font-semibold">Mission</div>
                      <p className="text-muted-foreground">
                        To provide high quality, professional audit, tax, forensic and advisory services to our clients while maintaining the highest standards of integrity and independence.
                      </p>
                      <div className="mt-6 mb-2 font-semibold">Vision</div>
                      <p className="text-muted-foreground">
                        To be the most trusted professional services firm, delivering value through clarity, compliance, and growth.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border bg-card">
                      <div className="mb-4 font-semibold">Core Values</div>
                      <ul className="grid grid-cols-2 gap-3 text-muted-foreground">
                        <li className="p-3 rounded-lg bg-muted/40">Integrity</li>
                        <li className="p-3 rounded-lg bg-muted/40">Professionalism</li>
                        <li className="p-3 rounded-lg bg-muted/40">Excellence</li>
                        <li className="p-3 rounded-lg bg-muted/40">Client Commitment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Impact (Counters) */}
              <section className="section-padding bg-background">
                <div className="container-custom">
                  <h3 className="text-section-title font-playfair text-primary mb-8">Our Impact at a Glance</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Stat end={18} suffix="+" label="Years of Experience" />
                    <Stat end={100} suffix="+" label="Clients Served" />
                    <Stat end={12} suffix="+" label="Sectors Covered" />
                    <Stat end={4} label="Core Service Areas" />
                  </div>
                </div>
              </section>

              {/* Sectors We Serve */}
              <section className="section-padding bg-muted/20">
                <div className="container-custom">
                  <h3 className="text-section-title font-playfair text-primary mb-8">Sectors We Serve</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[ 'Corporate Organisations', 'NGOs & Donor Agencies', 'Public Sector', 'SMEs', 'Financial Institutions' ].map((s, i) => (
                      <div key={i} className="p-4 text-center rounded-xl border bg-card hover:shadow-elegant transition">
                        <div className="text-gold mb-2">★</div>
                        <div className="text-sm font-medium">{s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Our Clientele */}
              <section className="section-padding bg-background">
                <div className="container-custom">
                  <div className="max-w-3xl mb-8">
                    <h3 className="text-section-title font-playfair text-primary mb-4">Our Clientele</h3>
                    <p className="text-muted-foreground">
                      We serve a wide range of clients across Kenya and the region, including corporates, NGOs, public institutions, and donor-funded projects.
                    </p>
                  </div>
                  <ClientCarousel variant="about" speed={4000} />
                </div>
              </section>
            </TabsContent>

            {/* Tab 2: Our Leadership */}
            <TabsContent value="leadership" className="mt-8">
              {/* Message from the Managing Partner */}
              <section className="section-padding bg-background">
                <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <img src={teamPlaceholder} alt="Steve Muru" className="w-full h-64 object-cover rounded-xl border" />
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm text-muted-foreground mb-2">Message from Our Managing Partner</div>
                    <h3 className="text-3xl font-playfair text-primary mb-2">Steve Muru</h3>
                    <blockquote className="p-6 rounded-xl bg-muted/30 border text-foreground">
                      “At Bell-Mount & Associates, we believe every number tells a story. Our role is to translate that story into insight, growth, and resilience for our clients.”
                      <div className="mt-3 text-sm text-muted-foreground">— Steve Muru, Managing Partner</div>
                    </blockquote>
                  </div>
                </div>
              </section>

              {/* Partners (2 only) */}
              <section className="section-padding bg-muted/20">
                <div className="container-custom">
                  <h3 className="text-section-title font-playfair text-primary mb-8">Partners</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProfileCard name="Steve Muru" role="Managing Partner" photoAlt="Steve Muru" />
                    <ProfileCard name="Maureen Wangari" role="Partner" photoAlt="Maureen Wangari" />
                  </div>
                </div>
              </section>

              {/* Management Team */}
              <section className="section-padding bg-background">
                <div className="container-custom">
                  <h3 className="text-section-title font-playfair text-primary mb-8">Management Team</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProfileCard name="Julius" role="Forensic & IT Audit Manager" photoAlt="Julius" />
                    <ProfileCard name="Margaret" role="Tax Manager" photoAlt="Margaret" />
                    <ProfileCard name="Audit Manager" role="Audit Manager" photoAlt="Audit Manager" />
                    <ProfileCard name="HR Manager" role="HR Manager" photoAlt="HR Manager" />
                  </div>
                </div>
              </section>

              {/* Team Culture Banner */}
              <section className="relative overflow-hidden">
                <div className="aspect-[16/6] w-full">
                  <img src={teamBanner} alt="Team culture banner" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="max-w-4xl text-center text-white text-base md:text-lg">
                    Our multidisciplinary team of CPAs, ACCAs, and advisors combines global standards with local expertise to deliver clarity and growth.
                  </p>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Strip */}
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
              Partner with Bell-Mount for trusted Audit, Tax, Forensic and HR services.
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