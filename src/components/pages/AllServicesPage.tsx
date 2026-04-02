import {
  Briefcase,
  Globe,
  Share2,
  Bot,
  Store,
  Package,
  GraduationCap,
  Paintbrush,
  Cloud,
  ArrowRight,
} from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';

export default function AllServicesPage() {
  const categories = [
    {
      id: 1,
      title: 'Digital Business Services',
      description: 'Websites, logos, business cards, hosting & branding kits.',
      icon: Briefcase,
      color: '#0052cc',
      href: '#digital-business',
      services: ['Business Website', 'Logo Design', 'Business Cards', 'Domain & Hosting'],
    },
    {
      id: 2,
      title: 'Website & E-Commerce Solutions',
      description: 'Complete online stores, marketplaces & booking systems.',
      icon: Globe,
      color: '#009933',
      href: '#website-ecommerce',
      services: ['E-Commerce Stores', 'Marketplaces', 'Booking Portals', 'Dynamic Websites'],
    },
    {
      id: 3,
      title: 'Social Media & Marketing',
      description: 'Posts, ads, reels, influencer marketing & monthly management.',
      icon: Share2,
      color: '#ff9933',
      href: '#social-media',
      services: ['Social Management', 'Content Creation', 'Influencer Marketing', 'Ad Campaigns'],
    },
    {
      id: 4,
      title: 'Automations & CRM',
      description: 'WhatsApp bots, email automation, funnels & lead systems.',
      icon: Bot,
      color: '#e91e63',
      href: '#automations-crm',
      services: ['WhatsApp Bots', 'Email Automation', 'CRM Setup', 'Sales Funnels'],
    },
    {
      id: 5,
      title: 'Ready-Made Business Systems',
      description: 'E-commerce stores, marketplaces, dropshipping & booking apps.',
      icon: Store,
      color: '#9c27b0',
      href: '#business-systems',
      services: ['Marketplaces', 'Dropshipping', 'Booking Apps', 'LMS Systems'],
    },
    {
      id: 6,
      title: 'GPL Marketplace',
      description: '2000+ GPL themes, 5000+ plugins & app source code.',
      icon: Package,
      color: '#00bcd4',
      href: '#gpl-marketplace',
      services: ['GPL Themes', 'GPL Plugins', 'SaaS Scripts', 'App Source Code'],
    },
    {
      id: 7,
      title: 'Internships & Courses',
      description: 'Live + recorded programs with certificates and job support.',
      icon: GraduationCap,
      color: '#ff5722',
      href: '#education-internship',
      services: ['Digital Marketing', 'E-Commerce', 'Python', 'Web Development'],
    },
    {
      id: 8,
      title: 'Branding & Printing',
      description: 'Logos, visiting cards, posters, brochures & promotional materials.',
      icon: Paintbrush,
      color: '#795548',
      href: '#branding-printing',
      services: ['Logo Design', 'Visiting Cards', 'Posters', 'Brochures'],
    },
    {
      id: 9,
      title: 'SaaS Software Suite',
      description: 'CRM, ERP, HRMS, LMS, ticketing & mobile app builder.',
      icon: Cloud,
      color: '#607d8b',
      href: '#saas-software',
      services: ['CRM', 'ERP', 'HRMS', 'LMS'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Explore All Services by E-Tailed Digital India
          </h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed">
            We offer more than <strong>150+ digital services</strong> across 9 major categories
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} hover>
                  <CardBody className="p-8">
                    <div className="grid md:grid-cols-[200px_1fr_auto] gap-6 items-center">
                      <div className="flex flex-col items-center text-center">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3"
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          <Icon className="w-10 h-10" style={{ color: category.color }} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{category.title}</h3>
                      </div>

                      <div>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="group"
                        onClick={() => window.location.hash = category.href}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Reselling?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join E-Tailed Digital India and start earning with 150+ digital services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.location.hash = '#signup'}
            >
              Become a Reseller
            </Button>
            <Button
              size="lg"
              variant="outline"
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
