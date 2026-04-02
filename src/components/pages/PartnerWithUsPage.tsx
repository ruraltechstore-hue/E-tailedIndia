import { Check, Users, Building2, Globe, Rocket, Crown, TrendingUp, Shield, Handshake, Zap, Award, Target, Package, Building, Code, Truck, MapPin } from 'lucide-react';
import Button from '../ui/Button';

export default function PartnerWithUsPage() {
  const partnershipTiers = [
    {
      type: 'Retailer',
      price: '10,000',
      icon: Building2,
      color: 'bg-tier-retailer',
      benefits: [
        'Access to 150+ Services',
        'White-Label Dashboard',
        'Basic Training & Onboarding',
        'Email Support',
        'Marketing Resources',
        'Standard Commission Rates',
      ],
    },
    {
      type: 'Distributor',
      price: '15,000',
      icon: Crown,
      color: 'bg-tier-distributor',
      popular: true,
      benefits: [
        'Everything in Retailer',
        'Priority Customer Support',
        'Advanced Training Program',
        'Enhanced Marketing Materials',
        'Sub-Partner Management',
        'Higher Commission Rates',
        'Dedicated Dashboard Features',
      ],
    },
    {
      type: 'Super Distributor',
      price: '25,000',
      icon: Rocket,
      color: 'bg-tier-super',
      benefits: [
        'Everything in Distributor',
        'Dedicated Account Manager',
        'Custom Branding',
        'API Access',
        'Premium Commission Rates',
        'Territory Rights',
        'Priority Feature Requests',
      ],
    },
    {
      type: 'White Label',
      price: '80,000',
      icon: Package,
      color: 'bg-tier-white-label',
      benefits: [
        'Complete White-Label Solution',
        'Your Own Brand Identity',
        'Custom Domain & Hosting',
        'Full Dashboard Control',
        'Unlimited Sub-Partners',
        'Maximum Commission Rates',
        'Dedicated Technical Team',
        'Custom Feature Development',
      ],
    },
    {
      type: 'Pincode Franchise',
      price: '82,000',
      icon: MapPin,
      color: 'bg-tier-pincode',
      benefits: [
        'Single Pincode Territory',
        'Up to 5 Delivery Boys Recruitment',
        'Complete Training Program',
        'Delivery Management System',
        'Real-Time Order Tracking',
        'Customer Support',
        'Marketing Materials',
        'Commission on Every Delivery',
      ],
    },
    {
      type: '5 Pincode Franchise',
      price: '1,18,000',
      icon: MapPin,
      color: 'bg-tier-pincode-5',
      benefits: [
        'Five Pincode Territories',
        'Up to 15 Delivery Boys Recruitment',
        'Advanced Training Program',
        'Multi-Location Management',
        'Real-Time Fleet Tracking',
        'Priority Customer Support',
        'Enhanced Marketing Kit',
        'Higher Commission Rates',
      ],
    },
    {
      type: 'Enterprise Software',
      price: '2,00,000',
      icon: Building,
      color: 'bg-tier-enterprise',
      benefits: [
        'Complete Enterprise Solution',
        'Multi-Location Support',
        'Advanced Analytics & Reports',
        'Custom Integrations',
        'Dedicated Infrastructure',
        'Priority Support 24/7',
        'Training for Teams',
        'SLA Guarantee',
      ],
    },
    {
      type: 'Full Admin (No Source)',
      price: '4,50,000',
      icon: Code,
      color: 'bg-tier-admin-ns',
      benefits: [
        'Complete Admin Software',
        'Full Control Panel',
        'All Features Unlocked',
        'Lifetime License',
        'Free Updates for 1 Year',
        'Installation Support',
        'No Source Code Access',
        'Priority Technical Support',
      ],
    },
    {
      type: 'Full Admin (With Source)',
      price: '6,00,000',
      icon: Code,
      color: 'bg-tier-admin-src',
      featured: true,
      benefits: [
        'Everything in No Source',
        'Complete Source Code',
        'Full Ownership Rights',
        'Modify & Customize',
        'Unlimited Deployments',
        'No Licensing Restrictions',
        'Technical Documentation',
        'Developer Support',
      ],
    },
    {
      type: 'Logistics Delivery',
      price: '2,36,000',
      icon: Truck,
      color: 'bg-tier-logistics',
      benefits: [
        'Complete Delivery System',
        'Real-Time Tracking',
        'Rider Management',
        'Route Optimization',
        'Order Management',
        'Customer App & Web',
        'Rider Mobile App',
        'Admin Dashboard',
      ],
    },
  ];

  const benefits = [
    {
      icon: Crown,
      title: 'White-Label Solutions',
      description: 'Resell all our services under your own brand name and build your digital empire',
    },
    {
      icon: Globe,
      title: '150+ Digital Services',
      description: 'Access comprehensive portfolio of digital, financial, and e-commerce services',
    },
    {
      icon: TrendingUp,
      title: 'High Profit Margins',
      description: 'Earn attractive commissions and recurring revenue from every service you sell',
    },
    {
      icon: Shield,
      title: 'Complete Backend Support',
      description: 'We handle all technical operations, fulfillment, and customer support',
    },
    {
      icon: Zap,
      title: 'Quick Onboarding',
      description: 'Start your digital business in just 24-48 hours after approval',
    },
    {
      icon: Award,
      title: 'Training & Resources',
      description: 'Get comprehensive training materials, marketing assets, and business tools',
    },
  ];

  const services = [
    {
      category: 'Digital Business Services',
      items: [
        'Pan Card Services',
        'Aadhaar Services',
        'Voter ID Card',
        'Ration Card',
        'Driving License',
        'Passport Services',
        'Income Certificate',
        'Caste Certificate',
        'Birth Certificate',
        'Death Certificate',
        'Marriage Certificate',
        'MSME Registration',
        'GST Registration',
        'Company Registration',
        'Trademark Registration',
        'Copyright Registration',
        'ISO Certification',
        'FSSAI License',
        'Digital Signature',
        'IEC Code',
      ],
    },
    {
      category: 'Bill Payment & Recharge',
      items: [
        'Mobile Recharge',
        'DTH Recharge',
        'Electricity Bill',
        'Water Bill',
        'Gas Bill',
        'Broadband Bill',
        'Landline Bill',
        'Credit Card Bill',
        'Loan EMI Payment',
        'Insurance Premium',
        'Municipal Tax',
        'Education Fee',
        'Hospital Bills',
        'Cable TV Bill',
      ],
    },
    {
      category: 'Travel & Booking',
      items: [
        'Flight Booking',
        'Bus Booking',
        'Train Booking',
        'Hotel Booking',
        'Cab Booking',
        'Holiday Packages',
        'Visa Assistance',
        'Travel Insurance',
        'Airport Transfers',
        'Car Rentals',
      ],
    },
    {
      category: 'Financial Services',
      items: [
        'Money Transfer (DMT)',
        'AEPS Services',
        'Micro ATM',
        'Account Opening',
        'Loan Services',
        'Insurance Services',
        'Mutual Funds',
        'FD/RD Services',
        'Investment Advisory',
        'Tax Filing',
      ],
    },
    {
      category: 'Website & E-Commerce',
      items: [
        'Business Website',
        'E-Commerce Store',
        'Portfolio Website',
        'Blog Website',
        'Landing Pages',
        'Mobile Apps (Android)',
        'Mobile Apps (iOS)',
        'Progressive Web Apps',
        'Domain Registration',
        'Web Hosting',
        'SSL Certificates',
        'Email Hosting',
        'Website Maintenance',
        'SEO Services',
      ],
    },
    {
      category: 'Social Media Services',
      items: [
        'Instagram Followers',
        'Instagram Likes',
        'Instagram Views',
        'YouTube Subscribers',
        'YouTube Views',
        'YouTube Likes',
        'Facebook Page Likes',
        'Facebook Post Likes',
        'Twitter Followers',
        'LinkedIn Connections',
        'Social Media Management',
        'Content Creation',
        'Post Scheduling',
        'Analytics & Reports',
      ],
    },
    {
      category: 'Digital Marketing',
      items: [
        'Google Ads',
        'Facebook Ads',
        'Instagram Ads',
        'YouTube Ads',
        'SEO Optimization',
        'Content Marketing',
        'Email Marketing',
        'SMS Marketing',
        'WhatsApp Marketing',
        'Influencer Marketing',
        'Affiliate Marketing',
        'Video Marketing',
      ],
    },
    {
      category: 'Automation & CRM',
      items: [
        'WhatsApp Automation',
        'WhatsApp Business API',
        'CRM Systems',
        'Lead Management',
        'Email Automation',
        'Sales Funnels',
        'Marketing Automation',
        'Chatbot Development',
        'Workflow Automation',
        'Integration Services',
      ],
    },
    {
      category: 'Business Systems',
      items: [
        'Accounting Software',
        'Billing Software',
        'Inventory Management',
        'POS Systems',
        'HR Management',
        'Payroll Systems',
        'Attendance System',
        'Project Management',
        'Customer Portal',
        'Vendor Portal',
      ],
    },
    {
      category: 'Branding & Design',
      items: [
        'Logo Design',
        'Business Card Design',
        'Letterhead Design',
        'Brochure Design',
        'Flyer Design',
        'Poster Design',
        'Banner Design',
        'Social Media Graphics',
        'Packaging Design',
        'Brand Identity',
      ],
    },
    {
      category: 'Printing Services',
      items: [
        'Business Cards',
        'Letterheads',
        'Envelopes',
        'Brochures',
        'Flyers',
        'Posters',
        'Banners',
        'Visiting Cards',
        'ID Cards',
        'Certificates',
        'Invoices',
        'Receipt Books',
      ],
    },
    {
      category: 'SaaS Software',
      items: [
        'School Management System',
        'Hospital Management System',
        'Hotel Management System',
        'Restaurant POS',
        'Gym Management',
        'Salon Management',
        'Real Estate Portal',
        'Job Portal',
        'Matrimonial Portal',
        'Classified Portal',
      ],
    },
    {
      category: 'GPL Marketplace',
      items: [
        'WordPress Themes',
        'WordPress Plugins',
        'PHP Scripts',
        'Laravel Scripts',
        'React Templates',
        'Vue Templates',
        'Angular Templates',
        'Mobile App Templates',
        'Admin Templates',
        'Landing Page Templates',
      ],
    },
    {
      category: 'Education & Training',
      items: [
        'Digital Marketing Course',
        'Web Development Course',
        'App Development Course',
        'Graphic Design Course',
        'Video Editing Course',
        'Business Training',
        'Sales Training',
        'Certification Programs',
        'Internship Programs',
      ],
    },
  ];

  const stats = [
    { number: '150+', label: 'Digital Services' },
    { number: '10,000+', label: 'Active Partners' },
    { number: '50L+', label: 'Monthly Transactions' },
    { number: '24/7', label: 'Support Available' },
  ];

  const whyPartner = [
    {
      icon: Building2,
      title: 'No Infrastructure Needed',
      description: 'Start your digital services business without any technical infrastructure or inventory',
    },
    {
      icon: Users,
      title: 'Massive Market Opportunity',
      description: 'Tap into India\'s growing digital economy worth billions of dollars',
    },
    {
      icon: Handshake,
      title: 'Trusted Partnership',
      description: 'Partner with E-Tailed Digital Services Pvt. Ltd., a registered and verified company',
    },
    {
      icon: Target,
      title: 'Multiple Revenue Streams',
      description: 'Earn from services, commissions, recurring subscriptions, and referrals',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed mb-8">
            Join India's fastest-growing digital services platform and build your own digital empire
          </p>
          <Button
            size="lg"
            onClick={() => window.location.hash = '#apply-page'}
            className="bg-white text-brand hover:bg-brand-muted"
          >
            Apply Now
          </Button>
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

      <section className="py-20 bg-white overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Partnership Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan to start or scale your digital services business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 mb-16 pt-6 overflow-visible">
            {partnershipTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.type}
                  className={`relative overflow-visible rounded-2xl ${
                    tier.featured
                      ? 'z-20 border-4 border-tier-premium-badge shadow-2xl lg:col-span-4 md:col-span-2'
                      : tier.popular
                      ? 'z-20 border-4 border-accent shadow-2xl'
                      : 'z-0 border-2 border-gray-200 shadow-lg'
                  } bg-white`}
                >
                  {tier.popular && (
                    <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2">
                      <span className="inline-block whitespace-nowrap rounded-full bg-tier-distributor px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md sm:px-6 sm:py-2 sm:text-sm">
                        Most popular
                      </span>
                    </div>
                  )}
                  {tier.featured && (
                    <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2">
                      <span className="inline-block whitespace-nowrap rounded-full bg-tier-premium-badge px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md sm:px-6 sm:py-2 sm:text-sm">
                        Premium option
                      </span>
                    </div>
                  )}
                  <div
                    className={`p-6 ${tier.popular || tier.featured ? 'pt-9 sm:pt-10' : ''} ${
                      tier.featured ? 'md:flex md:items-center md:gap-8' : ''
                    }`}
                  >
                    <div className={tier.featured ? 'md:w-1/3' : ''}>
                      <div className={`w-16 h-16 ${tier.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{tier.type}</h3>
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-gray-900 mb-1">
                          ₹{tier.price}
                        </div>
                        <p className="text-gray-600 text-sm">One-time investment</p>
                      </div>
                    </div>
                    <div className={tier.featured ? 'md:w-2/3' : ''}>
                      <ul className={`space-y-2 mb-6 ${tier.featured ? 'md:grid md:grid-cols-2 md:gap-x-4' : ''}`}>
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        size="lg"
                        onClick={() => window.location.hash = '#apply-page'}
                        className={`w-full ${tier.color} text-white`}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Partner With E-Tailed Digital India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a successful digital services business with complete support and proven systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {whyPartner.map((item, index) => (
              <div key={index} className="bg-brand-muted rounded-2xl p-8">
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

      <section className="py-20 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed as a digital services partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              150+ Services You Can Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our complete catalog of digital services across multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Choose Your Plan</h3>
                    <p className="text-brand-foreground/85">Select from 8 different partnership plans based on your business goals and investment capacity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                    <p className="text-brand-foreground/85">Fill the application form with your details and business information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Make Payment</h3>
                    <p className="text-brand-foreground/85">Pay the one-time partnership fee for your chosen plan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Get Approved</h3>
                    <p className="text-brand-foreground/85">We review your application within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Start Earning</h3>
                    <p className="text-brand-foreground/85">Access partner dashboard and start offering services to your customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Price Comparison</h3>
              <div className="space-y-3">
                {partnershipTiers.slice(0, 4).map((tier) => (
                  <div key={tier.type} className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{tier.type}</span>
                      <span className="text-xl font-bold">₹{tier.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                onClick={() => window.location.hash = '#apply-page'}
                className="w-full mt-6 bg-white text-brand hover:bg-brand-muted"
              >
                Apply for Partnership Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Digital Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful partners across India who are building profitable digital businesses
          </p>
          <Button
            size="lg"
            onClick={() => window.location.hash = '#apply-page'}
            className="bg-brand"
          >
            Apply for Partnership Now
          </Button>
        </div>
      </section>
    </div>
  );
}
