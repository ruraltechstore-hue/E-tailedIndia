import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import AIChatbot from './components/ui/AIChatbot';

// Lazy loading all pages for optimal performance (Code Splitting)
const HomePage = React.lazy(() => import('./components/pages/HomePage'));
const AboutPage = React.lazy(() => import('./components/pages/AboutPage'));
const AllServicesPage = React.lazy(() => import('./components/pages/AllServicesPage'));
const DigitalBusinessServicesPage = React.lazy(() => import('./components/pages/DigitalBusinessServicesPage'));
const WebsiteECommercePage = React.lazy(() => import('./components/pages/WebsiteECommercePage'));
const SocialMediaServicesPage = React.lazy(() => import('./components/pages/SocialMediaServicesPage'));
const AutomationsCRMPage = React.lazy(() => import('./components/pages/AutomationsCRMPage'));
const BusinessSystemsPage = React.lazy(() => import('./components/pages/BusinessSystemsPage'));
const DigitalMarketingPage = React.lazy(() => import('./components/pages/DigitalMarketingPage'));
const BrandingPrintingPage = React.lazy(() => import('./components/pages/BrandingPrintingPage'));
const SaaSSoftwarePage = React.lazy(() => import('./components/pages/SaaSSoftwarePage'));
const BlogsPage = React.lazy(() => import('./components/pages/BlogsPage'));
const PartnerWithUsPage = React.lazy(() => import('./components/pages/PartnerWithUsPage'));
const ApplyNowPage = React.lazy(() => import('./components/pages/ApplyNowPage'));
const ContactPage = React.lazy(() => import('./components/pages/ContactPage'));
const FAQPage = React.lazy(() => import('./components/pages/FAQPage'));
const PrivacyPolicy = React.lazy(() => import('./components/pages/PrivacyPolicy'));
const TermsAndConditions = React.lazy(() => import('./components/pages/TermsAndConditions'));
const RefundPolicy = React.lazy(() => import('./components/pages/RefundPolicy'));
const ShippingPolicy = React.lazy(() => import('./components/pages/ShippingPolicy'));
const DisclaimerPolicy = React.lazy(() => import('./components/pages/DisclaimerPolicy'));
const CookiePolicy = React.lazy(() => import('./components/pages/CookiePolicy'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<div className="pt-20"><AboutPage /></div>} />
              
              {/* Services Routes */}
              <Route path="/services" element={<div className="pt-20"><AllServicesPage /></div>} />
              <Route path="/services/digital-business" element={<div className="pt-20"><DigitalBusinessServicesPage /></div>} />
              <Route path="/services/website-ecommerce" element={<div className="pt-20"><WebsiteECommercePage /></div>} />
              <Route path="/services/social-media" element={<div className="pt-20"><SocialMediaServicesPage /></div>} />
              <Route path="/services/automations-crm" element={<div className="pt-20"><AutomationsCRMPage /></div>} />
              <Route path="/services/business-systems" element={<div className="pt-20"><BusinessSystemsPage /></div>} />
              <Route path="/services/digital-marketing" element={<div className="pt-20"><DigitalMarketingPage /></div>} />
              <Route path="/services/branding-printing" element={<div className="pt-20"><BrandingPrintingPage /></div>} />
              <Route path="/services/saas-software" element={<div className="pt-20"><SaaSSoftwarePage /></div>} />
              
              {/* Other Pages */}
              <Route path="/blogs" element={<div className="pt-20"><BlogsPage /></div>} />
              <Route path="/partner" element={<div className="pt-20"><PartnerWithUsPage /></div>} />
              <Route path="/apply" element={<div className="pt-20"><ApplyNowPage /></div>} />
              <Route path="/contact" element={<div className="pt-20"><ContactPage /></div>} />
              <Route path="/faq" element={<div className="pt-20"><FAQPage /></div>} />
              
              {/* Policies */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsAndConditions />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/disclaimer" element={<DisclaimerPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              
              {/* Fallback for unknown routes */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    </Router>
  );
}

export default App;
