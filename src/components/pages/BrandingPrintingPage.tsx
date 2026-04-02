import { Paintbrush, FileText, Printer, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function BrandingPrintingPage() {
  const services = [
    'Logo',
    'Visiting cards',
    'Letterheads',
    'Posters',
    'Brochures',
    'Certificates',
    'Office IDs',
    'T-shirts',
    'Standees',
    'Banners',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-branding text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Paintbrush className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Branding & Printing</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Build your brand identity with professional design and printing
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Build Your Brand Identity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional branding and printing services for all your business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} hover>
                <CardBody className="p-6 text-center">
                  <div className="w-12 h-12 bg-vertical-branding-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Paintbrush className="w-6 h-6 text-vertical-branding" />
                  </div>
                  <h3 className="font-bold text-gray-900">{service}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-vertical-branding-muted rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Branding Services?</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {['Professional Designs', 'Fast Turnaround', 'Affordable Pricing'].map((benefit, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-vertical-branding" />
                    <p className="font-semibold text-gray-900">{benefit}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Create Your Brand Identity</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get professional branding and printing services at affordable prices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-branding flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Designs</h4>
                    <p className="text-gray-600">Expert designers for all your needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-branding flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                    <p className="text-gray-600">Quick turnaround times</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-branding flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Unlimited Revisions</h4>
                    <p className="text-gray-600">We work until you're satisfied</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Branding & Printing"
              serviceOptions={services}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-branding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Create Your Brand Identity Today</h3>
          <p className="text-xl text-white/80 mb-8">
            Professional designs and printing delivered fast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-vertical-branding hover:bg-gray-100"
              onClick={() => window.location.hash = '#signup'}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => window.location.hash = '#contact-page'}
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
