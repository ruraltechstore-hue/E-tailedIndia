import { useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';
import { Cloud, Server, Database, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function SaaSSoftwarePage() {
  const navigate = useNavigate();

  const systems = [
    'CRM',
    'ERP',
    'HRMS',
    'LMS',
    'Ticketing system',
    'POS software',
    'Inventory software',
    'Mobile app builder',
    'Website builder',
    'Lead management system',
  ];

  const features = [
    'Admin Access',
    'Dashboard',
    'Support',
    'White-label Option',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-saas text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cloud className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">SaaS Software Suite</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Powerful business software solutions ready to use
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Business Software</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide ready-to-use SaaS systems for all business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {systems.map((system, index) => (
              <Card key={index} hover>
                <CardBody className="p-6 text-center">
                  <div className="w-12 h-12 bg-vertical-saas-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-6 h-6 text-vertical-saas" />
                  </div>
                  <h3 className="font-bold text-gray-900">{system}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-vertical-saas-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Each System Includes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-vertical-saas" />
                    <p className="font-semibold text-gray-900">{feature}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your SaaS Software</h2>
              <p className="text-lg text-gray-600 mb-6">
                Powerful business software solutions customized for your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-saas flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Admin Access</h4>
                    <p className="text-gray-600">Full control over your system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-saas flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cloud Hosting Included</h4>
                    <p className="text-gray-600">Reliable and secure hosting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-saas flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Training & Support</h4>
                    <p className="text-gray-600">Complete onboarding and ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="SaaS Software Suite"
              serviceOptions={systems}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-saas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Get Your Business Software Today</h3>
          <p className="text-xl text-white/80 mb-8">
            Powerful SaaS solutions with admin access and full support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
