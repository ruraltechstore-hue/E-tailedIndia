import { useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import { servicesData } from '../../lib/services-data';

export default function AllServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Services | Digital Marketing & SaaS Solutions | E-tailedIndia" 
        description="Explore our comprehensive digital solutions including web development, e-commerce, digital marketing, automation, branding, and custom SaaS software." 
      />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
            alt="Team working" 
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Digital Marketing & SaaS Services
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            End-to-end solutions across <strong>8 service categories</strong> — designed to scale your business in the digital era.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div 
                  key={service.id} 
                  className={`flex flex-col lg:flex-row gap-12 items-center bg-white rounded-3xl p-6 shadow-xl ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 h-80 lg:h-[400px] overflow-hidden rounded-2xl relative group cursor-pointer" onClick={() => navigate(service.route)}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-6 left-6 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md bg-white/30 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 px-4 lg:px-8">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand/10 text-brand font-semibold text-sm mb-4">
                      <Icon className="w-4 h-4" />
                      <span>{service.title}</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 hover:text-brand transition-colors cursor-pointer" onClick={() => navigate(service.route)}>
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">What's Included</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.servicesIncluded.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg border border-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      size="lg"
                      className="group shadow-md"
                      onClick={() => navigate(service.route)}
                    >
                      View Details
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Tell us about your digital needs and we will craft a solution tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 hover:text-white"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              className="bg-white text-brand hover:bg-gray-100 border-none shadow-xl"
              onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
