import { MapPin, Phone, Mail, Clock, Globe, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'The Close Business Centre',
        'Museum Hill-Westlands',
        'P.O. Box 10599-00100',
        'Nairobi, Kenya'
      ],
      color: 'primary',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+254 (0) 725-806441',
        '+254 (0) 723-374822'
      ],
      color: 'secondary',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'steve@bell-mount.co.ke',
        'info@bell-mount.co.ke'
      ],
      color: 'accent',
    },
    {
      icon: Globe,
      title: 'Visit Our Website',
      details: [
        'www.bell-mount.co.ke'
      ],
      color: 'primary',
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const officeFeatures = [
    'Free parking available',
    'Accessible building',
    'Conference facilities',
    'Public transportation nearby',
    'Security and reception',
    'Modern office environment',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Talk to Us"
        subtitle="CONTACT US"
        description="Crafting Solutions, Creating Value, Transforming Businesses. Our team provides extensive support in audits and systems. Let's discuss how we can help your organization succeed."
        fullScreen={true}
      />

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const colorClasses = {
                primary: 'bg-primary/10 text-primary',
                secondary: 'bg-secondary/10 text-secondary', 
                accent: 'bg-accent/10 text-accent',
              };

              return (
                <div key={index} className="card-professional text-center">
                  <div className={`w-16 h-16 ${colorClasses[info.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-montserrat text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-muted-foreground">
                        {info.title === 'Email Us' ? (
                          <a
                            href={`mailto:${detail}`}
                            className="hover:text-secondary transition-colors duration-200"
                          >
                            {detail}
                          </a>
                        ) : info.title === 'Call Us' ? (
                          <a
                            href={`tel:${detail.replace(/\s/g, '')}`}
                            className="hover:text-secondary transition-colors duration-200"
                          >
                            {detail}
                          </a>
                        ) : info.title === 'Visit Our Website' ? (
                          <a
                            href={`https://${detail}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition-colors duration-200"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Business Hours */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Business Hours and Office Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="card-professional">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-montserrat text-foreground">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium">
                    Emergency consultations available by appointment outside regular hours.
                  </p>
                </div>
              </div>

              {/* Office Features */}
              <div className="card-professional">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-montserrat text-foreground">
                  Office Amenities
                </h3>
                <div className="space-y-3">
                  {officeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-primary font-montserrat mb-6">
              Find Us
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Located in the heart of Nairobi's business district, our offices are easily 
              accessible by public transport and offer convenient parking for clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="bg-secondary/10 rounded-2xl p-8 text-center aspect-[4/3] flex items-center justify-center">
              <div>
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-montserrat text-foreground">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground mb-6">
                  Click below to view our location on Google Maps
                </p>
                <a
                  href="https://maps.google.com/?q=The+Close+Business+Centre,+Museum+Hill-Westlands,+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Location Details */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-montserrat text-primary">
                Getting to Our Office
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">By Car</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Located on Museum Hill Road in Westlands. Free parking is available 
                    on-site for all clients. The building is easily accessible from 
                    Waiyaki Way and Limuru Road.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">By Public Transport</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Take a matatu to Westlands and walk 5 minutes to Museum Hill. 
                    The office is well-connected to major bus routes and taxi services.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Landmarks</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Near the National Museum of Kenya and opposite the American Embassy. 
                    Look for The Close Business Centre signage.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <h4 className="font-semibold text-primary mb-3 font-montserrat">
                  Planning a Visit?
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We recommend scheduling an appointment to ensure our team is available 
                  to give you the attention you deserve. Walk-ins are welcome during 
                  business hours, but appointments receive priority service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-section-title font-montserrat mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lead text-primary-foreground/90 mb-8">
              Our team is standing by to help you navigate your financial challenges 
              and unlock new opportunities for growth. Contact us today to begin the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254725806441"
                className="btn-accent flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:steve@bell-mount.co.ke"
                className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-primary-foreground/20 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;