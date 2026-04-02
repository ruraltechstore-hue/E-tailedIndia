import { Target, Eye, Award, TrendingUp } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To connect every rural and urban Indian with one digital platform for income and access to essential services.',
      color: '#0052cc',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Build India\'s largest decentralized digital franchise network empowering citizens in every village.',
      color: '#009933',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Innovation, Transparency, Empowerment, and Commitment to Rural Development.',
      color: '#ff9933',
    },
    {
      icon: TrendingUp,
      title: 'Our Impact',
      description: 'Empowering 11,000+ retailers across 4 states with sustainable digital income opportunities.',
      color: '#e91e63',
    },
  ];

  return (
    <section id="about" className="py-20 bg-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Etailed Digital India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A revolutionary initiative by Etailed Digital Services Pvt. Ltd. to democratize access to digital, financial, and e-commerce services across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} hover>
                <CardBody className="text-center p-6 space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: value.color }} />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardBody className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Company Background
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Etailed Digital Services Pvt. Ltd. was founded with a vision to bridge the digital divide in India. We believe that every citizen, regardless of their location, deserves access to world-class digital services.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our platform combines cutting-edge technology with deep understanding of Indian market needs. We've built an ecosystem that enables entrepreneurs at every level - from retailers in small villages to white-label partners serving entire regions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Led by CEO & Founder Patlola Prashanth, our team is committed to creating sustainable income opportunities while bringing essential services to every doorstep.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-brand rounded-xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">Our Achievements</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Active Retailers</span>
                      <span className="text-2xl font-bold">11,000+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">States Covered</span>
                      <span className="text-2xl font-bold">4+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Daily Transactions</span>
                      <span className="text-2xl font-bold">10,000+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Services Offered</span>
                      <span className="text-2xl font-bold">100+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    PP
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Patlola Prashanth</h4>
                    <p className="text-brand font-semibold mb-2">CEO & Founder</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Visionary entrepreneur with 10+ years in fintech and digital services. Led the
                      creation of India's most comprehensive multi-service platform.
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">
                    <strong>Proven Track Record:</strong> 11,000+ successful partners
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">
                    <strong>Comprehensive Platform:</strong> 114+ services, 9 categories
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">
                    <strong>Lower Investment:</strong> Start from just ₹10,000
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">
                    <strong>Better Commissions:</strong> Earn more with fair rates
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">
                    <strong>24/7 Support:</strong> Always available to help you succeed
                  </span>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
