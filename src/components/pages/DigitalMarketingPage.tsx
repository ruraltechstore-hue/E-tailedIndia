import { useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';
import { Megaphone, Target, BarChart3, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function DigitalMarketingPage() {
  const navigate = useNavigate();

  const services = [
    'SEO & organic growth strategy',
    'Google Ads & search campaigns',
    'Meta & Instagram ad management',
    'Social media content & management',
    'Email & WhatsApp marketing',
    'Lead generation funnels',
    'Marketing analytics & reporting',
    'SaaS onboarding & deployment support',
  ];

  const benefits = [
    'Data-driven campaign strategy',
    'Measurable ROI tracking',
    'Custom SaaS integration',
    'Dedicated account manager',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Megaphone className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Digital Marketing & SaaS</h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed">
            Full-funnel marketing campaigns and SaaS solutions that drive leads, sales, and growth
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing & SaaS Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital marketing and software solutions tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} hover>
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-brand-subtle rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-bold text-gray-900">{service}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-brand-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Every Package Includes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <BarChart3 className="w-10 h-10 mx-auto mb-3 text-brand" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get a Custom Marketing Plan</h2>
              <p className="text-lg text-gray-600 mb-6">
                Tell us your goals and we will design a digital marketing and SaaS strategy built for growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Campaign Strategy</h4>
                    <p className="text-gray-600">SEO, paid ads, and social media aligned to your audience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">SaaS Setup & Integration</h4>
                    <p className="text-gray-600">CRM, automation, and analytics tools deployed for your team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Optimization</h4>
                    <p className="text-gray-600">Monthly reports and continuous improvement for better ROI</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Digital Marketing & SaaS"
              serviceOptions={services}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h3>
          <p className="text-xl text-brand-foreground/85 mb-8">
            Book a free consultation for digital marketing and SaaS solutions
          </p>
          <Button
            size="lg"
            className="bg-white text-brand hover:bg-gray-100"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
