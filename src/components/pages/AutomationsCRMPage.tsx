import { Bot, MessageSquare, Mail, TrendingUp, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function AutomationsCRMPage() {
  const automations = [
    'WhatsApp Business API',
    'WhatsApp Chatbot',
    'WhatsApp Order Bot',
    'Bulk messaging system',
    'CRM setup',
    'Email automation',
    'Lead tracking funnel',
    'Sales funnel design',
  ];

  const benefits = [
    'Save time',
    'Increase conversions',
    'Boost customer retention',
    'Faster follow-ups',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-crm text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Automations & CRM</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Make your business automated with advanced systems and tools
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Make Your Business Automated</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create advanced automation systems to streamline your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {automations.map((automation, index) => (
              <Card key={index} hover>
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-vertical-crm-muted rounded-full flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-vertical-crm" />
                  </div>
                  <h3 className="font-bold text-gray-900">{automation}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-vertical-crm-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Automation?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-vertical-crm" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Automate Your Business</h2>
              <p className="text-lg text-gray-600 mb-6">
                Let us set up powerful automation tools that save you time and increase efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-crm flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Save 20+ Hours/Week</h4>
                    <p className="text-gray-600">Automate repetitive tasks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-crm flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Automated Responses</h4>
                    <p className="text-gray-600">Never miss a customer inquiry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-crm flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Setup & Training</h4>
                    <p className="text-gray-600">We handle everything for you</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Automations & CRM"
              serviceOptions={automations}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-crm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Automate Your Business Today</h3>
          <p className="text-xl text-white/80 mb-8">
            Save time and increase efficiency with our automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
