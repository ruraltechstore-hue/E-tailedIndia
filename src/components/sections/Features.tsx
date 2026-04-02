import {
  Wallet,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  Zap,
  Globe,
  Award,
  Clock,
  HeadphonesIcon,
  BarChart3,
  Lock,
} from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function Features() {
  const features = [
    {
      icon: Wallet,
      title: 'Instant Wallet System',
      description: 'Real-time wallet with instant top-up, automatic commission credit, and seamless payouts via RazorpayX.',
      color: '#009933',
    },
    {
      icon: Users,
      title: 'Multi-Level Hierarchy',
      description: 'Build your team with unlimited distributors and retailers. Earn from every transaction in your network.',
      color: '#0052cc',
    },
    {
      icon: TrendingUp,
      title: 'Auto Commission Split',
      description: 'Automated multi-level commission distribution. Earnings credited instantly to all stakeholders.',
      color: '#ff9933',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-grade security with data encryption, KYC verification, and full regulatory compliance.',
      color: '#e91e63',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Fully responsive platform optimized for mobile. Access all services from anywhere, anytime.',
      color: '#00bcd4',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant transaction processing with real-time status updates and immediate confirmations.',
      color: '#ff9800',
    },
    {
      icon: Globe,
      title: 'Pan-India Coverage',
      description: 'Services available across all states with regional language support and local payment methods.',
      color: '#4caf50',
    },
    {
      icon: Award,
      title: 'Certificates & IDs',
      description: 'Auto-generated certificates and ID cards for all retailers with QR code verification.',
      color: '#9c27b0',
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock service availability with no downtime. Your business never sleeps.',
      color: '#607d8b',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'WhatsApp, phone, and email support available 24/7. Expert team ready to assist you.',
      color: '#3f51b5',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reports, transaction history, commission tracking, and performance insights.',
      color: '#f44336',
    },
    {
      icon: Lock,
      title: 'KYC & Verification',
      description: 'Secure KYC process with Aadhaar, PAN verification. Build trust with verified partners.',
      color: '#ff5722',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run a successful digital business. Built with cutting-edge technology
            and designed for maximum efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} hover>
                <CardBody className="p-6 text-center space-y-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-brand rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg text-brand-foreground/85 mb-6">
                Join 11,000+ successful partners who are earning daily income through our platform.
                Start your digital franchise journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.hash = '#signup')}
                  className="px-8 py-3 bg-white text-brand font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Now
                </button>
                <button
                  onClick={() => (window.location.hash = '#partner')}
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">114+</p>
                <p className="text-sm opacity-90">Total Services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">9</p>
                <p className="text-sm opacity-90">Categories</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm opacity-90">Uptime</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">Instant</p>
                <p className="text-sm opacity-90">Payouts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
