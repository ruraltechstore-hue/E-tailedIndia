import { useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';
import { Store, ShoppingBag, Rocket, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function BusinessSystemsPage() {
  const navigate = useNavigate();

  const systems = [
    'Multi-vendor marketplace',
    'Dropshipping store',
    'Service booking app',
    'Hyperlocal delivery platform',
    'Online course LMS',
    'Recharge & bill payment portal',
    'Franchise management software',
    'Ticket booking system',
  ];

  const included = [
    'Admin panel',
    'Staff accounts',
    'Training videos',
    'Delivery support',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-business text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Store className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Ready-Made Business Systems</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Start a business in 24 hours with complete ready-made systems
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start a Business in 24 Hours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer complete ready-made systems for various business models
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {systems.map((system, index) => (
              <Card key={index} hover>
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-vertical-business-muted rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-vertical-business" />
                  </div>
                  <h3 className="font-bold text-gray-900">{system}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-vertical-business-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">All Systems Come With</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {included.map((item, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-vertical-business" />
                    <p className="font-semibold text-gray-900">{item}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Launch Your Business System</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get a complete, ready-to-use business system delivered in 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-business flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete System</h4>
                    <p className="text-gray-600">Admin panel, user accounts, and all features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-business flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Training Included</h4>
                    <p className="text-gray-600">Videos and documentation to get started</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-business flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600">Technical support when you need it</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Ready-Made Business Systems"
              serviceOptions={systems}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-business">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Launch Your Business Today</h3>
          <p className="text-xl text-white/80 mb-8">
            Get a complete business system ready to use in 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate('#contact')}
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

