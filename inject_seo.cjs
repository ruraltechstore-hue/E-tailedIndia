const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'components', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && f !== 'HomePage.tsx');

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if SEO is already imported
  if (content.includes("import SEO from '../seo/SEO';")) return;

  const pageName = file.replace('.tsx', '');
  const titleMap = {
    'AboutPage': 'About Us',
    'AllServicesPage': 'Our Digital Marketing Services',
    'DigitalBusinessServicesPage': 'Digital Business Solutions',
    'WebsiteECommercePage': 'Website & E-Commerce Development',
    'SocialMediaServicesPage': 'Social Media Marketing',
    'AutomationsCRMPage': 'Automations & CRM Setup',
    'BusinessSystemsPage': 'Business Systems Integration',
    'DigitalMarketingPage': 'Digital Marketing Strategies',
    'BrandingPrintingPage': 'Branding & Printing Services',
    'SaaSSoftwarePage': 'SaaS & Custom Software Development',
    'BlogsPage': 'Our Digital Marketing Blog',
    'PartnerWithUsPage': 'Partner With Us',
    'ApplyNowPage': 'Apply Now - Careers',
    'ContactPage': 'Contact E-Tailed Digital India',
    'FAQPage': 'Frequently Asked Questions',
    'PrivacyPolicy': 'Privacy Policy',
    'TermsAndConditions': 'Terms and Conditions',
    'RefundPolicy': 'Refund Policy',
    'ShippingPolicy': 'Shipping Policy',
    'DisclaimerPolicy': 'Disclaimer',
    'CookiePolicy': 'Cookie Policy',
  };

  const title = titleMap[pageName] || pageName;
  const description = `Discover ${title} at E-Tailed Digital India. We offer enterprise-grade digital marketing and custom SaaS solutions.`;
  
  // Format slug
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (pageName === 'AboutPage') slug = 'about';
  if (pageName === 'AllServicesPage') slug = 'services';
  if (pageName === 'ContactPage') slug = 'contact';
  if (pageName === 'FAQPage') slug = 'faq';
  
  const seoTag = `
      <SEO 
        title="${title}"
        description="${description}"
        canonicalUrl="/${slug}"
      />`;

  // Inject import
  const importStatement = "import SEO from '../seo/SEO';\n";
  
  // Inject SEO tag inside return <> or return ( <div>
  content = content.replace(/(return\s*\(\s*(?:<>\s*|<[a-z0-9\s"'-]+>)\s*)/i, `$1${seoTag}\n`);
  content = importStatement + content;

  fs.writeFileSync(filePath, content);
  console.log(`Injected SEO into ${file}`);
});
