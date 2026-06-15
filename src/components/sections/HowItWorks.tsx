import { MessageSquare, FileSearch, Palette, Rocket, BarChart, Headphones } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery Call',
      description:
        'We understand your business goals, target audience, and current digital presence to craft the right strategy.',
      color: '#0052cc',
      step: '01',
    },
    {
      icon: FileSearch,
      title: 'Strategy & Proposal',
      description:
        'Receive a tailored plan covering marketing channels, SaaS requirements, timelines, and transparent pricing.',
      color: '#009933',
      step: '02',
    },
    {
      icon: Palette,
      title: 'Design & Development',
      description:
        'Our team builds your campaigns, websites, automations, or custom SaaS product with regular progress updates.',
      color: '#ff9933',
      step: '03',
    },
    {
      icon: Rocket,
      title: 'Launch & Go Live',
      description:
        'Deploy your marketing campaigns, CRM systems, or SaaS platform with full testing and quality assurance.',
      color: '#e91e63',
      step: '04',
    },
    {
      icon: BarChart,
      title: 'Optimize & Scale',
      description:
        'Track performance with analytics, A/B testing, and continuous optimization to maximize ROI and growth.',
      color: '#00bcd4',
      step: '05',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description:
        'Dedicated account management, monthly reports, and 24/7 support to keep your marketing and SaaS running smoothly.',
      color: '#9c27b0',
      step: '06',
    },
  ];

  return (
    <section className="py-20 bg-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first consultation to ongoing growth — our proven 6-step process delivers
            marketing and SaaS results that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/4 left-full w-8 h-0.5 bg-gray-300 -translate-x-4 z-0" />
                )}
                <Card hover className="relative z-10">
                  <CardBody className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: step.color }} />
                      </div>
                      <span
                        className="text-5xl font-bold opacity-20"
                        style={{ color: step.color }}
                      >
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardBody className="p-6 text-center">
              <div className="text-4xl font-bold text-brand mb-2">48 Hours</div>
              <p className="text-gray-600">Strategy Delivery</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">Flexible</div>
              <p className="text-gray-600">Pricing Plans</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-6 text-center">
              <div className="text-4xl font-bold text-warning-foreground mb-2">Measurable</div>
              <p className="text-gray-600">ROI & Results</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
