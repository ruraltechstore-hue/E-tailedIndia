import { HelpCircle, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function FAQPage() {
  const faqs = [
    {
      question: 'Do you provide certificates?',
      answer: 'Yes, all students receive an internship certificate, course completion certificate, or PGP diploma depending on the program.',
    },
    {
      question: 'When will I get my internship offer letter?',
      answer: 'Within 7 days of enrollment.',
    },
    {
      question: 'Are the courses online or offline?',
      answer: 'All programs are 100% online and flexible.',
    },
    {
      question: 'Is there job assistance or job guarantee?',
      answer: 'Yes, we provide Job Assistance Program and Job Guarantee Program with clear terms & conditions.',
    },
    {
      question: 'Do you provide e-commerce store setup services?',
      answer: 'Yes, we provide complete store setup, marketplace setup, product listing, automation, and technology support.',
    },
    {
      question: 'Do you offer franchise and affiliate programs?',
      answer: 'Yes, anyone can join and earn commissions on every sale.',
    },
    {
      question: 'Are refunds available?',
      answer: 'All digital products and services are non-refundable.',
    },
    {
      question: 'Can I earn while learning?',
      answer: 'Yes. Students can join our Affiliate Program and earn commissions.',
    },
    {
      question: 'How long do I get access to the course?',
      answer: 'Access varies based on the program — typically 6 months to lifetime.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-brand-foreground/85">
            Find answers to common questions about our programs and services
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
              Our team is here to help! Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918125752562"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors font-semibold"
              >
                Call: +91 8125752562
              </a>
              <a
                href="mailto:etaileddigitalservicespvtltd@gmail.com"
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
