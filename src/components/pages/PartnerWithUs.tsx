import { Check, Users, Building2, Globe, Rocket, Truck, Code, Crown } from 'lucide-react';
import Card, { CardBody, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

export default function PartnerWithUs() {
  const packages = [
    {
      name: 'Retailer',
      icon: Users,
      price: '10,000',
      color: '#009933',
      description: 'Perfect for individuals starting their digital business',
      features: [
        'Access to 100+ services',
        'AEPS, DMT, Recharge, Bill Payment',
        'Commission on every transaction',
        'Digital wallet & instant payouts',
        'Training & support materials',
        'Certificate & ID card',
        'WhatsApp support',
        'Mobile app access',
      ],
    },
    {
      name: 'Distributor',
      icon: Building2,
      price: '15,000',
      color: '#0052cc',
      description: 'Manage retailers and earn from their transactions',
      features: [
        'All Retailer benefits',
        'Create unlimited retailers',
        'Multi-level commission earnings',
        'Team management dashboard',
        'Performance analytics',
        'Wallet top-up for retailers',
        'Priority support',
        'Marketing materials',
      ],
    },
    {
      name: 'Super Distributor',
      icon: Globe,
      price: '25,000',
      color: '#ff9933',
      popular: true,
      description: 'Scale your business across regions',
      features: [
        'All Distributor benefits',
        'Manage multiple distributors',
        'Regional expansion rights',
        'Higher commission slabs',
        'Advanced analytics & reports',
        'API access for integration',
        'Dedicated account manager',
        'Custom branding options',
      ],
    },
    {
      name: 'White Label',
      icon: Rocket,
      price: '80,000',
      color: '#e91e63',
      description: 'Launch your own branded platform',
      features: [
        'Fully branded portal with your logo',
        'Custom domain name',
        'Own commission structure',
        'Complete downline management',
        'White-label mobile apps',
        'Custom pricing control',
        'Full admin dashboard',
        'Lifetime license',
      ],
    },
    {
      name: 'Logistics Delivery',
      icon: Truck,
      price: '2,36,000',
      color: '#00bcd4',
      description: 'Complete logistics and delivery franchise',
      features: [
        'Delivery franchise setup',
        'Partner with major platforms',
        'Courier & cargo services',
        'Pickup & delivery management',
        'Rider onboarding system',
        'Route optimization',
        'Real-time tracking',
        'Monthly revenue sharing',
      ],
    },
    {
      name: 'Enterprise Software',
      icon: Code,
      price: '2,00,000',
      color: '#9c27b0',
      description: 'Complete SaaS platform for your organization',
      features: [
        'Full-featured SaaS platform',
        'Multi-tenant architecture',
        'All 100+ services integrated',
        'Custom domain & branding',
        'Unlimited users & transactions',
        'Cloud hosting included (1 year)',
        'Training & onboarding',
        'Technical support (1 year)',
      ],
    },
    {
      name: 'Full Admin Software',
      icon: Crown,
      price: '4,50,000',
      color: '#f44336',
      subtitle: 'Without Source Code',
      description: 'Complete platform with lifetime updates',
      features: [
        'Complete admin control panel',
        'All Enterprise features',
        'White-label ready',
        'Lifetime updates',
        'Priority bug fixes',
        'Custom feature requests',
        '24/7 dedicated support',
        'Server setup assistance',
      ],
    },
    {
      name: 'Full Admin + Source',
      icon: Crown,
      price: '6,00,000',
      color: '#ff5722',
      subtitle: 'With Source Code',
      description: 'Own the complete platform - modify as needed',
      features: [
        'Complete source code ownership',
        'Full customization rights',
        'All backend & frontend code',
        'Database schemas',
        'Documentation & guides',
        'Developer handover session',
        'Lifetime updates (1 year)',
        'Technical consultation',
      ],
      premium: true,
    },
  ];

  const handleInquiry = (packageName: string) => {
    const message = `Hi! I'm interested in the ${packageName} package. Please share more details.`;
    const whatsappUrl = `https://wa.me/918125752562?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Partner With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package to start your digital business journey. From individual
            retailers to enterprise solutions, we have options for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.name}
                className={`relative ${
                  pkg.popular ? 'ring-4 ring-warning/60 shadow-2xl' : ''
                } ${pkg.premium ? 'ring-4 ring-danger/50 shadow-2xl' : ''}`}
                hover
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-warning-muted0 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      POPULAR
                    </span>
                  </div>
                )}
                {pkg.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-danger-muted0 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      PREMIUM
                    </span>
                  </div>
                )}
                <CardHeader
                  className="text-center"
                  style={{ backgroundColor: `${pkg.color}10` }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${pkg.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: pkg.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  {pkg.subtitle && (
                    <p className="text-sm text-gray-600 mt-1">{pkg.subtitle}</p>
                  )}
                  <div className="mt-4">
                    <span className="text-4xl font-bold" style={{ color: pkg.color }}>
                      ₹{pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{pkg.description}</p>
                </CardHeader>
                <CardBody className="p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    style={{ backgroundColor: pkg.color }}
                    onClick={() => handleInquiry(pkg.name)}
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <div className="bg-brand rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Not sure which package to choose?</h3>
          <p className="text-xl mb-8 text-brand-foreground/85">
            Our team is here to help you select the perfect plan for your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand hover:bg-gray-100"
              onClick={() => window.open('https://wa.me/918125752562', '_blank')}
            >
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => (window.location.hash = '#contact')}
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardBody className="p-6 text-center">
              <div className="w-12 h-12 bg-accent-subtle rounded-full mx-auto mb-4 flex items-center justify-center">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Quick Setup</h4>
              <p className="text-sm text-gray-600">
                Get started within 24 hours with complete training and support
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-6 text-center">
              <div className="w-12 h-12 bg-brand-subtle rounded-full mx-auto mb-4 flex items-center justify-center">
                <Check className="w-6 h-6 text-brand" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Ongoing Support</h4>
              <p className="text-sm text-gray-600">
                24/7 technical support via WhatsApp, email, and phone
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-6 text-center">
              <div className="w-12 h-12 bg-warning-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Check className="w-6 h-6 text-warning-foreground" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Proven Success</h4>
              <p className="text-sm text-gray-600">
                Join 11,000+ successful partners across 4+ states
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
