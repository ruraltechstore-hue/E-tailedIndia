import { Globe, ShoppingBag, Layout, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function WebsiteECommercePage() {
  const solutions = [
    'Static websites',
    'Dynamic websites',
    'Online stores',
    'School/College websites',
    'Salon & Spa booking portals',
    'Restaurant ordering systems',
    'Multi-category marketplaces',
    'Dropshipping automated stores',
  ];

  const features = [
    'Responsive Design',
    'Admin Panel',
    'Payment Gateway',
    'Order Management',
    'SEO Ready',
    'Support Included',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-ecommerce text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Website & E-Commerce Solutions</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Complete website solutions tailored for all industries
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Website Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build professional websites tailored for all industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {solutions.map((solution, index) => (
              <Card key={index} hover>
                <CardBody className="p-6 text-center">
                  <div className="w-12 h-12 bg-vertical-ecommerce-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-vertical-ecommerce" />
                  </div>
                  <h3 className="font-bold text-gray-900">{solution}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-vertical-ecommerce-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-ecommerce flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Website Built</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fill out the form and our team will get back to you within 24 hours with a customized quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-ecommerce flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Design</h4>
                    <p className="text-gray-600">Beautiful, modern websites that convert</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-ecommerce flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">All Features Included</h4>
                    <p className="text-gray-600">Payment gateway, admin panel, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-ecommerce flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600">Free support and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Website & E-Commerce Solutions"
              serviceOptions={solutions}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-ecommerce">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Launch Your Online Store Today</h3>
          <p className="text-xl text-white/80 mb-8">
            Professional e-commerce websites with all features included
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-vertical-ecommerce hover:bg-gray-100"
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
