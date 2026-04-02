import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Etailed Digital India?',
      answer:
        'Etailed Digital India is a comprehensive multi-service digital platform offering 114+ services including AEPS, DMT, BBPS, recharge, bill payments, insurance, loans, travel booking, e-commerce, education, and government services. We empower retailers, distributors, and entrepreneurs to start their own digital business.',
    },
    {
      question: 'How do I become a retailer?',
      answer:
        'Click on "Become Retailer" and complete the registration with your Aadhaar, PAN, and bank details. Pay the one-time registration fee of ₹10,000. Complete KYC verification, and you\'ll receive your login credentials, certificate, and ID card within 24 hours.',
    },
    {
      question: 'What documents are required for KYC?',
      answer:
        'You need: 1) Aadhaar Card (for identity proof), 2) PAN Card (mandatory for financial services), 3) Bank Account Details (for wallet and payouts), 4) Recent photograph, 5) Address proof (utility bill/rental agreement), and 6) GST registration (optional, for higher limits).',
    },
    {
      question: 'How does the commission system work?',
      answer:
        'We have a multi-level commission structure. As a retailer, you earn commission on every transaction. Distributors earn from their retailers, Super Distributors earn from distributors, and so on. Commissions are automatically credited to your wallet in real-time.',
    },
    {
      question: 'What is the earning potential?',
      answer:
        'Earnings depend on transaction volume. A typical retailer can earn ₹15,000-50,000 per month. Distributors managing 20-50 retailers can earn ₹50,000-2,00,000 monthly. Super Distributors with larger networks earn ₹2,00,000+ per month. Your income grows with your network.',
    },
    {
      question: 'How do wallet and payouts work?',
      answer:
        'Your digital wallet shows real-time balance. Add money via UPI, Net Banking, or request top-up from your distributor. All commissions are auto-credited. Withdraw anytime to your bank account - payouts processed within 24 hours via RazorpayX.',
    },
    {
      question: 'What services can I offer to customers?',
      answer:
        'You can offer all 114+ services: Banking (AEPS, DMT, Mini ATM), Recharge & Bills (Mobile, DTH, Electricity, Gas, Water), Insurance (Health, Life, Motor), Loans (Personal, Business, Mudra), Travel (Train, Bus, Flight), Government services (Aadhaar, PAN, Certificates), E-commerce affiliates, and more.',
    },
    {
      question: 'Do I need a physical shop?',
      answer:
        'No, you don\'t need a physical shop. You can operate from home, a small kiosk, or even mobile. However, having a visible location helps attract more customers. Many successful retailers operate from small spaces of 100-200 sq ft.',
    },
    {
      question: 'What equipment do I need?',
      answer:
        'Basic requirements: 1) Android smartphone or computer with internet, 2) Fingerprint scanner (₹2,000-4,000) for AEPS, 3) Printer for receipts (optional but recommended), 4) Internet connection (broadband or mobile data). Total investment including registration: ₹15,000-20,000.',
    },
    {
      question: 'Is training provided?',
      answer:
        'Yes! We provide comprehensive training: 1) Video tutorials for all services, 2) Live training sessions via Zoom, 3) Training materials and manuals, 4) Dedicated support team, 5) WhatsApp group for doubts, 6) Regular webinars on new features. Support is available 24/7.',
    },
    {
      question: 'How is this different from CSC or other portals?',
      answer:
        'Unlike CSC which focuses only on government services, we offer 114+ services across 9 categories. We have lower investment (₹10,000 vs ₹50,000+), better commission structure, multi-level earning opportunity, instant wallet, white-label options, and 24/7 support.',
    },
    {
      question: 'Can I create my own branded portal?',
      answer:
        'Yes! With our White Label package (₹80,000), you get your own branded portal with custom domain, logo, and colors. Manage your own retailers and distributors. Control commission structure. We handle all technical aspects while you build your brand.',
    },
    {
      question: 'What about AEPS and DMT limits?',
      answer:
        'AEPS: ₹10,000 per transaction, unlimited transactions per day (subject to customer Aadhaar limit). DMT: ₹25,000 per transaction, ₹2,00,000 per month per sender. Limits can be increased after 3 months of good transaction history and completing enhanced KYC.',
    },
    {
      question: 'How do I handle customer complaints?',
      answer:
        'For transaction issues: 1) Check transaction status in dashboard, 2) Raise ticket through support system, 3) Contact support on WhatsApp +91 8125752562, 4) Resolution within 24-48 hours. Refunds are processed within 7 working days for failed transactions.',
    },
    {
      question: 'Is there any monthly or renewal fee?',
      answer:
        'No! It\'s a one-time investment. No monthly fees, no renewal charges, no hidden costs. You keep earning forever. We only earn when you earn - through the platform fee on transactions, which is already calculated in the commission structure.',
    },
    {
      question: 'Can I upgrade from Retailer to Distributor?',
      answer:
        'Yes! After 3 months as an active retailer with good transaction volume, you can upgrade to Distributor by paying the difference (₹5,000). Similarly, you can upgrade to Super Distributor and even White Label partner based on performance.',
    },
    {
      question: 'What about government scheme services?',
      answer:
        'We provide quicklinks to 20+ central and state government schemes. Help customers apply for PM Kisan, Ayushman Bharat, Mudra loans, scholarships, certificates, etc. While we provide the information and links, actual approval depends on government departments.',
    },
    {
      question: 'How secure is the platform?',
      answer:
        'We use bank-grade security: 256-bit SSL encryption, two-factor authentication, secure APIs from certified providers (NPCI, BBPS, etc.), regular security audits, data backup, and compliance with all RBI and NPCI guidelines. Your money and data are completely safe.',
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
            Everything you need to know about starting your digital business
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
            Our support team is available 24/7 to help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/918125752562', '_blank')}
              className="px-6 py-3 bg-white text-brand font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              WhatsApp: +91 8125752562
            </button>
            <button
              onClick={() => (window.location.hash = '#contact')}
              className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Email: support@e-tailedindia.com
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
