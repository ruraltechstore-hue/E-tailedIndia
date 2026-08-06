import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Globe,
  Share2,
  Bot,
  Store,
  Megaphone,
  Paintbrush,
  Cloud,
} from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

const categories = [
  {
    id: 1,
    name: 'Web & Branding',
    description: 'Websites, logos, business cards, hosting & brand identity kits',
    icon: Briefcase,
    color: '#0052cc',
    href: '#digital-business',
  },
  {
    id: 2,
    name: 'Website & E-Commerce Solutions',
    description: 'Complete online stores, marketplaces & booking systems',
    icon: Globe,
    color: '#009933',
    href: '#website-ecommerce',
  },
  {
    id: 3,
    name: 'Social Media & Marketing',
    description: 'Posts, ads, reels, influencer marketing & monthly management',
    icon: Share2,
    color: '#ff9933',
    href: '#social-media',
  },
  {
    id: 4,
    name: 'Automations & CRM',
    description: 'WhatsApp bots, email automation, funnels & lead systems',
    icon: Bot,
    color: '#e91e63',
    href: '#automations-crm',
  },
  {
    id: 5,
    name: 'Ready-Made Business Systems',
    description: 'E-commerce stores, marketplaces, dropshipping & booking apps',
    icon: Store,
    color: '#9c27b0',
    href: '#business-systems',
  },
  {
    id: 6,
    name: 'Digital Marketing & SaaS',
    description: 'SEO, paid ads, social media campaigns, CRM setup & SaaS deployment',
    icon: Megaphone,
    color: '#ff5722',
    href: '#digital-marketing',
  },
  {
    id: 7,
    name: 'Branding & Printing',
    description: 'Logos, visiting cards, posters, brochures & promotional materials',
    icon: Paintbrush,
    color: '#795548',
    href: '#branding-printing',
  },
  {
    id: 8,
    name: 'SaaS Software Suite',
    description: 'CRM, ERP, HRMS, LMS, ticketing & mobile app builder',
    icon: Cloud,
    color: '#607d8b',
    href: '#saas-software',
  },
];

export default function ServicesPreview() {
  const navigate = useNavigate();


  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Digital Marketing & SaaS Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across 8 categories — from SEO and paid ads to custom SaaS
            development and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} hover>
                <CardBody className="flex items-start space-x-4 p-6 cursor-pointer" onClick={() => navigate((category.href || '').replace('#', '/').replace('-page', ''))}>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: category.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/services')}
            className="text-brand hover:text-brand-hover font-semibold text-lg hover:underline"
          >
            View All Services →
          </button>
        </div>
      </div>
    </section>
  );
}
