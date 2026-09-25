import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../seo/SEO';
import Button from '../ui/Button';
import Card, { CardBody } from '../ui/Card';
import ServiceContactForm from '../ui/ServiceContactForm';
import { servicesData } from '../../lib/services-data';

interface ServiceDetailPageProps {
  serviceId: string;
}

export default function ServiceDetailPage({ serviceId }: ServiceDetailPageProps) {
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  const Icon = service.icon;

  const processSteps = [
    { title: 'Discovery & Consultation', desc: 'We understand your goals and requirements.' },
    { title: 'Strategy & Planning', desc: 'We craft a custom strategy tailored to you.' },
    { title: 'Execution & Delivery', desc: 'We build and implement the solution.' },
    { title: 'Support & Growth', desc: 'We provide ongoing support to ensure success.' },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <SEO 
        title={`${service.title} | E-tailedIndia`} 
        description={service.shortDescription} 
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md"
            style={{ backgroundColor: `${service.color}40` }}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
            {service.shortDescription}
          </p>
          <Button size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Overview & Included Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.servicesIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: service.color }} />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={service.image} 
                alt={`${service.title} examples`} 
                className="relative z-10 rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed with our {service.title} solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <Card key={idx} hover className="border-none shadow-lg">
                <CardBody className="p-8 text-center flex flex-col items-center">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <CheckCircle2 className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature}</h3>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, transparent workflow from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div 
                  className="w-24 h-24 mx-auto bg-white border-4 rounded-full flex items-center justify-center mb-6 shadow-xl font-bold text-2xl"
                  style={{ borderColor: service.color, color: service.color }}
                >
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact us today to discuss your {service.title} needs. Our experts will craft a tailored solution to help you reach your goals.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')} className="bg-green-600 hover:bg-green-700 text-white border-none">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-2 text-gray-900">
              <ServiceContactForm 
                serviceName={service.title}
                serviceOptions={service.servicesIncluded}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
