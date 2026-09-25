import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import { servicesData } from '../../lib/services-data';
import Button from '../ui/Button';

export default function ServicesPreview() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to build, grow, and automate your business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                hover 
                className="overflow-hidden border-none shadow-lg cursor-pointer group flex flex-col h-full bg-white transition-all duration-300 hover:-translate-y-2"
                onClick={() => navigate(service.route)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/20"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardBody className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  <div className="flex items-center text-brand font-semibold text-sm">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => navigate('/services')} variant="outline" className="border-2 border-brand text-brand hover:bg-brand hover:text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
