import { Shield, Lock, Eye, FileText, AlertCircle } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-brand-foreground/85">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-brand-foreground/70 mt-4">Last Updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardBody className="p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-brand" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Etailed Digital Services Pvt. Ltd. ("Etailed Digital India", "we", "us", or "our") is
                committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our multi-service digital platform,
                website, mobile application, and related services (collectively, the "Services").
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our Services, you agree to the terms of this Privacy Policy. If you
                do not agree with the terms, please do not access or use the Services.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-brand" />
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Identity Information:</strong> Name, date of birth, gender, photograph</li>
                  <li><strong>Contact Information:</strong> Email address, phone number, residential and business address</li>
                  <li><strong>KYC Documents:</strong> Aadhaar card, PAN card, voter ID, driving license, bank account details</li>
                  <li><strong>Business Information:</strong> Business name, GST number, trade license, shop establishment certificate</li>
                  <li><strong>Financial Information:</strong> Bank account details, wallet transactions, commission earnings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Device information (model, operating system, unique device identifiers)</li>
                  <li>IP address, browser type, and version</li>
                  <li>Location data (with your permission)</li>
                  <li>Usage data (pages visited, time spent, features used)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Transaction Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Service transaction details (type, amount, date, time, status)</li>
                  <li>Customer information for services (with consent)</li>
                  <li>Payment information (processed securely by payment gateways)</li>
                  <li>Commission and payout records</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>1. Service Delivery:</strong> To process transactions, provide services, manage your account, and fulfill your requests</p>
              <p><strong>2. KYC & Compliance:</strong> To verify your identity, comply with legal requirements, prevent fraud and money laundering</p>
              <p><strong>3. Commission Management:</strong> To calculate, credit, and track commissions and payouts</p>
              <p><strong>4. Communication:</strong> To send transaction confirmations, account updates, support responses, and service announcements</p>
              <p><strong>5. Platform Improvement:</strong> To analyze usage patterns, improve features, develop new services</p>
              <p><strong>6. Marketing:</strong> To send promotional offers, updates about new services (with opt-out option)</p>
              <p><strong>7. Security:</strong> To detect, prevent, and address technical issues, fraud, and security threats</p>
              <p><strong>8. Legal Compliance:</strong> To comply with RBI, NPCI, tax authorities, and other regulatory requirements</p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-brand" />
              Data Security
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption:</strong> 256-bit SSL/TLS encryption for data transmission</li>
                <li><strong>Secure Storage:</strong> Encrypted database storage with regular backups</li>
                <li><strong>Access Control:</strong> Role-based access with two-factor authentication</li>
                <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                <li><strong>Compliance:</strong> Adherence to PCI-DSS, ISO 27001 standards</li>
                <li><strong>Monitoring:</strong> 24/7 system monitoring for suspicious activities</li>
              </ul>
              <p className="mt-4 text-sm bg-warning-muted border border-warning-border rounded-lg p-4">
                <AlertCircle className="w-5 h-5 inline mr-2 text-warning-foreground" />
                <strong>Note:</strong> While we implement robust security measures, no method of transmission
                over the internet is 100% secure. Please keep your login credentials confidential.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <div className="space-y-3 text-gray-700">
              <p><strong>1. Service Providers:</strong> Payment gateways (Razorpay), SMS/email services, KYC verification partners, cloud hosting providers</p>
              <p><strong>2. Banking Partners:</strong> NPCI, BBPS, banks for transaction processing (only necessary information)</p>
              <p><strong>3. Your Network:</strong> Your distributor/super distributor for commission calculation and management</p>
              <p><strong>4. Legal Authorities:</strong> When required by law, court order, or government request</p>
              <p><strong>5. Business Transfers:</strong> In case of merger, acquisition, or sale of assets (with prior notice)</p>
              <p className="mt-4 font-bold">We DO NOT sell your personal information to third parties for marketing purposes.</p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">Under Indian data protection laws, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal information we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing (may limit service access)</li>
            </ul>
            <p className="mt-4 text-gray-700">
              To exercise these rights, contact us at: <strong>support@e-tailedindia.com</strong> or call <strong>+91 8125752562</strong>
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">We retain your information for as long as:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your account is active and you use our Services</li>
              <li>Required for legal, tax, or regulatory compliance (typically 7-10 years for financial records)</li>
              <li>Necessary to resolve disputes and enforce agreements</li>
            </ul>
            <p className="mt-4 text-gray-700">
              After the retention period, we securely delete or anonymize your information.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Keep you logged in and remember your preferences</li>
              <li>Analyze platform usage and improve user experience</li>
              <li>Provide personalized content and recommendations</li>
            </ul>
            <p className="mt-4 text-gray-700">
              You can control cookies through your browser settings. However, disabling cookies may limit
              platform functionality.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our Services are not intended for individuals under 18 years of age. We do not knowingly
              collect information from minors. If you believe a child has provided us with personal
              information, please contact us immediately.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of material changes via
              email or platform notification. The "Last Updated" date at the top indicates when the policy
              was last revised. Continued use of Services after changes constitutes acceptance of the
              updated policy.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-8 bg-brand-muted">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions, concerns, or requests regarding this Privacy Policy or your personal data:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Company:</strong> Etailed Digital Services Pvt. Ltd.</p>
              <p><strong>Address:</strong> Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India</p>
              <p><strong>Email:</strong> support@e-tailedindia.com</p>
              <p><strong>Phone:</strong> +91 8125752562</p>
              <p><strong>WhatsApp:</strong> +91 8125752562</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
