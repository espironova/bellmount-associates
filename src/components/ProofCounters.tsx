import { useCountUp } from '../hooks/useCountUp';
import { Calendar, Users, Building2, Target } from 'lucide-react';

const ProofCounters = () => {
  const yearsCounter = useCountUp({ end: 18, suffix: '+' });
  const clientsCounter = useCountUp({ end: 100, suffix: '+' });
  const sectorsCounter = useCountUp({ end: 12, suffix: '+' });
  const practicesCounter = useCountUp({ end: 5, suffix: '' });

  const counters = [
    {
      icon: Calendar,
      count: yearsCounter.count,
      label: 'Years of Experience',
      description: 'Trusted expertise since 2005',
      ref: yearsCounter.elementRef
    },
    {
      icon: Users,
      count: clientsCounter.count,
      label: 'Clients Served',
      description: 'From SMEs to global organizations',
      ref: clientsCounter.elementRef
    },
    {
      icon: Building2,
      count: sectorsCounter.count,
      label: 'Sectors Covered',
      description: 'Diverse industry expertise',
      ref: sectorsCounter.elementRef
    },
    {
      icon: Target,
      count: practicesCounter.count,
      label: 'Core Practice Areas',
      description: 'Comprehensive service portfolio',
      ref: practicesCounter.elementRef
    }
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-section-title font-playfair mb-6">
            Why Partner With Us
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => {
            const Icon = counter.icon;
            return (
              <div
                key={index}
                ref={counter.ref}
                className="counter-card text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="counter-icon w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gold mb-2 font-playfair">
                  {counter.count}
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  {counter.label}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {counter.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProofCounters;