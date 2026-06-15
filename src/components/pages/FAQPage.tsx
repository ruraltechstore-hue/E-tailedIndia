import { HelpCircle, CheckCircle2 } from 'lucide-react';

import Card, { CardBody } from '../ui/Card';



export default function FAQPage() {

  const faqs = [

    {

      question: 'What digital marketing services do you offer?',

      answer: 'We provide SEO, Google Ads, Meta/Instagram Ads, social media management, content marketing, email campaigns, WhatsApp marketing, and lead generation funnels.',

    },

    {

      question: 'Do you build custom SaaS products?',

      answer: 'Yes. We design, develop, and deploy CRM, ERP, HRMS, booking systems, and industry-specific SaaS platforms with hosting and maintenance.',

    },

    {

      question: 'Do you offer monthly marketing retainers?',

      answer: 'Yes. We offer flexible monthly retainers for SEO, social media management, paid ads, and ongoing SaaS support. Contact us for a custom package.',

    },

    {

      question: 'Can you manage both marketing and SaaS for us?',

      answer: 'Yes. We offer bundled packages that combine digital marketing campaigns with CRM, automation, and SaaS deployment for a complete growth stack.',

    },

    {

      question: 'Do you offer agency partnership programs?',

      answer: 'Yes, agencies can white-label our digital marketing and SaaS services. Visit our Partner With Us page for details.',

    },

    {

      question: 'How do I get a quote for my project?',

      answer: 'Contact us via the contact form, call +91 93928 98733 or +91 9390168733, or WhatsApp us. We provide free consultations and custom proposals.',

    },

    {

      question: 'What support do you provide after launch?',

      answer: 'We offer ongoing campaign optimization, SaaS maintenance, monthly reports, and 24/7 WhatsApp support based on your plan.',

    },

    {

      question: 'How long does a typical project take?',

      answer: 'Marketing campaigns launch within days. Custom SaaS products range from 4-12 weeks depending on scope. Automation and CRM setups typically take 1-3 weeks.',

    },

  ];



  return (

    <div className="min-h-screen bg-white pt-20">

      <div className="bg-brand text-white py-16">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <HelpCircle className="w-16 h-16 mx-auto mb-4" />

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>

          <p className="text-xl text-brand-foreground/85">

            Answers about our digital marketing and SaaS services

          </p>

        </div>

      </div>



      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <Card key={index} hover>

              <CardBody className="p-6">

                <div className="flex items-start space-x-4">

                  <div className="w-8 h-8 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-1">

                    <span className="text-brand font-bold">{index + 1}</span>

                  </div>

                  <div className="flex-1">

                    <h3 className="text-lg font-bold text-gray-900 mb-3">

                      {faq.question}

                    </h3>

                    <div className="flex items-start space-x-3">

                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />

                      <p className="text-gray-700 leading-relaxed">

                        {faq.answer}

                      </p>

                    </div>

                  </div>

                </div>

              </CardBody>

            </Card>

          ))}

        </div>



        <Card className="mt-12">

          <CardBody className="p-8 bg-brand-muted text-center">

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>

            <p className="text-gray-700 mb-6">

              Our team is here to help you plan your marketing or SaaS project.

            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">

              <a

                href="tel:+919392898733"

                className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors font-semibold"

              >

                Call: +91 93928 98733

              </a>

              <a

                href="tel:+919390168733"

                className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors font-semibold"

              >

                Call: +91 9390168733

              </a>

              <a

                href="mailto:support@e-tailedindia.com"

                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-semibold"

              >

                Email Us

              </a>

            </div>

          </CardBody>

        </Card>

      </div>

    </div>

  );

}


