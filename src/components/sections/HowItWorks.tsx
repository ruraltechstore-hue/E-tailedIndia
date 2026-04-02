import { UserPlus, FileCheck, Wallet, TrendingUp, Users, Award } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Register & KYC',
      description:
        'Sign up with your details, complete KYC verification with Aadhaar and PAN. Process takes 24-48 hours.',
      color: '#0052cc',
      step: '01',
    },
    {
      icon: FileCheck,
      title: 'Get Certified',
      description:
        'Receive your certificate, ID card, and login credentials. Access complete training materials and support.',
      color: '#009933',
      step: '02',
    },
    {
      icon: Wallet,
      title: 'Add Wallet Balance',
      description:
        'Top up your wallet via UPI or Net Banking. You\'re now ready to start offering services to customers.',
      color: '#ff9933',
      step: '03',
    },
    {
      icon: TrendingUp,
      title: 'Start Transactions',
      description:
        'Offer 114+ services to customers. Earn instant commission on every successful transaction.',
      color: '#e91e63',
      step: '04',
    },
    {
      icon: Users,
      title: 'Build Your Network',
      description:
        'Add retailers under you (as Distributor) and earn from their transactions. Grow your passive income.',
      color: '#00bcd4',
      step: '05',
    },
    {
      icon: Award,
      title: 'Scale & Earn',
      description:
        'Upgrade to higher tiers, expand across regions, launch white-label portal. Sky is the limit!',
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
            Start your digital business journey in 6 simple steps. Get started today and begin earning
            within 24 hours!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gray-300 -translate-x-4 z-0" />
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
              <div className="text-4xl font-bold text-brand mb-2">24 Hours</div>
              <p className="text-gray-600">Approval Time</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">Zero</div>
              <p className="text-gray-600">Monthly Fees</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-6 text-center">
              <div className="text-4xl font-bold text-warning-foreground mb-2">Lifetime</div>
              <p className="text-gray-600">Earning Potential</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
