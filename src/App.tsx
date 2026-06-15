import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import AllServicesPage from './components/pages/AllServicesPage';
import DigitalBusinessServicesPage from './components/pages/DigitalBusinessServicesPage';
import WebsiteECommercePage from './components/pages/WebsiteECommercePage';
import SocialMediaServicesPage from './components/pages/SocialMediaServicesPage';
import AutomationsCRMPage from './components/pages/AutomationsCRMPage';
import BusinessSystemsPage from './components/pages/BusinessSystemsPage';
import DigitalMarketingPage from './components/pages/DigitalMarketingPage';
import BrandingPrintingPage from './components/pages/BrandingPrintingPage';
import SaaSSoftwarePage from './components/pages/SaaSSoftwarePage';
import BlogsPage from './components/pages/BlogsPage';
import PartnerWithUsPage from './components/pages/PartnerWithUsPage';
import ApplyNowPage from './components/pages/ApplyNowPage';
import ContactPage from './components/pages/ContactPage';
import FAQPage from './components/pages/FAQPage';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsAndConditions from './components/pages/TermsAndConditions';
import RefundPolicy from './components/pages/RefundPolicy';
import ShippingPolicy from './components/pages/ShippingPolicy';
import DisclaimerPolicy from './components/pages/DisclaimerPolicy';
import CookiePolicy from './components/pages/CookiePolicy';
import WhatsAppButton from './components/ui/WhatsAppButton';
import AIChatbot from './components/ui/AIChatbot';

type ViewType = 'home' | 'privacy' | 'terms' | 'refund' | 'shipping' | 'disclaimer' | 'cookie' | 'about' | 'services' | 'digital-business' | 'website-ecommerce' | 'social-media' | 'automations-crm' | 'business-systems' | 'digital-marketing' | 'branding-printing' | 'saas-software' | 'blogs' | 'partner' | 'apply' | 'contact' | 'faq';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy') {
        setCurrentView('privacy');
      } else if (hash === 'terms') {
        setCurrentView('terms');
      } else if (hash === 'refund') {
        setCurrentView('refund');
      } else if (hash === 'shipping') {
        setCurrentView('shipping');
      } else if (hash === 'disclaimer') {
        setCurrentView('disclaimer');
      } else if (hash === 'cookie') {
        setCurrentView('cookie');
      } else if (hash === 'faq') {
        setCurrentView('faq');
      } else if (hash === 'about-page') {
        setCurrentView('about');
      } else if (hash === 'services-page') {
        setCurrentView('services');
      } else if (hash === 'digital-business') {
        setCurrentView('digital-business');
      } else if (hash === 'website-ecommerce') {
        setCurrentView('website-ecommerce');
      } else if (hash === 'social-media') {
        setCurrentView('social-media');
      } else if (hash === 'automations-crm') {
        setCurrentView('automations-crm');
      } else if (hash === 'business-systems') {
        setCurrentView('business-systems');
      } else if (hash === 'digital-marketing' || hash === 'education-internship') {
        setCurrentView('digital-marketing');
      } else if (hash === 'branding-printing') {
        setCurrentView('branding-printing');
      } else if (hash === 'saas-software') {
        setCurrentView('saas-software');
      } else if (hash === 'blogs-page') {
        setCurrentView('blogs');
      } else if (hash === 'partner-page') {
        setCurrentView('partner');
      } else if (hash === 'apply-page') {
        setCurrentView('apply');
      } else if (hash === 'contact-page') {
        setCurrentView('contact');
      } else if (hash === 'home' || hash === '') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <PrivacyPolicy />
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'terms') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <TermsAndConditions />
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'refund') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <RefundPolicy />
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'shipping') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <ShippingPolicy />
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'disclaimer') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <DisclaimerPolicy />
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'cookie') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <CookiePolicy />
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'faq') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <FAQPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'about') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <AboutPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'services') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <AllServicesPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'digital-business') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <DigitalBusinessServicesPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'website-ecommerce') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <WebsiteECommercePage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'social-media') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <SocialMediaServicesPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'automations-crm') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <AutomationsCRMPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'business-systems') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <BusinessSystemsPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'digital-marketing') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <DigitalMarketingPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'branding-printing') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <BrandingPrintingPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'saas-software') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <SaaSSoftwarePage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'blogs') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <BlogsPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'partner') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <PartnerWithUsPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'apply') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <ApplyNowPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  if (currentView === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <ContactPage />
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  );
}

export default App;
