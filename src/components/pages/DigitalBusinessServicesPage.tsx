import { Briefcase, Globe, CreditCard, Mail, Package, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function DigitalBusinessServicesPage() {
  const services = [
    'Business Website (1–5 pages)',
    'Premium E-Commerce Website',
    'Portfolio Website',
    'Landing Page Design',
    'Digital Business Card',
    'Logo Design',
    'Branding Kit',
    'Business Email Setup',
    'Domain + Hosting Packages',
  ];

  const benefits = [
    { icon: CheckCircle2, text: 'Fast delivery', color: 'text-brand' },
    { icon: CheckCircle2, text: 'High-quality designs', color: 'text-accent' },
    { icon: CheckCircle2, text: 'Affordable pricing', color: 'text-warning-foreground' },
    { icon: CheckCircle2, text: 'White-label work', color: 'text-vertical-crm' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Digital Business Services</h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed">
            Modern digital services every business needs to succeed online
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Business Essentials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-Tailed Digital India provides modern digital services every business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} hover>
                <CardBody className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-subtle rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900">{service}</h3>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-brand-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Businesses Choose Us
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index}>
                    <CardBody className="p-6 text-center">
                      <Icon className={`w-12 h-12 mx-auto mb-3 ${benefit.color}`} />
                      <p className="font-semibold text-gray-900">{benefit.text}</p>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Digital Business Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fill out the form and our team will get back to you within 24 hours with a customized quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                    <p className="text-gray-600">Get your services delivered within agreed timelines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">White-Label Options</h4>
                    <p className="text-gray-600">Resell under your own brand name</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600">Get help whenever you need it</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Digital Business Services"
              serviceOptions={services}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Digital Business?</h3>
          <p className="text-xl text-brand-foreground/85 mb-8">
            Get professional digital services delivered fast with white-label options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand hover:bg-gray-100"
              onClick={() => window.location.hash = '#signup'}
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => window.location.hash = '#contact-page'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
