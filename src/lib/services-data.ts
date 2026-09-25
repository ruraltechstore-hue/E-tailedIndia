import { Briefcase, Globe, Share2, Bot, Store, Megaphone, Paintbrush, Cloud } from 'lucide-react';

export const servicesData = [
  {
    id: 'web-branding',
    title: 'Web & Branding',
    shortDescription: 'Build a strong online presence with professional websites, logos, business cards, domains and hosting.',
    description: 'We help you establish a powerful digital identity. From conceptualizing your brand logo to launching a fully functional professional website, we provide end-to-end solutions that make your business stand out in the digital landscape.',
    icon: Briefcase,
    color: '#0052cc',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    servicesIncluded: ['Business Website', 'Logo Design', 'Business Cards', 'Domain Registration', 'Web Hosting'],
    features: ['Responsive Mobile-Friendly Design', 'Custom Branding Kits', 'High-Speed Servers', 'SEO-Ready Structure', '24/7 Support'],
    route: '/services/web-branding'
  },
  {
    id: 'ecommerce',
    title: 'Website & E-Commerce Solutions',
    shortDescription: 'Modern websites and online stores designed to help businesses showcase products, accept orders and grow online.',
    description: 'Launch your online store with our comprehensive e-commerce solutions. We build secure, scalable, and user-friendly platforms that streamline your sales process, manage inventory, and provide a seamless shopping experience for your customers.',
    icon: Globe,
    color: '#009933',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
    servicesIncluded: ['E-Commerce Stores', 'Multi-Vendor Marketplaces', 'Booking Portals', 'Payment Integration'],
    features: ['Secure Checkout', 'Inventory Management', 'User Dashboards', 'Analytics Integration', 'Mobile Optimization'],
    route: '/services/ecommerce'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media & Marketing',
    shortDescription: 'Build your brand online with creative content, social media management, campaigns and influencer promotions.',
    description: 'Engage your audience and grow your brand with our targeted social media strategies. We manage your presence across platforms, create compelling content, run ad campaigns, and leverage influencer partnerships to maximize your reach.',
    icon: Share2,
    color: '#ff9933',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    servicesIncluded: ['Social Media Management', 'Content Creation', 'Influencer Marketing', 'Ad Campaigns', 'Reels & Shorts'],
    features: ['Targeted Audience Reach', 'Creative Design', 'Performance Tracking', 'Community Engagement', 'Monthly Reporting'],
    route: '/services/social-media-marketing'
  },
  {
    id: 'automation-crm',
    title: 'Automation & CRM',
    shortDescription: 'Save time and manage customers better with WhatsApp automation, email workflows, CRM systems and sales funnels.',
    description: 'Streamline your business operations by automating repetitive tasks. Our CRM and automation solutions help you nurture leads, provide instant customer support, and convert prospects into loyal customers effortlessly.',
    icon: Bot,
    color: '#e91e63',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    servicesIncluded: ['WhatsApp Automation', 'Email Marketing Workflows', 'CRM Setup', 'Sales Funnels', 'Chatbots'],
    features: ['24/7 Automated Responses', 'Lead Nurturing', 'Data Centralization', 'Seamless Integration', 'Workflow Optimization'],
    route: '/services/automation-crm'
  },
  {
    id: 'business-systems',
    title: 'Ready-Made Business Systems',
    shortDescription: 'Get practical business solutions for e-commerce, marketplaces, bookings, dropshipping and learning platforms.',
    description: 'Fast-track your business launch with our ready-to-use software solutions. Whether you need a dropshipping store, a booking system, or a learning management platform, our robust pre-built systems save you time and money.',
    icon: Store,
    color: '#9c27b0',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    servicesIncluded: ['Dropshipping Stores', 'Booking Applications', 'LMS Systems', 'Marketplaces'],
    features: ['Quick Deployment', 'Scalable Architecture', 'Cost-Effective', 'Customizable Modules', 'Admin Control Panel'],
    route: '/services/business-systems'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SaaS',
    shortDescription: 'Reach the right audience through SEO, online advertising, social media, lead generation and SaaS solutions.',
    description: 'Drive traffic, generate leads, and boost your revenue with our data-driven digital marketing campaigns. We combine SEO, paid advertising, and software solutions to deliver measurable growth for your business.',
    icon: Megaphone,
    color: '#ff5722',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
    servicesIncluded: ['Search Engine Optimization', 'Google Ads & Meta Ads', 'Lead Generation', 'SaaS Deployment'],
    features: ['Keyword Research', 'ROI Tracking', 'Conversion Optimization', 'Local & Global SEO', 'Custom SaaS Setup'],
    route: '/services/digital-marketing'
  },
  {
    id: 'branding-printing',
    title: 'Branding & Printing',
    shortDescription: 'Create a consistent brand identity with professional logos, visiting cards, posters, brochures and promotional materials.',
    description: 'Make a lasting impression in the physical world with our premium branding and printing services. We design and deliver high-quality promotional materials that accurately reflect your brand values and aesthetics.',
    icon: Paintbrush,
    color: '#795548',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    servicesIncluded: ['Premium Logo Design', 'Visiting Cards', 'Posters & Flyers', 'Brochures', 'Packaging Design'],
    features: ['High-Quality Printing', 'Custom Artwork', 'Brand Consistency', 'Fast Turnaround', 'Multiple Revisions'],
    route: '/services/branding-printing'
  },
  {
    id: 'saas-software',
    title: 'SaaS Software Suite',
    shortDescription: 'Simplify business operations with custom CRM, ERP, HRMS, LMS, ticketing and mobile-ready software solutions.',
    description: 'Empower your enterprise with our comprehensive SaaS applications. From managing human resources to handling customer tickets, our software suite provides the tools you need to operate efficiently and scale seamlessly.',
    icon: Cloud,
    color: '#607d8b',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
    servicesIncluded: ['ERP Systems', 'HRMS Portals', 'Ticketing Systems', 'Custom CRM', 'Mobile-Ready Web Apps'],
    features: ['Cloud-Based Architecture', 'Secure Data Storage', 'Role-Based Access', 'Real-Time Analytics', 'Third-Party Integrations'],
    route: '/services/saas-software'
  }
];
