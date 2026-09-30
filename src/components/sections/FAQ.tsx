import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

import Card, { CardBody } from '../ui/Card';



export default function FAQ() {
  const navigate = useNavigate();


  const [openIndex, setOpenIndex] = useState<number | null>(0);



  const faqs = [

    {

      question: 'What services does E-Tailed Digital India offer?',

      answer:

        'We provide end-to-end digital marketing (SEO, social media, paid ads, content marketing) and SaaS solutions (CRM, ERP, HRMS, custom software). We also offer automation, branding, and white-label delivery for agencies.',

    },

    {

      question: 'Do you build custom SaaS products?',

      answer:

        'Yes. We design, develop, and deploy custom SaaS platforms tailored to your industry — including CRM systems, booking apps, HRMS, ERP, and business management software. We handle hosting, maintenance, and updates.',

    },

    {

      question: 'What digital marketing services do you provide?',

      answer:

        'Our marketing services include SEO, Google Ads, Meta/Instagram Ads, YouTube marketing, social media management, content creation, email marketing, WhatsApp marketing, influencer campaigns, and lead generation funnels.',

    },

    {

      question: 'How long does it take to see results?',

      answer:

        'Paid ad campaigns can generate leads within days. SEO and organic growth typically show meaningful results in 3-6 months. SaaS development timelines range from 4-12 weeks depending on complexity. We provide clear timelines during the strategy phase.',

    },

    {

      question: 'Do you work with small businesses and startups?',

      answer:

        'Absolutely. We offer flexible packages for startups, SMEs, and enterprises. Whether you need a single marketing campaign or a full SaaS product, we tailor solutions to your budget and growth stage.',

    },

    {

      question: 'Can agencies white-label your services?',

      answer:

        'Yes. We offer white-label digital marketing and SaaS delivery for agencies and freelancers. You sell under your brand while we handle fulfillment, development, and backend support.',

    },

    {

      question: 'What is included in your CRM and automation services?',

      answer:

        'We set up WhatsApp Business API bots, email automation workflows, lead capture forms, sales funnels, CRM integrations (HubSpot, Zoho, custom), and automated follow-up sequences to convert more prospects.',

    },

    {

      question: 'How do you measure marketing ROI?',

      answer:

        'We set up conversion tracking, Google Analytics, ad platform pixels, and custom dashboards. You receive monthly reports showing leads, cost per acquisition, traffic growth, and campaign performance.',

    },

    {

      question: 'What support do you offer after launch?',

      answer:

        'We provide ongoing account management, campaign optimization, SaaS maintenance, bug fixes, feature updates, and 24/7 WhatsApp support. Support packages are included based on your plan.',

    },

    {

      question: 'How do I get started?',

      answer:

        'Contact us via the contact form, call +91 93928 98733 or +91 9390168733, or message us on WhatsApp. We will schedule a free consultation to understand your needs and propose a tailored marketing or SaaS solution.',

    },

    {

      question: 'What industries do you serve?',

      answer:

        'We work with healthcare, real estate, hospitality, local businesses, agencies, and startups across India. Our SaaS products and marketing strategies are customized per industry.',

    },

  ];



  return (

    <section className="py-20 bg-brand-muted">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <div className="inline-flex items-center justify-center space-x-2 mb-4">

            <HelpCircle className="w-8 h-8 text-brand" />

          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">

            Frequently Asked Questions

          </h2>

          <p className="text-xl text-gray-600">

            Everything you need to know about our digital marketing and SaaS services

          </p>

        </div>



        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <Card key={index}>

              <CardBody className="p-0">

                <button

                  onClick={() => setOpenIndex(openIndex === index ? null : index)}

                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"

                >

                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>

                  {openIndex === index ? (

                    <ChevronUp className="w-5 h-5 text-brand flex-shrink-0" />

                  ) : (

                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />

                  )}

                </button>

                {openIndex === index && (

                  <div className="px-6 pb-4">

                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>

                  </div>

                )}

              </CardBody>

            </Card>

          ))}

        </div>



        <div className="mt-12 bg-brand rounded-2xl p-8 text-center text-white">

          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>

          <p className="mb-6 text-brand-foreground/85">

            Our team is available 24/7 to help you plan your marketing or SaaS project

          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">

            <button

              onClick={() => window.open('https://wa.me/919392898733', '_blank')}

              className="px-6 py-3 bg-white text-brand font-bold rounded-lg hover:bg-gray-100 transition-colors"

            >

              WhatsApp: +91 93928 98733

            </button>

            <button

              onClick={() => window.open('https://wa.me/919390168733', '_blank')}

              className="px-6 py-3 bg-white text-brand font-bold rounded-lg hover:bg-gray-100 transition-colors"

            >

              WhatsApp: +91 9390168733

            </button>

            <button

              onClick={() => (navigate('#contact'))}

              className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"

            >

              Contact Us

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}



