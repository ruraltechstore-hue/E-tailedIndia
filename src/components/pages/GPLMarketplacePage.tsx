import { Package, Download, Code, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function GPLMarketplacePage() {
  const offerings = [
    { title: '2000+ GPL Themes', icon: Package },
    { title: '5000+ GPL Plugins', icon: Code },
    { title: 'SaaS/Script bundles', icon: Download },
    { title: 'App source code', icon: Code },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-marketplace text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">GPL Marketplace</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Unlimited GPL products for freelancers, agencies & resellers
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unlimited GPL Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access thousands of premium GPL products at affordable prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Card key={index} hover>
                  <CardBody className="p-8 text-center">
                    <div className="w-16 h-16 bg-vertical-marketplace-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-vertical-marketplace" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900">{offering.title}</h3>
                  </CardBody>
                </Card>
              );
            })}
          </div>

          <div className="bg-vertical-marketplace-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Perfect For</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {['Freelancers', 'Agencies', 'Resellers'].map((role, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-vertical-marketplace" />
                    <p className="font-bold text-lg text-gray-900">{role}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg">
                GPL marketplace website setup available
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get GPL Access Today</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get unlimited access to thousands of premium GPL products for one low price.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-marketplace flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Unlimited Downloads</h4>
                    <p className="text-gray-600">Download as many products as you need</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-marketplace flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regular Updates</h4>
                    <p className="text-gray-600">New products added weekly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-marketplace flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Support Included</h4>
                    <p className="text-gray-600">Get help with installation and setup</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="GPL Marketplace"
              serviceOptions={['GPL Themes Access', 'GPL Plugins Access', 'Full GPL Membership', 'GPL Marketplace Website Setup']}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-marketplace">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Access Unlimited GPL Products</h3>
          <p className="text-xl text-white/80 mb-8">
            Get access to thousands of premium themes, plugins, and scripts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-vertical-marketplace hover:bg-gray-100"
              onClick={() => window.location.hash = '#signup'}
            >
              Get Access Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => window.location.hash = '#contact-page'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
