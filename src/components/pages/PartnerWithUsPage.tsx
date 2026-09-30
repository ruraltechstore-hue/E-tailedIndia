import { useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';
import {
  Check,
  Users,
  Building2,
  Globe,
  TrendingUp,
  Shield,
  Handshake,
  Zap,
  Award,
  Target,
  Megaphone,
  Cloud,
  Layers,
  BarChart3,
  MessageSquare,
  FileCheck,
  Rocket,
} from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardBody } from '../ui/Card';

export default function PartnerWithUsPage() {
  const navigate = useNavigate();

  const partnershipModels = [
    {
      icon: Megaphone,
      title: 'Marketing Agency Partner',
      description:
        'White-label SEO, paid ads, social media, and content marketing. We fulfill campaigns while you manage client relationships.',
      highlights: ['SEO & Google Ads', 'Social media management', 'Lead generation funnels', 'Monthly reporting'],
      color: '#0052cc',
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions Partner',
      description:
        'Resell and deploy CRM, ERP, HRMS, LMS, and custom SaaS products. We handle development, hosting, and support.',
      highlights: ['CRM & ERP deployment', 'Custom SaaS builds', 'Hosting & maintenance', 'Client onboarding'],
      color: '#009933',
    },
    {
      icon: Layers,
      title: 'White-Label Partner',
      description:
        'Offer the full E-Tailed portfolio under your brand — marketing, web, automation, and SaaS with complete backend delivery.',
      highlights: ['Your brand, our delivery', 'Unlimited client projects', 'Dedicated account manager', 'Sales & demo resources'],
      color: '#ff9933',
      featured: true,
    },
    {
      icon: BarChart3,
      title: 'Enterprise Partner',
      description:
        'For agencies and businesses scaling multi-location marketing stacks, custom integrations, and enterprise SaaS rollouts.',
      highlights: ['Multi-brand campaigns', 'API & integrations', 'SLA-backed support', 'Team training'],
      color: '#e91e63',
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'White-Label Delivery',
      description: 'Offer digital marketing and SaaS services under your own brand with full backend fulfillment',
    },
    {
      icon: Globe,
      title: 'Complete Service Portfolio',
      description: 'Marketing, web development, automation, SaaS products, and analytics — all in one partnership',
    },
    {
      icon: TrendingUp,
      title: 'Recurring Revenue',
      description: 'Earn from monthly retainers, SaaS subscriptions, project work, and long-term client contracts',
    },
    {
      icon: Shield,
      title: 'Full Technical Support',
      description: 'We handle development, deployment, campaign execution, and ongoing client fulfillment',
    },
    {
      icon: Zap,
      title: 'Fast Onboarding',
      description: 'Get partner resources, demos, and training within 48 hours of approval',
    },
    {
      icon: Target,
      title: 'Sales Enablement',
      description: 'Case studies, pitch decks, demo accounts, and co-selling support for your team',
    },
  ];

  const services = [
    {
      category: 'Digital Marketing',
      items: [
        'SEO & organic growth',
        'Google Ads & Meta Ads',
        'Social media management',
        'Content marketing',
        'Email & WhatsApp campaigns',
        'Influencer marketing',
        'Analytics & reporting',
      ],
    },
    {
      category: 'SaaS Products',
      items: [
        'CRM systems',
        'ERP & HRMS',
        'LMS platforms',
        'Booking & appointment apps',
        'E-commerce SaaS',
        'Industry-specific software',
        'White-label deployment',
      ],
    },
    {
      category: 'Automation & CRM',
      items: [
        'WhatsApp Business API',
        'Lead capture funnels',
        'Email automation',
        'Sales pipeline setup',
        'Chatbot development',
        'Marketing automation',
        'CRM integrations',
      ],
    },
    {
      category: 'Web & E-Commerce',
      items: [
        'Business websites',
        'E-commerce stores',
        'Landing pages',
        'Mobile apps',
        'Domain & hosting',
        'Website maintenance',
        'Conversion optimization',
      ],
    },
    {
      category: 'Branding & Creative',
      items: [
        'Logo & brand identity',
        'Ad creatives',
        'Social media graphics',
        'Video & reel production',
        'Brochures & print',
        'Pitch decks',
        'UI/UX design',
      ],
    },
    {
      category: 'Business Systems',
      items: [
        'POS & billing',
        'Inventory management',
        'Project management',
        'Customer portals',
        'Multi-location dashboards',
        'Reporting systems',
        'Workflow tools',
      ],
    },
  ];

  const stats = [
    { number: '50+', label: 'SaaS Products' },
    { number: '500+', label: 'Clients Served' },
    { number: '8', label: 'Service Categories' },
    { number: '24/7', label: 'Partner Support' },
  ];

  const whyPartner = [
    {
      icon: Building2,
      title: 'No In-House Team Required',
      description: 'Deliver enterprise-grade marketing and SaaS without hiring developers, designers, or media buyers',
    },
    {
      icon: Users,
      title: 'Massive Market Opportunity',
      description: 'Every business in India needs digital presence, lead generation, and software — you supply the demand',
    },
    {
      icon: Handshake,
      title: 'Trusted Delivery Partner',
      description: 'E-Tailed Digital Services Pvt. Ltd. — registered, proven, and built for agency-scale fulfillment',
    },
    {
      icon: Rocket,
      title: 'Scale Without Limits',
      description: 'Take on more clients without capacity constraints — we grow with your agency',
    },
  ];

  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery Call',
      description: 'Tell us about your agency, clients, and the marketing or SaaS services you want to offer',
    },
    {
      icon: FileCheck,
      title: 'Partnership Setup',
      description: 'We align on white-label terms, service scope, and onboarding for your team',
    },
    {
      icon: Zap,
      title: 'Onboarding & Training',
      description: 'Access partner portal, sales materials, demo accounts, and fulfillment workflows',
    },
    {
      icon: Rocket,
      title: 'Start Delivering',
      description: 'Pitch to clients under your brand — we execute campaigns and SaaS deployments behind the scenes',
    },
    {
      icon: TrendingUp,
      title: 'Grow Together',
      description: 'Expand into new services, retainers, and SaaS subscriptions with ongoing partner support',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed mb-8">
            Grow your agency with white-label digital marketing campaigns and SaaS solutions —
            we deliver, you own the client relationship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('#contact')}
              className="bg-white text-brand hover:bg-brand-muted"
            >
              Book a Partnership Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate('/apply')}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-brand mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partnership Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible ways to partner — whether you focus on marketing, SaaS, or full-stack digital delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <Card
                  key={index}
                  hover
                  className={model.featured ? 'ring-2 ring-brand shadow-xl' : ''}
                >
                  <CardBody className="p-8">
                    {model.featured && (
                      <span className="inline-block mb-4 px-3 py-1 bg-brand text-white text-xs font-bold uppercase tracking-wide rounded-full">
                        Most Popular
                      </span>
                    )}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${model.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: model.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{model.description}</p>
                    <ul className="space-y-2 mb-6">
                      {model.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={() => navigate('#contact')}
                    >
                      Discuss This Model
                    </Button>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Partner With E-Tailed Digital India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The backend team your agency needs for marketing and SaaS at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyPartner.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-brand rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What You Get as a Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything required to sell and deliver digital marketing and SaaS under your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-brand rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services You Can Offer Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete digital marketing and SaaS catalog — fulfilled by our team, sold by yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{service.category}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">How Partnership Works</h2>
              <p className="text-lg text-brand-foreground/85 mb-8">
                A simple path from first conversation to delivering marketing and SaaS for your clients
              </p>
              <div className="space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-5 h-5 text-brand-foreground/85" />
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-brand-foreground/85">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
              <p className="text-brand-foreground/85 mb-6">
                Whether you are an agency, freelancer, or business looking to expand into digital
                marketing and SaaS — we will tailor a partnership to your goals.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free partnership consultation',
                  'No technical team required',
                  'White-label under your brand',
                  'Marketing + SaaS in one place',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-brand-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                onClick={() => navigate('#contact')}
                className="w-full bg-white text-brand hover:bg-brand-muted"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/apply')}
                className="w-full mt-3 border-2 border-white text-white hover:bg-white/10"
              >
                Submit Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with E-Tailed Digital India and offer world-class digital marketing and SaaS
            solutions to your clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('#contact')}>
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/apply')}
            >
              Apply for Partnership
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

