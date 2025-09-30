import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import auditImage from '../assets/consultant-reviewing-reports.jpg';
import hrImage from '../assets/hr-training-session.jpg';
import moderBoardroomImage from '../assets/modern-boardroom.jpg';

const ServiceSpotlight = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const spotlights = [
    {
      title: "Audit & Assurance Excellence",
      benefit: "Strengthen financial integrity and build stakeholder confidence",
      description: "Independent reviews that enhance compliance and provide clarity",
      image: auditImage,
      cta: "Request Audit Proposal"
    },
    {
      title: "Strategic Tax Advisory", 
      benefit: "Optimize tax efficiency while ensuring full compliance",
      description: "Proactive planning and expert guidance for all tax matters",
      image: moderBoardroomImage,
      cta: "Get Tax Consultation"
    },
    {
      title: "HR Consulting Solutions",
      benefit: "Build stronger teams and enhance organizational culture",
      description: "Comprehensive HR services from audits to capacity building",
      image: hrImage,
      cta: "Explore HR Services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spotlights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [spotlights.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % spotlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + spotlights.length) % spotlights.length);
  };

  return (
    <section className="section-padding bg-muted/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title-with-underline text-foreground font-playfair">
            Service Spotlight
          </h2>
          <p className="text-lead mt-6">
            Discover how our specialized services drive real business results
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-background shadow-xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {spotlights.map((spotlight, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-foreground mb-4">
                        {spotlight.title}
                      </h3>
                      <p className="text-lg text-gold font-medium mb-4">
                        {spotlight.benefit}
                      </p>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {spotlight.description}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 bg-gold text-gold-foreground px-6 py-3 rounded-lg font-medium hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-fit group"
                      >
                        <span>{spotlight.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={spotlight.image}
                        alt={spotlight.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background border border-border rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {spotlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gold scale-125' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSpotlight;