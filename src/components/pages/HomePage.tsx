import Hero from '../sections/Hero';
import Features from '../sections/Features';
import ServicesPreview from '../sections/ServicesPreview';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import SEO from '../seo/SEO';

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "E-Tailed Digital India",
    "image": "https://e-tailed.com/logo.png",
    "@id": "https://e-tailed.com",
    "url": "https://e-tailed.com",
    "telephone": "+919392898733",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/share/17fbyxSaVE/",
      "https://www.instagram.com/etailedindia",
      "https://www.linkedin.com/company/etailed-digital-services-private-limited/"
    ]
  };

  return (
    <>
      <SEO 
        title="Enterprise Digital Marketing & Custom SaaS Solutions"
        description="E-Tailed Digital India helps businesses accelerate growth with expert digital marketing, CRM automation, custom SaaS software development, and full-stack branding."
        canonicalUrl="/"
        structuredData={homeSchema}
      />
      <Hero />
      <Features />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </>
  );
}
