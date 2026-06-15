import {
  Search,
  Share2,
  Target,
  Cloud,
  Bot,
  BarChart3,
  Smartphone,
  Zap,
  Globe,
  PenTool,
  HeadphonesIcon,
  Layers,
} from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function Features() {
  const features = [
    {
      icon: Search,
      title: 'SEO & Organic Growth',
      description: 'Rank higher on Google with technical SEO, content strategy, and on-page optimization that drives qualified traffic.',
      color: '#009933',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand presence across Instagram, Facebook, LinkedIn, and YouTube with content, reels, and community management.',
      color: '#0052cc',
    },
    {
      icon: Target,
      title: 'Paid Ads Management',
      description: 'Maximize ROI with Google Ads, Meta Ads, and YouTube campaigns managed by certified performance marketers.',
      color: '#ff9933',
    },
    {
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Custom CRM, ERP, HRMS, LMS, and industry-specific SaaS products built, deployed, and maintained for your business.',
      color: '#e91e63',
    },
    {
      icon: Bot,
      title: 'Automation & CRM',
      description: 'WhatsApp bots, email workflows, sales funnels, and lead nurturing systems that convert prospects automatically.',
      color: '#00bcd4',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Real-time dashboards, conversion tracking, and monthly performance reports so you always know what is working.',
      color: '#ff9800',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Solutions',
      description: 'Responsive websites, progressive web apps, and mobile SaaS interfaces optimized for every device.',
      color: '#4caf50',
    },
    {
      icon: Zap,
      title: 'Fast Deployment',
      description: 'Launch marketing campaigns and SaaS products quickly with our proven templates and agile delivery process.',
      color: '#9c27b0',
    },
    {
      icon: Globe,
      title: 'Pan-India Reach',
      description: 'Scale your brand across India with localized campaigns, regional targeting, and multi-language support.',
      color: '#607d8b',
    },
    {
      icon: PenTool,
      title: 'Content & Branding',
      description: 'Professional logos, brand kits, ad creatives, and copywriting that make your business stand out.',
      color: '#3f51b5',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'Account managers, strategy calls, and 24/7 WhatsApp support to keep your growth on track.',
      color: '#f44336',
    },
    {
      icon: Layers,
      title: 'White-Label Delivery',
      description: 'Agencies and partners can resell our marketing and SaaS solutions under their own brand with full backend support.',
      color: '#ff5722',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Grow Online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From lead generation to SaaS deployment — a complete digital marketing and software stack
            built to scale your business.
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
                Join 500+ businesses that trust us for digital marketing campaigns, SaaS products,
                and automation solutions that deliver real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => (window.location.hash = '#contact-page')}
                  className="px-8 py-3 bg-white text-brand font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Now
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-sm opacity-90">SaaS Products</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">8</p>
                <p className="text-sm opacity-90">Service Categories</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">3x</p>
                <p className="text-sm opacity-90">Avg. Lead Growth</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="text-sm opacity-90">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
